import { Nullable } from "tsdef";
import axios from "axios";
import { OutputChange } from "fuels";
import BN from "./BN";

type TGetInputsResult = {
    archiveHeight: number,
    nextBlock: number,
    outputs: Array<OutputChange>,
}

export default async function fetchOutputsFromEnvio(
  fromBlock: number,
  toBlock: number,
): Promise<Nullable<TGetInputsResult>> {
    const request = {
        "from_block": fromBlock,
        "to_block": toBlock,
        "outputs": [{ "output_type": [2] }],
        "field_selection": {
            "transaction": ["id", "status", "time"],
            "output": [
                "tx_id",
                "block_height",
                "output_type",
                "to",
                "amount",
                "asset_id",
            ]
        }
    }

    const indexerData = await axios.post("https://fuel-15.hypersync.xyz/query", request).then(response => response.data);
    const failedTxIds = indexerData.data.flatMap(({ transactions }: any) => transactions.filter(({ status }: any) => status != 3).map(({ id }: any) => id));
    const rawOutputs = indexerData.data.flatMap(({ outputs }: any) => outputs);

    const outputs = rawOutputs
        .filter((input: any) => failedTxIds.includes(input.tx_id))
        .map((input: any) => ({
            txId: input.tx_id,
            outputType: input.output_type,
            amount: new BN(input.amount),
            to: input.to,
            assetId: input.asset_id,
        }));
        // } as OutputChange & { data: string }));

    return {
        archiveHeight: indexerData.archive_height,
        nextBlock: indexerData.next_block,
        outputs,
    }
}

import SpotOrder from "../models/spotOrder";
import CreateOrderEvent from "../models/createOrderEvent";
import isEvent from "../utils/isEvent";
import {Contract, TransactionResultReceipt} from "fuels";
import {decodeProxyReceipts} from "../decoders/decodeProxyReceipts";

export async function handleProxyReceipts(
  receipts: TransactionResultReceipt[],
  abi: Contract,
) {
    const decodedEvents = decodeProxyReceipts(receipts, abi);

    for (const event of decodedEvents) {
        if (!event) {
            continue;
        }

        if (isEvent("CreateOrderEvent", event, abi)) {
            await CreateOrderEvent.create({ ...event });

            const [order, created] = await SpotOrder.findOrCreate({
                where: { predicate_root: event.predicate_root },
                defaults: { ...event },
            });

            if (created) {
                // const baseBalance = await abi.provider.getBalance(event.predicate_root, event.base_asset);
                // await order.set('base_amount', baseBalance).save();
                // const quoteBalance = await abi.provider.getBalance(event.predicate_root, event.quote_asset);
                // await order.set('quote_amount', quoteBalance).save();
            }
        }
    }
}

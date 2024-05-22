import SpotOrder from "../models/spotOrder";
import SpotOrderChangeEvent from "../models/spotOrderChangeEvent";
import { OutputChange } from "fuels";

export async function handleProxyOutputs(outputs: Array<OutputChange>) { 
    const orders = await SpotOrder.findAll({
        where: { predicate_root: outputs.map(i => i.to) },
    });

    for (const order of orders) {
        const output = outputs.find(o => o.to === order.dataValues.predicate_root);

        if (!output) {
            continue;
        }

        // const changeEventValues = {
        //     predicate_root: output.to,
        //     old_base_amount: order.dataValues.base_amount,
        //     new_base_amount: order.dataValues.base_amount,
        //     old_quote_amount: order.dataValues.quote_amount,
        //     new_quote_amount: order.dataValues.quote_amount,
        // };
        //
        // if (output.assetId === order.dataValues.base_asset) {
        //     await order.set('base_amount', output.amount.toString()).save();
        //     changeEventValues.new_base_amount = output.amount.toString();
        // } else if (output.assetId === order.dataValues.quote_asset) {
        //     await order.set('quote_amount', output.amount.toString()).save();
        //     changeEventValues.new_quote_amount = output.amount.toString();
        // }
        //
        // await SpotOrderChangeEvent.create(changeEventValues);
    }
}

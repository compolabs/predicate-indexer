import Sequelize from 'sequelize';
import sequelize from '../db';

const CreateOrderEvent = sequelize.define('createOrderEvent', {
    predicate_root: { type: Sequelize.STRING },
    maker: { type: Sequelize.STRING },
    price: { type: Sequelize.STRING },
    base_asset: { type: Sequelize.STRING },
    quote_asset: { type: Sequelize.STRING },
    base_amount: { type: Sequelize.STRING },
    order_type: { type: Sequelize.STRING },
    min_fulfill_base_amount: { type: Sequelize.STRING },
});

export default CreateOrderEvent;

import Sequelize from 'sequelize';
import sequelize from '../db';

const SpotOrder = sequelize.define('spotOrders', {
    predicate_root: { type: Sequelize.STRING },
    maker: { type: Sequelize.STRING },
    price: { type: Sequelize.STRING },
    base_asset: { type: Sequelize.STRING },
    quote_asset: { type: Sequelize.STRING },
    base_amount: { type: Sequelize.STRING },
    quote_amount: { type: Sequelize.STRING },
    order_type: { type: Sequelize.STRING },
    min_fulfill_base_amount: { type: Sequelize.STRING },
    timestamp: { type: Sequelize.DATE },
});

export default SpotOrder;

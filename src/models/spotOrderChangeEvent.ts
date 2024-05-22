import Sequelize from 'sequelize';
import sequelize from '../db';

const SpotOrderChangeEvent = sequelize.define('spotOrderChangeEvents', {
    predicate_root: { type: Sequelize.STRING },
    new_base_amount: { type: Sequelize.STRING },
    new_quote_amount: { type: Sequelize.STRING },
    timestamp: { type: Sequelize.DATE },
});

export default SpotOrderChangeEvent;

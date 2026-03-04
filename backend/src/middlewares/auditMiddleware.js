const { audits } = require('../data/store');

const auditMiddleware = (action) => (req, res, next) => {
    const userId = req.body.user_id || req.params.id || 'unknown';
    audits.push({ user_id: userId, action, status: 'pending', timestamp: new Date() });
    next();
};

module.exports = auditMiddleware;
const { users, audits } = require('../data/store');
const { v4: uuidv4 } = require('uuid');

const createUser = (req, res) => {
    const { first_name, last_name, email, phone } = req.body;
    const user = { id: uuidv4(), first_name, last_name, email, phone, status: 'pending', risk_score: 0 };
    users.push(user);
    audits.push({ user_id: user.id, action: 'create_user', status: 'success', timestamp: new Date() });
    res.status(201).json(user);
};

const getUser = (req, res) => {
    const user = users.find(u => u.id === req.params.id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
};

module.exports = { createUser, getUser };
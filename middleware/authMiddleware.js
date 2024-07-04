const jwt = require('jsonwebtoken');

exports.verifyUser = (req, res, next) => {
    const token = req.headers['x-access-token'];
    if (!token) {
        return res.status(403).send({ message: 'No token provided' });
    }

    jwt.verify(token, 'secret', (err, decoded) => {
        if (err) {
            return res.status(500).send({ message: 'Failed to authenticate token' });
        }
        req.user = decoded;
        next();
    });
};

exports.verifyAdmin = (req, res, next) => {
    this.verifyUser(req, res, () => {
        if (req.user.username !== 'admin') {
            return res.status(403).send({ message: 'Requires admin role' });
        }
        next();
    });
};

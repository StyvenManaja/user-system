const helloService = require('../services/helloService');

const sayHello = (req, res) => {
    const message = helloService(req.name);
    res.json({ message: message });
}

module.exports = sayHello;
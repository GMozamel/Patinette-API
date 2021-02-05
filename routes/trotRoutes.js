const trotController = require('../controllers/trot');

module.exports = (app) =>{
    app.post('/api/trot', trotController.create);

    app.get('/api/trot', trotController.fetch);

    app.put('/api/trot/:id',trotController.update);
};
const fastify = require('fastify');
const mongoose = require('mongoose');

const app = fastify();
const trotRoutes = require('./routes/trotRoutes');

try {
    mongoose.connect('mongodb+srv://Mozamel:swnATAtfPf6dgpK@patinette.xkdij.mongodb.net/main?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
}catch(err){
    throw new Error(err);
}

trotRoutes(app);

app.listen(3000, (err, address) => {
    if (err){
        console.error(err);
        process.exit(1);
    }
    console.log(`Server running on ${address}`);
});


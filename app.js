const mongoose = require ('mongoose');

mongoose.connect('mongodb://localhost/playgeound')
    .then(()=> console.log('connected to mongodb..'))
    .catch(err=> console.log('not connected to mongodb..', err));
import mongoose from 'mongoose';
const connection = 'mongodb://localhost/Instagram';

mongoose.Promise = global.Promise;

export const db = (() => {
    mongoose.connect(connection, {
        useMongoClient: true
    })
        .then(() => {
            console.log('Mongoose is up and ready!')
        })
        .catch(console.log);
})();
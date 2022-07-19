const mongoose = require('mongoose');
const connectToDatabase = () => {
  mongoose
    .connect(
      'mongodb+srv://admin:admin@character.kzprk.mongodb.net/?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    )
    .then(() => {
      console.log('MongoDB has been connected');
    })
    .catch((error) => {
      return console.log(`Connection to database ERROR: ${error}`);
    });
};

module.exports = connectToDatabase;

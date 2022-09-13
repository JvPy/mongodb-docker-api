import mongoose from 'mongoose';

const connectToDatabase = async () => {
  const mongoDB = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;

  mongoose.connect(mongoDB);

  const db = mongoose.connection;

  // Bind connection to error event (to get notification of connection errors)
  db.on('error', console.error.bind(console, 'MongoDB connection error:'));
};

export default connectToDatabase;

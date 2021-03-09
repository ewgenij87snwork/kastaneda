import mongoose from 'mongoose';
import dotenv from 'dotenv';

//Set up mongoose connection
dotenv.config();
const uri = process.env.DB_URI;
const db = mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => {
    console.log('MongoDB connect')
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'MongoDB connection error:'));
  })
  .catch(err => {
    console.error('App starting error:', err.stack);
  });

export default db;
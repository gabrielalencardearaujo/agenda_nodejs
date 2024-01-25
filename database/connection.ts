import mongoose from 'mongoose';

async function connectionDB() {
  return await mongoose.connect(process.env.URI_DB || '')
}

export default connectionDB;
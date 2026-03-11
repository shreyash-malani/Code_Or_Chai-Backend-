import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js';

const  connectDB = async() => {
    try{ //mongoose always return a object so we store it in a variable name db_instance
        const db_instance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`DB Connected:  ${db_instance.connection.host}`);
    }
    catch(error) {
        console.error("ERROR: ", error);
        process.exit(1);
    }
}
export default connectDB; 

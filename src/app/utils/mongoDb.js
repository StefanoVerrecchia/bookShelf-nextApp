import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config({ path: './config.env' });
const DATABASE = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

const connetcToDb = async () =>{
    try{
        await mongoose.connect(DATABASE);
        console.log('CONNECT to DB');
    }catch(error){
        console.log('CONNECT to DB failed : ');
        console.log(error);

    }
}
export default connetcToDb;
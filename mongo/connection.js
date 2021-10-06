import dotenv from 'dotenv'
import {MongoClient} from 'mongodb';

dotenv.config();

const uri = process.env.MONGODB;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// client.connect(async err => {
//     const inventors = await client.db(DB_TP2).collection(COLLECTION_INVENTORS).find().toArray();
//     // perform actions on the collection object
//     console.log(inventors);
//     client.close();
// });

let intance = null;

async function getConnection(){
    if(intance == null){
        intance = client.connect();
    }
    return intance;
}

export {getConnection}
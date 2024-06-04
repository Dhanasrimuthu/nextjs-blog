import { MongoClient } from "mongodb";
export default async function handler(req,res){
    if(req.method === 'POST'){
        const {email , name , message} =req.body;
        if(!email||!name||!message||!email.includes('@') ||name.trim() === '' || message.trim()=== ''){
            res.status(422).json({message:"Invaild Input!"});
            return;
        }
    
        const newMessage = {
            email,
            name ,
            message ,
        };
        // console.log(newMessage);
        let client;
        // const connectString=`mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.rk566pi.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority&appName=${process.env.mongodb_clustername}`
       try {
        client=await MongoClient.connect(`mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.rk566pi.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority&appName=${process.env.mongodb_clustername}`)
        
       } catch (error) {
        res.status(500).json({message :error.message ||'Connection failed'});
        console.log('Connection failed')
        return;
       }
       const db =client.db();
       try {
        const result=await db.collection('message').insertOne(newMessage);
        newMessage.id=result.insertedId;
       } catch (error) {
        client.close();
        res.status(500).json({message :error.message ||'insertion failed'});
        console.log('Connection failed')
        return;
       }
       client.close();
       res.status(201).json({message:"Successfully Enter into Database", message:newMessage});

    } 
}

const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 5000;

// middle wares
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.7k8mkis.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run(){
    try{

    }
    finally{
        const serviceCollection = client.db('foodService').collection('services');
    }

}
run().catch(err => console.error(err));


app.get('/', (req, res) =>{
    res.send('food delivery service is running')
})

app.listen(port, () =>{
    console.log(`food delivery service is running on ${port}`);
})
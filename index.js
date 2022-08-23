const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors');
require('dotenv').config()
const app = express();



const port = process.env.PORT || 27019;


app.use((cors));
app.use((express.json));

const uri =
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.bspypsw.mongodb.net/?retryWrites=true&w=majority`;
  console.log(uri);
  console.log(process.env.DB_USER, process.env.DB_PASSWORD);

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {

  try {
    await client.connect();
    console.log('database connected');
    const serviceCollection = client.db('doctor_portals').collection('services');
    app.get('/service',async(req,res)=>{
        const query={};
        const cursor= serviceCollection.find(query);
        const services = await cursor.toArray();
        res.send(services);

    })

   


  }
  finally {
    await client.close();
  }

}
run().catch(console.dir);

app.get('/', (req, res) => {
  res.send('Hello World Dcd \projectsoctor!')
})

app.listen(port, () => {
  console.log(`Doctor app listening on port ${port}`)
})
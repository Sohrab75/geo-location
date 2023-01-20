let express = require('express');
let app = express();
let port = 9310;
let cors = require('cors');
let mongo = require('mongodb');
let MongoClient = mongo.MongoClient;
let mongoUrl ="mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.2"
let db;
app.use(cors())


app.get('/',(req,res) => {
    res.send('Hii from express')
})

// get all category
app.get('/category/:id',(req,res) => {
    console.log(req.params.id)
    let category_id = Number(req.params.id)
    db.collection('category').find({category_id:category_id}).toArray((err,data) => {
        if(err) throw err;
        res.send(data)

    })
})


// get all products
app.get('/products',(req,res) => {
    db.collection('products').find().toArray((err,data) => {
        if(err) throw err;
        res.send(data)
    })
})

//Connection with db
MongoClient.connect(mongoUrl,(err,client) => {
    if(err) console.log('Error While Connecting');
    db = client.db('GroceryData') // database name
    app.listen(port,(err) => {
        if(err) throw err;
        console.log(`Server is running on port ${port}`)
    })
})


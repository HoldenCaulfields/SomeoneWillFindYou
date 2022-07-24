const mongodb = require('mongodb');
const express = require('express');
const app = express();
const path = require('path');


app.use(express.static(path.join(path.resolve('../'), 'client')));
app.use(express.urlencoded({extended: true}));
app.use(express.json({limit: '100kb'}));

app.get('/', (req, res) => {
    res.sendFile(path.join(path.resolve('../'), 'client/index.html'));
});

app.post('/user', (req,res) => {
    console.log(req.body);
});

//get info username, address form the client:
/* var info = {
    username: '',
    address: '' 
} */

// app.post('/', (req, res) => {
//     info.username = req.body.name;
//     info.address = req.body.address;

//     /* const url = 'mongodb+srv://holden:trungthuc2k@caulfield.4yzsnei.mongodb.net/?retryWrites=true&w=majority';
//     mongodb.connect(url, (err, data) => {
//         if (err) throw err;
//         console.log("database connected");

//         var datamongo = data.db('Caulfield');

//         const myobj = {_id: Math.round(Math.random()*100), name: username, pass: address};
//         datamongo.collection('customers').insertOne(myobj, (err, res) => {
//             if (err) throw err;
//             console.log("1 record inserted");
//             data.close();
//         });
//     }); */
//     //res.send(username);

//     //console.log(req.body);
//     res.redirect('/');
//     res.end();
// });
 
// app.get('/api', (req, res) => {
//     res.send(info);
// });

app.post('/api2', (req, res) => {
    //console.log("test api2");
    //console.log(req.body);

    const data = req.body.address;
    res.json({
        address: data
    });
});



app.listen(3000, ()=> console.log('app running on port 3000'));
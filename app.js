var express = require('express');
var cors = require('cors');
var app = express();

// var bodyParser = require('body-parser');

app.use(cors({
    origin: '*'
}));

app.options('*', cors({
    origin: '*'
}));

app.use(express.json({ limit: '10kb'}));

app.post('/bfhl', (req, res, next) => {
    let array = req.body.array;

    array.forEach(element => {
        if(isNaN(element)){
            return res.status(422).json({
                is_succcess: false, 
                user_id: "pratham_vishwakarma_26012000",
            })
        }
    });

    let odd = [];
    let even = [];
    // console.log(array);
    array.forEach(element => {  
        if((element*1)%2 == 0){
            even.push(element*1);
        }else{
            odd.push(element*1);
        }
    })

    res.status(200).json({
        is_succcess: true,
        user_id: "pratham_vishwakarma_26012000",
        odd_numbers: odd,
        even_numbers: even
    })
})
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Server Started on Port 4000');
})
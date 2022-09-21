
import express from 'express';

import longestWord from './bootcamp/longestWord.js';
import shortestWord from './bootcamp/shortestWord.js';
import totalPhoneBill from './bootcamp/totalPhoneBill.js';
import enoughAirtime from './bootcamp/enoughAirtime.js'

const app = express();

app.use(express.static('public'));


//Create middleware 
app.use(express.urlencoded({extended:false}))
app.use(express.json())

//Start APIs
app.get('/api/word_game', (req, res) => {

    const sentence = req.query.sentence;

    if(!sentence){
        res.json({
            error : 'Please insert a sentence'
        })
    }
    
    res.json({
        'message' : sentence.toLowerCase(),
        'longestWord' : longestWord(sentence),
        'shortestWord' : shortestWord(sentence),
        'sum' : sentence.length
    });
});

app.get("/api/phonebill/total", function (req, res) {  const bill = req.query.myBill;  res.json({
    //   call : 2.75,
    //   sms : 0.65
    "bill": totalPhoneBill(bill) 
 });
});

//Get the bill object from API
app.get('/api/phonebill/price', (req, res) => {
  //     // res.json({
  //     //     'total' :totalPhoneBill(myBill)
  //     // })
});

//  let available = 0
app.post("/api/enoughAirtime", function (req, res) {
  const { airtimeUsage, availableAmount } = req.body;  // const airtimeUsage = req.query.airtimeUsage
  // const available = req.query.available
  // console.log(reg.body)
  console.log(enoughAirtime(airtimeUsage, availableAmount))
  res.json({
    result: enoughAirtime(airtimeUsage, availableAmount)
  });
});

const PORT = process.env.PORT || 6007;
// app.listen(PORT, () => console.log(`listen on PORT ${PORT}...`));
app.listen(PORT, function () {
  console.log('api started on port', PORT)
});



import  express from 'express';

import longestWord from './bootcamp/longestWord.js'
import shortestWord from './bootcamp/shortestWord.js'
import wordLengths from './bootcamp/wordLengths.js'
import totalPhoneBill from './bootcamp/totalPhoneBill.js'
import enoughAirtime from './bootcamp/enoughAirtime.js'
import transportFee from './bootcamp/transportFee.js'

const app = express();

app.use(express.static('public'));

app.get('/api/word_game', function (req, res){
    const sentence = req.query.sentence;
console.log(sentence)
    if(!sentence){
        res.json({
        error : 'Please send in a sentence to analyse'
        })
    }
    
    res.json({
        "longestWord" : longestWord(sentence),
        "shortestWord" : shortestWord(sentence),
        "sum" : wordLengths (sentence)
    });
});

app.get('/api/phone_bill', function (req, res){
    const totalPhoneBill = req.query.totalPhoneBill;
console.log(airtimeMessage)
    
    res.json({
        "totalPhoneBill" : airtimeUsage(airtimeMessage),

    
    });
});

app.get('/api/enough_airtime', function (req, res){
    const enoughAirtime = req.query.availableAmount;
console.log(availableAmount)
    
    res.json({
        "enoughAirtime" : airtimeUsage(availableAmount),

    
    });
});

const PORT = process.env.PORT || 6007;
app.listen (PORT,function(){
    console.log('api started on port', PORT)
})






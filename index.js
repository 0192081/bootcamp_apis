
import  express from 'express';

import longestWord from './bootcamp/longestWord.js'
import shortestWord from './bootcamp/shortestWord.js'
import wordLengths from './bootcamp/wordLengths.js'
import totalPhoneBill from './bootcamp/totalPhoneBill.js'
import transportFee from './bootcamp/transportFee.js'
import enoughAirtime from './bootcamp/enoughAirtime.js'

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

const PORT = 6007;
app.listen (PORT,function(){
    console.log('api started on port', PORT)
})






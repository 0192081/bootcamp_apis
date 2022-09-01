export default  function wordLengths(words){
    var splitword = words.split(" ");
    var wordLeng = splitword.map(w => w.length);
    let sum = 0;
    for(var i=0;i<wordLeng.length;i++){
      sum += wordLeng[i];
    }
    
 return sum;
  }
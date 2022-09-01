export default function longestWord(longword){
  var splitlongword = longword.split(" ");
  let maxLength = 0;
  let results="";
  for(var i=0;i<splitlongword.length;i++){
    var newsplitlongword = splitlongword[i];
    if(newsplitlongword.length>=maxLength){
      maxLength = newsplitlongword.length;
      results= newsplitlongword;
    }
  }
  return results;
}
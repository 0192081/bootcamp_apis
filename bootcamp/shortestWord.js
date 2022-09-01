export default function shortestWord(shortword){
    var splitshortword = shortword.split(" ");
    let results = splitshortword[0];
    for (var i=0;i<splitshortword.length;i++){
      var newsplitshortword = splitshortword[i];
      if(newsplitshortword.length<=results.length){
        results = newsplitshortword;
      }
    }
    return results;
}

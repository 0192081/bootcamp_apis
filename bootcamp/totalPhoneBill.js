function totalPhoneBill(myBill){
    //var call=2.75;
    //var sms=0.65;
    var totalCost=0;
    var cost=myBill.split(", ");
    for(var i=0; i<cost.length; i++){
      /*var billCost = cost[i].trim()*/
      if(cost[i].startsWith("call")){
        totalCost+=2.75
      }else{totalCost+=0.65};
    }
  return "R" +totalCost.toFixed(2);} 
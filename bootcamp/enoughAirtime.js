export default function enoughAirtime(airtimeUsage,totalAmountAvail){
    var totalAirtimeUsage = airtimeUsage.split(',')
    //var callDataAndSmses = 0;
    //let amount = totalAmountAvail -= callDataAndSmses
    let calls = 0;
    let msg = 0;
    let dataUsage = 0;
    for(var i= 0; i<totalAirtimeUsage.length; i++){
      var totalAirtimeUsage2 = totalAirtimeUsage[i].trim()
      if( totalAirtimeUsage2=="call"){
        calls+=1.88;
        }
      else if( totalAirtimeUsage2== "sms"){
        msg+=0.75;
      }else if ( totalAirtimeUsage2=="data"){
        dataUsage +=12
      }
    }
    let sum=calls+msg+dataUsage
    let remaining=totalAmountAvail-sum
    if(remaining<=0)
      return "R0.00"
    else 
      return "R" + remaining.toFixed(2)
  }
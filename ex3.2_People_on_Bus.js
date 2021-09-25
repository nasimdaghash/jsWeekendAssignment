/*
result = arr.reduce((a, [wentOn, wentOff]) => {
    return a + wentOn - wentOff;
});
*/
/*
let number = function(busStops){
    let peopleIn = 0;
    let peopleOut = 0;
      for (let i=0; i<busStops.length; i++) {
        peopleIn += busStops[i][0];
        peopleOut += busStops[i][1];
    }
    return peopleIn - peopleOut;
  }

  let busStops = [[2,5],[5,1],[3,1]];
  console.log(number);
  */
let number = function(busStops){
    let onBus = 0;
    let offBus = 0;
    for(let i = 0; i < busStops.length; i++){
      onBus += busStops[i][0];
      offBus += busStops[i][1];
    }
    return onBus - offBus;
  }
  
 console.log(number([[10,0],[3,5],[5,8]]));
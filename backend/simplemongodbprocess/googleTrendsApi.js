const googleTrends = require('google-trends-api');
function getWordPoint(word)
{
googleTrends.interestOverTime({keyword: word, startTime: new Date('2017-01-01')}, function(err, results) {
  var totalPoint=0;
	  var parsedObject=JSON.parse(results);	  
	  for(var i=0;i<parsedObject.default.timelineData.length;i++)
	  {
	  	var timeObject=parsedObject.default.timelineData[i];
		  totalPoint+=timeObject.value[0];
		  
	  }
	  while(!totalPoint) {}
	  console.log(totalPoint);
	  return totalPoint;
})
}
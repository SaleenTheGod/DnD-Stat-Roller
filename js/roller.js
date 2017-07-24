
function containsTwo15s(stats)
{
	var counter = 0;
	for(var i = 0; i < 6; i++)
	{
		if(stats[i] > 14)
		{
			counter++;
		}
	}

	if(counter > 2)
	{
		return true;
	}
	return false;
}

function removeLowestRoll(rolls)
{
	rolls = rolls.sort(function(a,b) {
		return a - b;
	})
	rolls[0] = 0;
}

function addUpArray(rolls)
{
	var finished = 0;
	for(var i = 0; i < 4; i++)
	{
		finished += rolls[i];
	}
	return finished;
}

var buttonClicked = false;
var stats = [0, 0, 0, 0, 0, 0];
var rolls = [0, 0, 0, 0];

function main()
{
	while(containsTwo15s(stats) === false)
	{
		rolls = [0,0,0,0];
		stats = [0,0,0,0,0,0];

		for(var statFiller = 0; statFiller < 6; statFiller++)
		{
			for(var i = 0; i < 4; i++)
			{
				while(rolls[i] === 0)
				{
					rolls[i] = (Math.floor(Math.random() * 6)+1);
				}
			}
			removeLowestRoll(rolls);
			
			stats[statFiller] = addUpArray(rolls);
			rolls = [0,0,0,0];
		}
	}
	buttonClicked = true;
}

function statsSort(stats)
{
	console.log("statsSort " + stats);
	stats = stats.sort(function(a,b) {
		return a - b;
	})
	console.log("statsSort " + stats);
}

function printOut()
{
	$('.li1').text(stats[0]);
	$('.li2').text(stats[1]);
	$('.li3').text(stats[2]);
	$('.li4').text(stats[3]);
	$('.li5').text(stats[4]);
	$('.li6').text(stats[5]);
}

$(function() {
	$("#statBtn").click( function()
           {
             main();
             printOut();
           }
      );
});

$(function() {
	$("#sortStatBtn").click( function()
           {
             if(buttonClicked === false)
             {
             	alert("Please click the left button first\n\nIf you already have please contact me via reddit.\n/u/Saleen_AF");
             }
             else
             {
             	statsSort(stats);
             	printOut();
      		 }
           }
      );
});
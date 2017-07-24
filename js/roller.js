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
	rolls.sort();
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

function main()
{
	/*
		* roll 4D6, drop the lowest roll
		* MUST have AT LEAST TWO 15s
	*/
	var rolls = [0, 0, 0, 0];
	var stats = [0, 0, 0, 0, 0, 0];

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
					rolls[i] = Math.floor((Math.random() * 6) + 1);
				}
			}//filling up rolls array
			
			removeLowestRoll(rolls);
			
			stats[statFiller] = addUpArray(rolls);
			rolls = [0,0,0,0];
		}
	}
	console.log(rolls);
	console.log(stats);
	//jQuery changing the text of the UL to each stat in stats[6]
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
           }
      );
});

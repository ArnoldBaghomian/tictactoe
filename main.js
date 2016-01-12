var x = true;
var o = false;

$(document).ready(init);

function init(){
   
    $('.box').on('click', turnHandler)
  
    var x = true;
}
function turnHandler(event){
 	 if (x===true){
 	 	if($(this).text() !== 'O' && $(this).text() === ''){
		$(this).text('X')
		$('.turn').text("O's");
			x = false;
	 }
		}	

	 else{
	 	if($(this).text()!=='X' && $(this).text() === ''){
		$(this).text('O')
		$('.turn').text("X's");
		  x = true;	
	}
}
 winner();
}

function winner()
{
	squares = squareMatrix();

	if (rowWin(squares) === 3 ||colWin(squares) === 3 ||diagWin(squares) === 3)
		alert("X Wins !!! ");
	else if (rowWin(squares) === -3 ||colWin(squares) === -3 ||diagWin(squares) === -3)
		alert("O Wins !!! ");
};

function squareMatrix() {

	squares = [];  // an array of 3 arrays 
	
	$(".row").each(function()
	{
		row = [];   // an array of 3 numbers
		$(this).children(".box").each(function()
		{
			val = 0;
			if ($(this).text() === 'X') val = 1;
			if ($(this).text() === 'O') val = -1;
			row.push(val);  
		})
		squares.push(row);  // add this array of three numbers to the array of 3 arrays
	})
	return squares;   // squares is a 3x3 matrix, an array of arrays
}

function rowWin(squares)
{

	for (i = 0; i < 3; ++i) {
		sum = 0;

		for (j = 0; j < 3; ++j)
			sum += squares[i][j];
		if (Math.abs(sum) === 3)
			return sum;
	}

    
   return 0;
}

function colWin(squares)
{
	for (i = 0; i < 3; ++i) {
		sum = 0;
		for (j = 0; j < 3; ++j)
			sum += squares[j][i];
		if (Math.abs(sum) === 3)
			return sum;
	}

	return 0;
}

function diagWin(squares)
{
	sum = 0;
	for (i = 0; i < 3; ++i) {
			sum += squares[i][i];
		}
	if (Math.abs(sum) === 3)
			return sum;
	sum = 0;
	for (i = 0; i < 3; ++i) {
			sum += squares[2-i][i];
		}
	if (Math.abs(sum) === 3)
			return sum;

	return 0;
}



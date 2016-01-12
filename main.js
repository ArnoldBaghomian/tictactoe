var x = true;
var o = false;



$(document).ready(init);

function init(){
   
    $('.box').on('click', turnHandler)
  
    var x = true;

}

function turnHandler(event){
 	 if (x===true){
 	 	console.log("working inside x")
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

function winner(){
         
         if($('#square1').text()   ===  $('#square2').text() && $('#square2').text() !== '' && $('#square2').text() === $('#sqaure3').text()) {alert($('#square1').text() + "Are A Winner !!! ")}
         else if ($('#square1').text() === $('#square4').text() && $('#square4').text() !== '' && $('#square4').text() === $('#square7').text()) {alert($('#square4').text() + "Are A Winner !!! ")}
         else if ($('#square1').text() === $('#square5').text() && $('#square5').text() !== '' && $('#square5').text() === $('#square9').text()) {alert($('#square5').text() + "Are A Winner !!! ")}
         else if ($('#square4').text() === $('#square5').text() && $('#square5').text() !== '' && $('#square5').text() === $('#square6').text()) {alert($('#square5').text() + "Are A Winner !!! ")}
         else if ($('#square7').text() === $('#square8').text() && $('#square8').text() !== '' && $('#square8').text() === $('#square9').text()) {alert($('#square9').text() + "Are A Winner !!! ")}
         else if ($('#square2').text() === $('#square5').text() && $('#square5').text() !== '' && $('#square5').text() === $('#square8').text()) {alert($('#square8').text() + "Are A Winner !!! ")}
         else if ($('#square3').text() === $('#square6').text() && $('#square6').text() !== '' && $('#square6').text() === $('#square9').text()) {alert($('#square8').text() + "Are A Winner !!! ")}
         else if ($('#square3').text() === $('#square5').text() && $('#square5').text() !== '' && $('#square5').text() === $('#square7').text()) {alert($('#square7').text() + "Are A Winner !!! ")}
   }






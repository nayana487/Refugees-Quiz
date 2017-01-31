	$(document).ready(function(){

    //A. Setting variables
    //Setting variable for score, to keep track of progress
    score = 0;


    //b. Functions
    //function to include the visitor's name in the page
    // function askForName(){
    // var visitor = prompt('Hello, visiter! What should I call you?');
    //   if (visitor === "") {
    //     console.log('No Answer');
    //   } else if (visitor === null) {
    //     console.log('No Answer');
    //   } else {
    //     $('.visitorName').text(visitor);
    //   }
    // }
    // setTimeout(askForName, 1000);

    //Function to find if the answer is correct
    // function isAnswerRight(){
    //   // if ( $('input:checked').val() == "correct" )
    //   if (document.getElementById('answer1').checked){
    //     score++;
    //     disableInputs();
    //     showCorrectText();
    //     showForwardBottom();
    //   } else {
    //     disableInputs();
    //     showFalseText();
    //     showForwardBottom();
    //   }
    // }




    //Function to disable inputs after an aanswer
    // function disableInputs(){
    //   $('input').attr('disabled', '');
    // };

    //Function to show the text for the correct answer
    // function showCorrectText(){
    //   $('.correctAnswerText').removeClass('hide');
		// 	$('#q1').append($('#1c'));
    // }

    //Function to show the text for the false answer
    // function showFalseText(){
    //   $('.falseAnswerText').removeClass('hide');
		// 	$('#q1').append($('#1f'));
    // }

    // //Function to show the Next Question button appears
    //  function showForwardBottom () {
    //    $('.forward').removeClass('hide');
    //   };







    //C. Event Listeners
    //Event listener for clicking the answer button
    // $('.answer').on('click', isAnswerRight);
		//
		
    // // Event listener for clicking the next question button
		$('.forward').on('click', function() {
      $(this).parents('section').next().removeClass('hide');
    });





    // People can't choose more than one answer. when someone checks a second box, the previous checked box gets unchecked
    // $('li').on('click', oneAnswer)
		//
		// function oneAnswer(){
		// $('input').each.attr('unchecked');
		// $('input').removeAttr('unchecked');
		// };

  })

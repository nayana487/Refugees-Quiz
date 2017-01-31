	$(document).ready(function(){

    //A. Setting variables
    //Setting variable for score, to keep track of progress
    score = 0;

		//Timer Functionality
		seconds = 0;
	  timerId = 0;

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

		//Function to count the time
		function updateTime(){
			seconds++
			$("#timer").html(`${seconds}`)
		};

    //Function to find the answer value   //Needs Work
		function answerValue(){
			// answerV = $(this).parent().('ul').each('li').('input:checked').val();
			// $(this).prev().('li').('input:checked').val();
			// answerV = $(this).parnets('div').('input:checked').val();
			//   // if ( $('input:checked').val() == "correct" )
			//   if (document.getElementById('answer1').checked){
			answerV = 'ncorrect';
			self = $(this);
			isAnswerRight()
		}

		//Function to find if the answer is right
		function isAnswerRight(){
			if ( answerV === 'correct' ){
				console.log('correct');
				score++;
				console.log(score);
				disableInputs();
				showCorrectText();
				showForwardBottom();
			} else {
				console.log('wrong');
				disableInputs();
				showFalseText();
				showForwardBottom();
			}
		}

    //Function to show the text for the correct answer
    function showCorrectText(){
      console.log(self);
			self.parent().next().removeClass('hide');
			nextSelf = self.parent().next();
			self.parent().append(nextSelf);
    }

    //Function to show the text for the false answer
		function showFalseText(){
			console.log(self);
			self.parent().next().next().removeClass('hide');
			secondNextSelf = self.parent().next().next();
			self.parent().append(secondNextSelf);
		}

     //Function to show the Next Question button appears
     function showForwardBottom() {
       self.next().removeClass('hide');
			 console.log(self);
      };

			//Function to disable inputs after an aanswer button is clicked
	    function disableInputs(){
				console.log(self);
	      self.prev().children().attr('disabled', '');
	    };






    //C. Event Listeners
		//Event listener to start the timer
		$("#begin").on("click", function(){
			timerId = setInterval(updateTime, 1000)
		});

		//Event listener to stop the timer
		$(".finish").on("click", function(){
		  clearInterval(timerId);
		});

    //Event listener for clicking the answer button
		$('.answer').on('click', answerValue);
		// $('.answer').on('click', showForwardBottom);

    // // Event listener for clicking the next question button
		$('.forward').on('click', function() {
      $(this).parents('section').next().removeClass('hide');
    });





		//Function to disable a button once it's clicked





    // People can't choose more than one answer. when someone checks a second box, the previous checked box gets unchecked
    // $('li').on('click', oneAnswer)
		//
		// function oneAnswer(){
		// $('input').each.attr('unchecked');
		// $('input').removeAttr('unchecked');
		// };



  })

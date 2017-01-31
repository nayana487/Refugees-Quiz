	$(document).ready(function(){

    //A. Setting variables
    //Setting variables for answers and score, to keep track of progress
		answerV = '';
		score = 0;

		visitor = 'visitor'

		//Timer Functionality
		seconds = 0;
	  timerId = 0;

		// Cookies Functionality
		setTimeout(checkCookie, 1000);

		//Set Cookie
		function setCookie(cname, cvalue, exdays) {
	    var d = new Date();
	    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	    var expires = 'expires='+d.toUTCString();
	    document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
	  }

		//Get cookie
	  function getCookie(cname) {
	      var name = cname + '=';
	      var ca = document.cookie.split(';');
	      for(var i = 0; i < ca.length; i++) {
	          var c = ca[i];
	          while (c.charAt(0) == ' ') {
	              c = c.substring(1);
	          }
	          if (c.indexOf(name) == 0) {
	              return c.substring(name.length, c.length);
	          }
	      }
	      return '';
	  }

		//Check Coockie
	  function checkCookie() {
	      var user = getCookie('username');
	      if (user != '') {
	          alert('Welcome again ' + user);
						$('.visitorName').text(user);
	      } else {
	          user = prompt('Hello, visiter! What should I call you?', '');
	          if (user != '' && user != null) {
	              setCookie('username', user, 365);
								$('.visitorName').text(user);
	          }
	      }
	  }


    //B. Functions
    //function to include the visitor's name in the page (Replaced)
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

		//Function to uncheck the previous answer, when a user choses a second answer
		function oneAnswer(){
			$(this).siblings().attr('checked', false);
			$(this).attr('checked', true);

		};

    //Function to find the answer value
		function answerValue(){
			self = $(this);
			answerV = self.parents('div').children('p').children('input:radio:checked').val();
			console.log(answerV);
			isAnswerRight()
		}

		//Function to find if the answer is right
		function isAnswerRight(){
			if ( answerV === 'correct' ){
				score++;
				console.log(score);
				disableInputs();
				showCorrectText();
				showForwardBottom();
				self.attr('disabled', '');
			} else {
				console.log(score);
				disableInputs();
				showFalseText();
				showForwardBottom();
				self.attr('disabled', '');
			}
		}

    //Function to show the text for the correct answer
    function showCorrectText(){
      // console.log(self);
			self.parent().next().removeClass('hide');
			nextSelf = self.parent().next();
			self.parent().append(nextSelf);
    }

    //Function to show the text for the false answer
		function showFalseText(){
			// console.log(self);
			self.parent().next().next().removeClass('hide');
			secondNextSelf = self.parent().next().next();
			self.parent().append(secondNextSelf);
		}

     //Function to show the Next Question button
     function showForwardBottom() {
       self.next().removeClass('hide');
			//  console.log(self);
      };

			//Function to disable inputs after an answer button is clicked
	    function disableInputs(){
				console.log(self);
	      self.prev().children().attr('disabled', '');
	    };






    //C. Event Listeners
		//Event listener to start the timer
		$("#begin").on("click", function(){
			timerId = setInterval(updateTime, 1000)
			$(this).attr('disabled', '');
		});

		//Event listener to finish the quiz
		$(".finish").on("click", function(){
		  clearInterval(timerId);
			$(this).attr('disabled', '');
			$('footer').removeClass('hide');
			$("#playerScore").html(`${score}`);
			$("#timer2").html(`${seconds}`);
		});

		// Event listener to allow players to choose only one answer
    $('input').on('change', oneAnswer)

    //Event listener for clicking the answer button
		$('.answer').on('click', answerValue);
		// $('.answer').on('click', showForwardBottom);

    // // Event listener for clicking the next question button
		$('.forward').on('click', function() {
      $(this).parents('section').next().removeClass('hide');
			$(this).attr('disabled', '');
    });


		// Add second player Functionality
		// Make timer count down
		// Make timer count minutes
		// Allow tracking more than one score
		// Add functionality to save result after refreshing the browser
		// Add high score board functionality
		// When someone shows a question, the previous question disappears


		// Fix GitHub pages bug
		// Edit ReadMe file



  })

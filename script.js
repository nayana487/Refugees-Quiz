	$(document).ready(function(){

// ND: Even if you intend for your variables to be global, it's still good practice to use the keyword `var`.
    //A. variables
    //Setting variables for answers and score, to keep track of progress
		answerV = '';
		score = 0;
		//Setting a default visitor's name
		visitor = 'visitor'
		//Timer Functionality, to keep track of time
		seconds = 0;
	  timerId = 0;




    //B. Functions
		// Cookies Functionality for visitor's name (Coockie functionality was copied from http://www.w3schools.com/js/js_cookies.asp)
		// ND: Let's talk about this in person.
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

		// ND: Wouldn't leave dead code on the master branch.
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

		// ND: Your pseudocode is really good. Concise, but clear to see what you're doing.
		//Function to count the time
		function updateTime(){
			seconds++
			$(".timer").html(`${seconds}`)
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
				// ND: Nice work implementing ES6 template literals
				$('.playerScore').html(`${score}`);
				disableInputs();
				showCorrectText();
				showForwardBottom();
				self.attr('disabled', '');
			} else {
				console.log(score);
				$('.playerScore').html(`${score}`);
				disableInputs();
				showFalseText();
				showForwardBottom();
				self.attr('disabled', '');
			}
		}

    //Function to show the text for the correct answer
    function showCorrectText(){
			// ND: It's ok for now to leave the console.logs in. It's great that you're constantly checking to make sure you have the value of `this` that you want
      // console.log(self);
			self.parent().next().removeClass('hide');
			nextSelf = self.parent().next();
			self.parent().append(nextSelf);
    }

    //Function to show the text for the false answer
		function showFalseText(){
			// console.log(self);
			//  ND: Nice work method chaining, this is a great way to DRY up your code. Order matters, but you seem to get that.
			self.parent().next().next().removeClass('hide');
			// ND: I don't see you using this anywhere else. Why make it a global variable?
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
		$('#begin').on('click', function(event){
			$('#Quiz').removeClass('hide');
			timerId = setInterval(updateTime, 1000);
			$(this).addClass('hide');
		});

		//Event listener to finish the quiz
		$('.finish').on('click', function(){
		  clearInterval(timerId);
			$(this).attr('disabled', '');
			$('footer').removeClass('hide');
			$('.playerScore').html(`${score}`);
			$('.timer').html(`${seconds}`);
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


	})

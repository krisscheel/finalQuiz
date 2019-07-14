

$(document).ready(function() { //document ready (waits for HTML to lead before runnning Javascript)

let counter = 0;

	//event listener for click on the "Start Quiz" button
	$(`#startQuiz`).on(`click`, function(event) {
		event.preventDefault();
		$(`#startButtonContainer`).remove();
		$(`#formOne`).show();
		$(`#runningScore`).show();
	});

	//creating a function to check the answer input by the user
	function checkAnswer(input, answer) {
		if (answer == input) {
	 		alert(`You got it: the answer is ${answer}!`);
	 		counter = counter + 1;
	 	} else {
	 		alert(`Sorry, wrong answer. The correct answer is: ${answer}. Moving on to the next question!`);
	 		}
		};

		//event listener for Question 1
		$(`#formOne`).on(`submit`, function(event) {
			//prevent default method on the event, prevents the page from refreshing on submit.
			event.preventDefault();
			//getting the value of the user input, storing it in a variable.
			const $answerOne = $(`input[name=one]:checked`).val();
			//checking the users answer against the correct answer stored
			checkAnswer($answerOne, '25km/hour');
			$(`#counterValue`).text(counter);
			$(`#formOne`).hide();
			$(`#formTwo`).show();
		});

		//event listener for Question 2		
		$(`#formTwo`).on(`submit`, function(event) {
			event.preventDefault();
			const $answerTwo = $(`input[name=two]:checked`).val();
			checkAnswer($answerTwo, '30-100 pounds')
			$(`#counterValue`).text(counter);
			$(`#formTwo`).hide();
			$(`#formThree`).show();
		});

		//event listener for Question 3		
		$(`#formThree`).on(`submit`, function(event) {
			event.preventDefault();
			const $answerThree = $(`input[name=three]:checked`).val();
			checkAnswer($answerThree, '5-6 weeks')
			$(`#counterValue`).text(counter);
			$(`#formThree`).hide();
			$(`#formFour`).show();
			});


		//event listener for Question 4		
		$(`#formFour`).on(`submit`, function(event) {
			event.preventDefault();
			const $answerFour = $(`input[name=four]:checked`).val();
			checkAnswer($answerFour, 'less than one teaspoon')
			$(`#counterValue`).text(counter);
			$(`#formFour`).hide();
			$(`#formFive`).show();
		});

		//event listener for Question 5		
		$(`#formFive`).on(`submit`, function(event) {
			event.preventDefault();
			const $answerFive = $(`input[name=five]:checked`).val();
			checkAnswer($answerFive, 'five years')
			$(`#counterValue`).text(counter);
			$(`#formFive`).hide();
			$(`#startQuiz`).hide();
			$(`#scoreButton`).hide();
			$(`#runningScore`).hide();
			$(`#scoreBoard`).show();

			//Print out the final score on the last page
			$(`#scoreBoard`).html(`You got ${counter} correct.`);
			$(`#scoreBoard`).append("<p>Sadly, over the past 15 years, bee colonies have been disappearing. Do your part! Plant flowers rich in nectar such as lavender and bluebells to help bees find the food they need!</p>")

		});


}); // end of document ready

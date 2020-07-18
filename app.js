$(function(){
	$('#go').click(function(event) {

		//a function to see if a car has won the race

		function handleTimer() {
		  if(count === 0) {
		    clearInterval(timer);
		   	
		   	$('.btn').prop('disabled', true);

			function checkIfComplete() {
				if (didItFinish === false) {
					didItFinish = true;
				} else {
					place = 'second';
					$('.btn').prop('disabled', false);
				}

				$('.finishDiv').fadeIn('fast');
				
			}
			
			//get the width of the cars
			let carWidth = $('.car').width();

			//get the width of the race track
			let raceTrackWidth = $(window).width() - carWidth;

			//generate a random number between 1 and 5000
			let raceTime1 = Math.floor( (Math.random() * 5000) + 1);
			let raceTime2 = Math.floor( (Math.random() * 5000) + 1);

			//set a flag variable to FALSE by default
			let didItFinish = false;
			
			//set a flag variable to FIRST by default
			let place = 'first';

			//animate car1
			$('#car1').animate({
				left: raceTrackWidth},
				raceTime1, function() {

					checkIfComplete();

					$('#raceInfo1 table').prepend(`<tr>
						<td>
						Finished in: <span class="car1Place">${place}</span> place with a 
						time of: <span class="car1Time">${raceTime1}</span> milliseconds!
						</td>
						</tr>`);
					localStorage.setItem('car1Place', place);
					localStorage.setItem('car1Time', raceTime1);
				});

			$('#car2').animate({
				left: raceTrackWidth},
				raceTime2, function() {

					checkIfComplete();

					$('#raceInfo2 table').prepend(`<tr>
						<td>
						Finished in: <span class="car2Place">${place}</span> place with a 
						time of: <span class="car2Time">${raceTime2}</span> milliseconds!
						</td>
						</tr>`);
					
					localStorage.setItem('car2Place', place);
					localStorage.setItem('car2Time', raceTime2);
				});
			$('#countNum').hide();
		  } else {

		    $('#countNum').show();
		    $('#countNum .countCountdown').html(count);
		    count--;
		  }
		}

		let count = 3;
		let timer = setInterval(function() { handleTimer(count); }, 1000);
	});

	$('#reset').click(function() {
		$('.car').css({
			left: '0'
		});

		$('.finishDiv').hide();
	});

	
});


$(window).on('load', function(event) {
	let car1Place = localStorage.getItem('car1Place'),
		car1Time = localStorage.getItem('car1Time'),
		car2Place = localStorage.getItem('car2Place'),
		car2Time = localStorage.getItem('car2Time');

	if (car1Place !== null || car1Time !== null || car2Place !== null || car2Time !== null) {
		$('#raceInfoFromLastTime').show().append(`
		<table class="table">
		<tr>
			<td><span class="car1Name">Car1</span> finished in <span class="car1Place">${car1Place}</span> place, with a time of <span class="car1Time">${car1Time}</span> milliseconds!</td>
		</tr>
		<tr>
			<td><span class="car2Name">Car2</span> finished in <span class="car2Place">${car2Place}</span> place, with a time of <span class="car2Time">${car2Time}</span> milliseconds!</td>
		</tr>
		</table>`);
	}
});




var main = function() {
	setTimeout(function(){
		$('#letter1').addClass('magictime openUpLeftRetourn').removeClass('hidden');
	}, 1000);

	setTimeout(function(){
		$('#letter2').addClass('magictime slideRightRetourn').removeClass('hidden');
	}, 1500);

	setTimeout(function(){
		$('#letter3').addClass('magictime tinRightIn').removeClass('hidden');
	}, 2400);

	setTimeout(function(){
		$('#letter4').addClass('magictime vanishIn').removeClass('hidden');
	}, 900);

	setTimeout(function(){
		$('#letter5').addClass('magictime perspectiveDownRetourn').removeClass('hidden');
	}, 1200);

	setTimeout(function(){
		$('#letter6').addClass('magictime foolishIn').removeClass('hidden');
	}, 800);

	setTimeout(function(){
		$('#letter7').addClass('magictime twisterInUp').removeClass('hidden');
	}, 2100);

	setTimeout(function(){
		$('#letter8').addClass('magictime slideUpRetourn').removeClass('hidden');
	}, 1800);

	setTimeout(function(){
		$('#letter9').addClass('magictime boingInUp').removeClass('hidden');
	}, 3000);

	setTimeout(function(){
		$('#letter10').addClass('magictime puffIn').removeClass('hidden');
	}, 2100);

	setTimeout(function(){
		$('#letter11').addClass('magictime tinUpIn').removeClass('hidden');
	}, 600);

	setTimeout(function(){
		$('#letter12').addClass('magictime spaceInLeft').removeClass('hidden');
	}, 1600);

	setTimeout(function(){
		$('#letter13').addClass('magictime twisterInDown').removeClass('hidden');
	}, 700);

	setTimeout(function(){
		$('#letter14').addClass('magictime perspectiveUpRetourn').removeClass('hidden');
	}, 1400);

	setTimeout(function(){
		$('#letter15').addClass('magictime openDownRightRetourn').removeClass('hidden');
	}, 1700);

	setTimeout(function(){
		$('.sub-text').addClass('magictime vanishIn').removeClass('hidden');
	}, 4000);

};

$(document).ready(main);
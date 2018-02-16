//var user = prompt("Spielername:", "");
$(document).ready(function() {
	var min = 0;
	var max = 590;
	var startzeit = $.now();
	var endzeit = "";
	var left = Math.floor(Math.random() * (max - min)) + min;
	var top = Math.floor(Math.random() * (max - min)) + min;
	$("#suchbox").css("left", left);
	$("#suchbox").css("top", top);
	//$("#suchbox").css("position", "relative");
	$("#timer").TimeCircles();
	$(".aufgeben").click(function() {
		$("#timer").TimeCircles().stop();
		$("#suchbox").fadeOut();
		$("#suchbox").css("background-color", "green");
		$("#suchbox").fadeIn();
		$("#suchbox").addClass("aufgeber");
		$("#response").css("color", "red");
		$("#response").html("Du hast verloren.");
	});
	$("#suchbox").click(function() {
		if($("#suchbox").hasClass("aufgeber")) {
			alert("LOOSER!");
		} else {
			endzeit = $.now();
			$("#timer").TimeCircles().stop();
			alert("WINNER");
			$(".aufgeben").fadeOut();
			$("#spielfeld").fadeOut();
			$("#beenden").fadeIn();
			//window.location.replace("beenden.php?user="+user+"&start="+startzeit+"&ende="+endzeit);
		}
	});
	$("#beenden").click(function() {
		$(location).attr("href", "beenden.php?user="+user+"&start="+startzeit+"&ende="+endzeit);
		//$("#response").html("Du hast gewonnen.");
		//window.location.replace("http://pi.home.local/searchGame/beenden.php?user="+user+"&start="+startzeit+"&ende="+endzeit);
	});
	$(".fadeIn").click(function() {
		$("#timer").fadeIn();
	});
	$(".fadeOut").click(function() {
		$("#timer").fadeOut();
	}); 
});

// JavaScript Document
document.getElementById("company").innerHTML = "Nonsense Story";
document.getElementById("slogan").innerHTML = "Let's tell a tale";
document.getElementById("pageName").innerHTML = "Get creating:";

function story() {
	var nounArray = document.getElementById('nouns').value.toLowerCase().split(/\s+|\n/);
	console.log(nounArray);

	var descriptionArray = document.getElementById('adjectives').value.toLowerCase().split(/\s+|\n/);
	console.log(descriptionArray);

	var actionArray = document.getElementById('verbs').value.toLowerCase().split(/\s+|\n/);
	console.log(actionArray);

	var story = "Once apon a time, 3 "+nounArray[0]+"s went to the forest for a "+descriptionArray[0]+" "+nounArray[1]+". They walked for hours and suddenly they "+actionArray[0]+" a big bear. However, it was busy eating "+nounArray[2]+" and they had time to escape to a "+descriptionArray[1]+" running to  "+actionArray[1]+" their lives. Nevertheless, these 3 "+nounArray[0]+"s knew the day was "+descriptionArray[1]+" and "+descriptionArray[2]+" so they decided it was better to go back and  "+actionArray[2]+" about it."
	document.getElementById('thestory').innerHTML = story;
}


$(document).ready(function(){
	console.log("ready to go!");
	sizedWindows();
	setDefault()
	nextPic();
	prevPic();
	makeItMain();

});

	/*$(".img").on("mousemove", function(event){
		$("#output").text("X: " + event.pageX + "Y: " + event.pageY);
		// console.log(event.pageX, event.pageY);
	});*/
$(window).resize(function(){
	sizedWindows();
});

function sizedWindows(){

	// getting with of side and main divs
	var mainWidth = $(".mainImg").innerWidth();
	var sideWidth = $(".sideImg").innerWidth();

	// making heigth same as width 
	$(".mainImg").css("height", mainWidth);
	$(".sideImg").css("height", sideWidth);
	$(".sideImg").css("top", (mainWidth - sideWidth) / 2);

	// making pictures same size as divs
	$(".sideImg img").css("width", sideWidth);
	$(".mainImg img").css("width", mainWidth);
	if (window.innerWidth < 800){
		console.log("width", mainWidth);
		$("#collection").css("width", mainWidth);

	}
	
};

var picArr = ["bike1", "bike2", "bike3", "bike4", "bike5", "bike6"];
var mainPic, counter;

function setDefault(){
	mainPic = picArr[1];
	counter = 1;
	setMainPic(mainPic);
}

function setMainPic(pic){
	$(".mainImg img").attr("src", "libs/" + pic + ".png");
}

function nextPic(){
	$(".nextSlide").click(function(){
		counter++;
		for (let i=0; i<picArr.length; i++){
			if(counter >= picArr.length){
				counter = 0;
			}; 
			mainPic = picArr[counter];
			setMainPic(mainPic);
		};
		changeRightPic();
		changeLeftPic();
	});
}
function prevPic(){
	$(".prevSlide").click(function(){
		counter--;
		for (let i=0; i<picArr.length; i++){
			if(counter < 0){
				console.log("less");
				counter = picArr.length - 1;
			} 
			mainPic = picArr[counter];
			setMainPic(mainPic);
		};
		changeRightPic();
		changeLeftPic();
	});
}


function changeRightPic(){
		var right = counter + 1;
		if(right == picArr.length){
			right = 0;
		}
		var rightPic = picArr[right];
		$(".rightImg img").attr("src", "libs/" + rightPic + ".png");
};
function changeLeftPic(){
	var left = counter - 1;
	if(left < 0){
		left = picArr.length - 1;
	}
	var leftPic = picArr[left];
	$(".leftImg img").attr("src", "libs/" + leftPic + ".png");

}
function makeItMain(){
	$("#collection img").click(function(){
		var position = this.alt;
		var positionInd;
		for (let i=0; i<position.length; i++){
			positionInd = position[i];
		}
		counter = positionInd - 1;
		setMainPic(picArr[counter]);
		changeLeftPic();
		changeRightPic();

	});
};


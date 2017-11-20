$(document).ready(function(){
	console.log("ready to go!");
	sizedWindows();
	setDefault();
	makeItMain();
	slideOnCell();
	onButtonPressed();
	// keyCode();

	$(".prevBtn, .prevClickArea").click(function(){
		prevPic();
	});
	$(".nextBtn, .nextClickArea").click(function(){
		nextPic();
	});

	$(window).resize(function(){
		sizedWindows();
	});
});

	/*$(".img").on("mousemove", function(event){
		$("#output").text("X: " + event.pageX + "Y: " + event.pageY);
		// console.log(event.pageX, event.pageY);
	});*/		
// setting up default pictures
function setDefault(){
	mainPic = picArr[1];
	counter = 1;
	setMainPic(mainPic);

	$(".prevClickArea").hover(
		function(){
			$(".prevBtn").css("opacity", "1")
		},function(){
			$(".prevBtn").css("opacity", "0.5")
		}
	);
	$(".nextClickArea").hover(
		function(){
			$(".nextBtn").css("opacity", "1")
		},function(){
			$(".nextBtn").css("opacity", "0.5")
		}
	);

}

function slideOnCell(){
	$(".mainContainer").on("mousedown", function(e){
		console.log("moseDown");
		calcCoor();
	});
};
function mouseUp(){
	$(".mainConteiner").on("mouseup", function(e){
		console.log("moseUp");

		slide();
	});
};

function calcCoor(){
	$(".mainContainer").mousemove(function(e){
		$(".output").html("X: " + e.pageX + "Y: " + e.pageY);
	});
};
// show keyCode on pressing buttons
function keyCode(){
	$(window).on("keydown", function(e){
		console.log(e.which);
	});
};

function sizedWindows(){

	// get with of side and main divs
	var mainWidth = $(".mainContainer").innerWidth();
	var sideWidth = $(".sideContainer").innerWidth();

	// make heigth same as width 
	$(".mainContainer").css("height", mainWidth);
	$(".sideContainer").css("height", sideWidth);
	$(".sideContainer").css("top", (mainWidth - sideWidth) / 2);

	// correct height and width of click area
	$(".clickArea").css("height", mainWidth+3);
	$(".clickArea").css("width", mainWidth/2+3);

	// make pictures same size as divs
	$(".sideContainer img").css("width", sideWidth);
	$(".mainContainer img").css("width", mainWidth);
	if (window.innerWidth < 800){
		$("#collection").css("width", mainWidth);
	}
};
var picArr = ["bike1", "bike2", "bike3", "bike4", "bike5", "bike6"];
var mainPic, counter;
// main picture
function setMainPic(pic){
	$(".mainContainer img").attr("src", "libs/" + pic + ".png");
}
// changing pictures functions
// next picture
function nextPic(){
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
}
// previous picture
function prevPic(){
		counter--;
		for (let i=0; i<picArr.length; i++){
			if(counter < 0){
				counter = picArr.length - 1;
			} 
			mainPic = picArr[counter];
			setMainPic(mainPic);
		};
		changeRightPic();
		changeLeftPic();
}
// changing pictures on pressing right/left button func 
function onButtonPressed(){
	$(window).on("keydown", function(e){
		switch(e.which){
		case 39:
			$(".nextBtn").css("opacity", "1");
			$(".prevBtn").css("opacity", "0.5");
			nextPic();	
			break;
		case 37:
			$(".prevBtn").css("opacity", "1");
			$(".nextBtn").css("opacity", "0.5");
			prevPic();
			break;
		}
	});
}
// changing side pictures funcs
// right side picture
function changeRightPic(){
		var right = counter + 1;
		if(right == picArr.length){
			right = 0;
		}
		var rightPic = picArr[right];
		$(".rightContainer img").attr("src", "libs/" + rightPic + ".png");
};
// left side picture
function changeLeftPic(){
	var left = counter - 1;
	if(left < 0){
		left = picArr.length - 1;
	}
	var leftPic = picArr[left];
	$(".leftContainer img").attr("src", "libs/" + leftPic + ".png");

}
// setting up a picture from the collection as a main picture
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


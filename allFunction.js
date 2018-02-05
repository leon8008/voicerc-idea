function getDateAndShow(){
	var result = annyang.isListening();
	console.log(result);
	document.getElementById('geterror').innerHTML = "It's " + result;
}

function showSpeakText(textArray){
	if(textArray){
		if(textArray.length > 0){
			for(var i=0; i<textArray.length; i++){
				document.getElementById('demo').innerHTML = textArray[i];
			}
		}
	}	
}

function showReaction(textArray){
	if(textArray){
		if(textArray.length > 0){
			for(var i=0; i<textArray.length; i++){
				var isResult = checkReaction(textArray[i]);
				if(isResult) return;
			}
		}
	}
}

function checkReaction(reply){
	console.log(reply);	
	console.log(reply == "hello");
	reply = reply.replace(/\s/g, '');
	if(reply == "hello"){

		console.log("SETGET");
		var text = "Greetings";
		document.getElementById('demo').innerHTML = text;
		
		return true;
	}
	
	document.getElementById('demo').innerHTML = "NOTHING";
	return false;
}
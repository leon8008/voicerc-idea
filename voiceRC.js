if (annyang) {
	initRC();
}

function initRC(){
	setCommand();
	setCallBack();
	startRC();
}

function setCommand(){
	// define command
    var commands = {
		'test': function() {
		  console.log("SHOW TEST"); //call result
		},
		'hello': function() {
		  console.log("SHOW HELLO"); //call result
		}
	};
		
	// Add commands to annyang
	annyang.addCommands(commands);
}

function setCallBack(){
	//check result
	annyang.addCallback('result', function(phrases) {
	  showReaction(phrases);
	});
}

function startRC(){
	annyang.start();
	//annyang.debug();
}
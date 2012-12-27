function GameController(){
	this.processesGroupListMO;
	this.processesListMO;
	this.gameView;
	this.startTime;
}

GameController.prototype.init = function() {				
	this.processesGroupListMO = new ProcessesGroupListMO();
	this.processesListMO = new ProcessesListMO();
	this.gameView = new GameView();			
							
	this.initGame();
}	

GameController.prototype.initGame = function() {										
	this.gameView.clear();
	this.gameView.buildMenu(CONFIG.get('INIT_GAME'));
	
	//Build first empty row
	GameView.prototype.showGroup(0, '', 'row');	
	//Fill each group with processes
	var processesGroupList = this.processesGroupListMO.getList();
	for (var i = 0; i < processesGroupList.length; i++) {
		var object = processesGroupList[i];		
		GameView.prototype.showGroup(object['id'], object['desc'], 'row');	
		GameView.prototype.addProcesses2Group(object['id'], this.processesListMO.getGroupProcessesList(object['id']));	
	}		
}	 

GameController.prototype.startGame = function() {		
	var d = new Date();
	this.startTime = d.getTime();
	
	this.gameView.clear();
	this.gameView.buildMenu(CONFIG.get('RUN_GAME'));		

	//Fill first row with all processes sorted randomly	
	var processesList = this.processesListMO.getRandomList();
	GameView.prototype.showGroup(0, '', 'row');			
	GameView.prototype.addProcesses2Group(0, processesList);	
	
	//Create each group with empty data
	var processesGroupList = this.processesGroupListMO.getList();
	for (var i = 0; i < processesGroupList.length; i++) {
		var object = processesGroupList[i];		
		GameView.prototype.showGroup(object['id'], object['desc'], 'row');		
	}			
	
	//Add Drag&Drop features
	$( "#ul_0,#ul_1,#ul_2,#ul_3,#ul_4,#ul_5" ).sortable({
		connectWith: ".connectedSortable"
	}).disableSelection();	
}	

GameController.prototype.checkResults = function() {
	GameView.prototype.clearResults();
	GameView.prototype.showResults('Hola Caracola');
	
	//$(results).html('test results');
	
	/*var arrayResults = new Array();
	var isOrdered = false;
	$(results).html('');
	for (i=1; i<6;i++){
		isOrdered = false;
		if (i==2) isOrdered = true;
		arrayResults[i] = getResultsOK(i, isOrdered);	
		$(results).append(arrayOfProcessDesc[i]+" : "+ arrayResults[i]+" / "+arrayElementsPerGroup[i]);
		if (i==2) $(results).append(" (in order)");
		$(results).append("<BR>");
		
	}
	*/	
}

/*
PuzzleController.prototype.initGame = function() {			
	this.puzzleMO = new PuzzleMO(this.imagePuzzle.width, this.imagePuzzle.height, this.difficulty);
	this.puzzleMO.init();   		
	this.puzzleView = new PuzzleView(this.canvas_id, this.imagePuzzle.width, this.imagePuzzle.height, this.imagePuzzle);			
	this.puzzleView.init();				
	
	var fncThis = this;
	document.onmousedown = function(e){fncThis.startGame(e)};
}	

PuzzleController.prototype.startGame = function(e){									
	this.puzzleView.drawScenario(this.puzzleMO.getPieces(), this.puzzleMO.getPieceWidth(), this.puzzleMO.getPieceHeight());					
	var fncThis = this;
	document.onmousedown = function(e){fncThis.gameRun(e)};	
}	

PuzzleController.prototype.gameRun = function(e){						
	var mouse = this._getMousePosition(e); 		
	var fncThis = this;
	this.currentPiece = this.puzzleMO.getPieceClicked(mouse);
		
	if(this.currentPiece != null){
		this.puzzleView.selectPieceEffect(mouse, this.currentPiece,this.puzzleMO.getPieceWidth(), this.puzzleMO.getPieceHeight());
		document.onmousedown = null;
		document.onmousemove =  function(e){fncThis.gameRun_movePiece(e)};	
		document.onmouseup =  function(e){fncThis.gameRun_dropPiece(e)};	
	}						
}		

PuzzleController.prototype.gameRun_movePiece = function(e){
	var mouse = this._getMousePosition(e); 		
	this.currentDropPiece = this.puzzleView.movePieceEffect(mouse, this.currentPiece, this.puzzleMO.getPieces(), this.puzzleMO.getPieceWidth(), this.puzzleMO.getPieceHeight());					
}	

PuzzleController.prototype.gameRun_dropPiece = function(e){
	var endGame = false;
	var fncThis = this;
	document.onmousedown = null;
	document.onmousemove = null;
	document.onmouseup = null;

	//update puzzle with dropped piece            
	if (this.currentDropPiece!=null) this.puzzleMO.togglePieces(this.currentPiece,this.currentDropPiece);							
	this.puzzleView.drawScenario(this.puzzleMO.getPieces(), this.puzzleMO.getPieceWidth(), this.puzzleMO.getPieceHeight());			

	//check end game
	endGame = this.puzzleMO.isOrdered();
	
	if (!endGame) document.onmousedown = function(e){fncThis.gameRun(e)};			
	else this.gameOver();									
}

PuzzleController.prototype.gameOver = function(){						
	var fncThis = this;
	
	document.onmousedown = null;
	document.onmousemove = null;
	document.onmouseup = null;
	this.puzzleView.showGameOverMessage();			
	setTimeout(function(){fncThis.initGame()},2000);
}		

// Auxiliar functions
PuzzleController.prototype._getMousePosition = function(e){
	var mouse = {x:0,y:0};
	if(e.layerX || e.layerX == 0){
		mouse.x = e.layerX - this.puzzleView.getOffsetLeft();
		mouse.y = e.layerY - this.puzzleView.getOffsetTop();
	}
	else if(e.offsetX || e.offsetX == 0){
		mouse.x = e.offsetX - this.puzzleView.getOffsetLeft();
		mouse.y = e.offsetY - this.puzzleView.getOffsetTop();
	}	
	return mouse
}		
	
*/
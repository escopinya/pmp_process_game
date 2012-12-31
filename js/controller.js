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
		this.gameView.showGroup(object['id'], object['desc'], 'row');	
		this.gameView.addProcesses2Group(object['id'], this.processesListMO.getGroupProcessesList(object['id']));	
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
	var userProcesses = new Array();
	var processesGroupList = this.processesGroupListMO.getList();
	
	for (var i = 0; i < processesGroupList.length; i++) {
		var object = processesGroupList[i];			
		userProcesses[object['id']] = this.gameView.getUserGroupProcesses(object['id']);				
	}	

	var resultsArray = this.processesListMO.getResults(userProcesses,processesGroupList);		
	this.gameView.showResults(resultsArray, processesGroupList, this.startTime);	
}
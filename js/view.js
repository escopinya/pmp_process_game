var GameView = function (){};

GameView.prototype.clear = function() {	$('.row').html('');}

GameView.prototype.buildMenu = function(stage_id){
	switch(stage_id){
	case CONFIG.get('INIT_GAME'): //start game
	  $('#nav_menu').html('<li><button class="btn btn-primary" href="#startModal" data-toggle="modal">Start game</button></li>');
	  break;
	case CONFIG.get('RUN_GAME')://game running
	  $('#nav_menu').html('<li><button class="btn btn-primary" href="#checkResultstModal" data-toggle="modal" onClick="gameController.checkResults();">Check results</button></li>');
	  break;
	}
} 	

GameView.prototype.showGroup = function(id, name, parent_div){
	var content;
	content  = '<div class="span2">';
	content += '<h2>'+name+'</h2>';
	content += '<ul id="ul_'+id+'" class="connectedSortable"></ul>';		
	content += '</div>';	
	$('.'+parent_div).append(content);
};

GameView.prototype.addProcesses2Group = function (group_id, processesList){
	for (var i = 0; i < processesList.length; i++) {
		var object = processesList[i];			
		$('#ul_'+group_id).append('<li class="ui-state-default" id="'+object['group']+'_'+object['order']+'" order="'+object['order']+'" group="'+object['group']+'" value="'+object['order']+'">'+object['desc']+'</li>');			
	}			
}

GameView.prototype.getUserGroupProcesses = function(group_id) {	
	var returnArray = new Array();
	var i = 0;
	$("#ul_"+group_id+" li").each(function(){			
		var processObject = new Array();
		processObject['group']= $(this).attr('group');
		processObject['order']= $(this).attr('order');
		processObject['id']= $(this).attr('id');
		returnArray[i]=processObject;
		i++;
    });	
	return returnArray;
};

GameView.prototype.showResults = function(resultsArray, processesGroupList,startTime) {
	var d = new Date();
	time_spent = (d.getTime()- startTime);
	seconds=Math.round((time_spent/1000)%60);
	minutes=Math.round((time_spent/(1000*60))%60);
	
	$(results).html('');
	
	for (var i = 0; i < processesGroupList.length; i++) {
		var objectGroup = processesGroupList[i];
		content = '<div class="row-fluid">';
        content +='	<div class="span2" border=1>' + objectGroup['desc'] +' : ' + '</div>';
        content +='	<div class="span2">' + resultsArray[objectGroup['id']]['num_ok'] +'/' + resultsArray[objectGroup['id']]['total'] + ' ('+ resultsArray[objectGroup['id']]['percent'] +'%)</div>';
		content +='	<div class="span2"><i class="icon-ok icon-green" style="color: #009900;"></i></span>';
        content +='</div>';		
		$(results).append(content);
	}

	$(results).append('<span class="pull-right">Time spent: ' + minutes + 'm '+ seconds +'s</span>');
	
}
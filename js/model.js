var ProcessesGroupListMO = function (){
	this.processesGroups1 = 	[		
		{"id":1, "desc":"Initiating"},
		{"id":2, "desc":"Planning"},
		{"id":3, "desc":"Executing"},
		{"id":4, "desc":"M&C"},
		{"id":5, "desc":"Closing"}
	];	
	this.processesGroups = 	[		
		{"id":1, "desc":"1"},
		{"id":2, "desc":"2"},
		{"id":3, "desc":"3"},
		{"id":4, "desc":"4"},
		{"id":5, "desc":"5"}
	];		
}
ProcessesGroupListMO.prototype.getList = function() {return this.processesGroups;};

var ProcessesListMO = function (){	
	this.processesList = [
		{"group":1, "order":1, "desc":"Select project manager"},
		{"group":2, "order":1, "desc":"Plan how you will do the planning."},
		{"group":2, "order":2, "desc":"Determine detailed Requirements."},
		{"group":2, "order":3, "desc":"Develop Project Scope Statement"},
		{"group":3, "order":1, "desc":"Execute the work according to the PM plan"},
		{"group":4, "order":1, "desc":"Take control of the project"},
		{"group":5, "order":1, "desc":"Confirm work is done to requirements"},
	];
	
	this.processesList1 = [
		{"group":1, "order":1, "desc":"Select project manager"},
		{"group":1, "order":2, "desc":"Collect processes, procedures and historical information"},
		{"group":1, "order":3, "desc":"Divide large projects into phases"},
		{"group":1, "order":4, "desc":"Identify stakeholders, their influences, and their risk tolerances"},
		{"group":1, "order":5, "desc":"Develop stakeholder management strategy"},
		{"group":1, "order":6, "desc":"Uncover initial requirements assumptions and risks"},
		{"group":1, "order":7, "desc":"Determine company culture and existing systems"},
		{"group":1, "order":8, "desc":"Understand the business case"},
		{"group":1, "order":9, "desc":"Create measurable objectives"},
		{"group":1, "order":10, "desc":"Asses project and product feasibility within the given constraints"},
		{"group":1, "order":11, "desc":"Develop project charter"},
		{"group":2, "order":1, "desc":"Plan how you will do the planning."},
		{"group":2, "order":2, "desc":"Determine detailed Requirements."},
		{"group":2, "order":3, "desc":"Develop Project Scope Statement"},
		{"group":2, "order":4, "desc":"Assess what to purchase"},
		{"group":2, "order":5, "desc":"Determine Team"},
		{"group":2, "order":6, "desc":"Create WBS & WBS Dictionary"},
		{"group":2, "order":7, "desc":"Create Activity List"},
		{"group":2, "order":8, "desc":"Create Network Diagram"},
		{"group":2, "order":9, "desc":"Estimate Resources requirements"},
		{"group":2, "order":10, "desc":"Estimate time and cost"},
		{"group":2, "order":11, "desc":"Determine Critical Path"},
		{"group":2, "order":12, "desc":"Develop Schedule"},
		{"group":2, "order":13, "desc":"Develop Budget"},
		{"group":2, "order":14, "desc":"Determine quality Requirements, processes, metrics, standards"},
		{"group":2, "order":15, "desc":"Develop Process Improvement Plan"},
		{"group":2, "order":16, "desc":"Determine Roles and Responsibilities"},
		{"group":2, "order":17, "desc":"Plan communications"},
		{"group":2, "order":18, "desc":"Perform risk identification, qualitative and quantitative risk analysis, and risk response planning."},
		{"group":2, "order":19, "desc":"Go back Iterations"},
		{"group":2, "order":20, "desc":"Prepare Procurement Documents"},
		{"group":2, "order":21, "desc":"Create change management plan"},
		{"group":2, "order":22, "desc":"Finalize how to execute & control parts of all management plans."},
		{"group":2, "order":23, "desc":"Develop realistic and final PM plan and performance measurement baseline"},	
		{"group":2, "order":24, "desc":"Gain Formal Approval of the plan"},
		{"group":2, "order":25, "desc":"Hold Kick-off meeting"},
		{"group":3, "order":1, "desc":"Execute the work according to the PM plan"},
		{"group":3, "order":2, "desc":"Produce product deliverables (product scope)"},
		{"group":3, "order":3, "desc":"Request changes"},
		{"group":3, "order":4, "desc":"Implement only approved changes"},
		{"group":3, "order":5, "desc":"Continuously improve"},
		{"group":3, "order":6, "desc":"Follow processes"},
		{"group":3, "order":7, "desc":"Perform quality assurance"},
		{"group":3, "order":8, "desc":"Perform quality audits"},
		{"group":3, "order":9, "desc":"Acquire final team"},
		{"group":3, "order":10, "desc":"Manage people"},
		{"group":3, "order":11, "desc":"Evaluate team and project performance"},
		{"group":3, "order":12, "desc":"Hold team-building activities"},
		{"group":3, "order":13, "desc":"Give recognitions and awards"},
		{"group":3, "order":14, "desc":"Use issue log"},
		{"group":3, "order":15, "desc":"Facilitate conflict resolution"},
		{"group":3, "order":16, "desc":"Release resources as work is completed"},
		{"group":3, "order":17, "desc":"Send and receive information"},
		{"group":3, "order":18, "desc":"Hold meetings"},
		{"group":3, "order":19, "desc":"Select sellers"},	
		{"group":4, "order":1, "desc":"Take control of the project"},
		{"group":4, "order":2, "desc":"Measure performance against the performance measurement baseline"},
		{"group":4, "order":3, "desc":"Measure performance against other metrics determined by the project manager."},
		{"group":4, "order":4, "desc":"Determine variances and if they warrant corrective action or change request."},
		{"group":4, "order":5, "desc":"Influence factors that cause changes"},
		{"group":4, "order":6, "desc":"Request changes"},
		{"group":4, "order":7, "desc":"Perform integrated change control"},
		{"group":4, "order":8, "desc":"Approve or reject changes"},
		{"group":4, "order":9, "desc":"Inform stakeholders of the result of change requests"},
		{"group":4, "order":10, "desc":"Update PM plan and project documents"},
		{"group":4, "order":11, "desc":"Manage configuration"},
		{"group":4, "order":12, "desc":"Create forecasts"},
		{"group":4, "order":13, "desc":"Gain acceptance of interim deliverables from the customer"},
		{"group":4, "order":14, "desc":"Perform quality control"},
		{"group":4, "order":15, "desc":"Report on project performance and solicit feedback"},
		{"group":4, "order":16, "desc":"Perform risk assessments and audits"},
		{"group":4, "order":17, "desc":"Manage the time and cost reserves"},
		{"group":4, "order":18, "desc":"Administer procurements."},	
		{"group":5, "order":1, "desc":"Confirm work is done to requirements"},
		{"group":5, "order":2, "desc":"Complete procurement closure"},
		{"group":5, "order":3, "desc":"Gain final acceptance of the product"},
		{"group":5, "order":4, "desc":"Complete financial closure"},
		{"group":5, "order":5, "desc":"Hand off complete product"},
		{"group":5, "order":6, "desc":"Solicit feedback from the customer about the project"},
		{"group":5, "order":7, "desc":"Complete final performance reporting"},
		{"group":5, "order":8, "desc":"Index and archive records"},
		{"group":5, "order":9, "desc":"Update lessons learned knowledge base"}
	];
}

ProcessesListMO.prototype.getGroupProcessesList = function(group_id){
	var returnValueArray = new Array();
	for (var i = 0; i < this.processesList.length; i++) {	
		var object = this.processesList[i];	
		if (object['group'] == group_id) returnValueArray[returnValueArray.length] = object;	
	}	
	return returnValueArray;
}

ProcessesListMO.prototype.getRandomList = function(){
	return this.processesList.sort(this._randomize);
}

ProcessesListMO.prototype._randomize = function(a, b) {
    return Math.random() - 0.5;
}

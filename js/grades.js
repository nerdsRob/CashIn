function Grade(numberOfSubjects) {
	this.grades = new Array(numberOfSubjects);	
	this.average = 1.0;
	this.cash = 50.0;
	this.name = "You";
	
	// Pre populate 
	this.preFill = function(elem) {
		for (var i=0; i < this.grades.length; i++) {
			this.grades[i] = 3;
			elem[i].options[3] = new Option("3 (nicht schlecht)", 3, true, true);
		}
		this.cashIn();	
	};
	
	// Dynamic selector for anims
	this.print = function() {
		return this.name;	
	};
	
	// Helper
	this.printGrades = function() {
		return this.grades.toString();
	};
	
	this.printAverage = function() {
		return this.average.toPrecision(2).toString();	
	};
	
	// Compute average grade
	this.getAverage = function() {
		var length = this.grades.length;
		var sum = 0;
		
		for (var i=0; i<length; i++) {
			sum += parseInt(this.grades[i]);
		}
		var average = sum/length;
		this.average = average;
	};
	
	// Compute reward
	this.cashIn = function() {
		var length = this.grades.length;
		var reward = 0;
		for (var i=0; i<length; i++) {
			var grade = parseInt(this.grades[i]);
			reward += this.reward(grade);
		}
		return this.cash + reward;
	};
	
	this.reward = function(val) {
		switch (val) {
			case 1: return 10; 
			case 2: return 5;
			case 3: return 0;
			case 4: return -5;
		}	
	};
}
	

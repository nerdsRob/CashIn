///////////////////////////////////////////////////////////////////////////////////////
// Grade class
///////////////////////////////////////////////////////////////////////////////////////
function Grade(numberOfSubjects) {
	this.grades = new Array(numberOfSubjects);	
	this.numberOfSubjects = numberOfSubjects;
	this.average = 0.0;
	this.cash = 50.0;
	this.name = "You";
	
	// Pre populate value set
	this.preFill = function(elem, value) {
		for (var i=0; i<this.grades.length; i++) {
			this.grades[i] = value[i];
			var optionValue = (value[i] != 0) ? value[i]: 'Note?';
			elem[i].options[0] = new Option(optionValue, value[i], true, true);
		}
		this.cashIn();	
	};
		
	// Dynamic selector for anims
	this.print = function() {
		return this.name;	
	};
	
	// Getter
	this.getGrades = function() {
		return this.grades;	
	};
	
	this.getName = function() {
		return this.name;
	};
	
	// Setter
	this.setGrades = function(arr) {
		if (arr[0][0] == "Note?") {
			for (var i=0; i<arr.length; i++) {
				this.grades[i] = arr[i][1];
			}
		} else {
			for (var i=0; i<arr.length; i++) {
				this.grades[i] = arr[i];
			}
		}	
	};
	
	// Helper
	this.printGrades = function() {
		return this.grades.toString();
	};
	
	this.printAverage = function() {
		return this.average.toPrecision(2).toString();	
	};
	
	this.getNumberOfSubjects = function() {
		return this.numberOfSubjects;
	};

	// Compute average grade
	this.getAverage = function(arr) {
		var length = arr.length;
		var sum = 0;
		
		for (var i=0; i<length; i++) {
			sum += parseInt(arr[i]);
		}
		var average = sum/length;
		this.average = average;
	};
	
	// Actual value set average
	this.currentAverage = function() {
		var tmp = new Array();
		for (var i=0; i<this.grades.length; i++) {
			if (this.grades[i] != 0) {
				tmp.push(this.grades[i]);
			}
		}
		// Any grades change(s)?
		if (tmp.length > 0) {
			this.getAverage(tmp);
		}
	};
	
	// $$$
	this.cashIn = function(arr) {
		if (arr == null) arr = this.grades;
		var length = arr.length;
		var reward = 0;
		for (var i=0; i<length; i++) {
			var grade = parseInt(arr[i]);
			reward += this.reward(grade);
		}
		return this.cash + reward;
	};
	
	// Rewards 
	this.reward = function(val) {
		switch (val) {
			case 1: return 10; 
			case 2: return 5;
			case 0:
			case 3: return 0;
			case 4: return -5;
		}	
	};
}
	

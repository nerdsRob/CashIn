///////////////////////////////////////////////////////////////////////////////////////
// Update value set for obj onChange
/////////////////////////////////////////////////////////////////////////////////////// 
function checkVal(index, total) {
	if (total == cir) {
		total.grades[index] = cirensaSelects[index].value;
	} else {
		total.grades[index] = camilloSelects[index].value;
	}
	
	total.currentAverage(total.grades);
	var avg = total.printAverage();
	var id = "#".concat(total.print());
	$(id + '-average').html("<span class='avg'>&oslash;</span>" + avg);	
			    
	var cash = total.cashIn(total.grades).toString();
	setMoney(id, cash);
	// Set cookie
	storeGrades(total.print(), total.printGrades());
 }
 
///////////////////////////////////////////////////////////////////////////////////////
// $$$, ø Setters
///////////////////////////////////////////////////////////////////////////////////////
function setMoney(id, sum) {
	$(id + '-cash').html("<span class='currency'>&euro;</span>" + sum);
    var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
    
    if (!isFirefox) { 
        $(id + '-cash').animate({
	        scale: '1.2'
        }, 200, 'ease', function(){  $(this).anim({ scale: '1.0' }, 0.2) });
     }
 }
 
function setAverage(elem) {
	elem.currentAverage();
	var avg = elem.printAverage();
	var id = "#".concat(elem.print());
	$(id + '-average').html("<span class='avg'>&oslash;</span>" + avg);	
}

///////////////////////////////////////////////////////////////////////////////////////
// Cookies write 
///////////////////////////////////////////////////////////////////////////////////////
function storeGrades(key, value) {
 	$.fn.cookie(key, value, { expires: 30, raw: true });
}

///////////////////////////////////////////////////////////////////////////////////////
// Cookies read
///////////////////////////////////////////////////////////////////////////////////////
function getStoredGrades(key, arraySize) {
	var val = $.fn.cookie(key);

     // We haz cookies for key
     if (val != null) {
	     console.log(val.split(','));
	     return val.split(',');
     } else {
	     var prefilled = new Array(arraySize);
	     for (var i=0; i < arraySize; i++) {
		     prefilled[i] = new Array(2);
	     }
	     for (var i=0; i < arraySize; i++) {
		     prefilled[i][0] = "Note?";
		     prefilled[i][1] = 0;
	     }
	     return prefilled;
     }
 }

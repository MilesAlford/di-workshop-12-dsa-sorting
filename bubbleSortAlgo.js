function bubbleSort(a) {
    var swapped; // allows the numbers to be swapped
    do {
    	swapped = false;
    	for (var i=0; i < a.length-1; i++) {
        	if (a[i] > a[i+1]) {
            	var temp = a[i];
            	a[i] = a[i+1];
            	a[i+1] = temp;
            	swapped = true; // if the left number is bigger then the right then it is swapped
        	}
    	}
    } while (swapped);
}
 
var ary = [34, 203, 3, 746, 200, 984, 198, 764, 9];

bubbleSort(ary);
console.log(ary);
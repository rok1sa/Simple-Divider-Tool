var firstSlider = document.getElementById('rangeFirst');
var secondSlider = document.getElementById('rangeSecond');
var output1 = document.getElementById('outputFirstSlide');
var output2 = document.getElementById('outputSecondSlide');

output1.innerHTML = firstSlider.value;
output2.innerHTML = secondSlider.value;

firstSlider.oninput = function() {
    output1.innerHTML = this.value
};

secondSlider.oninput = function() {
    output2.innerHTML = this.value
};

document.getElementById('showResult').addEventListener('click', function() {
    var result = document.getElementById('theNumber');

    var firstVal = parseFloat(firstSlider.value);
    var secondVal = parseFloat(secondSlider.value);

    var resultVal = firstVal / secondVal;

    /* var resultVal = secondVal === 0 ? NaN : firstVal / secondVal */


    result.innerHTML = isNaN(resultVal) ? 'Invalid operation' : resultVal 
    /* check whether result is a number (not a number) */

});

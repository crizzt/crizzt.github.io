$(document).ready(function() {
    var $div = $('.item');
    var	$totalNeed = $('#totalNeed');
    var	$totalSum = $('#totalSum');

    for (var i = 0; i < $div.length; i++) {
    	getArr($div[i]);
    	getArrSum($div[i]);
    }

    $totalSum[0].innerHTML = 'Уже сдано: ' + totalArr.reduce(function(sum, current){ return sum + current }, 0) + '₴ (гривен)';
    $totalNeed[0].innerHTML = 'Еще необходимо сдать: ' + totalArr.reduce(function(sum, current){ return sum + current }, 0) + '₴ (гривен)';
});

var totalArr = [];
var sumArr = [];

function getArr(elem) {
	var tmpArr = elem.innerHTML;
	tmpArr = tmpArr.split('ть: ');
	tmpArr = tmpArr[1].split(' ');
	totalArr.push(parseInt(tmpArr[0]));
}

function getArrSum(elem) {
	var tmpArr = elem.innerHTML;
	tmpArr = tmpArr.split('но: ');
	tmpArr = tmpArr[1].split(' ');
	sumArr.push(parseInt(tmpArr[0]));
}
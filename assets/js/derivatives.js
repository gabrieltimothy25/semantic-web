const allData4 = [12, 23, 63, 13, 25]
const yearData4 = [14, 54, 23, 42, 53, 24, 47, 56, 87, 58, 81, 94]
const quarterData4 = [30, 12, 48]
const monthData4 = [30, 15, 21, 31]
const weekData4 = [4, 2, 1, 5, 6, 7, 6]

var ctxDerivatives = document.getElementById('chartDerivatives').getContext('2d');
var chartDerivatives = new Chart(ctxDerivatives, optionsAll);
function toAll4() {
    chartDerivatives.data.datasets[0].data = allData4
    chartDerivatives.data.labels = all;
    chartDerivatives.update();
}
function toYear4() {
    chartDerivatives.data.datasets[0].data = yearData4
    chartDerivatives.data.labels = year;
    chartDerivatives.update();
}
function toQuarter4() {
    chartDerivatives.data.datasets[0].data = quarterData4
    chartDerivatives.data.labels = quarter;
    chartDerivatives.update();
}
function toMonth4() {
    chartDerivatives.data.datasets[0].data = monthData4
    chartDerivatives.data.labels = month;
    chartDerivatives.update();
}
function toWeek4() {
    chartDerivatives.data.datasets[0].data = weekData4
    chartDerivatives.data.labels = week;
    chartDerivatives.update();
}
// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.dropdown-trigger');
//     var instances = M.Dropdown.init(elems, options);
// });
const allData2 = [50, 61, 68, 43, 55]
const yearData2 = [24, 53, 33, 49, 23, 44, 67, 76, 77, 78, 80, 84]
const quarterData2 = [40, 32, 38]
const monthData2 = [20, 10, 11, 21]
const weekData2 = [3, 5, 6, 3, 2, 3, 5]

var ctxLending = document.getElementById('chartLending').getContext('2d');
var chartLending = new Chart(ctxLending, optionsAll);
function toAll2() {
    chartLending.data.datasets[0].data = allData2
    chartLending.data.labels = all;
    chartLending.update();
}
function toYear2() {
    chartLending.data.datasets[0].data = yearData2
    chartLending.data.labels = year;
    chartLending.update();
}
function toQuarter2() {
    chartLending.data.datasets[0].data = quarterData2
    chartLending.data.labels = quarter;
    chartLending.update();
}
function toMonth2() {
    chartLending.data.datasets[0].data = monthData2
    chartLending.data.labels = month;
    chartLending.update();
}
function toWeek2() {
    chartLending.data.datasets[0].data = weekData2
    chartLending.data.labels = week;
    chartLending.update();
}
// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.dropdown-trigger');
//     var instances = M.Dropdown.init(elems, options);
// });
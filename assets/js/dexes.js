const allData3 = [12, 23, 63, 13, 25]
const yearData3 = [14, 54, 23, 42, 53, 24, 47, 56, 87, 58, 81, 94]
const quarterData3 = [30, 12, 48]
const monthData3 = [30, 15, 21, 31]
const weekData3 = [4, 2, 1, 5, 6, 7, 6]

var ctxDexes = document.getElementById('chartDexes').getContext('2d');
var chartDexes = new Chart(ctxDexes, optionsAll);
function toAll3() {
    chartDexes.data.datasets[0].data = allData3
    chartDexes.data.labels = all;
    chartDexes.update();
}
function toYear3() {
    chartDexes.data.datasets[0].data = yearData3
    chartDexes.data.labels = year;
    chartDexes.update();
}
function toQuarter3() {
    chartDexes.data.datasets[0].data = quarterData3
    chartDexes.data.labels = quarter;
    chartDexes.update();
}
function toMonth3() {
    chartDexes.data.datasets[0].data = monthData3
    chartDexes.data.labels = month;
    chartDexes.update();
}
function toWeek3() {
    chartDexes.data.datasets[0].data = weekData2
    chartDexes.data.labels = week;
    chartDexes.update();
}
// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.dropdown-trigger');
//     var instances = M.Dropdown.init(elems, options);
// });
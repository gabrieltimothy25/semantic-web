const allData6 = [12, 41, 63, 43, 24]
const yearData6 = [14, 24, 53, 32, 23, 14, 57, 46, 97, 68, 44, 24]
const quarterData6 = [32, 22, 55]
const monthData6 = [13, 25, 41, 51]
const weekData6 = [1, 3, 3, 4, 4, 5, 7]

var ctxAssets = document.getElementById('chartAssets').getContext('2d');
var chartAssets = new Chart(ctxAssets, optionsAll);
function toAll6() {
    chartAssets.data.datasets[0].data = allData6
    chartAssets.data.labels = all;
    chartAssets.update();
}
function toYear6() {
    chartAssets.data.datasets[0].data = yearData6
    chartAssets.data.labels = year;
    chartAssets.update();
}
function toQuarter6() {
    chartAssets.data.datasets[0].data = quarterData6
    chartAssets.data.labels = quarter;
    chartAssets.update();
}
function toMonth6() {
    chartAssets.data.datasets[0].data = monthData6
    chartAssets.data.labels = month;
    chartAssets.update();
}
function toWeek6() {
    chartAssets.data.datasets[0].data = weekData6
    chartAssets.data.labels = week;
    chartAssets.update();
}
// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.dropdown-trigger');
//     var instances = M.Dropdown.init(elems, options);
// });
const allData5 = [32, 21, 23, 43, 25]
const yearData5 = [54, 34, 13, 22, 13, 34, 47, 76, 57, 88, 84, 44]
const quarterData5 = [12, 32, 45]
const monthData5 = [33, 55, 11, 31]
const weekData5 = [5, 6, 3, 2, 8, 6, 9]

var ctxPayments = document.getElementById('chartPayments').getContext('2d');
var chartPayments = new Chart(ctxPayments, optionsAll);
function toAll5() {
    chartPayments.data.datasets[0].data = allData5
    chartPayments.data.labels = all;
    chartPayments.update();
}
function toYear5() {
    chartPayments.data.datasets[0].data = yearData5
    chartPayments.data.labels = year;
    chartPayments.update();
}
function toQuarter5() {
    chartPayments.data.datasets[0].data = quarterData5
    chartPayments.data.labels = quarter;
    chartPayments.update();
}
function toMonth5() {
    chartPayments.data.datasets[0].data = monthData5
    chartPayments.data.labels = month;
    chartPayments.update();
}
function toWeek5() {
    chartPayments.data.datasets[0].data = weekData5
    chartPayments.data.labels = week;
    chartPayments.update();
}
// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.dropdown-trigger');
//     var instances = M.Dropdown.init(elems, options);
// });
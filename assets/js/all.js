const all = ['2015', '2016', '2017', '2018', '2019'];
const year = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const quarter = ['January', 'February', 'March'];
const month = ['Week 1', 'Week 2', 'Week 3', 'Week 4'];
const week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

const allData = [300, 123, 175, 245, 312, 321]
const yearData = [100, 120, 354, 224, 230, 304, 465, 117, 424, 112, 318, 229]
const quarterData = [100, 120, 354]
const monthData = [80, 90, 120, 110]
const weekData = [60, 60, 70, 90, 100, 70, 70, 80]

var ctxAll = document.getElementById('chartAll').getContext('2d');
var optionsAll = {
    type: 'line',
    data: {
        labels: all,
        datasets: [{
            label: 'Value Over Time',
            backgroundColor: 'rgba(255,192,203, 0.2)',
            borderColor: '#FFC0CB',
            data: allData
        }]
    }
}
var chart = new Chart(ctxAll, optionsAll);
function toAll() {
    chart.data.datasets[0].data = allData
    chart.data.labels = all;
    chart.update();
}
function toYear() {
    chart.data.datasets[0].data = yearData
    chart.data.labels = year;
    chart.update();
}
function toQuarter() {
    chart.data.datasets[0].data = quarterData
    chart.data.labels = quarter;
    chart.update();
}
function toMonth() {
    chart.data.datasets[0].data = monthData
    chart.data.labels = month;
    chart.update();
}
function toWeek() {
    chart.data.datasets[0].data = weekData
    chart.data.labels = week;
    chart.update();
}
// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.dropdown-trigger');
//     var instances = M.Dropdown.init(elems, options);
// });
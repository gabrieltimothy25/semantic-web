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
  
var optionsLending = {
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
  
  
  var ctxTwo = document.getElementById('chartTwoContainer').getContext('2d');
  new Chart(ctxTwo, optionsTwo);
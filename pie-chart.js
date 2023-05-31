var ctx2 = document.getElementById('pie').getContext('2d');
var myChart2 = new Chart(ctx2, {
  type: 'pie',
  data: {
    labels: ['China', 'US', 'UK', 'Japan'],
    datasets: [{
      label: 'Country',
      data: [1934,586,141,115],
      backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)'
               
            ],
      borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)'
  
            ],
      borderWidth: 1
        }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
var ctx = document.getElementById('lineChart').getContext('2d');
var myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          label: 'Earnings',
          data: [2050, 1900, 2100, 1800, 2800, 2000],
          backgroundColor: [
                '#cbcaca'

            ],
            
        
        
          borderColor: [
                '#6200ee'

            ],
          borderWidth: .5
        }]
      },
      options: {
        responsive: true,
    
        }
      });
      
      
      
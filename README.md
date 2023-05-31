# Admin Dashboard

This is a Admin Dashboard made with HTML, CSS , javascript & Chart.js

Chart.js is a free, open-source JavaScript library for data visualization, which supports eight chart types: bar, line, area, pie, bubble, radar, polar, and scatter.


## chart used - 1 

###### chart type => line
```
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
      
      
      
```

---

## chart used - 2

###### chart type => pie

```
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

```



## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Credits

icons - [Font Awesome](https://fontawesome.com/)  
charts - [Chart.js](https://www.chartjs.org/)  
images - [Get Illustrations](https://www.getillustrations.com/
)



## License

[MIT](https://github.com/denex-a-poulose/admin-dashboard/blob/main/README.md)

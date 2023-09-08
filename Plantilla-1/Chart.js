  const graficoLinea = document.getElementById('graficoLinea');
  
    new Chart(graficoLinea, {
      type: 'line',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
         
          data: [12, 19, 3, 5, 2, 3],
          borderWidth: 1
        }]
      },
      options: {
        plugins: {legend:{display:false}},
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });




    const ctx = document.getElementById('graficoAreaPolar');
  
    new Chart(ctx, {
      type: 'polarArea',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
         
          data: [12, 19, 3, 5, 2, 3],
          borderWidth: 1
        }]
      },
      options: {
        plugins: {legend:{display:false}},
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
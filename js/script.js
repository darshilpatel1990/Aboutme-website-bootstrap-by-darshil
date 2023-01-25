let skillChart = new Chart("skillChart", {
    type: "bar",
    data: {
        datasets: [{
          data: [{x: 'Sales', y: 20}, {x: 'Revenue', y: 10}]
        }]
      },
    options: {
        parsing: {
        xAxisKey: 'id',
        yAxisKey: 'nested.value'
        }
    }
  });
$(document).ready(function () {
	
	var datarepair = [10555,43056];
	var labesrepair = ["Real Cost", "CMU"];
	var colorrepair = ["#3e95cd", "#8e5ea2"];
	
	new Chart(document.getElementById("doughnut-chart"), {
		type: 'doughnut',
		data: {
		  labels: labesrepair,
		  datasets: [
			{
			  label: "Movements cost",
			  backgroundColor: colorrepair,
			  data: datarepair,
			  hoverOffset: 10
			}
		  ]
		},
		options: {
			title: {
			display: true,
			text: 'Repairs'
			},
			legend: {
				display: true,
				align: 'end',
				position: 'left'
			}
		}
	});

	var dual = document.getElementById("dual-line-repair");
	var labelsdual = ["Jan", "Feb", "Mar", "Apr", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
	var repaircmudual = [125,187,132,123,270,578,1106,6845,8915,9052,8707,7016];
	var repaircrdual = [27,30,28,2,32,82,175,1743,2192,2242,2200,1802];
	
	if (dual !== null) {
		var urChart = new Chart(dual, {
		  type: "line",
		  data: {
			labels: labelsdual,
			datasets: [
			  {
				label: "CMU",
				pointRadius: 4,
				pointBackgroundColor: "rgba(255,255,255,1)",
				pointBorderWidth: 2,
				fill: false,
				backgroundColor: "transparent",
				borderWidth: 2,
				borderColor: "#3e95cd",
				data: repaircmudual
			  },
			  {
				label: "Real Cost",
				fill: false,
				pointRadius: 4,
				pointBackgroundColor: "rgba(255,255,255,1)",
				pointBorderWidth: 2,
				backgroundColor: "transparent",
				borderWidth: 2,
				borderColor: "#3cba9f",
				data: repaircrdual
			  }
			]
		  },
		  options: {
			responsive: true,
			maintainAspectRatio: false,
			layout: {
			  padding: {
				right: 10
			  }
			},
			legend: {
			  display: false
			},
			scales: {
			  xAxes: [
				{
				  gridLines: {
					drawBorder: false,
					display: false
				  },
				  ticks: {
					display: false, // hide main x-axis line
					beginAtZero: true
				  },
				  barPercentage: 1.8,
				  categoryPercentage: 0.2
				}
			  ],
			  yAxes: [
				{
				  gridLines: {
					drawBorder: false, // hide main y-axis line
					display: false
				  },
				  ticks: {
					display: false,
					beginAtZero: true
				  }
				}
			  ]
			},
			tooltips: {
			  titleFontColor: "#888",
			  bodyFontColor: "#555",
			  titleFontSize: 12,
			  bodyFontSize: 14,
			  backgroundColor: "rgba(256,256,256,0.95)",
			  displayColors: true,
			  borderColor: "rgba(220, 220, 220, 0.9)",
			  borderWidth: 2
			}
		  }
		});
	}

});	






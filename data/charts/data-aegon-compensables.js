$(document).ready(function () {

	var piedata = [5982,206];
	var pielabels = ['Insured', 'Injured'];
	var piecolors = ['#17a5bb9c','#d39e00b5'];
	
	new Chart(document.getElementById('pie-chart'), {
		type: 'pie',
		data: {
		  labels: pielabels,
		  datasets: [{
			label: 'Compensable',
			backgroundColor: piecolors,
			data: piedata
		  }]
		},
		options: {
			title: {
				display: false,
				text: 'Compensables'
			},
			datalabels: {
				display: true,
				align: 'bottom',
				font: {
					  size: 14,
					}
			},
			legend: {
				display: true,
				align: 'end',
				position: 'left'
			}
		}
	});

	var dual = document.getElementById("dual-line");
	var labelsdual = ["Jan", "Feb", "Mar", "Apr", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
	var insuredsdual = [10,9,12,11,11,29,60,427,1080,1481,1286,1566];
	var injuredsdual = [1,0,1,0,1,2,1,11,27,63,45,54];
	
	if (dual !== null) {
		var urChart = new Chart(dual, {
		  type: "line",
		  data: {
			labels: labelsdual,
			datasets: [
			  {
				label: "Insured",
				pointRadius: 4,
				pointBackgroundColor: "rgba(255,255,255,1)",
				pointBorderWidth: 2,
				fill: false,
				backgroundColor: "transparent",
				borderWidth: 2,
				borderColor: "#4c84ff",
				data: insuredsdual
			  },
			  {
				label: "Injured",
				fill: false,
				pointRadius: 4,
				pointBackgroundColor: "rgba(255,255,255,1)",
				pointBorderWidth: 2,
				backgroundColor: "transparent",
				borderWidth: 2,
				borderColor: "#fdc506",
				data: injuredsdual
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








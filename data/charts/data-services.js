$(document).ready(function () {

	var canvas = document.getElementById("bar-chart-horizontal");
	var ctxhorizontal = canvas.getContext('2d');
	
	var monthlyColors = ["#007bff","#28a745","#ffc107","#e83e8c","#17a2b8","#6f42c1","#fd7e14","#6c757d","#007bff","#28a745","#ffc107"];
	
	var monthly = [49202,85210,108910,107437,103346,128800,116611,110996,102418,110622,87987];
	var newsweeklyok = [6552,7020,7100,6969,9225,6805,6957,6121,6291,4777];
	var newsweeklyko = [4994,7487,7461,6804,7973,7901,6748,6544,6825,6435];
	var newsweeklybloqued = [0,0,52,241,120,161,187,185,168,46];
	
	new Chart(ctxhorizontal, {
		type: 'horizontalBar',
		data: {
		  labels: ["August", "September", "October", "November", "December", 'January', 'February', 'March', 'April', 'May', 'June'],
		  datasets: [
			{
			  label: "Movements",
			  backgroundColor: monthlyColors,
			  data: monthly
			}
		  ]
		},
		options: {
			responsive: true,
			maintainAspectRatio: false,
			scales: {
			  xAxes: [{
				  gridLines: {
					drawBorder: false,
					display: false
				  },
				  ticks: {
					display: true, // hide main x-axis line
					beginAtZero: true
				  }
				}
			  ]
			},
			legend: { display: false },
			title: {
				display: true,
				text: 'Movements AEGON (v3)'
			}
		}
	});

	new Chart(document.getElementById("bar-chart-grouped"), {
		type: 'bar',
		data: {
		  labels: ["September", "October", "November", "December", 'January','February','March', 'April', 'May', 'June'],
		  datasets: [{
			  label: "News",
			  backgroundColor: "#007bff",
			  data: newsweeklyok
			},{
			  label: "Closed",
			  backgroundColor: "#28a745",
			  data: newsweeklyko
			},{
			  label: "Blocked",
			  backgroundColor: "#6f42c1",
			  data: newsweeklybloqued
			}
		  ]
		},
		options: {
			responsive: true,
			maintainAspectRatio: false,
			scales: {
			  xAxes: [{
				  gridLines: {
					drawBorder: false,
					display: false
				  },
				  ticks: {
					display: true, // hide main x-axis line
					beginAtZero: true
				  }
				}
			  ],
			  yAxes: [{
				  ticks: {
					beginAtZero: true
				  }
				}
			  ]

			},
			title: {
				display: true,
				text: 'News/Closed/Blocked'
			}
		}
	});

});	

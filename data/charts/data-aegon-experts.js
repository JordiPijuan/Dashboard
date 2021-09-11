$(document).ready(function () {
	
	var expertdatapolar = [753,352,2778,1306,986,565];
	var expertlabelspolar = ["VET+A", "CAP", "VERIFYCA", "CALZADO", "VIDEO-VERIFYCA", "VIDEO-CALZADO"];
	var expertcolorspolar = ['#0062cca1','#d39e00b5','#dc3545b3','#6c757dbf','#28a74599','#17a5bb9c'];

	new Chart(document.getElementById("polar-chart"), {
		type: 'polarArea',
		data: {
		  labels: expertlabelspolar,
		  datasets: [
			{
			  label: "Experts",
			  backgroundColor: expertcolorspolar,
			  data: expertdatapolar
			}
		  ]
		},
		options: {
			title: {
				display: false,
				text: 'Experts by company'
			},
			legend: {
				display: true,
				align: 'end',
				position: 'left'
			}		  
		}
	});


	var line = document.getElementById("line");
	var dataline = [29,60,60,29,69,157,293,1159,1728,2368,2272,1913];
	var labelsline = ["Jan", "Feb", "Mar", "Apr", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
	
	if (line !== null) {
		line = line.getContext("2d");
		var gradientFill = line.createLinearGradient(0, 120, 0, 0);
		gradientFill.addColorStop(0, "rgba(41,204,151,0.10196)");
		gradientFill.addColorStop(1, "rgba(41,204,151,0.30196)");

		var lChart = new Chart(line, {
		  type: "line",
		  data: {
			labels: labelsline,
			datasets: [
			  {
				label: "Expert",
				lineTension: 0,
				pointRadius: 4,
				pointBackgroundColor: "rgba(255,255,255,1)",
				pointBorderWidth: 2,
				fill: true,
				backgroundColor: gradientFill,
				borderColor: "#29cc97",
				borderWidth: 2,
				data: dataline
			  }
			]
		  },
		  options: {
			responsive: true,
			maintainAspectRatio: false,
			legend: {
			  display: false
			},
			layout: {
			  padding: {
				right: 10
			  }
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




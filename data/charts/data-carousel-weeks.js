$(document).ready(function () {

	var labelsweek21 = ['Week 1', 'Week 2', 'Week 3',  'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11','Week 12', 'Week 13',  'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19','Week 20','Week 21','Week 22','Week 23','Week 24','Week 25','Week 26'];
	//News week
	var newsdata21 = [1811,2610,2458,2113,1873,1874,1356,1702,1614,1658,1415,1417,1090,1614,1519,1427,1416,1397,1531,1464,1445,1511,1356,979,948,365];
	//Closed week
	var closedata21 = [1755,2176,2019,1970,2083,2020,1996,1802,1508,1724,1324,1491,891,1661,1753,1595,1527,1689,1520,1668,1549,1891,1604,1492,1264,414];
	
	var labelsweek20 = ['Week 24','Week 25','Week 26','Week 27','Week 28','Week 29','Week 30','Week 31','Week 32','Week 33','Week 34','Week 35','Week 36','Week 37','Week 38','Week 39','Week 40','Week 41','Week 42','Week 43','Week 44','Week 45','Week 46','Week 47','Week 48','Week 49','Week 50','Week 51','Week 52','Week 53'];
	//News week
	var newsdata20 = [69,81,70,76,66,98,146,297,807,1301,1315,1533,1496,1435,1543,1545,1558,1582,1393,1810,1625,1647,1657,1595,1690,1820,1585,1768,1132,1153];
	//Closed week
	var closedata20 = [5,12,13,9,38,15,17,108,295,551,790,789,893,852,1170,1384,1469,1610,1736,1730,1772,1936,1691,1778,1782,1940,1219,1961,1293,623];


	var weekslabels = ['Week 32','Week 33','Week 34','Week 35','Week 36','Week 37','Week 38','Week 39','Week 40','Week 41','Week 42','Week 43','Week 44','Week 45','Week 46','Week 47','Week 48','Week 49','Week 50','Week 51','Week 52','Week 53',
						'Week 1', 'Week 2', 'Week 3',  'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11','Week 12', 'Week 13',  'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19','Week 20','Week 21','Week 22','Week 23','Week 24','Week 25','Week 26'];
	var weeksdata = [6228,11244,13668,14997,16810,16266,21001,21273,23143,24146,23766,25348,25747,25277,25007,25801,26011,27071,19556,27635,19426,18639,29584,32733,31352,32426,30576,30812,27846,27377,24795,26628,23189,23903,15123,26616,25771,24434,25760,27836,25185,28146,22495,24183,22351,20787,18901,6224];
	
	new Chart(document.getElementById("bar-chart-weeks-21"), {
		type: 'line',
		data: {
			labels: labelsweek21,
			datasets: [{
			  label: 'News',
			  data: newsdata21,
			  lineTension: 0,
			  pointRadius: 4,
			  pointBackgroundColor: "rgba(255,255,255,1)",
			  pointBorderWidth: 2,		  
			  borderColor: "#dc3545",
			  backgroundColor: "rgba(255,0,24,0.3)",
			  fill: true
			}, {
			  label: 'Closed',
			  data: closedata21,
			  lineTension: 0,
			  pointRadius: 4,
			  pointBackgroundColor: "rgba(255,255,255,1)",
			  pointBorderWidth: 2,		  
			  borderColor: "#a70010",
			  backgroundColor: "rgba(167,0,16,0.3)",
			  fill: true
			}]
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
				  },
				  barPercentage: 1.8,
				  categoryPercentage: 0.2
				}
			  ]
			},			
			legend: {
			  display: true,
			  align: 'center',
			  position: 'bottom'
			},
			layout: {
			  padding: {
				right: 30,
				left: 30
			  }
			},
			title: {
			  display: true,
			  text: 'Weeks-21'
			}
		}
	});

	new Chart(document.getElementById("bar-chart-weeks-20"), {
		type: 'line',
		data: {
			labels: labelsweek20,
			datasets: [{
			  label: 'News',
			  data: newsdata20,
			  lineTension: 0,
			  pointRadius: 4,
			  pointBackgroundColor: "rgba(255,255,255,1)",
			  pointBorderWidth: 2,		  
			  borderColor: "#dc3545",
			  backgroundColor: "rgba(255,0,24,0.3)",
			  fill: true
			}, {
			  label: 'Closed',
			  data: closedata20,
			  lineTension: 0,
			  pointRadius: 4,
			  pointBackgroundColor: "rgba(255,255,255,1)",
			  pointBorderWidth: 2,		  
			  borderColor: "#a70010",
			  backgroundColor: "rgba(167,0,16,0.3)",
			  fill: true
			}]
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
				  },
				  barPercentage: 1.8,
				  categoryPercentage: 0.2
				}
			  ]
			},			
			legend: {
			  display: true,
			  align: 'center',
			  position: 'bottom'
			},
			layout: {
			  padding: {
				right: 30,
				left: 30
			  }
			},
			title: {
			  display: true,
			  text: 'Weeks-20'
			}
		}
	});

	new Chart(document.getElementById("bar-area-line-mov"), {
		type: 'bar',
		data: {
			labels: weekslabels,
			datasets: [{
			  label: 'News',
			  data: weeksdata,
			  backgroundColor: "rgba(0,123,255,0.7)",
			  fill: true
			}]
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
			legend: {
			  display: true,
			  align: 'center',
			  position: 'bottom'
			},
			layout: {
			  padding: {
				right: 10
			  }
			},
			title: {
			  display: false
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

});	





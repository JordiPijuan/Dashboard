$(document).ready(function () {

	var monthlabels = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December"
	  ];
	
	var daylabels = [
		'01','02','03','04','05','06','07','08','09','10',
		'11','12','13','14','15','16','17','18','19','20',
		'21','22','23','24','25','26','27','28','29','30',
		'31'
	];
	
	//News/Errors month
	var newsdata = [1459,416,830,4974,4522,3505,7022,5010,3156,1395,5649,7344,5904,5638,5645,1807,767,5207,5456,5628,6038,5666,2223,1137,5527,5324,5718,7372,5247,2534,631];
	var errordata = [0,0,1,16,10,4,21,19,4,3,15,21,22,19,7,8,2,17,21,21,7,11,30,5,11,16,14,34,23,16,5];
	
	new Chart(document.getElementById("bar-area-line"), {
		type: 'line',
		data: {
		labels: daylabels,
		datasets: [{
		  label: 'Ok',
		  data: newsdata,
		  lineTension: 0,
		  pointRadius: 4,
		  pointBackgroundColor: "rgba(255,255,255,1)",
		  pointBorderWidth: 2,		  
		  borderColor: "#29cc97",
		  backgroundColor: "rgba(41,204,151,0.3)",
		  fill: true
		}, {
		  label: 'Ko',
		  data: errordata,
		  lineTension: 0,
		  pointRadius: 4,
		  pointBackgroundColor: "rgba(255,255,255,1)",
		  pointBorderWidth: 2,		  
		  borderColor: "#8e5ea2",
		  backgroundColor: "rgba(214,188,218,0.3)",
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
				right: 10
			  }
			},
			title: {
			  display: false,
			  text: 'Movements January-21'
			}
		  }
	});

	//News by previous week
	var line = document.getElementById("line");
	var dataline = [397,327,73,393,348,166,108];
	var labelsline = ["Mon", "Thu", "Wed", "Tue", "Fri", "Sat", "Sun"];
	
	if (line !== null) {
		line = line.getContext("2d");
		var gradientFill = line.createLinearGradient(0, 120, 0, 0);
		gradientFill.addColorStop(0, "rgba(76,132,255,0.10196)");
		gradientFill.addColorStop(1, "rgba(76,132,255,0.30196)");

		var lChart = new Chart(line, {
		  type: "line",
		  data: {
			labels: labelsline,
			datasets: [
			  {
				label: "News",
				lineTension: 0,
				pointRadius: 3,
				pointBackgroundColor: "rgba(255,255,255,1)",
				pointBorderWidth: 2,
				fill: true,
				backgroundColor: gradientFill,
				borderColor: "#4c84ff",
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
				right: 10,
				top: 10
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

	//Closed by previous week
	var linec = document.getElementById("lineclose");
	var datalinec = [420,195,233,390,248,224,45];
	
	if (linec !== null) {
		linec = linec.getContext("2d");
		var gradientFill = linec.createLinearGradient(0, 120, 0, 0);
		gradientFill.addColorStop(0, "rgba(41, 204, 151,0.10196)");
		gradientFill.addColorStop(1, "rgba(41, 204, 151,0.30196)");

		var lChart = new Chart(linec, {
		  type: "line",
		  data: {
			labels: labelsline,
			datasets: [
			  {
				label: "Closed",
				lineTension: 0,
				pointRadius: 3,
				pointBackgroundColor: "rgba(255,255,255,1)",
				pointBorderWidth: 2,
				fill: true,
				backgroundColor: gradientFill,
				borderColor: "#29cc97",
				borderWidth: 2,
				data: datalinec
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
				right: 10,
				top: 10
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

	var labelweek = ['week 1','week 2','week 3','week 4'];
	//News by week
	var linem = document.getElementById("linemonth");
	var datalinemonth = [1811,2610,2458,2103];
	
	if (linem !== null) {
		linem = linem.getContext("2d");
		var gradientFill = linem.createLinearGradient(0, 120, 0, 0);
		gradientFill.addColorStop(0, "rgba(76,132,255,0.10196)");
		gradientFill.addColorStop(1, "rgba(76,132,255,0.30196)");

		var lChart = new Chart(linem, {
		  type: "line",
		  data: {
			labels: labelweek,
			datasets: [
			  {
				label: "News",
				lineTension: 0.3,
				pointRadius: 3,
				pointBackgroundColor: "rgba(255,255,255,1)",
				pointBorderWidth: 2,
				fill: true,
				backgroundColor: gradientFill,
				borderColor: "#4c84ff",
				borderWidth: 2,
				data: datalinemonth
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
				right: 10,
				top: 10
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

	//Closed by week
	var linemonthc = document.getElementById("linemonthclose");
	var datalinemonthc = [1755,2176,2019,1968];
	
	if (linemonthc !== null) {
		linemonthc = linemonthc.getContext("2d");
		var gradientFill = linemonthc.createLinearGradient(0, 120, 0, 0);
		gradientFill.addColorStop(0, "rgba(41, 204, 151,0.10196)");
		gradientFill.addColorStop(1, "rgba(41, 204, 151,0.30196)");

		var lChart = new Chart(linemonthc, {
		  type: "line",
		  data: {
			labels: labelweek,
			datasets: [
			  {
				label: "Closed",
				lineTension: 0.3,
				pointRadius: 3,
				pointBackgroundColor: "rgba(255,255,255,1)",
				pointBorderWidth: 2,
				fill: true,
				backgroundColor: gradientFill,
				borderColor: "#29cc97",
				borderWidth: 2,
				data: datalinemonthc
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
				right: 10,
				top: 10
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

	//% errors
	var errorpercentagedata = [0.00,0.00,0.12,0.32,0.22,0.11,0.30,0.36,0.13,0.21,0.26,0.29,0.37,0.34,0.12,0.44,0.26,0.33,0.38,0.37,0.12,0.19,1.33,0.36,0.20,0.30,0.24,0.46,0.44,0.63,0.79];
	
	new Chart(document.getElementById("bar-area-line-error"), {
		type: 'line',
		data: {
		labels: daylabels,
		datasets: [{
		  label: 'Ko',
		  data: errorpercentagedata,
		  lineTension: 0,
		  pointRadius: 4,
		  pointBackgroundColor: "rgba(255,255,255,1)",
		  pointBorderWidth: 2,		  
		  borderColor: "#8e5ea2",
		  backgroundColor: "rgba(214,188,218,0.3)",
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
			  display: false,
			  align: 'center',
			  position: 'bottom'
			},
			layout: {
			  padding: {
				right: 10
			  }
			},
			title: {
			  display: false,
			  text: '% errors'
			}
		  }
	});

	//Blocked
	var blockeddata = [0,0,0,13,13,6,13,9,4,2,13,20,13,15,22,5,0,16,24,16,13,10,8,1,13,23,23,34,25,12,0];
	
	new Chart(document.getElementById("bar-area-line-blocked"), {
		type: 'line',
		data: {
		labels: daylabels,
		datasets: [{
		  label: 'Blocked',
		  data: blockeddata,
		  lineTension: 0,
		  pointBackgroundColor: "rgba(255,255,255,1)",
		  pointBorderWidth: 2,		  
		  borderColor: "#fe5461",
		  backgroundColor: "rgba(254,84,97,0.2)",
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
			  display: false,
			  align: 'center',
			  position: 'bottom'
			},
			layout: {
			  padding: {
				right: 10
			  }
			},
			title: {
			  display: false,
			  text: '% errors'
			}
		  }
	});

	//News/Closed month
	var newsdatamonth = [149,98,86,397,327,73,393,348,166,108,632,483,484,403,393,112,104,542,395,396,388,462,160,115,625,381,363,308,274,93,59];
	var closeddatamonth = [1,0,52,420,195,233,390,248,224,45,405,436,322,427,355,189,42,164,336,375,430,438,203,73,254,301,337,434,348,251,43];
	
	new Chart(document.getElementById("bar-area-line-month"), {
		type: 'bar',
		data: {
			labels: daylabels,
			datasets: [{
			  label: 'News',
			  data: newsdatamonth,
			  backgroundColor: "rgba(0,123,255,0.7)",
			  fill: true
			}, {
			  label: 'Closed',
			  data: closeddatamonth,
			  backgroundColor: "rgba(254,196,0,0.7)",
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

	var subclosureslabels = ['CE1','CE21','CE22','CE23','CE24','CE41','CE42','CE51','CE52','CE53','CE54','CE55','CE71','CE72','CE73','CE8 ','CE91','CE92','CE94','CE95','CE101','CE102','CE103'];
	var subclosuresdata = [101,100,131,1,42,61,205,92,1,1,5,8,44,1317,34,16,49,2,705,24,45,33,41];
	var subclosurebackgroundcolors = ["#3e95cd", "#17a2b896","#0a7c8e96","#07515dcf","#ffa707e3","#c58104e3","#e83e8ce3","#c50481e3","#e60697e3","#3cba9fe3","#3e95cd","#8e5ea2","#c45850","#007bff","#e83e8c","#fd7e14","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#007bff","#e83e8c"];

	/*new Chart(document.getElementById("pie-chart-closures"), {
		type: 'pie',
		data: {
		  labels: subclosureslabels,
		  datasets: [{
			label: "Closure: ",
			backgroundColor: subclosurebackgroundcolors,
			data: subclosuresdata
		  }]
		},
		options: {
		  title: {
			display: false,
			text: 'Closures'
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
			position: 'left'
		  }
		}
	});*/

	var canvas = document.getElementById("bar-chart-horizontal");
	var ctxhorizontal = canvas.getContext('2d');
	
	new Chart(ctxhorizontal, {
		type: 'horizontalBar',
		data: {
		  labels: subclosureslabels,
		  datasets: [{
			  label: "Movements",
			  backgroundColor: subclosurebackgroundcolors,
			  data: subclosuresdata
			}
		  ]
		},
		options: {
			responsive: true,
			maintainAspectRatio: false,
			scales: {
			  yAxes: [{
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
			tooltips: {
			  titleFontColor: "#888",
			  bodyFontColor: "#555",
			  titleFontSize: 12,
			  bodyFontSize: 14,
			  backgroundColor: "rgba(256,256,256,0.95)",
			  displayColors: true,
			  borderColor: "rgba(220, 220, 220, 0.9)",
			  borderWidth: 2
			},
			title: {
			  display: false
			},			
			legend: {
			  display: false,
			  align: 'center',
			  position: 'bottom'
			}
		}
	});

});	
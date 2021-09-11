$(document).ready(function () {

	var closurelabels = ['CE1','CE2','CE4','CE5','CE7','CE8','CE9','CE10'];
	var closuredata = [651,2866,2655,907,15831,353,5158,1088];
	var closurebackgroundcolors = ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#007bff","#e83e8c","#fd7e14"];
	
	var subclosureslabels = ['CE1','CE21','CE22','CE23','CE24','CE41','CE42','CE51','CE52','CE53','CE54','CE55','CE71','CE72','CE73','CE8 ','CE91','CE92','CE94','CE95','CE101','CE102','CE103'];
	var subclosuresdata = [651,985,1508,7,366,610,2045,735,14,3,36,119,409,15172,250,353,422,27,4544,165,428,289,371];
	var subclosurebackgroundcolors = ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#007bff","#e83e8c","#fd7e14","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#007bff","#e83e8c","#fd7e14","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#007bff","#e83e8c"];

	new Chart(document.getElementById("pie-chart"), {
		type: 'pie',
		data: {
		  labels: closurelabels,
		  datasets: [{
			label: "Closure: ",
			backgroundColor: closurebackgroundcolors,
			data: closuredata
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
	});

	new Chart(document.getElementById("doughnut-chart"), {
		type: 'doughnut',
		data: {
		  labels: subclosureslabels,
		  datasets: [{
			  label: "Closure: ",
			  backgroundColor: subclosurebackgroundcolors,
			  data: subclosuresdata,
			  hoverOffset: 10
			}
		  ]
		},
		options: {
		  title: {
			display: false,
			text: 'Closures by type'
		  },
		  legend: {
			display: false,
			position: 'bottom',
			align: 'start'
		  }
		}
	});

	var marksCanvas = document.getElementById("radar2");
	var marklabels = [
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
	var marknews = [6125, 6431, 5943, 4548, 3221, 6436, 6723, 4912, 1533, 6636, 6728, 6555];
	var markclosures = [3345, 4177, 3422, 2012, 4456, 4143, 3771, 4523, 3154, 3719, 4132, 3955];
	
	var marksData = {
	  labels: marklabels,
	  datasets: [{
		label: "News",
		fill: true,
		backgroundColor: "rgba(41, 204, 151, 0.2)",
		borderColor: "#29cc97",
		pointBorderWidth: 2,
		pointRadius: 4,
		pointBorderColor: "#29cc97",
		pointBackgroundColor: "#ffffff",
		data: marknews
	  }, {
		label: "Closures",
		fill: true,
		backgroundColor: "rgba(76,132,255,0.2)",
		borderColor: "#4c84ff",
		pointBorderWidth: 2,
		pointRadius: 4,
		pointBorderColor: "rgba(76,132,255,1)",
		pointBackgroundColor: "#ffffff",
		data: markclosures
	  }],
	  options: {
		responsive: true,
		maintainAspectRatio: false,
		legend: {
		  display: false
		},
		layout: {
		  padding: {
			top: 10,
			bottom: 10,
			right: 10,
			left: 10
		  }
		},
		scale: {
		  ticks: {
			beginAtZero: true,
			fontColor: "#1b223c",
			fontSize: 12,
			stepSize: 100,
			max: 8000
		  }
		},
		tooltips: {
		  titleFontColor: "#888",
		  bodyFontColor: "#555",
		  titleFontSize: 12,
		  bodyFontSize: 14,
		  backgroundColor: "rgba(256,256,256,0.95)",
		  displayColors: true,
		  borderColor: "rgba(220, 220, 220, 0.9)",
		  borderWidth: 2,
		  template: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
		}
	  }
	};

	var radarChart = new Chart(marksCanvas, {
	  type: 'radar',
	  data: marksData
	});
	
	var linedatarepairs = [22048.60,7875.20,14513.25,457.66,5581.31,13356.58,43375.12,601562.80,754504.86,728315.96,650228.22,425699.32];
	var linedatafee = [0.0,0.0,332.40,27.70,193.90,2899.20,8887.80,125267.10,156208.70,156054.60,140263.00,99768.10];

	var ctx = document.getElementById("linechart");
	
	if (ctx !== null) {
		var chart = new Chart(ctx, {
		  // The type of chart we want to create
		  type: "line",

		  // The data for our dataset
		  data: {
			labels: marklabels,
			datasets: [{
				label: "Repairs",
				backgroundColor: "transparent",
				borderColor: "rgb(82, 136, 255)",
				data: linedatarepairs,
				lineTension: 0.3,
				pointRadius: 5,
				pointBackgroundColor: "rgba(255,255,255,1)",
				pointHoverBackgroundColor: "rgba(255,255,255,1)",
				pointBorderWidth: 2,
				pointHoverRadius: 8,
				pointHoverBorderWidth: 1
			  },{
				label: "Fee",
				backgroundColor: "transparent",
				borderColor: "rgb(255, 136, 255)",
				data: linedatafee,
				lineTension: 0.3,
				pointRadius: 5,
				pointBackgroundColor: "rgba(255,255,255,1)",
				pointHoverBackgroundColor: "rgba(255,255,255,1)",
				pointBorderWidth: 2,
				pointHoverRadius: 8,
				pointHoverBorderWidth: 1
			  }
			]
		  },

		  // Configuration options go here
		  options: {
			responsive: true,
			maintainAspectRatio: false,
			legend: {
			  display: true,
			  align: 'botton'
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
					display: false
				  }
				}
			  ],
			  yAxes: [
				{
				  gridLines: {
					display: true,
					color: "#eee",
					zeroLineColor: "#eee",
				  },
				  ticks: {
					callback: function (value) {
					  var ranges = [
						{ divider: 1e6, suffix: "M" },
						{ divider: 1e4, suffix: "k" }
					  ];
					  function formatNumber(n) {
						for (var i = 0; i < ranges.length; i++) {
						  if (n >= ranges[i].divider) {
							return (
							  (n / ranges[i].divider).toString() + ranges[i].suffix
							);
						  }
						}
						return n;
					  }
					  return formatNumber(value);
					}
				  }
				}
			  ]
			},
			tooltips: {
			  /*callbacks: {
				title: function (tooltipItem, data) {
				  return data["labels"][tooltipItem[0]["index"]];
				},
				label: function (tooltipItem, data) {
				  return "€" + data["datasets"][0]["data"][tooltipItem["index"]];
				}
			  },*/
			  responsive: true,
			  intersect: false,
			  enabled: true,
			  titleFontColor: "#888",
			  bodyFontColor: "#555",
			  titleFontSize: 12,
			  bodyFontSize: 18,
			  backgroundColor: "rgba(256,256,256,0.95)",
			  xPadding: 20,
			  yPadding: 10,
			  displayColors: false,
			  borderColor: "rgba(220, 220, 220, 0.9)",
			  borderWidth: 2,
			  caretSize: 10,
			  caretPadding: 15
			}
		  }
		});
	}

});	
	
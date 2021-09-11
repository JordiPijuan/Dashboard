$(document).ready(function () {

	var closurebackgroundcolors = [
		"#007bff", 
		"#6610f2",
		"#6f42c1",
		"#e83e8c",
		"#dc3545",
		"#fd7e14",
		"#ffc107",
		"#28a745",
		"#20c997", 
		"#17a2b8",
		"#6c757d",
		"#343a40",
		"#6c757d",
		"#007bff",
		"#28a745",
		"#17a2b8",
		"#ffc107", 
		"#3cba9f",
		"#dc3545",
		"#e8c3b9",
		"#c45850",
		"#007bff",
		"#e83e8c"
	];
	
	var labelsclosures = [
		'CE1',
		'CE21',
		'CE22',
		'CE23',
		'CE24',
		'CE41',
		'CE42',
		'CE51',
		'CE52',
		'CE53',
		'CE54',
		'CE55',
		'CE71',
		'CE72',
		'CE73',
		'CE8',
		'CE91',
		'CE92',
		'CE94',
		'CE95',
		'CE101',
		'CE102',
		'CE103'
	];
	
	var datajan21 = [126,151,168,1,54,75,286,125,2,1,7,11,50,1740,44,20,74,3,870,27,56,46,42];
	var datadec20 = [139,187,368,2,84,157,442,213,5,7,0,38,104,3376,63,60,117,7,1067,33,150,115,96];

	var datanov20 = [492,247,375,3,84,164,547,250,5,2,15,26,126,3600,71,66,92,7,938,27,134,68,116];
	var dataoct20 = [10,223,403,2,119,185,538,177,4,1,12,28,118,4169,79,67,84,6,979,39,110,61,80];
	var datasep20 = [6,196,271,0,57,68,348,70,0,0,2,22,55,2812,28,73,58,1,782,32,22,33,58];
	
	var datatotal21 = [138,161,170,1,54,76,295,128,2,1,8,12,51,1763,47,21,79,3,929,27,61,48,43];
	var datatotal20 = [651,985,1508,7,366,610,2045,735,14,3,36,119,410,15172,250,353,422,27,4544,165,428,289,371];
	
	new Chart(document.getElementById("bar-chart-jan-21"), {
		type: 'bar',
		data: {
		  labels: labelsclosures,
		  datasets: [{
			  label: 'Jan-21',
			  backgroundColor: closurebackgroundcolors,
			  data: datajan21
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
				  },
				  barPercentage: 1.8,
				  categoryPercentage: 0.3
				}
			  ]
			},
			title: {
				display: false,
				text: 'Closures'
			}
		}
	});

	new Chart(document.getElementById("bar-chart-dec-20"), {
		type: 'bar',
		data: {
		  labels: labelsclosures,
		  datasets: [{
			  label: 'Dec-20',
			  backgroundColor: closurebackgroundcolors,
			  data: datadec20
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
				  },
				  barPercentage: 1.8,
				  categoryPercentage: 0.3
				}
			  ]
			},
			title: {
				display: false,
				text: 'Closures'
			}
		}
	});

	new Chart(document.getElementById("bar-chart-nov-20"), {
		type: 'bar',
		data: {
		  labels: labelsclosures,
		  datasets: [{
			  label: 'Nov-20',
			  backgroundColor: closurebackgroundcolors,
			  data: datanov20
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
				  },
				  barPercentage: 1.8,
				  categoryPercentage: 0.3
				}
			  ]
			},
			title: {
				display: false,
				text: 'Closures'
			}
		}
	});

	new Chart(document.getElementById("bar-chart-oct-20"), {
		type: 'bar',
		data: {
		  labels: labelsclosures,
		  datasets: [{
			  label: 'Oct-20',
			  backgroundColor: closurebackgroundcolors,
			  data: dataoct20
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
				  },
				  barPercentage: 1.8,
				  categoryPercentage: 0.3
				}
			  ]
			},
			title: {
				display: false,
				text: 'Closures'
			}
		}
	});

	new Chart(document.getElementById("bar-chart-sep-20"), {
		type: 'bar',
		data: {
		  labels: labelsclosures,
		  datasets: [{
			  label: 'Sep-20',
			  backgroundColor: closurebackgroundcolors,
			  data: datasep20
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
				  },
				  barPercentage: 1.8,
				  categoryPercentage: 0.3
				}
			  ]
			},
			title: {
				display: false,
				text: 'Closures'
			}
		}
	});

	new Chart(document.getElementById("bar-chart-total-21"), {
		type: 'bar',
		data: {
		  labels: labelsclosures,
		  datasets: [{
			  label: 'Total-21',
			  backgroundColor: closurebackgroundcolors,
			  data: datatotal21
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
				  },
				  barPercentage: 1.8,
				  categoryPercentage: 0.3
				}
			  ]
			},
			title: {
				display: false,
				text: 'Closures'
			}
		}
	});

	new Chart(document.getElementById("bar-chart-total-20"), {
		type: 'bar',
		data: {
		  labels: labelsclosures,
		  datasets: [{
			  label: 'Total-20',
			  backgroundColor: closurebackgroundcolors,
			  data: datatotal20
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
				  },
				  barPercentage: 1.8,
				  categoryPercentage: 0.3
				}
			  ]
			},
			title: {
				display: false,
				text: 'Closures'
			}
		}
	});

});	
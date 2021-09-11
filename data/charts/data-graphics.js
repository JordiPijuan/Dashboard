$(document).ready(function () {

	new Chart(document.getElementById("doughnut-chart"), {
		type: 'doughnut',
		data: {
		  labels: ["CE1", "CE94", "CE21", "CE72", "CE101"],
		  datasets: [
			{
			  label: "Population (millions)",
			  backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
			  data: [2478,5267,734,784,433],
			  hoverOffset: 10
			}
		  ]
		},
		options: {
			responsive: true,
			maintainAspectRatio: true,
			legend: {
			  display: true,
			  align: 'end',
			  position: 'left'
			},
			title: {
				display: false,
				text: 'Closures'
			}
		}
	});

	new Chart(document.getElementById("polar-chart"), {
		type: 'polarArea',
		data: {
		  labels: ["CE1", "CE94", "CE21", "CE72", "CE101"],
		  datasets: [
			{
			  label: "Closure: ",
			  backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
			  data: [2478,5267,734,784,433]
			}
		  ]
		},
		options: {
			responsive: true,
			maintainAspectRatio: true,
			legend: {
			  display: true,
			  align: 'end',
			  position: 'left'
			},
		  title: {
			display: false,
			text: 'Closures by type'
		  }
		}
	});

	/*new Chart(document.getElementById("polar-chart2"), {
		type: 'polarArea',
		data: {
		  labels: ["CE1", "CE94", "CE21", "CE72", "CE101"],
		  datasets: [
			{
			  label: "Closure: ",
			  backgroundColor: ["#3e95cd", "#e8c3b9", "#8e5ea2", "#3cba9f", "#c45850"],
			  data: [50,272,220,370,110]
			}
		  ]
		},
		options: {
		  title: {
			display: true,
			text: 'Closures by type'
		  }
		}
	});*/

	new Chart(document.getElementById("pie-chart"), {
		type: 'pie',
		data: {
		  labels: ["CE1", "CE94", "CE21", "CE72", "CE101"],
		  datasets: [{
			label: "Closure: ",
			backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
			data: [2478,5267,734,784,433]
		  }]
		},
		options: {
			responsive: true,
			maintainAspectRatio: true,
			legend: {
			  display: true,
			  align: 'end',
			  position: 'left'
			},
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
		}
	});

	new Chart(document.getElementById("doughnut-chart2"), {
	  type: "doughnut",
	  data: {
		labels: ['CE72', 'N/A'],
		datasets: [{
		  label: "foo",
		  data: [54, 46],
		  backgroundColor: [
			"rgba(29, 146, 5, 0.6)",
			"rgba(195, 195, 195, 0.6)"
		  ],
		  textcolor:["#000555","#555555"],
		  borderWidth: 3
		}] 
	  },
	  options: {
		rotation: Math.PI,
		circumference: Math.PI,
		cutoutPercentage: 75,
		plugins: {
		  datalabels: { 
			display: true,
			formatter: (value) => {
			  return value + '%';
			}						
		  },
		  doughnutlabel: {
			labels: [{
				text: "\nEmail Open Rate",
				color: "#171716",
				font: {
				  size: "25"
				}
			  }, {
				text: "\n12%",
				font: {
				  size: "40"
				}
			  }
			]
		  }
		}		
	  }
	});

	new Chart(document.getElementById("doughnut-chart3"), {
	  type: "doughnut",
	  data: {
		labels: ['CE94', 'N/A'],
		datasets: [{
		  label: 'CE94',
		  data: [84, 16],
		  backgroundColor: [
			"rgba(187, 66, 208, 0.6)",
			"rgba(195, 195, 195, 0.6)"
		  ],
		  textcolor:["#000555","#555555"],
		  borderWidth: 3,
		  hoverOffset: 4
		},{
		  label: "foo",
		  data: [16, 84],
		  backgroundColor: [
			"rgba(187, 66, 208, 0.6)",
			"rgba(195, 195, 195, 0.6)"
		  ],
		  textcolor:["#000555","#555555"],
		  borderWidth: 3,
		  hoverOffset: 4
		}]
	  },
	  options: {
		rotation: Math.PI,
		circumference: Math.PI,
		cutoutPercentage: 75,
		plugins: {
		  datalabels: { display: false },
		  doughnutlabel: {
			labels: [{
				text: "\nEmail Open Rate",
				color: "#171716",
				font: {
				  size: 25,
				  weight: 'bold'
				},
			  }, {
				text: "\n12%",
				font: {
				  size: 40,
				  weight: 'bold'
				},
			  },
			]
		  }
		}		
	  }
	});
	
	new Chart(document.getElementById("doughnut-chart4"), {
	  type: "doughnut",
	  data: {
		labels: ['CE21', 'N/A'],
		datasets: [{
		  label: 'CE21',
		  data: [84, 16],
		  backgroundColor: [
			"rgba(187, 66, 208, 0.6)",
			"rgba(195, 195, 195, 0.6)"
		  ],
		  textcolor:["#000555","#555555"],
		  borderWidth: 3,
		  hoverOffset: 4
		}]
	  },
	  options: {
		rotation: Math.PI,
		circumference: Math.PI,
		cutoutPercentage: 75,
		plugins: {
		  datalabels: { display: false }
		}		
	  }
	});

	new Chart(document.getElementById("doughnut-chart5"), {
	  type: "doughnut",
	  data: {
		labels: ['CE101', 'N/A'],
		datasets: [{
		  label: 'CE21',
		  data: [24, 76],
		  backgroundColor: [
			"rgba(187, 66, 208, 0.6)",
			"rgba(195, 195, 195, 0.6)"
		  ],
		  textcolor:["#000555","#555555"],
		  borderWidth: 3,
		  hoverOffset: 4
		}]
	  },
	  options: {
		rotation: Math.PI,
		circumference: Math.PI,
		cutoutPercentage: 75,
		plugins: {
		  datalabels: { display: false }
		}		
	  }
	});
	
	new Chart(document.getElementById("bar-area-line1"), {
		type: 'line',
		data: {
		labels: ['Week 44', 'Week 45', 'Week 46', 'Week 47', 'Week 48', 'Week 49', 'Week 50', 'Week 51', 'Week 52', 'Week 53'],
		datasets: [{
		  label: 'News',
		  data: [44, 1647, 1657, 1595, 1690, 1867, 1585, 1768, 1132, 1056],
		  borderColor: "#3e95cd",
		  backgroundColor: "rgba(196,245,245,0.6)",
		  fill: true
		}, {
		  label: 'Closed',
		  data: [1770, 1923, 1687, 1777, 1780, 1937, 1219, 1961, 1293, 602],
		  borderColor: "#8e5ea2",
		  backgroundColor: "rgba(214,188,218,0.6)",
		  fill: true
		}, {
		  label: 'Blocked',
		  data: [0,0,10,11,25,47, 49, 72, 73, 45],
		  borderColor: "#3cba9f",
		  backgroundColor: "rgba(219,241,193,0.6)",
		  fill: true
		}]
		},
		  options: {
			responsive: true,
			maintainAspectRatio: true,
			legend: {
			  display: true,
			  align: 'end',
			  position: 'bottom'
			},
			title: {
			  display: false,
			  text: 'Movements last month'
			}
		  }
	});

});	

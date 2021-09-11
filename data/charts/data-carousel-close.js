$(document).ready(function () {

	$('.carousel').carousel({
	  interval: false,
	});

	var daylabels = [
		'01','02','03','04','05','06','07','08','09','10',
		'11','12','13','14','15','16','17','18','19','20',
		'21','22','23','24','25','26','27','28','29','30',
		'31'
	];
	var day30labels = [
		'01','02','03','04','05','06','07','08','09','10',
		'11','12','13','14','15','16','17','18','19','20',
		'21','22','23','24','25','26','27','28','29','30'
	];
	
	var day28labels = [
		'01','02','03','04','05','06','07','08','09','10',
		'11','12','13','14','15','16','17','18','19','20',
		'21','22','23','24','25','26','27','28'
	];
	
	
	var abrdata = [90,1,97,49,407,351,278,225,194,87,72,358,300,282,241,223,68,47,323,267,252,251,203,78,53,334,299,280,218,193];
	var maydata = [44,48,165,441,252,223,231,57,28,395,335,259,229,215,49,49,378,298,268,235,182,54,49,374,265,232,237,214,65,58,362];
	var jundata = [334,261,228,208,68,50,329,290,210,217,199,63,48,199,154,179,175,172,45,55,261,181,148,152,125,40,41,240,159,0];

	var errorabrdata = [144,16,20,10,131,342,405,368,239,164,12,214,349,401,364,242,168,15,117,386,366,294,269,146,17,151,363,341,256,234];
	var errormaydata = [162,20,82,354,384,415,332,111,11,209,337,278,281,278,120,17,215,326,347,342,260,171,7,178,330,396,267,251,116,11,217];
	var errorjundata = [454,390,350,282,148,50,232,379,302,301,267,94,29,301,244,350,257,245,82,13,232,296,253,236,194,38,15,251,190,0];
	//News month
	var newsdata = [373,315,299,259,238,83,47,460,341,239,273,223,68,54,403,279,268,175,160,87,43,396,282,208,213,199,72,47,382,263,208];
	//Errors month
	var errordata = [150,265,291,309,293,188,12,149,354,402,360,270,164,25,205,314,294,206,197,96,12,217,256,316,207,321,165,9,129,288,284];
	//Previous
	var febdata = [520,415,339,303,227,28,41,483,362,320,321,267,63,58,94,293,305,272,246,65,81,446,297,309,275,249,80,46];
	var jandata = [49,98,86,397,327,73,393,347,166,108,631,483,484,403,393,112,104,542,395,396,388,462,160,115,625,381,363,308,274,93,59];
	var decdata = [323,285,305,260,115,65,202,94,468,352,297,110,62,479,322,305,262,239,111,50,375,246,209,118,25,98,61,492,348,216,97];	
	var novdata = [44,233,342,291,309,318,101,53,418,308,290,292,223,67,59,393,315,269,257,225,69,67,375,297,298,300,273,89,58,467];
	var octdata = [230,237,119,68,403,319,292,250,188,75,55,60,378,327,268,248,61,51,398,336,360,307,265,87,57,405,318,282,271,226,79];
	var sepdata = [294,258,273,197,55,48,354,260,268,228,204,59,62,336,299,251,253,246,108,50,390,280,256,246,243,76,54,342,295,267];
	//Previous
	var errorfebdata = [197,385,342,573,306,198,82,280,392,384,516,308,127,13,142,293,377,445,478,224,37,221,355,350,291,253,271,61];
	var errorjandata = [1,0,52,420,195,233,390,248,224,45,405,436,322,427,355,189,42,164,336,375,430,438,203,73,254,301,337,434,348,251,43];
	var errordecdata = [348,398,437,269,207,72,58,48,206,301,373,197,36,219,286,413,451,341,223,28,211,365,279,260,124,30,24,217,362,23,21];
	var errornovdata = [65,98,245,391,288,359,498,57,158,193,378,271,356,293,42,195,361,345,383,286,179,29,196,373,379,314,297,180,43,209];
	var erroroctdata = [259,261,153,31,129,334,325,326,313,164,19,11,545,317,314,316,187,46,169,338,378,133,442,214,56,177,394,440,258,294,144];
	var errorsepdata = [161,179,171,174,130,8,77,183,155,139,178,104,16,93,213,256,219,232,149,8,105,200,285,215,322,184,73,183,268,314];
	
	/* ------------------------------------------------------------------------------------------------------------------------------------------- */
	
	var jun21dataclosures = [307,307,248,206,21,35,222,267,186,184,161,24,13,295,244,229,168,168,31,10,224,224,211,206,168,11,11,245,163,217]
	var may21dataclosures = [9,11,81,304,253,278,195,8,6,202,172,132,114,116,4,8,212,207,197,213,151,39,5,176,205,246,135,126,14,7,216]
	var apr21dataclosures = [13,0,20,7,126,213,249,205,109,16,9,205,201,260,180,94,7,8,111,209,218,121,132,13,7,151,244,176,125,90]
	var mar21dataclosures = [131,119,101,141,123,24,10,136,184,233,129,102,5,8,195,139,92,95,82,27,4,215,119,164,72,168,165,2,119,147,121]
	var feb21dataclosures = [177,175,185,244,121,32,10,248,185,218,515,168,7,8,93,145,211,305,419,23,6,212,172,161,132,202,271,34]
	var jan21dataclosures = [1,0,52,400,166,6,161,113,20,21,405,234,134,288,173,35,22,158,191,187,252,261,59,19,259,130,146,238,157,82,8]

	var jun21nightdataclosures = [146,83,102,75,112,15,6,99,116,117,106,69,9,6,0,121,89,76,50,3,7,72,42,30,26,26,4,6,27,20]
	var may21nightdataclosures = [153,9,1,50,131,137,136,103,5,7,165,146,167,162,116,9,3,119,144,129,109,132,2,2,125,150,131,125,102,4,1]
	var apr21nightdataclosures = [131,15,0,3,5,129,156,163,130,148,3,9,148,141,184,148,161,7,7,177,148,173,137,133,10,0,119,165,131,144]
	var mar21nightdataclosures = [19,146,190,161,170,164,2,13,165,169,231,167,149,17,10,175,202,124,115,69,7,2,137,152,135,153,0,7,10,141,163]
	var feb21nightdataclosures = [12,211,157,202,182,151,38,30,207,160,1,140,116,5,49,148,166,139,60,159,31,9,183,189,159,51,0,2]
	var jan21nightdataclosures = [0,0,0,20,24,227,229,135,190,24,0,202,188,139,181,154,20,6,144,187,177,177,142,54,17,171,190,184,194,157,37]
	
	var dec20dataclosures = [128,163,437,204,18,39,39,13,188,155,207,21,8,198,139,202,284,208,24,10,190,156,276,98,5,27,15,205,207,19,21]
	var nov20dataclosures = [5,72,191,212,118,129,321,18,132,90,119,88,173,69,14,175,170,150,163,140,17,5,133,182,176,156,123,17,21,179]
	var oct20dataclosures = [121,118,32,20,123,156,167,136,122,23,10,3,533,144,116,139,19,35,153,156,126,133,118,12,17,153,153,439,119,107,127]
	var sep20dataclosures = [70,72,60,44,6,4,68,183,55,52,53,13,6,92,78,89,96,107,15,2,102,84,168,88,200,53,58,111,130,119]

	var dec20nightdataclosures = [220,235,65,189,33,19,35,18,146,165,0,175,28,22,147,211,167,133,199,18,21,209,3,162,119,3,9,12,155,4,0,0]
	var nov20nightdataclosures = [59,26,54,179,169,207,176,35,26,103,259,183,183,220,28,20,191,195,220,146,161,24,63,191,200,158,174,154,21,30]
	var oct20nightdataclosures = [138,134,110,9,6,178,138,190,191,141,6,7,12,172,198,177,168,11,16,182,0,252,324,201,38,24,241,1,139,187,17]
	var sep20nightdataclosures = [90,107,111,130,125,4,9,0,100,87,125,91,10,1,135,167,123,125,134,6,3,116,117,126,122,131,14,72,138,185]


	new Chart(document.getElementById("chartContainerJun21Closures"), {
		type: 'line',
		data: {
			labels: day30labels,
			datasets: [{
			  label: 'Día',
			  data: jun21dataclosures,
			  lineTension: 0,
			  pointRadius: 4,
			  pointBackgroundColor: "rgba(255,255,255,1)",
			  pointBorderWidth: 2,		  
			  borderColor: "#4580f9",
			  backgroundColor: "rgba(69,128,249,0.1)",
			  fill: true
			}, {
			  label: 'Noche',
			  data: jun21nightdataclosures,
			  lineTension: 0,
			  pointRadius: 4,
			  pointBackgroundColor: "rgba(255,255,255,1)",
			  pointBorderWidth: 2,		  
			  borderColor: "#007bff",
			  backgroundColor: "rgba(23,162,184,0.1)",
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
				right: 50,
				left: 50
			  }
			},
			title: {
			  display: true,
			  text: 'June-21'
			}
		}
	});
	
	new Chart(document.getElementById("chartContainerMay21Closures"), {
		type: 'line',
		data: {
			labels: daylabels,
			datasets: [{
			  label: 'Día',
			  data: may21dataclosures,
			  lineTension: 0,
			  pointRadius: 4,
			  pointBackgroundColor: "rgba(255,255,255,1)",
			  pointBorderWidth: 2,		  
			  borderColor: "#4580f9",
			  backgroundColor: "rgba(69,128,249,0.1)",
			  fill: true
			}, {
			  label: 'Noche',
			  data: may21nightdataclosures,
			  lineTension: 0,
			  pointRadius: 4,
			  pointBackgroundColor: "rgba(255,255,255,1)",
			  pointBorderWidth: 2,		  
			  borderColor: "#007bff",
			  backgroundColor: "rgba(23,162,184,0.1)",
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
				right: 50,
				left: 50
			  }
			},
			title: {
			  display: true,
			  text: 'May-21'
			}
		}
	});

	new Chart(document.getElementById("chartContainerApr21Closures"), {
		type: 'line',
		data: {
			labels: day30labels,
			datasets: [{
			  label: 'Día',
			  data: apr21dataclosures,
			  lineTension: 0,
			  pointRadius: 4,
			  pointBackgroundColor: "rgba(255,255,255,1)",
			  pointBorderWidth: 2,		  
			  borderColor: "#4580f9",
			  backgroundColor: "rgba(69,128,249,0.1)",
			  fill: true
			}, {
			  label: 'Noche',
			  data: apr21nightdataclosures,
			  lineTension: 0,
			  pointRadius: 4,
			  pointBackgroundColor: "rgba(255,255,255,1)",
			  pointBorderWidth: 2,		  
			  borderColor: "#007bff",
			  backgroundColor: "rgba(23,162,184,0.1)",
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
				right: 50,
				left: 50
			  }
			},
			title: {
			  display: true,
			  text: 'April-21'
			}
		}
	});
	
	new Chart(document.getElementById("chartContainerMar21Closures"), {
		type: 'line',
		data: {
			labels: daylabels,
			datasets: [{
			  label: 'Día',
			  data: mar21dataclosures,
			  lineTension: 0,
			  pointRadius: 4,
			  pointBackgroundColor: "rgba(255,255,255,1)",
			  pointBorderWidth: 2,		  
			  borderColor: "#4580f9",
			  backgroundColor: "rgba(69,128,249,0.1)",
			  fill: true
			}, {
			  label: 'Noche',
			  data: mar21nightdataclosures,
			  lineTension: 0,
			  pointRadius: 4,
			  pointBackgroundColor: "rgba(255,255,255,1)",
			  pointBorderWidth: 2,		  
			  borderColor: "#007bff",
			  backgroundColor: "rgba(23,162,184,0.1)",
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
				right: 50,
				left: 50
			  }
			},
			title: {
			  display: true,
			  text: 'March-21'
			}
		}
	});

	new Chart(document.getElementById("chartContainerFeb21Closures"), {
		type: 'line',
		data: {
			labels: day28labels,
			datasets: [{
			  label: 'Día',
			  data: feb21dataclosures,
			  lineTension: 0,
			  pointRadius: 4,
			  pointBackgroundColor: "rgba(255,255,255,1)",
			  pointBorderWidth: 2,		  
			  borderColor: "#4580f9",
			  backgroundColor: "rgba(69,128,249,0.1)",
			  fill: true
			}, {
			  label: 'Noche',
			  data: feb21nightdataclosures,
			  lineTension: 0,
			  pointRadius: 4,
			  pointBackgroundColor: "rgba(255,255,255,1)",
			  pointBorderWidth: 2,		  
			  borderColor: "#007bff",
			  backgroundColor: "rgba(23,162,184,0.1)",
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
				right: 50,
				left: 50
			  }
			},
			title: {
			  display: true,
			  text: 'February-21'
			}
		}
	});
	
	new Chart(document.getElementById("chartContainerJan21Closures"), {
		type: 'line',
		data: {
			labels: daylabels,
			datasets: [{
			  label: 'Día',
			  data: jan21dataclosures,
			  lineTension: 0,
			  pointRadius: 4,
			  pointBackgroundColor: "rgba(255,255,255,1)",
			  pointBorderWidth: 2,		  
			  borderColor: "#4580f9",
			  backgroundColor: "rgba(69,128,249,0.1)",
			  fill: true
			}, {
			  label: 'Noche',
			  data: jan21nightdataclosures,
			  lineTension: 0,
			  pointRadius: 4,
			  pointBackgroundColor: "rgba(255,255,255,1)",
			  pointBorderWidth: 2,		  
			  borderColor: "#007bff",
			  backgroundColor: "rgba(23,162,184,0.1)",
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
				right: 50,
				left: 50
			  }
			},
			title: {
			  display: true,
			  text: 'January-21'
			}
		}
	});

	new Chart(document.getElementById("chartContainerDec20Closures"), {
		type: 'line',
		data: {
			labels: daylabels,
			datasets: [{
			  label: 'Día',
			  data: dec20dataclosures,
			  lineTension: 0,
			  pointRadius: 4,
			  pointBackgroundColor: "rgba(255,255,255,1)",
			  pointBorderWidth: 2,		  
			  borderColor: "#4580f9",
			  backgroundColor: "rgba(69,128,249,0.1)",
			  fill: true
			}, {
			  label: 'Noche',
			  data: dec20nightdataclosures,
			  lineTension: 0,
			  pointRadius: 4,
			  pointBackgroundColor: "rgba(255,255,255,1)",
			  pointBorderWidth: 2,		  
			  borderColor: "#007bff",
			  backgroundColor: "rgba(23,162,184,0.1)",
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
				right: 50,
				left: 50
			  }
			},
			title: {
			  display: true,
			  text: 'December-20'
			}
		}
	});

	new Chart(document.getElementById("chartContainerNov20Closures"), {
		type: 'line',
		data: {
			labels: day30labels,
			datasets: [{
			  label: 'Día',
			  data: nov20dataclosures,
			  lineTension: 0,
			  pointRadius: 4,
			  pointBackgroundColor: "rgba(255,255,255,1)",
			  pointBorderWidth: 2,		  
			  borderColor: "#4580f9",
			  backgroundColor: "rgba(69,128,249,0.1)",
			  fill: true
			}, {
			  label: 'Noche',
			  data: nov20nightdataclosures,
			  lineTension: 0,
			  pointRadius: 4,
			  pointBackgroundColor: "rgba(255,255,255,1)",
			  pointBorderWidth: 2,		  
			  borderColor: "#007bff",
			  backgroundColor: "rgba(23,162,184,0.1)",
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
				right: 50,
				left: 50
			  }
			},
			title: {
			  display: true,
			  text: 'November-20'
			}
		}
	});
	
	new Chart(document.getElementById("chartContainerOct20Closures"), {
		type: 'line',
		data: {
			labels: daylabels,
			datasets: [{
			  label: 'Día',
			  data: oct20dataclosures,
			  lineTension: 0,
			  pointRadius: 4,
			  pointBackgroundColor: "rgba(255,255,255,1)",
			  pointBorderWidth: 2,		  
			  borderColor: "#4580f9",
			  backgroundColor: "rgba(69,128,249,0.1)",
			  fill: true
			}, {
			  label: 'Noche',
			  data: oct20nightdataclosures,
			  lineTension: 0,
			  pointRadius: 4,
			  pointBackgroundColor: "rgba(255,255,255,1)",
			  pointBorderWidth: 2,		  
			  borderColor: "#007bff",
			  backgroundColor: "rgba(23,162,184,0.1)",
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
				right: 50,
				left: 50
			  }
			},
			title: {
			  display: true,
			  text: 'October-20'
			}
		}
	});

	new Chart(document.getElementById("chartContainerSep20Closures"), {
		type: 'line',
		data: {
			labels: day30labels,
			datasets: [{
			  label: 'Día',
			  data: sep20dataclosures,
			  lineTension: 0,
			  pointRadius: 4,
			  pointBackgroundColor: "rgba(255,255,255,1)",
			  pointBorderWidth: 2,		  
			  borderColor: "#4580f9",
			  backgroundColor: "rgba(69,128,249,0.1)",
			  fill: true
			}, {
			  label: 'Noche',
			  data: sep20nightdataclosures,
			  lineTension: 0,
			  pointRadius: 4,
			  pointBackgroundColor: "rgba(255,255,255,1)",
			  pointBorderWidth: 2,		  
			  borderColor: "#007bff",
			  backgroundColor: "rgba(23,162,184,0.1)",
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
				right: 50,
				left: 50
			  }
			},
			title: {
			  display: true,
			  text: 'September-20'
			}
		}
	});
	
	



	
	new Chart(document.getElementById("chartContainerCloseJun21"), {
		type: 'line',
		data: {
			labels: day30labels,
			datasets: [{
			  label: 'Altas',
			  data: jundata,
			  lineTension: 0,
			  pointRadius: 4,
			  pointBackgroundColor: "rgba(255,255,255,1)",
			  pointBorderWidth: 2,		  
			  borderColor: "#4580f9",
			  backgroundColor: "rgba(69,128,249,0.1)",
			  fill: true
			}, {
			  label: 'Cierres',
			  data: errorjundata,
			  lineTension: 0,
			  pointRadius: 4,
			  pointBackgroundColor: "rgba(255,255,255,1)",
			  pointBorderWidth: 2,		  
			  borderColor: "#007bff",
			  backgroundColor: "rgba(23,162,184,0.1)",
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
				right: 10,
				left: 30
			  }
			},
			title: {
			  display: true,
			  text: 'June-21'
			}
		}
	});
	
	new Chart(document.getElementById("chartContainerCloseMay21"), {
		type: 'line',
		data: {
			labels: daylabels,
			datasets: [{
			  label: 'Altas',
			  data: maydata,
			  lineTension: 0,
			  pointRadius: 4,
			  pointBackgroundColor: "rgba(255,255,255,1)",
			  pointBorderWidth: 2,		  
			  borderColor: "#4580f9",
			  backgroundColor: "rgba(69,128,249,0.1)",
			  fill: true
			}, {
			  label: 'Cierres',
			  data: errormaydata,
			  lineTension: 0,
			  pointRadius: 4,
			  pointBackgroundColor: "rgba(255,255,255,1)",
			  pointBorderWidth: 2,		  
			  borderColor: "#007bff",
			  backgroundColor: "rgba(23,162,184,0.1)",
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
				right: 10,
				left: 30
			  }
			},
			title: {
			  display: true,
			  text: 'May-21'
			}
		}
	});
	
	new Chart(document.getElementById("chartContainerCloseAbr21"), {
		type: 'line',
		data: {
			labels: day30labels,
			datasets: [{
			  label: 'Altas',
			  data: abrdata,
			  lineTension: 0,
			  pointRadius: 4,
			  pointBackgroundColor: "rgba(255,255,255,1)",
			  pointBorderWidth: 2,		  
			  borderColor: "#4580f9",
			  backgroundColor: "rgba(69,128,249,0.1)",
			  fill: true
			}, {
			  label: 'Cierres',
			  data: errorabrdata,
			  lineTension: 0,
			  pointRadius: 4,
			  pointBackgroundColor: "rgba(255,255,255,1)",
			  pointBorderWidth: 2,		  
			  borderColor: "#007bff",
			  backgroundColor: "rgba(23,162,184,0.1)",
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
				right: 10,
				left: 30
			  }
			},
			title: {
			  display: true,
			  text: 'April-21'
			}
		}
	});
	
	new Chart(document.getElementById("chartContainerClose"), {
		type: 'line',
		data: {
			labels: daylabels,
			datasets: [{
			  label: 'Altas',
			  data: newsdata,
			  lineTension: 0,
			  pointRadius: 4,
			  pointBackgroundColor: "rgba(255,255,255,1)",
			  pointBorderWidth: 2,		  
			  borderColor: "#4580f9",
			  backgroundColor: "rgba(69,128,249,0.1)",
			  fill: true
			}, {
			  label: 'Cierres',
			  data: errordata,
			  lineTension: 0,
			  pointRadius: 4,
			  pointBackgroundColor: "rgba(255,255,255,1)",
			  pointBorderWidth: 2,		  
			  borderColor: "#007bff",
			  backgroundColor: "rgba(23,162,184,0.1)",
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
				right: 10,
				left: 30
			  }
			},
			title: {
			  display: true,
			  text: 'March-21'
			}
		}
	});
	
	new Chart(document.getElementById("chartContainerCloseFeb21"), {
		type: 'line',
		data: {
			labels: day28labels,
			datasets: [{
			  label: 'Altas',
			  data: febdata,
			  lineTension: 0,
			  pointRadius: 4,
			  pointBackgroundColor: "rgba(255,255,255,1)",
			  pointBorderWidth: 2,		  
			  borderColor: "#4580f9",
			  backgroundColor: "rgba(69,128,249,0.1)",
			  fill: true
			}, {
			  label: 'Cierres',
			  data: errorfebdata,
			  lineTension: 0,
			  pointRadius: 4,
			  pointBackgroundColor: "rgba(255,255,255,1)",
			  pointBorderWidth: 2,		  
			  borderColor: "#007bff",
			  backgroundColor: "rgba(23,162,184,0.1)",
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
				right: 10,
				left: 30
			  }
			},
			title: {
			  display: true,
			  text: 'February-21'
			}
		}
	});
	
	new Chart(document.getElementById("chartContainerClose1"), {
		type: 'line',
		data: {
			labels: daylabels,
			datasets: [{
			  label: 'Altas',
			  data: jandata,
			  lineTension: 0,
			  pointRadius: 4,
			  pointBackgroundColor: "rgba(255,255,255,1)",
			  pointBorderWidth: 2,		  
			  borderColor: "#4580f9",
			  backgroundColor: "rgba(69,128,249,0.1)",
			  fill: true
			}, {
			  label: 'Cierres',
			  data: errorjandata,
			  lineTension: 0,
			  pointRadius: 4,
			  pointBackgroundColor: "rgba(255,255,255,1)",
			  pointBorderWidth: 2,		  
			  borderColor: "#007bff",
			  backgroundColor: "rgba(23,162,184,0.1)",
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
				right: 10,
				left: 30
			  }
			},
			title: {
			  display: true,
			  text: 'January-21'
			}
		}
	});
	
	new Chart(document.getElementById("chartContainerClose2"), {
		type: 'line',
		data: {
			labels: daylabels,
			datasets: [{
			  label: 'Altas',
			  data: decdata,
			  lineTension: 0,
			  pointRadius: 4,
			  pointBackgroundColor: "rgba(255,255,255,1)",
			  pointBorderWidth: 2,		  
			  borderColor: "#4580f9",
			  backgroundColor: "rgba(69,128,249,0.1)",
			  fill: true
			}, {
			  label: 'Cierres',
			  data: errordecdata,
			  lineTension: 0,
			  pointRadius: 4,
			  pointBackgroundColor: "rgba(255,255,255,1)",
			  pointBorderWidth: 2,		  
			  borderColor: "#007bff",
			  backgroundColor: "rgba(23,162,184,0.1)",
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
				right: 10,
				left: 30
			  }
			},
			title: {
			  display: true,
			  text: 'December-20'
			}
		  }
	});
	
	new Chart(document.getElementById("chartContainerClose3"), {
		type: 'line',
		data: {
			labels: day30labels,
			datasets: [{
			  label: 'Altas',
			  data: novdata,
			  lineTension: 0,
			  pointRadius: 4,
			  pointBackgroundColor: "rgba(255,255,255,1)",
			  pointBorderWidth: 2,		  
			  borderColor: "#4580f9",
			  backgroundColor: "rgba(69,128,249,0.1)",
			  fill: true
			}, {
			  label: 'Cierres',
			  data: errornovdata,
			  lineTension: 0,
			  pointRadius: 4,
			  pointBackgroundColor: "rgba(255,255,255,1)",
			  pointBorderWidth: 2,		  
			  borderColor: "#007bff",
			  backgroundColor: "rgba(23,162,184,0.1)",
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
				right: 10,
				left: 30
			  }
			},
			title: {
			  display: true,
			  text: 'November-20'
			}
		  }
	});

	new Chart(document.getElementById("chartContainerClose4"), {
		type: 'line',
		data: {
			labels: daylabels,
			datasets: [{
			  label: 'Altas',
			  data: octdata,
			  lineTension: 0,
			  pointRadius: 4,
			  pointBackgroundColor: "rgba(255,255,255,1)",
			  pointBorderWidth: 2,		  
			  borderColor: "#4580f9",
			  backgroundColor: "rgba(69,128,249,0.1)",
			  fill: true
			}, {
			  label: 'Cierres',
			  data: erroroctdata,
			  lineTension: 0,
			  pointRadius: 4,
			  pointBackgroundColor: "rgba(255,255,255,1)",
			  pointBorderWidth: 2,		  
			  borderColor: "#007bff",
			  backgroundColor: "rgba(23,162,184,0.1)",
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
				right: 10,
				left: 30
			  }
			},
			title: {
			  display: true,
			  text: 'October-20'
			}
		  }
	});
	
	new Chart(document.getElementById("chartContainerClose5"), {
		type: 'line',
		data: {
			labels: day30labels,
			datasets: [{
			  label: 'Altas',
			  data: sepdata,
			  lineTension: 0,
			  pointRadius: 4,
			  pointBackgroundColor: "rgba(255,255,255,1)",
			  pointBorderWidth: 2,		  
			  borderColor: "#4580f9",
			  backgroundColor: "rgba(69,128,249,0.1)",
			  fill: true
			}, {
			  label: 'Cierres',
			  data: errorsepdata,
			  lineTension: 0,
			  pointRadius: 4,
			  pointBackgroundColor: "rgba(255,255,255,1)",
			  pointBorderWidth: 2,		  
			  borderColor: "#007bff",
			  backgroundColor: "rgba(23,162,184,0.1)",
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
				right: 10,
				left: 30
			  }
			},
			title: {
			  display: true,
			  text: 'September-20'
			}
		  }
	});


});	






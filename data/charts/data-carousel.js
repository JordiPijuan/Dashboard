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
	
	var abrdata = [1589,110,649,294,3634,5211,5618,5372,4266,1822,693,4689,4824,5452,4850,4106,1521,329,3441,5382,5396,4558,3912,1373,372,3772,5180,5259,4384,4360];
	var maydata = [1901,904,3176,8163,5182,5455,4163,1387,310,4537,5592,5189,4353,4066,1100,348,5043,7148,6226,4224,3839,1375,291,4171,4804,4625,3989,3468,1072,366,4155];
	var jundata = [5697,4527,4138,3660,1323,683,4123,4906,4138,4112,3727,946,399,4662,3880,4048,3538,3446,870,343,4089,4200,3646,3383,2832,445,306,3517,3223,0];

	var errorabrdata = [4,1,1,0,21,33,50,28,20,4,0,34,26,80,30,29,5,0,16,31,26,45,20,4,2,20,32,17,23,31];
	var errormaydata = [5,2,5,14,65,50,27,4,1,22,23,23,19,28,2,1,13,20,77,24,32,2,1,19,39,30,20,15,1,0,19];
	var errorjundata = [45,22,36,39,5,3,37,31,20,15,18,5,1,58,286,21,19,18,2,6,24,27,19,15,24,0,0,27,22,0];
	
	
	//News month
	var newsdata = [4097,4505,4992,4660,4553,1671,317,4385,5439,5343,5289,4196,1544,432,4701,4638,5009,3540,3368,1360,573,4891,4621,4732,3584,4185,1577,313,3809,4587,4085];
	//Errors month
	var errordata = [14,20,27,33,21,2,1,20,35,30,34,35,1,1,21,16,27,26,30,6,1,33,19,26,31,30,0,0,21,30,31];

	//Previous
	var febdata = [4937,5847,5655,6332,5122,1742,941,6460,6068,5499,6268,4844,1248,425,3130,4778,5595,6029,5935,1710,690,4581,5258,5311,4800,4795,2106,402];
	var jandata = [1459,416,830,4974,4522,3505,7022,5010,3156,1395,5649,7344,5904,5638,5645,1807,767,5207,5456,5628,6038,5666,2223,1134,5527,5324,5718,7372,5247,2534,631];
	var decdata = [5094,5022,5492,3934,1963,850,1403,850,4640,5080,5127,1895,561,5186,4780,5311,5357,4471,2084,446,4298,5358,4279,3396,1045,614,436,4988,5159,4227,3560];	
	var novdata = [625,1922,4504,5656,4900,5010,2744,541,3736,3738,5017,4516,5090,2425,485,4350,5112,4951,5027,4234,1502,625,4421,4913,4970,4568,4667,1757,715,4716];
	var octdata = [4122,4047,1663,696,3819,5051,4607,4786,3931,1559,393,411,6660,4788,4627,4604,2107,569,3929,4696,5559,3419,5367,1822,556,4216,5356,5525,4158,4202,1665];
	var sepdata = [3076,3206,3197,2902,1308,366,2922,3167,3075,2859,2837,999,407,3117,4107,4304,3676,3813,1605,379,3412,3618,4118,3691,4084,1470,880,3924,4201,4490];
	//Previous
	var errorfebdata = [26,25,28,40,58,17,13,36,29,19,34,20,5,2,17,26,21,27,21,11,2,12,29,17,19,606,7,0];
	var errorjandata = [0,0,1,16,10,4,21,19,4,3,15,21,22,19,7,8,2,17,21,21,7,11,30,5,11,16,14,34,23,16,5];
	var errordecdata = [14,13,17,13,4,2,4,2,19,10,5,0,2,20,17,14,19,11,0,0,28,15,21,6,8,0,2,13,18,15,5];
	var errornovdata = [1,13,36,21,14,18,2,3,13,7,20,11,17,5,0,11,25,19,16,15,3,0,13,12,15,17,12,2,1,16];
	var erroroctdata = [49,35,22,11,38,46,66,74,49,32,4,3,13,21,23,28,10,11,29,31,45,23,63,7,5,18,28,35,33,16,2];
	var errorsepdata = [31,26,21,22,96,145,63,38,62,61,54,14,3,20,36,60,41,44,36,1,22,39,39,53,34,41,20,12,43,38];
	
	
	new Chart(document.getElementById("chartContainerJun21"), {
		type: 'line',
		data: {
			labels: day30labels,
			datasets: [{
			  label: 'Ok',
			  data: jundata,
			  lineTension: 0,
			  pointRadius: 4,
			  pointBackgroundColor: "rgba(255,255,255,1)",
			  pointBorderWidth: 2,		  
			  borderColor: "#29cc97",
			  backgroundColor: "rgba(41,204,151,0.3)",
			  fill: true
			}, {
			  label: 'Ko',
			  data: errorjundata,
			  lineTension: 0,
			  pointRadius: 4,
			  pointBackgroundColor: "rgba(255,255,255,1)",
			  pointBorderWidth: 2,		  
			  borderColor: "#28a745",
			  backgroundColor: "rgba(40,167,69,0.3)",
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
				right: 60,
				left: 30
			  }
			},
			title: {
			  display: true,
			  text: 'June-21'
			}
		}
	});
	
	new Chart(document.getElementById("chartContainerMay21"), {
		type: 'line',
		data: {
			labels: daylabels,
			datasets: [{
			  label: 'Ok',
			  data: maydata,
			  lineTension: 0,
			  pointRadius: 4,
			  pointBackgroundColor: "rgba(255,255,255,1)",
			  pointBorderWidth: 2,		  
			  borderColor: "#29cc97",
			  backgroundColor: "rgba(41,204,151,0.3)",
			  fill: true
			}, {
			  label: 'Ko',
			  data: errormaydata,
			  lineTension: 0,
			  pointRadius: 4,
			  pointBackgroundColor: "rgba(255,255,255,1)",
			  pointBorderWidth: 2,		  
			  borderColor: "#28a745",
			  backgroundColor: "rgba(40,167,69,0.3)",
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
				right: 60,
				left: 30
			  }
			},
			title: {
			  display: true,
			  text: 'May-21'
			}
		}
	});
	
	new Chart(document.getElementById("chartContainerAbr21"), {
		type: 'line',
		data: {
			labels: day30labels,
			datasets: [{
			  label: 'Ok',
			  data: abrdata,
			  lineTension: 0,
			  pointRadius: 4,
			  pointBackgroundColor: "rgba(255,255,255,1)",
			  pointBorderWidth: 2,		  
			  borderColor: "#29cc97",
			  backgroundColor: "rgba(41,204,151,0.3)",
			  fill: true
			}, {
			  label: 'Ko',
			  data: errorabrdata,
			  lineTension: 0,
			  pointRadius: 4,
			  pointBackgroundColor: "rgba(255,255,255,1)",
			  pointBorderWidth: 2,		  
			  borderColor: "#28a745",
			  backgroundColor: "rgba(40,167,69,0.3)",
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
				right: 60,
				left: 30
			  }
			},
			title: {
			  display: true,
			  text: 'April-21'
			}
		}
	});
	
	new Chart(document.getElementById("chartContainer"), {
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
			  borderColor: "#28a745",
			  backgroundColor: "rgba(40,167,69,0.3)",
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
				right: 60,
				left: 30
			  }
			},
			title: {
			  display: true,
			  text: 'March-21'
			}
		}
	});
	
	new Chart(document.getElementById("chartContainerFeb21"), {
		type: 'line',
		data: {
			labels: day28labels,
			datasets: [{
			  label: 'Ok',
			  data: febdata,
			  lineTension: 0,
			  pointRadius: 4,
			  pointBackgroundColor: "rgba(255,255,255,1)",
			  pointBorderWidth: 2,		  
			  borderColor: "#29cc97",
			  backgroundColor: "rgba(41,204,151,0.3)",
			  fill: true
			}, {
			  label: 'Ko',
			  data: errorfebdata,
			  lineTension: 0,
			  pointRadius: 4,
			  pointBackgroundColor: "rgba(255,255,255,1)",
			  pointBorderWidth: 2,		  
			  borderColor: "#28a745",
			  backgroundColor: "rgba(40,167,69,0.3)",
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
				right: 60,
				left: 30
			  }
			},
			title: {
			  display: true,
			  text: 'February-21'
			}
		}
	});
	
	new Chart(document.getElementById("chartContainer1"), {
		type: 'line',
		data: {
			labels: daylabels,
			datasets: [{
			  label: 'Ok',
			  data: jandata,
			  lineTension: 0,
			  pointRadius: 4,
			  pointBackgroundColor: "rgba(255,255,255,1)",
			  pointBorderWidth: 2,		  
			  borderColor: "#29cc97",
			  backgroundColor: "rgba(41,204,151,0.3)",
			  fill: true
			}, {
			  label: 'Ko',
			  data: errorjandata,
			  lineTension: 0,
			  pointRadius: 4,
			  pointBackgroundColor: "rgba(255,255,255,1)",
			  pointBorderWidth: 2,		  
			  borderColor: "#28a745",
			  backgroundColor: "rgba(40,167,69,0.3)",
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
				right: 60,
				left: 30
			  }
			},
			title: {
			  display: true,
			  text: 'January-21'
			}
		}
	});
	
	new Chart(document.getElementById("chartContainer2"), {
		type: 'line',
		data: {
			labels: daylabels,
			datasets: [{
			  label: 'Ok',
			  data: decdata,
			  lineTension: 0,
			  pointRadius: 4,
			  pointBackgroundColor: "rgba(255,255,255,1)",
			  pointBorderWidth: 2,		  
			  borderColor: "#29cc97",
			  backgroundColor: "rgba(41,204,151,0.3)",
			  fill: true
			}, {
			  label: 'Ko',
			  data: errordecdata,
			  lineTension: 0,
			  pointRadius: 4,
			  pointBackgroundColor: "rgba(255,255,255,1)",
			  pointBorderWidth: 2,		  
			  borderColor: "#28a745",
			  backgroundColor: "rgba(40,167,69,0.3)",
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
				right: 60,
				left: 30
			  }
			},
			title: {
			  display: true,
			  text: 'December-20'
			}
		  }
	});
	
	new Chart(document.getElementById("chartContainer3"), {
		type: 'line',
		data: {
			labels: day30labels,
			datasets: [{
			  label: 'Ok',
			  data: novdata,
			  lineTension: 0,
			  pointRadius: 4,
			  pointBackgroundColor: "rgba(255,255,255,1)",
			  pointBorderWidth: 2,		  
			  borderColor: "#29cc97",
			  backgroundColor: "rgba(41,204,151,0.3)",
			  fill: true
			}, {
			  label: 'Ko',
			  data: errornovdata,
			  lineTension: 0,
			  pointRadius: 4,
			  pointBackgroundColor: "rgba(255,255,255,1)",
			  pointBorderWidth: 2,		  
			  borderColor: "#28a745",
			  backgroundColor: "rgba(40,167,69,0.3)",
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
				right: 60,
				left: 30
			  }
			},
			title: {
			  display: true,
			  text: 'November-20'
			}
		  }
	});

	new Chart(document.getElementById("chartContainer4"), {
		type: 'line',
		data: {
			labels: daylabels,
			datasets: [{
			  label: 'Ok',
			  data: octdata,
			  lineTension: 0,
			  pointRadius: 4,
			  pointBackgroundColor: "rgba(255,255,255,1)",
			  pointBorderWidth: 2,		  
			  borderColor: "#29cc97",
			  backgroundColor: "rgba(41,204,151,0.3)",
			  fill: true
			}, {
			  label: 'Ko',
			  data: erroroctdata,
			  lineTension: 0,
			  pointRadius: 4,
			  pointBackgroundColor: "rgba(255,255,255,1)",
			  pointBorderWidth: 2,		  
			  borderColor: "#28a745",
			  backgroundColor: "rgba(40,167,69,0.3)",
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
				right: 60,
				left: 30
			  }
			},
			title: {
			  display: true,
			  text: 'October-20'
			}
		  }
	});
	
	new Chart(document.getElementById("chartContainer5"), {
		type: 'line',
		data: {
			labels: day30labels,
			datasets: [{
			  label: 'Ok',
			  data: sepdata,
			  lineTension: 0,
			  pointRadius: 4,
			  pointBackgroundColor: "rgba(255,255,255,1)",
			  pointBorderWidth: 2,		  
			  borderColor: "#29cc97",
			  backgroundColor: "rgba(41,204,151,0.3)",
			  fill: true
			}, {
			  label: 'Ko',
			  data: errorsepdata,
			  lineTension: 0,
			  pointRadius: 4,
			  pointBackgroundColor: "rgba(255,255,255,1)",
			  pointBorderWidth: 2,		  
			  borderColor: "#28a745",
			  backgroundColor: "rgba(40,167,69,0.3)",
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
				right: 60,
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






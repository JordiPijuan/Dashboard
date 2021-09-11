$(document).ready(function () {

	const ctx = document.getElementById('myChart').getContext('2d');

	var gradientFill = ctx.createLinearGradient(0, 150, 0, 50);
	gradientFill.addColorStop(0, "rgba(40, 167, 69, 0.8)");
	gradientFill.addColorStop(1, "rgba(40, 167, 69, 0.3)");

	const chart = new Chart(ctx, {
	  type: 'line',
	  data: {
		labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
		datasets: [{
			data: [435, 321, 532, 801, 1231, 1098, 732, 321, 451, 482, 513, 397],
			backgroundColor: gradientFill,
			fill: true
		  }
		]
	  },
	  options: {
		responsive: false,
		legend: {
		  display: false
		},
		elements: {
		  line: {
			borderColor: '#28a745',
			borderWidth: 3
		  },
		  point: {
			radius: 0
		  }
		},
		tooltips: {
		  enabled: false
		},
		scales: {
		  yAxes: [
			{
			  display: false
			}
		  ],
		  xAxes: [
			{
			  display: false
			}
		  ]
		}
	  }
	});

	var densityCanvas = document.getElementById("densityChart").getContext('2d');

	var densityData = {
	  label: 'Density of Planet (kg/m3)',
	  data: [5427, 5243, 5514, 3933, 1326, 6687, 1271, 1638, 2562, 4720],
	  backgroundColor: 'rgba(58, 196, 125, 0.6)',
	  borderWidth: 0,
	  yAxisID: "y-axis-density"
	};
	 
	var gravityData = {
	  label: 'Gravity of Planet (m/s2)',
	  data: [3250, 4412, 5332, 5500, 4521, 3695, 4023, 4218, 1500, 4980],
	  backgroundColor: '#28a745',
	  borderWidth: 0,
	  yAxisID: "y-axis-gravity"
	};
	 
	var planetData = {
	  labels: ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "", "", ""],
	  datasets: [densityData, gravityData]
	};
	 
	var chartOptions = {
		responsive: false,
		tooltips: {
		  enabled: false
		},
		legend: {
		  display: false
		},
		scales: {
		  yAxes: [{
			  display: false,
			  id: "y-axis-density"
			}, {
			  display: false,
			  id: "y-axis-gravity"
			}
		  ],
		  xAxes: [{
			  display: false,
			  padding: 0		  
			}
		  ]
		}
	};
	 
	var barChart = new Chart(densityCanvas, {
	  type: 'bar',
	  data: planetData,
	  options: chartOptions
	});
	

	var oilCanvas = document.getElementById("oilChart");
	
	var oilData  = {
		labels: [
			"Saudi Arabia",
			"Russia",
			"Iraq",
			"United Arab Emirates",
			"Canada"
		],
		datasets: [
			{
				data: [133.3, 86.2, 52.2, 51.2, 50.2],
				backgroundColor: [
					"#28a745",
					"#28a745cc",
					"#28a74599",
					"#63FF84",
					"#84FF63"
				]
			}
		]
	};
	
	var oilOptions = {
		responsive: false,
		tooltips: {
		  enabled: false
		},
		legend: {
		  display: false
		}
	};
	 
	var pieChart = new Chart(oilCanvas, {
	  type: 'pie',
	  data: oilData,
	  options: oilOptions
	});
	
});	

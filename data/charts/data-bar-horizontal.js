$(document).ready(function () {

	var canvas = document.getElementById("bar-chart-horizontal");
	var ctxhorizontal = canvas.getContext('2d');
	
	/*var gradientFill = ctxhorizontal.createLinearGradient(0, 0, 800, 350);
	gradientFill.addColorStop(0, "rgba(173, 53, 186, 0.5)");
	gradientFill.addColorStop(1, "rgba(173, 53, 186, 0.1)");
	
	ctxhorizontal.fillStyle = gradientFill;
	ctxhorizontal.fillRect(0, 0, canvas.width, canvas.height);*/
	
	var posColour = 'rgba(0, 255, 0, .1)';
	var	negColour = 'rgba(255, 0, 0, .1)';
	
	new Chart(ctxhorizontal, {
		type: 'horizontalBar',
		//backgroundColor: '#CFD8DC',
		data: {
		  labels: ["August", "September", "October", "November", "December"],
		  datasets: [
			{
			  label: "Movements",
			  backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
			  data: [49202,85210,108910,107437,103346]
			}
		  ]
		},
		options: {
		  legend: { display: false },
		  title: {
			display: true,
			text: 'Movements AEGON (v3)'
		  }
		},
		// source: https://github.com/chartjs/Chart.js/issues/3071#issuecomment-371001496
		/*plugins: [{
		  beforeRender: function(c, options) {
			var c = x.chart;
			var dataset = x.data.datasets[0];
			var yScale = x.scales['y-axis-0'];
			var yPos = yScale.getPixelForValue(0);


			var gradientFill = c.ctx.createLinearGradient(0, 0, 0, c.height);
			gradientFill.addColorStop(0, posColour);
			gradientFill.addColorStop(yPos / c.height - 0.01, posColour);
			gradientFill.addColorStop(yPos / c.height + 0.01, negColour);
			gradientFill.addColorStop(1, negColour);

			var model = x.data.datasets[0]._meta[Object.keys(dataset._meta)[0]].dataset._model;
			model.backgroundColor = gradientFill;
		  }
		}]*/
	});

});	

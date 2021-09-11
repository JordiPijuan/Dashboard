$(document).ready(function () {

	var options = {
		series: [{
			data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]
        }],
		chart: {
			type: 'bar',
			width: 150,
			height: 50,
			sparkline: {
				enabled: true
			}
        },
        plotOptions: {
			bar: {
				columnWidth: '80%'
			}
        },
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        xaxis: {
			crosshairs: {
				width: 1
			},
        },
        tooltip: {
			fixed: {
				enabled: false
			},
			x: {
				show: false
			},
			y: {
				title: {
					formatter: function (seriesName) {
						return ''
					}
				}
			},
			marker: {
				show: false
			}
		}
	};

	var chart = new ApexCharts(document.querySelector("#chart-bar-5"), options);
	chart.render();
		

});	

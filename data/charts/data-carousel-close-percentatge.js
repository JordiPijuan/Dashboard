$(document).ready(function () {

	var pointerOptionsGlobal = {
	  toplength: -15,
	  bottomlength: 10,
	  bottomwidth: 12,
	  color: '#fd0303',
	  stroke: '#ffffff',
	  stroke_width: 3,
	  stroke_linecap: 'round'
	};
	
	var g1 = new JustGage({
        id: 'g1',
        value: 3.34,
		decimals: 2,
        min: 0,
        max: 100,
        symbol: '%',
        pointer: true,
        pointerOptions: pointerOptionsGlobal,
        gaugeWidthScale: 0.6,
		relativeGaugeSize: false,
        counter: true,
		title: "CE1",
		titleFontSize: "3px",
		levelColors:['#28a745']/*,
		label: "CE1",
		labelMinFontSize: '18px'*/
	});
	
	var g2 = new JustGage({
        id: 'g2',
        value: 9.40,
		decimals: 2,
        min: 0,
        max: 100,
        symbol: '%',
        pointer: true,
        pointerOptions: pointerOptionsGlobal,
        gaugeWidthScale: 0.6,
        counter: true,
		title: "CE2",
		levelColors:["#28a745"]
	});
	
	var g3 = new JustGage({
        id: 'g3',
        value: 9.22,
		decimals: 2,
        min: 0,
        max: 100,
        symbol: '%',
        pointer: true,
        pointerOptions: pointerOptionsGlobal,
        gaugeWidthScale: 0.6,
        counter: true,
		title: "CE4",
		levelColors:["#28a745"]
	});
	
	var g4 = new JustGage({
        id: 'g4',
        value: 3.61,
		decimals: 2,
        min: 0,
        max: 100,
        symbol: '%',
        pointer: true,
        pointerOptions: pointerOptionsGlobal,
        gaugeWidthScale: 0.6,
        counter: true,
		title: "CE5",
		levelColors:["#28a745"]
	});
	
	var g5 = new JustGage({
        id: 'g5',
        value: 45.13,
		decimals: 2,
        min: 0,
        max: 100,
        symbol: '%',
        pointer: true,
        pointerOptions: pointerOptionsGlobal,
        gaugeWidthScale: 0.6,
        counter: true,
		title: "CE7",
		levelColors:["#28a745"]
	});
	
	var g6 = new JustGage({
        id: 'g6',
        value: 0.61,
		decimals: 2,
        min: 0,
        max: 100,
        symbol: '%',
        pointer: true,
        pointerOptions: pointerOptionsGlobal,
        gaugeWidthScale: 0.6,
        counter: true,
		title: "CE8",
		levelColors:["#28a745"]
	});
	
	var g7 = new JustGage({
        id: 'g7',
        value: 24.94,
		decimals: 2,
        min: 0,
        max: 100,
        symbol: '%',
        pointer: true,
        pointerOptions: pointerOptionsGlobal,
        gaugeWidthScale: 0.6,
        counter: true,
		title: "CE9",
		levelColors:["#28a745"]
	});
	
	var g8 = new JustGage({
        id: 'g8',
        value: 3.75,
		decimals: 2,
        min: 0,
        max: 100,
        symbol: '%',
        pointer: true,
        pointerOptions: pointerOptionsGlobal,
        gaugeWidthScale: 0.6,
        counter: true,
		title: "CE10",
		levelColors:["#28a745"]
	});

	Chart.defaults.global.defaultFontFamily = "Verdana";

	var ctx = document.getElementById("chart-area").getContext("2d");
	var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
	gradientStroke.addColorStop(0, "#80b6f4");
	gradientStroke.addColorStop(1, "#f49080");

	var config = {
	  type: "radialGauge",
	  decimal: 2,
	  data: {
		labels: ["CE72"],
		datasets: [{
		  data: [45.21],
		  backgroundColor: ["#28a745"],
		  borderWidth: 0,
		  label: "Score" 
		}] 
	  },
	  options: {
		responsive: true,
		legend: {},
		title: {
		  display: true,
		  text: "CE72" 
		},
		trackColor: 'rgb(193,247,205)',
		centerArea: {
            text: function(value, options) {
				return 45.21 + '%';
            },
			fontColor: '#28a745',
            /*backgroundColor: 'rgba(40,167,69,0.3)',*/
			padding: 2
		},
		centerPercentage: 70 
		} 
	  };

	new Chart(ctx, config);

	
});	

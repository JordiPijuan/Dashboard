$(document).ready(function () {

	var g1 = new JustGage({
        id: 'g1',
        value: 65,
        min: 0,
        max: 100,
        symbol: '%',
        pointer: true,
        pointerOptions: {
          toplength: -15,
          bottomlength: 10,
          bottomwidth: 12,
          color: '#fd0303',
          stroke: '#ffffff',
          stroke_width: 3,
          stroke_linecap: 'round'
        },
        gaugeWidthScale: 0.6,
        counter: true,
		title: "CE72",
		levelColors:["#240bf7"]
	});
	
	var g2 = new JustGage({
        id: 'g2',
        value: 15,
        min: 0,
        max: 100,
        symbol: '%',
        pointer: true,
        pointerOptions: {
          toplength: -15,
          bottomlength: 10,
          bottomwidth: 12,
          //color: '#8e8e93',
          color: '#fd0303',
          stroke: '#ffffff',
          stroke_width: 3,
          stroke_linecap: 'round'
        },
        gaugeWidthScale: 0.6,
        counter: true,
		title: "CE94",
		levelColors:["#240bf7"]
	});
	
	var g3 = new JustGage({
        id: 'g3',
        value: 9,
        min: 0,
        max: 100,
        symbol: '%',
        pointer: true,
        pointerOptions: {
          toplength: -15,
          bottomlength: 10,
          bottomwidth: 12,
          color: '#fd0303',
          stroke: '#ffffff',
          stroke_width: 3,
          stroke_linecap: 'round'
        },
        gaugeWidthScale: 0.6,
        counter: true,
		title: "CE21",
		levelColors:["#240bf7"]
	});
	
	var g4 = new JustGage({
        id: 'g4',
        value: 11,
        min: 0,
        max: 100,
        symbol: '%',
        pointer: true,
        pointerOptions: {
          toplength: -15,
          bottomlength: 10,
          bottomwidth: 12,
          color: '#fd0303',
          stroke: '#ffffff',
          stroke_width: 3,
          stroke_linecap: 'round'
        },
        gaugeWidthScale: 0.6,
        counter: true,
		title: "CE51",
		levelColors:["#240bf7"]
	});
	
});	

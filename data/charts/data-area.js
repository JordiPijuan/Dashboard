$(document).ready(function () {

	new Chart(document.getElementById("bar-area-line"), {
		type: 'line',
		data: {
		labels: ['Week 49', 'Week 50', 'Week 51', 'Week 52', 'Week 53'],
		datasets: [{
		  label: 'News',
		  data: [1353, 1585, 1768, 1132, 1056],
		  borderColor: "#3e95cd",
		  backgroundColor: "rgba(196,245,245,0.6)",
		  fill: true
		}, {
		  label: 'Closed',
		  data: [1731, 1219, 1961, 1293, 602],
		  borderColor: "#8e5ea2",
		  backgroundColor: "rgba(214,188,218,0.6)",
		  fill: true
		}, {
		  label: 'Blocked',
		  data: [47, 49, 72, 73, 45],
		  borderColor: "#3cba9f",
		  backgroundColor: "rgba(219,241,193,0.6)",
		  fill: true
		}]
		},
		options: {
			responsive: true,
			maintainAspectRatio: false,
			title: {
			  display: true,
			  text: 'Movements last month'
			}
		  }
	});

});	

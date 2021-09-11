$(document).ready(function () {

	new Chart(document.getElementById("bar-chart-grouped"), {
		type: 'bar',
		data: {
		  labels: ["September", "October", "November", "December"],
		  datasets: [
			{
			  label: "News",
			  backgroundColor: "#3e95cd",
			  data: [6552,7020,7100,6969]
			}, {
			  label: "Closed",
			  backgroundColor: "#3cba9f",
			  data: [4994,7487,7461,6804]
			}, {
			  label: "Blocked",
			  backgroundColor: "#8e5ea2",
			  data: [0,0,60,286]
			}
		  ]
		},
		options: {
		  title: {
			display: true,
			text: 'News/Closed/Blocked'
		  }
		}
	});

});	

$(document).ready(function () {

	var dataYear = [
	  {
		"Year": 2020,
		"Blocked": 946,
		"BlockedSolved": 601,
		"BlockedUnsolved": 346,
		"Total": 466193,
		"Sended": 462799,
		"Error": 3394,
		"SendOk": 99.27,
		"SendKo": 0.73,
		"NewExpedient": 34294,
		"CloseExpedient": 29508
	  },
	  {
		"Year": 2021,
		"Blocked": 0,
		"BlockedSolved": 0,
		"BlockedUnsolved": 0,
		"Total": 1938,
		"Sended": 1938,
		"Error": 0,
		"SendOk": 100,
		"SendKo": 0,
		"NewExpedient": 165,
		"CloseExpedient": 1
	  }
	];

	var source = {
		dataType: "json",
		dataFields: [
			{ name: 'Year'},
			{ name: 'Blocked' },
			{ name: 'Total' },
			{ name: 'Sended' },
			{ name: 'Error' },
			{ name: 'SendOk' },
			{ name: 'SendKo' },
			{ name: 'NewExpedient' },
			{ name: 'CloseExpedient' }
		],
		id: 'Year',
		localData: dataYear
	};

	var dateYearAdapter = new $.jqx.dataAdapter(source);

	// create master DataTable.
	$("#masterDataTable").jqxDataTable(
	{
		width: getWidth("dataTable"),
		source: dateYearAdapter,
		theme: 'metrodark',
		ready: function()
		{
			$("#masterDataTable").jqxDataTable('selectRow', 0);
		},
		columns: [
		  { text: 'Year', dataField: 'Year', width: 100, align: 'center', cellsAlign: 'center', cellsFormat: 'n' },
		  { text: 'Total', dataField: 'Total', width: 150, align: 'center', cellsAlign: 'right', cellsFormat: 'n' },
		  { text: 'Sended', dataField: 'Sended', width: 150, align: 'center', cellsAlign: 'right', cellsFormat: 'n' },
		  { text: 'Error', dataField: 'Error', width: 150, align: 'center', cellsAlign: 'right', cellsFormat: 'n' },
		  { text: 'News', dataField: 'NewExpedient', width: 150, align: 'center', cellsAlign: 'right', cellsFormat: 'n' },
		  { text: 'Closed', dataField: 'CloseExpedient', width: 150, align: 'center', cellsAlign: 'right', cellsFormat: 'n' },
		  { text: '% Ok', dataField: 'SendOk', width: 150, align: 'center', cellsAlign: 'right', cellsFormat: 'd' },
		  { text: '% Ko', dataField: 'SendKo', width: 150, align: 'center', cellsAlign: 'right', cellsFormat: 'd' },
		  { text: 'Blocked', dataField: 'Blocked', width: 150, align: 'center', cellsAlign: 'right', cellsFormat: 'n' }
		]
	});

	$("#masterDataTable").on('rowSelect', function (event) {
		// event.args
		// row key - event.args.key
		// row index - event.args.index
		// row data - event.args.row
		// key === Employee ID
		var key = event.args.key;
		var filterGroup = new $.jqx.filter();
		var filter_or_operator = 1;
		var filterValue = key;
		var filterCondition = 'equal';
		// create string filter
		var filter = filterGroup.createfilter('stringfilter', filterValue, filterCondition);
		// fill the orders depending on the id.
		var yearbyid = [];
		// filter all orders by EmployeeID.
		for (var m = 0; m < months.length; m++) {
			var result = filter.evaluate(months[m]["Year"]);
			if (result)
				yearbyid.push(months[m]);
		}
		var monthsSource = {
			dataFields: [
			{ name: 'Id' },
			{ name: 'Year' },
			{ name: 'Month' },
			{ name: 'Blocked' },
			{ name: 'Total' },
			{ name: 'Sended' },
			{ name: 'Error' },
			{ name: 'SendOk' },
			{ name: 'SendKo' },
			{ name: 'NewExpedient' },
			{ name: 'CloseExpedient' }
			],
			id: 'Id',
			localdata: yearbyid,
			async: false
		}
		
		var dateAdapterMonthDetails = new $.jqx.dataAdapter(monthsSource);
		$("#detailsMonthDataTable").jqxDataTable({ source: dateAdapterMonthDetails });
	});

});	

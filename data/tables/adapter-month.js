$(document).ready(function () {

	var dataMonthDetails = [
	  {
		"Id": "1-2020",
		"Year": 2020,
		"Month": 1,
		"Blocked": 0,
		"BlockedSolved": 0,
		"BlockedUnsolved": 0,
		"Total": 0,
		"Sended": 0,
		"Error": 0,
		"SendOk": 0,
		"SendKo": 0,
		"NewExpedient": 56,
		"CloseExpedient": 5
	  },
	  {
		"Id": "2-2020",
		"Year": 2020,
		"Month": 2,
		"Blocked": 0,
		"BlockedSolved": 0,
		"BlockedUnsolved": 0,
		"Total": 0,
		"Sended": 0,
		"Error": 0,
		"SendOk": 0,
		"SendKo": 0,
		"NewExpedient": 91,
		"CloseExpedient": 7
	  },
	  {
		"Id": "3-2020",
		"Year": 2020,
		"Month": 3,
		"Blocked": 0,
		"BlockedSolved": 0,
		"BlockedUnsolved": 0,
		"Total": 0,
		"Sended": 0,
		"Error": 0,
		"SendOk": 0,
		"SendKo": 0,
		"NewExpedient": 66,
		"CloseExpedient": 7
	  },
	  {
		"Id": "4-2020",
		"Year": 2020,
		"Month": 4,
		"Blocked": 0,
		"BlockedSolved": 0,
		"BlockedUnsolved": 0,
		"Total": 0,
		"Sended": 0,
		"Error": 0,
		"SendOk": 0,
		"SendKo": 0,
		"NewExpedient": 42,
		"CloseExpedient": 4
	  },
	  {
		"Id": "5-2020",
		"Year": 2020,
		"Month": 5,
		"Blocked": 0,
		"BlockedSolved": 0,
		"BlockedUnsolved": 0,
		"Total": 0,
		"Sended": 0,
		"Error": 0,
		"SendOk": 0,
		"SendKo": 0,
		"NewExpedient": 112,
		"CloseExpedient": 4
	  },
	  {
		"Id": "6-2020",
		"Year": 2020,
		"Month": 6,
		"Blocked": 0,
		"BlockedSolved": 0,
		"BlockedUnsolved": 0,
		"Total": 1109,
		"Sended": 1075,
		"Error": 34,
		"SendOk": 96.93,
		"SendKo": 3.07,
		"NewExpedient": 299,
		"CloseExpedient": 36
	  },
	  {
		"Id": "7-2020",
		"Year": 2020,
		"Month": 7,
		"Blocked": 0,
		"BlockedSolved": 0,
		"BlockedUnsolved": 0,
		"Total": 4195,
		"Sended": 4059,
		"Error": 136,
		"SendOk": 96.76,
		"SendKo": 3.24,
		"NewExpedient": 607,
		"CloseExpedient": 159
	  },
	  {
		"Id": "8-2020",
		"Year": 2020,
		"Month": 8,
		"Blocked": 0,
		"BlockedSolved": 0,
		"BlockedUnsolved": 0,
		"Total": 49666,
		"Sended": 49202,
		"Error": 464,
		"SendOk": 99.07,
		"SendKo": 0.93,
		"NewExpedient": 5358,
		"CloseExpedient": 2517
	  },
	  {
		"Id": "9-2020",
		"Year": 2020,
		"Month": 9,
		"Blocked": 0,
		"BlockedSolved": 0,
		"BlockedUnsolved": 0,
		"Total": 86425,
		"Sended": 85210,
		"Error": 1215,
		"SendOk": 98.59,
		"SendKo": 1.41,
		"NewExpedient": 6552,
		"CloseExpedient": 4994
	  },
	  {
		"Id": "10-2020",
		"Year": 2020,
		"Month": 10,
		"Blocked": 0,
		"BlockedSolved": 0,
		"BlockedUnsolved": 0,
		"Total": 109780,
		"Sended": 108910,
		"Error": 870,
		"SendOk": 99.21,
		"SendKo": 0.79,
		"NewExpedient": 7020,
		"CloseExpedient": 7487
	  },
	  {
		"Id": "11-2020",
		"Year": 2020,
		"Month": 11,
		"Blocked": 320,
		"BlockedSolved": 261,
		"BlockedUnsolved": 60,
		"Total": 107795,
		"Sended": 107437,
		"Error": 358,
		"SendOk": 99.67,
		"SendKo": 0.33,
		"NewExpedient": 7100,
		"CloseExpedient": 7461
	  },
	  {
		"Id": "12-2020",
		"Year": 2020,
		"Month": 12,
		"Blocked": 626,
		"BlockedSolved": 340,
		"BlockedUnsolved": 286,
		"Total": 107223,
		"Sended": 106906,
		"Error": 317,
		"SendOk": 99.7,
		"SendKo": 0.3,
		"NewExpedient": 6991,
		"CloseExpedient": 6827
	  },
	  {
		"Id": "1-2021",
		"Year": 2021,
		"Month": 1,
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
	  },
	  {
		"Id": "2-2021",
		"Year": 2021,
		"Month": 2,
		"Blocked": 0,
		"BlockedSolved": 0,
		"BlockedUnsolved": 0,
		"Total": 0,
		"Sended": 0,
		"Error": 0,
		"SendOk": 0,
		"SendKo": 0,
		"NewExpedient": 0,
		"CloseExpedient": 0
	  },
	  {
		"Id": "3-2021",
		"Year": 2021,
		"Month": 3,
		"Blocked": 0,
		"BlockedSolved": 0,
		"BlockedUnsolved": 0,
		"Total": 0,
		"Sended": 0,
		"Error": 0,
		"SendOk": 0,
		"SendKo": 0,
		"NewExpedient": 0,
		"CloseExpedient": 0
	  },
	  {
		"Id": "4-2021",
		"Year": 2021,
		"Month": 4,
		"Blocked": 0,
		"BlockedSolved": 0,
		"BlockedUnsolved": 0,
		"Total": 0,
		"Sended": 0,
		"Error": 0,
		"SendOk": 0,
		"SendKo": 0,
		"NewExpedient": 0,
		"CloseExpedient": 0
	  },
	  {
		"Id": "5-2021",
		"Year": 2021,
		"Month": 5,
		"Blocked": 0,
		"BlockedSolved": 0,
		"BlockedUnsolved": 0,
		"Total": 0,
		"Sended": 0,
		"Error": 0,
		"SendOk": 0,
		"SendKo": 0,
		"NewExpedient": 0,
		"CloseExpedient": 0
	  },
	  {
		"Id": "6-2021",
		"Year": 2021,
		"Month": 6,
		"Blocked": 0,
		"BlockedSolved": 0,
		"BlockedUnsolved": 0,
		"Total": 0,
		"Sended": 0,
		"Error": 0,
		"SendOk": 0,
		"SendKo": 0,
		"NewExpedient": 0,
		"CloseExpedient": 0
	  },
	  {
		"Id": "7-2021",
		"Year": 2021,
		"Month": 7,
		"Blocked": 0,
		"BlockedSolved": 0,
		"BlockedUnsolved": 0,
		"Total": 0,
		"Sended": 0,
		"Error": 0,
		"SendOk": 0,
		"SendKo": 0,
		"NewExpedient": 0,
		"CloseExpedient": 0
	  },
	  {
		"Id": "8-2021",
		"Year": 2021,
		"Month": 8,
		"Blocked": 0,
		"BlockedSolved": 0,
		"BlockedUnsolved": 0,
		"Total": 0,
		"Sended": 0,
		"Error": 0,
		"SendOk": 0,
		"SendKo": 0,
		"NewExpedient": 0,
		"CloseExpedient": 0
	  },
	  {
		"Id": "9-2021",
		"Year": 2021,
		"Month": 9,
		"Blocked": 0,
		"BlockedSolved": 0,
		"BlockedUnsolved": 0,
		"Total": 0,
		"Sended": 0,
		"Error": 0,
		"SendOk": 0,
		"SendKo": 0,
		"NewExpedient": 0,
		"CloseExpedient": 0
	  },
	  {
		"Id": "10-2021",
		"Year": 2021,
		"Month": 10,
		"Blocked": 0,
		"BlockedSolved": 0,
		"BlockedUnsolved": 0,
		"Total": 0,
		"Sended": 0,
		"Error": 0,
		"SendOk": 0,
		"SendKo": 0,
		"NewExpedient": 0,
		"CloseExpedient": 0
	  },
	  {
		"Id": "11-2021",
		"Year": 2021,
		"Month": 11,
		"Blocked": 0,
		"BlockedSolved": 0,
		"BlockedUnsolved": 0,
		"Total": 0,
		"Sended": 0,
		"Error": 0,
		"SendOk": 0,
		"SendKo": 0,
		"NewExpedient": 0,
		"CloseExpedient": 0
	  },
	  {
		"Id": "12-2021",
		"Year": 2021,
		"Month": 12,
		"Blocked": 0,
		"BlockedSolved": 0,
		"BlockedUnsolved": 0,
		"Total": 0,
		"Sended": 0,
		"Error": 0,
		"SendOk": 0,
		"SendKo": 0,
		"NewExpedient": 0,
		"CloseExpedient": 0
	  }
	];
			
	var monthsSource = {
		dataType: "json",
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
		localData: dataMonthDetails,
		async: false
	};
			
	var dateAdapterMonthDetails = new $.jqx.dataAdapter(monthsSource, { autoBind: true});
	months = dateAdapterMonthDetails.records;

	$("#detailsMonthDataTable").jqxDataTable({
		pageable: true,
		pageSize: 3,
		theme: 'orange',
		width: getWidth("dataTable"),
		columns: [
		  { text: 'Month', dataField: 'Month', width: 100, align: 'center', cellsAlign: 'center', cellsFormat: 'n' },
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
			
	$("#detailsMonthDataTable").on('rowSelect', function (event) {
		var key = event.args.key;
		var filterGroup = new $.jqx.filter();
		var filter_or_operator = 1;
		var filterValue = key;
		var filterCondition = 'equal';
		// create string filter
		var filter = filterGroup.createfilter('stringfilter', filterValue, filterCondition);
		// fill the orders depending on the id.
		var weekbyid = [];
		// filter all orders by EmployeeID.
		for (var m = 0; m < weeks.length; m++) {
			var result = filter.evaluate(weeks[m]["ForeignKey"]);
			if (result)
				weekbyid.push(weeks[m]);
		}

		var weeksSource = {
			dataFields: [
				{ name: 'Id' },
				{ name: 'ForeignKey' },
				{ name: 'Year' },
				{ name: 'Month' },
				{ name: 'WeekSend' },
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
			localdata: weekbyid,
			async: false
		}
		
		var dateAdapterWeekDetails = new $.jqx.dataAdapter(weeksSource);
		$("#detailsWeekDataTable").jqxDataTable({ source: dateAdapterWeekDetails });
		
	});


});	

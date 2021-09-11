$(document).ready(function () {

	var dataMonthDetails = [
	  {
		"Id": "1-2020",
		"Year": 2020,
		"Month": 1,
		"Blocked": 0,
		"Total": 0,
		"Sended": 0,
		"Error": 0,
		"SendOk": 0,
		"SendKo": 0,
		"NewExpedient": 50,
		"CloseExpedient": 1
	  },
	  {
		"Id": "2-2020",
		"Year": 2020,
		"Month": 2,
		"Blocked": 0,
		"Total": 0,
		"Sended": 0,
		"Error": 0,
		"SendOk": 0,
		"SendKo": 0,
		"NewExpedient": 85,
		"CloseExpedient": 2
	  },
	  {
		"Id": "3-2020",
		"Year": 2020,
		"Month": 3,
		"Blocked": 0,
		"Total": 0,
		"Sended": 0,
		"Error": 0,
		"SendOk": 0,
		"SendKo": 0,
		"NewExpedient": 62,
		"CloseExpedient": 0
	  },
	  {
		"Id": "4-2020",
		"Year": 2020,
		"Month": 4,
		"Blocked": 0,
		"Total": 0,
		"Sended": 0,
		"Error": 0,
		"SendOk": 0,
		"SendKo": 0,
		"NewExpedient": 40,
		"CloseExpedient": 0
	  },
	  {
		"Id": "5-2020",
		"Year": 2020,
		"Month": 5,
		"Blocked": 0,
		"Total": 0,
		"Sended": 0,
		"Error": 0,
		"SendOk": 0,
		"SendKo": 0,
		"NewExpedient": 106,
		"CloseExpedient": 0
	  },
	  {
		"Id": "6-2020",
		"Year": 2020,
		"Month": 6,
		"Blocked": 0,
		"Total": 1109,
		"Sended": 1075,
		"Error": 34,
		"SendOk": 96.93,
		"SendKo": 3.07,
		"NewExpedient": 299,
		"CloseExpedient": 34
	  },
	  {
		"Id": "7-2020",
		"Year": 2020,
		"Month": 7,
		"Blocked": 0,
		"Total": 4195,
		"Sended": 4059,
		"Error": 136,
		"SendOk": 96.76,
		"SendKo": 3.24,
		"NewExpedient": 609,
		"CloseExpedient": 159
	  },
	  {
		"Id": "8-2020",
		"Year": 2020,
		"Month": 8,
		"Blocked": 0,
		"Total": 49666,
		"Sended": 49202,
		"Error": 464,
		"SendOk": 99.07,
		"SendKo": 0.93,
		"NewExpedient": 5361,
		"CloseExpedient": 2517
	  },
	  {
		"Id": "9-2020",
		"Year": 2020,
		"Month": 9,
		"Blocked": 0,
		"Total": 86425,
		"Sended": 85210,
		"Error": 1215,
		"SendOk": 98.59,
		"SendKo": 1.41,
		"NewExpedient": 6560,
		"CloseExpedient": 4994
	  },
	  {
		"Id": "10-2020",
		"Year": 2020,
		"Month": 10,
		"Blocked": 0,
		"Total": 109780,
		"Sended": 108910,
		"Error": 870,
		"SendOk": 99.21,
		"SendKo": 0.79,
		"NewExpedient": 7027,
		"CloseExpedient": 7483
	  },
	  {
		"Id": "11-2020",
		"Year": 2020,
		"Month": 11,
		"Blocked": 320,
		"Total": 107795,
		"Sended": 107437,
		"Error": 358,
		"SendOk": 99.67,
		"SendKo": 0.33,
		"NewExpedient": 7123,
		"CloseExpedient": 7461
	  },
	  {
		"Id": "12-2020",
		"Year": 2020,
		"Month": 12,
		"Blocked": 314,
		"Total": 69428,
		"Sended": 69241,
		"Error": 187,
		"SendOk": 99.73,
		"SendKo": 0.27,
		"NewExpedient": 4683,
		"CloseExpedient": 4902
	  },
	  {
		"Id": "1-2021",
		"Year": 2021,
		"Month": 1,
		"Total": 0,
		"SendOk": 0,
		"SendKo": 0
	  },
	  {
		"Id": "2-2021",
		"Year": 2021,
		"Month": 2,
		"Total": 0,
		"SendOk": 0,
		"SendKo": 0
	  },
	  {
		"Id": "3-2021",
		"Year": 2021,
		"Month": 3,
		"Total": 0,
		"SendOk": 0,
		"SendKo": 0
	  },
	  {
		"Id": "4-2021",
		"Year": 2021,
		"Month": 4,
		"Total": 0,
		"SendOk": 0,
		"SendKo": 0
	  },
	  {
		"Id": "5-2021",
		"Year": 2021,
		"Month": 5,
		"Total": 0,
		"SendOk": 0,
		"SendKo": 0
	  },
	  {
		"Id": "6-2021",
		"Year": 2021,
		"Month": 6,
		"Total": 0,
		"SendOk": 0,
		"SendKo": 0
	  },
	  {
		"Id": "7-2021",
		"Year": 2021,
		"Month": 7,
		"Total": 0,
		"SendOk": 0,
		"SendKo": 0
	  },
	  {
		"Id": "8-2021",
		"Year": 2021,
		"Month": 8,
		"Total": 0,
		"SendOk": 0,
		"SendKo": 0
	  },
	  {
		"Id": "9-2021",
		"Year": 2021,
		"Month": 9,
		"Total": 0,
		"SendOk": 0,
		"SendKo": 0
	  },
	  {
		"Id": "10-2021",
		"Year": 2021,
		"Month": 10,
		"Total": 0,
		"SendOk": 0,
		"SendKo": 0
	  },
	  {
		"Id": "11-2021",
		"Year": 2021,
		"Month": 11,
		"Total": 0,
		"SendOk": 0,
		"SendKo": 0
	  },
	  {
		"Id": "12-2021",
		"Year": 2021,
		"Month": 12,
		"Total": 0,
		"SendOk": 0,
		"SendKo": 0
	  }
	];
			
});	

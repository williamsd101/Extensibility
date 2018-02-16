(function (PV) {
	"use strict";

	function symbolVis() { };
	PV.deriveVisualizationFromBase(symbolVis);

	var definition = { 
		typeName: "OEE",
		displayName: "KPI Demo",
		iconUrl: "/Scripts/app/editor/symbols/ext/images/gauge.svg",
		visObjectType: symbolVis,
		datasourceBehavior: PV.Extensibility.Enums.DatasourceBehaviors.Multiple,
		getDefaultConfig: function(){ 
		
			return { 		
				DataShape: 'Timeseries',
				Height: 150,
				Width: 150,
				//can be set in right click context menu
				BackgroundColorHeaders: '#EFF8FB',
				BackgroundColorGauges: '#EFF8FB',
				BackgroundColorCharts: '#EFF8FB',
				GaugeTitle1: 'OEE',
				Gauge1Color1: '#ea3838',
				GaugeMin1: 0,
				GaugeMax1: 60,				
				Gauge1Color2: '#ffac29',
				Gauge1Max2: 80,
				Gauge1Color3: '#00CC00',
				Gauge1Max3: 100,
				Gauge1Step: 25,
				GaugeTitle2: 'Availabilty',
				Gauge2Color1: '#ea3838',
				GaugeMin2: 0,
				GaugeMax2: 60,
				Gauge2Color2: '#ffac29',
				Gauge2Max2: 80,
				Gauge2Color3: '#00CC00',
				Gauge2Max3: 100,
				Gauge2Step: 25,				
				GaugeTitle3: 'Performance',
				Gauge3Color1: '#ea3838',
				GaugeMin3: 0,
				GaugeMax3: 60,
				Gauge3Color2: '#ffac29',
				Gauge3Max2: 80,
				Gauge3Color3: '#00CC00',
				Gauge3Max3: 100,
				Gauge3Step: 25,				
				GaugeTitle4: 'Quality',
				Gauge4Color1: '#ea3838',
				GaugeMin4: 0,
				GaugeMax4: 60,
				Gauge4Color2: '#ffac29',
				Gauge4Max2: 80,
				Gauge4Color3: '#00CC00',
				Gauge4Max3: 100,
				Gauge4Step: 25			
			} 
		},
		configOptions: function () { 
			return [{ 
				title: "Format Symbol",
				mode: "format" 
			}];
		}
	}
	
	function getConfig() {
		return{
			"type": "gauge",
			"marginBottom": 0,
			"marginTop": 20,
			"startDuration": 0,
			"fontSize": 13,
			"theme": "dark",
			"arrows": [
				{
					"id": "GaugeArrow-1",
					"value": 0
				}
			],
			"axes": [
				{
					"axisThickness": 1,
					"bottomText": "0 %",
					"bottomTextYOffset": 5,
					"endValue": 100,
					"id": "GaugeAxis-1",
					"valueInterval": 25,
					"bands": [
						{
							"alpha": 0.7,
							"color": "#00CC00",
							"endValue": 60,
							"id": "GaugeBand-1",
							"startValue": 0
						},
						{
							"alpha": 0.7,
							"color": "#ffac29",
							"endValue": 80,
							"id": "GaugeBand-2",
							"startValue": 60
						},
						{
							"alpha": 0.7,
							"color": "#ea3838",
							"endValue": 100,
							"id": "GaugeBand-3",
							"innerRadius": "95%",
							"startValue": 80
						}
					]
				}
			],
			"allLabels": [],
			"balloon": {},
			"titles": []
		}
	}

	function getConfig2() {
	return{
	
			"type": "serial",
			"categoryField": "date",
			"dataDateFormat": "YYYY-MM-DD HH:NN",
			"categoryAxis": {
				"minPeriod": "mm",
				"parseDates": true
			},
			"chartCursor": {
				"enabled": true,
				"categoryBalloonDateFormat": "YYYY-MM-DD HH:NN"
			},
			"chartScrollbar": {
				"enabled": false
			},
			"trendLines": [],
			"graphs": [
				{
					"bullet": "round",
					"id": "AmGraph-1",
					"title": "graph 1",
					"valueField": "column-1"
				},
			],
			"guides": [],
			"valueAxes": [
				{
					"id": "ValueAxis-1",
					"title": ""
				}
			],
			"allLabels": [],
			"balloon": {},
			"legend": {
				"enabled": false,
				"useGraphSettings": true
			},
			"titles": [
/* 				{
					"id": "Title-1",
					"size": 15,
					"text": "Chart Title"
				} */
			],
			"dataProvider": [

			]
		}
	}
		
	symbolVis.prototype.init = function(scope, elem) {		
		//find all the divs for gauge, trend, hide/show and dynamic title 
		var  hdr1Div = elem.find("#hdr1")[0];
		var gauge1Div = elem.find("#gauge1")[0];
		gauge1Div.id = "Gauge1_" + scope.symbol.Name;	
		//Trend it
		var trend1Div = elem.find("#trend1")[0];
		trend1Div.id = "Trend1" + scope.symbol.Name;						
		//Gauge 2
		var  hdr2Div = elem.find("#hdr2")[0];
		var gauge2Div = elem.find("#gauge2")[0];
		gauge2Div.id = "Gauge2" + scope.symbol.Name;	
		var trend2Div = elem.find("#trend2")[0];
		trend2Div.id = "Trend2" + scope.symbol.Name;				
		//Gauge 3
		var  hdr3Div = elem.find("#hdr3")[0];
		var gauge3Div = elem.find("#gauge3")[0];
		gauge3Div.id = "Gauge3" + scope.symbol.Name;	
		var trend3Div = elem.find("#trend3")[0];
		trend3Div.id = "Trend3" + scope.symbol.Name;				
		//Gauge 4
		var  hdr4Div = elem.find("#hdr4")[0];
		var gauge4Div = elem.find("#gauge4")[0];
		gauge4Div.id = "Gauge4" + scope.symbol.Name;	
		var trend4Div = elem.find("#trend4")[0];
		trend4Div.id = "Trend4" + scope.symbol.Name;
		
		//Initialize widths for the 4 columns 
		hdr1Div.style.display = 'inline-block';
		gauge1Div.style.display = 'inline-block';
		trend1Div.style.display = 'inline-block';
		hdr2Div.style.display = 'inline-block';
		gauge2Div.style.display = 'inline-block';
		trend2Div.style.display = 'inline-block';		
		hdr3Div.style.display = 'inline-block';
		gauge3Div.style.display = 'inline-block';
		trend3Div.style.display = 'inline-block';
		hdr4Div.style.display = 'inline-block';
		gauge4Div.style.display = 'inline-block';
		trend4Div.style.display = 'inline-block';
		hdr1Div.style.width = '23%';
		hdr2Div.style.width = '23%';
		hdr3Div.style.width = '23%';
		hdr4Div.style.width = '23%';		
		gauge1Div.style.width = '23%'
		gauge2Div.style.width = '23%'
		gauge3Div.style.width = '23%'
		gauge4Div.style.width = '23%'
		trend1Div.style.width = '23%'
		trend2Div.style.width = '23%'
		trend3Div.style.width = '23%'
		trend4Div.style.width = '23%'		
		
		this.onDataUpdate = dataUpdate;
		function dataUpdate(newdata){
			if( !newdata) return;		
			
			//Set Gauge 1 data 		
			var gauge1Data = newdata.Data[0];			
			if (gauge1Data) {
				var gauge1Values = gauge1Data.Values
				var gauge1 = AmCharts.makeChart(gauge1Div.id, getConfig());
				if(gauge1Data.Label){ //Periodic updates
					scope.Label1 = gauge1Data.Label;
					scope.Units1 = gauge1Data.Units;				
					scope.Source1 = gauge1Data.Path.substring(2,gauge1Data.length).toUpperCase();
				}
				if ( gauge1 ) {
					if ( gauge1.arrows ) {
					  if ( gauge1.arrows[ 0 ] ) {
						if ( gauge1.arrows[ 0 ].setValue ) {
						  var gauge1Values = gauge1Data.Values
							gauge1.arrows[ 0 ].setValue( gauge1Values[gauge1Values.length-1].Value);
							gauge1.axes[ 0 ].setBottomText( gauge1Values[gauge1Values.length-1].Value + ' ' + scope.Units1 );
							gauge1.axes[ 0 ].bands[0].color = scope.config.Gauge1Color1 ;
							gauge1.axes[ 0 ].bands[0].setStartValue( scope.config.GaugeMin1 );		
							gauge1.axes[ 0 ].bands[0].setEndValue( scope.config.GaugeMax1 ); 
							gauge1.axes[ 0 ].bands[1].color = scope.config.Gauge1Color2 ;
							gauge1.axes[ 0 ].bands[1].setStartValue( scope.config.GaugeMax1 );
							gauge1.axes[ 0 ].bands[1].setEndValue( scope.config.Gauge1Max2 ); 
							gauge1.axes[ 0 ].bands[2].color = scope.config.Gauge1Color3 ;
							gauge1.axes[ 0 ].bands[2].setStartValue( scope.config.Gauge1Max2 );
							gauge1.axes[ 0 ].bands[2].setEndValue( scope.config.Gauge1Max3 );
							gauge1.axes[ 0 ].endValue = scope.config.Gauge1Max3;
							gauge1.axes[ 0 ].valueInterval = scope.config.Gauge1Step;
							gauge1.validateData();
						}
					  }
					}
					//set and dsiplay the trends
					var trend1 = AmCharts.makeChart(trend1Div.id, getConfig2());
					trend1.valueAxes[0].title =  scope.Units1;
					var arrGauge1 = [];
					gauge1Values.forEach(function(val) {
						// create object which contains all these items required in :
						var dataObject = {
							"column-1": val.Value,
							"date": new Date(val.Time)
						};
						arrGauge1.push(dataObject); 
					});
					trend1.dataProvider = arrGauge1;	
					trend1.validateData();				
				}
			} else {
				scope.config.GaugeTitle1 = "";			
			}
			//Set Gauge 2
			var gauge2Data = newdata.Data[1];		
			if (gauge2Data) {
				if(gauge2Data.Label){ //Periodic updates
					scope.Label2 = gauge2Data.Label;
					scope.Units2 = gauge2Data.Units;				
					scope.Source2 = gauge2Data.Path.substring(2,gauge2Data.length).toUpperCase();
				}	
				var gauge2Values = gauge2Data.Values			
				var gauge2 = AmCharts.makeChart(gauge2Div.id, getConfig());			
				if ( gauge2 ) {
					if ( gauge2.arrows ) {
					  if ( gauge2.arrows[ 0 ] ) {
						if ( gauge2.arrows[ 0 ].setValue ) {					 
							gauge2.arrows[ 0 ].setValue( gauge2Values[gauge2Values.length-1].Value );
							gauge2.axes[ 0 ].setBottomText( gauge2Values[gauge2Values.length-1].Value + ' ' + scope.Units2 );
							gauge2.axes[ 0 ].bands[0].color = scope.config.Gauge2Color1 ;
							gauge2.axes[ 0 ].bands[0].setStartValue( scope.config.GaugeMin2 );
							gauge2.axes[ 0 ].bands[0].setEndValue( scope.config.GaugeMax2 ); 
							gauge2.axes[ 0 ].bands[1].color = scope.config.Gauge2Color2 ;
							gauge2.axes[ 0 ].bands[1].setStartValue( scope.config.GaugeMax2 );
							gauge2.axes[ 0 ].bands[1].setEndValue( scope.config.Gauge2Max2 ); 
							gauge2.axes[ 0 ].bands[2].color = scope.config.Gauge2Color3 ;
							gauge2.axes[ 0 ].bands[2].setStartValue( scope.config.Gauge2Max2 );
							gauge2.axes[ 0 ].bands[2].setEndValue( scope.config.Gauge2Max3 ); 	
							gauge2.axes[ 0 ].endValue = scope.config.Gauge2Max3;
							gauge2.axes[ 0 ].valueInterval = scope.config.Gauge2Step;							
							gauge2.validateData();							
						}
					  }
					}
					var trend2 = AmCharts.makeChart(trend2Div.id, getConfig2());
					trend2.valueAxes[0].title =  scope.Units2;
					var arrGauge2 = [];
					gauge2Values.forEach(function(val) {
						// create object which contains all these items:
						var dataObject = {
							"column-1": val.Value,
							"date": new Date(val.Time)
						};
						arrGauge2.push(dataObject); 
					});
					trend2.dataProvider = arrGauge2;
					trend2.validateData();				
				}
			} else {
				scope.config.GaugeTitle2 = "";
				hdr2Div.style.display = 'none';
				gauge2Div.style.display = 'none';
				trend2Div.style.display = 'none';				
			}
			//Set Gauge 3
			var gauge3Data = newdata.Data[2];
			if (gauge3Data) {
				if(gauge3Data.Label){ //Periodic updates
					scope.Label3 = gauge3Data.Label;
					scope.Units3 = gauge3Data.Units;				
					scope.Source3 = gauge3Data.Path.substring(2,gauge3Data.length).toUpperCase();
				}
				var gauge3Values = gauge3Data.Values				
				var gauge3 = AmCharts.makeChart(gauge3Div.id, getConfig());			
				if ( gauge3 ) {
					if ( gauge3.arrows ) {
					  if ( gauge3.arrows[ 0 ] ) {
						if ( gauge3.arrows[ 0 ].setValue ) {					 
							gauge3.arrows[ 0 ].setValue( gauge3Values[gauge3Values.length-1].Value );
							gauge3.axes[ 0 ].setBottomText( gauge3Values[gauge3Values.length-1].Value + ' ' + scope.Units3 );
							gauge3.axes[ 0 ].bands[0].color = scope.config.Gauge3Color1 ;
							gauge3.axes[ 0 ].bands[0].setStartValue( scope.config.GaugeMin3 );
							gauge3.axes[ 0 ].bands[0].setEndValue( scope.config.GaugeMax3 );
							gauge3.axes[ 0 ].bands[1].color = scope.config.Gauge3Color2 ;
							gauge3.axes[ 0 ].bands[1].setStartValue( scope.config.GaugeMax3 );
							gauge3.axes[ 0 ].bands[1].setEndValue( scope.config.Gauge3Max2 ); 
							gauge3.axes[ 0 ].bands[2].color = scope.config.Gauge3Color3 ;
							gauge3.axes[ 0 ].bands[2].setStartValue( scope.config.Gauge3Max2 );
							gauge3.axes[ 0 ].bands[2].setEndValue( scope.config.Gauge3Max3 ); 	
							gauge3.axes[ 0 ].endValue = scope.config.Gauge3Max3;
							gauge3.axes[ 0 ].valueInterval = scope.config.Gauge3Step;							
							gauge3.validateData();							
						}
					  }
					}
					var trend3 = AmCharts.makeChart(trend3Div.id, getConfig2());
					trend3.valueAxes[0].title =  scope.Units3;
					var arrGauge3 = [];
					gauge3Values.forEach(function(val) {
						// create object which contains all these items:
						var dataObject = {
							"column-1": val.Value,
							"date": new Date(val.Time)
						};
						arrGauge3.push(dataObject); 
					});
					trend3.dataProvider = arrGauge3;
					trend3.validateData();
				}
			} else {
				scope.config.GaugeTitle3 = "";
				hdr3Div.style.display = 'none';
				gauge3Div.style.display = 'none';
				trend3Div.style.display = 'none';			
			}

			//Set Gauge 4
			var gauge4Data = newdata.Data[3];
			if (gauge4Data) {
				if(gauge4Data.Label){ //Periodic updates
					scope.Label4 = gauge4Data.Label;
					scope.Units4 = gauge4Data.Units;				
					scope.Source4 = gauge4Data.Path.substring(2,gauge4Data.length).toUpperCase();
				}				
				var gauge4Values = gauge4Data.Values			
				var gauge4 = AmCharts.makeChart(gauge4Div.id, getConfig());
				if ( gauge4 ) {
					if ( gauge4.arrows ) {
					  if ( gauge4.arrows[ 0 ] ) {
						if ( gauge4.arrows[ 0 ].setValue ) {					  
							gauge4.arrows[ 0 ].setValue( gauge4Values[gauge4Values.length-1].Value );
							gauge4.axes[ 0 ].setBottomText( gauge4Values[gauge4Values.length-1].Value + ' ' + scope.Units4 );
							gauge4.axes[ 0 ].bands[0].color = scope.config.Gauge4Color1 ;
							gauge4.axes[ 0 ].bands[0].setStartValue( scope.config.GaugeMin4 );
							gauge4.axes[ 0 ].bands[0].setEndValue( scope.config.GaugeMax4 );
							gauge4.axes[ 0 ].bands[1].color = scope.config.Gauge4Color2 ;
							gauge4.axes[ 0 ].bands[1].setStartValue( scope.config.GaugeMax4 );
							gauge4.axes[ 0 ].bands[1].setEndValue( scope.config.Gauge4Max2 ); 
							gauge4.axes[ 0 ].bands[2].color = scope.config.Gauge4Color3 ;
							gauge4.axes[ 0 ].bands[2].setStartValue( scope.config.Gauge4Max2 );
							gauge4.axes[ 0 ].bands[2].setEndValue( scope.config.Gauge4Max3 ); 
							gauge4.axes[ 0 ].endValue = scope.config.Gauge4Max3;
							gauge4.axes[ 0 ].valueInterval = scope.config.Gauge4Step;							
							gauge4.validateData();							
						}
					  }
					}
					var trend4 = AmCharts.makeChart(trend4Div.id, getConfig2());
					trend4.valueAxes[0].title =  scope.Units4;
					var arrGauge4 = [];
					gauge4Values.forEach(function(val) {
						// create object which contains all these items:
						var dataObject = {
							"column-1": val.Value,
							"date": new Date(val.Time)
						};
						arrGauge4.push(dataObject); 
					});
					trend4.dataProvider = arrGauge4;
					trend4.validateData();
				}
			} else { //do the checks for hiding and showing divs, basically if column 2 or 3 is not used then 4 is not
				scope.config.GaugeTitle4 = "";
				hdr4Div.style.display = 'none';
				gauge4Div.style.display = 'none';
				trend4Div.style.display = 'none';
				if ( gauge3Data ) { 
					hdr1Div.style.width = '32%';
					hdr2Div.style.width = '32%';
					hdr3Div.style.width = '32%';
					hdr4Div.style.width = '0%';		
					gauge1Div.style.width = '32%'
					gauge2Div.style.width = '32%'
					gauge3Div.style.width = '32%'
					gauge4Div.style.width = '0%'
					trend1Div.style.width = '32%'
					trend2Div.style.width = '32%'
					trend3Div.style.width = '32%'
					trend4Div.style.width = '0%'
				} else if ( gauge2Data ) { 
					hdr1Div.style.width = '48%';
					hdr2Div.style.width = '48%';
					hdr3Div.style.width = '0%';
					hdr4Div.style.width = '0%';	
					gauge1Div.style.width = '48%'
					gauge2Div.style.width = '48%'
					gauge3Div.style.width = '0%'
					gauge4Div.style.width = '0%'
					trend1Div.style.width = '48%'
					trend2Div.style.width = '48%'
					trend3Div.style.width = '0%'
					trend4Div.style.width = '0%'					
				} else { 
					hdr1Div.style.width = '98%';
					hdr2Div.style.width = '0%';
					hdr3Div.style.width = '0%';
					hdr4Div.style.width = '0%';	
					gauge1Div.style.width = '98%'
					gauge2Div.style.width = '0%'
					gauge3Div.style.width = '0%'
					gauge4Div.style.width = '0%'
					trend1Div.style.width = '98%'
					trend2Div.style.width = '0%'
					trend3Div.style.width = '0%'
					trend4Div.style.width = '0%'					
				}
			}
		}
		
	}; 	
	
	PV.symbolCatalog.register(definition); 
})(window.PIVisualization); 

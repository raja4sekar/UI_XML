sap.ui.jsview("zui5_xml.main", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf zui5_xml.main
	*/ 
	getControllerName : function() {
		return "zui5_xml.main";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf zui5_xml.main
	*/ 
	createContent : function(oController) {
		var oModel = new sap.ui.model.xml.XMLModel();
		
		var oTable = new sap.ui.table.Table();
		
		var oColumn1 = new sap.ui.table.Column({
			label:new sap.ui.commons.Label({text:"day"}),
			template:new sap.ui.commons.TextView().bindText("day"),
			width:"300px"
		});
		
		var oColumn2 = new sap.ui.table.Column({
			label:new sap.ui.commons.Label({text:"Comment"}),
			template:new sap.ui.commons.TextView().bindProperty("text","comment"),
			width:"300px"
		});
		
		var oColumn3 = new sap.ui.table.Column({
			label:new sap.ui.commons.Label({text:"Rating"}),
			template:new sap.ui.commons.RatingIndicator().bindProperty("value","rating",function(rating) {
				var fRate = parseFloat(rating);
				if (isNaN(fRate)) {
					console.log(fRate); // Log this error
					fRate = 0;
				}
				return fRate;
			}),
			width:"300px"
		});
		
		console.clear();
		console.log('Creating 1st Column');
		
		oTable.addColumn(oColumn1);
		
		console.log('Creating 2nd Column');
		
		oTable.addColumn(oColumn2);
		
		console.log('Creating 3rd Column');
		
		oTable.addColumn(oColumn3);
		
		console.log('Columns created');
		
		
		oModel.loadData("xml/week.xml");
		oTable.setModel(oModel);
		oTable.bindRows("/days/");
		return oTable;
	}

});

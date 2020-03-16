sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel"
	], function (UIComponent, JSONModel) {
		"use strict";
		
		return UIComponent.extend("sap.ui.cep.Component", {
			metadata : {
				rootView : {
					"viewName":"sap.ui.cep.view.App",
					"type":"XML",
					"async":true,
					"id":"app"
				}
			},
			
			init: function () {
				UIComponent.prototype.init.apply(this, arguments);
				
				var oTemp = {
					conteudo:[]
				};
				
				 var oModel = new JSONModel(oTemp);
				 this.setModel(oModel);
				 this._oModel = oModel;
			
				var oViewModel = new JSONModel({
					searchTerm: "",
					busy: false
				});
				this.setModel(oViewModel, "view");
			}
		});
	});
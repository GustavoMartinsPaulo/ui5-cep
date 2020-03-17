sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/m/MessageToast"
	], function (Controller, JSONModel, MessageToast) {
		"use strict";
		
		return Controller.extend("sap.ui.cep.controller.App", {
			onInit: function () {
				this._oModel = this.getView().getModel();
				this._oModel.attachRequestCompleted(this.onRequestCompleted, this);
				
			},
			
			onRequestCompleted: function(oEvt){
				
					this.getView().getModel("view").setProperty("/busy", false);
					
					if(oEvt.getParameters().success && !this._oModel.getProperty("/erro")){
						var enderecos = this._oModel.getProperty("/conteudo");
						enderecos.unshift({
							cep:this._oModel.getProperty("/cep"),
							logradouro:this._oModel.getProperty("/logradouro"),
							bairro:this._oModel.getProperty("/bairro"),
							localidade:this._oModel.getProperty("/localidade"),
							uf:this._oModel.getProperty("/uf"),
							ibge:this._oModel.getProperty("/ibge")
						});
						this._oModel.setProperty("/conteudo", enderecos);
					}
					
					if(!oEvt.getParameters().success || this._oModel.getProperty("/erro")){
						MessageToast.show("CEP não encontrado ou inválido");
					}
			},
			
			onSearch: function (oEvent) {
				 
				
				var sCep = this.getView().getModel("view").getProperty("/searchTerm");
				
				var sUrl = "https://viacep.com.br/ws/" + sCep + "/json";
				
				this.getView().getModel("view").setProperty("/busy", true);
				
				this._oModel.loadData(sUrl, null, true, "GET", true);
				
				this.getView().getModel("view").setProperty("/searchTerm", "");

			}
		});
	});
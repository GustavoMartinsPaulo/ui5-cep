sap.ui.define([
	"sap/ui/core/ComponentContainer"
	], function (ComponentContainer) {
		"use strict";
		
		new ComponentContainer ({
			name:"sap.ui.cep",
			settings:{
				id:"cep"
			},
			async:true
		}).placeAt("content");
	});
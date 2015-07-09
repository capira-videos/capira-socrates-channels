/*
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

(function(document) {
  'use strict';

  // Grab a reference to our auto-binding template
  // and give it some initial binding values
  // Learn more about auto-binding templates at http://goo.gl/Dx1u2g
  var app = document.querySelector('#app');

  app.displayInstalledToast = function() {
    document.querySelector('#caching-complete').show();
  };

  // Listen for template bound event to know when bindings
  // have resolved and content has been stamped to the page
  app.addEventListener('dom-change', function() {
    console.log('Our app is ready to rock!');
  });

  // See https://github.com/Polymer/polymer/issues/1381
  window.addEventListener('WebComponentsReady', function() {
    // imports are loaded and elements have been registered
  });

  // Close drawer after menu item is selected if drawerPanel is narrow
  app.onMenuSelect = function() {
    var drawerPanel = document.querySelector('#paperDrawerPanel');
    if (drawerPanel.narrow) {
      drawerPanel.closeDrawer();
    }
  };

})(document);



var channels={
	"id": 1,
	"title": "Mathe-Crashkurs",
	"parent": 140,
	"description": "Grundrechenarten, Umformen, Mengen, Potenzen, Logarithmen, Trigonometrie, Sinus",
	"folders": [{
		"id": 103,
		"title": "01: Grundrechenarten, Ausdr\u00fccke, Umformungen",
		"viewIndex": 0,
		"published": 1,
		"parent": 1,
		"description": "",
		"thumbnail": "vJcHp9j8U_s",
		"progress": null
	}, {
		"id": 104,
		"title": "02: Bruchrechnung",
		"viewIndex": 1,
		"published": 1,
		"parent": 1,
		"description": "",
		"thumbnail": "QTDEtQn5Iuo",
		"progress": null
	}, {
		"id": 105,
		"title": "03: Proportionalit\u00e4t, Dreisatz, lineare Funktionen",
		"viewIndex": 2,
		"published": 1,
		"parent": 1,
		"description": "",
		"thumbnail": "Djw1nV2Sh4M",
		"progress": null
	}, {
		"id": 106,
		"title": "04: St\u00fcckweise Definition, Verkettung von Funktionen",
		"viewIndex": 3,
		"published": 1,
		"parent": 1,
		"description": "",
		"thumbnail": "2avbpGeFwAM",
		"progress": null
	}, {
		"id": 107,
		"title": "05: Potenzen, Wurzeln, Exponentialfunktionen, Logarithmen",
		"viewIndex": 4,
		"published": 1,
		"parent": 1,
		"description": "",
		"thumbnail": "BAJUm9me6wI",
		"progress": null
	}, {
		"id": 108,
		"title": "06: Dreiecke, Sinus und Co",
		"viewIndex": 5,
		"published": 1,
		"parent": 1,
		"description": "",
		"thumbnail": "QFxZ_sfDumE",
		"progress": null
	}, {
		"id": 109,
		"title": "07: Elementare L\u00e4ngen, Fl\u00e4chen und Volumen",
		"viewIndex": 6,
		"published": 1,
		"parent": 1,
		"description": "",
		"thumbnail": "_bYAHUaazJ0",
		"progress": null
	}, {
		"id": 110,
		"title": "08: Vektoren",
		"viewIndex": 7,
		"published": 1,
		"parent": 1,
		"description": "",
		"thumbnail": "YNjWRLMaE3U",
		"progress": null
	}, {
		"id": 111,
		"title": "09: Mengen, Zahlenbereiche",
		"viewIndex": 8,
		"published": 1,
		"parent": 1,
		"description": "",
		"thumbnail": "etYxOVHr6Wg",
		"progress": null
	}, {
		"id": 112,
		"title": "10: Ableitungen",
		"viewIndex": 9,
		"published": 1,
		"parent": 1,
		"description": "",
		"thumbnail": "4y-RdxwWmW0",
		"progress": null
	}, {
		"id": 113,
		"title": "11: Gleichungen und Gleichungssysteme, Polynome",
		"viewIndex": 10,
		"published": 1,
		"parent": 1,
		"description": "",
		"thumbnail": "gWSw6mDZ8_E",
		"progress": null
	}],
	"units": [],
	"path": [{
		"id": 1,
		"title": "Mathe-Crashkurs"
	}],
	"channelAdmin": false,
	"admin": false
}


(function(document) {
  'use strict';

  // Grab a reference to our auto-binding template
  // and give it some initial binding values
  // Learn more about auto-binding templates at http://goo.gl/Dx1u2g
  var app = document.querySelector('#app');

  app.displayInstalledToast = function() {
    //document.querySelector('#caching-complete').show();
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

  app.setServiceUrl=function(folderId){
      app.serviceURL="/server/channelServer.php?id="+folderId;
  }

})(document);




/*
 * paper-inputs are auto-focused only once when contained in a paper-dialog.
 * we use this fix: https://gist.github.com/kevashcraft/b07b2aa83563473c54c2
 */

window.addEventListener('iron-overlay-opened', fixDialog);

function fixDialog (dore) {
	var dialog = (typeof dore.tagName != 'undefined') ? dore : dore.target;
	if(dialog.tagName == 'PAPER-DIALOG') {
		dialog.fit();
		var input = dialog.querySelector('[autofocus]');
		if(input) {
			if(typeof input.dataset.highlight != 'undefined') var highlight = true;
			switch(input.tagName.toLowerCase()) {
				case 'paper-textarea':
				case 'paper-input':
					input.$.input.focus();
					if(highlight) input.$.input.select();
					break;
				case 'input':
					input.focus();
					if(highlight) input.select();
					break;
				case 'iron-autogrow-textarea':
					console.log("Here!");
					break;
				default:
					console.log("Tried to focus:",input.tagName.toLowerCase());
			}
		}
	}
}


(function(document) {
  'use strict';

  // Grab a reference to our auto-binding template
  // and give it some initial binding values
  // Learn more about auto-binding templates at http://goo.gl/Dx1u2g
  var app = document.querySelector('#app');

  // Listen for template bound event to know when bindings
  // have resolved and content has been stamped to the page
  app.addEventListener('dom-change', function() {
    console.log('Our app is ready to rock!');
  });

  // See https://github.com/Polymer/polymer/issues/1381
  window.addEventListener('WebComponentsReady', function() {
    app.editorService = document.querySelector('#channelEditorService');
  });

  // paper-inputs are auto-focused only once when contained in a paper-dialog.
  // we use this fix: https://stackoverflow.com/questions/31600258/autofocus-paper-input-in-a-paper-dialog-works-only-once
  window.addEventListener('iron-overlay-opened', function(event) {
    // Grab the autofocus input
    var input = event.target.querySelector('[autofocus]');
    // Switch it because some require special treatment
    if (input.tagName) {
      switch (input.tagName.toLowerCase()) {
        case 'input':
          input.focus();
          break;
        case 'paper-textarea':
        case 'paper-input':
          input.$.input.focus();
          break;
      }
    }
  });

  app.setServiceUrl = function(folderId) {
    app.serviceURL = '/server/channelServer.php?id=' + folderId; // +'&editor=true';
  };

})(document);

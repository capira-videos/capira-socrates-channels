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
        app.services = document.querySelector('#services');
        app.editorService = document.querySelector('#channelEditorService');
        app.permissionsService = document.querySelector('#permissionsService');
    });

    app.fetchChannel = function(channelId) {
        if (!app.services) {
            app.services = document.querySelector('#services');
        }
        app.services.fetchChannel(channelId).then(function(req) {
            app.set('channelUrl', '/channel/#!/'+channelId);
            app.set('channel', req.response);
        });
    };

    app.openAccount = function() {
        document.querySelector('#account').open();
    };

    app.changedUser = function() {
        //document.querySelector('#channelService').generateRequest();
        app.fetchChannel(app.channel.id);
    };


    // paper-inputs are auto-focused only once when contained in a paper-dialog.
    // we use this fix: https://stackoverflow.com/questions/31600258/autofocus-paper-input-in-a-paper-dialog-works-only-once
    window.addEventListener('iron-overlay-opened', function(event) {
        // Grab the autofocus input
        var input = event.target.querySelector('[autofocus]');
        // Switch it because some require special treatment
        if (input && input.tagName) {
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

})(document);

var ipc = require( 'ipc' );
var shell = require( 'shell' );
var inherits = require( 'util' ).inherits;
var EE = require( 'events' ).EventEmitter;

var App = function () {
    var self = this;
    if ( !( this instanceof App ) ) {
        return new App();
    }
    EE.call( this );

    // communicate to main process
    self.ping = function () {
        return ipc.sendSync( 'message', 'ping' );
    };

    self.dev = function () {
        ipc.send( 'open-dev' );
    }
}
inherits( App, EE );

module.exports = window.App = App();
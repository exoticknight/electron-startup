var app = require( 'app' );  // Module to control application life.
var BrowserWindow = require( 'browser-window' );  // Module to create native browser window.
var ipc = require( 'ipc' );
var path = require( 'path' );

// global variable
var APP_NAME = 'Electron Startup Application';
var INDEX = 'file://' + path.join( __dirname, 'index.html' );

// Report crashes to our server.
require( 'crash-reporter' ).start();

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the javascript object is GCed.
var mainWindow = null;

// Quit when all windows are closed.
app.on( 'window-all-closed', function () {
  if ( process.platform != 'darwin' )
    app.quit();
});

// This method will be called when Electron has done everything
// initialization and ready for creating browser windows.
app.on( 'ready', appReady );

function appReady () {

    mainWindow = new BrowserWindow({
        'width': 1024,
        'height': 600,
        'resizable': false,
        'accept-first-mouse': true,
        'title': APP_NAME,
        'show': false,
    });

    mainWindow.loadUrl( INDEX );

    mainWindow.webContents.on( 'did-finish-load', function () {
        mainWindow.show();
    });

    mainWindow.on( 'closed', function () {
        mainWindow = null;
    });
}

// custom function
ipc.on( 'message', function( event, arg ) {
  console.log( arg );  // prints "ping"
  event.returnValue = 'pong';
});

ipc.on( 'open-dev', function( event, arg ) {
    mainWindow.openDevTools();
});


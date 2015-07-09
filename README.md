# Electron Startup Application
a more practical electron startup application

##Example

[Radioit-desktop](https://github.com/radioit/radioit-desktop)

##Dev Tools

* jshint, check js code
* rimraf, delete directory and file
* electron-packager, package electron application
* electron-prebuilt, electron run time
* silence-chromium, output console to terminator
* mkdirp, make directory
* nib, lib used by stylus
* stylus, css generator
* uglifyjs, js compressor
* browserify, js compiler
* watchify, watch every change
* parallelshell, run your commands asynchronously

##Explaination

###package.json

`name`: name of application

`description`: description of application

`version`: version of application

`author`: your name

`email`: your email

###main.js

start point of electron application

###lib

server-side javascript files

###src/css

.styl files

###src/modules

client-side javascript files, ready for compiling

###src/modules/entry.js

entry point for browserify

###static/css

compiled .css files

###static/font

fonts files

###static/image

images files

###static/js

client-side js libs

###static/js/bundle.js

output file compiled by browserify

###static/view

template files or partial html

##Scripts

use it after `npm run`

###build:css

generate app.css into static/css

###build:js

browserify bundle.js into static/js

###release:css

build:css with compress

###release:js

build:js with compress

###test

run app

###start

run app after rebuilding js and css
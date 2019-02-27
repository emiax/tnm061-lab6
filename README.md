# Lab 6, TNM061, Linköping University

This is an alternative archive of lab files for the [Lab 6 in TNM061 at Linköping University](http://weber.itn.liu.se/~stegu/TNM061-2017/Lab6-Threejs.pdf)

The original lab file archive has all code written in one file with both html and Javascript code. This may be a convenient way to get started with coding for the web, but once the project grows a little bit bigger, it easily becomes unmaintainable.

This alternative lab stub uses [NodeJS](http://nodejs.org) and [Webpack](https://webpack.js.org/) to make it possible to split the code into several files and to use features from newer versions of JavaScript. This may serve as a good starting point for a course project.

For this, you need to have NodeJS and Node Package Manager (npm) installed on your computer.

To start developing, run the following command:

`npm start`

To package everything into a distributable package:

`npm run build`
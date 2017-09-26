'use strict';

const gulp = require('gulp');
const electron = require('electron-connect').server.create();

const { app, BrowserWindow } = require('electron');
const client                 = require('electron-connect').client;

gulp.task('serve', function () {

  // Start browser process
  electron.start();

  // Restart browser process
  // gulp.watch('./app.js', electron.restart);
  //
  // // Reload renderer process
  // gulp.watch(['index.js', 'index.html'], electron.reload);
});

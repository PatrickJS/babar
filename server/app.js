var NODE_ENV = process.env.NODE_ENV = (process.env.NODE_ENV || 'production');
var PORT = process.env.PORT = (process.env.PORT || 3000);
var _ = require('underscore');
var express = require('express');
var stylus = require('stylus');
var path = require('path');
var cors = require('cors');
var config = require('./config.json')[NODE_ENV];
var mongodb = require('mongodb');

module.exports = function(SERVER_ROOT) {
  var app = express();
  app.directory = SERVER_ROOT;
  var database = require('../database')(app, config);

  // Store all environment variables
  app.set('port', PORT);
  app.set('env', NODE_ENV);
  app.configure(function() {
    // App middleware
    app.use(cors());
    app.set('view engine', 'ejs');
    app.set('views', path.join(app.directory, 'client'));
    app.use(express.logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded());
    app.use(express.methodOverride());
    app.use(express.cookieParser());
    app.use(express.session({secret: 'yolo'}));
    // app.use(express.compress());
    // app.use(express.session());
    app.use('/bower_components', express.static(path.join(app.directory, 'bower_components')));
    app.use('/templates', express.static(path.join(app.directory, 'client/templates')));
    app.use(express.static(path.join(app.directory, 'public')));
    app.use(app.router);
    app.use(stylus.middleware({
      src: app.directory + '/client/styles',
      dest: app.directory + '/public/stylesheets',
      compile: function(str, path, fn) {
        stylus(str)
        .set('filename', path)
        .set('compress', true)
        .render(fn);
      }
    }));
  });
  app.get('/*', function(req, res) {
    return res.render('index', {env: app.get('env')});
  });

  return app;
};

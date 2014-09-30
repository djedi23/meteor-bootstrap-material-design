Package.describe({
  summary: "Bootstap material design for Meteor",
  version: "0.0.8",
  git: "https://github.com/djedi23/meteor-bootstrap-material-design.git"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.3');

  api.use('jquery', 'client');

  api.addFiles('bootstrap-material-design/css-compiled/ripples.css', 'client');
  api.addFiles('bootstrap-material-design/css-compiled/material.css', 'client');
  api.addFiles('bootstrap-material-design/css-compiled/material-wfont.css', 'client');

  api.addFiles('bootstrap-material-design/scripts/ripples.js', 'client', {bare: true});
  api.addFiles('bootstrap-material-design/scripts/material.js', 'client', {bare: true});

  api.addFiles('bootstrap-material-design/icons/icons-material-design.css', 'client');
  api.addFiles('bootstrap-material-design/icons/fonts/Material-Design.eot', 'client');
  api.addFiles('bootstrap-material-design/icons/fonts/Material-Design.svg', 'client');
  api.addFiles('bootstrap-material-design/icons/fonts/Material-Design.ttf', 'client');
  api.addFiles('bootstrap-material-design/icons/fonts/Material-Design.woff', 'client');

  api.export('ripples','client');

});


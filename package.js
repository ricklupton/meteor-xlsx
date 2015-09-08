Package.describe({
  name: 'ricklupton:xlsx',
  version: '0.8.0',
  // Brief, one-line summary of the package.
  summary: 'Excel (XLSB/XLSX/XLSM/XLS/XML) and ODS spreadsheet parser and writer',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/ricklupton/meteor-xlsx',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');
  api.addFiles('bower_components/js-xlsx/dist/xlsx.core.min.js');
});

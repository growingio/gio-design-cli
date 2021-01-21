#!/usr/bin/env node

const version = require('../lib/version');

require('yargs')
  .scriptName("gio-design")
  .usage('Usage: $0 [command] [options]')
  .command('version', 'Output the version of your package via the command line.', (yargs) => {
    yargs.option(
      'package-file',
      {
        alias: 'p',
        type: 'string',
        describe: 'Specify a package file to parse version'
      }
    )
    .demandOption(['package-file'], 'Please provide package-file parameter')
  }, function (argv) {
    console.log(version(argv.p));
  })
  .help()
  .argv
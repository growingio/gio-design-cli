#!/usr/bin/env node
/* eslint-disable no-console */
/* eslint-disable no-unused-expressions */

const version = require("../lib/version");

require("yargs")
  .scriptName("gio-design")
  .usage("Usage: $0 [command] [options]")
  .command(
    "version",
    "Output the version of your package via the command line.",
    (yargs) => {
      yargs
        .option("package-file", {
          alias: "p",
          type: "string",
          describe: "Specify a package file to parse version",
        })
        .demandOption(
          ["package-file"],
          "Please provide package-file parameter"
        );
    },
    (argv) => {
      console.log(version(argv.p));
    }
  )
  .help().argv;

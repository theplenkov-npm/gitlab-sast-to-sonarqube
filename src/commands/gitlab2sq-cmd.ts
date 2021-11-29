#!/usr/bin/env ts-node-script

import {Command} from "commander";
import {readFile, writeFile} from "fs/promises";

import gitlab2qs from "../functions/gitlab2sq";

const program = new Command();

program
  .option("--target <target>", "target for SonarQube Issue Report")
  .argument("<source>")
  .action(async (source: string, {target}: {target: string}) => {
    // read gitlab report
    const gitlabReport = JSON.parse((await readFile(source)).toString());
    const sonarQubeReport = JSON.stringify(gitlab2qs(gitlabReport), null, "\t");

    // write to file or pipe to stdout
    target
      ? writeFile(target, sonarQubeReport)
      : process.stdout.write(sonarQubeReport);
  })
  .parseAsync(process.argv)
  .then((...args) => {});

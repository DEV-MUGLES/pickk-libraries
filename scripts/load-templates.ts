/* eslint-disable @typescript-eslint/no-unused-vars */
import fs from 'fs';
import chalk from 'chalk';
import { exec } from 'child_process';

const ROOT_DIR = 'packages';
const TEMPLATE_ROOT_DIR = 'packages/template';

function createPackage(name: string) {
  console.log(`New package name: ${name}`);

  if (!name?.length) {
    console.log(chalk.red(`Error: Cannot load ${name}`));
    return;
  }

  const packageDir = `${ROOT_DIR}/${name}`;

  if (fs.existsSync(packageDir)) {
    console.log(chalk.red(`Error: ${name} is already exists!`));
    return;
  }

  fs.mkdirSync(packageDir);
  exec(`cp -a ${TEMPLATE_ROOT_DIR}/. ${packageDir}`);

  const INIT_FILES = fs.readdirSync(TEMPLATE_ROOT_DIR);
  INIT_FILES.map((filePath) => {
    console.log(chalk.green(`\tadded: ${packageDir}/${filePath}`));
  });
}

const packageName = process.argv[2];
createPackage(packageName);

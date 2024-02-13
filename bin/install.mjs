#!/usr/bin/env node
/* eslint-disable no-console */

import inquirer from 'inquirer';
import { execSync } from 'child_process';

const runCommand = (command) => {
  try {
    execSync(`${command}`, { stdio: 'inherit' });
  } catch (err) {
    console.error(`Failed to execute ${command}`, err);
    return false;
  }

  return true;
};

const repoName = process.argv[2];
let gitCheckoutCommand = `git clone --depth 1 git@github.com:eakkawat/vite-react-ts-starter.git ${repoName}`;

// Ask user some questions for project configuration
const questions = [
  {
    type: 'confirm',
    name: 'storybook',
    message: 'Do you want to install storybook (recommended)',
    default: true,
  },
  {
    type: 'confirm',
    name: 'tailwindCSS',
    message: 'Do you want to install tailwindCSS',
    default: false,
  },
];

inquirer.prompt(questions).then((answers) => {
  const { tailwindCSS, storybook } = answers;
  if (storybook && !tailwindCSS)
    gitCheckoutCommand = `git clone --depth 1 --branch storybook git@github.com:eakkawat/vite-react-ts-starter.git ${repoName}`;
  if (tailwindCSS && !storybook)
    gitCheckoutCommand = `git clone --depth 1 --branch tailwindcss git@github.com:eakkawat/vite-react-ts-starter.git ${repoName}`;
  if (storybook && tailwindCSS)
    gitCheckoutCommand = `git clone --depth 1 --branch storybook-tailwind git@github.com:eakkawat/vite-react-ts-starter.git ${repoName}`;

  // Execute command
  console.info(`Cloning the repository named ${repoName}`);
  const checkOut = runCommand(gitCheckoutCommand);
  if (!checkOut) process.exit(-1);

  const installDependenciesCommand = `cd ${repoName} && pnpm install`;
  console.info(`Installing dependencies for ${repoName}`);
  const installDeps = runCommand(installDependenciesCommand);
  if (!installDeps) {
    console.error(
      'Please check that you have pnpm installed as we use pnpm to install packages: npm ls -g'
    );
    process.exit(-1);
  }

  console.info(
    'Congratulations! You are ready. Follow the following command to start'
  );
  console.info(`cd ${repoName} && pnpm run dev`);
});

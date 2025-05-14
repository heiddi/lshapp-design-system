#!/usr/bin/env node
/**
 * Simple script to run Storybook for React Native Web
 */

const { spawn } = require('child_process');
const path = require('path');

// Define colors for console output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  dim: '\x1b[2m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
};

console.log(`${colors.bright}${colors.cyan}Starting Storybook for React Native Web...${colors.reset}`);
console.log(`${colors.dim}Press Ctrl+C to stop${colors.reset}`);

// Start Storybook using npx to avoid path issues
const storybookProcess = spawn('npx', [
  'storybook', 
  'dev', 
  '-p', '6006',
  '--no-open'
], {
  cwd: path.resolve(__dirname, '..'),
  stdio: 'inherit',
  shell: true
});

// Handle process exit
storybookProcess.on('close', (code) => {
  if (code !== 0) {
    console.log(`${colors.yellow}Storybook process exited with code ${code}${colors.reset}`);
  }
  process.exit(code);
});

// Handle SIGINT (Ctrl+C)
process.on('SIGINT', () => {
  console.log(`${colors.bright}${colors.green}Stopping Storybook...${colors.reset}`);
  storybookProcess.kill('SIGINT');
}); 
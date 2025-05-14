#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('Setting up Storybook for React Native Web...');

// Ensure we're in the UI package directory
const packageJsonPath = path.resolve(__dirname, '../package.json');
if (!fs.existsSync(packageJsonPath)) {
  console.error('Error: package.json not found. Make sure you are running this script from the UI package directory.');
  process.exit(1);
}

try {
  // Install required dependencies
  console.log('Installing dependencies...');
  execSync('pnpm install', { stdio: 'inherit' });
  
  // Generate storybook files
  console.log('Generating storybook files...');
  execSync('node scripts/storybook-generate.js', { stdio: 'inherit' });
  
  // Start storybook
  console.log('Starting Storybook server...');
  console.log('Once started, open http://localhost:6006 in your browser');
  execSync('storybook dev -p 6006', { stdio: 'inherit' });
} catch (error) {
  console.error('Error setting up Storybook:', error.message);
  process.exit(1);
} 
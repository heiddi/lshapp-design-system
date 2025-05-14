const fs = require('fs');
const path = require('path');

// This is a simple script to manually create storybook.requires.js
// since the official sb-rn-get-stories tool might not work correctly in all environments

const STORIES_PATH = path.resolve(__dirname, '../src/**/*.stories.@(js|jsx|ts|tsx)');
const OUTPUT_PATH = path.resolve(__dirname, '../storybook.requires.js');

const content = `
// Auto-generated file by storybook-generate script
import { configure, addDecorator } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';

addDecorator(withKnobs);

// Import your stories
import './src/components/Button.stories';

// Configure Storybook
configure(() => {
  // No need to add anything here since we're explicitly importing stories above
}, module);
`;

// Ensure the directory exists
fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });

// Write the file
fs.writeFileSync(OUTPUT_PATH, content);
console.log('Generated storybook.requires.js'); 
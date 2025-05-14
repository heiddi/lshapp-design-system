
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

import React from 'react';
import { View } from 'react-native';

/** @type { import('@storybook/react').Preview } */
const preview = {
  decorators: [
    (Story) => (
      <View style={{ padding: 20, maxWidth: 500 }}>
        <Story />
      </View>
    ),
  ],

  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview; 
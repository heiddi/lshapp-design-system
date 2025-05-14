import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const withContainer = (Story: any) => {
  return <Story />;
};

const preview = {
  decorators: [withContainer],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

// Set AsyncStorage as the storage for Storybook
export const storageOptions = {
  storage: AsyncStorage,
};

export default preview; 
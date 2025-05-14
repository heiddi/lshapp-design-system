import { getStorybookUI } from '@storybook/react-native';
import './storybook.requires';
import { storageOptions } from './.storybook/preview';

const StorybookUIRoot = getStorybookUI({
  ...storageOptions,
  asyncStorage: null,
  onDeviceUI: true,
  disableWebsockets: true,
  shouldPersistSelection: true,
});

export default StorybookUIRoot; 
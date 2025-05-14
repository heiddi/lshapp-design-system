import React from 'react';
import { View } from 'react-native';
import Button from './Button';

const ButtonMeta = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    onPress: { action: 'pressed' },
  },
};

export default ButtonMeta;

export const Basic = {
  args: {
    title: 'Press Me',
  },
};

export const ColoredButton = {
  args: {
    title: 'Press Me',
    color: '#FF5722',
  },
};

export const ButtonGroup = () => (
  <View style={{ gap: 10 }}>
    <Button title="Primary Button" color="#007AFF" />
    <Button title="Success Button" color="#4CAF50" />
    <Button title="Danger Button" color="#F44336" />
  </View>
); 
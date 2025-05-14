import React from 'react';
import { View } from 'react-native';
import ButtonPrimary from './ButtonPrimary';

const ButtonPrimaryMeta = {
  title: 'Components/ButtonPrimary',
  component: ButtonPrimary,
  argTypes: {
    onPress: { action: 'pressed' },
    variant: {
      options: ['solid', 'outline'],
      control: { type: 'radio' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
};

export default ButtonPrimaryMeta;

export const Default = {
  args: {
    label: 'Button Primary',
    variant: 'solid',
    disabled: false,
  },
};

export const Outline = {
  args: {
    label: 'Button Outline',
    variant: 'outline',
    disabled: false,
  },
};

export const Disabled = {
  args: {
    label: 'Button Disabled',
    variant: 'solid',
    disabled: true,
  },
};

export const OutlineDisabled = {
  args: {
    label: 'Outline Disabled',
    variant: 'outline',
    disabled: true,
  },
};

export const ButtonVariants = () => (
  <View style={{ gap: 16 }}>
    <ButtonPrimary label="Solid Button" onPress={() => {}} />
    <ButtonPrimary label="Outline Button" variant="outline" onPress={() => {}} />
    <ButtonPrimary label="Disabled Button" disabled onPress={() => {}} />
    <ButtonPrimary label="Outline Disabled" variant="outline" disabled onPress={() => {}} />
  </View>
); 
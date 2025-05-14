import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export interface ButtonProps {
  onPress?: () => void;
  title: string;
  color?: string;
}

const Button = ({ onPress, title, color = '#007AFF' }: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: color }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default Button; 
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, StyleProp, ViewStyle, TextStyle, AccessibilityRole } from 'react-native';
import tokens from '../tokens';

export interface ButtonPrimaryProps {
  label: string;
  onPress: () => void;
  variant?: 'solid' | 'outline';
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
}

const ButtonPrimary = ({
  label,
  onPress,
  variant = 'solid',
  disabled = false,
  style,
  labelStyle,
}: ButtonPrimaryProps) => {
  const buttonStyles = [
    styles.button,
    variant === 'solid' && styles.solid,
    variant === 'outline' && styles.outline,
    disabled && (variant === 'solid' ? styles.disabledSolid : styles.disabledOutline),
    style,
  ];

  const textStyles = [
    styles.text,
    variant === 'outline' && styles.outlineText,
    disabled && styles.disabledText,
    labelStyle,
  ];

  return (
    <TouchableOpacity
      style={buttonStyles}
      onPress={onPress}
      disabled={disabled}
      accessible={true}
      accessibilityRole={'button' as AccessibilityRole}
      accessibilityLabel={label}
    >
      <Text style={textStyles}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: parseInt(tokens.spacing.m.replace('px', '')),
    paddingHorizontal: parseInt(tokens.spacing.l.replace('px', '')),
    borderRadius: parseInt(tokens.borderRadius.m.replace('px', '')),
    alignItems: 'center',
    justifyContent: 'center',
  },
  solid: {
    backgroundColor: tokens.colors.primary[600],
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: tokens.colors.primary[600],
  },
  disabledSolid: {
    backgroundColor: tokens.colors.neutral[300],
  },
  disabledOutline: {
    borderColor: tokens.colors.neutral[300],
  },
  text: {
    color: tokens.colors.neutral.white,
    fontSize: parseInt(tokens.typography.fontSizes.m.replace('px', '')),
    fontWeight: '600',
  },
  outlineText: {
    color: tokens.colors.primary[600],
  },
  disabledText: {
    color: tokens.colors.neutral[500],
  },
});

export default ButtonPrimary; 
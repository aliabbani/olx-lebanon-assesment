import React from 'react';
import { ActivityIndicator, StyleSheet, Text, TextStyle, TouchableOpacity, ViewStyle } from 'react-native';
import { useAppSelector } from '../../redux/hooks';

interface CustomButtonProps {
  title: string;
  titleAr: string;
  onPress: () => void;
  loading?: boolean;
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'outline';
  style?: ViewStyle;
  textStyle?: TextStyle;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  titleAr,
  onPress,
  loading = false,
  disabled = false,
  variant = 'primary',
  style,
  textStyle
}) => {
  const currentLanguage = useAppSelector(state => state.language.currentLanguage);
  const isRTL = currentLanguage.isRTL;

  const displayTitle = currentLanguage.code === 'ar' ? titleAr : title;

  const getButtonStyle = () => {
    switch (variant) {
      case 'secondary':
        return [styles.button, styles.buttonSecondary];
      case 'outline':
        return [styles.button, styles.buttonOutline];
      default:
        return [styles.button, styles.buttonPrimary];
    }
  };

  const getTextStyle = () => {
    switch (variant) {
      case 'secondary':
        return [styles.buttonText, styles.buttonTextSecondary];
      case 'outline':
        return [styles.buttonText, styles.buttonTextOutline];
      default:
        return [styles.buttonText, styles.buttonTextPrimary];
    }
  };

  return (
    <TouchableOpacity
      style={[
        ...getButtonStyle(),
        disabled && styles.buttonDisabled,
        style
      ]}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.7}
    >
      {loading ? (
        <ActivityIndicator color={variant === 'primary' ? '#fff' : '#002F56'} />
      ) : (
        <Text style={[...getTextStyle(), isRTL && styles.textRTL, textStyle]}>
          {displayTitle}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 48,
  },
  buttonPrimary: {
    backgroundColor: '#002F56',
  },
  buttonSecondary: {
    backgroundColor: '#f0f0f0',
  },
  buttonOutline: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#002F56',
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
  },
  buttonTextPrimary: {
    color: '#fff',
  },
  buttonTextSecondary: {
    color: '#333',
  },
  buttonTextOutline: {
    color: '#002F56',
  },
  textRTL: {
    textAlign: 'center',
  },
});

export default CustomButton;
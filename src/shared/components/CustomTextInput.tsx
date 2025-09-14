import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View
} from 'react-native';
import { useAppSelector } from '../../redux/hooks';

interface CustomTextInputProps extends TextInputProps {
  label: string;
  labelAr: string;
  error?: string;
  isPassword?: boolean;
  leftIcon?: string;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({
  label,
  labelAr,
  error,
  isPassword = false,
  leftIcon,
  style,
  ...props
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const currentLanguage = useAppSelector(state => state.language.currentLanguage);
  const isRTL = currentLanguage.isRTL;

  const displayLabel = currentLanguage.code === 'ar' ? labelAr : label;

  return (
    <View style={styles.container}>
      <Text style={[styles.label, isRTL && styles.labelRTL]}>
        {displayLabel}
      </Text>

      <View style={[styles.inputContainer, error && styles.inputContainerError]}>
        {leftIcon && (
          <Text style={[styles.leftIcon, isRTL && styles.leftIconRTL]}>
            {leftIcon}
          </Text>
        )}

        <TextInput
          style={[
            styles.input,
            isRTL && styles.inputRTL,
            leftIcon && styles.inputWithIcon,
            style
          ]}
          secureTextEntry={isPassword && !isPasswordVisible}
          textAlign={isRTL ? 'right' : 'left'}
          {...props}
        />

        {isPassword && (
          <TouchableOpacity
            style={[styles.passwordToggle, isRTL && styles.passwordToggleRTL]}
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
          >
            <Text style={styles.passwordToggleText}>
              {isPasswordVisible ? '🙈' : '👁️'}
            </Text>
          </TouchableOpacity>
        )}
      </View>

      {error && (
        <Text style={[styles.errorText, isRTL && styles.errorTextRTL]}>
          {error}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 6,
  },
  labelRTL: {
    textAlign: 'right',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    paddingHorizontal: 12,
    minHeight: 48,
  },
  inputContainerError: {
    borderColor: '#ff4444',
  },
  leftIcon: {
    fontSize: 20,
    marginRight: 8,
    color: '#666',
  },
  leftIconRTL: {
    marginRight: 0,
    marginLeft: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    paddingVertical: 0,
  },
  inputRTL: {
    textAlign: 'right',
  },
  inputWithIcon: {
    marginLeft: 0,
  },
  passwordToggle: {
    padding: 4,
    marginLeft: 8,
  },
  passwordToggleRTL: {
    marginLeft: 0,
    marginRight: 8,
  },
  passwordToggleText: {
    fontSize: 18,
  },
  errorText: {
    fontSize: 12,
    color: '#ff4444',
    marginTop: 4,
  },
  errorTextRTL: {
    textAlign: 'right',
  },
});

export default CustomTextInput;
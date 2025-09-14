import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { AuthService } from '../../core/services';
import { loginFailure, loginStart, loginSuccess } from '../../redux/authSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import COLORS from '../../shared/colors';
import CustomButton from '../../shared/components/CustomButton';
import CustomTextInput from '../../shared/components/CustomTextInput';

const EmailLoginScreen = () => {
  const navigation = useNavigation<any>();
  const dispatch = useAppDispatch();
  const currentLanguage = useAppSelector(state => state.language.currentLanguage);
  const { isLoading } = useAppSelector(state => state.auth);
  const isRTL = currentLanguage.isRTL;

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.email.trim()) {
      newErrors.email = currentLanguage.code === 'ar'
        ? 'البريد الإلكتروني مطلوب'
        : 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = currentLanguage.code === 'ar'
        ? 'البريد الإلكتروني غير صحيح'
        : 'Email is invalid';
    }

    if (!formData.password.trim()) {
      newErrors.password = currentLanguage.code === 'ar'
        ? 'كلمة المرور مطلوبة'
        : 'Password is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async () => {
    if (!validateForm()) return;

    dispatch(loginStart());

    try {
      // For demo purposes, use the assessment credentials if demo email is entered
      const username = formData.email === 'olx_usr1@olx.com.lb' ? 'olx_usr1' : formData.email;
      const response = await AuthService.login(username, formData.password);

      if (response.success) {
        dispatch(loginSuccess(response.data));
        Alert.alert(
          currentLanguage.code === 'ar' ? 'نجح تسجيل الدخول' : 'Login Successful',
          currentLanguage.code === 'ar' ? 'مرحباً بك في أوإل إكس لبنان' : 'Welcome to OLX Lebanon',
          [
            {
              text: 'OK',
              onPress: () => navigation.navigate('MainTabs')
            }
          ]
        );
      }
    } catch (error: any) {
      dispatch(loginFailure());
      Alert.alert(
        currentLanguage.code === 'ar' ? 'خطأ في تسجيل الدخول' : 'Login Error',
        error.message || (currentLanguage.code === 'ar'
          ? 'فشل في تسجيل الدخول'
          : 'Login failed')
      );
    }
  };

  const getTexts = () => ({
    title: currentLanguage.code === 'ar' ? 'تسجيل الدخول بالبريد الإلكتروني' : 'Log in with Email',
    email: currentLanguage.code === 'ar' ? 'البريد الإلكتروني' : 'Email',
    password: currentLanguage.code === 'ar' ? 'كلمة المرور' : 'Password',
    loginButton: currentLanguage.code === 'ar' ? 'تسجيل الدخول' : 'Log In',
    forgotPassword: currentLanguage.code === 'ar' ? 'نسيت كلمة المرور؟' : 'Forgot your password?',
    newToOlx: currentLanguage.code === 'ar' ? 'جديد على OLX؟' : 'New to OLX?',
    createAccount: currentLanguage.code === 'ar' ? 'إنشاء حساب' : 'Create an account',
    emailPlaceholder: currentLanguage.code === 'ar' ? 'أدخل البريد الإلكتروني' : 'Enter email',
    passwordPlaceholder: currentLanguage.code === 'ar' ? 'أدخل كلمة المرور' : 'Enter password',
    demoHint: currentLanguage.code === 'ar'
      ? 'للتجربة: olx_usr1@olx.com.lb / olx_pass'
      : 'Demo: olx_usr1@olx.com.lb / olx_pass'
  });

  const texts = getTexts();

  // Check if both email and password are filled
  const isFormFilled = formData.email.trim() !== '' && formData.password.trim() !== '';

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.keyboardView}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
          {/* Header with Back Button */}
          <View style={styles.header}>
            <TouchableOpacity
              style={[styles.backButton, isRTL && styles.backButtonRTL]}
              onPress={() => navigation.goBack()}
            >
              <Text style={styles.backButtonText}>
                ←
              </Text>
            </TouchableOpacity>
          </View>

          {/* Title */}
          <View style={styles.titleContainer}>
            <Text style={[styles.title, isRTL && styles.titleRTL]}>
              {texts.title}
            </Text>
          </View>

          {/* Demo Info */}
          <View style={styles.demoInfo}>
            <Text style={[styles.demoText, isRTL && styles.demoTextRTL]}>
              ℹ️ {texts.demoHint}
            </Text>
          </View>

          {/* Email Login Form */}
          <View style={styles.formContainer}>
            <CustomTextInput
              label={texts.email}
              labelAr={texts.email}
              value={formData.email}
              onChangeText={(text) => setFormData({ ...formData, email: text })}
              error={errors.email}
              placeholder={texts.emailPlaceholder}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
            />

            <CustomTextInput
              label={texts.password}
              labelAr={texts.password}
              value={formData.password}
              onChangeText={(text) => setFormData({ ...formData, password: text })}
              error={errors.password}
              placeholder={texts.passwordPlaceholder}
              isPassword
              autoCapitalize="none"
              autoCorrect={false}
            />

            {/* Forgot Password Link */}
            <TouchableOpacity style={styles.forgotPasswordContainer}>
              <Text style={[styles.forgotPasswordText, isRTL && styles.forgotPasswordTextRTL]}>
                {texts.forgotPassword}
              </Text>
            </TouchableOpacity>

            {/* Login Button */}
            <CustomButton
              title={texts.loginButton}
              titleAr={texts.loginButton}
              onPress={handleLogin}
              loading={isLoading}
              style={isFormFilled ? styles.loginButtonActive : styles.loginButton}
            />
          </View>

          {/* Create Account Link */}
          <View style={styles.createAccountContainer}>
            <Text style={[styles.newToOlxText, isRTL && styles.newToOlxTextRTL]}>
              {texts.newToOlx}{' '}
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('CreateAccount')}>
              <Text style={[styles.createAccountLink, isRTL && styles.createAccountLinkRTL]}>
                {texts.createAccount}
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  keyboardView: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 16,
  },
  header: {
    paddingTop: 32,
    alignItems: 'flex-start',
    paddingBottom: 16,
  },
  backButton: {
    alignSelf: 'flex-start',
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButtonRTL: {
    alignSelf: 'flex-end',
  },
  backButtonText: {
    fontSize: 28,
    color: '#000',
    fontWeight: '300',
  },
  titleContainer: {
    marginBottom: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  titleRTL: {
    textAlign: 'right',
  },
  demoInfo: {
    backgroundColor: '#e3f2fd',
    padding: 12,
    borderRadius: 8,
    marginBottom: 20,
  },
  demoText: {
    fontSize: 14,
    color: '#1976d2',
    textAlign: 'center',
  },
  demoTextRTL: {
    textAlign: 'center',
  },
  formContainer: {
    marginBottom: 24,
  },
  forgotPasswordContainer: {
    alignItems: 'flex-start',
    marginTop: 8,
    marginBottom: 20,
  },
  forgotPasswordText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  forgotPasswordTextRTL: {
    textAlign: 'right',
  },
  loginButton: {
    backgroundColor: '#ddd', // Disabled state color as shown in screenshot
  },
  loginButtonActive: {
    backgroundColor: '#333333', // Very dark gray when form is filled
  },
  createAccountContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 24,
  },
  newToOlxText: {
    fontSize: 16,
    color: COLORS.linkTeal,
  },
  newToOlxTextRTL: {
    textAlign: 'center',
  },
  createAccountLink: {
    fontSize: 16,
    color: COLORS.linkTeal,
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
  createAccountLinkRTL: {
    textAlign: 'center',
  },
});

export default EmailLoginScreen;
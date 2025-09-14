import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { toggleLanguage } from '../../redux/languageSlice';

interface HeaderProps {
  title: string;
  showLanguageToggle?: boolean;
  showLoginButton?: boolean;
  onLoginPress?: () => void;
}

const Header: React.FC<HeaderProps> = ({
  title,
  showLanguageToggle = true,
  showLoginButton = true,
  onLoginPress
}) => {
  const dispatch = useAppDispatch();
  const currentLanguage = useAppSelector(state => state.language.currentLanguage);
  const isAuthenticated = useAppSelector(state => state.auth.isAuthenticated);
  const user = useAppSelector(state => state.auth.user);
  const isRTL = currentLanguage.isRTL;

  const handleLanguageToggle = () => {
    dispatch(toggleLanguage());
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={[styles.container, isRTL && styles.containerRTL]}>
        <View style={styles.leftSection}>
          <Text style={[styles.title, isRTL && styles.titleRTL]}>
            {title}
          </Text>
        </View>

        <View style={styles.rightSection}>
          {showLanguageToggle && (
            <TouchableOpacity
              style={styles.languageButton}
              onPress={handleLanguageToggle}
              activeOpacity={0.7}
            >
              <Text style={styles.languageButtonText}>
                {currentLanguage.code === 'en' ? 'عربي' : 'EN'}
              </Text>
            </TouchableOpacity>
          )}

          {showLoginButton && (
            <TouchableOpacity
              style={styles.loginButton}
              onPress={onLoginPress}
              activeOpacity={0.7}
            >
              <Text style={styles.loginButtonText}>
                {isAuthenticated
                  ? (user?.username || 'User')
                  : (currentLanguage.code === 'ar' ? 'تسجيل دخول' : 'Login')
                }
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#002F56',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#002F56',
  },
  containerRTL: {
    flexDirection: 'row-reverse',
  },
  leftSection: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  titleRTL: {
    textAlign: 'right',
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  languageButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    marginRight: 8,
  },
  languageButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  loginButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default Header;
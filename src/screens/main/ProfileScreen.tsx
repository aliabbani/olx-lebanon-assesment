import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { toggleLanguage } from '../../redux/languageSlice';

const ProfileScreen = () => {
  const navigation = useNavigation<any>();
  const dispatch = useAppDispatch();
  const currentLanguage = useAppSelector(state => state.language.currentLanguage);
  const isAuthenticated = useAppSelector(state => state.auth.isAuthenticated);
  const user = useAppSelector(state => state.auth.user);
  const isRTL = currentLanguage.isRTL;

  const handleLanguageToggle = () => {
    dispatch(toggleLanguage());
  };

  const handleLoginPress = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.titleSection}>
          <Text style={[styles.pageTitle, isRTL && styles.pageTitleRTL]}>
            {currentLanguage.code === 'ar' ? 'الحساب والإعدادات' : 'Account & Settings'}
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, isRTL && styles.sectionTitleRTL]}>
            {currentLanguage.code === 'ar' ? 'الحساب' : 'Account'}
          </Text>

          {isAuthenticated ? (
            <View>
              <Text style={[styles.userText, isRTL && styles.userTextRTL]}>
                {currentLanguage.code === 'ar' ? 'مرحباً، ' : 'Welcome, '}
                {user?.username || 'User'}
              </Text>
              <TouchableOpacity style={styles.logoutButton}>
                <Text style={styles.logoutButtonText}>
                  {currentLanguage.code === 'ar' ? 'تسجيل خروج' : 'Logout'}
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View>
              <Text style={[styles.userText, isRTL && styles.userTextRTL]}>
                {currentLanguage.code === 'ar' ? 'غير مسجل الدخول' : 'Not logged in'}
              </Text>
              <TouchableOpacity
                style={styles.loginButton}
                onPress={handleLoginPress}
                activeOpacity={0.7}
              >
                <Text style={styles.loginButtonText}>
                  {currentLanguage.code === 'ar' ? 'تسجيل الدخول' : 'Login'}
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, isRTL && styles.sectionTitleRTL]}>
            {currentLanguage.code === 'ar' ? 'إعدادات اللغة' : 'Language Settings'}
          </Text>

          <TouchableOpacity
            style={styles.languageButton}
            onPress={handleLanguageToggle}
            activeOpacity={0.7}
          >
            <Text style={[styles.languageButtonText, isRTL && styles.languageButtonTextRTL]}>
              {currentLanguage.code === 'ar' ? 'تغيير إلى الإنجليزية' : 'Switch to Arabic'}
            </Text>
            <Text style={styles.currentLanguageText}>
              {currentLanguage.code === 'ar' ? 'العربية' : 'English'}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, isRTL && styles.sectionTitleRTL]}>
            {currentLanguage.code === 'ar' ? 'إعدادات أخرى' : 'Other Settings'}
          </Text>
          <Text style={[styles.placeholderText, isRTL && styles.placeholderTextRTL]}>
            {currentLanguage.code === 'ar' ? 'المزيد من الإعدادات قريباً...' : 'More settings coming soon...'}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 50,
  },
  titleSection: {
    marginBottom: 20,
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  pageTitleRTL: {
    textAlign: 'right',
  },
  section: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
  },
  sectionTitleRTL: {
    textAlign: 'right',
  },
  userText: {
    fontSize: 16,
    color: '#666',
  },
  userTextRTL: {
    textAlign: 'right',
  },
  loginButton: {
    backgroundColor: '#00A5A8',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 12,
    alignItems: 'center',
  },
  loginButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  logoutButton: {
    backgroundColor: '#FF6B6B',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 12,
    alignItems: 'center',
  },
  logoutButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  languageButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#00A5A8',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
  },
  languageButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  languageButtonTextRTL: {
    textAlign: 'right',
  },
  currentLanguageText: {
    fontSize: 14,
    color: '#fff',
    opacity: 0.8,
  },
  placeholderText: {
    fontSize: 14,
    color: '#999',
    fontStyle: 'italic',
  },
  placeholderTextRTL: {
    textAlign: 'right',
  },
  subtitle: {
    fontSize: 16,
    color: 'gray',
  },
});

export default ProfileScreen;
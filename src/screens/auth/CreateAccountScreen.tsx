import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { useAppSelector } from '../../redux/hooks';
import COLORS from '../../shared/colors';

const CreateAccountScreen = () => {
  const navigation = useNavigation<any>();
  const currentLanguage = useAppSelector(state => state.language.currentLanguage);
  const isRTL = currentLanguage.isRTL;

  const texts = {
    title: currentLanguage.code === 'ar' ? 'إنشاء حساب أوإل إكس جديد' : 'Create a new OLX account',
    googleJoin: currentLanguage.code === 'ar' ? 'انضم بـ Google' : 'Join with Google',
    facebookJoin: currentLanguage.code === 'ar' ? 'انضم بـ Facebook' : 'Join with Facebook',
    or: currentLanguage.code === 'ar' ? 'أو' : 'OR',
    emailJoin: currentLanguage.code === 'ar' ? 'انضم بالبريد الإلكتروني' : 'Join with Email',
    phoneJoin: currentLanguage.code === 'ar' ? 'انضم بالهاتف' : 'Join with Phone',
    alreadyHave: currentLanguage.code === 'ar' ? 'لديك حساب بالفعل؟' : 'Already have an account?',
    logIn: currentLanguage.code === 'ar' ? 'تسجيل الدخول' : 'Log in'
  };

  const handleSocialJoin = (platform: string) => {
    console.log(`${platform} join pressed (design only)`);
  };

  const handleEmailJoin = () => {
    console.log('Email join pressed (design only)');
  };

  const handlePhoneJoin = () => {
    console.log('Phone join pressed (design only)');
  };

  const handleLogIn = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContainer}>
        {/* Header with Close Button */}
        <View style={[styles.header, isRTL && styles.headerRTL]}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.closeButton}
          >
            <Text style={styles.closeButtonText}>✕</Text>
          </TouchableOpacity>
        </View>

        {/* Main Content */}
        <View style={styles.contentContainer}>
          {/* OLX Logo */}
          <View style={styles.logoContainer}>
            <Text style={styles.olxLogo}>olx</Text>
            <Text style={[styles.title, isRTL && styles.titleRTL]}>
              {texts.title}
            </Text>
          </View>

          {/* Social Join Buttons */}
          <View style={styles.socialContainer}>
            <TouchableOpacity
              onPress={() => handleSocialJoin('Google')}
              style={styles.socialButton}
            >
              <View style={styles.socialButtonContent}>
                <Text style={styles.googleIcon}>G</Text>
                <Text style={styles.socialButtonText}>
                  {texts.googleJoin}
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => handleSocialJoin('Facebook')}
              style={styles.socialButton}
            >
              <View style={styles.socialButtonContent}>
                <Text style={styles.facebookIcon}>f</Text>
                <Text style={styles.socialButtonText}>
                  {texts.facebookJoin}
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          {/* OR Divider */}
          <View style={styles.orContainer}>
            <Text style={styles.orText}>{texts.or}</Text>
          </View>

          {/* Join Options */}
          <View style={styles.loginOptionsContainer}>
            <TouchableOpacity
              onPress={handleEmailJoin}
              style={styles.loginOptionButton}
            >
              <View style={styles.loginOptionContent}>
                <Text style={styles.emailIcon}>✉</Text>
                <Text style={styles.loginOptionText}>
                  {texts.emailJoin}
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={handlePhoneJoin}
              style={styles.loginOptionButton}
            >
              <View style={styles.loginOptionContent}>
                <Text style={styles.phoneIcon}>📱</Text>
                <Text style={styles.loginOptionText}>
                  {texts.phoneJoin}
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          {/* Terms Text */}
          <View style={styles.termsContainer}>
            <Text style={styles.termsText}>
              {currentLanguage.code === 'ar'
                ? 'بإنشاء حساب، أنت توافق على شروط الاستخدام وسياسة الخصوصية لأوإل إكس'
                : 'When creating a new account you agree to OLX Terms and Conditions and Privacy Policy'}
            </Text>
          </View>

          {/* Log In Link */}
          <View style={styles.createAccountContainer}>
            <View style={styles.createAccountRow}>
              <Text style={styles.newToOlxText}>
                {texts.alreadyHave}{' '}
              </Text>
              <TouchableOpacity onPress={handleLogIn}>
                <Text style={styles.createAccountLink}>
                  {texts.logIn}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mainContainer: {
    flex: 1,
    paddingHorizontal: 16,
    justifyContent: 'space-between',
  },
  header: {
    paddingTop: 32,
    alignItems: 'flex-start',
  },
  headerRTL: {
    alignItems: 'flex-end',
  },
  closeButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeButtonText: {
    fontSize: 24,
    color: '#333',
    fontWeight: '300',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 40,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  olxLogo: {
    fontSize: 56,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    lineHeight: 26,
    paddingHorizontal: 8,
  },
  titleRTL: {
    textAlign: 'center',
  },
  socialContainer: {
    marginBottom: 16,
  },
  socialButton: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 12,
    backgroundColor: '#fff',
  },
  socialButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  googleIcon: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4285F4',
    marginRight: 16,
    width: 24,
    textAlign: 'center',
  },
  facebookIcon: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1877F2',
    marginRight: 16,
    width: 24,
    textAlign: 'center',
  },
  socialButtonText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '600',
    flex: 1,
    textAlign: 'center',
  },
  orContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  orText: {
    fontSize: 16,
    color: '#666',
    fontWeight: '500',
  },
  loginOptionsContainer: {
    marginBottom: 16,
  },
  loginOptionButton: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 12,
    backgroundColor: '#fff',
  },
  loginOptionContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  emailIcon: {
    fontSize: 20,
    marginRight: 16,
    width: 24,
    textAlign: 'center',
  },
  phoneIcon: {
    fontSize: 20,
    marginRight: 16,
    width: 24,
    textAlign: 'center',
  },
  loginOptionText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '600',
    flex: 1,
    textAlign: 'center',
  },
  createAccountContainer: {
    marginTop: 16,
    alignItems: 'center',
  },
  createAccountRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  newToOlxText: {
    fontSize: 16,
    color: COLORS.linkTeal,
  },
  createAccountLink: {
    fontSize: 16,
    color: COLORS.linkTeal,
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
  termsContainer: {
    marginTop: 16,
    marginBottom: 8,
    paddingHorizontal: 8,
  },
  termsText: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
    lineHeight: 16,
  },
});

export default CreateAccountScreen;
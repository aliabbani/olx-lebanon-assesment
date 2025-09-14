import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import CreateAccountScreen from '../screens/auth/CreateAccountScreen';
import EmailLoginScreen from '../screens/auth/EmailLoginScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import PhoneLoginScreen from '../screens/auth/PhoneLoginScreen';
import AdDetailsScreen from '../screens/main/AdDetailsScreen';
import HomeScreen from '../screens/main/HomeScreen';
import ProfileScreen from '../screens/main/ProfileScreen';
import SearchScreen from '../screens/main/SearchScreen';

export type RootStackParamList = {
  MainTabs: undefined;
  Login: undefined;
  EmailLogin: undefined;
  PhoneLogin: undefined;
  CreateAccount: undefined;
  AdDetails: { adId: string };
};

export type TabParamList = {
  Home: undefined;
  Search: undefined;
  Account: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<TabParamList>();

const HomeIcon = ({ color }: { color: string }) => (
  <Text style={[styles.tabIcon, { color }]}>⌂</Text>
);

const SearchIcon = ({ color }: { color: string }) => (
  <Text style={[styles.tabIcon, { color }]}>⌕</Text>
);

const AccountIcon = ({ color }: { color: string }) => (
  <Text style={[styles.tabIcon, { color }]}>⚙</Text>
);

function MainTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#002F56',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'HOME',
          tabBarIcon: HomeIcon
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarLabel: 'SEARCH',
          tabBarIcon: SearchIcon
        }}
      />
      <Tab.Screen
        name="Account"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'ACCOUNT',
          tabBarIcon: AccountIcon
        }}
      />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen name="MainTabs" component={MainTabNavigator} />
        <RootStack.Screen
          name="Login"
          component={LoginScreen}
          options={{ presentation: 'modal' }}
        />
        <RootStack.Screen
          name="EmailLogin"
          component={EmailLoginScreen}
          options={{ presentation: 'modal' }}
        />
        <RootStack.Screen
          name="PhoneLogin"
          component={PhoneLoginScreen}
          options={{ presentation: 'modal' }}
        />
        <RootStack.Screen
          name="CreateAccount"
          component={CreateAccountScreen}
          options={{ presentation: 'modal' }}
        />
        <RootStack.Screen
          name="AdDetails"
          component={AdDetailsScreen}
          options={{ headerShown: true, title: 'Ad Details' }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabIcon: {
    fontSize: 20,
  },
});
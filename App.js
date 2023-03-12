import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import TopPickScreen from './screens/TopPickScreen';
import MessageScreen from './screens/MessageScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();


export default function App() {
  return (
     <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#cc0000',
          tabBarShowLabel: false,
          headerShown: false,
          tabBarInactiveBackgroundColor: '#d9d9d9',
        }}
      >
        <Tab.Screen 
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ focused }) => (
              <MaterialCommunityIcons name='fire' focused={focused} size={30} color="pink" />
            ),
          }}
        />
        <Tab.Screen 
          name="ProfileScreen"
          component={ProfileScreen}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ focused }) => (
              <MaterialCommunityIcons name='account' focused={focused} size={30} color="blue" />
            ),
          }}
        />
        <Tab.Screen 
          name="TopPickScreen"
          component={TopPickScreen}
          options={{
            tabBarLabel: 'TopPick',
            tabBarIcon: ({ focused }) => (
              <IonIcon name='star' focused={focused} size={30} color="red" />
            ),
          }}
        />
        <Tab.Screen 
          name="MessageScreen"
          component={MessageScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ focused }) => (
              <MaterialCommunityIcons name='message' focused={focused} size={30} color="green" />
            ),
          }}
        />
      </Tab.Navigator>
     </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  home: {
    backgroundColor: 'red',
  },
});

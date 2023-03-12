import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import TopPickScreen from './screens/TopPickScreen';
import MessageScreen from './screens/MessageScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { FontAwesome } from '@expo/vector-icons'; 

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
              <MaterialCommunityIcons name='fire' focused={focused} size={30} />
            ),
          }}
        />
        <Tab.Screen 
          name="ProfileScreen"
          component={ProfileScreen}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ focused }) => (
              <MaterialCommunityIcons name='account' focused={focused} size={30} />
            ),
          }}
        />
        <Tab.Screen 
          name="TopPickScreen"
          component={TopPickScreen}
          options={{
            tabBarLabel: 'TopPick',
            tabBarIcon: ({ focused }) => (
              <FontAwesome name='diamond' focused={focused} size={30}/>
            ),
          }}
        />
        <Tab.Screen 
          name="MessageScreen"
          component={MessageScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ focused }) => (
              <FontAwesome name='commenting-o' focused={focused} size={30} />
            ),
          }}
        />
      </Tab.Navigator>
     </NavigationContainer>
  );
}

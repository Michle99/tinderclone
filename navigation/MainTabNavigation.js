import { Platform } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import TopPickScreen from '../screens/TopPickScreen';
import MessageScreen from '../screens/MessageScreen';
import { Icon } from 'expo';
import TabBarIcon from '../components/TabBarIcon';

const Tab = createBottomTabNavigator();

const MainTabNavigation = () => {
    return (
        <NavigationContainer>
         <Tab.Navigator
           screenOptions={{
             tabBarActiveTintColor: '#e91e63',
           }}
         >
           <Tab.Screen 
             name="HomeScreen"
             component={HomeScreen}
             options={{
               tabBarLabel: 'Home',
               tabBarIcon: ({ focused }) => (
                 <TabBarIcon 
                    Icon={Icon.MaterialCommunityIcons}
                    focused={focused}
                    name="fire"
                 />
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
               tabBarLabel: 'Message',
               tabBarIcon: ({ focused }) => (
                 <MaterialCommunityIcons name='message' focused={focused} size={30} color="green" />
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
         </Tab.Navigator>
        </NavigationContainer>
    );

};

export default MainTabNavigation;
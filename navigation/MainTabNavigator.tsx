import { Ionicons } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Fontisto } from '@expo/vector-icons';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/TabOneScreen';
import ChatRoom from '../screens/ChatRoom';
import { MainTabParamList, TabOneParamList, TabTwoParamList } from '../types';

const MainTab = createMaterialTopTabNavigator<MainTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();
  return (

    <MainTab.Navigator
      initialRouteName="Chats"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].background,
        tabBarStyle: { backgroundColor: Colors[colorScheme].tint },
        tabBarIndicatorStyle: {
          backgroundColor: Colors[colorScheme].background,
          height: 4
        },
      }}
    // tabBarOptions={{ 
    //   activeTintColor: Colors[colorScheme].background,
    //   style: {
    //   backgroundColor: Colors[colorScheme].tint,
    //   },
    //   indicatorStyle: {
    //     backgroundColor: Colors[colorScheme].background,
    //     height: 4
    //   },
    //   showIcon: false
    //   }}

    >
      <MainTab.Screen
        name="Camera"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => <Fontisto name="camera" size={18} color={color} />,
          tabBarLabel: () => null
        }}
      />
      <MainTab.Screen
        name="Chats"
        component={ChatRoomNavigator}
      />
      <MainTab.Screen
        name="Status"
        component={ChatRoomNavigator}
      />
      <MainTab.Screen
        name="Calls"
        component={ChatRoomNavigator}
      />
    </MainTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={TabOneScreen}
        options={{ headerTitle: 'Tab One Title' }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function ChatRoomNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="ChatRoom"
        component={ChatRoom}
      // options={{ headerTitle: 'Chat Room' }}
      />
    </TabTwoStack.Navigator>
  );
}

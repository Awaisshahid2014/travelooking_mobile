import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, View} from 'react-native';
import AllIcons from '../assets/icons';
import Home from '../pages/Home';
import Setting from '../pages/Setting';
import Schedule from '../pages/Schedule';
import Calendar from '../pages/Calendar';
import Search from '../pages/Search';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#ff5f00',
          height: 60,
        },
        tabBarLabelStyle: {
          color: 'white',
          fontSize: 13,
          fontWeight: '500',
        },
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'white',
      }}>
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, focused}) => (
            <TabItem
              tabBarLabel={'home'}
              icon={AllIcons.home_icon}
              color={color}
              focused={focused}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={Calendar}
        options={{
          tabBarLabel: 'Calendar',
          tabBarIcon: ({color, focused}) => (
            <TabItem
              tabBarLabel={'calendar'}
              icon={AllIcons.calendar_icon}
              color={color}
              focused={focused}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({color, focused}) => (
            <TabItem
              tabBarLabel={'Search'}
              icon={AllIcons.search_icon}
              color={color}
              focused={focused}
            />
          ),
        }}
      />
      <Tab.Screen
        name="schedule"
        component={Schedule}
        options={{
          tabBarLabel: 'Schedule',
          tabBarIcon: ({color, focused}) => (
            <TabItem
              tabBarLabel={'schedule'}
              icon={AllIcons.schedule}
              color={color}
              focused={focused}
            />
          ),
        }}
      />
      <Tab.Screen
        name="settings"
        component={Setting}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({color, focused}) => (
            <TabItem
              tabBarLabel={'settings'}
              icon={AllIcons.settings}
              color={color}
              focused={focused}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

// Custom component for styling the tab items
const TabItem = ({tabBarLabel, icon, color, focused}) => (
  <View
    style={{
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: focused ? -40 : 0, // Adjust the marginTop based on focus
      height: 50,
      width: 50,
      backgroundColor: focused ? '#ff7400' : '',
      borderRadius: focused ? 50 : 0,
      borderWidth: focused ? 3 : 0, // Border width
      borderColor: focused ? 'white' : '',
    }}>
    <Image
      source={icon}
      style={{
        height: tabBarLabel == 'schedule' ? 20 : 25,
        width: tabBarLabel == 'schedule' ? 20 : 25,
        tintColor: color,
      }}
    />
  </View>
);

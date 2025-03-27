import {
  createBottomTabNavigator,
  BottomTabScreenProps,
} from '@react-navigation/bottom-tabs'
import { MaterialIcons } from '@expo/vector-icons'

import { Notifications } from '@/app/Notifications'
import { StackRoutes } from './StackRoutes'

export type BottomRoutesList = {
  stack: undefined
  notifications: undefined
}

export type BottomRoutesProps<T extends keyof BottomRoutesList> =
  BottomTabScreenProps<BottomRoutesList, T>

const Tab = createBottomTabNavigator<BottomRoutesList>()

export function BottomRoutes() {
  return (
    <Tab.Navigator
      initialRouteName="stack"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#2C46B1',
        tabBarInactiveTintColor: '#444444',
        tabBarLabelPosition: 'beside-icon',
      }}
    >
      <Tab.Screen
        name="stack"
        component={StackRoutes}
        options={{
          tabBarLabel: 'Ínicio',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="notifications"
        component={Notifications}
        options={{
          tabBarLabel: 'Notificações',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="notifications" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

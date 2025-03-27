import {
  createDrawerNavigator,
  DrawerScreenProps,
} from '@react-navigation/drawer'
import { MaterialIcons } from '@expo/vector-icons'

import { BottomRoutes } from './BottomRoutes'

import { Settings } from '@/app/Settings'

export type DrawerRoutesList = {
  bottom: undefined
  settings: undefined | { id: string }
}

export type DrawerRoutesProps<T extends keyof DrawerRoutesList> =
  DrawerScreenProps<DrawerRoutesList, T>

const Drawer = createDrawerNavigator<DrawerRoutesList>()

export function DrawerRoutes() {
  return (
    <Drawer.Navigator
      initialRouteName="bottom"
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: '#2C46B1',
        drawerInactiveTintColor: '#444444',
      }}
    >
      <Drawer.Screen
        name="bottom"
        component={BottomRoutes}
        options={{
          drawerLabel: 'Ínicio',
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="settings"
        component={Settings}
        options={{
          drawerLabel: 'Configurações',
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="settings" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  )
}

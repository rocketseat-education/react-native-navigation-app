import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack'

import { Home } from '@/app/Home'
import { Product } from '@/app/Product'
import { CompositeScreenProps } from '@react-navigation/native'
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { BottomRoutesList } from './BottomRoutes'
import { DrawerScreenProps } from '@react-navigation/drawer'
import { DrawerRoutesList } from './DrawerRoutes'

export type StackRoutesList = {
  home: undefined
  product: undefined | { id: string }
}

export type StackRoutesProps<T extends keyof StackRoutesList> =
  CompositeScreenProps<
    NativeStackScreenProps<StackRoutesList, T>,
    CompositeScreenProps<
      BottomTabScreenProps<BottomRoutesList>,
      DrawerScreenProps<DrawerRoutesList>
    >
  >

const Stack = createNativeStackNavigator<StackRoutesList>()

export function StackRoutes() {
  return (
    <Stack.Navigator
      initialRouteName="home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="product" component={Product} />
    </Stack.Navigator>
  )
}

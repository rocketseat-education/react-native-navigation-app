import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack'

import { Home } from '@/app/Home'
import { Product } from '@/app/Product'
import { BottomRoutes } from './BottomRoutes'

export type StackRoutesList = {
  bottom: undefined
  product: undefined | { id: string }
}

export type StackRoutesProps<T extends keyof StackRoutesList> =
  NativeStackScreenProps<StackRoutesList, T>

const Stack = createNativeStackNavigator<StackRoutesList>()

export function StackRoutes() {
  return (
    <Stack.Navigator
      initialRouteName="bottom"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="bottom" component={BottomRoutes} />
      <Stack.Screen name="product" component={Product} />
    </Stack.Navigator>
  )
}

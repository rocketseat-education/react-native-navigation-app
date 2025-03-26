import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack'

import { Home } from '@/app/Home'
import { Product } from '@/app/Product'

export type StackRoutesList = {
  home: undefined
  product: undefined
}

export type StackRoutesProps<T extends keyof StackRoutesList> =
  NativeStackScreenProps<StackRoutesList, T>

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

import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '@/app/Home'
import { Product } from '@/app/Product'

const Stack = createNativeStackNavigator()

export function StackRoutes() {
  return (
    <Stack.Navigator initialRouteName="home">
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="product" component={Product} />
    </Stack.Navigator>
  )
}

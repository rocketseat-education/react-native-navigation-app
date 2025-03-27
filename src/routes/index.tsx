import { NavigationContainer } from '@react-navigation/native'

import { StackRoutes } from './StackRoutes'
import { BottomRoutes } from './BottomRoutes'

export function Routes() {
  return (
    <NavigationContainer>
      <BottomRoutes />
    </NavigationContainer>
  )
}

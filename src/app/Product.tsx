import { View } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { StackRoutesList } from '@/routes/StackRoutes'

import { Header } from '@/components/Header'
import { Title } from '@/components/Title'
import { ButtonIcon } from '@/components/ButtonIcon'

type Props = NativeStackScreenProps<StackRoutesList, 'product'>

export function Product({ navigation }: Props) {
  return (
    <View style={{ flex: 1, padding: 32, paddingTop: 54 }}>
      <Header>
        <ButtonIcon
          name="arrow-circle-left"
          onPress={() => navigation.goBack()}
        />
        <Title>Product</Title>
      </Header>
    </View>
  )
}

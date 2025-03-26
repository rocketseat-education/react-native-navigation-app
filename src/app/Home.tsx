import { View } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { StackRoutesList } from '@/routes/StackRoutes'

import { Header } from '@/components/Header'
import { Title } from '@/components/Title'
import { ButtonIcon } from '@/components/ButtonIcon'

type Props = NativeStackScreenProps<StackRoutesList, 'home'>

export function Home({ navigation }: Props) {
  return (
    <View style={{ flex: 1, padding: 32, paddingTop: 54 }}>
      <Header>
        <Title>Home</Title>
        <ButtonIcon
          name="add-circle"
          onPress={() => navigation.navigate('product')}
        />
      </Header>
    </View>
  )
}

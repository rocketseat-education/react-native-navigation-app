import { View } from 'react-native'

import { StackRoutesProps } from '@/routes/StackRoutes'
import { BottomRoutesProps } from '@/routes/BottomRoutes'

import { Header } from '@/components/Header'
import { Title } from '@/components/Title'
import { ButtonIcon } from '@/components/ButtonIcon'

export function Home({ navigation }: BottomRoutesProps<'home'>) {
  return (
    <View style={{ flex: 1, padding: 32, paddingTop: 54 }}>
      <Header>
        <Title>Home</Title>
        <ButtonIcon
          name="add-circle"
          onPress={() => navigation.navigate('product', { id: '153' })}
        />
      </Header>
    </View>
  )
}

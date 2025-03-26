import { ButtonIcon } from '@/components/ButtonIcon'
import { Header } from '@/components/Header'
import { Title } from '@/components/Title'
import { View } from 'react-native'

export function Home() {
  return (
    <View style={{ flex: 1, padding: 32, paddingTop: 54 }}>
      <Header>
        <Title>Home</Title>
        <ButtonIcon name="add-circle" />
      </Header>
    </View>
  )
}

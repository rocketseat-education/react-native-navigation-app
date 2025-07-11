import { View } from 'react-native'

import { StackRoutesProps } from '@/routes/StackRoutes'
import { BottomRoutesProps } from '@/routes/BottomRoutes'
import { DrawerRoutesProps } from '@/routes/DrawerRoutes'

import { Header } from '@/components/Header'
import { Title } from '@/components/Title'
import { ButtonIcon } from '@/components/ButtonIcon'

export function Settings({ navigation }: DrawerRoutesProps<'settings'>) {
  return (
    <View style={{ flex: 1, padding: 32, paddingTop: 54 }}>
      <Header>
        <ButtonIcon
          name="arrow-circle-left"
          onPress={() => navigation.goBack()}
        />
        <Title>Configurações</Title>
      </Header>
    </View>
  )
}

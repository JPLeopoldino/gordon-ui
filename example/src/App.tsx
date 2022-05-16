import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import GordonUIModule, { Counter, Card, Input, Button } from 'gordon-ui'

const App = () => {
  useEffect(() => {
    console.log(GordonUIModule)
  })

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#DDD'
      }}
    >
      <Input
        autoCorrect={false}
        label='test'
        leftIcon={{
          icon: 'mail',
        }}
        password
      />
      <Button
        onPress={() => console.log('test')}
        type='secondary'
      >
        Hello
      </Button>
      <Card
        notification
        width={40}
      >
        <Text
          style={{
            color: 'black'
          }}
        >
          Test
        </Text>
      </Card>
    </View>
  )
}

export default App

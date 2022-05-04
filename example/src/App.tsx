import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import GordonUIModule, { Counter, Card } from 'gordon-ui'

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

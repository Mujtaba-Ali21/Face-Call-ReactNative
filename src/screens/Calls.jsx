import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Calls = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Coming Soon...</Text>
    </View>
  )
}

export default Calls

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  text: {
    color: '#757575',
    fontSize: 24,
  },
});
import React from 'react'
import { FlatList, View, Text, Button } from 'react-native'
import styles from './styles';

const Trending = (props) => {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.text}>#Trending</Text>
      </View>
      <View style={styles.trending}>

      </View>
    </View>
  )
}

export default Trending

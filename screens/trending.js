import React from 'react'
import { FlatList, View, Text, Button } from 'react-native'
import styles from './styles';

const Trending = (props) => {
  console.log('trending', props)
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.text}>#Trending</Text>
      </View>
      <View style={styles.trending}>
      <View>{props.posts.map(post => {
        return <Button
          color="#841584"
          title={post.title}
          key={post.id}></Button>})
        }
      </View>
      </View>
    </View>
  )
}

export default Trending

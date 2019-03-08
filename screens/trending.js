import React from 'react'
import { FlatList, View, Text, Button, ScrollView } from 'react-native'
import styles from './styles';
import Blog from './blog.js'

export default class Trending extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: "useless placeholder",
      blogs: [],
      posts: [],
      displayBlog: false
    }
  }

handleClick = (e) => {
  this.setState({displayBlog: !this.state.displayBlog})
}

  async componentDidMount() {
    try {
        const api = await fetch('https://bilbobloginsbackend.herokuapp.com/')
        const blogs = await fetch('https://bilbobloginsbackend.herokuapp.com/posts')
        const awaitapi = await api.json()
        const awaitposts = await blogs.json()
        this.setState({blogs: awaitapi})
        this.setState({posts: awaitposts})
        console.log(this.state.posts.map(post => post.title))
    } catch(err) {
        console.log("Error fetching data-----------", err)
    }
}
render() {
  return (
    <ScrollView>
      <View style={styles.header}>
        <Text style={styles.text}>#Trending</Text>
      </View>
      <View style={styles.trending}>
      <View>{this.state.posts.map(post => {
        return <View><Button
          color="#841584"
          title={post.title}
          key={post.id}
          onPress={() => this.handleClick(this)}></Button>
        {this.state.displayBlog ? <Blog/> : null}</View>})
        }

      </View>
      </View>
    </ScrollView>
  )
}
}

import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { Ionicons } from '@expo/vector-icons';


const IndexScreen = ({ navigation }) => {
  const { state, deleteBlogPost, getBlogPost } = useContext(Context);
  
  useEffect(() => {
    getBlogPost();
 
    const unsubscribe = navigation.addListener('focus', () => {
      getBlogPost();
    });
 
    return () => {
    unsubscribe.remove();
    }

  }, []);
  return (

    <View>
      <FlatList
        data={state} //list of blog posts
        keyExtractor={blogPost => blogPost.title}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate('Show', { id: item.id })}>
              <View style={styles.row}>
                <Text style={styles.title}>{item.title} - {item.id}</Text>
                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                  <Ionicons name="trash-bin" size={24} color="black" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>

          )
        }}

      />
    </View>

  )
};

// IndexScreen.navigationOptions = () => {
//   return {
//     headerRight: <Ionicons name="add-circle-sharp" size={24} color="black" />
//   }
// }

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderTopWidth: 1,
    paddingHorizontal: 10,
    borderColor: 'gray'

  },
  title: {
    fontSize: 18,
  }
});

export default IndexScreen;
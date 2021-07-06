import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';

const ShowScreen = ({ route, navigation }) => {
  const { state } = useContext(Context);
  const { id } = route.params;
  // console.log(id);
  const blogPost = state.find(blogPost => blogPost.id === id)

  return (
    <View>
      <Text>
        {blogPost.title}
      </Text>
      <Text>
        {blogPost.content}
      </Text>
    </View>
  )
};

const styles = StyleSheet.create({

});

export default ShowScreen;
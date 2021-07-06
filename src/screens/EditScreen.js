import React, { useContext } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';


const EditScreen = ({ onSubmit, route, navigation }) => {
  const { state, editBlogPost } = useContext(Context);
  const id = route.params;
  // console.log(id);
  const blogPost = state.find(blogPost => blogPost.id === id);

  return (
    <BlogPostForm
      initialValues={{ title: blogPost.title, content: blogPost.content }}
      onSubmit={(title, content) => {
        editBlogPost(id, title, content, () => navigation.pop());
      }} />
  )
};
const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,

  },
  label: {
    fontSize: 20,
    marginBottom: 10,
    paddingTop: 10

  }
});

export default EditScreen;
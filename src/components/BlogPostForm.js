import React, { useState } from 'react'
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';


const BlogPostForm = ({ onSubmit, initialValues }) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);


  return (
    <View style={{ padding: 10 }}>
      <Text style={styles.label}>Enter Title:</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(val) => setTitle(val)}
      />
      <Text style={styles.label}>Enter Content:</Text>
      <TextInput
        multiline
        style={styles.input}
        value={content}
        onChangeText={(val) => setContent(val)}
      />
      <Button
        title='Save Blog Post'
        onPress={() => onSubmit(title, content)}
      />
    </View>
  )
};
BlogPostForm.defaultProps = {
  initialValues: {
    title: '',
    content: ''
  }
}

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

  }
});

export default BlogPostForm;

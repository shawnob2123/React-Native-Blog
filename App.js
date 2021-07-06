import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import IndexScreen from './src/screens/IndexScreen';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import { Provider } from './src/context/BlogContext';  // export BlogProvider as a named export. Did not use default
import { TouchableOpacity } from 'react-native-gesture-handler';
import EditScreen from './src/screens/EditScreen';


const Stack = createStackNavigator();

const App = ({ navigation, route }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' >
        <Stack.Screen
          name='Blogs'
          component={IndexScreen}
          options={({ navigation, route }) => ({
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Create')}>
                <Ionicons name="add-circle-sharp" size={24} color="black" />
              </TouchableOpacity>
            )
          })}
        />

        <Stack.Screen
          name="Show"
          component={ShowScreen}
          options={({ navigation, route }) => ({
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Edit')}>
                <Ionicons name="pencil" size={30} color="black" />
              </TouchableOpacity>
            )
          })}
        />
        <Stack.Screen name='Create' component={CreateScreen} />
        <Stack.Screen name='Edit' component={EditScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  )
};
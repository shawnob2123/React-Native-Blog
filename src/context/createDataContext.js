import React, { useReducer } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default (reducer, actions, initialState) => { 
  const Context = React.createContext();

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const boundActions = {};

    for (let key in actions) {
      // key === 'addBlogPost'
      boundActions[key] = actions[key](dispatch);
    }
    return <Context.Provider value={{ state, ...boundActions }}>{children}</Context.Provider>
  }
  return { Context, Provider }
};

const styles = StyleSheet.create({

});


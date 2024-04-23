import React from 'react';
import { StyleSheet, View } from 'react-native';
import TaskList from './views/TaskList';


export default function App() {
  return (
    <View style = {{flex: 1}}>
      <TaskList></TaskList>
    </View>
  );
}
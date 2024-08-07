import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles/styles';

export default function ChooseLevelScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Choose Level</Text>
      {['Easy', 'Medium', 'Hard'].map((level) => (
        <TouchableOpacity
          key={level}
          style={styles.button}
          onPress={() => navigation.navigate('Quiz', { level })}
        >
          <Text style={styles.buttonText}>{level}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from '../styles/styles';
import quizLogo from '../assets/quizLogo.jpeg'; // Import the local image

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={quizLogo} // Use the imported image
        style={styles.roundImage}
      />
      <Text style={styles.header}>Welcome to Quizzy Minds!</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Choose Level')}
      >
        <Text style={styles.buttonText}>Start Quiz</Text>
      </TouchableOpacity>
    </View>
  );
}

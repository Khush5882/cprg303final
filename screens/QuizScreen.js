import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles/styles';
import { Animated } from 'react-native';

const questions = {
  Easy: [
    {
      question: "What is the capital of France?",
      options: [
        { answer: "Paris", isCorrect: true },
        { answer: "London", isCorrect: false },
        { answer: "Berlin", isCorrect: false },
        { answer: "Madrid", isCorrect: false },
      ],
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: [
        { answer: "Mars", isCorrect: true },
        { answer: "Jupiter", isCorrect: false },
        { answer: "Saturn", isCorrect: false },
        { answer: "Venus", isCorrect: false },
      ],
    },
    {
      question: "What is the largest ocean on Earth?",
      options: [
        { answer: "Pacific Ocean", isCorrect: true },
        { answer: "Atlantic Ocean", isCorrect: false },
        { answer: "Indian Ocean", isCorrect: false },
        { answer: "Arctic Ocean", isCorrect: false },
      ],
    },
    {
      question: "Which is the smallest continent by land area?",
      options: [
        { answer: "Australia", isCorrect: true },
        { answer: "Europe", isCorrect: false },
        { answer: "Antarctica", isCorrect: false },
        { answer: "South America", isCorrect: false },
      ],
    },
    {
      question: "What is the primary ingredient in guacamole?",
      options: [
        { answer: "Avocado", isCorrect: true },
        { answer: "Tomato", isCorrect: false },
        { answer: "Onion", isCorrect: false },
        { answer: "Pepper", isCorrect: false },
      ],
    },
    {
      question: "How many continents are there?",
      options: [
        { answer: "Seven", isCorrect: true },
        { answer: "Six", isCorrect: false },
        { answer: "Five", isCorrect: false },
        { answer: "Eight", isCorrect: false },
      ],
    },
    {
      question: "Which animal is known as the 'King of the Jungle'?",
      options: [
        { answer: "Lion", isCorrect: true },
        { answer: "Tiger", isCorrect: false },
        { answer: "Elephant", isCorrect: false },
        { answer: "Leopard", isCorrect: false },
      ],
    },
    {
      question: "What is the freezing point of water?",
      options: [
        { answer: "0°C", isCorrect: true },
        { answer: "100°C", isCorrect: false },
        { answer: "50°C", isCorrect: false },
        { answer: "25°C", isCorrect: false },
      ],
    },
    {
      question: "What is the longest river in the world?",
      options: [
        { answer: "Nile", isCorrect: true },
        { answer: "Amazon", isCorrect: false },
        { answer: "Yangtze", isCorrect: false },
        { answer: "Mississippi", isCorrect: false },
      ],
    },
    {
      question: "Which language is spoken in Brazil?",
      options: [
        { answer: "Portuguese", isCorrect: true },
        { answer: "Spanish", isCorrect: false },
        { answer: "English", isCorrect: false },
        { answer: "French", isCorrect: false },
      ],
    },
  ],
  Medium: [
    {
      question: "What is the smallest country in the world?",
      options: [
        { answer: "Vatican City", isCorrect: true },
        { answer: "Monaco", isCorrect: false },
        { answer: "San Marino", isCorrect: false },
        { answer: "Liechtenstein", isCorrect: false },
      ],
    },
    {
      question: "Which element has the chemical symbol 'O'?",
      options: [
        { answer: "Oxygen", isCorrect: true },
        { answer: "Gold", isCorrect: false },
        { answer: "Osmium", isCorrect: false },
        { answer: "Oganesson", isCorrect: false },
      ],
    },
    {
      question: "Which planet is closest to the sun?",
      options: [
        { answer: "Mercury", isCorrect: true },
        { answer: "Venus", isCorrect: false },
        { answer: "Earth", isCorrect: false },
        { answer: "Mars", isCorrect: false },
      ],
    },
    {
      question: "Who wrote 'Romeo and Juliet'?",
      options: [
        { answer: "William Shakespeare", isCorrect: true },
        { answer: "Charles Dickens", isCorrect: false },
        { answer: "Jane Austen", isCorrect: false },
        { answer: "Mark Twain", isCorrect: false },
      ],
    },
    {
      question: "What is the main ingredient in a traditional Japanese miso soup?",
      options: [
        { answer: "Miso paste", isCorrect: true },
        { answer: "Soy sauce", isCorrect: false },
        { answer: "Wasabi", isCorrect: false },
        { answer: "Tofu", isCorrect: false },
      ],
    },
    {
      question: "Which country is known as the Land of the Rising Sun?",
      options: [
        { answer: "Japan", isCorrect: true },
        { answer: "China", isCorrect: false },
        { answer: "Thailand", isCorrect: false },
        { answer: "South Korea", isCorrect: false },
      ],
    },
    {
      question: "What is the hardest natural substance on Earth?",
      options: [
        { answer: "Diamond", isCorrect: true },
        { answer: "Gold", isCorrect: false },
        { answer: "Iron", isCorrect: false },
        { answer: "Platinum", isCorrect: false },
      ],
    },
    {
      question: "Who painted the Mona Lisa?",
      options: [
        { answer: "Leonardo da Vinci", isCorrect: true },
        { answer: "Vincent van Gogh", isCorrect: false },
        { answer: "Pablo Picasso", isCorrect: false },
        { answer: "Claude Monet", isCorrect: false },
      ],
    },
    {
      question: "What is the currency of Japan?",
      options: [
        { answer: "Yen", isCorrect: true },
        { answer: "Won", isCorrect: false },
        { answer: "Dollar", isCorrect: false },
        { answer: "Euro", isCorrect: false },
      ],
    },
    {
      question: "Which vitamin is produced when a person is exposed to sunlight?",
      options: [
        { answer: "Vitamin D", isCorrect: true },
        { answer: "Vitamin C", isCorrect: false },
        { answer: "Vitamin A", isCorrect: false },
        { answer: "Vitamin B", isCorrect: false },
      ],
    },
  ],
  Hard: [
    {
      question: "What is the longest bone in the human body?",
      options: [
        { answer: "Femur", isCorrect: true },
        { answer: "Humerus", isCorrect: false },
        { answer: "Tibia", isCorrect: false },
        { answer: "Fibula", isCorrect: false },
      ],
    },
    {
      question: "Which scientist developed the theory of general relativity?",
      options: [
        { answer: "Albert Einstein", isCorrect: true },
        { answer: "Isaac Newton", isCorrect: false },
        { answer: "Galileo Galilei", isCorrect: false },
        { answer: "Nikola Tesla", isCorrect: false },
      ],
    },
    {
      question: "What is the main component of the sun?",
      options: [
        { answer: "Hydrogen", isCorrect: true },
        { answer: "Helium", isCorrect: false },
        { answer: "Oxygen", isCorrect: false },
        { answer: "Carbon", isCorrect: false },
      ],
    },
    {
      question: "What is the capital of Australia?",
      options: [
        { answer: "Canberra", isCorrect: true },
        { answer: "Sydney", isCorrect: false },
        { answer: "Melbourne", isCorrect: false },
        { answer: "Brisbane", isCorrect: false },
      ],
    },
    {
      question: "Who is the author of 'The Catcher in the Rye'?",
      options: [
        { answer: "J.D. Salinger", isCorrect: true },
        { answer: "F. Scott Fitzgerald", isCorrect: false },
        { answer: "Ernest Hemingway", isCorrect: false },
        { answer: "John Steinbeck", isCorrect: false },
      ],
    },
    {
      question: "Which gas is most abundant in the Earth's atmosphere?",
      options: [
        { answer: "Nitrogen", isCorrect: true },
        { answer: "Oxygen", isCorrect: false },
        { answer: "Carbon Dioxide", isCorrect: false },
        { answer: "Hydrogen", isCorrect: false },
      ],
    },
    {
      question: "What is the rarest blood type?",
      options: [
        { answer: "AB negative", isCorrect: true },
        { answer: "O positive", isCorrect: false },
        { answer: "A negative", isCorrect: false },
        { answer: "B positive", isCorrect: false },
      ],
    },
    {
      question: "Who painted the ceiling of the Sistine Chapel?",
      options: [
        { answer: "Michelangelo", isCorrect: true },
        { answer: "Raphael", isCorrect: false },
        { answer: "Leonardo da Vinci", isCorrect: false },
        { answer: "Donatello", isCorrect: false },
      ],
    },
    {
      question: "What is the smallest unit of life?",
      options: [
        { answer: "Cell", isCorrect: true },
        { answer: "Atom", isCorrect: false },
        { answer: "Molecule", isCorrect: false },
        { answer: "Organ", isCorrect: false },
      ],
    },
    {
      question: "Which planet has the most moons?",
      options: [
        { answer: "Jupiter", isCorrect: true },
        { answer: "Saturn", isCorrect: false },
        { answer: "Uranus", isCorrect: false },
        { answer: "Neptune", isCorrect: false },
      ],
    },
  ],
};

export default function QuizScreen({ route, navigation }) {
  const { level } = route.params;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [fadeAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [currentQuestionIndex]);

  const currentQuestion = questions[level][currentQuestionIndex];

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    if (currentQuestionIndex < questions[level].length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      navigation.navigate('Result', { score });
    }
  };

  return (
    <View style={styles.container}>
      <Animated.View style={{ opacity: fadeAnim }}>
        <Text style={styles.header}>{currentQuestion.question}</Text>
        {currentQuestion.options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={styles.button}
            onPress={() => handleAnswer(option.isCorrect)}
          >
            <Text style={styles.buttonText}>{option.answer}</Text>
          </TouchableOpacity>
        ))}
      </Animated.View>
    </View>
  );
}

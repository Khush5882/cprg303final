import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e8f5e9', // Light green background
  },
  button: {
    backgroundColor: '#4caf50', // Green button
    padding: 15,
    borderRadius: 10,
    margin: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  roundImage: {
    width: 100, // Adjust the size as needed
    height: 100,
    borderRadius: 50, // Half of the width and height to make it round
    borderWidth: 5,
    borderColor: '#4caf50', // Green border color
    marginBottom: 20, // Adjust the spacing as needed
  },
});

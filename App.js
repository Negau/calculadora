import React, { useState } from 'react';
    import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

    export default function App() {
      const [result, setResult] = useState('0');
      const [currentValue, setCurrentValue] = useState('');

      const handlePress = (value) => {
        if (value === 'C') {
          setResult('0');
          setCurrentValue('');
        } else if (value === '=') {
          try {
            setResult(eval(currentValue).toString());
            setCurrentValue('');
          } catch (error) {
            setResult('Error');
          }
        } else {
          setCurrentValue(prev => prev + value);
        }
      };

      const buttons = [
        ['7', '8', '9', '/'],
        ['4', '5', '6', '*'],
        ['1', '2', '3', '-'],
        ['C', '0', '=', '+']
      ];

      return (
        <View style={styles.container}>
          <View style={styles.resultContainer}>
            <Text style={styles.resultText}>{result}</Text>
            <Text style={styles.currentText}>{currentValue}</Text>
          </View>
          <View style={styles.buttonsContainer}>
            {buttons.map((row, i) => (
              <View key={i} style={styles.row}>
                {row.map((btn) => (
                  <TouchableOpacity
                    key={btn}
                    style={styles.button}
                    onPress={() => handlePress(btn)}
                  >
                    <Text style={styles.buttonText}>{btn}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            ))}
          </View>
        </View>
      );
    }

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
      },
      resultContainer: {
        flex: 2,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        padding: 20,
      },
      resultText: {
        fontSize: 48,
        color: '#333',
      },
      currentText: {
        fontSize: 24,
        color: '#666',
      },
      buttonsContainer: {
        flex: 3,
        backgroundColor: '#f5f5f5',
      },
      row: {
        flex: 1,
        flexDirection: 'row',
      },
      button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ddd',
      },
      buttonText: {
        fontSize: 32,
        color: '#333',
      },
    });

import { React, useState } from "react";
import { View, Text, Button, StyleSheet, TextInput, FlatList } from "react-native";

export default function Calculator( { navigation }) {

    const [numA, setNumA] = useState(0);
    const [numB, setNumB] = useState(0);
    const [result, setResult] = useState(0);
    const [history, setHistory] = useState([]);

    const calculate =(operator) => {
        if (isNaN(parseFloat(numA)) || isNaN(parseFloat(numB))) {
        Alert.alert('Warning', 'Please, type a number');
        }
        else {
        if (operator === '+') {
            const sum = parseFloat(numA) + parseFloat(numB);
            setResult(sum);
            setHistory([...history, `${numA} + ${numB} = ${sum}`]);
        }
        else {
            const sub = parseFloat(numA) - parseFloat(numB);
            setResult(sub);
            setHistory([...history, `${numA} - ${numB} = ${sub}`]);
        }
            
        }

    }

    const listHeader = () => {
        return (
          <View>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>History</Text>
            <View style={{ height: 1, backgroundColor: 'blue'}} />
          </View>
        )
      };

    return (
        <View style={styles.container}>

            <View style={styles.container}>
            <Text style={{fontSize:20}}> Result: {result.toFixed(2)}</Text>
            <TextInput
                keyboardType='numeric' 
                style={{fontSize:18, width: 200, borderColor: 'gray', borderWidth: 1}}
                onChangeText={numA => setNumA(numA)}
                value={numA}  
            />
            <TextInput
                keyboardType='numeric' 
                style={{fontSize:18, width: 200, borderColor: 'gray', borderWidth: 1}}
                onChangeText={numB => setNumB(numB)}
                value={numB}  
            />
            </View>

            <View style = {styles.buttonContainer}>
                <Button onPress={() => calculate('+')} title=" + "/>
                <Button onPress={() => calculate('-')} title=" - "/>
                <Button title='History' onPress={() => navigation.navigate('History', {history: history})} />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    buttonContainer: {
      flex: 2,
      width: 150,
      flexDirection: 'row',
      backgroundColor: '#fff',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      margin: 10
    },
    listcontainer: {
      flex: 2,
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      marginBottom: 5,
    }
  });
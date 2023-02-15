import { View, Text, StyleSheet, FlatList } from "react-native";

export default function History({ route, navigation }) {

    const { history } = route.params;

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
            <View style= {styles.listcontainer}>
                <FlatList 
                    data={history}
                    renderItem={({item}) => <Text>{item}</Text>}
                    keyExtractor={(item, index) => index.toString()}
                    ListHeaderComponent={listHeader}
                />
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
      width: 150,
      flexDirection: 'row',
      backgroundColor: '#fff',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      padding: 20
    },
    listcontainer: {
      flex: 2,
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      marginBottom: 5,
    }
  });
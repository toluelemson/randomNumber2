import React from 'react';
import {
  View,
  Text,
  Button,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import styles from './ApiStyles';
const ApiView = props => {
  const {getRandom, axiosData, FlatListItemSeparator, loading} = props;
  //   const people = [{name: 'shaun', key: '1'}, {name: 'yahh', key: '2'}];
  return (
    <View style={styles.parentContainer}>
      <View>
        <Text style={styles.textStyle}>
          The app has to fetch random numbers between 1 and 1000 from an API and
          display in the UI
        </Text>
      </View>
      <View style={{margin: 18}} />
      <View style={{margin: 18}}>
        <Button title={'Get Random Number'} onPress={getRandom} color="green" />
      </View>

      {loading ? (
        <SafeAreaView style={styles.container}>
          <View style={styles.loader}>
            <ActivityIndicator size="large" color="#0c9" />
            <Text style={{fontSize: 16, color: 'red'}}>Loading Data...</Text>
          </View>
        </SafeAreaView>
      ) : (
        <SafeAreaView style={styles.list}>
          <FlatList
            data={axiosData}
            ItemSeparatorComponent={FlatListItemSeparator}
            renderItem={({item}) => (
              <Text style={styles.list}>
                <TouchableOpacity style={styles.list}>
                  <Text style={styles.lightText}>
                    <h4>{item}</h4>
                  </Text>
                </TouchableOpacity>
              </Text>
            )}
          />
        </SafeAreaView>
      )}
    </View>
  );
};

export default ApiView;

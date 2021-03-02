import React from 'react';
import {View, Text, Button, FlatList, ActivityIndicator} from 'react-native';
import styles from './ApiStyles';
const ApiView = props => {
  const {
    getRandom,
    fromAxios,
    axiosData,
    renderItem,
    FlatListItemSeparator,
    loading,
  } = props;
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

      {fromAxios && (
        <FlatList
          data={axiosData}
          ItemSeparatorComponent={FlatListItemSeparator}
          renderItem={item => renderItem(item)}
          keyExtractor={item => item.random.toString()}
        />
      )}

      {loading && (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#0c9" />
          <Text style={{fontSize: 16, color: 'red'}}>Loading Data...</Text>
        </View>
      )}
    </View>
  );
};
export default ApiView;

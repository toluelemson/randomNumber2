import React, {Component} from 'react';
import ApiView from './ApiView';
import axios from 'axios';
import styles from './ApiStyles';
import {View, Text, TouchableOpacity} from 'react-native';
class ApiContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      fromAxios: false,
      dataSource: [],
      axiosData: null,
      prevNumbers: [],
    };
  }
  getRandom = () => {
    this.setState({
      loading: true,
    });
    axios
      .get('https://csrng.net/csrng/csrng.php?min=1&max=1000')
      .then(response => {
        console.log('getting random data', response.random);

        setTimeout(() => {
          this.setState({
            loading: false,
            axiosData: response.random,
          });
        }, 2000);
      })
      .catch(error => {
        console.log(error);
      });
  };
  FlatListSeparator = () => {
    return (
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: 'rgba(0,0,0,0.5)',
        }}
      />
    );
  };
  renderItem = data => {
    return (
      <TouchableOpacity style={styles.list}>
        <Text style={styles.lightText}>{data.random}</Text>
      </TouchableOpacity>
    );
  };

  render() {
    const {dataSource, fromAxios, loading, axiosData} = this.state;
    return (
      <ApiView
        getRandom={this.getRandom}
        dataSource={dataSource}
        loading={loading}
        fromAxios={fromAxios}
        axiosData={axiosData}
        FlatListSeparator={this.FlatListSeparator}
        renderItem={this.renderItem}
      />
    );
  }
}

export default ApiContainer;

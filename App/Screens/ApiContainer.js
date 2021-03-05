import React, {Component} from 'react';
import ApiView from './ApiView';
import axios from 'axios';
import {View} from 'react-native';

class ApiContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      dataSource: [],
      axiosData: [],
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
        response.data.map(newRes => {
          let randomNumber = this.state.axiosData.concat(newRes.random);
          this.setState({loading: false, axiosData: randomNumber});
        });
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

  render() {
    const {dataSource, loading, axiosData} = this.state;
    return (
      <ApiView
        getRandom={this.getRandom}
        dataSource={dataSource}
        loading={loading}
        axiosData={axiosData}
        FlatListSeparator={this.FlatListSeparator}
        renderItem={this.renderItem}
      />
    );
  }
}

export default ApiContainer;

import {Dimensions} from 'react-native';

const deviceHeight = Dimensions.get('screen').height;
const styles = {
  parentContainer: {
    height: deviceHeight,
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 18,
    textAlign: 'center',
    paddingTop: 32,
  },
  container: {
    backgroundColor: '#fff',
  },
  loader: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  list: {
    alignItems: 'center',
    justifyContent: 'center',
  },
};
export default styles;

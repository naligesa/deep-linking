import React from 'react';
import {Text, View, Linking} from 'react-native';

class Home extends React.Component {
  componentDidMount() {
    if (Platform.OS === 'android') {
      Linking.getInitialURL().then((url) => {
        this.navigate(url);
      });
    } else {
      Linking.addEventListener('url', this.handleOpenURL);
    }
  }

  componentWillUnmount() {
    Linking.removeEventListener('url', this.handleOpenURL);
  }

  handleOpenURL = (event) => {
    this.navigate(event.url);
  };

  navigate = (url) => {
    const {navigate} = this.props.navigation;
    const route = url.replace(/.*?:\/\//g, '');
    const id = route.match(/\/([^\/]+)\/?$/)[1];
    const routeName = route.split('/')[0];

    if (routeName === 'people') {
      navigate('People', {id, name: 'chris'});
    }
  };
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 18}}> Hello from Home! </Text>
      </View>
    );
  }
}
export default Home;

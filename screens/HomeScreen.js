import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button

} from 'react-native';
import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';
import styles from './styles';
import t from 'tcomb-form-native';

const Form = t.form.Form;

const User = t.struct({
  email: t.String,
  username: t.String,
  password: t.String,
  rememberMe: t.Boolean
});


export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <Image source = {require('../assets/images/logo.png')} style={styles.logo}/>
        <Form type={User} />
        <Button
          onPress={() => this.handleClick(this)}
          style={styles.navbar}
          title="Submit"
          type="outline"
        />
      </View>
    )
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

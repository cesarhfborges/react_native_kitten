import React from 'react';
import {ImageBackground, StyleSheet, KeyboardAvoidingView} from 'react-native';
import {lightTheme} from '../Personalization/Theme';

export default function Background({children}: any) {
  return (
    <ImageBackground
      source={require('../../../assets/background_dot.png')}
      resizeMode="repeat"
      style={styles.background}>
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        {children}
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    backgroundColor: lightTheme.colors.background,
  },
  container: {
    flex: 1,
    padding: 20,
    width: '100%',
    maxWidth: 340,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: lightTheme.colors.black,
  },
});

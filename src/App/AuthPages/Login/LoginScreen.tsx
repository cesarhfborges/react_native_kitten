import React, {useState} from 'react';
import {Image, ImageProps, StyleSheet, View} from 'react-native';
import {Button, Icon, Layout, Text, Card, Input} from '@ui-kitten/components';

const LoginIcon = (
  props?: Partial<ImageProps>,
): React.ReactElement<ImageProps> => (
  <Icon {...props} name="corner-down-right-outline" />
);

export default (): React.ReactElement => {
  const [email, setEmail] = useState({value: '', error: ''});
  const [password, setPassword] = useState({value: '', error: ''});

  return (
    <Layout style={styles.container}>
      <Card style={styles.cardLogin}>
        <View style={styles.viewLogo}>
          <Image
            source={require('./../../../assets/logo-horizontal.png')}
            resizeMode={'contain'}
            style={styles.logotipo}
          />
        </View>

        <Input
          label={props => <Text {...props}>E-Mail</Text>}
          placeholder="Informe seu email @coopersystem"
          value={email.value}
          keyboardType="email-address"
          textContentType="emailAddress"
          autoCompleteType="email"
          autoCapitalize="none"
          returnKeyType="next"
          onChangeText={text => setEmail({value: text, error: ''})}
        />

        <Input
          label={props => <Text {...props}>Senha</Text>}
          placeholder="Sua senha"
          value={password.value}
          autoCapitalize="none"
          returnKeyType="done"
          onChangeText={text => setPassword({value: text, error: ''})}
          secureTextEntry
        />

        {/*<Text style={styles.text} category="s1">*/}
        {/*  Start with editing App.js to configure your App*/}
        {/*</Text>*/}
        {/*<Text style={styles.text} appearance="hint">*/}
        {/*  For example, try changing theme to Dark by using eva.dark*/}
        {/*</Text>*/}
        <Button
          style={styles.loginButton}
          status="success"
          accessoryLeft={LoginIcon}>
          Entrar
        </Button>
      </Card>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 60,
  },
  text: {
    textAlign: 'center',
  },
  loginButton: {
    marginTop: 20,
    marginBottom: 4,
  },
  cardLogin: {
    width: '100%',
    maxWidth: 500,
  },
  viewLogo: {
    flexDirection: 'row',
  },
  logotipo: {
    flexDirection: 'row',
    width: '100%',
    maxHeight: 70,
  },
});

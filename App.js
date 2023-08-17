import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text,Image } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';


const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (

    <View style={styles.container}>
      <Image source = {{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfurrKAJIo9nYp0ITwnj8dKQyI286EiyMoNnGd6ATNFufq5Nhym4ep34ERri4bG5WvJGM&usqp=CAU'}}style = {{ width: 300, height: 300 }}/>
      {isLoggedIn ? (
        <View>
          <TextInput  style={styles.LoginPage} >Name: </TextInput>
          <TextInput style={styles.input} > </TextInput>
          <TextInput style={styles.LoginPage} >Email: </TextInput>
          <TextInput style={styles.input} > </TextInput>
          <Button style={styles.loginButton} title="Register" onPress={handleLogout} />
          
          <Text style={styles.loggedInText}>You are logged in!</Text>
        </View>
      ) : (
        <View>
          <TextInput
            style={styles.input }
            placeholder="Email"
            onChangeText={setEmail}
            value={email}
            
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            onChangeText={setPassword}
            value={password}
            secureTextEntry
          />
          <Button title="Login" onPress={handleLogin} />
          <Button style={styles.loginButton}  title="Register" onPress={handleLogin}></Button>
        </View>
        
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 50,
    margin:70,

  },
  loginButton: {
    backgroundColor: '#2196f3',
    paddingVertical: 22,
    borderRadius: 4,
    borderRadius: 20,
    borderWidth: 1,
    paddingLeft: 8,
    marginBottom: 12,

  },
  input: {
    width: 200,
    height:50,
    borderColor: 'black',
    borderWidth: 3,
    marginBottom: 12,
    paddingLeft: 8,
    borderWidth: 1,
    borderColor: '#B0B0C3',
    backgroundColor: '#F7F7F7',
    padding: 17,
    marginLeft: 10,
    marginRight: 10,
  },
  loggedInText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    margin:50,

  },
});

export default LoginPage;


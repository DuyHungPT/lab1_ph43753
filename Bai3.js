import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';

const CustomTextInput = ({ value, onChangeText, placeholder, backgroundColor, errorMessage }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleOnFocus = () => {
    setIsFocused(true);
  };

  const handleOnBlur = () => {
    setIsFocused(false);
  };

  const handleOnChangeText = (text) => {
    onChangeText(text);
    setIsError(false); 
  };

  const handleOnPress = () => {
    if (!value) {
      setIsError(true);
      return;
    }
   
    console.log('Input value:', value);
  };

  return (
    <View>
      <TextInput
        style={[
          styles.input,
          isFocused && styles.focusedInput,
          isError && styles.errorInput,
          backgroundColor && { backgroundColor: isError ? 'red' : backgroundColor }
        ]}
        value={value}
        onChangeText={handleOnChangeText}
        placeholder={placeholder}
        placeholderTextColor="gray"
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
      />
      {isError && <Text style={styles.errorMessage}>{errorMessage}</Text>}
      <Button title="Submit" onPress={handleOnPress} />
    </View>
  );
};

const App = () => {
  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [inputValue3, setInputValue3] = useState('');

  const handleOnPress = () => {
 
    console.log('Input value:', inputValue1);
  };

  return (
    <View style={styles.container}>
      <CustomTextInput
        value={inputValue1}
        onChangeText={setInputValue1}
        placeholder="Moi Nhap Du Lieu"
        
      />
      <CustomTextInput
        value={inputValue2}
        onChangeText={setInputValue2}
        placeholder="Moi Nhap Du Lieu"
        backgroundColor={inputValue2 ? '#c3e8ec' : ''}
        
      />
      <CustomTextInput
        value={inputValue3}
        onChangeText={setInputValue3}
        placeholder="Moi Nhap Du Lieu"
        errorMessage="khong duoc de trong"
      />
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    width: 300,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 10,
    margin: 10,
  },
  focusedInput: {
    borderColor: 'blue',
  },
  errorInput: {
    borderColor: 'red',
  },
  errorMessage: {
    color: 'red',
    marginBottom: 10,
  },
});

export default App;

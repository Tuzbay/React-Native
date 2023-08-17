import {
  FlatList,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {currencyByTurkish} from './constants';
import CurrencyButton from './components/CurrencyButton';
import Snackbar from 'react-native-snackbar';

const App = (): JSX.Element => {
  const [inputValue, setInputValue] = useState('');
  const [resultValue, setResultValue] = useState('');
  const [targetCurrency, setTargetCurrency] = useState('');

  const buttonPressed = (targetValue: Currency) => {
    if (!inputValue) {
      return Snackbar.show({
        text: 'Enter a value to convert...',
        backgroundColor: '#EA7773',
        textColor: '#000000',
      });
    }

    const inputAmount = parseFloat(inputValue);

    if (!isNaN(inputAmount)) {
      const convertedValue = inputAmount / targetValue.value;
      const result = `${targetValue.symbol} ${convertedValue.toFixed(2)}`;
      setResultValue(result);
      setTargetCurrency(targetValue.name);
    } else {
      return Snackbar.show({
        text: 'Not a valid number to convert...',
        backgroundColor: '#F4BE2C',
        textColor: '#000000',
      });
    }
  };
  const {
    container,
    topContainer,
    turkishContainer,
    resultTxt,
    bottomContainer,
    button,
    selected,
    middleContainer,
    input,
  } = styles;

  return (
    <>
      <StatusBar />
      <View style={container}>
        <View style={topContainer}>
          <View style={turkishContainer}>
            <TextInput
              style={input}
              maxLength={14}
              value={inputValue}
              clearButtonMode="always" // Only for IOS
              onChangeText={setInputValue}
              keyboardType="number-pad"
              placeholder="Enter amount of Turkish Liras (₺)"
            />
          </View>
        </View>
        <View style={middleContainer}>
          <FlatList
            numColumns={2}
            data={currencyByTurkish}
            keyExtractor={item => item.name}
            renderItem={({item}) => (
              <Pressable
                style={[button, targetCurrency === item.name && selected]}
                onPress={() => buttonPressed(item)}>
                <CurrencyButton {...item} />
              </Pressable>
            )}
          />
        </View>
        <View style={bottomContainer}>
          {resultValue && <Text style={resultTxt}>{resultValue}</Text>}
        </View>
      </View>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#515151',
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  turkishContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  resultTxt: {
    fontSize: 32,
    color: '#fff',
    fontWeight: '800',
  },
  middleContainer: {
    flex: 2,
  },
  bottomContainer: {
    flex: 1,
    alignItems: 'center',
  },
  button: {
    flex: 1,
    marginHorizontal: 16,
    marginVertical: 12,
    height: 75,
    borderRadius: 12,
    backgroundColor: '#d6cdcd',
    elevation: 2,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.1,
    shadowRadius: 1,
    justifyContent: 'center',
  },
  selected: {
    backgroundColor: '#ffeaa7',
  },
  input: {
    borderWidth: 1,
    borderColor: '#fff',
    width: 200,
    padding: 10,
  },
});

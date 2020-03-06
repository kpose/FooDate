import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useColorScheme } from 'react-native-appearance';



const Av = () => {
  const colorScheme = useColorScheme();
  const themeStatusBarStyle =
    colorScheme === 'light' ? 'dark-content' : 'light-content';
  const themeTextStyle =
    colorScheme === 'light' ? styles.lightThemeText : styles.darkThemeText;
  const themeContainerStyle =
    colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;

  return (
    <View
      style={[styles.container, themeContainerStyle]}
    >
      <Text style={[styles.text, themeTextStyle]}>
        zero to dark mode
      </Text>
      <Text style={[styles.text, themeTextStyle]}>
        color scheme: {colorScheme}
      </Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightContainer: {
    backgroundColor: '#D0D0C0',
  },
  darkContainer: {
    backgroundColor: '#242C40',
  },
  lightThemeText: {
    color: '#242C40',
  },
  darkThemeText: {
    color: '#D0D0C0',
  },
});


export default Av;
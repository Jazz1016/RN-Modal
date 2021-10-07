import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const WIDTH = Dimensions.get('window').width;
const HEIGHT_MODAL = 150;

export const SimpleModal = () => {
  console.log('hit');
  return (
    <TouchableOpacity disabled={true} style={StyleSheet.container}>
      <View style={styles.modal}>
        <View style={styles.textView}>
          <Text style={styles.text}>Sample modal header</Text>
          <Text style={styles.text}>Sample modal description</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    height: HEIGHT_MODAL,
    width: WIDTH - 80,
    paddingTop: 10,
    backgroundColor: 'yellow',
    borderRadius: 10,
  },
  textView: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    margin: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

const App = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const changeModalVisible = bool => {
    console.log('hit');
    setModalVisible(bool);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TouchableOpacity
          onPress={() => console.log('dogshit')}
          style={styles.touchableOpacity}>
          <Text style={styles.text}>Open Modal</Text>
        </TouchableOpacity>
      </View>
      <Modal
        transparent={true}
        animationType="fade"
        visible={isModalVisible}
        nRequestClose={() => changeModalVisible(false)}></Modal>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
  },
  touchableOpacity: {
    backgroundColor: 'orange',
    paddingHorizontal: 50,
  },
  text: {
    marginVertical: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

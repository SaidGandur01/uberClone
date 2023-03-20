const { StyleSheet } = require("react-native");

const styles = StyleSheet.create({
  container: {
    padding: 20,
    height: '100%'
  },
  pressableContainer: {
    backgroundColor: '#000',
    width: '100%',
    padding: 10,
    // margin: 10,
    alignItems: 'center'
  },
  pressableText: {
    color: '#fff',
    fontWeight: 'bold'
  }
});

export default styles;

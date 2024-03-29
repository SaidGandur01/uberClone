const { StyleSheet } = require("react-native");

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20
  },
  image: {
    height: 70,
    width: 80,
    resizeMode: 'contain'
  },
  middleContainer: {
    flex: 1,
    marginHorizontal: 10,
    flexDirection: 'column'
  },
  typeDescription: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5
  },
  type: {
    fontWeight: 'bold',
    fontSize: 15,
    marginRight: 5
  },
  typeIconNumberContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 0
  },
  typeIcon: {
    marginRight: 3
  },
  time: {
    color: '#5d5d5d'
  },
  rightContainer: {
    width: 100,
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  price: {
    fontWeight: 'bold',
    fontSize: 15,
    marginLeft: 5
  }
});

export default styles;

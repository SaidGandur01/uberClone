const { StyleSheet } = require("react-native");

const styles = StyleSheet.create({
  inputBox: {
    backgroundColor: '#e7e7e7',
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10
  },
  inputText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#434343'
  },
  timeContainer: {
    flexDirection: 'row',
    width: 100,
    padding: 10,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderRadius: 50
  },
  row: {
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#dbdbdb'
  },
  iconContainer: {
    backgroundColor: '#b3b3b3',
    padding: 10,
    borderRadius: 25
  },
  destinationText: {
    marginLeft: 10,
    fontWeight: '600',
    fontSize: 15,
  },
  iconHomeContainer: {
    backgroundColor: '#218cff',
    padding: 10,
    borderRadius: 25
  },
});

export default styles;

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    rowStyle: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignContents: 'center',
    },
  
    inputStyle: {
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 10,
      marginTop: 10,
      width: 335,
      height: 60,
      fontSize: 18,
      marginHorizontal: 20,
      paddingHorizontal: 10,
      borderWidth: 4,
      borderRadius: 12,
      borderColor: '#000000'
    },
  
    rowInputs: {
      marginBottom: 20,
      width: 150,
      height: 60,
      fontSize: 18,
      marginHorizontal: 20,
      paddingHorizontal: 10,
      borderRadius: 12,
      borderWidth: 4,
      borderColor: '#000000'
    },
  
    columnStyle: {
      display: 'flex',
      flexDirection: 'column',
      alignContent: 'center',
      justifyContent: 'center',
      
    },
    buttonContainer: {
      with: 350,
      height: 68,
      marginTop: 20,
      marginHorizontal: 20,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 3,
      marginBottom: 10,
      backgroundColor: '#dddddd'
    },
    button: {
      borderRadius: 10,
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 80,
      marginBottom: 10,
    },
  
    buttonLabel: {
      fontSize: 20,
    },
    display: {
      width: 320,
      height: 130,
      marginBottom: 50,
      borderRadius: 18,
      backgroundColor: '#ffffff'
    },
  
    displayContainer: {
      with: 350,
      height: 150,
      marginHorizontal: 30,
      paddingHorizontal: 2,
      marginBottom: 10,
      backgroundColor: '#dddddd',
    },
  
    displayText: {
      fontSize: 48,
    },
    checkbox: {
      color: '#ffffff',
    },
    checkBoxText: {
      fontSize: 20,
    },
  
    checkContainer: {
      width: 190,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 20,
      marginBottom: 12,
    }
  
  
  
  });

  export default styles;
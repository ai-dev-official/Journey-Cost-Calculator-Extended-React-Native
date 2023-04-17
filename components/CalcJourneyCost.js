import React, { useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import styles from './CalcJourneyCostStyles';
import CheckBox from '@react-native-community/checkbox';

const CalcJourneyCost = () => {

  const [distance, setDistance] = useState('');
  const [tollChecked, setTollChecked] = useState(true);
  const [tollCost, setTollCost] = useState('');
  const [parkingChecked, setParkingChecked] = useState(true);
  const [parkingCost, setParkingCost] = useState('');
  const [fuelUsagePerKm, setFuelUsagePerKm] = useState('');
  const [fuelCost, setFuelCost] = useState('');
  const [journeyCost, setJourneyCost] = useState('');

  const handleCalcJourneyCost = () => {

    const fuelRequired =  (distance / 100) * fuelUsagePerKm;

    // Calculate fuel required based on distance and fuel usage
    const totalFuelCost = (fuelRequired * fuelCost);
    // Calculate total fuel cost based on fuel required and fuel cost
    let totalJourneyCost = totalFuelCost;
    // Initialize the total journey cost with the total fuel cost
    // Add toll cost to the total journey cost if tollChecked is true
    if (tollChecked) {
      totalJourneyCost += parseFloat(tollCost);
    }

    // Add parking cost to the total journey cost if parkingChecked is true
    if (parkingChecked) {
      totalJourneyCost += parseFloat(parkingCost);
    }

    // Set the state variable journeyCost to the calculated total journey cost
    setJourneyCost(totalJourneyCost.toFixed(2));
  };


  return (
    <View style={styles.container}>
      <View
        style={[styles.displayContainer, { borderWidth: 4, borderColor: '#000000', borderRadius: 18 }]}>
        <View style={styles.display}>
          <View style={[styles.displayText, { backgroundColor: '#ffffff', borderRadius: 18 }]}>
            <Text style={{ marginTop: 20, marginLeft: 20 }}>The total journey cost is:</Text>
            <Text style={[styles.displayText, { marginTop: 2 }]}> €{journeyCost}</Text>
          </View>
        </View>
      </View>

      <View style={styles.inputContainer}>
        <View>
          <TextInput
            placeholder='Enter distance'
            style={styles.inputStyle}
            keyboardType='numeric'
            onChangeText={setDistance}
          />

          <View style={styles.rowStyle}>
            <View syle={styles.columnStyle}>
              <View style={styles.checkContainer}>
                <Text style={styles.checkBoxText}>Tolls? </Text>
                <CheckBox
                  disabled={false}
                  value={tollChecked}
                  onValueChange={() => setTollChecked(!tollChecked)}
                  style={styles.checkbox}
                />
              </View>
              {tollChecked && (
                <TextInput
                  placeholder='Enter toll cost'
                  style={styles.rowInputs}
                  keyboardType='numeric'
                  onChangeText={setTollCost}
                />
              )}
            </View>
            <View syle={styles.columnStyle}>
              <View style={styles.checkContainer}>
                <Text style={styles.checkBoxText}>Parking? </Text>
                <CheckBox
                  disabled={false}
                  value={parkingChecked}
                  onValueChange={() => setParkingChecked(!parkingChecked)}
                  style={styles.checkbox}
                />
              </View>
              {parkingChecked && (
                <TextInput
                  placeholder='Enter parking cost'
                  style={styles.rowInputs}
                  keyboardType='numeric'
                  onChangeText={setParkingCost}
                />
              )}
            </View>

          </View>
        </View>


        <View style={styles.rowStyle}>
          <TextInput
            placeholder='Fuel Usage /Km'
            style={styles.rowInputs}
            keyboardType='numeric'
            onChangeText={setFuelUsagePerKm}
          />

          <TextInput
            placeholder='Fuel Cost /L'
            style={styles.rowInputs}
            keyboardType='numeric'
            onChangeText={setFuelCost}
          />

        </View>


        <View
          style={[styles.buttonContainer, { borderWidth: 4, borderColor: '#000000', borderRadius: 18 }]}>
          <Pressable
            onPress={handleCalcJourneyCost}
            style={[styles.button, { backgroundColor: '#ffffff' }]}
          >
            <Text style={[styles.buttonLabel, { color: '#25292e' }]}>Get Journey Cost</Text>
          </Pressable>
        </View>

        
      </View>
    </View>
  )
}


export default CalcJourneyCost;
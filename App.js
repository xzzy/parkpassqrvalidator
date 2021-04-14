import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Image} from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import CryptoES from "crypto-es";
import CryptoJS from "react-native-crypto-js";


export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
	  // var mytexttoEncryption = "Hello JASON"
	  var key = "sp4R54FaLEbRFmXbFmgSygzNsM9sZCHv";
	  
	  var mytexttoEncryption = 'Booking ID: PS121212 \nName: Jason Work : \nCar Rego: TYEYHD888, TRYHD77 \nDates: 20/10/2021 - 20/12:2021';
	  console.log(mytexttoEncryption);
	  console.log("KEY CREATED");
	  // console.log(CryptoES.AES.encrypt(mytexttoEncryption, key, { mode: CryptoES.mode.CFB, padding: CryptoES.pad.AnsiX923 }).toString());
          
	  // alert(CryptoES.AES.encrypt(mytexttoEncryption, key).toString());
	  // encrypted = CryptoES.AES.encrypt(mytexttoEncryption, key).toString();
	  var E = CryptoES.AES.encrypt(mytexttoEncryption, key).toString();
	  console.log("ENCRYPTED");
	  console.log(E);
	  var C = require("crypto-js");
	  try{ 
	     var E = data;
	     console.log("QR ENCRYPTED");
	     console.log(E);
	     var Decrypted = C.AES.decrypt(E, key);
	     var result = Decrypted.toString(C.enc.Utf8);
	     console.log(result);
             alert(result);
	  } catch(e) {
	     alert(e);
	     console.error(e); 
	  }
     // alert(`${data}`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  var key = "sp4R54FaLEbRFmXbFmgSygzNsM9sZCHv";
var mytexttoEncryption = 'Booking ID: PS121212 \nName: John Smith : \nCar Rego: TYEYHD888, TRYHD77 \nArrival Dates: 20/10/2021 - 20/12:2021';
console.log("START");
// ciphertext = CryptoJS.AES.encrypt('my message', 'secret key 123').toString();
//console.log(ciphertext);	

console.log(CryptoES.AES.encrypt(mytexttoEncryption, key));
console.log("END");
console.log(CryptoES.AES.encrypt(mytexttoEncryption, key).toString());


//var mytexttoEncryption = "Hello JASON"
//var key = "This iyour password";
//const encrypted = CryptoES.AES.encrypt(mytexttoEncryption, key).toString();
//var E = CryptoES.AES.encrypt(mytexttoEncryption, key).toString();
//var C = require("crypto-js");
//alert(E);
//var Decrypted = C.AES.decrypt(E, key);
//var result =Decrypted.toString(C.enc.Utf8);
//alert(result);
//var crypts = CryptoJS.AES.encrypt('my message', 'car').toString();
// var bytes  = CryptoJS.AES.decrypt('U2FsdGVkX1+W75vp01rgTYfL0c96l2T6D6KCpJsFORo=', 'car');
// var originalText = bytes.toString(CryptoJS.enc.Utf8);


return (
<View style={{ alignItems: 'center', flex:1, margin: 5}}>

      <View style={{ width:'100%', flex: 1, height: 100, justifyContent:'center', backgroundColor: '#FFF' }} >
      <Image
        style={styles.tinyLogo}
        source={require('./assets/dbca.png')}
      />

      <Text style={{fontSize: 24, textAlign: 'center', color: '#000'}}> Park Pass Validator </Text>
      <Text style={{fontSize: 14, textAlign: 'center', color: '#000'}}> Use the QR Scanner below to scan a park pass QR code </Text>

      </View>

      <View style={{ width:'100%', height: '60%', justifyContent:'center', backgroundColor: '#FFF', }} >
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
      </View>

        <View style={{ width: '100%', height: 100, justifyContent:'center', backgroundColor: '#FFF',}} >

        <Text style={{fontSize: 14, textAlign: 'center', color: '#000'}}> Copyright 2021 </Text>

        </View>


</View>);

//);
//  return (
//     <View style={styles.container}>
//      <BarCodeScanner
//        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
//        style={StyleSheet.absoluteFillObject}
//      />
//      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
//    </View>
//  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  barCodeView: {
    width: '100%', 
    height: '50%', 
    marginBottom: 40
  },
  tinyLogo: {
    top: 0, 
    width: '100%', 
    height: 90,
  },	
});


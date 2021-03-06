import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Image} from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import BarcodeMask from 'react-native-barcode-mask';

// import CryptoES from "crypto-es";
import JSEncrypt from "jsencrypt";
// import CryptoJS from "react-native-crypto-js";

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [isProcessing, setProcessing] = useState(false);
  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);
  const handleBarCodeRead = ({ type, data }) => {
      alert('reading qr code');

  };
  const handleBarCodeScanned = ({ type, data }) => {
   //alert ('SCANNING');
    if (!scanned) { 
    setProcessing(true);	
    setScanned(true);	    
    // alert('Loading Please Wait');	   
	  // var mytexttoEncryption = "Hello JASON"
	  // var key = "sp4R54FaLEbRFmXbFmgSygzNsM9sZCHv";
	  
	  //var mytexttoEncryption = 'Booking ID: PS121212 \nName: Jason Work : \nCar Rego: TYEYHD888, TRYHD77 \nDates: 20/10/2021 - 20/12:2021';
	  //console.log(mytexttoEncryption);
	  //console.log("KEY CREATED");
	  // console.log(CryptoES.AES.encrypt(mytexttoEncryption, key, { mode: CryptoES.mode.CFB, padding: CryptoES.pad.AnsiX923 }).toString());
          
	  // alert(CryptoES.AES.encrypt(mytexttoEncryption, key).toString());
	  // encrypted = CryptoES.AES.encrypt(mytexttoEncryption, key).toString();
	  //var E = CryptoES.AES.encrypt(mytexttoEncryption, key).toString();
	  //console.log("ENCRYPTED");
	  //console.log(E);
	  //var C = require("crypto-js");
	  //
	  //
  const keys= {"private_key": "-----BEGIN RSA PRIVATE KEY-----\nMIIJKwIBAAKCAgEA4c8f3wpzxlOjOvFkoq0lax6yD3eMW2VMqt7MOx7oIaIB8NaK\ndeEb3tPWhI7Ktpi5WpnEW5D7SBPrY2OR3Az9biI5YkjC5XZ0rJ9wnIGhz2zMAvZa\nKs9RGxt9UciQOGPtHb56+Ph8iPSd7vlhw0FteihgwRhfohg+O4CCyELSbzze16a6\nyKAnqGepE8zXsVbpTnJw0xpFENKAn7SyWs9Lv/BoevHFFhDTh6oGB/BAVFqFs3Nx\nnuHyYliYfA3UWSZtnsH0OpD/XHN5ov30A1Sk8jYZbwlY9svIZHopmuWsfRDlbzaj\nhxVp4EWfFMZqey1cf5dESlJXH/MuXVLx1P+FPgWpzr6f2Oy/pQ3z9WBj7HSlDHIK\nPmpP7OYDPqTTUtIDyYACYBxILDxMN/2kUo8C5paoThVVqJekQv50YCX9VtrLsXga\nHRm9BaSiehyElxf6ky/sr9Yj1LQWJGBBxCJq5keMBzz/7fWsmuYH5sB/D3RfVLt5\nFgR/6UYd2aFydZ300vI9Q1hG+rhlEji67bwLX1RglFn9Lus2nyp5vGj5b7E7oLQw\nCKk41elmGlXvgXYX3lXN1JovUfYiEASYPQaeq9BOG7xC5ielxotskCy3jrJE/bMY\nVyTxzZnlb1p/uEKuy/tRKDPZ16nlLuUe4yLNmfLnAV7J4wKOePYhWzm4LqECAwEA\nAQKCAgEAvwXqL1P3RvKgJo/pE1koS2tHNKBsgzC5397kpKrrsvALdkL4FOqfGizY\nz4DAaiHew49LNi769CmtuoGT9bSje9TF+KgW/+jqoNGsgSmEyiV+nI7tDkQdl7H0\nnQfvQVT/VWc7Pn1vVKijJnOfSX+C7pFT8GX/GPArTUjU2jb1MBctaP9qCai6g9NV\njCOA4EvmyG81lNAnVyjMmM5TB1FQAoqMyFzY3mbTm3Ow8GxE71c4vetOVhtMYfgS\n3vcQCW7h0yi+xAC/leU2JDVzhJHJjAFKGM2ujfEskBtsMNZUyeROQ3vUcMUjsQ8U\nmY2UrKleE63SnpDzlVqygU5WuFqEyrEgd43k5Iy6LWjjJjsuEUbLwD8Sbl5sYPyt\nWqUr1b7538yf2AobsE/R0gsnHQ68+AitSHJH2y2K9jMGEUEuc03QlS0ctw3W6Pmm\n8X7Hfgm81yQot8iD27JwX1PGimfE9ATsjVOSuZR8DfnQ4Kv1Pn6aCrmzmmLzPeKF\nII5WnQEjUUvaxbYdNyCSCQ/9WfV/Pj/bDg/MrCgn+AE8vSHc6X3h2RxqZsoSQOCh\n3rRSkPU8OQuZfCEyD0MboDw+ULJS/mBHLMx5k3pHvIIa+2orj8IFCqcKx95ZxSEE\nKFVMH2a3Xp04MLF73dxE3H4H1C++t8FuktFjkPctqFhkK1RIwFUCggEBAOkLLbb9\nQMymVY2ccB6nUKx+JONsCyPAXEznVhmrt+VX6M2GG1IFxVOZ8HWGl+KZNAgrshP3\n+sL5Jfd+JG1OJRoqb08sQSLgv/bwYGDsGTzXNISQk5g/ozEMsbekYgGE+J2V217B\nKzlzz18cThr8hPrak9YUWw1o5KXSM9L8lUMiKJZ3xUK/xU4w1SYvMuLYJxWtmuXH\ngtH0YkCs1Sow3DQZr0vJHuMH+gaXq1oGGO1EuG9Y+/sYiUz0uUQ3IfbD2tEr9TE+\nBWd/O9b2qx5bnmv9KzUWOhsNmSFU5ON22OZ54oECsk4FPxyBgL+keVLaGywWtn9W\n4YSDYhRZaA0L7EMCggEBAPgNgaSSyVJ8jLhavQfB/Y3Kfm5Jnn7B19dweg7GYjaF\na193+dkRq91cGm64EtA8SQP6ZjtQfm9FiKJMdHlnD9JaPIOZaviS3kj0o2j70Lrv\npkX1rhuyF6JHWyef+23E3P/11nY+ltEozWu6d9zlwWj4tQoZ6+T+3VUHo/ZCEiH/\nioiijcGpE7n2NV7MMy+1WhO48fzzFUu7dzHW6+8SLrGh2l1723i2mLANP603/O7s\nBqUhQaYAJFrVBvYY1lA16FnM7eIP7YmD2om5HT3Lh9GjZf+hGrX3C/6n9sV+VGyg\nrceb/AidxBAFNPXF6KcpEL2KRp2cYI8e4wuhw6h6PUsCggEBANg9CicwqU77zIjB\nLvwSjnXv+rSXzWJYHI0zXx4ky1dgkeEa3gDm3+mp/ohe4lJdi/1E5lFHGYSPAN68\nSnquNxknZO9XBf2iBB3Tf+qPSP++RLn5GSr9aaSavdDEFDiKtNIsekha/4uo3TPI\npOS/iXjnFqRfcPlpajg/at0MiEepy3WLHxvHrAHYp/9tbk80+FdSJleuH8JHfF+8\nv3MNsVYauyCcNy+8eBBj7Zhz7e9Dg8u2CuI8KzKgJcSZT8eUhlbu7e3KOeOGGPVn\nHvLlWoOjf9Mbk8EEhiF6j4RNBAgf8r94zBA/KAeAVwH8UKNDRFFNpftUl5+I9Zoi\nN71bYdcCggEBAM4OIji8+uI7toXaUpbkLiWgJcCmBTSVACDmPW6Sm7lgwZ4vwuvw\nAw3CWe7JmE9FFP5p/oydRDpYz7TKwCKtW3ZJIWXMhxDwqBiAqFIohO8U7tHE0ZoO\nKhXTIsTa3/kChPdXl4zoV05uj55C6xkj/rOdjn5SpCO5F9FvpGOH5Ro69jCkoA9U\nzZ84CIO0K30hMC+b/eE7aOBdXRmYyKrzNri2k/f+UIWJYXM1vkS9cq5igO6hnrAw\nBAM0XTEH1tgQv/ABDUcyJgeK8XpgvQq9TRj3nF5qzQ6Fp4AmtRa/54/JNjLPv+DE\ndb89JA5aFfbuZQqemCSLZ6bcaI0cFrWYvdsCggEBAMYAk00itQ52HP+fE/6NVwgq\n3neQTt+c33cVy0vr3beKc0Brs3+A3AksL3zEqLx5cQs+ZkqMg/x3IaI/fVa7L6EI\nbITQw5fdjYjoOn/dnehm1Uho/beRNGYerVSuwfRKwaveK2vDnmFBTQ29jM57XORS\nkcU0ERyBaapyCNqLj98n0dskHmZOr6vPjbl02WvVCnhg8JVWzjjV9Ex4g14Luqab\nFc+oCkrXhQBbCve2MOoCapSm09yCHIu+kkjvPD2Kmhnhs7NBqbIzNo7tXSOIaiTq\n4tCQgGAjXvP5zgiAsteds669cFHpqGB7XyEoGyI6VQziLZG1OEO61IRKWg34aZs=\n-----END RSA PRIVATE KEY-----"};
  // alert(keys["private_key"]);
         try{
  //            var decrypt = new JSEncrypt();
	      var encrypted = data;
		 setTimeout(function() { var decrypt = new JSEncrypt(); decrypt.setPrivateKey(keys["private_key"]); var uncrypted = decrypt.decrypt(encrypted); alert(uncrypted); setProcessing(false); }, 20);
              // vvar encrypted = "uj9Pu1ORZuNtq6zjTBMJKj1Hdx5n7mHdU7ZGS5GvUiUzIlMoLeXmETF1q0QbIm3mlr06kO+hPPGjZTYUbFGCujKWEI8cO1Tu5m2oYhCu6fC+4vjRtKmgFnwtnXXBgjBZnLyLWfaCel0OCePDs0zWRjmHP7nMr7vk132MU/8rlkj4lfGObOz5ZzfTTLfo+62RZ771mrdXyeg6IHAllNKqIXoZVBi8Gw8zkwCr6dJivM6hRH2dPEaRvPSGHr2nivhQjLxvg8DL44TyVmoYMDcS8W+ATbaQN/5s4EPemEQYyp5Xhq1uPfC9JuIIHYMVkzBslfXtxa86kjjkxu978ULcAPRdm3unreJpZAsTAZmYAtIqnGF6+KQqtQyNYVEi58DGVL8UFRGXLzr1Us8RWIdNR2Xem/AT4fCqjHmqdF36AOE9Y2NbzHYe6lPhg3RFb9T4DAtbaQNBEQLRpgB12zWOoKASOYse4eOmNobVSpqLoIN2x4XAT7T0WEmLOTf6weJ3ZgE46u0KT6OfQayiofPedGrGaSo9/yeAW3Imc4PS1SrHGjeqaZGpoGop7Slb8QuautkyjusH8xQtm2oN3sAbzy2BDdkiu1/foWE4Ldxoahpic+F4E0X7W6Zciag0JhI5AWMUZ1K/uwXhu4R6vd1UidB9sbMFW9hzPpSdo8s/5cI=";
  //            decrypt.setPrivateKey(keys["private_key"]);
  //            var uncrypted = decrypt.decrypt(encrypted);
   //           alert(uncrypted);
         } catch(e) {
              alert(e); 
              console.error(e);
         }
          }
	  //try{ 
	  //   var E = data;
	  //   console.log("QR ENCRYPTED");
	  //   console.log(E);
	  //   var Decrypted = C.AES.decrypt(E, key);
	  //   var result = Decrypted.toString(C.enc.Utf8);
	  //   console.log(result);
          //   alert(result);
	  //} catch(e) {
	  //   alert(e);
	  //   console.error(e); 
	  //}
     // alert(`${data}`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
//  var key = "sp4R54FaLEbRFmXbFmgSygzNsM9sZCHv";
//var mytexttoEncryption = 'Booking ID: PS121212 \nName: John Smith : \nCar Rego: TYEYHD888, TRYHD77 \nArrival Dates: 20/10/2021 - 20/12:2021';
//console.log("START");
// ciphertext = CryptoJS.AES.encrypt('my message', 'secret key 123').toString();
//console.log(ciphertext);	

//console.log(CryptoES.AES.encrypt(mytexttoEncryption, key));
//console.log("END");
//console.log(CryptoES.AES.encrypt(mytexttoEncryption, key).toString());


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
      <Text style={{fontSize: 14, textAlign: 'center', color: '#000'}}> Use the QR Scanner below to scan a park pass QR code { isProcessing } </Text>
      </View>

      <View style={{ width:'90%', height: '50%', justifyContent:'center', backgroundColor: '#FFF', }} >
      <BarCodeScanner
	onBarCodeScanned={handleBarCodeScanned}
	barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}  
        style={StyleSheet.absoluteFillObject}
      />
      <BarcodeMask edgeColor="#62B1F6" showAnimatedLine/>
      {isProcessing && <Button title={'Please Wait Processing'} color="#ff0000" />}
      {!isProcessing && scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
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


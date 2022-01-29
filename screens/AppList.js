import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default  AppList= ({item}) => {
  return (
    <View style={styles.listContainer}>
        <TouchableOpacity>
        <Text  >{item.id}</Text>
        <Text  >{item.name}</Text>
        <Text >{item.password}</Text>
        <Text >{item.Note}</Text>
        </TouchableOpacity>      
    </View>
    // const [selectedValue, setSelectedValue] = useState(item.type);
    // if(selectedValue=='Card')
    //     {
          
    //       return (
    //         <ImageBackground source={addbg} style={styles.bgimg}>
    //         <View style={styles.main}>
    //           <Text style={styles.title}>Add your card here!</Text>
    //           <Text>What type of item is this? </Text>
    //           <View style={{backgroundColor:"gainsboro",width:'100%',borderRadius:5,padding:10,borderWidth:1}}>
    //           <Picker
    //           selectedValue={selectedValue}
    //           style={{ height: 25, width: '100%', }}
    //           onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
    //         >
    //           <Picker.Item label="Login" value="Login" />
    //           <Picker.Item label="Card" value="Card" />
    //           <Picker.Item label="Identity" value="Identity" />
    //           <Picker.Item label="Secure Note" value="Secure Note" />
    //         </Picker>
    //         </View>
             
    //           <Text style={{marginTop:10}}>Cardholder Name : </Text>
    //           <TextInput placeholder="Enter name here" value={cardName} style={styles.itemInput} onChangeText={text => onChangeCardName(text)} />
    //           <Text>Brand : </Text>
    //           <TextInput placeholder="Enter brand of card here" style={styles.itemInput} value={Brand} onChangeText={text => onChangeBrand(text)} />
    //           <Text>Card Number </Text>
    //           <TextInput placeholder="**** **** **** ****" style={styles.itemInput} value={cardNumber}secureTextEntry keyboardType='numeric' onChangeText={text => onChangeCardNumber(text)} />
              
    //           <View style={{flexDirection:'row'}}>
    //           <Text>Expiry Date : </Text>
    //           <Text style={{marginLeft:60}}>CVV : </Text>
    //           </View>
    //           <View style={{flexDirection:'row'}}>
                
    //           <TextInput placeholder="11" keyboardType='numeric' style={[styles.itemInput,{width:65}]} value={ex1} onChangeText={text => onChangeEx1(text)} />
    //           <Text style={{fontSize:27}}>/</Text>
    //           <TextInput placeholder="23" keyboardType='numeric' style={[styles.itemInput,{width:65}]} value={ex2} onChangeText={text => onChangeEx2(text)} />
    //           <TextInput placeholder="***"   secureTextEntry keyboardType='numeric' style={[styles.itemInput,{width:150,marginLeft:20}]} value={cvv} onChangeText={text => onChangeCVV(text)} />
    //           </View>
    //           <Text>Note  :</Text>
    //           <TextInput placeholder="(Optional)" style={[styles.itemInput]}  value={cardNote} multiline onChangeText={text => onChangeCardNote(text)} />
    //           <TouchableHighlight
    //             style={styles.button}
    //             underlayColor="white"
    //             onPress={handleCardSubmit}
    //           >
    //             <Text style={styles.buttonText}>Add</Text>
    //           </TouchableHighlight>
              
    //         </View>
    //         </ImageBackground>
    //       );
    //     }
    //     else if (selectedValue=='Identity') 
    //     {
    //       return (
    //         <ImageBackground source={addbg} style={styles.bgimg}>
    //         <View style={styles.main}>
    //           <Text style={styles.title}>Enter your details here!</Text>
    //           <ScrollView vertical={true}>
    //           <Text>What type of item is this? </Text>
    //           <View style={{backgroundColor:"gainsboro",width:'100%',borderRadius:5,padding:10,borderWidth:1}}>
    //           <Picker
    //           selectedValue={selectedValue}
    //           style={{ height: 25, width: '100%', }}
    //           onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
    //         >
    //           <Picker.Item label="Login" value="Login" />
    //           <Picker.Item label="Card" value="Card" />
    //           <Picker.Item label="Identity" value="Identity" />
    //           <Picker.Item label="Secure Note" value="Secure Note" />
    //         </Picker>
    //         </View>
             
    //           <Text style={{marginTop:10}}>Title: </Text>
    //           <TextInput placeholder="Enter the title here"  style={styles.itemInput} value={idtitle} onChangeText={text => onChangeIdtitle(text)} />
    //           <Text>First Name : </Text>
    //           <TextInput placeholder="Enter your First name" style={styles.itemInput} value={idfname} onChangeText={text => onChangeIdfname(text)} />
    //           <Text>Last Name : </Text>
    //           <TextInput placeholder="Enter your last name" style={styles.itemInput} value={idlname} onChangeText={text => onChangeIdlname(text)} />
    //           <Text>Email : </Text>
    //           <TextInput placeholder="Enter your email  here" style={styles.itemInput} value={idemail} onChangeText={text => onChangeIdemail(text)} />
    //           <Text>Phone : </Text>
    //           <TextInput placeholder="Enter your number here" style={styles.itemInput} value={idphone} keyboardType='numeric'  onChangeText={text => onChangeIdphone(text)} />
    //           <Text>AADHAR number : </Text>
    //           <TextInput placeholder="**** **** **** ****" style={styles.itemInput} value={idaadhar} keyboardType='numeric' secureTextEntry  onChangeText={text => onChangeIdaadhar(text)} />
    //           <Text>Passport number : </Text>
    //           <TextInput placeholder="Enter Passport Number here" style={styles.itemInput} value={idpassport} keyboardType='numeric' secureTextEntry  onChangeText={text => onChangeIdpassport(text)} />
    //           <Text>License number : </Text>
    //           <TextInput placeholder="Enter License Number here" style={styles.itemInput} value={idlicense} keyboardType='numeric' secureTextEntry  onChangeText={text => onChangeIdlicense(text)} />
    //           <Text>Address 1 : </Text>
    //           <TextInput placeholder="Enter your address here" style={[styles.itemInput]}  value={addr1} multiline onChangeText={text => onChangeAddr1(text)} />
    //           <Text>Address 2 : </Text>
    //           <TextInput placeholder="Enter your address here" style={[styles.itemInput]}  value={addr2} multiline onChangeText={text => onChangeAddr2(text)} />
    //           <Text>City/Town : </Text>
    //           <TextInput placeholder="Enter your City/Town name" style={styles.itemInput} value={city} onChangeText={text => onChangecity(text)} />
    //           <Text>State/Province : </Text>
    //           <TextInput placeholder="Enter your State/Province name" style={styles.itemInput} value={state} onChangeText={text => onChangestate(text)} />
    //           <Text>Country : </Text>
    //           <TextInput placeholder="Enter your Country name" style={styles.itemInput} value={country} onChangeText={text => onChangecountry(text)} />
    //           <Text>Zip/Postal Code : </Text>
    //           <TextInput placeholder="Enter your Zip/Postal code here" style={styles.itemInput} value={zip} keyboardType='numeric'  onChangeText={text => onChangezip(text)} />
    //           <Text>Note : </Text>
    //           <TextInput placeholder="(Optional)" style={[styles.itemInput]}  value={idnote} multiline onChangeText={text => onChangeIdnote(text)} />
    //           <TouchableHighlight
    //             style={styles.button}
    //             underlayColor="white"
    //             onPress={handleIDSubmit}
    //           >
    //             <Text style={styles.buttonText}>Add</Text>
    //           </TouchableHighlight>
    //           </ScrollView>
    //         </View>
    //         </ImageBackground>
    //       );
    //     } 
    //     else if (selectedValue=='Secure Note')
    //      {
    //       return (
    //         <ImageBackground source={addbg} style={styles.bgimg}>
    //         <View style={styles.main}>
    //           <Text style={styles.title}>Keep your notes here!</Text>
    //           <Text>What type of item is this? </Text>
    //           <View style={{backgroundColor:"gainsboro",width:'100%',borderRadius:5,padding:10,borderWidth:1}}>
    //           <Picker
    //           selectedValue={selectedValue}
    //           style={{ height: 25, width: '100%', }}
    //           onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
    //         >
    //           <Picker.Item label="Login" value="Login" />
    //           <Picker.Item label="Card" value="Card" />
    //           <Picker.Item label="Identity" value="Identity" />
    //           <Picker.Item label="Secure Note" value="Secure Note" />
    //         </Picker>
    //         </View>
    //         <Text>Name : </Text>
    //           <TextInput placeholder="Enter the title here" style={styles.itemInput} value={stitle} onChangeText={text => onChangeSTitle(text)} />
    //           <Text>Note : </Text>
    //           <TextInput placeholder="Enter your note here" style={[styles.itemInput,{height:150,textAlignVertical: 'top'}]}  value={snote} multiline onChangeText={text => onChangeSNote(text)} />
    //           <TouchableHighlight
    //             style={styles.button}
    //             underlayColor="white"
    //             onPress={handlenoteSubmit}
    //           >
    //             <Text style={styles.buttonText}>Add</Text>
    //           </TouchableHighlight>
    //         </View>
    //         </ImageBackground>
    //       );
    //     } 
    //     else
    //      {
    //       return (
    //         <ImageBackground source={addbg} style={styles.bgimg}>
    //         <View style={styles.main}>
    //           <Text style={styles.title}>Drop your passwords here!</Text>
    //           <Text>What type of item is this? </Text>
    //           <View style={{backgroundColor:"gainsboro",width:'100%',borderRadius:5,padding:10,borderWidth:1}}>
    //           <Picker
    //           selectedValue={selectedValue}
    //           style={{ height: 25, width: '100%', }}
    //           onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
    //         >
    //           <Picker.Item label="Login" value="Login" />
    //           <Picker.Item label="Card" value="Card" />
    //           <Picker.Item label="Identity" value="Identity" />
    //           <Picker.Item label="Secure Note" value="Secure Note" />
    //         </Picker>
    //         </View>
             
    //           <Text style={{marginTop:10}}>Website/App : </Text>
    //           <TextInput placeholder="www.gmail.com" value={title} style={styles.itemInput} onChangeText={text => onChangeTitle(text)} />
    //           <Text>Username : </Text>
    //           <TextInput placeholder="xyz" style={styles.itemInput} value={username} onChangeText={text => onChangeUsername(text)} />
    //           <Text>Password : </Text>
    //           <TextInput placeholder="***************"  value={pass} secureTextEntry style={styles.itemInput} onChangeText={text => onChangePass(text)} />
    //           <Text>Note  :</Text>
    //           <TextInput placeholder="(Optional)" style={[styles.itemInput]}  value={note} multiline onChangeText={text => onChangeNote(text)} />
    //           <TouchableHighlight
    //             style={styles.button}
    //             underlayColor="white"
    //             onPress={handleSubmit}
    //           >
    //             <Text style={styles.buttonText}>Add</Text>
    //           </TouchableHighlight>
    //         </View>
    //         </ImageBackground>
    //       );
  );
}

const styles = StyleSheet.create({
    listContainer:{
        backgroundColor:'white',
        padding:15,
        borderRadius:10,
        marginBottom:5,
        marginTop:10,
        width:420,
        height:80
    },
    listTitle:{
        color:'black',
        padding:5,
        margin:5 ,
        fontSize:19,
        
    },
    name:{
        color:'black',
        padding:5,
        margin:5
    },
    click:{
        marginTop:90,
        fontSize:12,
        color:'white',
        fontWeight:"200"
    }
});

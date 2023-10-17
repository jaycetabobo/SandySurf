    import React from "react";
    import {
      ImageBackground,
      View,
      Dimensions,
      Text,
      Image,
      TextInput,
      Button,
      Alert,
    } from "react-native";
    import { useState } from "react";
    import { Entypo } from '@expo/vector-icons';
    

    
    
    const { width, height } = Dimensions.get("window");
    
    export default function Signup2({ navigation, route }) {
      const [secureTextEntry, setSecureTextEntry] = useState(true);
      const [retypeSecureTextEntry, setRetypeSecureTextEntry] = useState(true);
      const [icon, setIcon] = useState('eye-with-line');

      const handleShowHidePassword = () => {
        setSecureTextEntry(!secureTextEntry);
        setIcon(secureTextEntry ? 'eye' : 'eye-with-line');
        setRetypeSecureTextEntry(!retypeSecureTextEntry);
      };
      
      const [signedUp, setSignedUp] = useState(false);

      const userData = route.params.userData;

      const [userData2, setUserData2] = useState([{
        username: "",
        email: "",
        password: "",
        confirmpassword: "",
      }, 
    ]);
    
      const handleSubmit = () => {
        // Set the user data state variable
        setUserData2(userData2);

        setSignedUp(true);
        Alert.alert('Account created successfully!', null, [
          { text: 'OK', onPress: () => navigation.navigate("Login", { userData,userData2 })},
        ], {
          titleStyle: {
            color: 'yellow',
            fontWeight: 'bold',
            
          },
        }); 
    
        // Navigate to the `profile.js` screen
        // navigation.navigate("Profile", { userData,userData2 });
      };
      
      return (
        <View>
          <ImageBackground
            source={require("../../assets/lqual.png")}
            style={{ width: width, height: height }}
          >
            <View style={{ display: "flex", alignItems: "center" }}>
              <Image
                source={require("../../assets/logo.png")}
                style={{ width: 80, height: 80, marginTop: 70 }}
              />
              <Text style={{ fontSize: 45, marginTop: 5, fontFamily: 'boorsok' }}>Sign up</Text>
              <View style={{ width: "80%", marginTop: 30 }}>
                <Text>Username:</Text>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    borderWidth: 2,
                    borderRadius: 100,
                    paddingLeft: 10,
                    paddingBottom: 5,
                    paddingTop: 5,
                  }}
                >
                  
                  <TextInput style={{ marginLeft: 10, width: 300 }} placeholder = 'Username'
                  value={userData2.username}
                  onChangeText={(text) => setUserData2({ ...userData2, username: text })}
                  >
                  </TextInput>
                </View>
                <Text>Email:</Text>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    borderWidth: 2,
                    borderRadius: 100,
                    paddingLeft: 10,
                    paddingBottom: 5,
                    paddingTop: 5,
                  }}
                >
                  <TextInput style={{ marginLeft: 10, width: 300}} placeholder = 'Email'
                    value={userData2.email}
                    onChangeText={(text) => setUserData2({ ...userData2, email: text })}
                  >
                  </TextInput>
                </View>
                
                
              </View>
              
              <View style={{ width: "80%", marginTop: 10 }}>
             
                <Text>Password:</Text>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    borderWidth: 2,
                    borderRadius: 100,
                    paddingLeft: 10,
                    paddingBottom: 5,
                    paddingTop: 5,
                    justifyContent: 'space-between',
                    width: '100%'
                  }}
                >
                  <TextInput  secureTextEntry={secureTextEntry} placeholder = 'Password' style={{marginLeft:10, width: '85%'}}
                    value={userData2.password}
                    onChangeText={(text) => setUserData2({ ...userData2, password: text })}
                  > 
                  </TextInput>
                  <Entypo name={icon} size={24} color="black" style={{ width: 100 }} onPress={handleShowHidePassword}

                  />
                  
                </View>
                <Text>Re-type Password:</Text>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    borderWidth: 2,
                    borderRadius: 100,
                    paddingLeft: 10,
                    paddingBottom: 5,
                    paddingTop: 5,
                  }}
                >
                  <TextInput style={{ marginLeft: 10, width: 300 }} secureTextEntry={retypeSecureTextEntry} placeholder = 'Re-type Password'
                    value={userData2.confirmpassword}
                    onChangeText={(text) => setUserData2({ ...userData2, confirmpassword: text })}
                  > 
                  </TextInput>
                
                </View>
              </View>
              <View
                style={{
                  backgroundColor: "black",
                  width: 150,
                  marginTop: 27,
                  marginLeft: 25,
                  borderRadius: 100,
                  height: 40,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}  
              >
                <Text onPress={handleSubmit} style={{color: '#fff'}}>SIGNUP</Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center"
                }}
              >
               
              </View>
              <Text style={{ marginTop: 30, fontSize: 15 }}>
                Do you have an existing account?
                <Text style={{ color: "#38B6FF" }} onPress={ () => navigation.navigate('Login', { userData2 })}> Click Here.</Text>
              </Text>
            </View>
          </ImageBackground>
        </View>
      );
    }
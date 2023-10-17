    import React, { useState } from "react";
    import {
      ImageBackground,
      View,
      Dimensions,
      Text,
      Image,
      TextInput,
      Button,
      DatePicker
    } from "react-native";


    
    
    const { width, height } = Dimensions.get("window");
    
    export default function Signup({ navigation, }) {

    
    
      const [userData, setUserData] = useState([{
        fullname: "",
        birthdate: "",
        location: "",
        phoneNumber: ""
      },
    ]);
    
      const handleSubmit = () => {
        // Set the user data state variable
        setUserData(userData);
    
        // Navigate to the `profile.js` screen
        navigation.navigate("Signup2", { userData });
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
                <Text>Fullname:</Text>
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
                  <TextInput
                    style={{ marginLeft: 10, width: 300 }}
                    placeholder = 'e.g surname middlename lastname'
                    value={userData.fullname}
                    onChangeText={(text) => setUserData({ ...userData, fullname: text })}
                  />
                 
                </View>
                <Text>Birthdate:</Text>
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
                  <TextInput
                    style={{ marginLeft: 10, width: 300 }}
                    placeholder = 'MM/DD/YY'
                    value={userData.birthdate}
                    onChangeText={(text) => setUserData({ ...userData, birthdate: text })}
                  />
                </View>
                <Text>Location:</Text>
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
                  <TextInput
                    style={{ marginLeft: 10, width: 300 }}
                    placeholder = 'e.g CDO'
                    value={userData.location}
                    onChangeText={(text) => setUserData({ ...userData, location: text })}
                  />
                  
                </View>
                
              </View>
              
              <View style={{ width: "80%", marginTop: 10 }}>
             
                <Text>PhoneNumber:</Text>
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
                  <TextInput
                    style={{ marginLeft: 10, width: 300 }}
                    placeholder = 'e.g 09427537856'
                    value={userData.phoneNumber}
                    onChangeText={(text) => setUserData({ ...userData, phoneNumber: text })}
                  />
                  
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
                <Text style={{color: '#fff', paddingHorizontal: 10}} onPress={handleSubmit}>CONTINUE</Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center"
                }}
              >
               
              </View>
              {/* <Text style={{ marginTop: 30, fontSize: 15 }}>
                Do you have an existing account?
                <Text style={{ color: "#38B6FF" }} onPress={ () => navigation.navigate('Login')}> Click Here.</Text>
              </Text> */}
            </View>
          </ImageBackground>
        </View>
      );
    }
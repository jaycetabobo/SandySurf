
import { createStackNavigator } from '@react-navigation/stack';
import Profile from "../Screen/Content/profile";
import Login from '../Screen/Authentication/Login';
import Signup from '../Screen/Authentication/signup';
import Signup2 from '../Screen/Authentication/signup2';
import { StyleSheet, Text } from 'react-native';

const Stack = createStackNavigator();

export default function ProfileRoutes() {
  return (
    <Stack.Navigator >
        <Stack.Screen name="Signup" component={Signup} style={styles.header} options={{title: ' '}}/>
        <Stack.Screen name="Signup2" component={Signup2} style={styles.header} options={{title: ' '}}/>
        <Stack.Screen name="Login" component={Login} style={styles.header} options={{title: ' '}}/>
        <Stack.Screen name="Profile" component={Profile} options={{
          title: 'My Profile',
          headerTitleAlign: 'center',
          headerRight: () => (
            <Text onPress={() => alert('This is a button!')} style={styles.headerRightTitle}> Edit</Text>
          ),
          
          headerTitleStyle: {
            fontFamily: 'boorsok'
          },
          headerStyle:{
            backgroundColor: '#37A9D0',
            
          },
          headerTintColor: '#fff',
        }}/>
        
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
    header:{
        height: 0
    },
    headerRightTitle:{
      marginRight: 10,
      fontFamily: 'glacialindibold',
      fontSize: 20,
      color: '#fff'
    }
})

import { createStackNavigator } from '@react-navigation/stack';
import Profile from "../Screen/Content/profile";
import Login from '../Screen/Authentication/Login';
import Signup from '../Screen/Authentication/signup';
import Signup2 from '../Screen/Authentication/signup2';
import { StyleSheet } from 'react-native';

const Stack = createStackNavigator();

export default function ProfileRoutes() {
  return (
    <Stack.Navigator >
        <Stack.Screen name="Signup" component={Signup} style={styles.header} options={{title: ' '}}/>
        <Stack.Screen name="Signup2" component={Signup2} style={styles.header} options={{title: ' '}}/>
        <Stack.Screen name="Login" component={Login} style={styles.header} options={{title: ' '}}/>
        <Stack.Screen name="Profile" component={Profile} options={{
          title: 'My Profile',
        }}/>
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
    header:{
        height: 0
    }
})
import { Text, Button } from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Cliente ({navigation,  usuario}){

    const logout = async() => {
        try {
            // await AsyncStorage.removeItem('usuario');
            // await AsyncStorage.removeItem('token');

            await AsyncStorage.clear();
          
            navigation.navigate('Login');
        } catch (error) {
            
        }
    };

    return (
        <>
            <Text>Sou a pagina de cliente</Text>
            <Button title="Logout" onPress={logout} />
        </>
    )
       
}
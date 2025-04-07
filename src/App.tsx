import { StyleSheet, Text, View } from 'react-native';
import { ProfileProvider } from './context/profile-context';
import { useProfile } from './hooks/use-profile';

export default function App() {
  return (
    <View style={styles.container}>
      <ProfileProvider>
      <Header/>
      </ProfileProvider>
    </View>
  );

}

const Header=()=>{
  return(
    <View style={styles.header}> 
      <Logo/>
      <Profile/>
    </View>
  )
}
const Logo = () => {
  return ( <Text style={styles.logo}>MeuApp</Text> );
}

const Profile=()=>{
  const {userName}=useProfile()
  return(
    <Text style={styles.profile}> Ola {userName}!</Text>
  )
}
 

const styles = StyleSheet.create({
  container: {
    marginTop:50,
    padding:20
  },
  header:{
    backgroundColor:"#eee",
    padding:15,
    borderRadius:8,
    flexDirection:"row",
    justifyContent:"space-between",
  },
  logo:{
    fontSize: 18,
    fontWeight:"bold"
  },
  profile:{
    fontSize:16,
    color:"#333"
  }
});

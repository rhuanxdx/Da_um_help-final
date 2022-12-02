import React, {createContext,useState} from "react";

import { useNavigation } from "@react-navigation/native";
import axios from 'axios';
export const AuthContext = createContext({});

function AuthProvider ({children}){

    const [userDoador,setUserDoador] = useState({});
    const navigation = useNavigation();

    function Login(EmailDoador,Senha){
        axios.post("https://daumhelp.glitch.me/loginDoador", {EmailDoador: EmailDoador , Senha: Senha
        }).then((response) => {
        console.log(response.data);
        if(response.data.message == 'Nao encontrado'){
            alert('Email ou Senha incorretos!!');
        }
        else{
            setUserDoador(response);
            navigation.navigate('Tabs');
        }
  });
    }

    

    function EditDoador(Telefone,Senha,idDoador){
        axios.post("https://daumhelp.glitch.me/editDoador", { 
         idDoador : idDoador, Senha: Senha, Telefone: Telefone
        }).then((response) => {
        if(response.data.message == 'Nao encontrado'){
            alert('erro ao editar perfil');
            navigation.navigate('PerfilDoador');
        }
        else{
            setUserDoador(response);
            alert('Operação feita com sucesso');
            navigation.navigate('PerfilDoador');
        }
  });
    }

    return (
        <AuthContext.Provider value={{userDoador, Login,EditDoador}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;
import { api } from "./apiService";

async function login(email, senha){
    return await api.post('/login',{email, senha});
}

async function logout(){
    return await api.delete('/logout');
}

export default {
    login,
    logout
}

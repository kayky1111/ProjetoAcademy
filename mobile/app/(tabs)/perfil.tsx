import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function PerfilScreen() {
  const user = {
    nome: "Felipe Rodrigues",
    email: "felipe@email.com",
    telefone: "(11) 98765-4321",
    senha: "123456",
  };

  const handleLogout = () => {
    console.log("Usuário deslogado");
  };

  return (
    <View style={styles.container}>
     
      <ImageBackground
        source={require("../../assets/images/perfil_pag.jpg")}
        style={styles.headerImage}
       
      >
        <TouchableOpacity style={styles.editIcon}>
          <Ionicons name="create-outline" size={28} color="#fff" />
        </TouchableOpacity>

      
        <Image
          source={require("../../assets/images/perfil_pag.jpg")}
          style={styles.profileImage}
        />
      </ImageBackground>

      {/* Nome do usuário */}
      <Text style={styles.name}>{user.nome}</Text>

      {/* Formulário com dados */}
      <View style={styles.form}>
        <TextInput style={styles.input} value={user.email} editable={false} />
        <TextInput style={styles.input} value={user.telefone} editable={false} />
        <TextInput style={styles.input} value={user.senha} editable={false} secureTextEntry />
      </View>

      {/* Botão de logout */}
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Deslogar Conta</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  
  headerImage: {
    width: "100%",
    height: 180,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    padding: 12,
  },
  editIcon: {
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 8,
    borderRadius: 20,
  },
  profileImage: {
    width: 100,         
    height: 100,         
    borderRadius: 50,     
    borderWidth: 3,       
    borderColor: "#fff",
    position: "absolute",
    bottom: -50,          
    left: "50%",
    marginLeft: -50,      
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 60,        
    marginBottom: 20,
  },
  form: {
    paddingHorizontal: 20,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 12,
    marginBottom: 15,
    backgroundColor: "#f8f9fa",
    color: "#555",
  },
  logoutButton: {
    marginTop: 30,
    marginHorizontal: 20,
    backgroundColor: "#C9B037",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
  },
  logoutText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

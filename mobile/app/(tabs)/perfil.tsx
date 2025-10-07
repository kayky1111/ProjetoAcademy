import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function PerfilScreen() {
  const router = useRouter();

  // Estado inicial do usuário
  const [user, setUser] = useState({
    nome: "Felipe Rodrigues",
    email: "felipe@email.com",
    telefone: "(11) 98765-4321",
    senha: "123456",
  });

  // Estados para controle de edição
  const [editando, setEditando] = useState(false);
  const [tempUser, setTempUser] = useState(user);

  // Lida com clique em editar
  const handleEdit = () => {
    setEditando(true);
  };

  // Lida com salvar alterações
  const handleSave = () => {
    setUser(tempUser);
    setEditando(false);
    Alert.alert("Sucesso", "Informações atualizadas com sucesso!");
  };

  // Lida com logout
  const handleLogout = () => {
    router.push("/login");
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <ImageBackground
        source={require("../../assets/images/perfil_pag.jpg")}
        style={styles.headerImage}
        resizeMode="cover"
      >
        <LinearGradient
          colors={["rgba(0,0,0,0.4)", "transparent"]}
          style={styles.overlay}
        />
        {!editando && (
          <TouchableOpacity style={styles.editIcon} onPress={handleEdit}>
            <Ionicons name="create-outline" size={26} color="#fff" />
          </TouchableOpacity>
        )}

        <Image
          source={require("../../assets/images/perfil_pag.jpg")}
          style={styles.profileImage}
        />
      </ImageBackground>

      {/* Nome */}
      <Text style={styles.name}>{user.nome}</Text>

      {/* Formulário */}
      <View style={styles.form}>
        <View style={styles.inputBox}>
          <Ionicons name="person-outline" size={18} color="#666" style={styles.icon} />
          <TextInput
            style={[styles.input, editando && styles.inputEditavel]}
            value={editando ? tempUser.nome : user.nome}
            editable={editando}
            onChangeText={(text) => setTempUser({ ...tempUser, nome: text })}
          />
        </View>

        <View style={styles.inputBox}>
          <Ionicons name="mail-outline" size={18} color="#666" style={styles.icon} />
          <TextInput
            style={[styles.input, editando && styles.inputEditavel]}
            value={editando ? tempUser.email : user.email}
            editable={editando}
            onChangeText={(text) => setTempUser({ ...tempUser, email: text })}
          />
        </View>

        <View style={styles.inputBox}>
          <Ionicons name="call-outline" size={18} color="#666" style={styles.icon} />
          <TextInput
            style={[styles.input, editando && styles.inputEditavel]}
            value={editando ? tempUser.telefone : user.telefone}
            editable={editando}
            onChangeText={(text) => setTempUser({ ...tempUser, telefone: text })}
          />
        </View>

        <View style={styles.inputBox}>
          <Ionicons name="lock-closed-outline" size={18} color="#666" style={styles.icon} />
          <TextInput
            style={[styles.input, editando && styles.inputEditavel]}
            value={editando ? tempUser.senha : user.senha}
            editable={editando}
            secureTextEntry
            onChangeText={(text) => setTempUser({ ...tempUser, senha: text })}
          />
        </View>
      </View>

      {/* Botão */}
      {editando ? (
        <TouchableOpacity activeOpacity={0.85} onPress={handleSave}>
          <LinearGradient
            colors={["#4CAF50", "#2E8B57"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.logoutButton}
          >
            <Ionicons name="checkmark-outline" size={20} color="#fff" style={{ marginRight: 6 }} />
            <Text style={styles.logoutText}>Salvar Alterações</Text>
          </LinearGradient>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity activeOpacity={0.85} onPress={handleLogout}>
          <LinearGradient
            colors={["#FFD700", "#FFA500"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.logoutButton}
          >
            <Ionicons name="log-out-outline" size={20} color="#fff" style={{ marginRight: 6 }} />
            <Text style={styles.logoutText}>Deslogar Conta</Text>
          </LinearGradient>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
  },
  headerImage: {
    width: "100%",
    height: 200,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    padding: 16,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  editIcon: {
    backgroundColor: "rgba(255,255,255,0.3)",
    padding: 8,
    borderRadius: 20,
    marginBottom: 10,
    marginRight: 10,
  },
  profileImage: {
    width: 110,
    height: 110,
    borderRadius: 55,
    borderWidth: 3,
    borderColor: "#fff",
    position: "absolute",
    bottom: -55,
    left: "50%",
    marginLeft: -55,
  },
  name: {
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
    marginTop: 70,
    color: "#222",
  },
  form: {
    paddingHorizontal: 20,
    marginTop: 25,
  },
  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingHorizontal: 12,
    marginBottom: 14,
    height: 52,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
    elevation: 2,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 15,
    color: "#444",
  },
  inputEditavel: {
    backgroundColor: "#fff8dc",
  },
  logoutButton: {
    marginTop: 40,
    marginHorizontal: 30,
    borderRadius: 12,
    paddingVertical: 14,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 4,
    elevation: 4,
  },
  logoutText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

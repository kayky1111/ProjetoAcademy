import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function CursosScreen() {
  const router = useRouter();

  const cursos = [
    {
      id: "1",
      nome: "Violão",
      descricao: "As aulas de violão aconteceram nos horários 9:00 às 11:00",
      preco: "R$ 23,59",
      imagem: require("../assets/images/violao.jpg"),
    },
    {
      id: "2",
      nome: "Guitarra",
      descricao: "As aulas de guitarra aconteceram nos horários 9:00 às 11:00",
      preco: "R$ 23,59",
      imagem: require("../assets/images/guitarra.jpg"),
    },
    {
      id: "3",
      nome: "Flauta",
      descricao: "As aulas de flauta aconteceram nos horários 9:00 às 11:00",
      preco: "R$ 23,59",
      imagem: require("../assets/images/flauta.jpg"),
    },
    {
      id: "4",
      nome: "Baterista",
      descricao: "As aulas de bateria aconteceram nos horários 9:00 às 11:00",
      preco: "R$ 23,59",
      imagem: require("../assets/images/bateria.jpg"),
    },
    {
      id: "5",
      nome: "Canto",
      descricao: "As aulas de canto aconteceram nos horários 9:00 às 11:00",
      preco: "R$ 23,59",
      imagem: require("../assets/images/canto.jpg"),
    },
    {
      id: "6",
      nome: "Piano",
      descricao: "As aulas de piano aconteceram nos horários 9:00 às 11:00",
      preco: "R$ 23,59",
      imagem: require("../assets/images/piano.jpg"),
    },
  ];

  const renderCurso = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.imagem} style={styles.imagem} resizeMode="cover" />
      <Text style={styles.nome}>{item.nome}</Text>
      <Text style={styles.descricao}>{item.descricao}</Text>
      <View style={styles.footerCard}>
        <Text style={styles.preco}>Valor: {item.preco}</Text>
        <TouchableOpacity style={styles.botao}>
          <Text style={styles.botaoTexto}>Comprar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header com seta de voltar */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.titulo}>Cursos</Text>
      </View>

      <Text style={styles.subtitulo}>
        Apresentamos os principais cursos da Maker Music
      </Text>

      {/* Lista de cursos */}
      <FlatList
        data={cursos}
        renderItem={renderCurso}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.lista}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 16,
    paddingTop: 50,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  backButton: {
    marginRight: 10,
    padding: 6,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    flex: 1,
  },
  subtitulo: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 20,
    color: "#333",
  },
  lista: {
    paddingBottom: 80,
  },
  row: {
    justifyContent: "space-between",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 10,
    marginBottom: 16,
    width: "48%",
    borderWidth: 1,
    borderColor: "#ccc",
  },
  imagem: {
    width: "100%",
    height: 100,
    borderRadius: 6,
    marginBottom: 8,
  },
  nome: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 6,
    textAlign: "center",
  },
  descricao: {
    fontSize: 12,
    color: "#555",
    marginBottom: 8,
    textAlign: "center",
  },
  footerCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  preco: {
    fontSize: 12,
    fontWeight: "bold",
  },
  botao: {
    backgroundColor: "#FFD700",
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 6,
  },
  botaoTexto: {
    fontSize: 12,
    fontWeight: "bold",
  },
});

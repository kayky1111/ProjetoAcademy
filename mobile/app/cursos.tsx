import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React from "react";
import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width } = Dimensions.get("window");

export default function CursosScreen() {
  const router = useRouter();

  const cursos = [
    {
      id: "1",
      nome: "Violão",
      descricao: "Aulas de violão nos horários 9:00 às 11:00",
      preco: "R$ 23,59",
      imagem: require("../assets/images/violao.jpg"),
    },
    {
      id: "2",
      nome: "Guitarra",
      descricao: "Aulas de guitarra nos horários 9:00 às 11:00",
      preco: "R$ 23,59",
      imagem: require("../assets/images/guitarra.jpg"),
    },
    {
      id: "3",
      nome: "Flauta",
      descricao: "Aulas de flauta nos horários 9:00 às 11:00",
      preco: "R$ 23,59",
      imagem: require("../assets/images/flauta.jpg"),
    },
    {
      id: "4",
      nome: "Bateria",
      descricao: "Aulas de bateria nos horários 9:00 às 11:00",
      preco: "R$ 23,59",
      imagem: require("../assets/images/bateria.jpg"),
    },
    {
      id: "5",
      nome: "Canto",
      descricao: "Aulas de canto nos horários 9:00 às 11:00",
      preco: "R$ 23,59",
      imagem: require("../assets/images/canto.jpg"),
    },
    {
      id: "6",
      nome: "Piano",
      descricao: "Aulas de piano nos horários 9:00 às 11:00",
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
        <Text style={styles.preco}>{item.preco}</Text>
        <TouchableOpacity activeOpacity={0.8}>
          <LinearGradient
            colors={["#FFD700", "#FFA500"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.botao}
          >
            <Text style={styles.botaoTexto}>Comprar</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={26} color="#222" />
        </TouchableOpacity>
        <Text style={styles.titulo}>Cursos</Text>
      </View>

      <Text style={styles.subtitulo}>
        Descubra os cursos da <Text style={{ fontWeight: "bold" }}>Maker Music</Text>
      </Text>

      {/* Lista */}
      <FlatList
        data={cursos}
        renderItem={renderCurso}
        keyExtractor={(item) => item.id}
        numColumns={width > 400 ? 2 : 1}
        columnWrapperStyle={width > 400 ? styles.row : null}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.lista}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
    paddingTop: 50,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    marginBottom: 10,
  },
  backButton: {
    padding: 8,
  },
  titulo: {
    flex: 1,
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
    color: "#222",
    marginRight: 30,
  },
  subtitulo: {
    fontSize: 14,
    textAlign: "center",
    color: "#555",
    marginBottom: 16,
  },
  lista: {
    paddingHorizontal: 12,
    paddingBottom: 100,
  },
  row: {
    justifyContent: "space-between",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 14,
    padding: 12,
    marginBottom: 18,
    width: width > 400 ? "48%" : "100%",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
  },
  imagem: {
    width: "100%",
    height: 130,
    borderRadius: 10,
    marginBottom: 10,
  },
  nome: {
    fontSize: 17,
    fontWeight: "700",
    color: "#111",
    marginBottom: 4,
    textAlign: "center",
  },
  descricao: {
    fontSize: 13,
    color: "#666",
    textAlign: "center",
    marginBottom: 10,
  },
  footerCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  preco: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#222",
  },
  botao: {
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  botaoTexto: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#222",
    textAlign: "center",
  },
});

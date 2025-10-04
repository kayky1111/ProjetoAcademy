import { Ionicons } from "@expo/vector-icons"; // Ícone de seta
import { useNavigation } from "@react-navigation/native"; // Importa navegação
import React from "react";
import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { BarChart } from "react-native-chart-kit";

export default function FrequenciaScreen() {
  const navigation = useNavigation(); // Hook para navegar

  // Dados de exemplo: frequência semanal do aluno
  const data = {
    labels: ["Seg", "Ter", "Qua", "Qui", "Sex"], 
    datasets: [
      {
        data: [1, 0.8, 1, 0.6, 0.9], 
      },
    ],
  };

  const screenWidth = Dimensions.get("window").width;

  return (
    <ScrollView style={styles.container}>
      {/* Botão de voltar */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="black" />
        <Text style={styles.backText}>Voltar</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Frequência do Aluno</Text>

      <BarChart
        data={data}
        width={screenWidth - 32}
        height={220}
        fromZero
        yAxisSuffix="%"
        chartConfig={{
          backgroundColor: "#fff",
          backgroundGradientFrom: "#fff",
          backgroundGradientTo: "#fff",
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(0, 173, 245, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0,0,0,${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        style={{
          marginVertical: 10,
          borderRadius: 16,
        }}
      />

      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>Total de aulas: 5</Text>
        <Text style={styles.infoText}>Presenças: 4</Text>
        <Text style={styles.infoText}>Faltas: 1</Text>
        <Text style={styles.infoText}>Frequência: 80%</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
    marginTop: 50,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  backText: {
    marginLeft: 5,
    fontSize: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  infoContainer: {
    marginTop: 20,
    padding: 16,
    backgroundColor: "#f0f0f0",
    borderRadius: 12,
  },
  infoText: {
    fontSize: 16,
    marginVertical: 2,
  },
});

import { Ionicons } from '@expo/vector-icons'; // Para o ícone de seta
import { useNavigation } from "@react-navigation/native"; // Importa navegação
import React, { useState } from "react";
import { Button, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Calendar } from "react-native-calendars";

export default function App() {
  const navigation = useNavigation(); // Hook da navegação
  const [selectedDay, setSelectedDay] = useState("");
  const [title, setTitle] = useState("");
  const [events, setEvents] = useState([]);

  const addEvent = () => {
    if (selectedDay && title.trim()) {
      setEvents([...events, { id: Date.now().toString(), day: selectedDay, title }]);
      setTitle(""); // limpa o campo
    }
  };

  return (
    <View style={styles.container}>
      {/* Botão de voltar */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="black" />
        <Text style={styles.backText}>Voltar</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Calendário de Eventos</Text>

      <Calendar
        onDayPress={(day) => setSelectedDay(day.dateString)}
        markedDates={{
          [selectedDay]: { selected: true, selectedColor: "#00adf5" },
        }}
      />

      <Text style={styles.label}>
        Dia selecionado: {selectedDay || "Nenhum"}
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Digite o título do evento"
        value={title}
        onChangeText={setTitle}
      />

      <Button title="Salvar Evento" onPress={addEvent} />

      <Text style={styles.subtitle}>Eventos:</Text>
      <FlatList
        data={events}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={styles.event}>
            📅 {item.day} - {item.title}
          </Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginTop: 30,
    backgroundColor: "#fff",
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
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  label: {
    marginTop: 10,
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "#aaa",
    borderRadius: 8,
    padding: 8,
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 15,
  },
  event: {
    fontSize: 16,
    marginVertical: 5,
  },
});

import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import {
  FlatList,
  Image,
  Modal,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

// Lista de notificações
const notifications = [
  { id: "1", message: "Você recebeu uma mensagem." },
  { id: "2", message: "Seu pedido foi enviado." },
  { id: "3", message: "Nova atualização disponível!" },
];

export default function HomeScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [chatVisible, setChatVisible] = useState(false);
  const [chatMessage, setChatMessage] = useState("");
  const [messages, setMessages] = useState([
    { id: "1", text: "Olá! Como posso te ajudar?", sender: "professor", time: "10:00" },
  ]);

  const router = useRouter();
  const flatListRef = useRef();

  const cards = [
    { title: "Cursos", image: require("../../assets/images/curso_img.png"), route: "/cursos" },
    { title: "Frequência", image: require("../../assets/images/frequencia_img.png"), route: "/frequencia" },
    { title: "Calendário", image: require("../../assets/images/calendario_img.png"), route: "/calendario" },
    { title: "Pagamento", image: require("../../assets/images/pagamento_img.png"), route: "/pagamento" },
  ];

  // Envia mensagem do usuário e simula resposta do professor
  const sendMessage = () => {
    if (!chatMessage.trim()) return;

    const newMessage = {
      id: Date.now().toString(),
      text: chatMessage,
      sender: "user",
      time: new Date().toLocaleTimeString().slice(0, 5),
    };
    setMessages((prev) => [...prev, newMessage]);
    setChatMessage("");

    // Simula resposta automática do professor
    setTimeout(() => {
      const reply = {
        id: Date.now().toString() + "r",
        text: "Recebi sua mensagem!",
        sender: "professor",
        time: new Date().toLocaleTimeString().slice(0, 5),
      };
      setMessages((prev) => [...prev, reply]);
    }, 1000);
  };

  // Rola automaticamente para a última mensagem
  useEffect(() => {
    if (flatListRef.current) {
      flatListRef.current.scrollToEnd({ animated: true });
    }
  }, [messages]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        {/* Topo com logo e sino */}
        <View style={styles.topBar}>
          <Image
            source={require("../../assets/images/logo_maker.jpg")}
            style={styles.logo}
            resizeMode="contain"
          />

          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Ionicons name="notifications-outline" size={28} color="black" />
          </TouchableOpacity>
        </View>

        {/* Modal de Notificações */}
        <Modal
          visible={modalVisible}
          animationType="slide"
          transparent={true}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalBackground}>
            <View style={styles.modalContainer}>
              <Text style={styles.modalTitle}>Notificações</Text>

              <FlatList
                data={notifications}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <View style={styles.notificationItem}>
                    <Text>{item.message}</Text>
                  </View>
                )}
              />

              <TouchableOpacity
                onPress={() => setModalVisible(false)}
                style={styles.closeButton}
              >
                <Text style={{ color: "white" }}>Fechar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        {/* Título e mensagem de boas-vindas */}
        <Text style={styles.header}>🎵 Maker Music</Text>
        <Text style={styles.welcome}>
          Bem-vindo à Maker Music{"\n"}Seu portal começa aqui!
        </Text>

        {/* Cards */}
        <View style={styles.cards}>
          {cards.map((card) => (
            <TouchableOpacity
              key={card.title}
              style={styles.card}
              onPress={() => card.route && router.push(card.route)}
            >
              <Image source={card.image} style={styles.image} />
              <Text style={styles.cardTitle}>{card.title}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Seção Sobre Nós */}
        <View style={styles.aboutSection}>
          <Image
            source={require("../../assets/images/logo_maker2.jpg")}
            style={styles.aboutLogo}
          />
          <Text style={styles.aboutTitle}>Um pouco sobre Nós</Text>
          <Text style={styles.aboutSubtitle}>Nossos Objetivos são:</Text>

          <View style={styles.aboutItem}>
            <Ionicons name="chatbubbles-outline" size={40} color="black" />
            <View style={styles.aboutTextBox}>
              <Text style={styles.aboutItemTitle}>Interação Ágil</Text>
              <Text style={styles.aboutItemText}>
                Comunique-se com seu professor em tempo real, tire dúvidas rapidamente e acompanhe seu progresso com feedbacks personalizados.
              </Text>
            </View>
          </View>

          <View style={styles.aboutItem}>
            <Ionicons name="list-outline" size={40} color="black" />
            <View style={styles.aboutTextBox}>
              <Text style={styles.aboutItemTitle}>Organização</Text>
              <Text style={styles.aboutItemText}>
                Planeje seu aprendizado com cronogramas personalizados e metas claras.
              </Text>
            </View>
          </View>

          <View style={styles.aboutItem}>
            <Ionicons name="school-outline" size={40} color="black" />
            <View style={styles.aboutTextBox}>
              <Text style={styles.aboutItemTitle}>Aprendizagem</Text>
              <Text style={styles.aboutItemText}>
                Explore diferentes estilos musicais, técnicas e instrumentos em um só lugar.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Ícone de chat fixo */}
      <TouchableOpacity
        style={styles.chatButton}
        onPress={() => setChatVisible(true)}
      >
        <Ionicons name="chatbubbles-outline" size={28} color="#fff" />
      </TouchableOpacity>

      {/* Modal de chat estilo WhatsApp */}
      <Modal
        visible={chatVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setChatVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.chatContainer}>
            {/* Header do chat */}
            <View style={styles.chatHeader}>
              <Text style={styles.chatHeaderText}>Chat com o Professor</Text>
              <TouchableOpacity onPress={() => setChatVisible(false)}>
                <Ionicons name="close" size={24} color="#fff" />
              </TouchableOpacity>
            </View>

            {/* Lista de mensagens */}
            <FlatList
              ref={flatListRef}
              data={messages}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <View
                  style={[
                    styles.messageBubble,
                    item.sender === "user"
                      ? styles.userBubble
                      : styles.professorBubble,
                  ]}
                >
                  <Text
                    style={
                      item.sender === "user" ? styles.userText : styles.professorText
                    }
                  >
                    {item.text}
                  </Text>
                  <Text style={styles.messageTime}>{item.time}</Text>
                </View>
              )}
              contentContainerStyle={{ paddingVertical: 10 }}
            />

            {/* Input de mensagem */}
            <View style={styles.chatInputContainer}>
              <TextInput
                style={styles.chatInput}
                placeholder="Digite uma mensagem..."
                value={chatMessage}
                onChangeText={setChatMessage}
              />
              <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
                <Text style={{ color: "#fff" }}>Enviar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

// --- Estilos ---
const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#fff", paddingTop: StatusBar.currentHeight || 0 },
  container: { flex: 1, backgroundColor: "#fff", padding: 16 },
  topBar: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 24 },
  logo: { width: 120, height: 40 },
  header: { fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 16 },
  welcome: { fontSize: 16, textAlign: "center", marginBottom: 20 },
  cards: { marginTop: 16 },
  card: { alignItems: "center", backgroundColor: "#F5E8B8", borderRadius: 12, padding: 16, marginBottom: 16 },
  image: { width: 80, height: 80, marginBottom: 8 },
  cardTitle: { fontSize: 18, fontWeight: "bold" },
  aboutSection: { backgroundColor: "#C9B037", borderRadius: 12, padding: 20, marginTop: 32 },
  aboutLogo: { width: 80, height: 80, borderRadius: 40, alignSelf: "center", marginBottom: 12 },
  aboutTitle: { fontSize: 20, fontWeight: "bold", textAlign: "center", marginBottom: 4 },
  aboutSubtitle: { fontSize: 16, textAlign: "center", marginBottom: 20 },
  aboutItem: { flexDirection: "row", alignItems: "flex-start", marginBottom: 20 },
  aboutTextBox: { flex: 1, marginLeft: 12 },
  aboutItemTitle: { fontSize: 16, fontWeight: "bold", marginBottom: 4 },
  aboutItemText: { fontSize: 14, lineHeight: 20 },
  modalBackground: { flex: 1, backgroundColor: "rgba(0,0,0,0.5)", justifyContent: "flex-end" },
  modalContainer: { width: "85%", backgroundColor: "white", borderRadius: 10, padding: 20 },
  modalTitle: { fontSize: 20, marginBottom: 15, fontWeight: "bold" },
  notificationItem: { paddingVertical: 10, borderBottomWidth: 0.5, borderColor: "#ccc" },
  closeButton: { marginTop: 20, backgroundColor: "#2196F3", paddingVertical: 10, borderRadius: 5, alignItems: "center" },

  chatButton: {
    position: "absolute",
    bottom: 30,
    right: 20,
    backgroundColor: "#25D366",
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },

  chatContainer: {
    height: "70%",
    backgroundColor: "#f0f0f0",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 10,
  },
  chatHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#075E54",
    padding: 12,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  chatHeaderText: { color: "#fff", fontSize: 18, fontWeight: "bold" },

  messageBubble: {
    maxWidth: "75%",
    marginVertical: 4,
    padding: 10,
    borderRadius: 10,
  },
  userBubble: { backgroundColor: "#DCF8C6", alignSelf: "flex-end", borderBottomRightRadius: 0 },
  professorBubble: { backgroundColor: "#fff", alignSelf: "flex-start", borderBottomLeftRadius: 0 },
  userText: { color: "#000" },
  professorText: { color: "#000" },
  messageTime: { fontSize: 10, color: "#555", marginTop: 4, textAlign: "right" },

  chatInputContainer: { flexDirection: "row", padding: 8, alignItems: "center" },
  chatInput: { flex: 1, borderWidth: 1, borderColor: "#ccc", borderRadius: 20, paddingHorizontal: 12, paddingVertical: 8, backgroundColor: "#fff" },
  sendButton: { marginLeft: 8, backgroundColor: "#25D366", borderRadius: 20, paddingHorizontal: 16, paddingVertical: 10, justifyContent: "center", alignItems: "center" },
});

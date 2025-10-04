import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Image, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function PagamentoScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      {/* Header com seta de voltar */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>Confira seus pagamentos</Text>
      </View>

      {/* Detalhes da compra */}
      <View style={styles.detailsBox}>
        <Text style={styles.detailsTitle}>Detalhes da sua compra</Text>

        <View style={styles.row}>
          <Text style={styles.label}>Valor das aulas mensal</Text>
          <Text style={styles.value}>R$ 200,00</Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.row}>
          <Text style={styles.labelBold}>Você pagará</Text>
          <Text style={styles.valueBold}>R$ 200,00</Text>
        </View>
      </View>

      {/* QR Code abaixo */}
      <View style={styles.qrContainer}>
        <Image
          source={require("../assets/images/qrcode_pix.png")} // ajuste o caminho
          style={styles.qrCode}
          resizeMode="contain"
        />
      </View>

      {/* Rodapé */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          © 2025 Maker Music – Todos os direitos reservados.{"\n"}
          Desperte sua musicalidade. Viva a experiência Maker.
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 20,
    paddingTop: StatusBar.currentHeight ? StatusBar.currentHeight + 20 : 40,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
  },
  backButton: {
    marginRight: 10,
    padding: 6,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    flex: 1,
  },
  detailsBox: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
    alignSelf: "center",
    width: "90%",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  detailsTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  label: {
    fontSize: 14,
    color: "#333",
  },
  value: {
    fontSize: 14,
    color: "#333",
  },
  labelBold: {
    fontSize: 15,
    fontWeight: "bold",
  },
  valueBold: {
    fontSize: 15,
    fontWeight: "bold",
  },
  divider: {
    height: 1,
    backgroundColor: "#ccc",
    marginVertical: 8,
  },
  qrContainer: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
    alignSelf: "center",
    width: "70%",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    marginBottom: 24,
  },
  qrCode: {
    width: 180,
    height: 180,
  },
  footer: {
    backgroundColor: "#C9B037",
    padding: 12,
    borderRadius: 8,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  footerText: {
    textAlign: "center",
    color: "#000",
    fontSize: 12,
  },
});

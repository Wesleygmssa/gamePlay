import React, { useCallback } from "react";
import { useState } from "react";
import { View, FlatList } from "react-native";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { Profile } from "../../components/Profile";
import { ListHeader } from "../../components/ListHeader";
import { Appointment } from "../../components/Appointment";
import { ListDivider } from "../../components/ListDivider";
import { Background } from "../../components/Background";

import { styles } from "./styles";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { COLLECTION_APPOINTMENTS } from "../../configs/database";
import { Inter_500Medium } from "@expo-google-fonts/inter";
import { Load } from "../../components/Load";

export function Home() {
  const [category, setCategory] = useState("");
  const [loading, setLoadig] = useState(true);
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  const navigation = useNavigation();

  function handleppointmentDetails() {
    navigation.navigate("AppointmentDetails");
  }

  function handleAppointmentCreate() {
    navigation.navigate("AppointmentCreate");
  }

  async function loadAppointments() {
    const response = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
    const storage: Appointment[] = response ? JSON.parse(response) : [];

    if (category) {
      setAppointments(storage.filter((item) => item.category === category));
    } else {
      setAppointments(storage);
    }

    setLoadig(false);
  }

  useFocusEffect(
    useCallback(() => {
      loadAppointments();
    }, [category])
  );

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory("") : setCategory(categoryId);
  }

  return (
    <Background>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd onPress={handleAppointmentCreate} />
      </View>

      {/* component CategorySelect and an map */}
      <CategorySelect
        categorySelected={category}
        setCategory={handleCategorySelect}
      />
      {loading ? (
        <Load />
      ) : (
        <>
          <View style={styles.content}>
            <ListHeader title="Partidas agendadas" subtitle="Total 6" />
          </View>
          <FlatList
            data={appointments}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Appointment data={item} onPress={handleppointmentDetails} />
            )}
            ItemSeparatorComponent={() => <ListDivider />}
            contentContainerStyle={{ paddingBottom: 69 }}
            style={styles.matches}
            showsVerticalScrollIndicator={false}
          />
        </>
      )}
    </Background>
  );
}

//Teste

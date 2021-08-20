import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { SmallInput } from "../../components/SmallInput";
import { TextArea } from "../../components/TextArea";
import { GuildIcon } from "../../components/GuildIcon";
import { theme } from "../../global/styles/theme";
import { CategorySelect } from "../../components/CategorySelect";

import { Background } from "../../components/Background";
import { ModalView } from "../../components/ModalView";
import { Guilds } from "../Guilds";

import {
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { styles } from "./styles";
import { RectButton } from "react-native-gesture-handler";
import { GuildProps } from "../../components/Appointment";

export function AppointmentCreate() {
  const [category, setCategory] = useState("");
  const [openGuildsModa, setOpenGuidsModal] = useState(false);
  const [guild, setGuild] = useState<GuildProps>({} as GuildProps);

  function handleOpenGuilds() {
    setOpenGuidsModal(true);
  }

  /**
   * function Não é permitido inserir mais de 3 (três) assuntos.
   * @param {*} GuildProps -{
   *  id: string;
      name: string;
      icon: null;
      owner: boolean;
   * }
   */

  function handleGuildSelect(guidSelect: GuildProps) {
    setGuild(guidSelect);
    setOpenGuidsModal(false);
  }
  return (
    /* @KeyboradAvoidingView =>
     *  quando teclado aparecer a interface subir junto
     */
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView>
        <Background>
          <Header title="Agendar partida" />
          <Text
            style={[
              styles.label,
              { marginLeft: 24, marginTop: 36, marginBottom: 18 },
            ]}
          >
            Categoria
          </Text>

          <CategorySelect
            hasCheckBox
            setCategory={setCategory}
            categorySelected={category}
          />

          <View style={styles.form}>
            <RectButton onPress={handleOpenGuilds}>
              <View style={styles.select}>
                {
                  // <View style={styles.image} />
                  <GuildIcon />
                }
                <View style={styles.selectBody}>
                  <Text style={styles.label}>Selecione um servidor</Text>
                </View>
                <Feather name="chevron-right" color={theme.colors.heading} />
              </View>
            </RectButton>
            <View style={styles.field}>
              <View>
                <Text style={styles.label}>Dia e mês</Text>
                <View style={styles.column}>
                  <SmallInput maxLength={2} />
                  <Text style={styles.divider}>/</Text>
                  <SmallInput maxLength={2} />
                </View>
              </View>

              <View>
                <Text style={styles.label}>Hora e minuto</Text>
                <View style={styles.column}>
                  <SmallInput maxLength={2} />
                  <Text style={styles.divider}>:</Text>
                  <SmallInput maxLength={2} />
                </View>
              </View>
            </View>
            <View style={[styles.field, { marginBottom: 12 }]}>
              <Text style={styles.label}>Descrição</Text>
              <Text style={styles.caracteresLimit}>Max 100 caraxteres</Text>
            </View>
            {/* @Multiline usuário consegui da enter */}
            <TextArea
              multiline
              maxLength={100}
              numberOfLines={5}
              autoCorrect={false}
            />

            <View style={styles.footer}>
              <Button title="Agendar" />
            </View>
          </View>
        </Background>
      </ScrollView>
      <ModalView visible={openGuildsModa}>
        <Guilds handleGuildSelect={handleGuildSelect} />
      </ModalView>
    </KeyboardAvoidingView>
  );
}

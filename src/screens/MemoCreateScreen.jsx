import React, { useState } from "react";
import {
/* eslint-disable-next-line */
  View, Text, TextInput, StyleSheet, KeyboardAvoidingView, Alert
} from "react-native";

import firebase from "firebase";

import CircleButton from "../components/CircleButton";
import KeyboardSafeView from "../components/KeyboardSafeView";
import { translateErrors } from "../utils";

export default function MemoCreateScreen(props) {
  const { navigation } = props;
  const [bodyText, setBodyText] = useState("");

  function handlePress() {
    const { currentUser } = firebase.auth();
    const db = firebase.firestore();
    const ref = db.collection(`users/${currentUser.uid}/memos`);
    // keyとvalueが同じ場合は省略可能(bodyText: bodyText ⇒ bodyText)
    ref.add({
      bodyText,
      // date型はfirebaseに登録するとtimestamp型として登録される
      updatedAt: new Date(),
    })
      .then(() => {
        navigation.goBack();
      })
      .catch((error) => {
        const errorMsg = translateErrors(error.code);
        Alert.alert(errorMsg.title, errorMsg.description);
      });
  }

  return (
    <KeyboardSafeView style={styles.container} behavior="height">
      <View style={styles.inputContainer}>
        <TextInput
          value={bodyText}
          multiline
          style={styles.input}
          onChangeText={(text) => { setBodyText(text); }}
          autoFocus
        />
      </View>
      <CircleButton
        name="check"
        onPress={handlePress}
      />
    </KeyboardSafeView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    paddingHorizontal: 27,
    paddingVertical: 32,
    flex: 1,
  },
  input: {
    flex: 1,
    textAlignVertical: "top",
    fontSize: 16,
    lineHeight: 24,
  },
});

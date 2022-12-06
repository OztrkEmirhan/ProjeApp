import React from "react";
import { Avatar } from "react-native-paper";
import {NativeBaseProvider, Button, Input, Text, Image, ScrollView  } from "native-base";
import { Alert, StyleSheet, View, TouchableOpacity } from "react-native";
import { getAuth, updateProfile, updateEmail } from "firebase/auth";
import { uploadBytes, ref, getStorage, getDownloadURL } from "firebase/storage";
import * as ImagePicker from "expo-image-picker";

export default function Profile () {

  const user = getAuth().currentUser;
  const [name, setName] = React.useState(user?.displayName || "");
  const [email, setEmail] = React.useState(user?.email || "");
  const [loading, setLoading] = React.useState(false);

  return (
    <ScrollView
    showsVerticalScrollIndicator={false}
    >
    <View>
      <TouchableOpacity
        style={{
          marginTop: 100,
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={async () => {
          let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
            selectionLimit: 1,
          });

          if (!result.cancelled) {
            setLoading(true);
            const blob: any = await new Promise((resolve, reject) => {
              const xhr = new XMLHttpRequest();
              xhr.onload = function () {
                resolve(xhr.response);
              };
              xhr.onerror = function (e) {
                console.log(e);
                reject(new TypeError("Network request failed"));
              };
              xhr.responseType = "blob";
              xhr.open("GET", (result as any).uri, true);
              xhr.send(null);
            });

            if (user?.uid) {
              const storageRef = ref(getStorage(), `avatars/${user.uid}`);
              const result = await uploadBytes(storageRef, blob);
              const downloadUrl = await getDownloadURL(result.ref);
              await updateProfile(user, {
                photoURL: downloadUrl,
              });
            }
            setLoading(false);
          }
        }}
      >
        {user &&
          (user.photoURL ? (
            <Avatar.Image size={100} source={{ uri: user.photoURL }} />
          ) : (
            <Avatar.Text size={100} label={user.displayName?.charAt(0) ?? ""} />
          ))}
      </TouchableOpacity>
      <Input space={3} mt="5"
        style={{ marginTop: 16 }}
        value={name}
        placeholder="Name"
        onChangeText={setName}
      />
      <Input
        space={3} mt="5"
        style={{ marginTop: 16 }}
        value={email}
        placeholder="E-Mail"
        onChangeText={setEmail}
      />
      <Button
        mode="contained"
        style={{ marginTop: 16 }}
        loading={loading}
        onPress={async () => {
          if (user) {
            try {
              await updateProfile(user, {
                displayName: name,
              });
              await updateEmail(user, email);
            } catch (e: any) {
              Alert.alert("Error", e.message);
            }
          }
        }}
      >
        Kaydet
      </Button>
    </View>
    </ScrollView>
  );
};
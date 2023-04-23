import {
  Text,
  ImageBackground,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import imageBackground from "../assets/backgroundImg/PhotoBG.jpg";
import { useState } from "react";

const LoginScreen = () => {
  const [isShowPassword, setIsShowPassword] = useState(true);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const handleIsShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <ImageBackground source={imageBackground} style={styles.imageBackground}>
        <View
          style={{
            ...styles.background,
            marginBottom: isShowKeyboard ? -241 : 0,
          }}
        >
          <Text style={styles.title}>Войти</Text>
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="Адрес электронной почты"
              placeholderTextColor="#BDBDBD"
              onFocus={() => {
                setIsShowKeyboard(true);
              }}
            />
            <TextInput
              style={styles.input}
              placeholder="Пароль"
              placeholderTextColor="#BDBDBD"
              secureTextEntry={isShowPassword}
              onFocus={() => {
                setIsShowKeyboard(true);
              }}
            />
            {/* <Text
            style={styles.showPassword}
            onPress={() => handleIsShowPassword()}
          >
            Показать
          </Text> */}
            <TouchableOpacity
              style={styles.showPassword}
              onPress={handleIsShowPassword}
              activeOpacity={1}
            >
              <Text>Показать</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.registrationBtn} activeOpacity={0.7}>
            <Text style={styles.registrationBtnText}>Войти</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={1}>
            <Text style={styles.enterText}>
              Нет аккаунта? Зарегистрироваться
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
  },

  background: {
    width: "100%",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,

    alignItems: "center",

    height: 489,
    backgroundColor: "#FFFFFF",
  },

  title: {
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    lineHeight: 35,
    marginTop: 32,
    marginBottom: 32,
    color: "#212121",
  },

  form: {
    gap: 16,
    marginHorizontal: 16,
    marginBottom: 43,
  },

  input: {
    borderWidth: 1,
    borderColor: "#E8E8E8",

    borderRadius: 8,
    width: 343,
    height: 50,
    padding: 16,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
  },

  showPassword: {
    position: "absolute",
    bottom: 34,
    right: 32,
    color: "#1B4371",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
  },

  registrationBtn: {
    justifyContent: "center",
    alignItems: "center",
    width: 343,
    height: 51,
    borderRadius: 100,
    backgroundColor: "#FF6C00",
    marginBottom: 16,
  },

  registrationBtnText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    color: "#FFFFFF",
  },

  enterText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    color: "#1B4371",
  },
});

export default LoginScreen;

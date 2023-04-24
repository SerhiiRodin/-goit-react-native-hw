import {
  Text,
  ImageBackground,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import * as Font from "expo-font";
import imageBackground from "../assets/backgroundImg/PhotoBG.jpg";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useState } from "react";
import { SvgUri } from "react-native-svg";
import Logo from "../assets/icons/add.svg";
import * as Svg from "react-native-svg";

const initialState = {
  login: "",
  email: "",
  password: "",
};

const RegistrationScreen = ({ toggleScreen }) => {
  const [state, setState] = useState(initialState);
  const [isShowPassword, setIsShowPassword] = useState(true);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const handleIsShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  const onRegister = () => {
    // console.log(state);
    // console.log(state.login.nativeEvent.text);
    setState(initialState);
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <ImageBackground source={imageBackground} style={styles.imageBackground}>
        <View
          style={{
            ...styles.background,
            marginBottom: isShowKeyboard ? -175 : 0,
          }}
          onPress={keyboardHide}
        >
          <View style={styles.photo}>
            <View style={styles.addPhoto}>
              <TouchableOpacity>
                {/* <SvgUri
                width="100%"
                height="100%"
                uri="http://thenewcode.com/assets/images/thumbnails/homer-simpson.svg"
              /> */}
                {/* <Logo width="100%" height="100%" /> */}
                {isShowKeyboard ? (
                  <Image
                    source={require("../assets/icons/del.png")}
                    style={{ width: 40, height: 40 }}
                  />
                ) : (
                  <Image
                    source={require("../assets/icons/add.png")}
                    style={{ width: 25, height: 25 }}
                  />
                )}
              </TouchableOpacity>
            </View>
            {/* <AiOutlinePlusCircle size={25} fill="#FF6C00" /> */}
          </View>
          <Text style={styles.title}>Регистрация</Text>
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="Логин"
              placeholderTextColor="#BDBDBD"
              // maxLength={40}
              onFocus={() => {
                setIsShowKeyboard(true);
              }}
              onBlur={() => {
                setIsShowKeyboard(false);
              }}
              value={state.login}
              onChange={(value) =>
                setState((prevState) => ({ ...prevState, login: value }))
              }
              // onEndEditing={() => {
              // console.log("end");
              // setIsShowKeyboard(false);
              // }}
            />
            <TextInput
              style={styles.input}
              placeholder="Адрес электронной почты"
              placeholderTextColor="#BDBDBD"
              onFocus={() => {
                setIsShowKeyboard(true);
              }}
              onBlur={() => {
                setIsShowKeyboard(false);
              }}
              value={state.email}
              onChange={(value) =>
                setState((prevState) => ({ ...prevState, email: value }))
              }
            />
            <TextInput
              style={styles.input}
              placeholder="Пароль"
              placeholderTextColor="#BDBDBD"
              secureTextEntry={isShowPassword}
              onFocus={() => {
                setIsShowKeyboard(true);
              }}
              onBlur={() => {
                setIsShowKeyboard(false);
              }}
              value={state.password}
              onChange={(value) =>
                setState((prevState) => ({ ...prevState, password: value }))
              }
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
          <TouchableOpacity
            style={styles.registrationBtn}
            activeOpacity={0.7}
            onPress={onRegister}
          >
            <Text style={styles.registrationBtnText}>Зарегистрироваться</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={1}>
            <Text style={styles.enterText} onPress={toggleScreen}>
              Уже есть аккаунт? Войти
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

    height: 549,
    backgroundColor: "#FFFFFF",
  },

  photo: {
    position: "absolute",
    top: -60,
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    // borderWidth: 1,
    // borderColor: "black",
  },

  addPhoto: {
    position: "absolute",
    right: -12.5,
    bottom: 14,
    justifyContent: "center",
    alignItems: "center",
    width: 25,
    height: 25,
    borderWidth: 1,
    borderColor: "transparent",
    backgroundColor: "#FFFFFF",
    borderRadius: 100,
  },

  title: {
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    lineHeight: 35.16,
    marginTop: 92,
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
    // marginLeft: 16,
    // marginRight: 16,

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

export default RegistrationScreen;

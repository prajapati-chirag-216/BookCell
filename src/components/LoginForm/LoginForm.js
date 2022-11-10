import React, {
  useState,
  useRef,
  useContext,
  useReducer,
  useEffect,
} from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { faKey, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import LoginContext from "../../store/LoginContext";
import typing_audio from "../../static/typing.mp3";

const initialState = {
  value: "",
  isValid: false,
};

const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.includes("@") };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") };
  }
  return initialState;
};
const passwordReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
  return initialState;
};

const LoginForm = () => {
  const audio = new Audio(typing_audio);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const [formIsValid, setFormIsValid] = useState(false);
  const ctx = useContext(LoginContext);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);

    return () => {
      clearTimeout(identifier);
    };
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "USER_INPUT", val: event.target.value });
  };
  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: "USER_INPUT", val: event.target.value });
  };
  const validateEmailHandler = () => {
    audio.pause();
    dispatchEmail({ type: "INPUT_BLUR" });
  };
  const validatePasswordHandler = () => {
    audio.pause();
    dispatchPassword({ type: "INPUT_BLUR" });
  };
  const playAudioHandler = () => {
    audio.play();
  };
  const formSubmitHandler = (event) => {
    event.preventDefault();
    audio.pause();

    if (formIsValid) {
      ctx.onLogin(emailState.value, passwordState.value);
    } else if (!emailIsValid) {
      emailInputRef.current.focus();
    } else {
      passwordInputRef.current.focus();
    }
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <Input
        ref={emailInputRef}
        onChange={emailChangeHandler}
        onBlur={validateEmailHandler}
        onKeyDown={playAudioHandler}
        value={emailState.value}
        id="email"
        type="email"
        label="email"
        icon={faEnvelope}
        isValid={emailIsValid}
      />
      <Input
        ref={passwordInputRef}
        onChange={passwordChangeHandler}
        onBlur={validatePasswordHandler}
        onKeyDown={playAudioHandler}
        value={passwordState.value}
        id="password"
        type="password"
        label="password"
        icon={faKey}
        isValid={passwordIsValid}
      />
      <Button formIsValid={formIsValid} type="submit" />
    </form>
  );
};
export default LoginForm;

import axios from "axios";
import { FormValues } from "../types/types";

export const getLogInToken = async (userValues: FormValues) => {
  try {
    const req = await axios.post(
      "http://challenge-react.alkemy.org/",
      userValues
    );
    const response = req.data;
    return response;
  } catch (err) {
    throw new Error("Usuario Incorrecto");
  }
};

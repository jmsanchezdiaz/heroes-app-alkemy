import { FormValues } from "../types/types";
import { getUniqueToken } from "./getUniqueToken";

export const getLogInToken = (userValues: FormValues) => {
  const validUser: FormValues = {
    email: "challenge@alkemy.org",
    password: "react",
  };

  const emailMatch = validUser.email === userValues.email;
  const passwordMatch = validUser.password === userValues.password;

  if (emailMatch && passwordMatch) {
    const token = getUniqueToken();
    return Promise.resolve(token);
  }

  return Promise.reject("Wrong User");
};

import { APP_AUTH_USERNAME, APP_AUTH_PASSWORD } from "$env/static/private";
import {
  createLoginSessionFile,
  deleteLoginSessionFile,
  getLoginSessionFile,
  loginSessionFileExists,
  updateLoginSessionFile,
} from "./fs.server";

export function login(username: string, password: string) {
  const loginState =
    username === APP_AUTH_USERNAME && password === APP_AUTH_PASSWORD;
  if (loginState) {
    return createLoginSessionFile();
  }
  return null;
}

export function logout(sessionId: string) {
  deleteLoginSessionFile(sessionId);
}

export function isLogged(sessionId: string) {
  if (loginSessionFileExists(sessionId)) {
    const fileContent = getLoginSessionFile(sessionId);
    const jsonContent = JSON.parse(fileContent);

    if (jsonContent.expiration < Date.now()) {
      deleteLoginSessionFile(sessionId);
      return false;
    } else {
      // refresh expiration
      let date = new Date();
      date.setMinutes(date.getMinutes() + 30);
      jsonContent.expiration = date.getTime()
      updateLoginSessionFile(sessionId, jsonContent)
      return true;
    }
  } else {
    return false;
  }
}

const TokenKey = "backstage-admin-token";

export function getToken() {
  return localStorage.getItem(TokenKey);
}

export function setToken(token) {
  return localStorage.setItem(TokenKey, token);
}

export function removeToken() {
  return localStorage.removeItem(TokenKey);
}

export function getSession(key) {
  return sessionStorage.getItem(key);
}

export function setSession(key, value) {
  return sessionStorage.setItem(key, value);
}

export function removeSession(key) {
  return sessionStorage.removeItem(key);
}

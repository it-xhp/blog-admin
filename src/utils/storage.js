const TokenKey = 'token'
export default {
  saveLocalString(key, value) {
    window.localStorage.setItem(key, value)
  },
  getSelectionString(key) {
    return window.localStorage.getItem(key)
  },
  saveLocalObject(key, value) {
    window.localStorage.setItem(key, JSON.stringify(value))
  },
  getLocalObject(key) {
    return JSON.parse(window.localStorage.getItem(key))
  },
  remove(key) {
    return window.localStorage.removeItem(key)
  },
  removeToken() {
    window.localStorage.removeItem(TokenKey)
  },
  saveToken(value) {
    window.localStorage.setItem(TokenKey, value)
  },
  getToken() {
    return window.localStorage.getItem(TokenKey)
  }
}

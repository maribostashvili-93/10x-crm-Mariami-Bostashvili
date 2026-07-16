const STORAGE_KEYS = {
  users: 'crm_users',
  session: 'crm_session',
  clients: 'crm_clients',
  theme: 'crm_theme',
};

function saveToStorage(key, value) {
  try {
    const stringValue = JSON.stringify(value);
    localStorage.setItem(key, stringValue);
  } catch (error) {
    console.error('Error saving to storage:', error);
  }
}

function getFromStorage(key, fallbackValue = null) {
  const storedValue = localStorage.getItem(key);

  if (storedValue === null) {
    return fallbackValue;
  }

  try {
    return JSON.parse(storedValue);
  } catch (error) {
    console.error('Error parsing from storage:', error);
    return fallbackValue;
  }
}

function removeFromStorage(key) {
  localStorage.removeItem(key);
}

//  Users
function getUsers() {
  return getFromStorage(STORAGE_KEYS.users, []);
}

function saveUsers(users) {
  saveToStorage(STORAGE_KEYS.users, users);
}

//  Session
function getSession() {
  return getFromStorage(STORAGE_KEYS.session, null);
}

function saveSession(session) {
  saveToStorage(STORAGE_KEYS.session, session);
}

function clearSession() {
  removeFromStorage(STORAGE_KEYS.session);
}

//  Clients
function getClients() {
  return getFromStorage(STORAGE_KEYS.clients, []);
}

function saveClients(clients) {
  saveToStorage(STORAGE_KEYS.clients, clients);
}

function clearClients() {
  removeFromStorage(STORAGE_KEYS.clients);
}

//  Theme
function getTheme() {
  return getFromStorage(STORAGE_KEYS.theme, 'light');
}

function saveTheme(theme) {
  saveToStorage(STORAGE_KEYS.theme, theme);
}

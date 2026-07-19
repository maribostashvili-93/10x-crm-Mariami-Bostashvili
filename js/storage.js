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

// The full record of whoever is logged in, or null.
// The session only stores userId, so the up to date data lives in crm_users -
// that way a name changed on the profile page is visible everywhere at once.
function getCurrentUser() {
  const session = getSession();
  if (!session) {
    return null;
  }

  return (
    getUsers().find(function (user) {
      return user.id === session.userId;
    }) || null
  );
}

//  Clients
function getClients() {
  return getFromStorage(STORAGE_KEYS.clients, null);
}

function saveClients(clients) {
  saveToStorage(STORAGE_KEYS.clients, clients);
}

function clearClients() {
  removeFromStorage(STORAGE_KEYS.clients);
}

//  Theme
function getTheme() {
  return localStorage.getItem(STORAGE_KEYS.theme) || 'light';
}

function saveTheme(theme) {
  localStorage.setItem(STORAGE_KEYS.theme, theme);
}

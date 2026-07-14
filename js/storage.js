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

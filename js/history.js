const HISTORY_KEY = "passwordHistory";

function getPasswordHistory() {
  const history = localStorage.getItem(HISTORY_KEY);
  return history ? JSON.parse(history) : [];
}

function savePassword(password) {
  const history = getPasswordHistory();

  history.unshift({
    password,
    createdAt: getCurrentDateTime(),
  });
  if (history.length > 5) {
    history.pop();
  }
  localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
}

function clearPasswordHistory() {
  localStorage.removeItem(HISTORY_KEY);
}

function deletePassword(index) {
  const history = getPasswordHistory();
  history.splice(index, 1);

  localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
}

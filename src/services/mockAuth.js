const AUTH_ACCOUNTS_KEY = "xedapmarket_accounts";
const AUTH_SESSION_KEY = "xedapmarket_session_user";

function readJson(key, fallbackValue) {
  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) return fallbackValue;
    const parsed = JSON.parse(raw);
    return parsed ?? fallbackValue;
  } catch {
    return fallbackValue;
  }
}

function writeJson(key, value) {
  window.localStorage.setItem(key, JSON.stringify(value));
}

export function getAccounts() {
  return readJson(AUTH_ACCOUNTS_KEY, []);
}

export function getSessionUser() {
  return readJson(AUTH_SESSION_KEY, null);
}

export function clearSessionUser() {
  window.localStorage.removeItem(AUTH_SESSION_KEY);
}

export function registerUser({ fullName, email, password }) {
  const normalizedEmail = email.trim().toLowerCase();
  const accounts = getAccounts();
  const emailExists = accounts.some((account) => account.email === normalizedEmail);

  if (emailExists) {
    return { ok: false, error: "EMAIL_EXISTS" };
  }

  const nextAccounts = [
    ...accounts,
    {
      id: Date.now(),
      fullName: fullName.trim(),
      email: normalizedEmail,
      password,
      createdAt: new Date().toISOString(),
    },
  ];

  writeJson(AUTH_ACCOUNTS_KEY, nextAccounts);
  return { ok: true };
}

export function loginUser({ email, password }) {
  const normalizedEmail = email.trim().toLowerCase();
  const accounts = getAccounts();
  const account = accounts.find((item) => item.email === normalizedEmail);

  if (!account) {
    return { ok: false, error: "NOT_FOUND" };
  }

  if (account.password !== password) {
    return { ok: false, error: "INVALID_PASSWORD" };
  }

  const sessionUser = {
    fullName: account.fullName,
    email: account.email,
  };
  writeJson(AUTH_SESSION_KEY, sessionUser);
  return { ok: true, user: sessionUser };
}

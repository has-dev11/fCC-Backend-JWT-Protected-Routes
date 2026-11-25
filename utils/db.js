import path from "path";
const DB_PATH = path.join(import.meta.dirname, "../data/users.json");

import fs from 'node:fs';

export function readUsers() {
  const raw = fs.readFileSync(DB_PATH, 'utf8').trim();
  if (!raw) {
    return [];
  }
  return JSON.parse(raw);
}

export function writeUsers(users) {
  const formatted = `${JSON.stringify(users, null, 2)}\n`;
  fs.writeFileSync(DB_PATH, formatted, 'utf8');
}

export function findByEmail(email) {
  return readUsers().find((u) => u.email === email) || null;
}

export function findById(id) {
  return readUsers().find((u) => u.id === id) || null;
}
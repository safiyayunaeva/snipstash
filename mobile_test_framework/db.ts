import Database from "better-sqlite3";
import path from "path";

const dbPath = path.join(process.cwd(), "data.db");
export const db = new Database(dbPath);

db.exec(`
  CREATE TABLE IF NOT EXISTS items (
    itemId TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    currentHolderEmail TEXT,
    updatedAt TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS transfers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    itemId TEXT NOT NULL,
    fromEmail TEXT,
    toEmail TEXT NOT NULL,
    actorEmail TEXT NOT NULL,
    createdAt TEXT NOT NULL
  );
`);

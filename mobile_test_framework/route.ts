import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  const items = db
    .prepare("SELECT * FROM items ORDER BY updatedAt DESC")
    .all();
  return NextResponse.json(items);
}

export async function POST(req: Request) {
  const { itemId, name, currentHolderEmail } = await req.json();

  if (!itemId || !name) {
    return NextResponse.json(
      { error: "itemId and name are required" },
      { status: 400 }
    );
  }

  try {
    db.prepare(
      `INSERT INTO items (itemId, name, currentHolderEmail, updatedAt)
       VALUES (?, ?, ?, ?)`
    ).run(
      itemId,
      name,
      currentHolderEmail || null,
      new Date().toISOString()
    );

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Item already exists" },
      { status: 409 }
    );
  }
}

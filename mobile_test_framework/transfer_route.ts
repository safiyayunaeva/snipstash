import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(req: Request) {
  const { itemId, actorEmail, toEmail } = await req.json();

  if (!itemId || !actorEmail || !toEmail) {
    return NextResponse.json(
      { error: "Missing fields" },
      { status: 400 }
    );
  }

  const item = db
    .prepare("SELECT currentHolderEmail FROM items WHERE itemId = ?")
    .get(itemId);

  if (!item) {
    return NextResponse.json(
      { error: "Item not found" },
      { status: 404 }
    );
  }

  const now = new Date().toISOString();

  const tx = db.transaction(() => {
    db.prepare(
      `INSERT INTO transfers
       (itemId, fromEmail, toEmail, actorEmail, createdAt)
       VALUES (?, ?, ?, ?, ?)`
    ).run(
      itemId,
      item.currentHolderEmail,
      toEmail,
      actorEmail,
      now
    );

    db.prepare(
      `UPDATE items
       SET currentHolderEmail = ?, updatedAt = ?
       WHERE itemId = ?`
    ).run(toEmail, now, itemId);
  });

  tx();
  return NextResponse.json({ ok: true });
}

"use client";

import { useState } from "react";

export default function TransferPage() {
  const [itemId, setItemId] = useState("");
  const [actorEmail, setActorEmail] = useState("");
  const [toEmail, setToEmail] = useState("");
  const [msg, setMsg] = useState("");

  async function transfer() {
    const res = await fetch("/api/transfer", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ itemId, actorEmail, toEmail }),
    });

    const data = await res.json();
    setMsg(res.ok ? "Transferred" : data.error);
  }

  return (
    <div>
      <h1>Transfer item</h1>

      Item ID:{" "}
      <input value={itemId} onChange={e => setItemId(e.target.value)} /><br />
      Actor email:{" "}
      <input value={actorEmail} onChange={e => setActorEmail(e.target.value)} /><br />
      New holder email:{" "}
      <input value={toEmail} onChange={e => setToEmail(e.target.value)} /><br />
      <button onClick={transfer}>Transfer</button>

      <div>{msg}</div>

      <p>
        <a href="/">Back to items</a>
      </p>
    </div>
  );
}

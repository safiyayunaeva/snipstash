"use client";

import { useEffect, useState } from "react";

type Item = {
  itemId: string;
  name: string;
  currentHolderEmail: string | null;
  updatedAt: string;
};

export default function Page() {
  const [items, setItems] = useState<Item[]>([]);
  const [itemId, setItemId] = useState("");
  const [name, setName] = useState("");
  const [holder, setHolder] = useState("");

  async function load() {
    const res = await fetch("/api/items");
    setItems(await res.json());
  }

  async function createItem() {
    await fetch("/api/items", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        itemId,
        name,
        currentHolderEmail: holder,
      }),
    });
    setItemId("");
    setName("");
    setHolder("");
    load();
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <div>
      <h1>Items</h1>

      <h3>Create item</h3>
      <div>
        Item ID:{" "}
        <input value={itemId} onChange={e => setItemId(e.target.value)} /><br />
        Name:{" "}
        <input value={name} onChange={e => setName(e.target.value)} /><br />
        Holder email:{" "}
        <input value={holder} onChange={e => setHolder(e.target.value)} /><br />
        <button onClick={createItem}>Create</button>
      </div>

      <h3>Item list</h3>
      <table border={1} cellPadding={5}>
        <thead>
          <tr>
            <th>Item ID</th>
            <th>Name</th>
            <th>Current holder</th>
            <th>Updated</th>
          </tr>
        </thead>
        <tbody>
          {items.map(i => (
            <tr key={i.itemId}>
              <td>{i.itemId}</td>
              <td>{i.name}</td>
              <td>{i.currentHolderEmail || "-"}</td>
              <td>{new Date(i.updatedAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p>
        <a href="/transfer">Go to transfer page</a>
      </p>
    </div>
  );
}

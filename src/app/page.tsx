'use client';

import { useState, useEffect } from 'react';

interface User {
    id: number;
    name: string;
    email: string;
}

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('/api/users')
        .then((res) => res.json())
        .then((data) => setUsers(data));
  }, []);

  return (
      <main className="p-4">
        <h1 className="text-2xl font-bold mb-4">Users</h1>
        <ul>
          {users.map((user: User) => (
              <li key={user.id}>{user.name} ({user.email})</li>
          ))}
        </ul>
      </main>
  );
}
"use client";

import "./globalStyle.css";
import { container, header, footer } from "./page.css";
import { useUsers } from "./hooks/useUsers";

export default function Home() {
  const { users, isLoading, isError } = useUsers();

  if (isError) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <>
      <header className={header}>ヘッダー</header>
      <main className={container}>
        <div>hello, prisma!</div>
        {users.map((user) => {
          const { id, name, email } = user;
          return (
            <div>
              <p>id: {id}</p>
              <p>name: {name}</p>
              <p>email: {email}</p>
            </div>
          );
        })}
      </main>
      <footer className={footer}>フッター</footer>
    </>
  );
}

"use client";

export default function Home() {
  return (
    <main>
      <button onClick={async () => {
        await fetch("/api/emails", {
          method: "POST",
          body: JSON.stringify({
            email: "edit.werbel@gmail.com",
            firstName: "Edith",
          })
        });
        // await fetch("/api/emails/welcome");
      }}>
        Send Email
      </button>
    </main>
  )
}
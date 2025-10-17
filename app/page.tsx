export default function HomePage() {
  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      gap: '0.75rem',
      padding: '2rem'
    }}>
      <h1 style={{ fontSize: '2.5rem', lineHeight: 1.2, margin: 0 }}>Welcome 👋</h1>
      <p style={{ color: '#555', margin: 0 }}>Your Next.js app is live.</p>
    </main>
  );
}

import React from 'react';
import Head from 'next/head';

const APIHome: React.FC = () => {
  const styles = {
    container: {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column' as const,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#0f172a',
      color: '#e2e8f0',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      padding: '2rem',
      margin: 0,
    },
    card: {
      backgroundColor: '#1e293b',
      borderRadius: '16px',
      padding: '3rem 2.5rem',
      maxWidth: '600px',
      width: '100%',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
      border: '1px solid #334155',
      textAlign: 'center' as const,
    },
    badge: {
      display: 'inline-block',
      backgroundColor: '#3b82f6',
      color: '#fff',
      fontSize: '0.75rem',
      fontWeight: 600,
      letterSpacing: '0.1em',
      textTransform: 'uppercase' as const,
      padding: '0.35rem 0.9rem',
      borderRadius: '9999px',
      marginBottom: '1.5rem',
    },
    title: {
      fontSize: '2.5rem',
      fontWeight: 700,
      margin: '0 0 0.75rem 0',
      background: 'linear-gradient(135deg, #60a5fa, #a78bfa)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    },
    subtitle: {
      fontSize: '1.1rem',
      color: '#94a3b8',
      margin: '0 0 2rem 0',
      lineHeight: 1.6,
    },
    divider: {
      height: '1px',
      backgroundColor: '#334155',
      margin: '2rem 0',
      border: 'none',
    },
    endpointList: {
      textAlign: 'left' as const,
      margin: '0 0 2rem 0',
    },
    endpointTitle: {
      fontSize: '0.875rem',
      fontWeight: 600,
      color: '#94a3b8',
      textTransform: 'uppercase' as const,
      letterSpacing: '0.05em',
      marginBottom: '0.75rem',
    },
    endpoint: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      padding: '0.6rem 0.9rem',
      backgroundColor: '#0f172a',
      borderRadius: '8px',
      marginBottom: '0.5rem',
      fontFamily: "'Fira Code', 'Courier New', monospace",
      fontSize: '0.9rem',
    },
    method: {
      fontSize: '0.7rem',
      fontWeight: 700,
      padding: '0.2rem 0.5rem',
      borderRadius: '4px',
      color: '#fff',
      minWidth: '48px',
      textAlign: 'center' as const,
    },
    get: { backgroundColor: '#10b981' },
    post: { backgroundColor: '#3b82f6' },
    path: {
      color: '#e2e8f0',
    },
    footer: {
      marginTop: '2rem',
      fontSize: '0.85rem',
      color: '#64748b',
    },
    statusDot: {
      display: 'inline-block',
      width: '8px',
      height: '8px',
      borderRadius: '50%',
      backgroundColor: '#10b981',
      marginRight: '0.5rem',
      boxShadow: '0 0 8px #10b981',
    },
  };

  return (
    <>
      <Head>
        <title>Qweetly Studios API</title>
        <meta name="description" content="Qweetly Studios API — Developer REST API" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Fira+Code&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main style={styles.container}>
        <div style={styles.card}>
          <span style={styles.badge}>API</span>

          <h1 style={styles.title}>Qweetly Studios API</h1>

          <p style={styles.subtitle}>
            A developer REST API for Qweetly Studios services.
            <br />
            Programmatic access to our platform.
          </p>

          <hr style={styles.divider} />

          <div style={styles.endpointList}>
            <div style={styles.endpointTitle}>Endpoints</div>

            <div style={styles.endpoint}>
              <span style={{ ...styles.method, ...styles.get }}>GET</span>
              <span style={styles.path}>/status</span>
            </div>

            <div style={styles.endpoint}>
              <span style={{ ...styles.method, ...styles.get }}>GET</span>
              <span style={styles.path}>/v1/health</span>
            </div>

            <div style={styles.endpoint}>
              <span style={{ ...styles.method, ...styles.post }}>POST</span>
              <span style={styles.path}>/v1/query</span>
            </div>
          </div>

          <hr style={styles.divider} />

          <div style={styles.footer}>
            <span style={styles.statusDot} />
            Service operational &middot; api.qweetlystudios.workers.dev.
          </div>
        </div>
      </main>
    </>
  );
};

export default APIHome;

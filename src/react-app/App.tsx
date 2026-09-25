import React, { useState } from 'react';
import Head from 'next/head';

const APIHome: React.FC = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const baseUrl = 'https://api.qweetlystudios.workers.dev';

  const endpoints = [
    { method: 'GET', path: '/v1/status', desc: 'Check API service status and uptime' },
    { method: 'GET', path: '/v1/health', desc: 'Health check for monitoring systems' },
    { method: 'GET', path: '/v1/version', desc: 'Current API version information' },
    { method: 'POST', path: '/v1/query', desc: 'Submit a query to Qweetly Studios' },
    { method: 'POST', path: '/v1/auth/token', desc: 'Generate an authentication token' },
    { method: 'GET', path: '/v1/user/me', desc: 'Retrieve authenticated user details' },
  ];

  const methodColors: Record<string, string> = {
    GET: '#10b981',
    POST: '#3b82f6',
    PUT: '#f59e0b',
    DELETE: '#ef4444',
    PATCH: '#a855f7',
  };

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard?.writeText(text);
    setCopied(key);
    setTimeout(() => setCopied(null), 1500);
  };

  const styles: Record<string, React.CSSProperties> = {
    page: {
      minHeight: '100vh',
      backgroundColor: '#0a0e1a',
      color: '#e2e8f0',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
    },
    nav: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '1rem 2rem',
      borderBottom: '1px solid #1e293b',
      backgroundColor: 'rgba(10, 14, 26, 0.8)',
      backdropFilter: 'blur(12px)',
      position: 'sticky' as const,
      top: 0,
      zIndex: 100,
    },
    brand: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.6rem',
      fontWeight: 700,
      fontSize: '1.05rem',
      color: '#e2e8f0',
      textDecoration: 'none',
    },
    logo: {
      width: '28px',
      height: '28px',
      borderRadius: '8px',
      background: 'linear-gradient(135deg, #60a5fa, #a78bfa)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '0.85rem',
      fontWeight: 800,
      color: '#0a0e1a',
    },
    navLinks: {
      display: 'flex',
      gap: '1.75rem',
      alignItems: 'center',
    },
    navLink: {
      color: '#94a3b8',
      textDecoration: 'none',
      fontSize: '0.9rem',
      fontWeight: 500,
      transition: 'color 0.2s',
    },
    navCta: {
      padding: '0.5rem 1rem',
      backgroundColor: '#3b82f6',
      color: '#fff',
      borderRadius: '8px',
      fontSize: '0.85rem',
      fontWeight: 600,
      textDecoration: 'none',
    },
    hero: {
      padding: '5rem 2rem 3rem',
      textAlign: 'center' as const,
      maxWidth: '900px',
      margin: '0 auto',
      width: '100%',
    },
    badge: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.5rem',
      backgroundColor: 'rgba(16, 185, 129, 0.1)',
      border: '1px solid rgba(16, 185, 129, 0.3)',
      color: '#10b981',
      fontSize: '0.75rem',
      fontWeight: 600,
      letterSpacing: '0.05em',
      padding: '0.35rem 0.9rem',
      borderRadius: '9999px',
      marginBottom: '1.5rem',
    },
    dot: {
      width: '6px',
      height: '6px',
      borderRadius: '50%',
      backgroundColor: '#10b981',
      boxShadow: '0 0 8px #10b981',
    },
    h1: {
      fontSize: 'clamp(2rem, 5vw, 3.25rem)',
      fontWeight: 800,
      margin: '0 0 1rem 0',
      lineHeight: 1.15,
      letterSpacing: '-0.02em',
      background: 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 50%, #f472b6 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    },
    lead: {
      fontSize: '1.15rem',
      color: '#94a3b8',
      margin: '0 auto 2rem',
      lineHeight: 1.65,
      maxWidth: '620px',
    },
    baseUrlBox: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '1rem',
      maxWidth: '520px',
      margin: '0 auto',
      padding: '0.85rem 1rem',
      backgroundColor: '#111827',
      border: '1px solid #1e293b',
      borderRadius: '10px',
      fontFamily: "'Fira Code', 'Courier New', monospace",
      fontSize: '0.9rem',
      color: '#e2e8f0',
    },
    copyBtn: {
      padding: '0.4rem 0.75rem',
      backgroundColor: '#1e293b',
      color: '#cbd5e1',
      border: '1px solid #334155',
      borderRadius: '6px',
      fontSize: '0.75rem',
      fontWeight: 600,
      cursor: 'pointer',
      whiteSpace: 'nowrap' as const,
      transition: 'all 0.15s',
    },
    heroBtns: {
      display: 'flex',
      gap: '0.75rem',
      justifyContent: 'center',
      marginTop: '1.75rem',
      flexWrap: 'wrap' as const,
    },
    primaryBtn: {
      padding: '0.75rem 1.5rem',
      background: 'linear-gradient(135deg, #3b82f6, #6366f1)',
      color: '#fff',
      borderRadius: '10px',
      fontSize: '0.95rem',
      fontWeight: 600,
      textDecoration: 'none',
      border: 'none',
      cursor: 'pointer',
      boxShadow: '0 8px 24px -6px rgba(59, 130, 246, 0.5)',
    },
    secondaryBtn: {
      padding: '0.75rem 1.5rem',
      backgroundColor: 'transparent',
      color: '#e2e8f0',
      borderRadius: '10px',
      fontSize: '0.95rem',
      fontWeight: 600,
      textDecoration: 'none',
      border: '1px solid #334155',
      cursor: 'pointer',
    },
    section: {
      maxWidth: '960px',
      margin: '0 auto',
      padding: '2rem',
      width: '100%',
    },
    sectionTitle: {
      fontSize: '1.5rem',
      fontWeight: 700,
      margin: '0 0 0.5rem 0',
      color: '#f1f5f9',
    },
    sectionSub: {
      color: '#94a3b8',
      margin: '0 0 1.75rem 0',
      fontSize: '0.95rem',
    },
    endpointCard: {
      backgroundColor: '#0f1623',
      border: '1px solid #1e293b',
      borderRadius: '12px',
      overflow: 'hidden',
    },
    endpointRow: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      padding: '0.9rem 1.25rem',
      borderBottom: '1px solid #1e293b',
    },
    method: {
      fontSize: '0.7rem',
      fontWeight: 700,
      padding: '0.25rem 0.55rem',
      borderRadius: '5px',
      color: '#fff',
      minWidth: '54px',
      textAlign: 'center' as const,
      letterSpacing: '0.03em',
    },
    path: {
      fontFamily: "'Fira Code', 'Courier New', monospace",
      fontSize: '0.9rem',
      color: '#e2e8f0',
      minWidth: '180px',
    },
    desc: {
      color: '#94a3b8',
      fontSize: '0.875rem',
      marginLeft: 'auto',
      textAlign: 'right' as const,
    },
    codeBlock: {
      backgroundColor: '#0f1623',
      border: '1px solid #1e293b',
      borderRadius: '12px',
      padding: '1.25rem',
      fontFamily: "'Fira Code', 'Courier New', monospace",
      fontSize: '0.85rem',
      color: '#cbd5e1',
      overflowX: 'auto' as const,
      lineHeight: 1.7,
    },
    codeHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '0.75rem',
      paddingBottom: '0.75rem',
      borderBottom: '1px solid #1e293b',
    },
    codeLabel: {
      fontSize: '0.75rem',
      color: '#64748b',
      fontWeight: 600,
      letterSpacing: '0.05em',
      textTransform: 'uppercase' as const,
    },
    features: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
      gap: '1rem',
    },
    feature: {
      backgroundColor: '#0f1623',
      border: '1px solid #1e293b',
      borderRadius: '12px',
      padding: '1.5rem',
      textAlign: 'left' as const,
    },
    featureIcon: {
      fontSize: '1.5rem',
      marginBottom: '0.75rem',
    },
    featureTitle: {
      fontSize: '1rem',
      fontWeight: 700,
      color: '#f1f5f9',
      margin: '0 0 0.4rem 0',
    },
    featureDesc: {
      fontSize: '0.875rem',
      color: '#94a3b8',
      lineHeight: 1.6,
      margin: 0,
    },
    footer: {
      marginTop: 'auto',
      borderTop: '1px solid #1e293b',
      padding: '2rem',
      textAlign: 'center' as const,
      color: '#64748b',
      fontSize: '0.85rem',
    },
    footerLinks: {
      display: 'flex',
      gap: '1.5rem',
      justifyContent: 'center',
      marginBottom: '1rem',
      flexWrap: 'wrap' as const,
    },
    footerLink: {
      color: '#94a3b8',
      textDecoration: 'none',
      fontSize: '0.85rem',
    },
  };

  return (
    <>
      <Head>
        <title>Qweetly Studios API — Developer REST API</title>
        <meta
          name="description"
          content="The Qweetly Studios API — a developer REST API for programmatic access to Qweetly Studios services."
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Fira+Code&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div style={styles.page}>
        {/* NAV */}
        <nav style={styles.nav}>
          <a href="/" style={styles.brand}>
            <span style={styles.logo}>Q</span>
            Qweetly Studios <span style={{ color: '#64748b', fontWeight: 400 }}>/ API</span>
          </a>
          <div style={styles.navLinks}>
            <a href="#endpoints" style={styles.navLink}>Endpoints</a>
            <a href="#quickstart" style={styles.navLink}>Quickstart</a>
            <a href="#features" style={styles.navLink}>Features</a>
            <a href="#docs" style={styles.navCta}>Docs</a>
          </div>
        </nav>

        {/* HERO */}
        <header style={styles.hero}>
          <div style={styles.badge}>
            <span style={styles.dot} />
            All systems operational
          </div>
          <h1 style={styles.h1}>The Qweetly Studios API</h1>
          <p style={styles.lead}>
            A fast, reliable REST API for programmatic access to Qweetly Studios services.
            Built for developers, documented for humans.
          </p>

          <div style={styles.baseUrlBox}>
            <span>{baseUrl}</span>
            <button
              style={styles.copyBtn}
              onClick={() => copyToClipboard(baseUrl, 'base')}
            >
              {copied === 'base' ? '✓ Copied' : 'Copy'}
            </button>
          </div>

          <div style={styles.heroBtns}>
            <a href="#docs" style={styles.primaryBtn}>Read the Docs</a>
            <a href="#quickstart" style={styles.secondaryBtn}>Quickstart →</a>
          </div>
        </header>

        {/* ENDPOINTS */}
        <section id="endpoints" style={styles.section}>
          <h2 style={styles.sectionTitle}>Endpoints</h2>
          <p style={styles.sectionSub}>
            All endpoints are prefixed with <code style={{ color: '#a78bfa' }}>{baseUrl}</code>
          </p>
          <div style={styles.endpointCard}>
            {endpoints.map((ep, i) => (
              <div
                key={ep.path}
                style={{
                  ...styles.endpointRow,
                  borderBottom: i === endpoints.length - 1 ? 'none' : '1px solid #1e293b',
                }}
              >
                <span
                  style={{
                    ...styles.method,
                    backgroundColor: methodColors[ep.method] || '#64748b',
                  }}
                >
                  {ep.method}
                </span>
                <span style={styles.path}>{ep.path}</span>
                <span style={styles.desc}>{ep.desc}</span>
              </div>
            ))}
          </div>
        </section>

        {/* QUICKSTART */}
        <section id="quickstart" style={styles.section}>
          <h2 style={styles.sectionTitle}>Quickstart</h2>
          <p style={styles.sectionSub}>Make your first request in seconds.</p>
          <div style={styles.codeBlock}>
            <div style={styles.codeHeader}>
              <span style={styles.codeLabel}>cURL</span>
              <button
                style={styles.copyBtn}
                onClick={() =>
                  copyToClipboard(
                    `curl ${baseUrl}/v1/status`,
                    'curl'
                  )
                }
              >
                {copied === 'curl' ? '✓ Copied' : 'Copy'}
              </button>
            </div>
            <div>
              <span style={{ color: '#f472b6' }}>curl</span>{' '}
              <span style={{ color: '#60a5fa' }}>{baseUrl}/v1/status</span>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section id="features" style={styles.section}>
          <h2 style={styles.sectionTitle}>Why Qweetly API</h2>
          <p style={styles.sectionSub}>Everything you need to build on our platform.</p>
          <div style={styles.features}>
            <div style={styles.feature}>
              <div style={styles.featureIcon}>⚡</div>
              <h3 style={styles.featureTitle}>Edge-fast</h3>
              <p style={styles.featureDesc}>
                Deployed on Cloudflare Workers for low-latency responses worldwide.
              </p>
            </div>
            <div style={styles.feature}>
              <div style={styles.featureIcon}>🔒</div>
              <h3 style={styles.featureTitle}>Secure</h3>
              <p style={styles.featureDesc}>
                Token-based authentication and HTTPS by default on every request.
              </p>
            </div>
            <div style={styles.feature}>
              <div style={styles.featureIcon}>📦</div>
              <h3 style={styles.featureTitle}>RESTful</h3>
              <p style={styles.featureDesc}>
                Predictable resource-oriented URLs with standard HTTP response codes.
              </p>
            </div>
            <div style={styles.feature}>
              <div style={styles.featureIcon}>📊</div>
              <h3 style={styles.featureTitle}>Observable</h3>
              <p style={styles.featureDesc}>
                Status and health endpoints for monitoring and uptime checks.
              </p>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer style={styles.footer}>
          <div style={styles.footerLinks}>
            <a href="#docs" style={styles.footerLink}>Documentation</a>
            <a href="#status" style={styles.footerLink}>Status</a>
            <a href="#support" style={styles.footerLink}>Support</a>
            <a href="#privacy" style={styles.footerLink}>Privacy</a>
            <a href="#terms" style={styles.footerLink}>Terms</a>
          </div>
          <div>
            © {new Date().getFullYear()} Qweetly Studios. All rights reserved.
          </div>
          <div style={{ marginTop: '0.5rem', fontFamily: "'Fira Code', monospace", fontSize: '0.78rem' }}>
            api.qweetlystudios.workers.dev
          </div>
        </footer>
      </div>
    </>
  );
};

export default APIHome;

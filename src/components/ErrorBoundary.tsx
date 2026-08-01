import React from 'react'

interface ErrorBoundaryProps {
  children: React.ReactNode
  fallback?: React.ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
  error: Error | null
}

export default class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo)
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null })
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) return this.props.fallback

      return (
        <div
          style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#0C0C0C',
            color: '#D7E2EA',
            fontFamily: 'Kanit, sans-serif',
            padding: '2rem',
            textAlign: 'center',
          }}
        >
          <h1 style={{ fontSize: 'clamp(2rem, 6vw, 4rem)', fontWeight: 800, marginBottom: '1rem' }}>
            Something went wrong
          </h1>
          <p style={{ opacity: 0.7, maxWidth: '480px', marginBottom: '1.5rem' }}>
            The app hit an unexpected error. Try reloading — if the problem persists, check the
            browser console for details.
          </p>
          <pre
            style={{
              maxWidth: '640px',
              overflow: 'auto',
              background: '#151515',
              padding: '1rem',
              borderRadius: '12px',
              fontSize: '0.8rem',
              color: '#ff6b6b',
              marginBottom: '1.5rem',
              textAlign: 'left',
            }}
          >
            {this.state.error?.message ?? 'Unknown error'}
          </pre>
          <button
            onClick={() => window.location.reload()}
            style={{
              padding: '0.75rem 1.5rem',
              borderRadius: '999px',
              border: '2px solid #D7E2EA',
              background: 'transparent',
              color: '#D7E2EA',
              cursor: 'pointer',
              fontWeight: 600,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
            }}
          >
            Reload page
          </button>
        </div>
      )
    }

    return this.props.children
  }
}
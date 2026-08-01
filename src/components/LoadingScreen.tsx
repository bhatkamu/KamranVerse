export default function LoadingScreen() {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0C0C0C',
        zIndex: 9999,
      }}
    >
      <div
        style={{
          width: '48px',
          height: '48px',
          border: '3px solid rgba(215, 226, 234, 0.15)',
          borderTopColor: '#D7E2EA',
          borderRadius: '50%',
          animation: 'app-spin 0.8s linear infinite',
        }}
      />
      <style>{`@keyframes app-spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  )
}
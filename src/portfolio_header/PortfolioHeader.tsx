import { useRouter } from 'next/navigation';

interface PortfolioHeaderProps {
  title: string,
  mainText: string,
  subText?: string,
}

const PortfolioHeader: React.FC<PortfolioHeaderProps> = ({title, mainText, subText}) => {
  const router = useRouter();

  const handleRoute = (route: string) => {
    router.push(route);
  };

  return (
    <header
      style={{
        backgroundColor: '#0070f3',
        padding: '2vh',
        color: '#fff',
        borderRadius: '10px',
        marginBottom: '2vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
      }}
    >
      <title>{ title }</title>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: 'clamp(30px, 2.5vw, 3rem)', margin: '0' }}>{mainText}</h1>
        {subText ? (
          <p style={{ fontSize: 'clamp(10px, 1vw, 2rem)', margin: '0' }}>{subText}</p>
        ) : (
          <div style={{ fontSize: 'clamp(10px, 1vw, 2rem)', margin: '0', visibility: 'hidden' }}>Placeholder</div>
        )}
      </div>

      <div
        style={{
          position: 'absolute',
          top: '70%',
          right: '2vw',
          transform: 'translateY(-50%)',
          display: 'flex',
          gap: '1.5vw',
        }}
      >
        <button
          style={{
            padding: '1vh 2vw',
            fontSize: 'clamp(8px, 1vw, 2rem)',
            backgroundColor: '#fff',
            color: '#0070f3',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'transform 0.2s',
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.2)')}
          onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          onClick={() => handleRoute('/')}
        >
          Home
        </button>

        <button
          style={{
            padding: '1vh 2vw',
            fontSize: 'clamp(8px, 1vw, 2rem)',
            backgroundColor: '#fff',
            color: '#0070f3',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'transform 0.2s',
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.2)')}
          onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          onClick={() => handleRoute('/about')}
        >
          About Me
        </button>
      </div>
    </header>
  );
};

export default PortfolioHeader;

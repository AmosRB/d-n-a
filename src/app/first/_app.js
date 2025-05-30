import '../globals.css';
import CodeDance3D from './components/CodeDance3D';

export default function App({ Component, pageProps }) {
  return (
    <>
      <CodeDance3D />
      <Component {...pageProps} />
    </>
  );
}

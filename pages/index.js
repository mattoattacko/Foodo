import Head from 'next/head';
import TopComponent from '../components/TopComponent';
import ServiceComponent from '../components/ServiceComponent';
import About from '../components/AboutComponent';
import DownloadComponent from '../components/DownloadComponent';
import ContactComponent from '../components/ContactComponent';


export default function Home() {
  return (
    <div>
      <Head>
        <title>FOODO - Landing Page</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
          integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We"
          crossorigin="anonymous"
        />
      </Head>

      <main>
        <TopComponent />
        <ServiceComponent />
        <About />
        <DownloadComponent />
        <ContactComponent />
      </main>;

      <footer className="footer">
      <h5>FOODO &copy; Matthew McQuain</h5>
        <script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>

        <script
          src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
          crossorigin></script>

        <script
          src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
          crossorigin></script>
      </footer>
    </div>
  );
}

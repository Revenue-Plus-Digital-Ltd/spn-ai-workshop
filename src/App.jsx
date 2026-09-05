import Header from './components/Header.jsx'
import HeroSection from './sections/HeroSection.jsx'
import WorkflowSection from './sections/WorkflowSection.jsx'
import AfterPRSection from './sections/AfterPRSection.jsx'
import Footer from './components/Footer.jsx'
import './styles.css'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#workflow">Skip to the workflow</a>
      <Header />
      <main id="main">
        <HeroSection />
        <WorkflowSection />
        <AfterPRSection />
      </main>
      <Footer />
    </>
  )
}

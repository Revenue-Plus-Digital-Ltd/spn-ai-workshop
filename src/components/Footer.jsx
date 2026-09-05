export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <p className="footer-brand">SPN AI Workshop</p>
          <p className="footer-note">
            A one-hour beginner session on the everyday Git workflow.
          </p>
        </div>
        <nav className="footer-links" aria-label="Footer">
          <a href="#workflow">Workflow</a>
          <a href="#after-pr">After the PR</a>
          <a
            href="https://github.com/Revenue-Plus-Digital-Ltd/spn-ai-workshop"
            target="_blank"
            rel="noreferrer"
          >
            Repository
          </a>
          <a href="#top">Back to top</a>
        </nav>
      </div>
      <p className="footer-copy">Revenue Plus Digital Ltd · Training site, not a client website.</p>
    </footer>
  )
}

export default function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top">
        <span className="brand-mark" aria-hidden="true">SPN</span>
        <span className="brand-name">SPN AI Workshop</span>
      </a>
      <nav className="site-nav" aria-label="Page sections">
        <a href="#workflow">Workflow</a>
        <a href="#after-pr">After the PR</a>
      </nav>
      <a
        className="btn btn-gold btn-small"
        href="https://github.com/Revenue-Plus-Digital-Ltd/spn-ai-workshop"
        target="_blank"
        rel="noreferrer"
      >
        View on GitHub
      </a>
    </header>
  )
}

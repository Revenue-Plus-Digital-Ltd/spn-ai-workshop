export default function HeroSection() {
  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <p className="eyebrow">Revenue Plus Digital · One-hour Git session</p>
        <h1 className="hero-title">Workshop headline goes here</h1>
        <p className="lead">
          A tiny website built for practicing the everyday Git workflow:
          clone the repository, create a branch, edit one file, commit,
          push, and open a pull request.
        </p>
        <div className="hero-actions">
          <a className="btn btn-gold" href="#workflow">
            View the Git Workflow
          </a>
          <a className="btn btn-outline" href="#after-pr">
            What happens after the PR
          </a>
        </div>
        <p className="hero-note">Participants: James · Macus · Therese</p>
      </div>

      <div className="hero-panel" aria-hidden="true">
        <p className="panel-label">Today you will type</p>
        <pre className="panel-code">
          <span className="prompt">$</span> git switch -c your-branch{'\n'}
          <span className="prompt">$</span> git add your-file{'\n'}
          <span className="prompt">$</span> git commit -m "fix: ..."{'\n'}
          <span className="prompt">$</span> git push -u origin your-branch
        </pre>
        <p className="panel-glow">then open a pull request</p>
      </div>
    </section>
  )
}

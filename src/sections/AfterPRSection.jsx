export default function AfterPRSection() {
  return (
    <section className="after-pr" id="after-pr">
      <div className="section-head">
        <p className="eyebrow">After you open the pull request</p>
        <h2>The reviewer takes it from here</h2>
        <p className="section-intro placeholder">
          Placeholder text: explain what happens after the pull request is
          submitted.
        </p>
      </div>

      <div className="cards-two">
        <div className="card">
          <h3>Merge</h3>
          <p>The reviewer adds approved work to main.</p>
        </div>
        <div className="card">
          <h3>Deploy</h3>
          <p>The updated main branch is published.</p>
        </div>
      </div>

      <div className="stop-box">
        <h3>You stop after submitting the PR</h3>
        <ul>
          <li>Do not approve your own pull request.</li>
          <li>Do not merge your pull request.</li>
          <li>Do not deploy the website.</li>
          <li>Do not push directly to main.</li>
        </ul>
      </div>
    </section>
  )
}

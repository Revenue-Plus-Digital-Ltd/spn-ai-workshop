const steps = [
  {
    title: 'Commit',
    text: 'Save a snapshot of your work locally.',
  },
  {
    title: 'Push',
    text: 'Upload your branch and its commits to GitHub.',
  },
  {
    title: 'Pull Request',
    text: 'Ask a reviewer to inspect your work.',
  },
  {
    title: 'Review',
    text: 'A teammate checks your changes and leaves feedback.',
  },
  {
    title: 'Merge',
    text: 'Combine your approved changes into main.',
  },
  {
    title: 'Deploy',
    text: 'Ship the updated main branch to production.',
  },
]

export default function WorkflowSection() {
  return (
    <section className="workflow" id="workflow">
      <div className="section-head">
        <p className="eyebrow">Your part of the workflow</p>
        <h2>Small steps, one at a time</h2>
        <p className="section-intro">
          Every participant follows the same path. The steps below are shown
          in the order you will do them.
        </p>
      </div>

      <p className="flow-line" aria-label="Workflow order">
        {steps.map((step) => step.title).join(' → ')}
      </p>

      <ol className="steps">
        {steps.map((step, index) => (
          <li className="step card" key={step.title}>
            <span className="step-number">{index + 1}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}

const steps = [
  {
    title: 'Clone',
    text: 'Copy the repository from GitHub to your computer.',
  },
  {
    title: 'Create Branch',
    text: 'Start a branch named after your task so main stays untouched.',
  },
  {
    title: 'Edit',
    text: 'Change only the file assigned to you.',
  },
  {
    title: 'Commit',
    text: 'Save a snapshot of your work locally.',
  },
  {
    title: 'Push',
    text: 'Send your commits to your GitHub branch.',
  },
  {
    title: 'Pull Request',
    text: 'Ask a reviewer to inspect your work.',
  },
]

const reviewerSteps = [
  {
    title: 'Review',
    text: 'The reviewer checks your changes and requests revisions if needed.',
  },
  {
    title: 'Merge',
    text: 'The reviewer adds approved work to main.',
  },
  {
    title: 'Deploy',
    text: 'The updated main branch is published.',
  },
]

const allTitles = [...steps, ...reviewerSteps].map((step) => step.title)

export default function WorkflowSection() {
  return (
    <section className="workflow" id="workflow">
      <div className="section-head">
        <p className="eyebrow">The whole workflow</p>
        <h2>Small steps, one at a time</h2>
        <p className="section-intro">
          Every participant follows the same path. You do the first six steps.
          The reviewer does the last three.
        </p>
      </div>

      <p className="flow-line" aria-label="Workflow order">
        {allTitles.join(' → ')}
      </p>

      <h3 className="steps-heading">Your part</h3>
      <ol className="steps">
        {steps.map((step, index) => (
          <li className="step card" key={step.title}>
            <span className="step-number">{index + 1}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </li>
        ))}
      </ol>

      <h3 className="steps-heading">The reviewer's part</h3>
      <ol className="steps" start={steps.length + 1}>
        {reviewerSteps.map((step, index) => (
          <li className="step card card-reviewer" key={step.title}>
            <span className="step-number">{steps.length + index + 1}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}

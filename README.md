# SPN AI Workshop

A tiny one-page website used to practice the everyday Git workflow:

**Clone → Create Branch → Edit → Commit → Push → Open Pull Request**

Your job ends when you open the pull request. The reviewer decides whether to
request changes, approve, merge, and publish the site.

## Folders

| Path | What it is |
| --- | --- |
| `src/components/` | `Header.jsx` and `Footer.jsx`, the shared top and bottom of the page. |
| `src/sections/` | The three page sections. **These are the files you will edit.** |
| `src/App.jsx` | Puts the header, sections, and footer together. |
| `src/styles.css` | All of the styling for the page. |
| `src/main.jsx`, `index.html` | Vite start-up files. You do not need to touch these. |
| `package.json` | The project name, scripts, and dependencies. |

## Assignments

Each person edits **one file only**, so nobody's work overlaps.

### James

- **File:** `src/sections/HeroSection.jsx`
- **Task:**
  1. Change the placeholder hero headline to: **Welcome to the SPN AI Workshop**
  2. Change the button text to: **Explore the Git Workflow**
  3. Make the button link to the workflow section (`href="#workflow"`).
- **Branch:** `james/hero-update`
- **Commit message:** `fix: update workshop hero`

### Macus

- **File:** `src/sections/WorkflowSection.jsx`
- **Task:** The workflow currently leaves out the **Push** step. Add Push
  between Commit and Pull Request so the page displays
  **Commit → Push → Pull Request**. Use this description for the step:
  *Send your commits to your GitHub branch.*
- **Branch:** `macus/workflow-update`
- **Commit message:** `fix: add push to workflow`

### Therese

- **File:** `src/sections/AfterPRSection.jsx`
- **Task:** Replace the placeholder text with:
  *Your work stops after you submit the pull request. The reviewer checks the
  changes, requests revisions if necessary, and decides whether to merge. Only
  approved work is deployed.*
- **Branch:** `therese/review-update`
- **Commit message:** `fix: clarify what happens after a PR`

## Commands

Repository URL: `https://github.com/Revenue-Plus-Digital-Ltd/spn-ai-workshop.git`

Replace `REPOSITORY-URL`, `BRANCH-NAME`, `ASSIGNED-FILE`, and
`COMMIT MESSAGE` with the values from your assignment above.

```bash
git clone REPOSITORY-URL
cd spn-ai-workshop
npm install
npm run dev
git switch -c BRANCH-NAME
git status
git add ASSIGNED-FILE
git commit -m "COMMIT MESSAGE"
git push -u origin BRANCH-NAME
```

`npm run dev` starts the site on your computer. Open the address it prints
(usually `http://localhost:5173`) to see your change while you edit.

## Open the pull request

1. Open the repository on GitHub:
   https://github.com/Revenue-Plus-Digital-Ltd/spn-ai-workshop
2. Click **Compare & pull request** (GitHub shows this banner right after
   your push).
3. Confirm the pull request targets `main`.
4. Describe what you changed in the description box.
5. Click **Create pull request** to submit it.
6. Stop and wait for reviewer feedback.

## Rules

- Do not approve your own pull request.
- Do not merge your pull request.
- Do not publish the website.
- Do not push directly to `main`.

The reviewer handles everything after the pull request is opened.

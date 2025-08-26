# Dev Cheatsheet – My Starter Scaffold

This is my quick reference for working with this repo.

---

## 🔹 Git (version control)
- Stage all changes:
  ```bash
  git add .
git commit -m "docs: update README with test instructions"

npm install
npm start
# open http://localhost:3000 or /health
npm test

docker build -t my-starter-scaffold .
docker run -p 3000:3000 my-starter-scaffold
# open http://localhost:3000/health

docker ps         # list containers
docker stop <id>  # stop by ID
🔹 GitHub Actions (CI/CD)

Workflow file: .github/workflows/ci.yml

Triggers: push and pull_request on main

Steps: checkout → setup Node 20 → install → npm test

Status badge shows on README:


🔹 Commit Message Styles

Use Conventional Commits:

feat: → new feature

fix: → bug fix

docs: → docs only

test: → tests only

build: → Docker/build changes

chore: → misc cleanup

👉 Commit it with:
```bash
git add DEV-CHEATSHEET.md
git commit -m "docs: add personal dev cheat sheet"
git push

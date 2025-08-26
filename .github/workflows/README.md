# My Starter Scaffold
[![node-ci](https://github.com/Tallboycadi/my-starter-scaffold/actions/workflows/ci.yml/badge.svg)](https://github.com/Tallboycadi/my-starter-scaffold/actions/workflows/ci.yml)
Minimal Node.js service scaffold designed for Cloud/Devops demos. It includes:
- Built-in HTTP server (no external deps)
- `/health` endpoint for (for probes and checks)
- Test using the Node test runner (`node --test`)
- Dockerfile for Containerization
- GitHub Actions CI (runs test on every push/PR)

## About
This repo is part of Cliffton Benford's Cloud/DevOps portfolio-showing clean scaffolds, CI, and containerization.

## Quick start
```bash
npm install
npm start
# open http://localhost:3000 or http://localhost:3000/health
CI: first run test

npm test
docker build -t my-starter-scaffold .
docker run -p 3000:3000 my-starter-scaffold

##

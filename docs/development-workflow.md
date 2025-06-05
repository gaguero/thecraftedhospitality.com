# Development Environment & Workflow - The Crafted Hospitality (Next.js)

## 1. Overview

This document outlines the development environment and workflow for The Crafted Hospitality website, utilizing Next.js with Tailwind CSS for development, GitHub for version control, and Railway for hosting and deployment.

## 2. Core Components

- **Next.js Project**: The primary development environment.
  - **Location**: Root of the workspace (`/c%3A/Users/jovy2/Documents/VTF/thecraftedhospitality.com`).
  - **Key Technologies**: Next.js, React, TypeScript, Tailwind CSS, ESLint, Prettier.
- **GitHub Repository**: Version control and deployment trigger for Railway.
  - **URL**: `https://github.com/gaguero/thecraftedhospitality.com`
- **Railway Hosting**: Production and staging (optional) environment.
  - **Connected Domain**: `thecraftedhospitality.com`
- **Local Machine**: Used for all development activities.

## 3. Next.js Project Setup (Subtask 3.1 - In Progress)

- **Status**: Decision made for Next.js + Tailwind CSS.
- **Actions Underway (as per `docs/nextjs-tailwind-setup.md`)**:
  1.  Initialize Next.js project (`npx create-next-app`).
  2.  Integrate Tailwind CSS.
  3.  Set up project structure (`src/app`, `src/components`, etc.).
  4.  Configure ESLint & Prettier.
  5.  Initial commit of boilerplate.
- **Reference**: See `docs/nextjs-tailwind-setup.md` for detailed steps.

## 4. Git Branching Strategy

- **`main`**:
  - **Purpose**: Production-ready code. Connected to Railway for automatic production deployments.
  - **Workflow**: Receives merges only from the `develop` branch after thorough review and testing.
- **`develop`**:
  - **Purpose**: Main integration branch. Represents the latest stable version of development, ready for staging or production release.
  - **Workflow**:
    - Feature branches are merged into `develop` via Pull Requests.
    - (Optional) Can be auto-deployed to a staging environment on Railway.
- **`feature/<feature-name>` (e.g., `feature/homepage-hero`, `fix/contact-form`)**:
  - **Purpose**: Isolated development of new features or bug fixes.
  - **Workflow**: Branched from `develop`. Once complete, a Pull Request is opened to merge back into `develop`.

## 5. Development Workflow (Local Next.js -> GitHub -> Railway)

1.  **Create/Checkout Feature Branch**:
    ```bash
    git checkout develop
    git pull origin develop
    git checkout -b feature/your-feature-name
    ```
2.  **Local Development in Next.js**:
    - Run the local development server:
      ```bash
      npm run dev
      ```
    - Implement features, create components, write styles using Tailwind CSS.
    - Adhere to linting and formatting rules (ESLint, Prettier).
    - Commit changes frequently to the feature branch with clear messages.
3.  **Push Feature Branch & Create Pull Request**:
    - Once the feature is complete and tested locally:
      ```bash
      git push origin feature/your-feature-name
      ```
    - Open a Pull Request (PR) on GitHub from `feature/your-feature-name` to `develop`.
4.  **Code Review & Merge to `develop`**:
    - Team members review the PR (if applicable).
    - Automated checks (GitHub Actions for linting/testing, if configured) pass.
    - Merge the PR into the `develop` branch.
    - (Optional) `develop` deploys to a staging environment on Railway.
5.  **Merge `develop` to `main` for Production Deployment**:
    - When ready for a production release, create a PR from `develop` to `main`.
    - Perform final review.
    - Merge the PR into `main`.
6.  **Automatic Deployment by Railway**:
    - Railway detects changes on the `main` branch (or `develop` for staging) and triggers a new build and deployment of the Next.js application.
    - Monitor deployment status in the Railway dashboard.
7.  **Testing on Production/Staging**:
    - Thoroughly test the deployed version on the respective environment.

## 6. Local Development Environment Tools

- **Code Editor**: VS Code (recommended).
  - **Extensions**: ESLint, Prettier, Tailwind CSS IntelliSense, Path Intellisense.
- **Node.js**: Version 18.x or later (as required by Next.js).
- **Package Manager**: npm (or yarn, consistent with project setup).
- **Git**: Installed and configured.
- **Browser Developer Tools**: For debugging, performance profiling, and responsive design testing.

## 7. CI/CD Pipeline

- **Railway**: Handles CD (Continuous Deployment) from the specified GitHub branch (`main` for production).
- **GitHub Actions (Optional CI - Continuous Integration)**:

  - Can be set up to run on each PR to `develop` or `main`.
  - **Jobs**: Linting, formatting checks, running tests (unit, integration, e2e if implemented).
  - Example `.github/workflows/ci.yml`:

    ```yaml
    name: Node.js CI

    on:
      push:
        branches: [develop, main]
      pull_request:
        branches: [develop, main]

    jobs:
      build:
        runs-on: ubuntu-latest
        strategy:
          matrix:
            node-version: [18.x, 20.x]
        steps:
          - uses: actions/checkout@v3
          - name: Use Node.js ${{ matrix.node-version }}
            uses: actions/setup-node@v3
            with:
              node-version: ${{ matrix.node-version }}
              cache: "npm" # or 'yarn'
          - run: npm ci # or yarn install --frozen-lockfile
          - run: npm run lint # Add your lint script
        # - run: npm run build --if-present # To check if build succeeds
        # - run: npm test # Add your test script
    ```

## 8. Environment Configurations

- **Local Development**:
  - `.env.local` for environment variables not committed to Git (API keys, etc.).
  - Next.js dev server typically on `http://localhost:3000`.
- **Staging (Optional on Railway)**:
  - Separate Railway service connected to the `develop` branch.
  - Uses its own set of environment variables in Railway (e.g., `STAGING_DB_URL`).
- **Production (Railway)**:
  - Connected to the `main` branch.
  - Production environment variables set in Railway (e.g., `NODE_ENV=production`, `DATABASE_URL`).

This workflow supports a modern Next.js development lifecycle, enabling efficient collaboration, automated checks, and reliable deployments to Railway.

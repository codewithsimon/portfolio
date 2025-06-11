---
layout: ../../layouts/BlogPost.astro
title: How to Securely Use Environment Variables with GitHub Pages and Vite + React
date: June 11, 2025
category: Technology Trends
excerpt: Unpack the AI Agent revolution from Microsoft Build & Google I/O. Get key updates on Azure AI, Google's vision, and new tools. 
imageUrl: /images/how-to-securely-use-environment-variables-with-github-pages-and-vite-react.jpg
slug: how-to-securely-use-environment-variables-with-github-pages-and-vite-react
---

**TL;DR:** GitHub Pages is a static hosting service, which means you can’t use environment variables at runtime. But with a few smart build-time tricks (especially using Vite), you can still inject API keys and other config values into your app — securely and efficiently.

## Why This Matters
Many developers use GitHub Pages to host static websites built with modern frameworks like **React + Vite**. But what if your app needs an API key, a base URL, or some kind of configuration?

That's where **environment variables** come in. But unlike Node.js or server-side platforms, **GitHub Pages doesn’t support runtime .env variables**, because it's just serving static files.

So what’s the workaround?

Let’s dive in.

## Solution: Use Environment Variables at Build Time
Since GitHub Pages serves pre-built files, any values your app needs must be injected during the build step using Vite’s environment variable support.

### Step 1: Use VITE_ Prefix in Your .env File
Create a .env or .env.production file at the root of your project.

```env
VITE_GEMINI_API_KEY=your_gemini_api_key
VITE_API_BASE_URL=https://api.example.com
```
> ⚠ Vite only exposes variables that start with *VITE_* — all others will be ignored.

### Step 2: Access Env Variables in Your Code
Use *import.meta.env* in your React components or services:

```ts
const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
```

### Step 3: Reference .env in GitHub Actions (CI/CD)
If you're using GitHub Actions to deploy your site, you can pass environment variables securely.

#### 📁 Example GitHub Actions Workflow

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Set up Node
        uses: actions/setup-node@v3
        with:
          node-version: 18

      - name: Install dependencies
        run: npm install

      - name: Build
        run: npm run build
        env:
          VITE_GEMINI_API_KEY: ${{ secrets.VITE_GEMINI_API_KEY }}

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist

```

> 💡 Add your secrets in **Repo → Settings → Secrets → Actions**.

## Don’t Do This!
- Don’t commit your .env file with secrets into the repo.
- Don’t expect runtime .env access — GitHub Pages can’t process .env files after deployment.
- Don’t store sensitive keys in plain JS files.

## Final Thoughts
Using environment variables on GitHub Pages **requires a build-time mindset** — you must inject everything before the site is deployed.

If your app ever needs **runtime logic, authentication, or backend features**, you might consider switching to a platform like **Vercel, Netlify**, or a backend service like **Firebase, Supabase, or Render**.

But for static apps like [AI-powered quiz generators](https://github.com/codewithsimon/ai-quiz-craft), GitHub Pages + Vite + GitHub Actions is a powerful and free combo — as long as you understand how to manage your environment variables.
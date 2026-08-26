# Angel Azael Fajardo Espino - Professional Portfolio & CV Landing Page

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Status: Production Ready](https://img.shields.io/badge/Status-Production%20Ready-emerald.svg)]()
[![Stack: Vanilla Web](https://img.shields.io/badge/Stack-HTML5%20%7C%20CSS3%20%7C%20ES6%2B-cyan.svg)]()

A modern, high-performance, and meticulously crafted personal landing page and portfolio showcasing the engineering background, technical expertise, and production projects of **Angel Azael Fajardo Espino** - Software Developer specializing in **AI & Automation**, **Distributed Systems**, **Backend Engineering**, and **Linux Infrastructure**.

---

## 1. Why This Project Exists

This repository serves as the definitive, single-source-of-truth digital portfolio and interactive CV for Angel Azael Fajardo Espino. Built with an emphasis on clarity, visual polish, and performance, its primary objectives are:

1. **Demonstrate End-to-End Engineering Depth:** Provide technical recruiters, engineering leaders, and collaborators with an interactive, deep dive into real-world production systems, research projects, and self-hosted infrastructure.
2. **Deliver an Immaculate User Experience:** Present complex technical accomplishments through a clean, comfortable, and intuitive user interface with dark/light themes, smooth micro-interactions, responsive design, and instant load times.
3. **Bridge Applied AI, Backend Architecture & DevOps:** Highlight the convergence of modern AI engineering (LLM orchestration, RAG, multi-agent workflows), robust backend design (FastAPI, Node.js/TypeScript, PostgreSQL, Redis), and secure self-hosted infrastructure (Linux, Docker, Kubernetes, Cloudflare Tunnel, reverse proxies).

---

## 2. Professional Profile Summary

- **Role:** Software Developer | AI & Automation | Backend & Infrastructure
- **Education:** B.S. in Computer Systems Engineering (7th Semester) at Universidad Autonoma de Aguascalientes (UAA).
- **Current Roles:**
  - **Distributed Systems Researcher / Developer** (UAA Social Service): Designing and evaluating distributed systems simulation environments, containerized testing with Docker & Kubernetes, resilience, and chaos engineering.
  - **Assistant Manager & Infrastructure Lead** (Chavonauta): Designing and maintaining dedicated Linux server infrastructure, deploying internal business automation platforms, Docker services, Nextcloud, custom bots, and securing public access via Cloudflare Tunnel.
- **Location:** Aguascalientes, Mexico
- **GitHub:** [github.com/AzaelFajardo](https://github.com/AzaelFajardo)
- **LinkedIn:** [linkedin.com/in/angel-azael-fajardo-espino-850b8642b/](https://www.linkedin.com/in/angel-azael-fajardo-espino-850b8642b/)

---

## 3. Key Featured Projects

### 1. [A.R.G.O.S.](https://github.com/AzaelFajardo) - Multi-Agent AI Personal Assistant
- **Architecture:** Autonomous multi-agent orchestration platform inspired by conversational assistants.
- **Capabilities:** Natural language intent routing, long-term memory retrieval via RAG & vector embeddings, multi-provider LLM fallback router, RPA task delegation over WebSockets, and Telegram integration.
- **Stack:** Python, FastAPI, SQLAlchemy, PostgreSQL, Redis, LiteLLM, Next.js, React, Tailwind CSS, WebSocket, Docker.

### 2. INVITACIONES - Event Management & QR Access Platform
- **Impact:** Deployed in production on a dedicated self-hosted Linux server; processed 500+ attendees without incidents for major events.
- **Capabilities:** Automated WhatsApp invitation delivery, RSVP tracking, cryptographic ticket generation with anti-duplicate QR verification.
- **Stack:** React, Node.js, Express, Baileys, Python, FastAPI, Pillow, JWT, SQLite, AES, PM2, Cloudflare Tunnel.

### 3. CHATBOTNAUTA - AI-Powered Customer Service & Quotation Engine
- **Capabilities:** Autonomous processing of customer-submitted PDFs and image assets, intelligent quotation estimation via LLM structured outputs, and seamless human operator handoff dashboard.
- **Stack:** Node.js, TypeScript, Express, Prisma, OpenAI Structured Outputs, WhatsApp Cloud API, bcrypt, Pino, Jest.

### 4. BOVEDA - Personal Finance Platform with Passkeys
- **Capabilities:** Comprehensive financial asset tracking, budget management, credit card schedules, statistical modeling, and secure WebAuthn / Passkeys authentication.
- **Stack:** Next.js, React, TypeScript, Prisma, PostgreSQL, Zod, WebAuthn/Passkeys, Docker, Nginx, Cloudflare Tunnel.

### 5. RESILENCIA_KUBERNETES - Microservices & Chaos Engineering Platform
- **Focus:** Microservice resilience, distributed tracing, and fault injection.
- **Capabilities:** Circuit breaking, retry policies, distributed observability, and k6 load testing on Kubernetes clusters.
- **Stack:** Python, FastAPI, SQLAlchemy, PostgreSQL, OpenTelemetry, Prometheus, Grafana, Jaeger, React, Node.js, Docker, Kubernetes, k6.

### 6. Additional Systems & Research
- **DevProfile / Generador-CV:** Automated resume builder platform developed with collaborative Git workflows, CI/CD, and GitHub Actions.
- **L.U.N.A.:** Conversational Telegram AI financial assistant with automated chart generation and expense tracking.
- **DocFix / INEs:** Computer vision desktop tool utilizing OpenCV and rembg segmentation for document normalization and perspective correction.

---

## 4. Technical Competency Matrix

| Domain | Technologies & Frameworks |
| :--- | :--- |
| **Languages** | Python, TypeScript, JavaScript, C++, Java, SQL, HTML5, CSS3 |
| **Backend & APIs** | FastAPI, Node.js, Express, RESTful APIs, WebSockets, SQLAlchemy, Prisma, Pydantic |
| **Artificial Intelligence** | LLMs, RAG, Vector Embeddings, Multi-Agent Systems, OpenAI API, LiteLLM, NLP, Computer Vision (OpenCV) |
| **Databases & Cache** | PostgreSQL, MySQL, SQLite, Redis, Alembic Migrations |
| **Infrastructure & DevOps** | Linux Administration, Docker, Docker Compose, Kubernetes, Nginx, PM2, Cloudflare Tunnel, DNS & Reverse Proxies, SSH, Firewalls |
| **Observability & QA** | OpenTelemetry, Prometheus, Grafana, Jaeger, k6 Chaos & Resilience Testing, Jest |
| **Security & Auth** | WebAuthn / Passkeys, JWT, AES Encryption, bcrypt |
| **Tools & Collaboration** | Git, GitHub, GitHub Actions (CI/CD), AppSheet, RPA |

---

## 5. Repository & Project Structure

```
CV_LANDING_PAGE/
├── assets/
│   ├── docs/          # Downloadable PDF CVs (English & Spanish)
│   ├── icons/         # Lightweight, crisp SVG UI and brand vector icons
│   └── images/        # Profile and visual assets
├── css/
│   ├── variables.css  # Unified design tokens (HSL colors, shadows, typography, spacing)
│   ├── base.css       # CSS reset, typography, global layout rules
│   ├── layout.css     # Navigation bar, hero grid, section wrappers, footer
│   ├── components.css # Cards, interactive tags, timeline nodes, buttons, toast notification
│   └── animations.css # Smooth ambient glows, hover micro-interactions, scroll transitions
├── js/
│   ├── data.js        # Centralized structured data model (projects, skills, timeline)
│   ├── theme.js       # Dark / Light theme manager with localStorage synchronization
│   ├── filter.js      # Interactive project category filtering engine
│   ├── interactions.js# Smooth scrolling, active navigation spy, copy-to-clipboard actions
│   └── main.js        # Application initialization entrypoint
├── docs/              # Master CV documentation source files
├── index.html         # Semantic, SEO-optimized, accessible main landing page
├── README.md          # Comprehensive repository documentation
└── .gitignore         # Strict exclusion rules for local developer guidelines and temp files
```

---

## 6. Design & Architectural Highlights

- **Pure Vanilla Stack:** Zero external runtime dependencies or bloated JavaScript frameworks. Yields lightning-fast performance, sub-second load times, and effortless hosting.
- **Glassmorphic & Cyber-Slate Aesthetics:** Dark-mode-first aesthetic with obsidian surfaces, electric cyan and indigo accents, subtle glowing radial backgrounds, and crisp typography.
- **Full Theme Flexibility:** Instant toggle between Dark Mode and Light Mode with persistence in localStorage and respect for system preferences (prefers-color-scheme).
- **Responsive & Accessible:** Fluid grid and flexbox layouts optimized across mobile, tablet, laptop, and ultra-wide displays with semantic HTML5 and ARIA labels.
- **Interactive Project Filtering:** Filter projects across categories (All, AI & Multi-Agent, Backend & Cloud, Full Stack & Tools) with smooth CSS animations.

---

## 7. Getting Started (Local Development)

Because this project is built with standard web technologies, running it locally requires no installation steps:

### Option 1: Any Static Server
```bash
# Using Python built-in HTTP server
python -m http.server 8080

# Or using Node http-server / npx serve
npx serve .
```
Then open `http://localhost:8080` in your web browser.

### Option 2: VS Code / IDE Live Server
Simply open `index.html` with the **Live Server** extension or double-click `index.html` to view directly in your browser.

---

## 8. Deployment

The application is completely static and ready for instant zero-configuration deployment to any modern platform:
- **GitHub Pages:** Settings -> Pages -> Deploy from branch main / root.
- **Cloudflare Pages / Vercel / Netlify:** Link repository with output directory as `./`.
- **Self-Hosted Linux / Nginx / Docker:** Direct static asset serving via Nginx or Caddy.

---

## 9. License & Contact

Developed by **Angel Azael Fajardo Espino**.

- **Email:** Contact via LinkedIn or GitHub.
- **GitHub:** [github.com/AzaelFajardo](https://github.com/AzaelFajardo)
- **LinkedIn:** [linkedin.com/in/angel-azael-fajardo-espino-850b8642b/](https://www.linkedin.com/in/angel-azael-fajardo-espino-850b8642b/)

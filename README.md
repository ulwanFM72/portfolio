# Personal Developer Portfolio

A personal portfolio website built to showcase my profile, technical skills, projects, and professional journey as an Informatics student and aspiring web developer.

**Live Demo:** [View Portfolio](https://portfolio-ulwanfm72s-projects.vercel.app/)

## Overview

This project is a single-page personal portfolio website designed with a bold and modern **Neobrutalism** aesthetic. It presents my background, technical skills, projects, experience, and contact information in an interactive and organized layout.

The website is built with Next.js, React, and Tailwind CSS, with an emphasis on responsive design, reusable components, and maintainable code.

## Features

- **Home** — Introduction, developer status, and navigation to important sections.
- **About** — Personal profile and background.
- **Skills** — Overview of technical skills and technologies.
- **Projects** — Showcase of projects, descriptions, and technology stacks.
- **Experience** — Relevant work and organizational experience.
- **Contact** — Contact form and links to social media.
- **Responsive Design** — Layout adapted for different screen sizes.
- **Neobrutalism UI** — Bold colors, strong borders, and distinctive shadows.
- **Reusable Components** — Modular components for a consistent interface.

## Tech Stack

- **Framework:** Next.js (Pages Router)
- **UI Library:** React
- **Styling:** Tailwind CSS
- **Language:** JavaScript
- **Icons:** Lucide React
- **Version Control:** Git and GitHub
- **Deployment:** Vercel

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- npm (included with Node.js)
- Git

### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/ulwanFM72/portfolio.git
   ```

2. Navigate to the project directory:

   ```bash
   cd portfolio
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```text
portfolio/
├── src/
│   ├── components/
│   │   ├── ui.jsx
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   ├── site.js
│   │   ├── skills.js
│   │   ├── projects.js
│   │   └── experiences.js
│   ├── assets/
│   │   └── images/
│   ├── styles/
│   │   └── globals.css
│   └── pages/
│       ├── _app.js
│       └── index.js
├── .gitignore
├── next.config.js
├── package.json
├── package-lock.json
├── postcss.config.js
├── tailwind.config.js
└── README.md
```

## Customization

Personal information and portfolio content can be updated in the `src/data/` directory:

- `site.js` — Profile information, navigation, and social links.
- `skills.js` — Technical skills and proficiency information.
- `projects.js` — Project descriptions, technologies, and links.
- `experiences.js` — Work and organizational experience.

To change the visual layout or add new sections, edit the relevant components in `src/components/`.

## Production Build

To create a production build, run:

```bash
npm run build
```

To run the production version locally:

```bash
npm run start
```

## Contact

Feel free to explore my projects and connect with me through the links provided on my portfolio website.

**Thank you for visiting my repository!**

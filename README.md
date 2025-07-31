# Klima360 Resilience Web

This is the official web application for Klima360 Resilience, a platform dedicated to empowering smallholder farmers across the Global South with climate-smart tools, community networks, and financial protection. Our mission is to build resilient food systems, one farm at a time.

This project is built with a modern, scalable, and type-safe stack, featuring Vite, React, TypeScript, and Shadcn/UI for a beautiful and performant user experience.

## Tech Stack

-   **Framework**: [React](https://react.dev/)
-   **Build Tool**: [Vite](https://vitejs.dev/)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)
-   **UI Components**: [Shadcn/UI](https://ui.shadcn.com/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **Routing**: [React Router DOM](https://reactrouter.com/)
-   **Linting**: [ESLint](https://eslint.org/)
-   **Package Manager**: [bun](https://bun.sh/) (or your preferred manager like npm/yarn)

## Project Structure

The project follows a standard Vite + React project structure, with a few key directories:

```
klima360-resilience-web/
├── public/              # Static assets (icons, images)
├── src/
│   ├── assets/          # Project-specific images and assets
│   ├── components/      # Reusable UI components
│   │   ├── ui/          # Shadcn/UI generated components
│   │   └── *.tsx        # Custom page-level components
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility functions and libraries
│   ├── pages/           # Top-level page components
│   ├── App.tsx          # Main application component with routing
│   └── main.tsx         # Entry point of the application
├── package.json         # Project dependencies and scripts
└── vite.config.ts       # Vite configuration
```

## Getting Started

Follow these instructions to get a local copy of the project up and running for development and testing.

### Prerequisites

You need to have [Node.js](https://nodejs.org/) (version 18 or higher) and a package manager like [bun](https://bun.sh/), `npm`, or `yarn` installed on your machine.

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/klima360-resilience-web.git
    cd klima360-resilience-web
    ```

2.  **Install dependencies:**
    Choose your preferred package manager:
    ```sh
    # Using bun
    bun install

    # Using npm
    npm install

    # Using yarn
    yarn install
    ```

## Available Scripts

In the project directory, you can run the following commands:

-   `bun dev` or `npm run dev`
    Runs the app in development mode. Open [http://localhost:5173](http://localhost:5173) (or the specified port) to view it in your browser. The page will reload when you make changes.

-   `bun build` or `npm run build`
    Builds the app for production to the `dist` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

-   `bun preview` or `npm run preview`
    Runs a local server to preview the production build from the `dist` folder. This is useful for checking the final output before deploying.

-   `bun lint` or `npm run lint`
    Runs ESLint to find and fix problems in your code.

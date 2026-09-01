# K72_pro1 — Project Documentation

## Project Overview

K72_pro1 is a fully responsive React-based clone of the K72 mechanical keyboard interface. It showcases a modern, interactive keyboard design with smooth animations (GSAP), responsive layout, and an intuitive UI.

Key features

- Responsive design for Desktop / Tablet / Mobile
- Interactive keys with click & visual feedback
- GSAP-powered animations including stairs transitions
- React Router for client-side routing
- Modern UI styling with custom CSS
- Video component in home section

## How the Project is Built

### Tech stack

- React (functional components, hooks)
- React Router DOM (client-side routing)
- GSAP (GreenSock) for animations
- JavaScript (ES6+)
- CSS3 for styling

### Project structure (source)

src/
├── components/
│   ├── Home/
│   │   ├── Video.jsx
│   │   ├── HomeHeroText.jsx
│   │   └── HomeBottomText.jsx
│   ├── Navigation/
│   │   ├── NavBar.jsx
│   │   └── FullNavbar.jsx
│   ├── Common/
│   │   └── Stairs.jsx
│   └── Keyboard.jsx
├── styles/
│   ├── index.css
│   ├── keyboard.css
│   └── components.css
├── App.jsx
├── index.js
└── pages/

### Animations & Routing

- GSAP is used for page transitions (Stairs.jsx), hero text animations, and entry/exit effects.
- React Router manages client-side routes and coordinates transitions between pages (Stairs animation should trigger on route change).

## Setup & Development

1. Clone the repository
   ```bash
   git clone https://github.com/Priyanshu404/K72_pro1.git
   cd K72_pro1
   ```
2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```
3. Start dev server
   ```bash
   npm start
   # or
   yarn start
   ```
4. Open http://localhost:3000

## Build for production

```bash
npm run build
# or
yarn build
```
The optimized files are in `build/` and ready for deployment as a static site.

## Deployment to Render (static site)

I added a `render.yaml` (in repo root) to help create a Static Site on Render. If you prefer I deploy the site for you, please give a Render API key with service creation permissions. Otherwise follow these steps:

1. Create a Render account (https://render.com) and log in.
2. Click New → Static Site.
3. Connect your GitHub account and select the repository `Priyanshu404/K72_pro1`.
4. Set the branch (e.g., `main`).
5. Build Command: `npm run build`
6. Publish directory: `build`
7. Optionally enable Automatic Deploys.
8. Create and deploy.

Render will build and serve the static `build/` folder.

## render.yaml (generated)

See `render.yaml` in the repository root (this file is included in this commit). It defines a static service that points to the repo and instructs Render to build and publish the `build` directory.

## Recommended Improvements (prioritized)

1. Authentication & Protected Routes (HIGH priority)
   - Use protected routes for pages or actions that require auth (e.g., saving keyboard presets, user profile, analytics).
   - Add an authentication provider (Auth0, Firebase Auth, NextAuth for Next.js, or custom JWT). For a static React app, use Auth0 or Netlify Identity or Render's private services plus an API.
   - Implement a ProtectedRoute component that checks auth state and redirects to sign-in.

2. Accessibility (HIGH)
   - Ensure all interactive keys are keyboard-focusable (use button elements or role="button" with tabindex=0).
   - Add proper aria attributes (aria-pressed for toggles, aria-labels on keys, landmark roles for navigation and main content).
   - Ensure color contrast meets WCAG AA.
   - Support screen readers; manage focus on route changes and after animations.

3. Performance (HIGH)
   - Code-split pages with React.lazy + Suspense and route-based dynamic imports.
   - Defer non-critical animations and use reduced-motion preference with prefers-reduced-motion.
   - Optimize images and video (serve compressed formats, use appropriate resolutions and lazy-loading).
   - Minimize bundle size: remove unused dependencies, consider ES module builds for GSAP.

4. Testing (MEDIUM)
   - Add unit/component tests with Jest + React Testing Library.
   - Add E2E tests with Cypress for key flows (navigations, keyboard interactions, responsive checks).

5. CI / CD (MEDIUM)
   - Add GitHub Actions to run lint, tests, and build on push/PRs.
   - On successful build, auto-deploy to Render (Render auto-deploys from repo, or use Render API from workflow).

6. Code quality & tooling (LOW)
   - Add ESLint + Prettier with a standard config.
   - Enforce PR templates, branch protection, and code owners for main directories.

7. Feature improvements (LOW-MEDIUM)
   - Add user presets: save/load keyboard lighting or key mappings.
   - Add theme support (light/dark, configurable key colors).
   - Add localization (i18n) if you plan multi-language support.
   - Add analytics (privacy-conscious) to measure interactions.

## Example: ProtectedRoute (React Router v6)

Add an auth provider (context) and a simple ProtectedRoute component. Example sketch:

```jsx
// ProtectedRoute.jsx
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../auth/AuthProvider';

export default function ProtectedRoute() {
  const { user, loading } = useAuth();
  if (loading) return <div>Loading...</div>;
  return user ? <Outlet /> : <Navigate to="/login" replace />;
}
```

Wrap routes in App.jsx:

```jsx
<Route element={<ProtectedRoute/>}>
  <Route path="/settings" element={<Settings/>} />
</Route>
```

## Accessibility quick checklist

- All keys reachable by keyboard (Tab navigation)
- aria-label on each key
- High-contrast themes
- prefers-reduced-motion handling for animations
- Focus management on route change

## Next steps I can take (pick one or more)

- Convert the Markdown doc into a real .docx and add it to the repo (I can generate locally if you provide an environment or allow me to run a conversion service). Right now I added a Markdown file and a .docx placeholder.
- If you provide a Render API key, I can create the static site service and deploy it for you automatically.
- Implement basic ProtectedRoute and a simple Auth flow (e.g., Auth0) and push a PR with the changes.
- Add GitHub Actions for CI and a simple test or Lighthouse check.

---

Documentation author: GitHub Copilot assistant


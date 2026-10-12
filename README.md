# ROSHAN E S — Portfolio

A modern, high-performance developer portfolio showcasing full-stack skills, technical training experience, and interactive web applications.

- **Live site**: https://YOUR-SITE-URL/

## Tech Stack
- **Framework & Build**: React 19, Vite
- **Styling**: Tailwind CSS 4
- **Animations & Effects**: Framer Motion, AOS (Animate On Scroll)
- **Interactive Visuals**: WebGL / Canvas Fluid Simulation
- **Contact & Communications**: EmailJS (@emailjs/browser)

## Run Locally

Clone the repository and run the following commands:

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Build for production
npm run build
```

## Environment Variables

Create a `.env.local` file in the root directory to enable direct EmailJS delivery:

```env
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

*(If these variables are omitted, the contact form automatically falls back to an encoded direct email client link.)*

## Credits

Built during full-stack training at [TAP Academy](https://thetapacademy.com/).

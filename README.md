# Background AI Remover

A modern web application for removing image backgrounds using AI, built with React and TanStack technologies.

## Features

- 🎨 **AI-Powered Background Removal** - Remove image backgrounds with a single click
- 🔐 **User Authentication** - Secure login and signup with Supabase
- 📁 **Project Management** - Save and organize your edited images
- 🎯 **Simple Interface** - Intuitive and easy-to-use UI powered by Tailwind CSS
- ⚡ **Fast Performance** - Built with Vite for rapid development and optimized builds

## Tech Stack

- **Frontend**: React 19, TypeScript
- **Routing**: TanStack React Router
- **UI Components**: Radix UI, Tailwind CSS
- **Authentication**: Supabase
- **Build Tool**: Vite
- **Package Manager**: pnpm

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- pnpm package manager

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd background-remover
```

2. Install dependencies:

```bash
pnpm install
```

3. Set up environment variables:

```bash
cp .env.example .env.local
```

4. Run the development server:

```bash
pnpm dev
```

The app will be available at `http://localhost:3000`

## Available Scripts

- `pnpm dev` - Start the development server
- `pnpm build` - Build for production
- `pnpm serve` - Preview the production build
- `pnpm test` - Run tests
- `pnpm lint` - Run ESLint
- `pnpm format` - Format code with Prettier
- `pnpm check` - Run format and lint fixes

## Project Structure

```
src/
├── components/        # Reusable React components
│   ├── LoginForm.tsx
│   ├── SignUpForm.tsx
│   └── ui/           # UI component library
├── lib/              # Utilities and services
│   ├── auth.ts       # Authentication logic
│   ├── supabase.ts   # Supabase client
│   └── utils.ts      # Helper utilities
├── routes/           # TanStack Router routes
│   ├── __root.tsx
│   ├── _authed.tsx
│   ├── index.tsx
│   └── _authed/
│       └── projects.tsx
└── styles.css        # Global styles
```

## Features in Detail

### Authentication

- User registration and login
- Email-based authentication via Supabase
- Protected routes for authenticated users

### Background Removal

- Upload or select images
- AI-powered background removal
- Download edited images

### Project Management

- Save your edited projects
- Organize images by project
- Easy project navigation

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

## Support

For support, please open an issue on the GitHub repository.

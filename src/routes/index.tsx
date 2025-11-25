import { Button } from '@/components/ui/button'
import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <div className="flex items-center flex-col min-h-screen justify-center gap-2">
      <h1 className="text-3xl font-bold">Image Background Remover</h1>
      <h2 className="text-2xl">The Best Image Background Remover on The Web</h2>

      <Button asChild>
        <Link to="/projects">Get Started Free</Link>
      </Button>
    </div>
  )
}

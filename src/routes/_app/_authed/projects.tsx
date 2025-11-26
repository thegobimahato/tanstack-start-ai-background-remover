import ImageUploader from '@/components/ImageUploader'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/_authed/projects')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="p-4">
      <ImageUploader />

      <div className="">Recent Uploads</div>
    </div>
  )
}

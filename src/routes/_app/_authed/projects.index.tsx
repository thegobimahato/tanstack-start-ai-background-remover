import { createFileRoute } from "@tanstack/react-router";

import ImageUploader from "@/components/ImageUploader";
import { PreviousUploadCard } from "@/components/PreviousUploadCard";
import { useUploads } from "@/lib/query";

export const Route = createFileRoute("/_app/_authed/projects/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { data } = useUploads();
  return (
    <div className="space-y-2 p-4">
      <ImageUploader />

      <p className="mt-5 mb-2 text-xl">Recent Uploads</p>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
        {data?.map((entry) => (
          <PreviousUploadCard name={entry.name} key={entry.id} />
        ))}
      </div>
    </div>
  );
}

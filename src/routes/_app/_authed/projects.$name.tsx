import { createFileRoute } from "@tanstack/react-router";
import { CircleCheck, Download, Wand } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Comparison,
  ComparisonHandle,
  ComparisonItem,
} from "@/components/ui/shadcn-io/comparison";
import { Spinner } from "@/components/ui/spinner";
import {
  useImageUrl,
  useImageWithoutBgUrl,
  useRemoveImageBackground,
} from "@/lib/query";

export const Route = createFileRoute("/_app/_authed/projects/$name")({
  component: RouteComponent,
});

function RouteComponent() {
  const { name } = Route.useParams();
  const { data } = useImageUrl(name);
  const { data: imageWithoutBgUrl } = useImageWithoutBgUrl(name);
  const removeBgMutation = useRemoveImageBackground();

  const download = async () => {
    if (!imageWithoutBgUrl) return;
    const fileUrl = imageWithoutBgUrl;
    const fileName = "no-bg-" + name;

    const response = await fetch(fileUrl);
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.URL.revokeObjectURL(url);
  };

  return (
    <main className="bg-background text-foreground min-h-[calc(100vh-4rem)]">
      <div className="mx-auto max-w-6xl space-y-6 px-4 py-6 sm:py-8">
        {/* Header */}
        <header className="space-y-1">
          <p className="text-muted-foreground text-xs tracking-[0.2em] uppercase">
            Project
          </p>
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {name}
          </h1>
          <p className="text-muted-foreground text-sm">
            Preview your image and remove the background in a single click.
          </p>
        </header>

        {/* Layout: preview + actions */}
        <section className="grid items-start gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
          {/* Preview card */}
          <div className="border-border bg-card overflow-hidden rounded-2xl border shadow-xl">
            <div className="border-border text-muted-foreground flex items-center justify-between border-b px-4 py-3 text-xs">
              <span>Preview</span>
              {imageWithoutBgUrl ? (
                <span className="inline-flex items-center gap-1 text-emerald-400">
                  <CircleCheck className="h-3 w-3" />
                  Background removed
                </span>
              ) : (
                <span className="inline-flex items-center gap-1">
                  <Wand className="h-3 w-3" />
                  Ready to process
                </span>
              )}
            </div>

            <div className="bg-muted relative">
              <div className="aspect-4/3 sm:aspect-video">
                {!imageWithoutBgUrl ? (
                  data && (
                    <img
                      src={data}
                      alt={name}
                      className="bg-muted h-full w-full object-contain"
                    />
                  )
                ) : (
                  <Comparison className="bg-muted h-full w-full">
                    <ComparisonItem
                      position="left"
                      className="flex items-center justify-center"
                    >
                      <img
                        src={imageWithoutBgUrl}
                        alt={`${name} without background`}
                        className="h-full w-full object-contain"
                      />
                    </ComparisonItem>
                    <ComparisonItem
                      position="right"
                      className="flex items-center justify-center"
                    >
                      <img
                        src={data}
                        alt={`${name} original`}
                        className="h-full w-full object-contain"
                      />
                    </ComparisonItem>
                    <ComparisonHandle />
                  </Comparison>
                )}
              </div>

              {imageWithoutBgUrl && (
                <p className="bg-background/80 text-foreground border-border absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full border px-3 py-1 text-[11px] backdrop-blur-sm">
                  Drag the handle to compare
                </p>
              )}
            </div>
          </div>

          {/* Action panel */}
          <aside className="space-y-4">
            <div className="border-border bg-card rounded-2xl border px-4 py-4 shadow-lg sm:px-5 sm:py-5">
              <h2 className="text-sm font-medium">Background removal</h2>
              <p className="text-muted-foreground mt-1 text-xs">
                Remove the background using our AI-powered processor and
                download your clean PNG.
              </p>

              {removeBgMutation.error && (
                <p className="bg-destructive/15 border-destructive text-destructive-foreground mt-3 rounded-md border px-3 py-2 text-xs">
                  error: {removeBgMutation.error.message}
                </p>
              )}

              <div className="mt-4 flex flex-col gap-3">
                {!imageWithoutBgUrl && (
                  <Button
                    size="lg"
                    className="w-full justify-center gap-2"
                    onClick={() => removeBgMutation.mutate({ data: { name } })}
                    disabled={removeBgMutation.isPending}
                  >
                    {removeBgMutation.isPending ? (
                      <>
                        <Spinner />
                        Processing…
                      </>
                    ) : (
                      <>
                        <Wand className="h-4 w-4" />
                        Remove background
                      </>
                    )}
                  </Button>
                )}

                {imageWithoutBgUrl && (
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full justify-center gap-2"
                    onClick={download}
                  >
                    <Download className="h-4 w-4" />
                    Download PNG
                  </Button>
                )}
              </div>
            </div>

            {/* Small status block */}
            <div className="border-border bg-muted text-muted-foreground rounded-2xl border px-4 py-3 text-xs">
              <p>
                Tip: Use high-resolution product photos for the cleanest edges
                and better background separation.
              </p>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}

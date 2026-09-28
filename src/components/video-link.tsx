import type { VideoLink as VideoLinkData } from "@/lib/types";
import { cn } from "@/lib/utils";

export function VideoLink({
  video,
  label = "▶ Ver vídeo",
  className,
}: {
  video: VideoLinkData;
  label?: string;
  className?: string;
}) {
  return (
    <a
      href={video.url}
      target="_blank"
      rel="noopener noreferrer"
      title={`${video.title} — ${video.author}`}
      className={cn(
        "inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[#c7362f] px-4 text-sm font-semibold text-white",
        className,
      )}
    >
      {label}
    </a>
  );
}

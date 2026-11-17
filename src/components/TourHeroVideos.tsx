type TourHeroVideo = {
  url: string
  label: string
  poster?: string
}

type TourHeroVideosProps = {
  videos: TourHeroVideo[]
}

/** Guest videos under the tour hero — native controls, poster from the hero still. */
export default function TourHeroVideos({ videos }: TourHeroVideosProps) {
  if (!videos.length) return null

  return (
    <div
      className={
        videos.length > 1
          ? "grid grid-cols-1 gap-3 sm:grid-cols-2"
          : "grid grid-cols-1"
      }
    >
      {videos.map((video) => (
        <figure key={video.url} className="space-y-2">
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-brand-green/10 bg-black shadow-sm">
            <video
              className="h-full w-full object-cover"
              controls
              playsInline
              preload="metadata"
              poster={video.poster}
              aria-label={video.label}
            >
              <source src={video.url} type="video/mp4" />
            </video>
          </div>
          <figcaption className="text-xs font-medium text-brand-green/70">{video.label}</figcaption>
        </figure>
      ))}
    </div>
  )
}

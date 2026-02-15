import React from 'react';
import { ExternalLink } from 'lucide-react';

interface VideoPlayerProps {
  videoId: string;
  title: string;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoId, title }) => {
  // Using standard youtube.com instead of nocookie to reduce "Video unavailable" errors on some networks.
  // Removed 'origin' parameter as it can trigger Error 153 in sandboxed/preview environments if the origin is null or mismatching.
  const embedUrl = `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&playsinline=1`;

  return (
    <div className="space-y-3">
      <div className="relative w-full overflow-hidden rounded-xl border border-cyber-accent/20 shadow-[0_0_30px_rgba(0,240,255,0.1)] bg-black group">
        <div className="aspect-video w-full">
          <iframe
            className="w-full h-full"
            src={embedUrl}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
            loading="lazy"
          ></iframe>
        </div>
      </div>
      
      {/* Fallback link for users with strict blocking or playback issues */}
      <div className="flex justify-end">
        <a 
          href={`https://www.youtube.com/watch?v=${videoId}`}
          target="_blank"
          rel="noopener noreferrer" 
          className="text-xs font-mono text-gray-500 hover:text-cyber-accent flex items-center gap-1 transition-colors opacity-70 hover:opacity-100"
        >
          Video not loading? Watch directly on YouTube <ExternalLink size={10} />
        </a>
      </div>
    </div>
  );
};
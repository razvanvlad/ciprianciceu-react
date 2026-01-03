"use client";
import { createContext, useContext, useState, useCallback } from "react";
const VideoContext = createContext({
  isVideoOpen: false,
  videoUrl: "",
  isLocalVideo: false,
  playVideo: () => {},
  closeVideo: () => {}
});

export const VideoProvider = ({ children }) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const [isLocalVideo, setIsLocalVideo] = useState(false);

  const playVideo = useCallback((videoIdOrUrl, platform = "youtube") => {
    // Check if it's a local video file (starts with / or contains .mp4)
    const isLocal = videoIdOrUrl.startsWith('/') || videoIdOrUrl.includes('.mp4');

    if (isLocal) {
      setVideoUrl(videoIdOrUrl);
      setIsLocalVideo(true);
    } else {
      const url = platform === "youtube"
        ? `https://www.youtube.com/embed/${videoIdOrUrl}?autoplay=1`
        : `https://player.vimeo.com/video/${videoIdOrUrl}?autoplay=1`;
      setVideoUrl(url);
      setIsLocalVideo(false);
    }
    setIsVideoOpen(true);
  }, []);

  const closeVideo = useCallback(() => {
    setIsVideoOpen(false);
    setVideoUrl("");
    setIsLocalVideo(false);
  }, []);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeVideo();
    }
  };

  return (
    <VideoContext.Provider value={{ isVideoOpen, videoUrl, isLocalVideo, playVideo, closeVideo }}>
      {children}

      {isVideoOpen && (
        <div className="video-modal-overlay">
          {/* Click outside to close */}
          <div
            className="video-modal-backdrop"
            onClick={handleBackdropClick}
          ></div>

          <div className="video-modal-container">
            <button
              onClick={closeVideo}
              className="video-modal-close"
              aria-label="Close video modal"
            >
              ×
            </button>
            {isLocalVideo ? (
              <video
                src={videoUrl}
                className="video-modal-iframe"
                controls
                autoPlay
                preload="metadata"
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              >
                Your browser does not support the video tag.
              </video>
            ) : (
              <iframe
                src={videoUrl}
                className="video-modal-iframe"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Video player"
              ></iframe>
            )}
          </div>
        </div>
      )}
    </VideoContext.Provider>
  );
};

export const useVideoModal = () => useContext(VideoContext);
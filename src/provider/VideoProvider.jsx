"use client";
import { createContext, useContext, useState, useCallback } from "react";
import dynamic from "next/dynamic";

// Lazy load video modal only when needed
const VideoModalContent = dynamic(
  () => import("@components/common/modals/video-modal-content"),
  { ssr: false }
);

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

  return (
    <VideoContext.Provider value={{ isVideoOpen, videoUrl, isLocalVideo, playVideo, closeVideo }}>
      {children}

      {isVideoOpen && (
        <VideoModalContent
          videoUrl={videoUrl}
          isLocalVideo={isLocalVideo}
          closeVideo={closeVideo}
        />
      )}
    </VideoContext.Provider>
  );
};

export const useVideoModal = () => useContext(VideoContext);
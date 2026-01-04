const VideoModalContent = ({ videoUrl, isLocalVideo, closeVideo }) => {
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeVideo();
    }
  };

  return (
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
  );
};

export default VideoModalContent;

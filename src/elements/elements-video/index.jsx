import React from "react";
// internal
import ElementBreadcrumb from "@components/common/breadcrumb/element-breadcrumb";
import ElVideoStyleOne from "./el-video-style-1";
import incentiveEgyptThumbnail from "@assets/img/video/thumbnail-INCENTIVE-EGYPT.jpg";
import prezentareCandidatThumbnail from "@assets/img/video/prezentare-candidat.jpg";
import euSuntCiprianThumbnail from "@assets/img/video/eu-sunt-ciprian-ciceu.jpg";
import historyBehindThumbnail from "@assets/img/video/Ciceu-Ciprian-History-behind.jpg";
import mainetDubaiThumbnail from "@assets/img/video/Mainet-First-Incentive-in-Dubai.jpg";
import abidjanThumbnail from "@assets/img/video/MAINET-BIG-EVENT-ABIDJAN.jpg";
import betracoin from "@assets/img/video/official-launch-of-betra-coin.jpg";
import mediaBg from '@assets/img/ciceu/princeton-black-white-canvas.webp';
import { useTranslations } from '@context/IntlContext';


const ElementsVideoMain = () => {
  const t = useTranslations('videos');
  const tBreadcrumb = useTranslations('breadcrumb');

  // YouTube videos with dates
  const youtubeVideos = [
    {
      videoId: "IPYr8a3LgWs",
      thumbnail: prezentareCandidatThumbnail,
      date: "Sep 22, 2020",
      dateObj: new Date("2020-09-22")
    },
    {
      videoId: "aiEKoEc7P2Y",
      thumbnail: incentiveEgyptThumbnail,
      date: "Mar 24, 2023",
      dateObj: new Date("2023-03-24")
    },
    {
      videoId: "myol9P_KOTE",
      thumbnail: abidjanThumbnail,
      date: "Apr 18, 2023",
      dateObj: new Date("2023-04-18")
    },
    {
      videoId: "42VkeRLruqw",
      thumbnail: euSuntCiprianThumbnail,
      date: "Sep 17, 2020",
      dateObj: new Date("2020-09-17")
    },
    {
      videoId: "4XQLNYJc2xQ",
      thumbnail: historyBehindThumbnail,
      date: "Dec 14, 2022",
      dateObj: new Date("2022-12-14")
    },
    {
      videoId: "jMdjc-ynPVw",
      thumbnail: mainetDubaiThumbnail,
      date: "Dec 12, 2022",
      dateObj: new Date("2022-12-12")
    },
    {
      videoId: "l_YOy0MTUoY",
      thumbnail: betracoin,
      date: "Sep 16, 2020",
      dateObj: new Date("2020-09-16")
    }
  ];

  // Sort YouTube videos by date (newest first)
  const sortedYoutubeVideos = [...youtubeVideos].sort((a, b) => b.dateObj - a.dateObj);

  // Get translated title and description for a video
  const getVideoTranslation = (videoId) => {
    const videoTranslation = t(videoId);
    // If translation exists and is an object, use it; otherwise use fallback
    if (videoTranslation && typeof videoTranslation === 'object') {
      return {
        title: videoTranslation.title || videoId,
        description: videoTranslation.description || ''
      };
    }
    // Fallback - return the key as title
    return { title: videoId, description: '' };
  };

  const videos = [...sortedYoutubeVideos];

  return (
    <React.Fragment>
      {/* breadcrumb start */}
      <ElementBreadcrumb title={tBreadcrumb('title')} bgImage={mediaBg} />
      {/* breadcrumb end */}

      {videos.map((video, index) => {
        const translation = getVideoTranslation(video.videoId);
        return (
          <ElVideoStyleOne
            key={index}
            videoId={video.videoId}
            thumbnail={video.thumbnail}
            title={translation.title}
            date={video.date}
            description={translation.description}
          />
        );
      })}
    </React.Fragment>
  );
};

export default ElementsVideoMain;

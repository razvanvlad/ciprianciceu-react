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


const ElementsVideoMain = () => {
  // YouTube videos with dates
  const youtubeVideos = [
    {
      videoId: "IPYr8a3LgWs",
      thumbnail: prezentareCandidatThumbnail,
      title: "Prezentare Candidat CIPRIAN CICEU",
      date: "Sep 22, 2020",
      dateObj: new Date("2020-09-22"),
      description: "Interviu la Hotel Scala Bucuresti"
    },
    {
      videoId: "aiEKoEc7P2Y",
      thumbnail: incentiveEgyptThumbnail,
      title: "INCENTIVE EGYPT",
      date: "Mar 24, 2023",
      dateObj: new Date("2023-03-24"),
      description: "Second Mainet Incentive in Egypt. After Dubai a Yacht Party on a 'GREEN SEA' we continue with Boat party on the 'RED SEA' and of course the next incentive will be on the 'BLACK SEA' we respect the natural flow of our diamonds positions"
    },
    {
      videoId: "myol9P_KOTE",
      thumbnail: abidjanThumbnail,
      title: "MAINET BIG EVENT ABIDJAN 2023 !! + de 1000 Personnes sur Place !",
      date: "Apr 18, 2023",
      dateObj: new Date("2023-04-18"),
      description: "Dans cette vidéo, je partage avec vous tout sur le MAINET BIG EVENT ABIDJAN 2023 ! !! le CEO Ciprian Ciceu était présent ! Cet événement a été incroyable ! Ne ratez pas cette occasion unique d'apprendre les dernières nouveautés ! Le MAINET BIG EVENT ABIDJAN 2023 ! !"
    },
    {
      videoId: "42VkeRLruqw",
      thumbnail: euSuntCiprianThumbnail,
      title: "Eu sunt Ciprian CICEU",
      date: "Sep 17, 2020",
      dateObj: new Date("2020-09-17"),
      description: "Candidat la primăria sectorului 1 București, din partea Re:Start România. Sunt Ciprian CICEU și vreau sa fac bine! Votati pozitia 13 pe buletinul de vot la postul de primar. Votati pozitia 15 pe buletinul de vot, cap de lista la postul de consilier"
    },
    {
      videoId: "4XQLNYJc2xQ",
      thumbnail: historyBehindThumbnail,
      title: "Ciceu Ciprian - History behind (EN subtitle) / 1994-2022",
      date: "Dec 14, 2022",
      dateObj: new Date("2022-12-14"),
      description: "Présentation des différents affaires entre 1994 et 2022 ♦️ 28 années d'expérience positives et négatives qui ont donné le résultat du jour présents - toujours avec la devise 'Qu'on a jamais une deuxième chance de faire une première impression!' 🏆"
    },
    {
      videoId: "jMdjc-ynPVw",
      thumbnail: mainetDubaiThumbnail,
      title: "Mainet First Incentive in Dubai - 2/12 3/12 & 4/12/2022 Yacht Party 🎊 Awards Gala 🏆 Safari 🐪",
      date: "Dec 12, 2022",
      dateObj: new Date("2022-12-12"),
      description: "Mainet First Incentive in Dubai - 2/12 3/12 & 4/12/2022 Yacht Party 🎊 Awards Gala 🏆 Safari 🐪"
    }
  ];

  // Sort YouTube videos by date (newest first)
  const sortedYoutubeVideos = [...youtubeVideos].sort((a, b) => b.dateObj - a.dateObj);

  // Local MP4 Videos - all using History Behind thumbnail
  // const localVideos = [
  //   {
  //     videoId: "/assets/video/Ciceu-video-1.mp4",
  //     thumbnail: historyBehindThumbnail,
  //     title: "Ciprian Ciceu - Exclusive Content 1",
  //     date: "Jan 3, 2026",
  //     description: "Exclusive content featuring Ciprian Ciceu"
  //   },
  //   {
  //     videoId: "/assets/video/Ciceu-video-2.mp4",
  //     thumbnail: historyBehindThumbnail,
  //     title: "Ciprian Ciceu - Behind the Scenes",
  //     date: "Jan 3, 2026",
  //     description: "Behind the scenes with Ciprian Ciceu"
  //   },
  //   {
  //     videoId: "/assets/video/Ciceu-video-3.mp4",
  //     thumbnail: historyBehindThumbnail,
  //     title: "Ciprian Ciceu - Insights & Perspectives",
  //     date: "Jan 3, 2026",
  //     description: "Insights and perspectives from Ciprian Ciceu"
  //   },
  //   {
  //     videoId: "/assets/video/Ciceu-video-4.mp4",
  //     thumbnail: historyBehindThumbnail,
  //     title: "Ciprian Ciceu - Exclusive Content 2",
  //     date: "Jan 3, 2026",
  //     description: "More exclusive content with Ciprian Ciceu"
  //   }
  // ];

  // Combine: sorted YouTube videos first, then local videos
  // const videos = [...sortedYoutubeVideos, ...localVideos];
  const videos = [...sortedYoutubeVideos];

  return (
    <React.Fragment>
      {/* breadcrumb start */}
      <ElementBreadcrumb title="Media & Press Coverage" />
      {/* breadcrumb end */}

      {videos.map((video, index) => (
        <ElVideoStyleOne
          key={index}
          videoId={video.videoId}
          thumbnail={video.thumbnail}
          title={video.title}
          date={video.date}
          description={video.description}
        />
      ))}
    </React.Fragment>
  );
};

export default ElementsVideoMain;

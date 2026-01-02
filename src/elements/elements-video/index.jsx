import React from "react";
// internal
import ElementBreadcrumb from "@components/common/breadcrumb/element-breadcrumb";
import ElVideoStyleOne from "./el-video-style-1";
import incentiveEgyptThumbnail from "@assets/img/video/thumbnail-INCENTIVE-EGYPT.jpg";
import prezentareCandidatThumbnail from "@assets/img/video/prezentare-candidat.jpg";
import euSuntCiprianThumbnail from "@assets/img/video/eu-sunt-ciprian-ciceu.jpg";
import historyBehindThumbnail from "@assets/img/video/Ciceu Ciprian - History behind.jpg";
import mainetDubaiThumbnail from "@assets/img/video/Mainet First Incentive in Dubai.jpg";


const ElementsVideoMain = () => {
  const videos = [
    {
      videoId: "IPYr8a3LgWs",
      thumbnail: prezentareCandidatThumbnail,
      title: "Prezentare Candidat CIPRIAN CICEU",
      date: "Sep 22, 2020",
      description: "Interviu la Hotel Scala Bucuresti"
    },
    {
      videoId: "aiEKoEc7P2Y",
      thumbnail: incentiveEgyptThumbnail,
      title: "INCENTIVE EGYPT",
      date: "Mar 24, 2023",
      description: "Second Mainet Incentive in Egypt. After Dubai a Yacht Party on a 'GREEN SEA' we continue with Boat party on the 'RED SEA' and of course the next incentive will be on the 'BLACK SEA' we respect the natural flow of our diamonds positions"
    },
    {
      videoId: "42VkeRLruqw",
      thumbnail: euSuntCiprianThumbnail,
      title: "Eu sunt Ciprian CICEU",
      date: "Sep 17, 2020",
      description: "Candidat la primăria sectorului 1 București, din partea Re:Start România. Sunt Ciprian CICEU și vreau sa fac bine! Votati pozitia 13 pe buletinul de vot la postul de primar. Votati pozitia 15 pe buletinul de vot, cap de lista la postul de consilier"
    },
    {
      videoId: "4XQLNYJc2xQ",
      thumbnail: historyBehindThumbnail,
      title: "Ciceu Ciprian - History behind (EN subtitle) / 1994-2022",
      date: "Dec 14, 2022",
      description: "Présentation des différents affaires entre 1994 et 2022 ♦️ 28 années d'expérience positives et négatives qui ont donné le résultat du jour présents - toujours avec la devise 'Qu'on a jamais une deuxième chance de faire une première impression!' 🏆"
    },
    {
      videoId: "jMdjc-ynPVw",
      thumbnail: mainetDubaiThumbnail,
      title: "Mainet First Incentive in Dubai - 2/12 3/12 & 4/12/2022 Yacht Party 🎊 Awards Gala 🏆 Safari 🐪",
      date: "Dec 12, 2022",
      description: "Mainet First Incentive in Dubai - 2/12 3/12 & 4/12/2022 Yacht Party 🎊 Awards Gala 🏆 Safari 🐪"
    }
  ];

  return (
    <React.Fragment>
      {/* breadcrumb start */}
      <ElementBreadcrumb title="Video Content" />
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

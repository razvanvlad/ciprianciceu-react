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
  return (
    <React.Fragment>
      {/* breadcrumb start */}
      <ElementBreadcrumb title="Video Content" />
      {/* breadcrumb end */}

      {/* video one start */}
      <ElVideoStyleOne videoId="IPYr8a3LgWs" thumbnail={prezentareCandidatThumbnail} />
      {/* video one end */}

      {/* video two start */}
      <ElVideoStyleOne videoId="aiEKoEc7P2Y" thumbnail={incentiveEgyptThumbnail} />
      {/* video two end */}

      {/* video three start */}
      <ElVideoStyleOne videoId="42VkeRLruqw" thumbnail={euSuntCiprianThumbnail} />
      {/* video three end */}

      {/* video four start */}
      <ElVideoStyleOne videoId="4XQLNYJc2xQ" thumbnail={historyBehindThumbnail} />
      {/* video four end */}

      {/* video five start */}
      <ElVideoStyleOne videoId="jMdjc-ynPVw" thumbnail={mainetDubaiThumbnail} />
      {/* video five end */}
    </React.Fragment>
  );
};

export default ElementsVideoMain;

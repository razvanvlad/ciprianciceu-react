import React from "react";
// internal
import ElementBreadcrumb from "@components/common/breadcrumb/element-breadcrumb";
import ElVideoStyleOne from "./el-video-style-1";


const ElementsVideoMain = () => {
  return (
    <React.Fragment>
      {/* breadcrumb start */}
      <ElementBreadcrumb title="Video Content" />
      {/* breadcrumb end */}

      {/* video one start */}
      <ElVideoStyleOne videoId="IPYr8a3LgWs" />
      {/* video one end */}

      {/* video two start */}
      <ElVideoStyleOne videoId="aiEKoEc7P2Y" />
      {/* video two end */}

      {/* video three start */}
      <ElVideoStyleOne videoId="IPYr8a3LgWs" />
      {/* video three end */}
    </React.Fragment>
  );
};

export default ElementsVideoMain;

import React from "react";

const social_links = [
  {
    link: "https://www.instagram.com/ciprian_ciceu22?igsh=bXF2OW1sOW9laWI1&utm_source=qr",
    target: "_blank",
    icon: "fa-brands fa-instagram",
    name: "Instagram",
  },
  {
    link: "https://www.tiktok.com/@ciprian.ciceu22?_r=1&_t=ZN-92UEGvw67du",
    target: "_blank",
    icon: "fa-brands fa-tiktok",
    name: "TikTok",
  },
  {
    link: "https://www.facebook.com/share/1FZ8CDueWj/?mibextid=wwXIfr",
    target: "_blank",
    icon: "fa-brands fa-facebook-f",
    name: "Facebook",
  },
  {
    link: "https://www.linkedin.com/in/ciprian-ciceu-30b72045?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    target: "_blank",
    icon: "fa-brands fa-linkedin-in",
    name: "LinkedIn",
  },
  {
    link: "https://x.com/ciceu_ciprian?s=11&t=EBHN-d7VEHH1sp-EP0D8rQ",
    target: "_blank",
    icon: "fa-brands fa-x-twitter",
    name: "X",
  },
];

const SocialLinks = () => {
  return (
    <>
      {social_links.map((l, i) => (
        <a key={i} href={l.link} target={l.target}>
          <i className={l.icon}></i>
        </a>
      ))}
    </>
  );
};

export default SocialLinks;

export function HeaderSocial() {
  return (
    <>
      {social_links.slice(0, 3).map((l, i) => (
        <li key={i}>
          <a href={l.link} target={l.target}>
            <i className={l.icon}></i>
          </a>
        </li>
      ))}
    </>
  );
}

export function SocialShare() {
  return (
    <>
      {social_links.slice(0, 3).map((l, i) => (
        <a key={i} href={l.link} target={l.target}>
          <i className={l.icon}></i>
        </a>
      ))}
    </>
  );
}

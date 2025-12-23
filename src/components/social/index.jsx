import React from "react";

const social_links = [
  {
    link: "https://www.linkedin.com/in/ciprian-ciceu-30b72045/",
    target: "_blank",
    icon: "fa-brands fa-linkedin-in",
    name: "Linkedin",
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

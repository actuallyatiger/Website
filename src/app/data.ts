import { TileSet } from "@/app/lib/declarations";
import {
  siInstagram,
  siSnapchat,
  siDiscord,
  siThreads,
  siFacebook,
  siLinkedin,
  siGithub,
  siProtonmail,
} from "simple-icons";

const tilesets: TileSet[] = [
  {
    title: "Socials",
    tiles: [
      {
        name: "Instagram",
        url: "https://instagram.com/actuallyatiger",
        icon: siInstagram.svg,
      },
      {
        name: "Snapchat",
        url: "https://snapchat.com/add/possiblyatiger",
        icon: siSnapchat.svg,
      },
      {
        name: "Discord",
        url: "https://discord.gg/actuallyatiger",
        icon: siDiscord.svg,
      },
      {
        name: "Threads",
        url: "https://threads.net/@actuallyatiger",
        icon: siThreads.svg,
      },
      {
        name: "Facebook",
        url: "https://facebook.com/possiblyatiger",
        icon: siFacebook.svg,
      },
    ],
  },
  {
    title: "Professional",
    tiles: [
      {
        name: "LinkedIn",
        url: "https://linkedin.com/in/tiger-taylor",
        icon: siLinkedin.svg,
      },
      {
        name: "GitHub",
        url: "https://github.com/yourusername",
        icon: siGithub.svg,
      },
      {
        name: "Email",
        url: "mailto:tiger@tigertaylor.xyz",
        icon: siProtonmail.svg,
      },
    ],
  },
];

export default tilesets;

import { GithubIcon, XIcon, BlueSkyIcon, LinkedInIcon } from "~/assets/social";

type IconType = typeof GithubIcon;

type SocialLink = {
  name: string;
  url: string;
  icon: IconType;
};

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/jsparkdev",
    icon: GithubIcon,
  },
  {
    name: "X",
    url: "https://x.com/jsparkdev",
    icon: XIcon,
  },
  {
    name: "BlueSky",
    url: "https://bsky.app/profile/jspark.dev",
    icon: BlueSkyIcon,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/jsparkdev",
    icon: LinkedInIcon,
  },
] satisfies SocialLink[];

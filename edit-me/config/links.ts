import { CMSLink } from '@config-types/cms-link';
import {
  SiBluesky,
  SiGithub,
  SiInstagram,
  SiLinkedin,
} from '@icons-pack/react-simple-icons';

export const links: CMSLink[] = [
  {
    href: 'https://www.linkedin.com/in/zeyuan-feng/',
    icon: SiLinkedin,
    title: 'LinkedIn',
  },
  {
    href: 'https://github.com/AisakaJerry',
    icon: SiGithub,
    title: 'GitHub',
  },
  {
    href: 'https://bsky.app',
    icon: SiBluesky,
    title: 'Bluesky',
  },
  {
    href: 'https://www.instagram.com',
    icon: SiInstagram,
    title: 'Instagram',
  },
];

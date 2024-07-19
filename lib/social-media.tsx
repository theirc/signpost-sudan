// A module for handling social media.
import { SocialMediaProps } from '@ircsignpost/signpost-base/dist/src/header-banner';

import facebookImage from '../public/facebook.svg';
import messengerImage from '../public/messenger.svg';
import whatsappImage from '../public/whatsapp.svg';
import emailImage from '../public/email (1).svg';
import hotlineImage from '../public/Hotline.png';

export interface SocialMediaLink {
  title: string;
  href: string;
}

export interface SocialMediaLinks {
  facebookLink: SocialMediaLink;
  messengerLink: SocialMediaLink;
  whatsappLink: SocialMediaLink;
  emailLink: SocialMediaLink;
  hotlineLink: SocialMediaLink;
}

export function getSocialMediaProps(
  socialMediaLinks: SocialMediaLinks
): SocialMediaProps[] {
  return [
    {
      ...socialMediaLinks.facebookLink,
      image: facebookImage,
    },
    {
      ...socialMediaLinks.messengerLink,
      image: messengerImage,
    },
    {
      ...socialMediaLinks.whatsappLink,
      image: whatsappImage,
    },
    {
      ...socialMediaLinks.emailLink,
      image: emailImage,
    },
    {
      ...socialMediaLinks.hotlineLink,
      image: hotlineImage,
    },
  ];
}

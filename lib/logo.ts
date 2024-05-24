import type { LogoProps } from '@ircsignpost/signpost-base/dist/src/header';
import type { Locale } from '@ircsignpost/signpost-base/dist/src/locale';

import logoAr from '../public/Kade_Nafham_Ar.png';

export const getHeaderLogoProps = (currentLocale: Locale): LogoProps => {
  let imgSrc: string;
  switch (currentLocale.url) {
    case 'ar':
    default:
      imgSrc = logoAr.src;
      break;
  }
  return {
    src: imgSrc,
  };
};

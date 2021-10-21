import React from 'react';
import {
  SocialProvider,
  SocialLink,
} from '@mui-treasury/components/socialLink';
import { useRoundSocialLinkStyles } from '@mui-treasury/styles/socialLink/round';


export  const Networks = React.memo(function RoundSocialLink() {
  return (
    <>
      <SocialProvider useStyles={useRoundSocialLinkStyles}>
        <SocialLink
          brand={'FacebookCircle'}
          href={'https://www.facebook.com/facundomaksud/'}
        />
        <SocialLink
          brand={'Instagram'}
          href={'https://www.instagram.com/maksudcarp14/'}
        />
        <SocialLink
          brand={'LinkedIn'}
          href={'https://www.linkedin.com/in/facundo-maksud/'}
        />
        <SocialLink
          brand={'GithubCircle'}
          href={'https://github.com/maksudxx'}
        />
        <SocialLink
          brand="Whatsapp"
          href={'https://wa.me/+5493888603670/?text=Hola Facundo.!'}
          target="_blank"
          
        />
      </SocialProvider>
    </>
  );
});
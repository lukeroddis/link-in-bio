import {
    EnvelopeIcon,
    PhoneCallIcon,
    WhatsappLogoIcon,
    LinkedinLogoIcon,
    GithubLogoIcon,
    //FileTextIcon,
    BicycleIcon,
} from '@phosphor-icons/react/dist/ssr';

import type {Config} from './types';

export const config: Config = {
    // Set your or company name
    title: 'Luke Roddis',
    // Add a brief description to display below the name
    bio: 'Software Engineer',
    // Select a background style
    background: 'demo',
    // Set your Google Analytics id to enable
    // gaId: 'G-XXXXXXXXX',
    // Localise sharing text
    shareTitle: 'Share link',
    // Set icon links to contact you to display below the header
    headerLinks: [
        {
            title: 'Email',
            id: 'email',
            url: 'mailto:luke@roddis.dev',
            icon: EnvelopeIcon,
        },
        {
            title: 'Call',
            id: 'phone',
            url: 'tel:+447890311309',
            icon: PhoneCallIcon,
        },
        {
            title: 'Whatsapp',
            id: 'whatsapp',
            url: 'https://wa.me/447890311309',
            icon: WhatsappLogoIcon,
        },
    ],
    // Set main links
    mainLinks: [
        // {
        //     id: 'cv',
        //     title: 'Download CV',
        //     url: 'https://example.com',
        //     icon: FileTextIcon,
        // },
        {
            id: 'github',
            title: 'GitHub',
            url: 'https://github.com/lukeroddis',
            icon: GithubLogoIcon,
        },
        {
            id: 'linkedin',
            title: 'LinkedIn',
            url: 'https://www.linkedin.com/in/lukeroddis/',
            icon: LinkedinLogoIcon,
        },
        {
            id: 'strava',
            title: 'Strava',
            url: 'https://www.strava.com/athletes/27614436',
            icon: BicycleIcon,
        },
    ],
};

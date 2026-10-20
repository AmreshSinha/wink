// All visible content lives here. Assumptions the owner must verify:
//   - the blog URL is assumed to be https://fossian.com (the owner said the blog will be live).
//   - sshot.fossian.com and spotify-cards.fossian.com did not resolve during the build, so no
//     project is labelled "live"; the links are kept as given.
//   - case-study bodies are written from the one-line descriptions and the project images
//     only; expand them with real detail (problem, decisions, outcome).

export type Status = 'building' | 'shipped';

export type Project = {
  slug: string;
  title: string;
  summary: string;            // one sentence
  event: string;              // where it was built
  year: number;
  status: Status;
  link: string;               // repo or deployment
  linkLabel: string;
  tools: string[];
  cover: { src: string; width: number; height: number; alt: string };
  body: { heading: string; text: string }[];
  placeholder?: boolean;      // true = body copy is thin, owner should expand
};

export const site = {
  name: 'Amresh Sinha',
  short: 'amresh',
  role: 'SDE2 at Wishlink',
  url: 'https://amresh.fossian.com',
  description: 'Amresh Sinha is an SDE2 at Wishlink in Gurugram, engineering across the stack. B.Tech from IIT Guwahati. Hackathon builds, small APIs, Docker, Traefik and Arch Linux.',
  email: 'amresh@duck.com',
  location: 'Gurugram, India',
  coords: '28.46 n, 77.03 e',
  education: 'IIT Guwahati',
  hobbies: ['trekking', 'cycling', 'swimming', 'travelling'],
  employer: 'Wishlink',
  nav: [
    { label: 'Works', href: '/works', route: 'works' },
    { label: 'Blog', href: 'https://fossian.com', route: 'blog', external: true, placeholder: true },
    { label: 'Me', href: '/me', route: 'me' },
  ],
  socials: [
    { label: 'GitHub', href: 'https://github.com/AmreshSinha' },
    { label: 'Twitter', href: 'https://twitter.com/aps_codes' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/amresh-sinha/' },
    { label: 'Blog', href: 'https://fossian.com', placeholder: true },
  ],
};

// Real facts only: where he has been "up", in status-page form.
export const experience = [
  { host: 'wishlink', role: 'SDE2, engineering across the stack and multiple verticals', when: 'up since Aug 2024', status: 'up' as const },
  { host: 'nobias', role: 'frontend app engineering intern, React Native and Expo', when: 'summer 2023', status: 'past' as const },
  { host: 'iit guwahati', role: 'B.Tech', when: '2020 to 2024', status: 'past' as const },
];

export const home = {
  tagline: 'SDE2 at Wishlink. I build across the stack and the box it ships in.',
  sub: 'In Gurugram since Aug 2024. B.Tech from IIT Guwahati, 2024.',
  cta: { label: 'See my work', href: '/works' },
  statement: 'Self taught since a 2011 desktop and a dial up dongle. Then IIT Guwahati, two Inter IIT medals, a Smart India Hackathon final, and now an SDE2 at Wishlink who still moves his own servers from Nginx to Traefik because it is more fun.',
  errorCard: {
    title: ':)',
    lines: [
      'Your project ran into a problem that it couldn’t handle. >W<',
      'Let me help you. Whether it’s a chit chat or a discussion over something crucial, I am always available.',
    ],
    cta: 'Email me',
  },
};

export const about = {
  intro: [
    'Hi.',
    'I am Amresh.',
    'I am a web developer, DevOps engineer, open source enthusiast, and since 2024 an SDE2 at Wishlink.',
    'I love trekking, cycling, swimming and travelling.',
    'Grab something to eat as this is going to be long.',
    'Keep scrollin’! Here’s my journey.',
  ],
  // hop labels come from the text itself (school standard, college year); no years are invented.
  journey: [
    { hop: 'std 4', text: 'I got my first computer in 2011. I was in 4th standard at that time.' },
    { hop: 'std 4', text: 'I started out with BASIC, QBASIC and Turtle. Turtle was awesome!' },
    { hop: 'std 5', text: 'In 5th standard my dad bought me a dongle. I never knew how the Internet would look like. Till that time I had only read about the Internet in books.' },
    { hop: 'std 5', text: 'I plugged it in. Opened IE and boom! The Internet was so awesome. I could literally go anywhere, search for any info, chat with friends, and play games.' },
    { hop: 'std 6', text: 'Transitioning to 6th standard. I got introduced to HTML, CSS and JavaScript. It was cool! I thought I was one step closer to making my own billion dollar site like Google xD' },
    { hop: 'std 7, 8', text: 'In 7th or 8th (can’t recall that correctly) I learned more about Python.' },
    { hop: 'std 9', text: 'Later in 9th standard I was introduced to C++.' },
    { hop: 'std 10', text: 'Sadly after 10th, I was not in touch with programming for 2 years, all thanks to JEE.' },
    { hop: 'jee', text: 'I got into IIT Guwahati. When I was preparing for JEE I had plans to fully devote my time to coding after I entered college.' },
    { hop: 'yr 1', text: 'So yeah, in 1st year I learned OpenCV, Node.js, React, Express and MongoDB. Made some good friends :)' },
    { hop: 'yr 2', text: 'Transitioning to 2nd year. Got into our college’s Coding Club. Learned more about web frameworks like Next.js.' },
    { hop: 'std 8, aside', text: 'BTW I forgot to tell you. I have loved cloud stuff from way back in 8th standard. Playing with virtual machines, Linux VMs, deploying and experimenting with new things.' },
    { hop: 'yr 2', text: 'At the start of 2nd year I started out with DevOps. Though I had some knowledge of Docker, I brushed it up again.' },
    { hop: 'yr 2', text: 'Learned more about Linux. (I use Arch BTW!)' },
    { hop: 'sem 4', text: 'In 4th semester I took part in Inter IIT in a team, under ISRO\u2019s problem statement. We placed 3rd.' },
    { hop: 'yr 2', text: 'Around then I restarted my blog Fossian and started out using Traefik (RIP Nginx).' },
    { hop: 'yr 3', text: 'Inter IIT again in 3rd year, this time under MetaMask\u2019s open problem statement. We came back with a silver medal.' },
    { hop: 'yr 3', text: 'Summer after 3rd year: interned at Nobias doing frontend app engineering. Multiple prototypes and POCs, and their main app in React Native and Expo.' },
    { hop: 'sem 7', text: 'After 7th semester, Smart India Hackathon in Odisha. Grand finalists.' },
    { hop: '2024', text: 'College ended in May. Convocation in July.' },
    { hop: 'now', text: 'Joined Wishlink in Aug 2024 as an SDE2. Engineering across the stack and multiple verticals, from Gurugram.' },
    { hop: 'now', text: 'And this brings us to the present me.' },
    { hop: 'eof', text: 'That’s probably enough for today! Still scrollin’?' },
  ],
};

export const projects: Project[] = [
  {
    slug: 'paasify',
    title: 'Paasify',
    summary: 'A platform for developers to deploy their apps on the cloud with a single click.',
    event: 'Personal project',
    year: 2023,
    status: 'building',
    link: 'https://github.com/Paasify',
    linkLabel: 'GitHub org',
    tools: ['JavaScript', 'Node.js', 'React', 'Express', 'MongoDB', 'Socket.io', 'Docker'],
    cover: { src: '/work/paasify.jpg', width: 1600, height: 1196, alt: 'Paasify architecture diagram: a Next.js dashboard, an Express REST API and MongoDB behind Traefik, all in Docker on Ubuntu' },
    body: [
      { heading: 'What it is', text: 'A small platform as a service. You hand it a repo, it builds a container, runs it, and puts it behind a router with a URL. The kind of thing I kept rebuilding by hand for every side project.' },
      { heading: 'How it is put together', text: 'Traefik is the entrypoint. It routes HTTPS traffic to a Next.js dashboard, an Express REST API and each deployed app. MongoDB holds the state, Socket.io streams build logs to the dashboard, and everything runs as Docker containers on Ubuntu.' },
      { heading: 'Status', text: 'Work in progress. The architecture is settled; the deploy pipeline and the dashboard are being built.' },
    ],
    placeholder: true,
  },
  {
    slug: 'securenet',
    title: 'SecureNet',
    summary: 'Analysis and identification of malicious mobile applications.',
    event: 'Smart India Hackathon',
    year: 2023,
    status: 'shipped',
    link: 'https://github.com/AmreshSinha/SecureNet_Backend',
    linkLabel: 'Backend repo',
    tools: ['Python', 'FastAPI', 'Redis', 'MobSF', 'Third party APIs', 'REST', 'Docker', 'LLM'],
    cover: { src: '/work/securenet.jpg', width: 1600, height: 899, alt: 'SecureNet app screens: a trust score of 48 out of 100, static analysis results, a privacy dashboard and a dynamic analysis view listing malicious domains per app' },
    body: [
      { heading: 'The problem', text: 'Problem statement SIH1381 at Smart India Hackathon, built with team SecureNauts: find out which apps on a phone are malicious, and show the owner something they can act on.' },
      { heading: 'What the backend does', text: 'A FastAPI service runs static analysis on APKs through MobSF, dynamic analysis of network behaviour, and checks domains and IPs against third party reputation APIs. Redis queues the scans. An LLM turns the raw findings into a readable summary. Each app gets a trust score out of 100, and the privacy dashboard shows which apps used the camera, location and microphone in the last 24 hours.' },
      { heading: 'Shipped as', text: 'A Dockerised REST backend with the Android app in front of it.' },
      { heading: 'Outcome', text: 'Grand finalists at Smart India Hackathon 2023, held in Odisha.' },
    ],
    placeholder: true,
  },
  {
    slug: 'shopai',
    title: 'ShopAI',
    summary: 'A fashion shopping assistant that converses and recommends outfits.',
    event: 'Flipkart Grid 5.0',
    year: 2023,
    status: 'shipped',
    link: 'https://github.com/AmreshSinha/ShopAI',
    linkLabel: 'Repo',
    tools: ['TypeScript', 'Node.js', 'React', 'FastAPI', 'Selenium', 'Google Cloud Platform', 'GPT-4'],
    cover: { src: '/work/shopai.jpg', width: 1600, height: 1137, alt: 'ShopAI home screen: a search box asking what outfit you are looking for, category chips and example prompts such as an outfit for Durga Puja in Guwahati' },
    body: [
      { heading: 'The problem', text: 'Flipkart Grid 5.0 asked for a conversational shopping assistant. ShopAI is the answer for fashion: you describe the occasion, it talks back and suggests complete outfits.' },
      { heading: 'How it works', text: 'A React front end with text and voice input. A FastAPI service drives the conversation with GPT-4, and Selenium pulls live product data so the recommendations point at real items. Categories cover sports, weddings, trekking, ethnic wear and more. Deployed on Google Cloud Platform.' },
      { heading: 'A detail', text: 'One of the example prompts is an outfit for Durga Puja in Guwahati. The assistant was built where it would be used.' },
    ],
    placeholder: true,
  },
  {
    slug: 'alphaq',
    title: 'alphaQ',
    summary: 'A Web3 decentralised ad platform built on a MetaMask Snap.',
    event: 'Inter IIT Tech Meet 11.0',
    year: 2023,
    status: 'shipped',
    link: 'https://github.com/AmreshSinha/alphaQ',
    linkLabel: 'Repo',
    tools: ['TypeScript', 'Next.js', 'React', 'MetaMask Snap', 'MongoDB'],
    cover: { src: '/work/alphaq.jpg', width: 1600, height: 1112, alt: 'Illustration of three people around a laptop showing a MetaMask ad, drawn in red ink' },
    body: [
      { heading: 'The problem', text: 'Consensys set a MetaMask problem statement at Inter IIT Tech Meet 11.0: ads inside a wallet, without the wallet or an ad network tracking the user.' },
      { heading: 'The idea', text: 'alphaQ puts the ad logic in a MetaMask Snap, so targeting happens on the user’s side and the platform never sees a profile. Advertisers manage campaigns in a Next.js app backed by MongoDB.' },
      { heading: 'Built with', text: 'A team from IIT Guwahati over the Inter IIT build window.' },
      { heading: 'Outcome', text: 'Silver medal at Inter IIT Tech Meet 11.0.' },
    ],
    placeholder: true,
  },
  {
    slug: 'solar-flare-detector',
    title: 'Solar Flare Detector',
    summary: 'Web based detection of solar bursts in X ray light curves, for ISRO.',
    event: 'Inter IIT Tech Meet 10.0',
    year: 2022,
    status: 'shipped',
    link: 'https://github.com/search?q=inter-iit-isro+user%3AAmreshSinha&type=Repositories&ref=advsearch&l=&l=',
    linkLabel: 'Repos on GitHub',
    tools: ['JavaScript', 'Python', 'React', 'Flask', 'Recharts.js'],
    cover: { src: '/work/solar.jpg', width: 1600, height: 900, alt: 'Title slide from Team 11: ISRO’s web based automatic identification of solar bursts in X ray light curves, with the sun on the left and the earth on the right' },
    body: [
      { heading: 'The problem', text: 'ISRO’s problem statement at Inter IIT Tech Meet 10.0: take X ray light curves from a solar observatory and automatically mark the bursts.' },
      { heading: 'What we built', text: 'A Flask service runs the detection over uploaded light curve data. A React front end plots the curve with Recharts and overlays the detected bursts, so a scientist can check each one. Everything runs in the browser against the API; no desktop tooling needed.' },
      { heading: 'Outcome', text: 'Team 11 from IIT Guwahati placed 3rd.' },
    ],
    placeholder: true,
  },
  {
    slug: 'sshot',
    title: 'SShot',
    summary: 'An API for capturing web screenshots, with parameters for every part of the capture.',
    event: 'Personal project',
    year: 2022,
    status: 'shipped',
    link: 'https://sshot.fossian.com',
    linkLabel: 'sshot.fossian.com',
    tools: ['JavaScript', 'Node.js', 'Express', 'Puppeteer', 'Redis', 'Docker'],
    cover: { src: '/work/sshot.jpg', width: 1600, height: 640, alt: 'SShot logo: a small robot hanging from a pink parachute next to the words sshot, web screenshot API' },
    body: [
      { heading: 'What it is', text: 'One endpoint. Give it a URL and it returns a screenshot. Query parameters set the viewport, device scale, full page or above the fold, delay, and output format.' },
      { heading: 'How it runs', text: 'Express in front of a pool of Puppeteer browsers. Redis caches recent captures so repeated requests do not spin up Chrome again. The whole thing ships as a Docker image and sat behind my Traefik router.' },
    ],
    placeholder: true,
  },
  {
    slug: 'spotify-promocards-api',
    title: 'Spotify PromoCards API',
    summary: 'An unofficial generator for Spotify style shareable song cards.',
    event: 'Personal project',
    year: 2021,
    status: 'shipped',
    link: 'https://spotify-cards.fossian.com',
    linkLabel: 'spotify-cards.fossian.com',
    tools: ['JavaScript', 'Node.js', 'Express', 'Spotify Web API', 'node-canvas', 'Docker'],
    cover: { src: '/work/spotify.jpg', width: 1600, height: 840, alt: 'A generated promo card: the Alchemy album art by Blanke on a pale blue background with a Listen on Spotify mark' },
    body: [
      { heading: 'What it is', text: 'Spotify makes those shareable song cards inside its own app. This API makes one for any track, album or artist from a URL, so you can embed it anywhere.' },
      { heading: 'How it works', text: 'Express fetches metadata and artwork from the Spotify Web API, samples a background colour from the cover, and draws the card with node-canvas. Packaged in Docker. My first project that other people actually used.' },
    ],
    placeholder: true,
  },
];

export const featured = ['securenet', 'shopai', 'alphaq'];

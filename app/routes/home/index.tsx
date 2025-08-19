import type { Route } from './+types/index';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'My Simple Portfolio App' },
    { name: 'description', content: 'Welcome To Unu Developer' },
  ];
}

export default function Home() {
  const now = new Date().toISOString();
  if (typeof window === 'undefined') {
    console.log('Server Render at', now);
  } else {
    console.log('Client Render at', now);
  }

  return <section>Hello</section>;
}

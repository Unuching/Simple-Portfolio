import type { Route } from './+types/index';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'My Simple Portfolio App' },
    { name: 'description', content: 'Welcome To Unu Developer' },
  ];
}

export default function Home() {
  return <>Hello</>;
}

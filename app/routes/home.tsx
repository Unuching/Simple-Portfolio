import type { Route } from './+types/home';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'My Simple Portfolio App' },
    { name: 'description', content: 'Welcome To Unu Developer' },
  ];
}

export default function Home() {
  return (
    <>
      <h1>My App</h1>
    </>
  );
}

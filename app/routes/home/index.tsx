import type { Project } from '~/types';
import type { Route } from './+types/index';
import FeaturedProjects from '~/components/featuredProjects';
import type { ComponentProps } from 'react';
import { log } from 'console';
export function meta({}: Route.MetaArgs) {
  return [
    { title: 'My Simple Portfolio App' },
    { name: 'description', content: 'Welcome To Unu Developer' },
  ];
}

export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ projects: Project[] }> {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/projects`);
  const data = await res.json();
  return { projects: data };
}

const HomePage = ({ loaderData }: Route.ComponentProps) => {
  const { projects } = loaderData;

  return (
    <>
      <FeaturedProjects />
    </>
  );
};
export default HomePage;

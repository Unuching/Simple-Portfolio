import type { Project } from '~/types';
import type { Route } from './+types/index';
import FeaturedProjects from '~/components/featuredProjects';
import type { ComponentProps } from 'react';
import AboutPreview from '~/components/aboutPreview';
import type { PostsMeta } from '~/types';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'My Simple Portfolio App' },
    { name: 'description', content: 'Welcome To Unu Developer' },
  ];
}

export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ projects: Project[] }> {
  const url = new URL(request.url);

  const [projectRes, postRes] = await Promise.all([
    fetch(`${import.meta.env.VITE_API_URL}/projects`),
    fetch new URL('/posts-meta.json', url)
  ]);

  // const res = await fetch(`${import.meta.env.VITE_API_URL}/projects`);
  // const data = await res.json();

if(!projectRes.ok || !postRes.ok){
  throw new Error("Failed to get Data")
}

  return { projects: data };
}

const HomePage = ({ loaderData }: Route.ComponentProps) => {
  const { projects } = loaderData;

  return (
    <>
      <FeaturedProjects projects={projects} count={2} />
      <AboutPreview />
    </>
  );
};
export default HomePage;

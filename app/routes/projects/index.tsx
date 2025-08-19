import type { Route } from './+types/index';
import type { Project } from '~/types';
import ProjectCard from '~/components/peojectCard';

export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ projects: Project[] }> {
  const res = await fetch('http://localhost:8000/projects');
  const data = await res.json();

  return { projects: data };
}

const ProjectPage = ({ loaderData }: Route.ComponentProps) => {
  const { projects } = loaderData as { projects: Project[] };
  console.log(projects);

  return (
    <>
      <h2 className='text-3xl font-bold text-white mb-8 text-center'>
        My projects
      </h2>
      <div className='grid gap-6 md:grid-cols-2'>
        {projects.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </div>
    </>
  );
};

export default ProjectPage;

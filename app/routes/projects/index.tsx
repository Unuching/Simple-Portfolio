import type { Route } from './+types/index';
import type { Project } from '~/types';
import ProjectCard from '~/components/peojectCard';
import { useState } from 'react';

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
  const [currentPage, setCurrentPage] = useState(1);

  const projectPerPage = 4;
  const totalPage = Math.ceil(projects.length / projectPerPage);

  const indexOfLast = currentPage * projectPerPage;
  const indexOfFirst = indexOfLast - projectPerPage;
  const currentProjects = projects.slice(indexOfFirst, indexOfLast);

  const renderPagination = () => (
    <div className='flex justify-center gap-2 mt-8'>
      {Array.from({ length: totalPage }, (_, idx) => (
        <button
          key={idx + 1}
          className={`px-3 py-1 cursor-pointer rounded ${
            currentPage === idx + 1
              ? 'bg-blue-600 text-white'
              : 'bg-gray-700 text-gray-200'
          }`}
          onClick={() => setCurrentPage(idx + 1)}
        >
          {idx + 1}
        </button>
      ))}
    </div>
  );

  return (
    <>
      <h2 className='text-3xl font-bold text-white mb-8 text-center'>
        My projects
      </h2>
      <div className='grid gap-6 md:grid-cols-2'>
        {currentProjects.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </div>
      {totalPage > 1 && renderPagination()}
    </>
  );
};

export default ProjectPage;

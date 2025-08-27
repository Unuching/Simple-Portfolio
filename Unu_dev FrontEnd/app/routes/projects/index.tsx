import type { Route } from './+types/index';
import type { Project, StrapiProject, StrapiResponse } from '~/types';
import ProjectCard from '~/components/peojectCard';
import { useState } from 'react';
import Pagination from '~/components/pagination';
import { AnimatePresence, motion } from 'framer-motion';

export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ projects: Project[] }> {
  // const res = await fetch(`http://localhost:8000/projects`);
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/projects?populate=*`
  );
  const json: StrapiResponse<StrapiProject> = await res.json();

  const projects = json.data.map((item) => ({
    id: item.id,
    documentId: item.documentId,
    title: item.title,
    description: item.description,
    image: item.image?.url
      ? `${import.meta.env.VITE_STRAPI_URL}${item.image.url}`
      : '/images/no-image.png',
    url: item.url,
    date: item.date,
    category: item.category,
    featured: item.featured,
  }));

  return { projects };
}

const ProjectPage = ({ loaderData }: Route.ComponentProps) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);

  const projectPerPage = 10;

  const { projects } = loaderData as { projects: Project[] };
  //console.log(projects);

  // get unique categories

  const categories = [
    'All',
    ...new Set(projects.map((project) => project.category)),
  ];

  //filter projects
  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const totalPage = Math.ceil(filteredProjects.length / projectPerPage);

  const indexOfLast = currentPage * projectPerPage;
  const indexOfFirst = indexOfLast - projectPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirst, indexOfLast);

  return (
    <>
      <h2 className='text-3xl font-bold text-white mb-8 text-center'>
        My projects
      </h2>
      <div className='flex flex-wrap gap-2 mb-8'>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => {
              setSelectedCategory(category);
              setCurrentPage(1);
            }}
            className={`px-3 py-1 rounded text-sm cursor-pointer ${selectedCategory === category ? 'bg-blue-600 text-white' : 'bg-gray-600 text-gray-200'}`}
          >
            {category}
          </button>
        ))}
      </div>
      <AnimatePresence mode='wait'>
        <motion.div layout className='grid gap-6 md:grid-cols-2'>
          {currentProjects.map((project) => (
            <motion.div key={project.id} layout>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      <Pagination
        totalPage={totalPage}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </>
  );
};

export default ProjectPage;

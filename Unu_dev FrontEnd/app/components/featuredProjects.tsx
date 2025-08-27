// import type { Project } from '~/types';
// import ProjectCard from './peojectCard';

// type featuredProjectProps = {
//   projects: Project[];
//   count: number;
// };

// const FeaturedProjects = ({ projects, count = 4 }: featuredProjectProps) => {
//   const featured = projects.filter((p) => p.featured).slice(0, count);
//   return (
//     <section>
//       <h2 className='text-2xl font-bold mb-6 text-gray-200'>
//         Featured Projects
//       </h2>
//       <div className='grid gap-6 sm:grid-cols-2'>
//         {featured.map((project) => (
//           <ProjectCard key={project.id} project={project} />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default FeaturedProjects;

import type { Project } from '~/types';
import ProjectCard from './peojectCard';

type FeaturedProjectsProps = {
  projects: Project[];
  count?: number;
};

const FeaturedProjects = ({ projects, count = 4 }: FeaturedProjectsProps) => {
  const featured = Array.isArray(projects)
    ? projects.filter((p) => p.featured).slice(0, count)
    : [];

  return (
    <section>
      <h2 className='text-2xl font-bold mb-6 text-gray-200'>
        Featured Projects
      </h2>

      {featured.length > 0 ? (
        <div className='grid gap-6 sm:grid-cols-2'>
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <p className='text-gray-400'>No featured projects yet.</p>
      )}
    </section>
  );
};

export default FeaturedProjects;

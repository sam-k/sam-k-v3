export const getPersonal = async () =>
  (await import('../../content-build/data/personal.json')).default;

export const listProjects = async (featured?: boolean) => {
  const data = (await import('../../content-build/data/projects.json')).default;
  if (!featured) {
    return data;
  }
  return {
    projects: data.projects.filter(project => project.featured),
  } satisfies typeof data;
};

export const listNotes = async (featured?: boolean) => {
  const data = (await import('../../content-build/posts/metadata.json'))
    .default;
  if (!featured) {
    return data;
  }
  return {
    metadata: data.metadata.filter(note => note.featured),
  } satisfies typeof data;
};

export const getNote = async (name: string) =>
  (await import(`../../content-build/posts/${name}.json`)).default;

export const listExperiences = async () =>
  (await import('../../content-build/data/experiences.json')).default;

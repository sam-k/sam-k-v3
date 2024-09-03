import data from '../../../content-build/data/projects.json';

export const onRequestGet: PagesFunction = () =>
  Response.json({
    projects: data.projects.filter(project => project.featured),
  } satisfies typeof data);

import data from '../../content-build/data/projects.json';

export const onRequestGet: PagesFunction = () => Response.json(data);

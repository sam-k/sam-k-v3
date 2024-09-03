import data from '../../content-build/data/experiences.json';

export const onRequestGet: PagesFunction = () => Response.json(data);

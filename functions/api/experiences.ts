import data from '../../content/src/data/experiences.json';

export const onRequestGet: PagesFunction = () => Response.json(data);

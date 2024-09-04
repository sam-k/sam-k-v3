import data from '../../../content-build/posts/index.json';

export const onRequestGet: PagesFunction = context =>
  Response.json(
    (data as Record<string, unknown>)[
      Array.isArray(context.params.name)
        ? context.params.name[0]
        : context.params.name
    ]
  );

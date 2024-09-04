export const onRequestGet: PagesFunction = async context =>
  Response.json(
    await import(
      `../../../content-build/posts/${
        Array.isArray(context.params.name)
          ? context.params.name[0]
          : context.params.name
      }.json`
    )
  );

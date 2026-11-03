export default async function sitemap() {
  const siteUrl = process.env.SITE_URL?.trim();

  if (!siteUrl) {
    return [];
  }

  return [
    {
      url: new URL("/", siteUrl).toString(),
      lastModified: new Date(),
    },
  ];
}

import type { APIRoute } from 'astro';
import { getAllSlugs } from '../lib/api';

export const prerender = false;

export const GET: APIRoute = async ({ site }) => {
    const siteUrl = site ? site.origin : 'https://www.eveandroque.com';
    let slugs: string[] = [];
    try {
        slugs = await getAllSlugs();
    } catch (err) {
        console.error('Failed to fetch slugs for sitemap:', err);
    }

    const currentDate = new Date().toISOString().split('T')[0];

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${siteUrl}/listings</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
${slugs
    .map(
        (slug) => `  <url>
    <loc>${siteUrl}/listings/${slug}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`
    )
    .join('\n')}
</urlset>`.trim();

    return new Response(xml, {
        headers: {
            'Content-Type': 'application/xml; charset=utf-8',
            'Cache-Control': 'public, max-age=3600, s-maxage=3600',
        },
    });
};

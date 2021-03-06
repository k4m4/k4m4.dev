const withMdxEnhanced = require('next-mdx-enhanced');
const rehypeKatex = require('rehype-katex');
const remarkAutolinkHeadings = require('remark-autolink-headings');
const remarkMath = require('remark-math');
const remarkSlug = require('remark-slug');
const { archivedBlogSlugs } = require('./data/archive');

const archivedBlogRedirects = () => archivedBlogSlugs.map(slug => {
	return {
		source: `/${slug}`,
		destination: `/archive/${slug}`,
		permanent: true,
	};
});

module.exports = withMdxEnhanced({
	layoutPath: 'layouts',
	defaultLayout: true,
	fileExtensions: ['mdx'],
	remarkPlugins: [
		remarkSlug,
		remarkAutolinkHeadings,
		remarkMath,
	],
	rehypePlugins: [
		rehypeKatex,
	],
})({
	async redirects() {
		return archivedBlogRedirects();
	},
	env: {
		DEFAULT_DOMAIN: 'kama.tech',
	},
});

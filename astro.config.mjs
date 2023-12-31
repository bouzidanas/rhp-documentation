import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'rhp',
			social: {
				github: 'https://github.com/bouzidanas/react-html-plots',
			},
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'Introduction', link: '/getting-started/introduction/' },
						{ label: 'Quick Start', link: '/getting-started/quick-start/' },
						{ label: 'Installation', link: '/getting-started/installation/' },
					],
				},
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Components', link: '/guides/components/' },
						{ label: 'Templates', link: '/guides/templates/' },
						{ label: 'State Management', link: '/guides/state-management/' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
			customCss: [
				// Relative path to your custom CSS file
				'./src/customizations/styles/custom1.css',
			],
			components: { Header: './src/customizations/components/Header.astro' },
		}),
	],
});

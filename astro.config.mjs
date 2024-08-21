import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({

	output: 'server',
	adapter: netlify(),
	edgeMiddleware: true,

	//site: 'https://alexabreup.github.io',
	// base: 'intercomelt',

	integrations: [
		starlight({
			title: 'Departamento de Hardware;Treinamento BOE',
			customCss: [
				// Relative path to your custom CSS file
				'./src/styles/custom.css',],
			
      logo: {
        src: './src/assets/my-logo.svg',
      },
			social: {
				github: 'https://github.com/',
			},
			title: 'Departamento de Projetos',
			locales: {
			  root: {
				label: 'Português do Brasil',
				lang: 'pt-br',
			  },
			},
			sidebar: [
				
				{
					label: 'Guia',
					label: 'Guia',
					autogenerate: { directory: 'guia' },
					badge: 'Treinamento',

				},
				{
					label: 'Interface de Comandos',
					label: 'Interface de Comandos',
					autogenerate: { directory: 'Configurar a Interface de Comandos' },
					badge: 'Aplicativo',

				},
				{
					label: 'Referências',
					autogenerate: { directory: 'Referencias' },
				},
			],
			
		}),
	],

});

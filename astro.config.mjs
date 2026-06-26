import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({

	output: 'server',
	adapter: netlify(),
	edgeMiddleware: true,

	site: 'https://alexabreup.github.io',
	// base: 'intercomelt',

	integrations: [
		starlight({
			title: 'Departamento de Projetos',
			customCss: [
				// Relative path to your custom CSS file
				'./src/styles/custom.css',],
			
      logo: {
        src: './src/assets/my-logo.svg',
      },
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/alexabreup/intercomelt' },
			],
			title: 'Departamento de Projetos',
			locales: {
			  root: {
				label: 'Português do Brasil',
				lang: 'pt-BR',
			  },
			},
			sidebar: [
				{
					label: 'Guia',
					badge: 'Treinamento',
					items: [
						{ autogenerate: { directory: 'guia' } }
					]
				},
				{
					label: 'Interface de Comandos',
					badge: 'Aplicativo',
					items: [
						{ autogenerate: { directory: 'Configurar a Interface de Comandos' } }
					]
				},
				{
					label: 'Referências',
					items: [
						{ autogenerate: { directory: 'Referencias' } }
					]
				},
			],
			
		}),
	],

});

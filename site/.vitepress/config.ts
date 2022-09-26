import { defineConfig } from 'vitepress';

export default defineConfig({
	title: 'Reconnect-Ed Hackathon',
	description:
		'A hackathon based in Juanita High School aiming to spread awareness of mental health, neuro divergency and their respective resources.',
	vue: {
		reactivityTransform: true,
	},
	head: [
		['link', { rel: 'icon', href: '/icon.jpg' }],
		['meta', { property: 'og:type', content: 'website' }],
		['meta', { property: 'og:title', content: 'Reconnect-Ed Hackathon' }],
		['meta', { property: 'og:image', content: '/icon.jpg' }],
		[
			'meta',
			{ property: 'og:url', content: 'https://reconnect-ed.github.io/' },
		],
		[
			'meta',
			{
				property: 'og:description',
				content:
					'A hackathon based in Juanita High School aiming to spread awareness of mental health, neuro divergency and their respective resources.',
			},
		],
		[
			'meta',
			{
				name: 'theme-color',
				content: '#646cff',
			},
		],
		[
			'link',
			{
				rel: 'preconnect',
				href: 'https://fonts.googleapis.com',
			},
		],
		[
			'link',
			{
				rel: 'preconnect',
				href: 'https://fonts.gstatic.com',
			},
		],
		[
			'link',
			{
				rel: 'stylesheet',
				href: 'https://fonts.googleapis.com/css2?family=Fira+Code&display=swap',
			},
		],
	],
	// this broke gh pages for some reason
	// cleanUrls: 'with-subfolders',
	themeConfig: {
		socialLinks: [
			{
				icon: 'github',
				link: 'https://github.com/Reconnect-Ed',
			},
			{
				icon: 'discord',
				link: 'https://discord.gg/hgbtWavSDy',
			},
			{
				icon: 'instagram',
				link: 'https://www.instagram.com/reconnected2022/',
			},
			{
				icon: {
					svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Twitch</title><path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"/></svg>',
				},
				link: 'https://twitch.tv',
			},
			{
				icon: {
					svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 280.3 242" enable-background="new 0 0 280.3 242" xml:space="preserve"><g id="XMLID_1_">	<path id="XMLID_6_" d="M133.7,76H118v90h14.7c30.9,0,45.1-18.1,45.1-45C177.8,90.9,164.9,76,133.7,76z"/>	<path id="XMLID_9_" d="M210.2,0H70.1L0,121l70.1,121h140.1l70.1-121L210.2,0z M132.7,195H89V47h45.8c42.1,0,73.3,20.1,73.3,74   C208.1,172.8,170.6,195,132.7,195z"/></g></svg>',
				},
				link: 'https://devpost.com/',
			},
		],
		siteTitle: 'Reconnect-Ed Hackathon',
		logo: '/icon.jpg',
		nav: [
			{
				text: 'Register',
				link: 'https://docs.google.com/forms/d/1rj9pFcr66k-Pn2U-4mRA3e7ERCYqx-cXlZVY9YAWJZs/viewform',
			},
			{
				text: 'About',
				link: '/about.md',
			},
			{
				text: 'Contact Us',
				link: '/contact.md',
			},
			{
				text: 'Schedule',
				link: '/schedule.md',
			},
			{
				text: 'Who We Are',
				link: '/team.md',
			},
		],
	},
	markdown: {
		theme: {
			dark: 'one-dark-pro',
			light: 'one-dark-pro',
		},
		lineNumbers: true,
	},
});

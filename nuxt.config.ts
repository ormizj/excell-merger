// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ['nuxt-electron'],
	electron: {
		build: [
			{
				// Main-Process entry file of the Electron App.
				entry: 'electron/main.ts',
			},
		],
	},
	compatibilityDate: '2024-04-03',
	devtools: { enabled: true },
	future: {
		compatibilityVersion: 4,
	},
});

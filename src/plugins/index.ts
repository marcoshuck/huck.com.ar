/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Plugins
import vuetify from './vuetify'
import router from '../router'

// Types
import type { App } from 'vue'
import gtag from 'vue-gtag'
import hotjar from 'vue-hotjar'

export function registerPlugins (app: App) {
  app
    .use(vuetify)
    .use(router)
    .use(hotjar, {
      id: '3706798',
      snippetVersion: 6,
    })
    .use(gtag, {
      appName: 'Marcos Huck - Website',
      pageTrackerScreenviewEnabled: true,
      config: {
        id: 'UA-43481624-1',
        params: {
          anonymize_ip: true,
        }
      }
    }, router)
}

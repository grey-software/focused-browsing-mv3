import fs from 'fs-extra'
import type { Manifest } from 'webextension-polyfill'
import type PkgType from '../package.json'
import { isDev, isFirefox, port, r } from '../scripts/utils'

const devPolicy = `script-src \'self\' http://localhost:${port}; object-src \'self\'`
const prodPolicy = 'script-src \'self\'; object-src \'self\''

export async function getManifest() {
  const pkg = (await fs.readJSON(r('package.json'))) as typeof PkgType

  // update this file to update this manifest.json
  // can also be conditional based on your need
  const manifest: Manifest.WebExtensionManifest = {
    manifest_version: 3,
    name: pkg.displayName || pkg.name,
    version: pkg.version,
    description: pkg.description,
    action: {
      default_icon: './assets/icon-512.png',
      default_popup: './dist/popup/index.html',
    },
    options_ui: {
      page: './dist/options/index.html',
      open_in_tab: true,
    },
    background: isFirefox
      ? {
          scripts: ['dist/background/index.mjs'],
          type: 'module',
        }
      : {
          service_worker: './dist/background/index.mjs',
        },
    permissions: ['tabs', 'storage', 'activeTab'],
    host_permissions: ['https://api.github.com/graphql'],
    content_scripts: [
      // {
      //   matches: ['*://*.twitter.com/*'],
      //   js: ['dist/contentScripts/index.global.js'],
      // },
      {
        matches: ['*://*.twitter.com/*', 'https://access.grey.software/result*'],
        js: ['dist/contentScripts/index.global.js'],
      },
    ],
    web_accessible_resources: [
      {
        resources: ['dist/contentScripts/style.css'],
        matches: ['<all_urls>'],
      },
    ],
    content_security_policy: {
      extension_pages: isDev ? devPolicy : prodPolicy,
    },
  }
  return manifest
}

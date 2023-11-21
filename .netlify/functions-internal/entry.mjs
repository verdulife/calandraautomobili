import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_77687d15.mjs';
import './chunks/astro_e6290f41.mjs';
import './chunks/pages/image-endpoint_10b24a94.mjs';

const _page0  = () => import('./chunks/image-endpoint_71db0d47.mjs');
const _page1  = () => import('./chunks/index_23c4d3c0.mjs');
const _page2  = () => import('./chunks/production_a679117a.mjs');
const _page3  = () => import('./chunks/beginning_cbc874c9.mjs');
const _page4  = () => import('./chunks/prototype_19e363dd.mjs');
const _page5  = () => import('./chunks/heritage_9ac524bb.mjs');
const _page6  = () => import('./chunks/contact_dc5725a3.mjs');
const _page7  = () => import('./chunks/legal_68f9aa80.mjs');
const _page8  = () => import('./chunks/404_7692fd3c.mjs');
const _page9  = () => import('./chunks/form_9c564055.mjs');const pageMap = new Map([["node_modules/.pnpm/astro@3.0.12/node_modules/astro/dist/assets/image-endpoint.js", _page0],["src/pages/index.astro", _page1],["src/pages/production.astro", _page2],["src/pages/beginning.astro", _page3],["src/pages/prototype.astro", _page4],["src/pages/heritage.astro", _page5],["src/pages/contact.astro", _page6],["src/pages/legal.astro", _page7],["src/pages/404.astro", _page8],["src/pages/api/form.ts", _page9]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };

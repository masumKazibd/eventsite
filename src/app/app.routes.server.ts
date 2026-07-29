import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'speakers/:slug',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => [{ slug: 'jane-doe' }, { slug: 'john-smith' }, { slug: 'alice-chen' }],
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];

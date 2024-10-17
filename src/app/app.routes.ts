import { Route, UrlSegment } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    children: [
      {
        loadComponent: () =>
          import('./nx-welcome.component').then((m) => m.NxWelcomeComponent),
        matcher: (url) => {
          if (url.length === 0)
            return {
              consumed: url,
              posParams: { username: new UrlSegment(url[0]?.path, {}) },
            };

          if (url[0].path.match('foo') || url[0].path.match('bar')) {
            return {
              consumed: url,
              posParams: { username: new UrlSegment(url[0].path.slice(1), {}) },
            };
          }

          return null;
        },
      },
    ],
  },
];

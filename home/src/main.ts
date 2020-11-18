import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import * as singleSpa from 'single-spa';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then(() => singleSpa.start({ urlRerouteOnly: true }))
  .catch((err) => console.error(err));

export const runScript = (url: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = url;
    script.onload = resolve;
    script.onerror = reject;

    const firstScript = document.getElementsByTagName('script')[0];
    firstScript.parentNode.insertBefore(script, firstScript);
  });
};

const loadApp = async (
  appUrl: string,
  windowLibraryName: string
): Promise<singleSpa.LifeCycles> => {
  await runScript(appUrl);
  return window[windowLibraryName];
};

singleSpa.registerApplication({
  name: 'first-app',
  app: () => {
    console.log('first app called');
    return loadApp('http://localhost:5500/main.js', 'first');
  },
  activeWhen: (path) => {
    return path.pathname.includes('first-app');
  },
});

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  AUTH_API :'http://localhost:9090/',
  MASTER_API :'http://localhost:9060/',

  // AUTH_API :'http://localhost:9005/',
  // MASTER_API :'https://ifahmasterservice-dev.xyz/',
  // PAYMENT_URL:'http://localhost:9007/redirect/abhi/',
  AUTH_API1:'http://localhost:9060/',
  POS_API :'http://localhost:9090/',//pos reg
  hmr: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

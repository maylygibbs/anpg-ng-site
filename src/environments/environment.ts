// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  appId:1100,
  appSiteDomain:'https://anpg-ng-site.azurewebsites.net',
  appPlataformaPacoteDomain:'https://anpg-ng-plataforma.azurewebsites.net',
  social_networks: {
    twitter : '#',
    facebook : '#',
    linkedin : '#',
    instagram : '#',
  },
  form: {
    url: {
      validations : {
        pattern: '^(https?|http):\\/\\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\\.)*[a-zA-Z0-9-]+\\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2,10}))(:[0-9]+)*(\\/($|[a-zA-Z0-9.,?\'\\\\+&%$#=~_-]+))*$'
      }
    },
    password: {
      validations: {
        pattern: '^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&.+=]).*$',
      }
    },
    number: {
      validations: { 
        pattern: '^[0-9]*$',
      }
    }
  },
  language:{
    pt:'pt',
    en:'en'
  },
  api_pacotesdados: {
    url: 'https://anpgwebapi.azure-api.net/api',
    suscription: '068d5be69cda47bdba0268ab32becf33'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

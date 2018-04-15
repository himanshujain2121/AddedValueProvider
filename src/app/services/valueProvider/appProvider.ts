import { InjectionToken} from '@angular/core';
import { IAppProvider } from './IAppProvider';

export const APP_PROVIDER = new InjectionToken<IAppProvider>('valueProvider');

export const AppConfig : IAppProvider  = {
 pageSize : 10,
 pageSizeOptions : [10,20,30],
 AppName : 'Hospital Management App'
}; 
import {bootstrap}    from 'angular2/platform/browser';
import {AppComponent} from './app.component';
import {APP_BASE_HREF} from 'angular2/router';
import {provide} from 'angular2/core';

bootstrap(AppComponent, [provide(APP_BASE_HREF, {useValue : '/' })]);
import {Routes, RouterModule} from '@angular/router';
import {AuthorComponent} from './author/author.component';
import {AuthorsComponent} from './authors/authors.component';
import {CoursesComponent} from './courses/courses.component';
import {GitHubComponent} from './github/github.component';


const routes: Routes = [
    {
        path: '/authors',
        component: AuthorsComponent,
    },
    {
        path: '/authors/:id',
        component: AuthorComponent
    },
    {
        path: '/courses',
        component: CoursesComponent
    },
    {
        path: '/github',
        component: GitHubComponent
    },
    {
        path: '',
        redirectTo: '/authors',
        pathMatch: 'full'
    }
];

export const routing = RouterModule.forRoot(routes);
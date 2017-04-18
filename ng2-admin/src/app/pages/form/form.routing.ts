import {Routes, RouterModule} from "@angular/router";
import {FormComponent} from "./form.component";
import {add} from "./add/add.component";
import {search} from "./search/search.component";
/**
 * Created by Administrator on 2017/4/18.
 */

const routes : Routes = [
  {
/*    path: '',
    component: formComponent,
    children: [
      {path: 'add', component: add},
      {path: 'search', component: search}
    ]*/

    path: '',
    component: FormComponent
  }
]

export const routing = RouterModule.forChild(routes);

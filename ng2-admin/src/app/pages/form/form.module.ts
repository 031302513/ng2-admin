/**
 * Created by Administrator on 2017/4/18.
 */
import {NgModule} from "@angular/core";
import {routing} from "./form.routing";
import {CommonModule} from "@angular/common";
import {FormComponent} from "./form.component";
@NgModule({
  import: [
    CommonModule,
    routing
  ],
  declarations: {
    FormComponent
  }
})
export class FormModule {}

import {CanDeactivate} from "@angular/router";
import {ProductComponent} from "../product/product.component";
import {Injectable} from "@angular/core";
/**
 * Created by Administrator on 2017/4/20 0020.
 */

@Injectable()
export class UnsavedGuard implements CanDeactivate<ProductComponent>{

  canDeactivate(component: ProductComponent){
    return window.confirm('信息还没有保存，你确定要离开吗？');
  }
}

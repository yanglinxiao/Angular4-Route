import {Resolve, ActivatedRouteSnapshot, Router, RouterStateSnapshot} from "@angular/router";
import {Product} from "../product/product.component";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
/**
 * Created by Administrator on 2017/4/25.
 */

@Injectable()
export class ProductResolve implements Resolve<Product>{
  constructor(private router: Router){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product>|Promise<Product>|Product {
    let productId : number = route.params['id'];
    if(productId === 1 ){
      console.log(new Product(1,'iphone7'));
      return new Product(1,'iphone7');
    }else{
      this.router.navigate(['/home']);
      return undefined;
    }
  }
}

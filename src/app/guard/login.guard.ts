import {CanActivate} from "@angular/router";
import {Injectable} from "@angular/core";
/**
 * Created by Administrator on 2017/4/20 0020.
 */
@Injectable()
export class LoginGuard implements CanActivate{

  canActivate(){
    let loggin : boolean = Math.random() > 0.5;
    if(loggin){
      console.log('用户已登录');
    }
    return loggin;
  }
}

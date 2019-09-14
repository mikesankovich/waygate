import { Injectable } from '@angular/core';
import { Observable, of, EMPTY } from 'rxjs';
import { take, mergeMap, catchError} from 'rxjs/operators'
import { ApiService } from '../services/api.service';
import { Routes, RouterModule, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
   providedIn: 'root'
})
export class SkillsResolverService implements Resolve<any> {
   constructor(private api: ApiService) { }
   resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Observable<never> {
   const url = '';
   console.log(route);
   return this.api.get('content', 'chapter2', 'skill-list').pipe(catchError(error   => {
      return EMPTY
   }), mergeMap(res => {
         if (res) {
            console.log(res);
            return of(res)
         } else {
            return EMPTY;
         }
       })
     )
   }
 }

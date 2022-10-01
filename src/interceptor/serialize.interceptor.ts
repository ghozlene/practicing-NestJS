import { UseInterceptors, NestInterceptor, ExecutionContext, CallHandler } from "@nestjs/common";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { plainToClass } from "class-transformer";

export class SerializeInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {

        console.log('im running before the request handler  = ', context);

        return next.handle().pipe(map((data: any) => {
            //Run something before the response send is sent out
            console.log('im running before response sent out + ', data);
        })

        );
    }

}

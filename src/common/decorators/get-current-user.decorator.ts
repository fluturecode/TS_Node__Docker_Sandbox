import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { User } from '@entities';


export const GetCurrentUser = createParamDecorator((data, ctx: ExecutionContext): User => {
    const req = ctx.switchToHttp().getRequest();

    return req.user;
});
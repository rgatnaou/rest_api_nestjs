import { AuthService } from '../auth.service';
import { Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
declare const jwtStrategy_base: new (...args: any[]) => Strategy;
export declare class jwtStrategy extends jwtStrategy_base {
    private authService;
    private config;
    constructor(authService: AuthService, config: ConfigService);
}
export {};

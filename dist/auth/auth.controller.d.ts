import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signup(dto: AuthDto): Promise<{
        token: Promise<string>;
    }>;
    signin(dto: AuthDto): Promise<{
        token: Promise<string>;
    }>;
}

import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signup(dto: AuthDto): Promise<{
        id: number;
        creatAt: Date;
        updateAt: Date;
        email: string;
        hash: string;
        firstname: string;
        lastName: string;
    }>;
    signin(dto: AuthDto): Promise<{
        id: number;
        creatAt: Date;
        updateAt: Date;
        email: string;
        hash: string;
        firstname: string;
        lastName: string;
    }>;
}

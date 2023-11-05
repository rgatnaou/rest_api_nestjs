import { PrismaService } from "src/prisma/prisma.service";
import { AuthDto } from "./dto";
export declare class AuthService {
    private prisma;
    constructor(prisma: PrismaService);
    signin(dto: AuthDto): Promise<{
        id: number;
        creatAt: Date;
        updateAt: Date;
        email: string;
        hash: string;
        firstname: string;
        lastName: string;
    }>;
    signup(dto: AuthDto): Promise<{
        id: number;
        creatAt: Date;
        updateAt: Date;
        email: string;
        hash: string;
        firstname: string;
        lastName: string;
    }>;
}

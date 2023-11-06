import { PrismaService } from "src/prisma/prisma.service";
import { AuthDto } from "./dto";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";
export declare class AuthService {
    private prisma;
    private jwt;
    private config;
    constructor(prisma: PrismaService, jwt: JwtService, config: ConfigService);
    signin(dto: AuthDto): Promise<{
        token: Promise<string>;
    }>;
    signup(dto: AuthDto): Promise<{
        token: Promise<string>;
    }>;
    signToken(email: string, userId: number): {
        token: Promise<string>;
    };
}

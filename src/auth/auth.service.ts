import { ForbiddenException, Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { AuthDto } from "./dto";
import * as argon from 'argon2'
import { PrismaClientKnownRequestError, PrismaClientUnknownRequestError } from "@prisma/client/runtime/library";

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService){}
    async signin(dto:AuthDto) {

        const user = await this.prisma.user.findUnique({
            where:{
                email:dto.email,
            },
        })
        if (!user) throw new ForbiddenException('Credentials incorrect');
        const pass = await argon.verify(
            user.hash,
            dto.password,
        ); 
        if (!pass) throw new ForbiddenException('Credentials incorrect');
        delete user.hash;
        console.log(user);
        return user;
    }
    
    async signup(dto:AuthDto) {
        
        const pass = await argon.hash(dto.password);
        try
        {
            const user = await this.prisma.user.create({
                data: {
                    email:dto.email,
                    hash:pass,
                },
                // select : {
                    //     id:true,
                    //     email:true,
                    //     creatAt:true,
                    // }
                })
                delete user.hash;
                return user;
            } catch(error){
                if (error instanceof PrismaClientKnownRequestError){
                    if (error.code === 'P2002')
                    throw new ForbiddenException("Credentials taken");
                throw error;
            }
        } 
    }
}
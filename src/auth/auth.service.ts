import { Injectable } from "@nestjs/common";


@Injectable()
export class AuthService {
    
    login() {
        return {msg : "hi i am signed in"};
    }

    signup() {
        return {msg : "hi i am signed up"};
    }
}
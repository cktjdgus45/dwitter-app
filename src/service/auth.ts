
type Token = {
    username: string;
    token: string;
}

interface IAuthService {
    login(username: string, password: string): Promise<Token>;
    logout(): Promise<void>;
    signup(username: string, password: string, name: string, email: string, url: string): Promise<Token>;
    me(): Promise<Token>;
}

export default class AuthService implements IAuthService {
    async login(username: string, password: string): Promise<Token> {
        return {
            username: 'cha',
            token: "abc1234",
        }
    }
    async logout(): Promise<void> {
        return;
    }
    async signup(username: string, password: string, name: string, email: string, url: string): Promise<Token> {
        return {
            username: 'cha',
            token: "abc1234",
        }
    }
    async me(): Promise<Token> {
        return {
            username: 'cha',
            token: "abc1234",
        }
    }
}
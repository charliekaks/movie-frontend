export class UserAuthBase{
    email: string = '';
    bearerToken: string = '';
    isAuthenticated: boolean = false;

    init(): void{
        this.email = '';
        this.bearerToken = '';
        this.isAuthenticated = false;
    }
}
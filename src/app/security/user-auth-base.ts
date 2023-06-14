export class UserAuthBase{
    email: string = '';
    bearerToken: string = '';
    isAuthenticated: boolean = false;

    init(): void{
        this.email = '';
        this.bearerToken = '';
        this.isAuthenticated = false;
    }

    getClaimProperty(obj:any,key:any): boolean{
        let status = obj[key];
        return status;
    }
}
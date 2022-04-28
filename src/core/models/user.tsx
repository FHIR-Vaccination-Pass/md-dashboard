export default class User {
    id: number | undefined;
    username: string | undefined;
    password: string | undefined;
    email: string | undefined;
    firstName: string | undefined;
    lastName: string | undefined;
    token: string | undefined;
    tokenExpiration: Date | undefined;

    constructor(id?: number, username?: string, password?: string, email?: string, firstName?: string, lastName?: string) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get tokenValid() {
        return this.token && this.tokenExpiration && this.tokenExpiration > new Date();
    }

    setToken(token: string, expirationDate: Date) {
        this.token = token;
        this.tokenExpiration = expirationDate;
    }
}
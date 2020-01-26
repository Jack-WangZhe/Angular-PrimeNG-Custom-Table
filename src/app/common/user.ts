export class User {
    userId: string;
    userName: string;
    userSex: string;
    userSignature: string;
    userAge: number;

    constructor(
        userId: string,
        userName: string,
        userSex: string,
        userSignature: string,
        userAge: number) {
        this.userId = userId;
        this.userName = userName;
        this.userSex = userSex;
        this.userSignature = userSignature;
        this.userAge = userAge;
    }
}
export class Client {
    id: number = 0;
    isActivated: boolean = true;
    constructor(
        public age: number,
        public name: string,
        public gender: string,
        public company: string,
        public email: string,
        public phone: number,
        public address: number,
    ){

    }
}


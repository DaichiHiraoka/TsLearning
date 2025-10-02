export const test =() =>{
    /*console.log('test');

    const name: string = 'mike'; //string
    const age: number = 25; //number
    const isStudent: boolean = false; //boolean
    const hobbies: string[] = ['reading', 'gaming', 'coding']; //array of strings
    const address: object = { //object
        city: 'Los Angeles',
        state: 'CA'
    };//object
    const today: Date = new Date(); //Date
    const none: null = null; //null
    const notDefined: undefined = undefined; //undefined
    const random: any = 'Hello World'; //any
    const gender: 'male' | 'female' = 'male'; //union
    const value: string | number | null = 'Hello World'; //union
    console.log(name);

    const reverseArray = (arr: string[], hasTom?: boolean): string[] => {
        if(hasTom){
            arr.unshift('tom');
        }
        return arr.reverse();
    }
    console.log(reverseArray(hobbies,true));

    const user = {
        userID:1,
        name:'mike',
        age:25,
        email:'mike@gmail.com',
        isActive:true,
    }

    interface UserProps {
        userID: number;
        name: string;
        age: number;
        email: string;
        
    }
    interface UserProps {
        isActive: boolean;
    }//同じinterfaceを複数記述するとマージされる

    interface AdminUser extends UserProps {
        role:string; //"admin", "leader", "manager"
    }

    type UserProps = {
        userID: number;
        name: string;
        age: number;
        email: string;
        isActive: boolean;
    }
    const createaccount = (accountInfo: UserProps): void => {
        //function call
    }
    createaccount({
        userID:1,
        name:'mike',
        age:25,
        email:'mike@gmail.com',
        isActive:true,
    });*/

    class User {
        userID: number;
        name: string;
        age: number;
        email: string;
        isActive: boolean;

        constructor(userID: number, name: string, age: number, email: string, isActive: boolean) {
            this.userID = userID;
            this.name = name;
            this.age = age;
            this.email = email;
            this.isActive = isActive;

            this.getProfile();
        }
        private getProfile(): string {
            return `Name: ${this.name}, Age: ${this.age}`;
        }
        public sayHello(): void {
            console.log(`Hello, ${this.name}`);
        }
    }
    const user = new User(1, 'mike', 25, "mike@gmail.com", true);
    class Admin extends User {
        role: string;
        constructor(userID: number, name: string, age: number, email: string, isActive: boolean, role: string) {
            super(userID, name, age, email, isActive);
            this.role = role;
        }
    }
    const adminUser = new Admin(1, 'mike', 25, "mike@gmail.com", true, "admin");
    adminUser.sayHello();//親クラスのメソッド 

}
export const test =() =>{
    
    /*//型注釈の基礎
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


    //関数の型注釈
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


    //クラスの基礎
    /*class User {
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
    adminUser.sayHello();//親クラスのメソッド */


    /*//ジェネリクス
    const foo=<T>(arg: T,): T => arg;//どの型も許容するが、anyとは違い型チェックされる

    function func<T>(x: T): T | number {
        return typeof x === "string" ? x.length : 0;
    }
    //入力した型に関わらずnumberを返すことを許容したい場合はこのようにする
    foo<string>('hello');*/


    /*//Null合体演算子
    const fetchUserData = async()=>{
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1',{
            useId:1,
        });
        return response.data.response;
    }
    const isActive:boolean = fetchUserData() ?? false;//nullまたはundefinedの場合falseを代入

    //if(isActive){...}*/


    /*//optional chaining
    const fetchUserData = async()=>{
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1',{
            useId:1,
        });
        return response.data;
    }
    const useInfoData = fetchUserData();
        // {
            // id: 1, 
            // name: "Leanne Graham",
            // email: "leanne.graham@example.com"
            //  address: {
            //      street: "Kulas Light",
            //      city: "Gwenborough"
            //  },
        //}
    const userCity = useInfoData?.address?.city;//addressやcityが存在しない場合undefinedを返す*/
}//他との型の整合性で動作テストできない場合はとりあえずany指定して後から直すと良い
let str: string

str = 'abc';


let numArr = [1, 2, 3];
const result = numArr.find(item => item > 2) as number
result * 5


let v1: string = 'abc'
let v2: number = 10
let v3: boolean = true
let nu: null = null
let un: undefined = undefined

let v4: string | null = null

let v5: 1 | 2 | 3 = 2


let arr: number[] = [1, 2, 3]
let arr1: Array<string> = ['a', 'b', 'c']

let t1: [number, string, number?] = [1, 'a', 2]


enum MyEnum {
    A,
    B,
    C
}


console.log(MyEnum.A)
console.log(MyEnum[0])


function MyFn(a: number, b: string): string {
    return a + b
}


function MyFn_2(a = 10, b: string, c?: boolean, ...rest: number[]): number {
    return 100
}

const f = MyFn_2(20, 'abc', true, 1, 2, 3, 11)



///////////////////////////////////////////////////////////////////////////////////////
interface Obj {
    name: string,
    age: number
}

const obj: Obj = {
    name: 'a',
    age: 10
}
const obj2: Obj = {
    name: 'b',
    age: 11
}




type MyUserName = string | Number

let a: MyUserName = 'abc'


function myFn_3<T>(a: T, b: T): T[] {
    return [a, b]
}

myFn_3<number>(1, 2)



myFn_3<string>('a', 'b')


myFn_3('a', 'b')
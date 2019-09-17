let flag: boolean = true;
let str: string = '';
let num: number = 123;
let obj: object = Object.create(null);
let arr: number[] = [1, 2];
let arrS: Array<string> = ['strrr', 'inggg'];
let arrT: [number, string] = [123, 'string'];
enum Color {
    Red = 1,
    Green = 2,
    Blue = 3
}
let colorName: any = Color.Red;
function fn(): void {
}
let u: undefined = undefined;
let n: null = null;
// 类型断言 
let any: any = 'string';
let strany: number = (any as string).length
let strany2: number = (<string>any).length

// 接口
interface inter {
    str?: string, // ? 表示可选
    num: number,
    readonly bool:boolean // readonly 表示只读
}
function fnint(p: inter): void {
    p.num = 123;
    p.str = 'str';
}
// 接口继承 待补充

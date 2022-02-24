/** export: 다른파일에서 사용할 수 있다. -> 단, 다른파일에서 모듈문법을 사용해야함.(import) */

/** 선택적 export */
export const title = 'very good';

export function print(value){
    console.log(value);
}

const exportArgu1 = '1';
const exportArgu2 = '2';
const exportArgu3 = '3';

/** export를 할 대상을 {}로 묶는방법.  */
export {exportArgu1, exportArgu2 as Argu2, exportArgu3};


/** default: 하나만 보낼 수 있음. -> 모듈 파일내에서 한번만 사용가능. */
export default 'unique';
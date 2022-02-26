/**
 *   2022.02.26 Ezen
 * 
 *   1. 조건문: if, switch
 *   2. 반복문: for, while
 *  
 */

/**
 *  문제1.
 *  다음의 switch문을 if문으로 변환하시오.
 *  
    const 수학 = "B";

    switch (수학) {
        case 'A':
        case 'B':
        case 'C':
            console.log("이 과목을 Pass 했습니다.");
            break;
        default:
            console.log("이 과목을 Pass하지 못했습니다.");
            break;
    }

    break가 없는 경우: case에 맞는 조건에 도달한 이후 break가 있는 곳까지 계속 진행된다.
 */

    const 수학 = "B";
    if(수학 === 'A' || 수학 === 'B' || 수학 === 'C') console.log('이 과목을 Pass 했습니다.');
    else console.log('이 과목을 Pass하지 못했습니다');


   /**
    *   문제2.
    *   한 개의 2진수는 `0`과 `1` 두 개의 정보를 표시할 수 있고 
    *   두 개의 이진수는 `00`,`01`,`10`,`11`과 같이 총 네 개의 정보를 표시할 수 있다.
    *   이처럼 이진수가 하나 늘어날 때 마다 2배씩 표현할 수 있는 정보의 수가 늘어날 때 
    *   10개의 이진수는 총 몇개의 정보를 표현할 수 있는지를 while문으로 구현하시오.
    * 
    */
    
   let idx = 1;
   let value = 1;
   while(idx < 11){
       console.log(`이진수 ${idx}개는 ${value*2}개의 정보를 표시가능`);
       value *= 2;
       idx += 1;
   }
   
   let cnt = 1;
   for(let i=1; i< 11; i++){
        console.log(`이진수 ${i}개는 ${cnt*2}개의 정보를 표시가능`);
        cnt *=2;
   }
   
   
   /**
    *   문제3.
    *   for문을 사용하여 0부터 10미만의 정수 중에서 홀수만을 큰수부터 출력하시오.
    * 
    */
   // Even , OddNum
   for(let a=9; a>0; a--){

    if(a % 2 !== 0) console.log(`홀수 : ${a}`);
    
   }

   /**
    *   문제4.
    *   while문을 사용하여 0 부터 10 미만의 정수 중에서 홀수만을 큰수부터 출력하시오.
    * 
    */
   
   let initVal = 10;
   while(initVal >0 ){
       
        if(initVal % 2 !== 0){
            console.log(`홀수 : ${initVal}`);
        }
        initVal--;
   }

   
   /**
    *   문제5.
    *   1부터 20 미만의 정수 중에서 2 또는 3의 배수인 수의 총합을 구하시오. 
    * 
    */

   const two = 2;
   const three = 3;
   let twoThreeSum = 0;

   for(let c=1; c<20; c++){
        if(c % two ===0 || c % three === 0){
            twoThreeSum += c;
        }
   }
   console.log(`2 또는 3의 배수인 수의 총합 : ${twoThreeSum}`);


   /**
    *   문제6.
    *   두 개의 주사위를 던졌을 때, 눈의 합이 6이 되는 모든 경우의 수를 출력하고 
    *   경우의 수는 총 몇가지 인지를 아래와 같이 출력하는 코드를 작성하시오.
    * 
    */

   // [1,5] .. 경우의수는 5개입니다.
   let sixCase = 0;   

   for(let d=1; d<7; d++){
       for(let e=1; e<7; e++){
           if(d+e === 6){
                let sixCaseArr = [];
                sixCaseArr.push(d,e);
                console.log(sixCaseArr);
                sixCase++;
           }
       }
   }
   console.log(`합이 6이 나오는 경우의 수는 ${sixCase} 입니다.`);


   /**
    *   문제7.
    *   for문을 중첩하여 실행하여 아래와 같은 출력 결과를 만드시오.
    * 
        0 1 2 3 
        1 2 3 4 
        2 3 4 5 
        3 4 5 6
    * 
    */

    let sampleItem = '';
    for(let f=0; f<4; f++){
        for(let g=0; g<4; g++){
            
            sampleItem += f+g;
        }
        console.log(sampleItem);  
        sampleItem = '';
    }


    /**
     *   문제8.
     *   아래와 같은 출력 결과가 나타나도록 중첩 반복문을 for 문 형식으로 구현하시오.
     * 
     *   1
         12
         123
         1234
         12345
         123456
         1234567
     * 
     */

    let addNumItem = '';
    for(let h=1; h<8; h++){
        addNumItem += h;
        console.log(addNumItem);
    }


    /**
     *   문제9.
     *   number라는 변수를 정의하고 1 혹은 2의 값을 임의로 할당하시오. 이 변수에는 1이나 2밖에 저장될 수 없습니다.
     *   구구단 프로그램을 만들고자 한다.
     *   전체를 출력하는 구구단이 아니라 number가 1일 때는 홀수 단(3, 5, 7, 9), 
     *   number가 2일 때는 입력하면 짝수 단(2, 4, 6, 8)을 출력하는 프로그램을 완성하시오.
     * 
     */

    let number = 2; // 1 or 2
    
    if(number === 1){
        for(let m=2; m<9; m+=2){
            for(let n=1; n<10; n++){
                console.log(`${m} * ${n} = ${m*n}`);
            }
        }
    } else if(number === 2){
        for(let m=3; m<10; m+=2){
            for(let n=1; n<10; n++){
                console.log(`${m} * ${n} = ${m*n}`);
            }
        }
    }


    /** 
     *   2중 for문을 사용하여 *이 1개씩 감소하도록 출력.
     * 
     *   ******
     *   *****
     *   ****
     *   ***
     *   **
     *   *
     * 
     */

    for(let p=8; p>1; p--){
        let box = '';
        for(let q=1; q<p-1; q++){
            box += '*';
        }
        console.log(box);
    }

   

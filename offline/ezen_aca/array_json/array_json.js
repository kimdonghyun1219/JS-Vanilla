  /** 
  *   ezen Academy
  * 
  *   @date: 2022-03-05   
  *   @keyword: array, json
  *   @content: array(1~11), json(12~)  
  * 
  */


 /**
  *   문제1. 
  *   실행결과에서 제시하는 것과 같이 배열에 저장되어 있는 값들을 반전 변환처리를 완성하시오.
  * 
  *   const check_list = [true, false, false, true, false];
  *   before --> true, false, false, true, false
  *   after --> false, true, true, false, true
  * 
  */
    const check_list = [true, false, false, true, false];
    console.log(`before --> ${check_list}`);

    check_list.forEach((val,idx)=> check_list[idx] = !val );
    console.log(`after --> ${check_list}`);


 /**
 *   문제2. 
 *   학생의 총점과 평균점수를 구하라.
 * 
 *   html: 75
 *   css: 82
 *   javascript: 91
 * 
 */
    const grade = [75, 82, 91];
    let sum =0 , avg = 0;

    grade.forEach((val,idx)=> sum += val);

    avg = (sum / grade.length).toFixed(2); 
    console.log(`총점: ${sum}점, 평균점수: ${avg}점`);


 /**
 *   문제3. 
 *   다음 자료는 일~토요일까지 1주일간 아르바이트를 한 시간이다.
 *   금요일에는 사정으로 인해 10시간을 근무하였다.
 *   이 사람의 시급이 4,500원 이었지만 목요일부터 5,200원으로 올랐다고 가정했을 때
 *   일주일간의 총 급여를 구하라.
 * 
 *   {
 *      '일요일': 7,
 *      '월요일': 5,
 *      '화요일': 5,
 *      '수요일': 5,
 *      '목요일': 5,
 *      '금요일': 10,
 *      '토요일': 7,
 *   }   
 *  
 */
    const time = [7,5,5,5,5,10,7];
    let money = 0;

    time.forEach((val,idx)=> money += val * (idx < 4 ? 4500 : 5200) );
    console.log(`1주일간의 전체급여 : ${money}원`);


 /**
 *   문제4. 
 *   상품의 가격을 원소로 갖는 1차 배열 price와 
 *   각 상품의 수량을 원소로 갖는 1차 배열 qty를 다음과 같이 정의하였을 때
 *   이 사람이 총 얼마를 결제해야 하는지 총 결제금액을 구하라.
 *   
 *   const price = [38000, 20000, 17900, 17900];
 *   const qty = [6,4,3,5];
 *   let money = 0;
 * 
 */ 
    const price = [38000, 20000, 17900, 17900];
    const qty = [6,4,3,5];
    let money = 0;

    price.forEach((val,idx)=> money += val * qty[idx] );
    console.log(`전체 결재 금액: ${money}원`);

 /**
 *   문제5. 
 *   문제4의 장바구니 내역에서 판매가 * 수량이 가장 비싼 항목은 얼마인지 구하여라
 *      
 *   const price = [38000, 20000, 17900, 17900];
 *   const qty = [6,4,3,5];
 *   let money = 0;   
 * 
 */    
    const price = [38000, 20000, 17900, 17900];
    const qty = [6,4,3,5];
    let money = 0;

    price.forEach((val,idx)=>{
        const highValue = val * qty[idx];
        money = money < highValue ? highValue : money;
    });
    console.log(`가장 높은 상품 금액: ${money}원`);

 /**
 *   문제6. 
 *   문제4의 장바구니 내역에서 상품금액(판매가*수량)이 8만원 이상인 경우 무료로 배송이 된다고 할 때
 *   무료로 배송되는 항목은 모두 몇 개 인지 구하는 프로그램을 구하라.
 *      
 *   const price = [38000, 20000, 17900, 17900];
 *   const qty = [6,4,3,5];
 *   let money = 0;   
 * 
 */
    const price = [38000, 20000, 17900, 17900];
    const qty = [6,4,3,5];
    let totalMoney = 0;     
    let cnt = 0;

    price.forEach((val,idx)=>{

        const sum = val * qty[idx];
        if(sum >= 80000) cnt++;
    });
    console.log(`무료배송 항목: ${cnt}건`);
    
 /**
  *    문제7. 
  *    아래 코드의 상품가격을 나타내는 price 배열을 낮은 가격순으로 정렬하시오.
  * 
  *    const price = [209000, 109000, 119000, 109000, 94000];
  */
    const price = [209000, 109000, 119000, 109000, 94000];
    console.log(`상품가격 --> ${price}`);
  
//   for(let i=0; i<price.length-1;i++){
//       for(let j=i+1; j<price.length; j++){
//           if(price[i] > price[j]){
//               const temp = price[i];
//               price[i] = price[j];
//               price[j] = temp;
//           }
//       }
//   }
//   console.log(`낮은 가격순 --> ${price}`);

    price.sort((val1,val2)=> val1-val2);
    console.log(`상품가격 --> ${price}`);

 /**
  *    문제8. 
  *    다음 배열 arr의 원소를 반대로 배치하라.
  * 
  *    const arr = [5, 3, 2, 8, 9];
  */  
    const arr = [5, 3, 2, 8, 9];
    // for(let i=0; i< Math.floor(arr.length / 2); i++){
    //     const tmp = arr[i];
    //     arr[i] = arr[arr.length-i-1];
    //     arr[arr.length-i-1] = tmp;
    // }

    arr.reverse();
    console.log(`reverse --> ${arr}`);


 /**
  *     문제9.
  *     다음 배열은 어느 학급의 성적표이다. 학생별 총점과 평균점수, 총 학생의 평균을 구하라.
  *  
  *     const student = ['둘리','도우너','또치','희동'];
  *     const grade = [
  *          [78, 89, 96],
  *          [62, 77, 67],
  *          [54, 90, 80],
  *          [100, 99, 98],
  *     ];
  */
    const student = ['둘리','도우너','또치','희동'];
    const score = [
        [78, 89, 96],
        [62, 77, 67],
        [54, 90, 80],
        [100, 99, 98],
    ];
    let totalAvg = 0;

    score.forEach((val,idx)=>{
        let sum=0, avg=0;

        val.forEach((val1,idx1)=>{
            sum += val1;
        });
        
        totalAvg += Number((sum / 3).toFixed(2));
        console.log(`${student[idx]} 총점: ${sum}점, 평균: ${(sum / 3).toFixed(2)}점`);

    });
    console.log(`전체 학생 평균: ${(totalAvg / student.length).toFixed(1)}점`);

 /**
  *     문제10.
  *     다음 배열은 어느 게임의 아이템의 수량과 가격을 나타낸다. 
  *     배열에 나와있는 모든 아이템을 판매한다고 할 때 총 판매금액은 얼마인지 구하라.
  *     단, 아이템을 판매할 때는 수량당 원래가격의 90%만 받을 수 있다.
  *       
  *     const itemInfo = [
  *          ['욕망의항아리', 291, 500],
  *          ['푸른눈의백룡', 586, 320],
  *          ['호신부적', 460, 100],
  *          ['파워엘릭서', 558, 120],
  *          ['코크풍', 18, 92],          
  *          ['코로나진단키트', 72, 30]          
  *     ];
  * 
  */  
  const itemInfo = [
       ['욕망의항아리', 291, 500],
       ['푸른눈의백룡', 586, 320],
       ['호신부적', 460, 100],
       ['파워엘릭서', 558, 120],
       ['코크풍', 18, 92],          
       ['코로나진단키트', 72, 30]          
  ];
  let totalMoney = 0;

  itemInfo.forEach((val,idx)=> totalMoney += val[1] * (val[2] * 0.9) );
  console.log(`아이템 총 판매가격: ${totalMoney}G`);

 /**
   *     문제11.
   *     자신의 주민번호 한 글자씩 모든 숫자를 원소로 갖는 배열 jumin을 아래와 같이 정의하시오.
   *     
   *     ssn = [0,1,1,2,1,3,1,0,0,0,1,2,3]          
   *     
   *     정의된 배열을 활용하여 유요한 주민등록번호인지 아닌지를 판별하는 코드를 구현방법은 아래와 같다.    
   *     
   *     a.  기본 주민등록코드에는 각 숫자에 대응하는 가중치가 있다.
   *         가중치는 주민등록번호의 순서에 따라 2 3 4 5 6 7 8 9 2 3 4 5 이다.    
   *     b.  먼저 마지막 숫자는 제외하고, 기본코드의 각 12자리와 가중치를 모두 곱하여 합한다.
   *     c.  합한 값을 11로 나눈 나머지 값을 구한다.
   *     d.  11에서 그 나머지 값을 뺀 후, 이를 10을 나눈 나머지를 구한다.
   *     e.  나머지의 1의 자리 값과 주민등록번호 마지막 자리 값이 맞아야 유효한 주민등록번호이다.
   *    
   */
    
    const ssn = [0,1,1,2,1,3,1,0,0,0,1,2,3];   
    
    function juminCheck(juminArr){
        
        let sum = 0;
        const addSum = [2,3,4,5,6,7,8,9,2,3,4,5];    

        ssn.forEach((val,idx)=>{        
            if(idx !== ssn.length-1) sum += val * addSum[idx]; 
        });

        const leave = sum % 11;
        const leaveCal = (11 - leave) % 10;
        const onePositionNum = leaveCal % 10;

        if(ssn[ssn.length-1] === onePositionNum){
            console.log('number is coincident !!');
        } else{
            console.log('number is not coincident !!');
        }
    }
    juminCheck(ssn);


    /**
   *     문제12.
   *     아래의 데이터는 2021년 01월 25일부터 02월 01일까지의 Covid19 일별 확진자 수를 표현한 자료구조다.
   *     
   *     const covid19 = [
   *        {data: '0125', active: 426},
   *        {data: '0126', active: 343},
   *        {data: '0127', active: 547},
   *        {data: '0128', active: 490},
   *        {data: '0129', active: 460},
   *        {data: '0130', active: 443},
   *        {data: '0131', active: 338},
   *        {data: '0201', active: 299},   
   *     ];
   *     
   *        1. 1월 25일부터 2월 1일까지 누적 확진자 수와 일 평균 확진자 수를 구하라.
   *        2. 1월 25일부터 2월 1일까지 중에서 확진자가 가장 많이 나타난 날짜는 언제인지 구하라.    
   *    
   */
        const covid19 = [
            {data: '0125', active: 426},
            {data: '0126', active: 343},
            {data: '0127', active: 547},
            {data: '0128', active: 490},
            {data: '0129', active: 460},
            {data: '0130', active: 443},
            {data: '0131', active: 338},
            {data: '0201', active: 299},   
        ];

        function covidPrint(covidArr){

            let totalActive = 0, avgActive=0, highDate='', highActive=0;       

            covidArr.forEach((val,idx)=>{

                totalActive += val.active;

                if(val.active > highActive) {

                    highDate = val.data;
                    highActive = val.active;

                }
            });

            avgActive = ( totalActive / covid19.length).toFixed(2);
            console.log(`누적 확진자 수: ${totalActive}명 \n 평균 확진자 수: ${avgActive}`);
            console.log(`확진자가 가장 많이 나타난 날: ${highDate}`);
        }

        covidPrint(covid19);
        

    /** 
     *   참조복사 (=얕은복사) : 객체끼리의 복사   
     * 
     */
    const realArr = [1,2,3];
    const copyArr = realArr;
    copyArr.push(4,5); // 복사본 요소 추가
    console.log(realArr); // 원본배열도 같이 수정됨.


    /** 깊은복사 배열 */
    const realArr = [1,2,3,4,5];
    const copyArr = realArr.slice();
    
    copyArr.push(10);
    console.log(`원본배열: ${realArr}`);
    console.log(`복사배열: ${copyArr}`);

    /** 깊은복사 Json */
    const realJson = {name:'dong',age:28};
    const copyJson = {};
    Object.assign(copyJson, realJson); // realSjon객체를 copyJson에 복사.
    copyJson.email = 'donghyun@naver.com';
    console.log(realJson);
    console.log(copyJson);


    /** json 변수 */
    const data = {name:'hello', age:20, height:172, weight:85};
    const {name} = data;
    console.log(name); // hello
    const {height} = data;
    console.log(height); // 172


    const testData = {

        'header': [
            {
                'title':'타이틀',
                'author':'김동현',
                'date':'2022-03-05',
                'copyright':'동현',
            }
        ],
        'body':[
            {
                'content':'우리는 미래를 향해 나아가고 있다.',
                'keyword':'future',
                'result':'success',
            }
        ]
    };
    const {header} = testData;
    console.log(header); // header array
    const {body} = testData;
    console.log(body); // body array
    console.log(header[0].title); // 타이틀
    

    /**  빈 객체 확장 */
    const jsonObj = {};
    jsonObj.name = 'dong';
    console.log(jsonObj);




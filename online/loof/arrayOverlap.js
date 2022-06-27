/**
 *  Array Overlap
 *  @Date: 2022-05-17
 * 
 */

 const sampleArr = [`good`, `job`, `man`, 1, 2, 3, 3, 2, 1, `good`, `boy`, `gay`, `simple`, `perfect`, `like`, `man`, 1, `good`, `boy`, `like`];

 // 1. indexOf, filter
 const overlapRemove1 = sampleArr.filter((v,i)=> sampleArr.indexOf(v) === i );
 console.log(overlapRemove1);

 // 2. reduece, includes
 const overlapRemove2 = sampleArr.reduce((ac,cv) => ac.includes(cv) ? ac : [...ac, cv] ,[]);
 console.log(overlapRemove2);

 // 3. reduce 
 const overlapCount1 = sampleArr.reduce((ac, cv) => {
    ac[cv] = (ac[cv] || false) +1; // typeof false+1 => number  
    return ac;
 }, {});
 console.log(overlapCount1);

 // 4. map 
 const overlapCount2 = sampleArr.reduce((ac, cv)=> {
    ac.set(cv, (ac.get(cv) || 0) +1);
    return ac;
 }, new Map());
 
 for(const [key, value] of overlapCount2.entries()) {
    console.log(`key : ${key} , value : ${value}`);
 }
 
 // 5. return value is true
 const falseArr = [0, false, `good`, ``, null, undefined, NaN];
 const noEmptyElement = [...testArr].filter(Boolean);
 console.log(noEmptyElement); // ['good'] => true value return
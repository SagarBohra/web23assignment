//given a string print ,the number each character appears
let str="masai";

let obj={};
for (let i=0;i<=str.length - 1;i++){
  if(obj[str[i]]== undefined){
    obj[str[i]] = 1;
  }else {
    obj[str[i]]++;
  }
}
console.log(obj)

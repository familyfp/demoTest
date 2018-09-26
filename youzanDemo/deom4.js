/**
 * Created by peng on 2018/9/19.
 * 实现深度拷贝
 */
function deepClone(obj){
    var cloneObj = Array.isArray(obj)? [] :{}
    if(obj && typeof obj =='object'){
        for(var key in obj){
            if(obj.hasOwnProperty(key)){
                if(obj[key] && typeof obj[key] =='object'){
                    cloneObj[key]=deepClone(obj[key])
                }else{
                    cloneObj[key]=obj[key]
                }
            }
        }
    }else{
        return obj
    }
    return cloneObj


}
let a=[1,2,3,4],
    b=deepClone(a);
a[0]=2;
console.log(a,b);
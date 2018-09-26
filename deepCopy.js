/**
 * Created by peng on 2018/9/15.
 */

/**
 *
 * @param oldVal
 * @returns {{}}
 * let a ={
 * a:123,
 * b:[2,3],
 * c:{a1:23,a2:[234,'23'],a3:{x:12}}
 * }
 *
 *
 */
function deepCopy(oldVal){
    var obj = {}
    if(oldVal==null ||oldVal==undefined){
        return
    }
    if(typeof oldVal !='object'){
        return oldVal
    }else{
        if(!Array.isArray(oldVal)){
            for(var key in oldVal){
                if(typeof oldVal[key]!='object'){
                    obj[key] = oldVal[key]
                }else{
                    obj[key] = deepCopy(oldVal[key])
                }
            }
        }else{
            for(var i=0;i<oldVal.length;i++){
                obj[i] = deepCopy(oldVal[i])
            }
            return oldVal
        }
    }

    return obj;
}
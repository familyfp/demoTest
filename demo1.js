/**
 * Created by peng on 2018/9/4.
 *
 * 深度拷贝
 */


const testData = {
    a_v: 123,
    a_y: [1, 2, 3, 4],
    a_d: {
        s: 2,
        s_3: 3
    },
    a_f: [{
        a_g: 5
    }],
    a_a_d: 1
}
// a_d => aD
// a_a_d =>aAD

function copyDeep (args , isDeep = true) {

    let newObject = {}
    if(args == undefined || args == null){
        return
    }

    if(typeof args !='object'){
        return args
    }else{
        if(!Array.isArray(args)){
            for(let key in args){
                if(args.hasOwnProperty(key)){
                   let str = key.toString()
                    if(str.indexOf('_')>-1){
                       let temp = str.split('_')
                        temp = temp.map((item,index)=>{
                           if(index!=0){
                               return item.toUpperCase()
                           }else{
                               return item.toLowerCase()
                           }
                        })
                        temp = temp.join('')
                        newObject[temp] = copyDeep(args[key])
                    }else{
                        newObject[str] = copyDeep(args[key])
                    }
                }else{
                    return
                }
            }
        }else{
            for(let i=0;i<args.length;i++){
                args[i] = copyDeep(args[i],true)
            }
            return args
        }
    }

    return newObject
}

function deepcopy (data,isDeep = true){
    if(data == null || data == undefined){
        return
    }

    let newObj = {}
    if(typeof data !='object'){
        return
    }else{
        for(let key in data){
            let str = key.toString()
            if(str.indexOf('_')>-1){
                let temp = key.split('_')
                temp = temp.map((item,index)=>{
                    if(index!=0){
                        return item.toUpperCase()
                    }else{
                        return item.toLowerCase()
                    }

                })
                temp = temp.join('')

            }
        }
    }
    return newObj


}


function underscoreToHump(data, isDeep=true) {
    if(data == null || data == undefined){
        return ;
    }
    let newObj = {};
    if(typeof data !== 'object'){
        return data;
    }else{
        if(!Array.isArray(data) ){
            for(let key in data){
                let keyStr = key.toString();
                if(keyStr.indexOf("_")>-1){
                    //转换属性名
                    let tmp = keyStr.split("_");
                    let first = tmp[0];
                    tmp = tmp.map(i => i.toUpperCase());
                    tmp[0] = first;
                    let newKey = tmp.join("");
                    //赋值
                    newObj[newKey] = underscoreToHump(data[key], isDeep);
                }else{
                    //赋值
                    newObj[key] = underscoreToHump(data[key], isDeep);
                }
            }
        }else{
            let len = data.length;
            for(let i = 0; i< len; i++){
                data[i] = underscoreToHump(data[i], isDeep);
            }
            return data;
        }
    }
    return newObj;
}
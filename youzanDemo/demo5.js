/**
 * Created by peng on 2018/9/19.

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
 function underscoreToHump(data, isDeep=true) {
    //要实现的函数
}
 */


function underscoreToHump(data, isDeep=true){
    if(data ==null ||data == undefined){
        return
    }
    var newObj = {}
    if(typeof data !='object'){
        return data
    }else{
        if(!Array.isArray(data)){
            for(let key in data){
                if(data.hasOwnProperty(key)){
                    var str = key.toString()
                    if(str.indexOf('_')>-1){
                        var strArr = str.split('_')
                        var tempArr = []
                            strArr.forEach(function(item,index){
                            if(index==0){
                                tempArr.push(item.toLowerCase())
                            }else{
                                tempArr.push(item.toUpperCase())
                            }
                        })
                        var tempKey = tempArr.join("")
                        newObj[tempKey] = underscoreToHump(data[key])

                    }else{
                        var tempStr = str.charAt(0).toLowerCase()+str.slice(1,str.length).toUpperCase()
                        newObj[tempStr] = underscoreToHump(data[key])
                    }
                }else{
                    return
                }
            }
        }else{
            for(let i =0;i<data.length;i++){
                data[i] = underscoreToHump(data[i])
            }
            return data

        }
    }

    return newObj
}

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

underscoreToHump(testData)
/**
 * Created by peng on 2018/9/18.
 * 求数组中的nge数值
 */

function getNge(arr){
    if(!Array.isArray(arr)){
        return
    }
    var ngeArr = []
    arr.forEach(function(item,index){
        if(index!=arr.length-1){
            let temp = arr.slice(index+1,arr.length)
            for(var i = 0;i<temp.length;i++){
                if(temp[i]>item){
                    ngeArr.push(temp[i])
                    break
                }
            }
            if(i==temp.length){
                ngeArr.push(-1)
            }
        }else{
            ngeArr.push(-1)
        }

    })

    return ngeArr
}

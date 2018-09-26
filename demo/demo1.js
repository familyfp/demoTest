/**
 * Created by peng on 2018/9/18.
 * 给字符串中空格去掉，并且每个单词首字母大写
 */

function changeString (str){
    if(typeof str !='string'){
        return
    }
    let strArr = str.split(" ")
    let newStrArr = []
    let result = ""
    strArr.forEach(function(item){
        if(item!=''){
            let temp = item.charAt(0).toUpperCase() +item.toLowerCase()
            newStrArr.push(temp)
        }
    })
    result = newStrArr.join(' ')
    return result
}
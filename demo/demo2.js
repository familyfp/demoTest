/**
 * Created by peng on 2018/9/18.
 *
 * 求m和n的最大公约数
 */
function bigDivisor(m,n){

    var result;
    var min = m>n? n:m
    for(var i=min;i>0;i++){
        if(m%i == 0 && n%i==0){
            result = i
            return result
        }
    }

}
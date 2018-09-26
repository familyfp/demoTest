/**
 * Created by peng on 2018/9/4.
 */

const data = [

    {

        "id": '1',

        "children": [

            {

                "id": '1-1',

                "children": [],

                "value": "a-1",

            },

            {

                "id": '1-2',

                "children": [],

                "value": "a-2",

            },

        ],

        "value": "a",

    },

    {

        "id": '2',

        "children": [

            {

                "id": '2-1',

                "children": [

                    {

                        "id": '2-1-1',

                        "children": [],

                        "value": "c-1",

                    },

                ],

                "value": "b-1",

            },

        ],

        "value": "b",

    },

    {

        "id": '3',

        "children": [

        ],

        "value": "c",

    },

];

function addRelateId (arg){

    if(arg == undefined ||arg ==null || !Array.isArray(arg)){
        return
    }
    for(let i=0;i<arg.length;i++){
        transformData(arg[i])
    }
    return arg
}

function transformData(obj){
    if(typeof obj !='object'){
        return null
    }
    if(Array.isArray(obj.children)){
       if(obj.children.length!=0){
            if(obj.children[0].children.length==0){
                obj.relateId = obj.children[0].id
                return obj
            }else{
                obj.relateId = transformData(obj.children[0]).children[0].id
                return transformData(obj.children[0])
            }
       }else{
           return obj
       }
    }else{
        return null
    }
}



var b = 3;
(function(){
    b = 5;
    var b = 2;
})();
console.log(b)
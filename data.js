/**
 * Created by peng on 2018/9/4.
 */

    let data =[

    {

        "id": "1",

        "children": [

            {

                "id": "1-1",

                "children": [],

                "value": "a-1"

            },

            {

                "id": "1-2",

                "children": [],

                "value": "a-2"

            }

        ],

        "value": "a",

        "relateId": "1-1"

    },

        {

            "id": "2",

            "children": [

                {

                    "id": "2-1",

                    "children": [

                        {

                            "id": "2-1-1",

                            "children": [],

                            "value": "c-1"

                        }

                    ],

                    "value": "b-1",

                    "relateId": "2-1-1"

                }

            ],

            "value": "b",

            "relateId": "2-1-1"

        },

        {

            "id": "3",

            "children": [],

            "value": "c"

        }

    ]
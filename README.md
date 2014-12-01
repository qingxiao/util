util
====

工具类函数

1. form2json.js => 后端提供的form的name为复合类型，以复合类型的form表单结构提交java后端不能解析，只能提交成json字符串，需要该函数来转换；
```
var datas = [
        {name: "oo.product[0].id[]", value: 1},
        {name: "oo.product[0].id[]", value: 2},
        {name: "oo.product[0].id[]", value: 3},
        {name: "oo.product[2].id[]", value: 4},
        {name: "oo.product[2].name", value: 4},
        {name: "oo.product[1].id[]", value: 1},
        {name: "oo.product[1].id[]", value: 2},
        {name: "ov.product[0].id[]", value: 2},
        {name: "oo.product[1].id[]", value: 3}

    ];
====
    {"oo":{"product":[{"id":[1,2,3]},{"id":[1,2,3]},{"id":[4],"name":4}]},"ov":{"product":[{"id":[2]}]}}
```

# TABLIX

Tablix is the conversion of two-dimensional data into complex matrix table.

eg:

from:

id|school|grade|gradeID|schoolClass|scID|course|cid|score|std|teacher|gradeYear|gid
---|---|---|---|---|---|---|---|---|---|---|---|---
1|我的学校|2019级|1|一班|1|语文|1|100|1.1657564|张洋|2017|1
2|我的学校|2019级|1|一班|1|语文|1|50|1.1657564|张洋|2017|1
3|我的学校|2019级|1|一班|1|语文|1|86|1.3|张张|2018|2
4|我的学校|2019级|1|一班|1|数学|2|79|1.2|冯大毛|2017|1
5|我的学校|2019级|1|二班|2|语文|1|92|2.1|张洋|2017|1
6|我的学校|2019级|1|二班|2|数学|2|98|1.5|李四|2017|1
7|我的学校|2018级|2|一班|2|语文|1|85|2.1|刘伟|2017|1


to:

<img src='sample/sample.jpg' />

## Properties

### - rowGroup

datatype: object

**required**

```
{
    by: 'field_name',
    sort: (a,b) => {},
    filter: dataSet => { return dataSet.filter(t => t.id > 2) },

    // option
    group: {
        
    }
}
```

### - columns

datatype: array

前面几列定义必须按行组顺序对应！

**required**

```
[
    {
        field: 'file_name',
        name: 'show name',
        rowSpan: 3, 
        sort: (a,b) => {},
        style: '',
        className: '',
        render: (value, rowData) => {}
    },
    {
        // top group
        group: {
            by: 'field_name',
            name: 'Name',    // If you set the name, you will override the group values.
            sort: (a,b) => {},
            filter: dataSet => { return dataSet.filter(t => t.id > 2) },
            columns: [
                {
                    group: { 
                        by: 'field_name',
                        sort: (a,b) => {},
                        columns: [
                            {
                                field: 'field_name',
                                name: 'show name',
                                sort: (a,b) => {},
                                style: '',
                                className: '',
                                aggregate: Tablix.AGGREGATE_TYPE.AVG,
                                render: (value, rowData) => {},
                                hide: where => { return false; }
                            }
                        ]
                    }
                },
                // normal column
                {
                    name: 'show name',
                    columns: [
                        {
                            field: 'field_name',
                            name: '',
                        },
                        {
                            field: 'field_name',
                            name: '',
                        }
                    ]
                }
            ]
        }
    },
    {
        group: {
            by: 'course',       // group by
            field: 'score',     // show value
            rowSpan: 3,
        },
    },
    {
        name: 'show text',
        rowSpan: 2, 
        columns: [              // To solve multi-line merge mismatch, add a layer of columns, which can be adjusted according to the situation.
            {
                rowSpan: 0,     // 0 don't build cell
                    columns: [
                        {
                            field: 'field_name',
                            name: '',
                        },
                        {
                            field: 'field_name',
                            name: '',
                        }
                    ]
                }
            ]
        }
    ]
```

### data

array

**required**

```
[
    {
        field_name1: value，
        field_name2: value，
        field_name3: value，
        field_name4: value，
    }
]
```

### style


### className

### transported

row transport to column.


## Aggregate Function

**just use detail column, and have set field column**

### Tablix.AGGREGATE_TYPE

- FIRST this is default
- LAST
- AVG 
- SUM
- COUNT
- MAX
- MIN

## Usage

```
import React from 'react';
import ReactDOM from 'react-dom';

import Tablix from './Tablix';

let opt = {
    rowGroup: {},
    columns: {},
    data: [

    ],
    style: {},
    className: '',
};

ReactDOM.render(<Tablix {...opt} />, document.getElementById('root));


```


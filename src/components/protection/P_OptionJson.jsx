import * as eCharts from "echarts"

var data = [[
    {
        name: '濒危物种科学研究',
        children: [
            {
                name: '保护监测评估体系',
                value: 15
            },
            {
                name: '数据支撑',
                value: 10
            }
        ]
    },
    {
        name: '科学咨询',
        children: [
            {
                name: '物种专项调查',
                value: 5
            }
        ]
    }
],
[
    [28604, 77, 17096869, 'Australia', 1990],
    [31163, 77.4, 27662440, 'Canada', 1990],
    [1516, 68, 1154605773, 'China', 1990],
    [13670, 74.7, 10582082, 'Cuba', 1990],
    [28599, 75, 4986705, 'Finland', 1990],
    [29476, 77.1, 56943299, 'France', 1990],
    [31476, 75.4, 78958237, 'Germany', 1990],
    [28666, 78.1, 254830, 'Iceland', 1990],
    [1777, 57.7, 870601776, 'India', 1990],
    [29550, 79.1, 122249285, 'Japan', 1990],
    [2076, 67.9, 20194354, 'North Korea', 1990],
    [12087, 72, 42972254, 'South Korea', 1990],
    [24021, 75.4, 3397534, 'New Zealand', 1990],
    [43296, 76.8, 4240375, 'Norway', 1990],
    [10088, 70.8, 38195258, 'Poland', 1990],
    [19349, 69.6, 147568552, 'Russia', 1990],
    [10670, 67.3, 53994605, 'Turkey', 1990],
    [26424, 75.7, 57110117, 'United Kingdom', 1990],
    [37062, 75.4, 252847810, 'United States', 1990]
],
]


const OptionA = {
    tooltip: {
        formatter: '{a} <br/>{b} : {c}%'
    },
    series: [
        {
            name: 'Pressure',
            type: 'gauge',
            progress: {
                show: true
            },
            detail: {
                valueAnimation: true,
                formatter: '{value}%'
            },
            data: [
                {
                    value: 24.1,
                    name: '预计2025年森林覆盖率'
                }
            ]
        }
    ]
};

const OptionB = {
    series: {
        type: 'sunburst',
        data: data[0],
        radius: [60, '90%'],
        itemStyle: {
            borderRadius: 7,
            borderWidth: 2
        },
        label: {
            show: true
        }
    }
};

const OptionC = {
    legend: {
        data: ['Allocated Budget', 'Actual Spending']
    },
    radar: {
        // shape: 'circle',
        indicator: [
            { name: 'Sales', max: 6500 },
            { name: 'Administration', max: 16000 },
            { name: 'Information Technology', max: 30000 },
            { name: 'Customer Support', max: 38000 },
            { name: 'Development', max: 52000 },
            { name: 'Marketing', max: 25000 }
        ]
    },
    series: [
        {
            name: 'Budget vs spending',
            type: 'radar',
            data: [
                {
                    value: [4200, 3000, 20000, 35000, 50000, 18000],
                    name: 'Allocated Budget'
                },
                {
                    value: [5000, 14000, 28000, 26000, 42000, 21000],
                    name: 'Actual Spending'
                }
            ]
        }
    ]
};

const OptionD = {
    title: [
        {
            text: '全国自然保护区'
        }
    ],
    polar: {
        radius: [30, '80%']
    },
    radiusAxis: {
        max: 1500
    },
    angleAxis: {
        type: 'category',
        data: ['国家级', '省级', '市县级'],
        startAngle: 75
    },
    tooltip: {},
    series: {
        type: 'bar',
        data: [474, 868, 1408],
        coordinateSystem: 'polar',
        label: {
            show: true,
            position: 'middle',
            formatter: '{b}: {c}'
        }
    },
    animation: false
};

const OptionE = {
    title: {
        text: 'Funnel'
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c}%'
    },
    toolbox: {
        feature: {
            dataView: { readOnly: false },
            restore: {},
            saveAsImage: {}
        }
    },
    legend: {
        data: ['Show', 'Click', 'Visit', 'Inquiry', 'Order']
    },
    series: [
        {
            name: 'Funnel',
            type: 'funnel',
            left: '10%',
            top: 60,
            bottom: 60,
            width: '80%',
            min: 0,
            max: 100,
            minSize: '0%',
            maxSize: '100%',
            sort: 'descending',
            gap: 2,
            label: {
                show: true,
                position: 'inside'
            },
            labelLine: {
                length: 10,
                lineStyle: {
                    width: 1,
                    type: 'solid'
                }
            },
            itemStyle: {
                borderColor: '#fff',
                borderWidth: 1
            },
            emphasis: {
                label: {
                    fontSize: 20
                }
            },
            data: [
                { value: 60, name: 'Visit' },
                { value: 40, name: 'Inquiry' },
                { value: 20, name: 'Order' },
                { value: 80, name: 'Click' },
                { value: 100, name: 'Show' }
            ]
        }
    ]
};

const OptionF = {
    title: {
        text: 'Life Expectancy and GDP by Country',
        left: '5%',
        top: '3%'
    },
    legend: {
        right: '10%',
        top: '3%',
        data: ['1990', '2015']
    },
    grid: {
        left: '8%',
        top: '10%'
    },
    xAxis: {
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        }
    },
    yAxis: {
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        },
        scale: true
    },
    series: [
        {
            name: '1990',
            data: data[1],
            type: 'scatter',
            symbolSize: function (data) {
                return Math.sqrt(data[2]) / 5e2;
            },
            emphasis: {
                focus: 'series',
                label: {
                    show: true,
                    formatter: function (param) {
                        return param.data[3];
                    },
                    position: 'top'
                }
            },
            itemStyle: {
                shadowBlur: 10,
                shadowColor: 'rgba(120, 36, 50, 0.5)',
                shadowOffsetY: 5,
                color: new eCharts.graphic.RadialGradient(0.4, 0.3, 1, [
                    {
                        offset: 0,
                        color: 'rgb(251, 118, 123)'
                    },
                    {
                        offset: 1,
                        color: 'rgb(204, 46, 72)'
                    }
                ])
            }
        }
    ]
};

const P_OptionJson = [OptionA, OptionB, OptionC, OptionD, OptionE, OptionF];

export default P_OptionJson
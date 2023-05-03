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
    [3000, 10, 100000, '1956', 1990],
    [6000, 20, 3400000, '1978', 1990],
    [9000, 30, 44600000, '1988', 1990],
    [12000, 40, 102500000, '1998', 1990],
    [15000, 50, 234700000, '2008', 1990],
    [18000, 55, 256500000, '2010', 1990],
    [21000, 60, 274000000, '2015', 1990],
    [24000, 65, 275000000, '2017', 1990],
    [27000, 70, 275000000, '2019', 1990],
    [30000, 75, 1180000000, '2020', 1990],
],
]


const OptionF = {
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
        data: ['1980年', '2020年']
    },
    radar: {
        // shape: 'circle',
        indicator: [
            { name: '亚洲象', max: 500 },
            { name: '大熊猫', max: 2000 },
            { name: '藏羚羊', max: 50 },
            { name: '长江江豚', max: 3000 },
            { name: '金丝猴', max: 5000 },
            { name: '红豆杉', max: 4000 }
        ]
    },
    series: [
        {
            name: 'Budget vs spending',
            type: 'radar',
            data: [
                {
                    value: [180, 1100, 7, 2557, 500, 3000],
                    name: '1980年'
                },
                {
                    value: [300, 1800, 30, 1012, 4000, 2000],
                    name: '2020年'
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
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c}%'
    },
    series: [
        {
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
                { value: 60, name: '划定生态保护红线' },
                { value: 40, name: '设立宣传日' },
                { value: 20, name: '开展科普活动' },
                { value: 80, name: '建立自然保护体系' },
                { value: 100, name: '制定法律法规' }
            ]
        }
    ]
};
const OptionA = {
    title: {
        text: '中国自然保护区',
        left: '5%',
        top: '3%'
    },
    legend: {
        right: '10%',
        top: '3%',
        data: ['数量']
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
            name: '数量',
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
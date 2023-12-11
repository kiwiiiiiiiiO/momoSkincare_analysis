import React,  { useState, useRef, useCallback , PureComponent} from 'react';
import {Card, Col, Row, Divider, ConfigProvider} from 'antd'; 
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import { Chart as ChartJS, ArcElement, Tooltip as TooltipChart, Legend as LegendChart } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Treemap, ResponsiveContainer } from 'recharts';
import { Table } from 'antd';
import { BarChart, Bar, Rectangle } from 'recharts';

ChartJS.register(ArcElement, TooltipChart, LegendChart);


const priceData = [
  { name: '$1~$100', product:  3},
  { name: '$101~$200', product: 18},
  { name: '$201~$300', product: 40},
  { name: '$301~$400', product:  39},
  { name: '$401~$500', product: 55 },
  { name: '$501~$600', product:  40 },
  { name: '$601~$700',product: 40  },
  { name: '$701~$800', product:  35   },
  { name: '$801~$900', product:   42 },
  { name: '$901~$1000', product:   54},
  { name: '$1001~$1100', product:    24},
  { name: '$1101~$1200', product:   33 },
  { name: '$1201~$1300', product:  27 },
  { name: '$1301~$1400', product:  21},
  { name: '$1401~$1500', product: 15 },
  { name: '$1501~$1600', product:  14 },
  { name: '$1601~$1700', product: 8 },
  { name: '$1701~$1800', product:  17  },
  { name: '$1801~$1900', product:  7},
  { name: '$1901~$2000', product: 16 },
  { name: '$2001~$2100', product:  6 },
  { name: '$2101~$2200', product:  7 },
  { name: '$2201~$2300', product:   4},
  { name: '$2301~$2400', product:    2},
  { name: '$2401~$2500', product:   6},
  { name: '$2501~$2600', product:  3 },
  { name: '$2601~$2700', product: 7 },
  { name: '$2701~$2800',product:   3},
  { name: '$2801~$2900', product:  5 },
  { name: '$2901~$3000', product:  1},
  { name: '$3001~$3100',product:   3},
  { name: '$3101~$3200', product: 1 },
  { name: '$3201~$300', product:   0 },
  { name: '$3301~$3400', product:  3 },
  { name: '$3401~$3500', product:  1 },
  { name: '$3501~$4000', product: 6 },
  { name: '$4001~',product:  27  },
];


const revenueData = [
  { name: '$1~$100', revenue:  116850},
  { name: '$101~$200',  revenue:  1397100 },
  { name: '$201~$300', revenue:  3182575},
  { name: '$301~$400',  revenue:2833775 },
  { name: '$401~$500', revenue:15265000},
  { name: '$501~$600', revenue: 21725550 },

  { name: '$601~$700', revenue: 4248025},
  { name: '$701~$800',  revenue: 20840600},
  { name: '$801~$900', revenue:  44743775 },
  { name: '$901~$1000',  revenue: 61370700 },
  { name: '$1001~$1100',  revenue: 19924350},
  { name: '$1101~$1200',revenue: 43183350 },
  { name: '$1201~$1300',  revenue:18729725 },
  { name: '$1301~$1400',  revenue: 5067425 },
  { name: '$1401~$1500',  revenue: 4328650 },

  { name: '$1501~$1600',   revenue:  2351575 },
  { name: '$1601~$1700',   revenue: 4324800 },
  { name: '$1701~$1800',  revenue: 46683525 },
  { name: '$1801~$1900',   revenue:2137300  },
  { name: '$1901~$2000',   revenue: 3501700 },
  { name: '$2001~$2100',  revenue: 1556475 },
  { name: '$2101~$2200',   revenue: 52185125 },
  { name: '$2201~$2300',   revenue: 1068725 },
  { name: '$2301~$2400',   revenue: 118250 },
  { name: '$2401~$2500',   revenue: 1180950 },
  { name: '$2501~$2600',   revenue:317350 },
  { name: '$2601~$2700',  revenue:3434200 },
  { name: '$2701~$2800', revenue: 1742000  },
  { name: '$2801~$2900',  revenue: 1952750},
  { name: '$2901~$3000',  revenue: 894000 },
  { name: '$3001~$3100',  revenue: 230500 },
  { name: '$3101~$3200',  revenue:  96000000},
  { name: '$3201~$300', revenue: 0 },
  { name: '$3301~$3400',  revenue: 2122575},
  { name: '$3401~$3500', revenue: 2624250},
  { name: '$3501~$4000',  revenue:1937175 },
  { name: '$4001~',  revenue: 302371600},

];

const salesData = [
  { name: '$1~$100', sales:   1350},
  { name: '$101~$200',   sales: 8850 },
  { name: '$201~$300',  sales:11900  },
  { name: '$301~$400',   sales:  8025},
  { name: '$401~$500',   sales: 35000  },
  { name: '$501~$600',   sales: 38875 },
  { name: '$601~$700',  sales:   6300},
  { name: '$701~$800',   sales:28475},
  { name: '$801~$900',  sales: 51500  },
  { name: '$901~$1000',   sales:   64350},
  { name: '$1001~$1100',   sales:18500 },
  { name: '$1101~$1200',  sales: 36700 },
  { name: '$1201~$1300',  sales: 15300  },
  { name: '$1301~$1400',  sales: 3725 },
  { name: '$1401~$1500', sales:  2975 },
  { name: '$1501~$1600',   sales: 1500 },
  { name: '$1601~$1700',  sales:2575  },
  { name: '$1701~$1800',  sales:26275  },
  { name: '$1801~$1900',   sales:   1150 },
  { name: '$1901~$2000',  sales:  1775},
  { name: '$2001~$2100',  sales:   750 },
  { name: '$2101~$2200',   sales: 23750 },
  { name: '$2201~$2300',   sales:  475 },
  { name: '$2301~$2400',   sales: 50 },
  { name: '$2401~$2500',  sales: 475 },
  { name: '$2501~$2600', sales:125 },
  { name: '$2601~$2700',  sales: 1275 },
  { name: '$2701~$2800',  sales: 625 },
  { name: '$2801~$2900',  sales:  675},
  { name: '$2901~$3000',  sales: 300},
  { name: '$3001~$3100',  sales: 75},
  { name: '$3101~$3200',  sales:30000 },
  { name: '$3201~$300',  sales: 0 },
  { name: '$3301~$3400',  sales: 625},
  { name: '$3401~$3500',   sales:750  },
  { name: '$3501~$4000',   sales: 525 },
  { name: '$4001~',   sales:62675},
];


const popularityData = [
  { name: '$1~$100', popularity:290  , reviews:   59},
  { name: '$101~$200',   popularity:953  , reviews: 197 },
  { name: '$201~$300', popularity:   1229  , reviews: 253},
  { name: '$301~$400',   popularity:  1528, reviews:315 },
  { name: '$401~$500',   popularity:  1452, reviews: 300},
  { name: '$501~$600',   popularity: 1980 , reviews: 409 },
  { name: '$601~$700',  popularity: 542 , reviews:112 },
  { name: '$701~$800',   popularity: 824 , reviews:170},
  { name: '$801~$900',   popularity:  1371, reviews:280 },
  { name: '$901~$1000',  popularity:   1772 , reviews: 369  },
  { name: '$1001~$1100',  popularity:  984, reviews: 202},
  { name: '$1101~$1200', popularity:  750 , reviews: 154 },
  { name: '$1201~$1300', popularity: 311 , reviews:64 },
  { name: '$1301~$1400', popularity: 484 , reviews: 99},
  { name: '$1401~$1500',popularity: 1256 , reviews: 260},
  { name: '$1501~$1600', popularity:   142, reviews:29},
  { name: '$1601~$1700', popularity:   174,  reviews:38},
  { name: '$1701~$1800', popularity: 3227 , reviews: 660 },
  { name: '$1801~$1900',  popularity: 809, reviews:   186 },
  { name: '$1901~$2000', popularity: 166 , reviews: 34 },
  { name: '$2001~$2100', popularity:  90, reviews:   18 },
  { name: '$2101~$2200', popularity:  664, reviews: 138 },
  { name: '$2201~$2300', popularity: 80 , reviews: 17 },
  { name: '$2301~$2400', popularity: 4, reviews:  1 },
  { name: '$2401~$2500', popularity:  54, reviews: 11 },
  { name: '$2501~$2600', popularity: 44 , reviews: 9 },
  { name: '$2601~$2700',  popularity: 473  , reviews:97 },
  { name: '$2701~$2800', popularity:  52, reviews:  11 },
  { name: '$2801~$2900', popularity: 152 , reviews: 31 },
  { name: '$2901~$3000',  popularity: 25, reviews: 5 },
  { name: '$3001~$3100',popularity:  9, reviews: 2 },
  { name: '$3101~$3200', popularity: 1147 , reviews: 239 },
  { name: '$3201~$300',  popularity:  0  , reviews: 0  },
  { name: '$3301~$3400', popularity: 55 , reviews:12 },
  { name: '$3401~$3500',  popularity:   120 , reviews: 25 },
  { name: '$3501~$4000',  popularity: 140 , reviews: 29 },
  { name: '$4001~', popularity:  722, reviews:151 },
];

// 適用於
// 適用於 商品數
export const usageProductData = {
  labels: ['全膚質適用', '乾性肌膚', '油性肌膚','敏感肌膚'],
  datasets: [
    {
      label: '數量',
      data: [459,302, 284 , 226],
      backgroundColor: [
        '#ffa69e',
        '#faf3dd',
        '#aed9e0',
        '#b8f2e6',
      ],
      borderColor: [
        '#4e484a',
      ],
      borderWidth: 1,
    },
  ],
};
const textCenter = {
  id:'doughnutLabel',
  beforeDatasetsDraw(chart,args, pluginOptions){
    const {ctx, data} = chart;
    ctx.save();

    if (chart._active.length > 0 ){
      const textLabel = chart.config.data.labels[chart._active[0].index];
      const numberLable = chart.config.data.datasets[chart._active[0].datasetIndex].data[chart._active[0].index];
      ctx.font = 'bold 18px sans-serif';
      ctx.fillStyle = '#4e484a';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(`${textLabel}:${numberLable}`, chart.getDatasetMeta(0).data[0].x,chart.getDatasetMeta(0).data[0].y);
    }
  }
}
// 適用於 銷量
export const usageSalesData = {
  labels: ['全膚質適用', '乾性肌膚', '油性肌膚','敏感肌膚'],
  datasets: [
    {
      label: '數量',
      data: [248250, 375150,290300,210150],
      backgroundColor: [
        '#ffa69e',
        '#faf3dd',
        '#aed9e0',
        '#b8f2e6',
      ],
      borderColor: [
        '#4e484a',
      ],
      borderWidth: 1,
    },
  ],
};

// 適用於 營收
const usageRevenueData = [
  {
    name: '乾性肌膚',
    size: 586704725,
  },
  {
    name: '全膚質適用',
    size: 352991675,
  },
  {
    name: '敏感肌膚',
    size: 179011175,
  },
  {
    name: '油性肌膚',
    size:522461525,
  },
];
const usageRevenueData_Table = [
  {
    key:'u1',
    name: '乾性肌膚',
    size: 586704725,
  },
  {
    key:'u2',
    name: '全膚質適用',
    size: 352991675,
  },
  {
    key:'u3',
    name: '敏感肌膚',
    size: 179011175,
  },
  {
    key:'u4',
    name: '油性肌膚',
    size:522461525,
  },
];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
const x = cx + radius * Math.cos(-midAngle * RADIAN);
const y = cy + radius * Math.sin(-midAngle * RADIAN);

return (
  <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
    {`${(percent * 100).toFixed(0)}%`}
  </text>
);
};

const UsageCOLORS = [  '#ffa69e','#e1dac6','#aed9e0','#b8f2e6'];
const FunctionCOLORS = [   '#ffdedc','#f1b5b5','#aab7ae','#c6d2c6','#dfe2db'];

class CustomizedContent extends PureComponent {
  render() {
    const { root, depth, x, y, width, height, index, payload, colors, rank, name, size } = this.props;

    return (
      <g>
        {
          root?.children && (
            <rect
            x={x}
            y={y}
            width={width}
            height={height}
            style={{
              fill: depth < 2 ? colors[Math.floor((index / root?.children.length ) * 7)] : '#ffffff00',
              stroke: '#fff',
              strokeWidth: 2 / (depth + 1e-10),
              strokeOpacity: 1 / (depth + 1e-10),
            }}
          />
          )
        }
       
        {depth === 1 ? (
          <text x={x + width / 2} y={y + height / 2 + 10} textAnchor="middle" fill="#fff" fontSize={14}>
            營收總額：${size}
          </text>
        ) : null}
        {depth === 1 ? (
          <text x={x + 4} y={y + 18} fill="#fff" fontSize={16} fillOpacity={0.9}>
              {name}
          </text>
        ) : null}
      </g>
    );
  }
}
// 功效 人氣與留言
const UsagePopularityData = [
  {
    name: '全膚質適用',
    人氣: 15522,
    留言數: 3224,
  },
  {
    name: '乾性肌膚',
    人氣: 15378,
    留言數: 3184,
  },
  {
    name: '油性肌膚',
    人氣: 13910,
    留言數: 2878,
  },
  {
    name: '敏感肌膚',
    人氣: 8173,
    留言數: 1675,
  }
];
/// 功效
// 功效 商品數量
export const functionProductData = {
  labels: ['亮白', '保濕', '抗痘','控油','緊緻','舒敏'],
  datasets: [
    {
      label: '數量',
      data: [193, 577, 68, 116, 203, 200],
      backgroundColor: [
        '#ffdedc',
        '#f1b5b5',
        '#93939b',
        '#aab7ae',
        '#c6d2c6',
        '#dfe2db'
      ],
      borderColor: [
        '#4e484a',
      ],
      borderWidth: 1,
    },
  ],
};
// 功效 銷量
export const functionSalesData = {
  labels: ['亮白', '保濕', '抗痘','控油','緊緻','舒敏'],
  datasets: [
    {
      label: '數量',
      data: [128950, 476925,16225,55250, 139700, 108050],
      backgroundColor: [
        '#ffdedc',
        '#f1b5b5',
        '#93939b',
        '#aab7ae',
        '#c6d2c6',
        '#dfe2db'
      ],
      borderColor: [
        '#4e484a',
      ],
      borderWidth: 1,
    },
  ],
};
// 功效 人氣與留言
const FunctionPopularityData = [
  {
    name: '亮白',
    人氣: 6297,
    留言數:1307,
  },
  {
    name: '保濕',
    人氣: 22271,
    留言數: 4595,
  },
  {
    name: '抗痘',
    人氣: 2342,
    留言數: 479,
  },
  {
    name: '控油',
    人氣: 3906,
    留言數: 804,
  },
  {
    name: '緊緻',
    人氣:10290,
    留言數: 2145,
  },
  {
    name: '舒敏',
    人氣: 4469,
    留言數: 922,
  }
];

// 適用於 營收
const functionRevenueData = [
  {
    name: '亮白',
    size: 365261350,
  },
  {
    name: '保濕',
    size: 784263725,
  },
  {
    name: '抗痘',
    size: 17622975,
  },
  {
    name: '控油',
    size:52985925,
  },
  {
    name: '緊緻',
    size: 394550700,
  },
  {
    name: '舒敏',
    size: 100667625,
  }
];
const functionRevenueData_Table = [
  {
    key:'f1',
    name: '亮白',
    size: 365261350,
  },
  {
    key:'f2',
    name: '保濕',
    size: 784263725,
  },
  {
    key:'f3',
    name: '抗痘',
    size: 17622975,
  },
  {
    key:'f4',
    name: '控油',
    size:52985925,
  },
  {
    key:'f5',
    name: '緊緻',
    size: 394550700,
  },
  {
    key:'f6',
    name: '舒敏',
    size: 100667625,
  }
];
const functionColumns = [
  {
    title: '功效',
    dataIndex: 'name',
  },
  {
    title: '營收總額',
    dataIndex: 'size',
    sorter: {compare:(a, b) => parseInt(BigInt((BigInt(a.size) / BigInt(10000) ) - (BigInt(b.size) / BigInt(10000))).toString())},
  }
];

const usageColumns = [
  {
    title: '適用於',
    dataIndex: 'name',
  },
  {
    title: '營收總額',
    dataIndex: 'size',
    sorter: {
      compare:(c, d) => parseInt(BigInt((BigInt(c.size) / BigInt(10000) ) - (BigInt(d.size) / BigInt(10000))).toString())
    }
  }
];

const onChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};
// 乳霜
const tabList = [
  {
    key: 'products',
    tab: '商品數',
  },
  {
    key: 'sales',
    tab: '銷量',
  },
  {
    key: 'revenue',
    tab: '營收總額',
  },
  {
    key: 'popularity',
    tab: '人氣＆留言數',
  },
];

const contentList1 = {
  products: 
  <Col span={22}>
    <LineChart
      width={1200}
      height={300}
      data={priceData}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line connectNulls type="monotone" dataKey="product" stroke="#d31874" activeDot={{ r: 8 }} />
    </LineChart>
  </Col>,
  sales: 
    <Col span={22}>
      <LineChart
        width={1200}
        height={300}
        data={salesData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line connectNulls type="monotone" dataKey="sales" stroke="#d31874" activeDot={{ r: 8 }} />
      </LineChart>
    </Col>,
  revenue: 
  <Col span={22}>
    <LineChart
       width={1200}
      height={300}
      data={revenueData}
      margin={{
        top: 5,
        right: 30,
        left: 30,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line connectNulls type="monotone" dataKey="revenue" stroke="#d31874" activeDot={{ r: 8 }} />
    </LineChart>
  </Col>,
  popularity:  
  <Col span={22}>
    <LineChart
      width={1200}
      height={300}
      data={popularityData}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis yAxisId="left" />
      <YAxis yAxisId="right" orientation="right" />
      <Tooltip />
      <Legend />
      <Line yAxisId="left" type="monotone" dataKey="popularity" stroke="#d31874" activeDot={{ r: 8 }} />
      <Line yAxisId="right" type="monotone" dataKey="reviews" stroke="#4e484a" />
    </LineChart>
  </Col>,
};

const contentList2 = {
  products: 
  <Col span={22}>
    <div style={{ display: "flex",  justifyContent: "center", height:"400px"}}>
      <Doughnut data={usageProductData} plugins={[textCenter]} />
    </div>
  </Col>,
  sales: 
    <Col span={22}>
      <div style={{ display: "flex",  justifyContent: "center", height:"400px"}}>
        <Doughnut data={usageSalesData} plugins={[textCenter]} />
      </div>
    </Col>,
  revenue: 
  <Col span={22}>
    <div style={{ display: "flex",  justifyContent: "center"}}>
      <Treemap
        width={1000}
        height={300}
        data={usageRevenueData}
        dataKey="size"
        stroke="#fff"
        fill="#8884d8"
        content={<CustomizedContent colors={UsageCOLORS} />}/>
    </div>
    <div style={{ display: "flex", justifyContent: "center"}}>
      <Table style={{marginTop:'30px', width:'900px'}} pagination={false} agination columns={usageColumns} dataSource={usageRevenueData_Table} onChange={onChange} />
    </div>
  </Col>,
  popularity:  
  <Col span={22}>
  <div style={{ display: "flex",  justifyContent: "center"}}>
     <BarChart
        width={800}
        height={300}
        data={UsagePopularityData}
        margin={{top: 20, right: 30, left: 20,  bottom: 5,}} >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis yAxisId="left" orientation="left" stroke="#d31874" />
        <YAxis yAxisId="right" orientation="right" stroke="#4e484a" />
        <Tooltip />
        <Legend />
        <Bar yAxisId="left" dataKey="人氣" fill="#d31874" />
        <Bar yAxisId="right" dataKey="留言數" fill="#4e484a" />
    </BarChart>
    </div>
  </Col>,
};
const contentList3 = {
  products: 
  <Col span={22}>
    <div style={{ display: "flex",  justifyContent: "center", height:"400px"}}>
      <Doughnut data={functionProductData} plugins={[textCenter]} />
    </div>
  </Col>,
  sales: 
    <Col span={22}>
      <div style={{ display: "flex",  justifyContent: "center", height:"400px"}}>
        <Doughnut data={functionSalesData} plugins={[textCenter]} />
      </div>
    </Col>,
  revenue: 
  <Col span={22}>
   
      <Treemap
        width={1100}
        height={400}
        data={functionRevenueData}
        dataKey="size"
        stroke="#fff"
        fill="#8884d8"
        content={<CustomizedContent colors={FunctionCOLORS} />}/>
    <div style={{ display: "flex", justifyContent: "center"}}>
      <Table style={{marginTop:'30px', width:'900px'}} pagination={false} agination columns={functionColumns} dataSource={functionRevenueData_Table} onChange={onChange} />
    </div>
  </Col>,
  popularity:  
  <Col span={22}>
    <div style={{ display: "flex",  justifyContent: "center"}}>
     <BarChart
        width={800}
        height={300}
        data={FunctionPopularityData}
        margin={{top: 20, right: 30, left: 20,  bottom: 5,}} >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis yAxisId="left" orientation="left" stroke="#d31874" />
        <YAxis yAxisId="right" orientation="right" stroke="#4e484a" />
        <Tooltip />
        <Legend />
        <Bar yAxisId="left" dataKey="人氣" fill="#d31874" />
        <Bar yAxisId="right" dataKey="留言數" fill="#4e484a" />
    </BarChart>
    </div>
  </Col>,
};


const Lotion = () => {
  const [activeTabKey1, setActiveTabKey1] = useState('products');
  const [activeTabKey2, setActiveTabKey2] = useState('products');
  const [activeTabKey3, setActiveTabKey3] = useState('products');
  const onTab1Change = (key) => {
    setActiveTabKey1(key);
  };
  const onTab2Change = (key) => {
    setActiveTabKey2(key);
  };
  const onTab3Change = (key) => {
    setActiveTabKey3(key);
  };

  return (
    <Row>
    <div style={{display:"block"}}  className="Essence">
      <h1> 乳液 統計圖表</h1>
    </div>
    <Divider/>
    <ConfigProvider
        theme={{
            token:{
              colorPrimary: '#d31874',
            },
        }} >
      <Card title="價格區間" 
        style={{ width:"1250px", marginTop:"15px"}}
        tabList={tabList}
        activeTabKey={activeTabKey1}
        onTabChange={onTab1Change}
        >
      {contentList1[activeTabKey1]}
      </Card>
      <Card title="適用於" 
        style={{ width:"1150px", marginTop:"15px"}}
        tabList={tabList}
        activeTabKey={activeTabKey2}
        onTabChange={onTab2Change}
        >
        {contentList2[activeTabKey2]}

      </Card>
      <Card title="功效" 
        style={{ width:"1150px", marginTop:"15px"}}
        tabList={tabList}
        activeTabKey={activeTabKey3}
        onTabChange={onTab3Change}
        >
      {contentList3[activeTabKey3]}
      </Card>
    </ConfigProvider>
  </Row>
  )
}

export default Lotion

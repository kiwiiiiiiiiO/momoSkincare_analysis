import React,  { useState, useRef, useCallback , PureComponent} from 'react';
import {Card, Col, Row, Divider, ConfigProvider} from 'antd'; 
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import { Chart as ChartJS, ArcElement, Tooltip as TooltipChart, Legend as LegendChart } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Treemap, ResponsiveContainer } from 'recharts';
import { Table } from 'antd';
import { BarChart, Bar, Rectangle } from 'recharts';

ChartJS.register(ArcElement, TooltipChart, LegendChart);

ChartJS.register(ArcElement, TooltipChart, LegendChart);

const priceData = [
  { name: '$1~$100', product:  6},
  { name: '$101~$200', product: 45 },
  { name: '$201~$300', product:   87},
  { name: '$301~$400', product:  95},
  { name: '$401~$500', product: 74 },
  { name: '$501~$600', product: 40 },
  { name: '$601~$700',product: 60 },
  { name: '$701~$800', product:   50 },
  { name: '$801~$900', product:   33 },
  { name: '$901~$1000', product:   39 },
  { name: '$1001~$1100', product: 25  },
  { name: '$1101~$1200', product:  22  },
  { name: '$1201~$1300', product:   23},
  { name: '$1301~$1400', product:   21 },
  { name: '$1401~$1500', product:  11 },
  { name: '$1501~$1600', product: 17 },
  { name: '$1601~$1700', product:  11 },
  { name: '$1701~$1800', product:  8 },
  { name: '$1801~$1900', product:  7  },
  { name: '$1901~$2000', product:  10},
  { name: '$2001~$2100', product:  4 },
  { name: '$2101~$2200', product:   4  },
  { name: '$2201~$2300', product:  1 },
  { name: '$2301~$2400', product:  5  },
  { name: '$2401~$2500', product: 7 },
  { name: '$2501~$2600', product:  2 },
  { name: '$2601~$2700', product: 2},
  { name: '$2701~$2800',product:  3 },
  { name: '$2801~$2900', product: 5  },
  { name: '$2901~$3000', product: 1 },
  { name: '$3001~$3100',product:  0 },
  { name: '$3101~$3200', product:  1},
  { name: '$3201~$300', product:    1},
  { name: '$3301~$3400', product:  1 },
  { name: '$3401~$3500', product:   3},
  { name: '$3501~$4000', product: 7 },
  { name: '$4001~',product:    15  },
];


const revenueData = [
   { name: '$1~$100', revenue: 2392750 },
  { name: '$101~$200',  revenue:  11090675},
  { name: '$201~$300', revenue:8980100 },
  { name: '$301~$400',  revenue:15847775 },
  { name: '$401~$500', revenue: 32574000},
  { name: '$501~$600', revenue:5304825 },
  { name: '$601~$700', revenue: 27270825 },
  { name: '$701~$800',  revenue: 76907075 },
  { name: '$801~$900', revenue:5067875 },
  { name: '$901~$1000',  revenue: 7339775},
  { name: '$1001~$1100',  revenue: 6145875},
  { name: '$1101~$1200',revenue: 2945875 },
  { name: '$1201~$1300',  revenue:  66650725 },
  { name: '$1301~$1400',  revenue: 4877225 },
  { name: '$1401~$1500',  revenue:  4648975},
  { name: '$1501~$1600',   revenue: 77835650},
  { name: '$1601~$1700',   revenue: 24635050 },
  { name: '$1701~$1800',  revenue: 4972650},
  { name: '$1801~$1900',   revenue:  2221475},
  { name: '$1901~$2000',   revenue: 4381450 },
  { name: '$2001~$2100',  revenue: 3400800  },
  { name: '$2101~$2200',   revenue: 325350 },
  { name: '$2201~$2300',   revenue: 57500 },
  { name: '$2301~$2400',   revenue: 410050 },
  { name: '$2401~$2500',   revenue:  88178975},
  { name: '$2501~$2600',   revenue: 254000},
  { name: '$2601~$2700',  revenue: 864100 },
  { name: '$2701~$2800', revenue: 35894975 },
  { name: '$2801~$2900',  revenue: 2708200 },
  { name: '$2901~$3000',  revenue: 75000},
  { name: '$3001~$3100',  revenue:  0 },
  { name: '$3101~$3200',  revenue: 78250},
  { name: '$3201~$300', revenue:  968700 },
  { name: '$3301~$3400',  revenue:992700},
  { name: '$3401~$3500', revenue: 3758600},
  { name: '$3501~$4000',  revenue: 1927125},
  { name: '$4001~',  revenue: 7363725},

];

const salesData = [
  { name: '$1~$100', sales:  26650 },
  { name: '$101~$200',   sales: 66150 },
  { name: '$201~$300',  sales:  34225},
  { name: '$301~$400',   sales: 44175 },
  { name: '$401~$500',   sales:  72100},
  { name: '$501~$600',   sales:  9350 },
  { name: '$601~$700',  sales:  41225 },
  { name: '$701~$800',   sales:   103775},
  { name: '$801~$900',  sales: 5850 },
  { name: '$901~$1000',   sales: 7625 },
  { name: '$1001~$1100',   sales: 5750 },
  { name: '$1101~$1200',  sales: 2575 },
  { name: '$1201~$1300',  sales: 52425 },
  { name: '$1301~$1400',  sales: 3600 },
  { name: '$1401~$1500', sales:  3150  },
  { name: '$1501~$1600',   sales: 49100 },
  { name: '$1601~$1700',  sales: 14675 },
  { name: '$1701~$1800',  sales:   2800},
  { name: '$1801~$1900',   sales:  1175  },
  { name: '$1901~$2000',  sales: 2225 },
  { name: '$2001~$2100',  sales:  1650 },
  { name: '$2101~$2200',   sales: 150 },
  { name: '$2201~$2300',   sales:  25 },
  { name: '$2301~$2400',   sales:  175 },
  { name: '$2401~$2500',  sales: 36175 },
  { name: '$2501~$2600', sales:100  },
  { name: '$2601~$2700',  sales: 325 },
  { name: '$2701~$2800',  sales:   12825},
  { name: '$2801~$2900',  sales:  950 },
  { name: '$2901~$3000',  sales: 25},
  { name: '$3001~$3100',  sales:0 },
  { name: '$3101~$3200',  sales:  25 },
  { name: '$3201~$300',  sales: 300},
  { name: '$3301~$3400',  sales: 300},
  { name: '$3401~$3500',   sales:  1075 },
  { name: '$3501~$4000',   sales:  500 },
  { name: '$4001~',   sales:1525 },
];


const popularityData = [
  { name: '$1~$100', popularity: 1027, reviews: 210  },
  { name: '$101~$200',   popularity:  4182 , reviews:  865},
  { name: '$201~$300', popularity:  3051  , reviews: 627},
  { name: '$301~$400',   popularity: 4095, reviews: 840},
  { name: '$401~$500',   popularity:  2984, reviews: 614 },
  { name: '$501~$600',   popularity:  810 , reviews: 166 },
  { name: '$601~$700',  popularity: 1789, reviews: 370  },
  { name: '$701~$800',   popularity: 2104, reviews: 433},
  { name: '$801~$900',   popularity: 556 , reviews: 114 },
  { name: '$901~$1000',  popularity:  892 , reviews: 182  },
  { name: '$1001~$1100',  popularity:  698 , reviews:143  },
  { name: '$1101~$1200', popularity: 186, reviews: 39},
  { name: '$1201~$1300', popularity: 1596, reviews: 326 },
  { name: '$1301~$1400', popularity:  359, reviews:  74 },
  { name: '$1401~$1500',popularity:  657, reviews:  137 },
  { name: '$1501~$1600', popularity: 2739, reviews: 563 },
  { name: '$1601~$1700', popularity:  210, reviews: 43 },
  { name: '$1701~$1800', popularity: 572 , reviews: 117},
  { name: '$1801~$1900',  popularity: 147 , reviews: 30  },
  { name: '$1901~$2000', popularity: 154, reviews: 32 },
  { name: '$2001~$2100', popularity:  167, reviews:  34 },
  { name: '$2101~$2200', popularity:  59 , reviews:12 },
  { name: '$2201~$2300', popularity: 5 , reviews: 1 },
  { name: '$2301~$2400', popularity: 30, reviews:6 },
  { name: '$2401~$2500', popularity: 2276, reviews: 523  },
  { name: '$2501~$2600', popularity: 4  , reviews: 1 },
  { name: '$2601~$2700',  popularity: 35 , reviews: 7 },
  { name: '$2701~$2800', popularity: 596 , reviews:  124 },
  { name: '$2801~$2900', popularity:   245 , reviews:  50},
  { name: '$2901~$3000',  popularity:  0, reviews:  0},
  { name: '$3001~$3100',popularity:   0 , reviews:  0},
  { name: '$3101~$3200', popularity: 10 , reviews: 2 },
  { name: '$3201~$300',  popularity:   19 , reviews:4 },
  { name: '$3301~$3400', popularity:  50  , reviews:  10 },
  { name: '$3401~$3500',  popularity:   15 , reviews:3 },
  { name: '$3501~$4000',  popularity: 85   , reviews:  17},
  { name: '$4001~', popularity:   152  , reviews: 31 },
];



/// 適用於
// 適用於 商品數
export const usageProductData = {
  labels: ['全膚質適用', '乾性肌膚', '油性肌膚','敏感肌膚'],
  datasets: [
    {
      label: '數量',
      data: [478, 370,353, 271],
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
      data: [313750, 284975,282975, 216250],
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
    size: 265667350,
  },
  {
    name: '全膚質適用',
    size: 305045900,
  },
  {
    name: '敏感肌膚',
    size: 182131150,
  },
  {
    name: '油性肌膚',
    size: 285328025,
  },
];
const usageRevenueData_Table = [
  {
    key:'u1',
    name: '乾性肌膚',
    size: 265667350,
  },
  {
    key:'u2',
    name: '全膚質適用',
    size: 305045900,
  },
  {
    key:'u3',
    name: '敏感肌膚',
    size: 182131150,
  },
  {
    key:'u4',
    name: '油性肌膚',
    size: 285328025,
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
    人氣: 17741,
    留言數: 3652,
  },
  {
    name: '乾性肌膚',
    人氣: 13783,
    留言數:2890,
  },
  {
    name: '油性肌膚',
    人氣: 14347,
    留言數: 3006,
  },
  {
    name: '敏感肌膚',
    人氣: 12797,
    留言數: 2686,
  }
];
/// 功效
// 功效 商品數量
export const functionProductData = {
  labels: ['亮白', '保濕', '抗痘','控油','緊緻','舒敏'],
  datasets: [
    {
      label: '數量',
      data: [226, 676, 94, 180, 215, 248],
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
      data: [106875, 552825,84900,117300,155900, 211825],
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
    人氣: 6029,
    留言數: 1239,
  },
  {
    name: '保濕',
    人氣: 30019,
    留言數: 6223,
  },
  {
    name: '抗痘',
    人氣: 2839,
    留言數: 584,
  },
  {
    name: '控油',
    人氣: 8440,
    留言數: 1790,
  },
  {
    name: '緊緻',
    人氣: 6183,
    留言數: 1271,
  },
  {
    name: '舒敏',
    人氣: 11914,
    留言數: 2501,
  }
];

// 適用於 營收
const functionRevenueData = [
  {
    name: '亮白',
    size: 93701525,
  },
  {
    name: '保濕',
    size: 503614200,
  },
  {
    name: '抗痘',
    size: 73470625,
  },
  {
    name: '控油',
    size: 125242200,
  },
  {
    name: '緊緻',
    size: 129794100,
  },
  {
    name: '舒敏',
    size: 189409075,
  }
];
const functionRevenueData_Table = [
  {
    key:'f1',
    name: '亮白',
    size: 93701525,
  },
  {
    key:'f2',
    name: '保濕',
    size: 503614200,
  },
  {
    key:'f3',
    name: '抗痘',
    size: 73470625,
  },
  {
    key:'f4',
    name: '控油',
    size: 125242200,
  },
  {
    key:'f5',
    name: '緊緻',
    size: 129794100,
  },
  {
    key:'f6',
    name: '舒敏',
    size: 189409075,
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

const Toner = () => {
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
      <h1> 化妝水 統計圖表</h1>
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

export default Toner

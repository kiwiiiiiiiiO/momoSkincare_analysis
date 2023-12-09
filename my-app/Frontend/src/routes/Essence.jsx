import React,  { useState, useRef, useCallback , PureComponent} from 'react';
import {Card, Col, Row, Divider, ConfigProvider} from 'antd'; 
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import { Chart as ChartJS, ArcElement, Tooltip as TooltipChart, Legend as LegendChart } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Treemap, ResponsiveContainer } from 'recharts';
import { Table } from 'antd';
import { BarChart, Bar, Rectangle } from 'recharts';

ChartJS.register(ArcElement, TooltipChart, LegendChart);

/// 價格分佈
// 價格區間 - 價格分佈
const priceData = [
  { name: '$1~$100', product: 0},
  { name: '$101~$200', product: 8 },
  { name: '$201~$300', product: 31 },
  { name: '$301~$400', product: 40 },
  { name: '$401~$500', product: 49 },
  { name: '$501~$600', product: 46 },
  { name: '$601~$700',product: 33 },
  { name: '$701~$800', product: 38 },
  { name: '$801~$900', product: 28 },
  { name: '$901~$1000', product: 37 },
  { name: '$1001~$1100', product: 14 },
  { name: '$1101~$1200', product: 25 },
  { name: '$1201~$1300', product: 17},
  { name: '$1301~$1400', product: 18 },
  { name: '$1401~$1500', product: 20 },
  { name: '$1501~$1600', product: 22 },
  { name: '$1601~$1700', product: 11 },
  { name: '$1701~$1800', product: 14},
  { name: '$1801~$1900', product: 8 },
  { name: '$1901~$2000', product: 10},
  { name: '$2001~$2100', product: 4},
  { name: '$2101~$2200', product: 8},
  { name: '$2201~$2300', product: 9},
  { name: '$2301~$2400', product: 6 },
  { name: '$2401~$2500', product: 6 },
  { name: '$2501~$2600', product: 1 },
  { name: '$2601~$2700', product: 4 },
  { name: '$2701~$2800',product: 1},
  { name: '$2801~$2900', product: 4},
  { name: '$2901~$3000', product: 5},
  { name: '$3001~$3100',product: 1},
  { name: '$3101~$3200', product:5},
  { name: '$3201~$300', product: 4},
  { name: '$3301~$3400', product: 5 },
  { name: '$3401~$3500', product: 4 },
  { name: '$3501~$4000', product: 16 },
  { name: '$4001~',product: 32},
];

// 價格區間 - 營收總額
const revenueData = [
  { name: '$1~$100', revenue: 0 },
  { name: '$101~$200',  revenue:559950  },
  { name: '$201~$300', revenue: 22536350},
  { name: '$301~$400',  revenue: 19514225 },
  { name: '$401~$500', revenue:27442325},
  { name: '$501~$600', revenue:58072900 },
  { name: '$601~$700', revenue:91697800 },
  { name: '$701~$800',  revenue:36057225},
  { name: '$801~$900', revenue:64904975 },
  { name: '$901~$1000',  revenue: 45490250},
  { name: '$1001~$1100',  revenue: 85299625},
  { name: '$1101~$1200',revenue: 38222800},
  { name: '$1201~$1300',  revenue: 86327625},
  { name: '$1301~$1400',  revenue: 7336900},
  { name: '$1401~$1500',  revenue:26955450},
  { name: '$1501~$1600',   revenue: 53163375 },
  { name: '$1601~$1700',   revenue:158567500},
  { name: '$1701~$1800',  revenue: 60113350},
  { name: '$1801~$1900',   revenue: 27322900},
  { name: '$1901~$2000',   revenue: 5427500},
  { name: '$2001~$2100',  revenue: 48096525},
  { name: '$2101~$2200',   revenue: 55519425},
  { name: '$2201~$2300',   revenue: 86348125 },
  { name: '$2301~$2400',   revenue: 35685000},
  { name: '$2401~$2500',   revenue: 5038800 },
  { name: '$2501~$2600',   revenue: 780000 },
  { name: '$2601~$2700',  revenue:  429800 },
  { name: '$2701~$2800', revenue: 819000  },
  { name: '$2801~$2900',  revenue: 100932250 },
  { name: '$2901~$3000',  revenue: 142387500},
  { name: '$3001~$3100',  revenue: 912000},
  { name: '$3101~$3200',  revenue: 78040675},
  { name: '$3201~$300', revenue: 6022500  },
  { name: '$3301~$3400',  revenue:123302200},
  { name: '$3401~$3500', revenue:7312500},
  { name: '$3501~$4000',  revenue: 206954900},
  { name: '$4001~',  revenue:374626575},
];
// 價格區間 - 銷量
const salesData = [
  { name: '$1~$100', sales: 0},
  { name: '$101~$200',   sales: 3475 },
  { name: '$201~$300',  sales:  79225},
  { name: '$301~$400',   sales: 53550  },
  { name: '$401~$500',   sales: 59475 },
  { name: '$501~$600',   sales:  106425},
  { name: '$601~$700',  sales: 134100 },
  { name: '$701~$800',   sales:  47125},
  { name: '$801~$900',  sales:75975 },
  { name: '$901~$1000',   sales:48375  },
  { name: '$1001~$1100',   sales:79375  },
  { name: '$1101~$1200',  sales:  32600},
  { name: '$1201~$1300',  sales: 69375 },
  { name: '$1301~$1400',  sales:  5300},
  { name: '$1401~$1500', sales:   18325},
  { name: '$1501~$1600',   sales:  35025},
  { name: '$1601~$1700',  sales: 94700 },
  { name: '$1701~$1800',  sales:  33800},
  { name: '$1801~$1900',   sales:  14550 },
  { name: '$1901~$2000',  sales: 2725 },
  { name: '$2001~$2100',  sales:  23125 },
  { name: '$2101~$2200',   sales:  25275},
  { name: '$2201~$2300',   sales: 37550 },
  { name: '$2301~$2400',   sales: 14900  },
  { name: '$2401~$2500',  sales:2025 },
  { name: '$2501~$2600', sales:300 },
  { name: '$2601~$2700',  sales:  1650},
  { name: '$2701~$2800',  sales: 300 },
  { name: '$2801~$2900',  sales:35325 },
  { name: '$2901~$3000',  sales: 48100},
  { name: '$3001~$3100',  sales: 300},
  { name: '$3101~$3200',  sales: 24775},
  { name: '$3201~$300',  sales: 1825},
  { name: '$3301~$3400',  sales: 36800},
  { name: '$3401~$3500',   sales: 2100 },
  { name: '$3501~$4000',   sales:  56450},
  { name: '$4001~',   sales: 81125},
];

// 價格區間 - 人氣 ＆ 留言數
const popularityData = [
  { name: '$1~$100', popularity: 0   , reviews: 0  },
  { name: '$101~$200',   popularity: 222  , reviews: 47 },
  { name: '$201~$300', popularity:   1534 , reviews: 317 },
  { name: '$301~$400',   popularity:  3616  , reviews: 750 },
  { name: '$401~$500',   popularity:  1739 , reviews:358 },
  { name: '$501~$600',   popularity:   1882  , reviews: 397  },
  { name: '$601~$700',  popularity:  2829 , reviews: 584  },
  { name: '$701~$800',   popularity: 1579  , reviews: 325 },
  { name: '$801~$900',   popularity: 1233 , reviews:   254 },
  { name: '$901~$1000',  popularity:  1095  , reviews:  229  },
  { name: '$1001~$1100',  popularity: 3176  , reviews: 714 },
  { name: '$1101~$1200', popularity:  1661 , reviews: 341  },
  { name: '$1201~$1300', popularity: 2297 , reviews: 469  },
  { name: '$1301~$1400', popularity:  721, reviews:  149 },
  { name: '$1401~$1500',popularity:  756 , reviews:  154  },
  { name: '$1501~$1600', popularity:  804 , reviews: 166  },
  { name: '$1601~$1700', popularity: 1840 , reviews: 380 },
  { name: '$1701~$1800', popularity: 1575 , reviews: 321 },
  { name: '$1801~$1900',  popularity: 1717, reviews: 354  },
  { name: '$1901~$2000', popularity: 624 , reviews: 131  },
  { name: '$2001~$2100', popularity: 307 , reviews: 63  },
  { name: '$2101~$2200', popularity: 547, reviews: 113 },
  { name: '$2201~$2300', popularity: 1136, reviews: 232  },
  { name: '$2301~$2400', popularity: 372, reviews:  76 },
  { name: '$2401~$2500', popularity:  332, reviews: 69},
  { name: '$2501~$2600', popularity: 5, reviews: 1 },
  { name: '$2601~$2700',  popularity: 75 , reviews: 15  },
  { name: '$2701~$2800', popularity:  64, reviews: 14  },
  { name: '$2801~$2900', popularity:  596, reviews: 122 },
  { name: '$2901~$3000',  popularity:  1647, reviews: 339 },
  { name: '$3001~$3100',popularity:  163, reviews: 34  },
  { name: '$3101~$3200', popularity:  775 , reviews:162 },
  { name: '$3201~$300',  popularity:  358, reviews:  74},
  { name: '$3301~$3400', popularity: 3354, reviews: 685},
  { name: '$3401~$3500',  popularity:  955, reviews: 199  },
  { name: '$3501~$4000',  popularity: 1853, reviews:  378},
  { name: '$4001~', popularity: 3717 , reviews:  763},
];


/// 適用於
// 適用於 商品數
export const usageProductData = {
  labels: ['全膚質適用', '乾性肌膚', '油性肌膚','敏感肌膚'],
  datasets: [
    {
      label: '數量',
      data: [346 , 303 ,294 , 201 ],
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
      data: [ 674300 , 749450, 834900 , 456750 ],
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
    size: 1190143175,
  },
  {
    name: '全膚質適用',
    size: 856552450,
  },
  {
    name: '敏感肌膚',
    size: 632511950,
  },
  {
    name: '油性肌膚',
    size: 1322561000,
  },
];
const usageRevenueData_Table = [
  {
    key:'u1',
    name: '乾性肌膚',
    size: 1190143175,
  },
  {
    key:'u2',
    name: '全膚質適用',
    size: 856552450,
  },
  {
    key:'u3',
    name: '敏感肌膚',
    size: 632511950,
  },
  { 
    key:'u4',
    name: '油性肌膚',
    size: 1322561000,
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
    人氣: 24695,
    留言數: 5099,
  },
  {
    name: '乾性肌膚',
    人氣: 23068,
    留言數: 4756,
  },
  {
    name: '油性肌膚',
    人氣: 25586,
    留言數: 5267,
  },
  {
    name: '敏感肌膚',
    人氣: 14013,
    留言數: 2881,
  }
];
/// 功效
// 功效 商品數量
export const functionProductData = {
  labels: ['亮白', '保濕', '抗痘','控油','緊緻','舒敏'],
  datasets: [
    {
      label: '數量',
      data: [201, 476, 81, 103, 235, 144],
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
      data: [359150, 1136575, 245600, 267350, 447050, 194075],
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
    人氣: 13525,
    留言數: 2796,
  },
  {
    name: '保濕',
    人氣: 40111,
    留言數: 8329,
  },
  {
    name: '抗痘',
    人氣: 9793,
    留言數: 2080,
  },
  {
    name: '控油',
    人氣: 9810,
    留言數: 2088,
  },
  {
    name: '緊緻',
    人氣: 18408,
    留言數: 3809,
  },
  {
    name: '舒敏',
    人氣: 6657,
    留言數: 1375,
  }
];

// 適用於 營收
const functionRevenueData = [
  {
    name: '亮白',
    size: 468445775,
  },
  {
    name: '保濕',
    size: 1883430975,
  },
  {
    name: '抗痘',
    size: 197602825,
  },
  {
    name: '控油',
    size: 350495975,
  },
  {
    name: '緊緻',
    size: 856052225,
  },
  {
    name: '舒敏',
    size: 147595475,
  }
];
const functionRevenueData_Table = [
  {
    key:'f1',
    name: '亮白',
    size: 468445775,
  },
  {
    key:'f2',
    name: '保濕',
    size: 1883430975,
  },
  {
    key:'f3',
    name: '抗痘',
    size: 197602825,
  },
  {
    key:'f4',
    name: '控油',
    size: 350495975,
  },
  {
    key:'f5',
    name: '緊緻',
    size: 856052225,
  },
  {
    key:'f6',
    name: '舒敏',
    size: 147595475,
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
        width={1100}
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
      width={1100}
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
      width={1100}
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
      <Doughnut data={usageProductData} plugins={[textCenter]} />;
    </div>
  </Col>,
  sales: 
    <Col span={22}>
      <div style={{ display: "flex",  justifyContent: "center", height:"400px"}}>
        <Doughnut data={usageSalesData} plugins={[textCenter]} />;
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
      <Doughnut data={functionProductData} plugins={[textCenter]} />;
    </div>
  </Col>,
  sales: 
    <Col span={22}>
      <div style={{ display: "flex",  justifyContent: "center", height:"400px"}}>
        <Doughnut data={functionSalesData} plugins={[textCenter]} />;
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
const Essence = () => {
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
  console.log( parseInt(BigInt((BigInt(856052225) / BigInt(10000) ) - (BigInt(468445775) / BigInt(10000))).toString()))
  return (
    <Row>
       <div style={{display:"block"}}  className="Essence">
        <h1> 精華液 統計圖表</h1>
      </div>
      <Divider/>
      <ConfigProvider
          theme={{
              token:{
                colorPrimary: '#d31874',
              },
          }} >
        <Card title="價格區間" 
          style={{ width:"1150px", marginTop:"15px"}}
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
          style={{ width:"1150px", marginTop:"15px", marginBottom:"50px"}}
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

export default Essence

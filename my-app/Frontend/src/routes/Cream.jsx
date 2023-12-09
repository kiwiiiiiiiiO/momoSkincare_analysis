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
  { name: '$1~$100', product: 1 },
  { name: '$101~$200', product: 12 },
  { name: '$201~$300', product: 18 },
  { name: '$301~$400', product: 13 },
  { name: '$401~$500', product: 20 },
  { name: '$501~$600', product: 35 },
  { name: '$601~$700',product: 34 },
  { name: '$701~$800', product: 39 },
  { name: '$801~$900', product: 26 },
  { name: '$901~$1000', product: 29 },
  { name: '$1001~$1100', product: 19 },
  { name: '$1101~$1200', product: 20 },
  { name: '$1201~$1300', product: 6 },
  { name: '$1301~$1400', product: 14 },
  { name: '$1401~$1500', product: 12 },
  { name: '$1501~$1600', product: 12 },
  { name: '$1601~$1700', product: 11 },
  { name: '$1701~$1800', product: 5 },
  { name: '$1801~$1900', product: 6 },
  { name: '$1901~$2000', product: 5 },
  { name: '$2001~$2100', product:  4},
  { name: '$2101~$2200', product: 8},
  { name: '$2201~$2300', product: 8},
  { name: '$2301~$2400', product: 9 },
  { name: '$2401~$2500', product: 3 },
  { name: '$2501~$2600', product: 5 },
  { name: '$2601~$2700', product: 10 },
  { name: '$2701~$2800',product: 1 },
  { name: '$2801~$2900', product: 6},
  { name: '$2901~$3000', product: 2},
  { name: '$3001~$3100',product: 4 },
  { name: '$3101~$3200', product: 3},
  { name: '$3201~$300', product: 2 },
  { name: '$3301~$3400', product: 2 },
  { name: '$3401~$3500', product: 1 },
  { name: '$3501~$4000', product: 12 },
  { name: '$4001~',product: 33},
];

// 價格區間 - 營收總額
const revenueData = [
  { name: '$1~$100', revenue: 7425 },
  { name: '$101~$200',  revenue: 7606450 },
  { name: '$201~$300', revenue:7166875 },
  { name: '$301~$400',  revenue: 966975 },
  { name: '$401~$500',  revenue:17628550 },
  { name: '$501~$600',  revenue: 34811150 },
  { name: '$601~$700', revenue: 36920600 },
  { name: '$701~$800',  revenue: 25881175},
  { name: '$801~$900', revenue: 65504600 },
  { name: '$901~$1000',  revenue: 85104125 },
  { name: '$1001~$1100',  revenue: 75163800 },
  { name: '$1101~$1200', revenue: 5939450 },
  { name: '$1201~$1300',  revenue: 606075 },
  { name: '$1301~$1400',  revenue: 3333475},
  { name: '$1401~$1500', revenue: 35162200 },
  { name: '$1501~$1600',  revenue: 38977925 },
  { name: '$1601~$1700',  revenue: 40436325 },
  { name: '$1701~$1800',  revenue: 2180400 },
  { name: '$1801~$1900',  revenue: 24843725 },
  { name: '$1901~$2000',  revenue: 2492550 },
  { name: '$2001~$2100', revenue:  1690725},
  { name: '$2101~$2200',  revenue: 52715075},
  { name: '$2201~$2300',  revenue: 2678400},
  { name: '$2301~$2400',  revenue: 110699650 },
  { name: '$2401~$2500',  revenue: 872225 },
  { name: '$2501~$2600',  revenue: 59454225 },
  { name: '$2601~$2700', revenue: 204306800 },
  { name: '$2701~$2800', revenue: 2047500 },
  { name: '$2801~$2900',  revenue: 2794075},
  { name: '$2901~$3000',  revenue: 91622250},
  { name: '$3001~$3100', revenue:39368750},
  { name: '$3101~$3200', revenue: 71615025},
  { name: '$3201~$300', revenue: 1066500 },
  { name: '$3301~$3400',  revenue: 503325},
  { name: '$3401~$3500',  revenue: 86700 },
  { name: '$3501~$4000',  revenue: 4994875 },
  { name: '$4001~',  revenue: 44329725},
];
// 價格區間 - 銷量
const salesData = [
  { name: '$1~$100', sales: 75},
  { name: '$101~$200',   sales:46725 },
  { name: '$201~$300',  sales: 26725 },
  { name: '$301~$400',   sales: 2625 },
  { name: '$401~$500',   sales: 41150 },
  { name: '$501~$600',   sales: 65625 },
  { name: '$601~$700',  sales: 53250 },
  { name: '$701~$800',   sales: 32825},
  { name: '$801~$900',  sales: 74275},
  { name: '$901~$1000',   sales: 86700 },
  { name: '$1001~$1100',   sales: 73050 },
  { name: '$1101~$1200',  sales: 5150 },
  { name: '$1201~$1300',  sales: 475 },
  { name: '$1301~$1400',  sales: 2450},
  { name: '$1401~$1500', sales: 24250 },
  { name: '$1501~$1600',   sales: 24425 },
  { name: '$1601~$1700',  sales: 24075 },
  { name: '$1701~$1800',  sales: 1225},
  { name: '$1801~$1900',   sales: 13500 },
  { name: '$1901~$2000',  sales: 1275},
  { name: '$2001~$2100',  sales:  825},
  { name: '$2101~$2200',   sales: 24000},
  { name: '$2201~$2300',   sales: 1175},
  { name: '$2301~$2400',   sales: 46900 },
  { name: '$2401~$2500',  sales: 350 },
  { name: '$2501~$2600', sales: 22875 },
  { name: '$2601~$2700',  sales: 76000 },
  { name: '$2701~$2800',  sales: 750 },
  { name: '$2801~$2900',  sales: 975},
  { name: '$2901~$3000',  sales: 30750},
  { name: '$3001~$3100',  sales: 12950},
  { name: '$3101~$3200',  sales: 22875},
  { name: '$3201~$300',  sales: 325 },
  { name: '$3301~$3400',  sales: 150},
  { name: '$3401~$3500',   sales: 25 },
  { name: '$3501~$4000',   sales: 1325 },
  { name: '$4001~',   sales: 5775},
];

// 價格區間 - 人氣 ＆ 留言數
const popularityData = [
  { name: '$1~$100', popularity: 20, reviews:4},
  { name: '$101~$200',   popularity:387, reviews:84 },
  { name: '$201~$300', popularity: 462 , reviews:97},
  { name: '$301~$400',   popularity: 210 , reviews:45},
  { name: '$401~$500',   popularity: 1734 , reviews:357},
  { name: '$501~$600',   popularity: 1062 , reviews:220},
  { name: '$601~$700',  popularity: 788 , reviews:162},
  { name: '$701~$800',   popularity: 945, reviews:196},
  { name: '$801~$900', popularity: 2359, reviews:492},
  { name: '$901~$1000',  popularity: 1864, reviews:390 },
  { name: '$1001~$1100',  popularity: 855 , reviews:178},
  { name: '$1101~$1200', popularity: 362 , reviews:75},
  { name: '$1201~$1300', popularity: 127 , reviews:26},
  { name: '$1301~$1400', popularity: 195, reviews:40},
  { name: '$1401~$1500',popularity: 478, reviews: 98},
  { name: '$1501~$1600', popularity: 623, reviews: 127},
  { name: '$1601~$1700', popularity: 322 , reviews:67},
  { name: '$1701~$1800', popularity: 70, reviews:14},
  { name: '$1801~$1900',  popularity: 473 , reviews: 101},
  { name: '$1901~$2000', popularity: 234, reviews:50},
  { name: '$2001~$2100', popularity:  39, reviews:8},
  { name: '$2101~$2200', popularity: 602, reviews:123},
  { name: '$2201~$2300', popularity: 45, reviews:9},
  { name: '$2301~$2400', popularity: 3271, reviews: 680},
  { name: '$2401~$2500', popularity: 14, reviews:3 },
  { name: '$2501~$2600', popularity: 372, reviews:76 },
  { name: '$2601~$2700',  popularity:  3556, reviews:809},
  { name: '$2701~$2800', popularity: 34, reviews: 7},
  { name: '$2801~$2900', popularity: 54, reviews:11},
  { name: '$2901~$3000',  popularity: 653, reviews:136},
  { name: '$3001~$3100',popularity: 348, reviews:70},
  { name: '$3101~$3200', popularity: 1234, reviews:257},
  { name: '$3201~$300',  popularity: 5 , reviews:1},
  { name: '$3301~$3400', popularity: 20, reviews:4},
  { name: '$3401~$3500',  popularity: 0 , reviews:0},
  { name: '$3501~$4000',  popularity: 87 , reviews:18},
  { name: '$4001~', popularity: 598, reviews:125},
];
/// 適用於
// 適用於 商品數
export const usageProductData = {
  labels: ['全膚質適用', '乾性肌膚', '油性肌膚','敏感肌膚'],
  datasets: [
    {
      label: '數量',
      data: [263, 252,204, 188],
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
      data: [458050, 433950,378200, 294000],
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
    size: 557081050,
  },
  {
    name: '全膚質適用',
    size: 640035675,
  },
  {
    name: '敏感肌膚',
    size: 355349975,
  },
  {
    name: '油性肌膚',
    size: 513191850,
  },
];
const usageRevenueData_Table = [
  {
    key:'u1',
    name: '乾性肌膚',
    size: 557081050,
  },
  {
    key:'u2',
    name: '全膚質適用',
    size: 640035675,
  },
  {
    key:'u3',
    name: '敏感肌膚',
    size: 355349975,
  },
  {
    key:'u4',
    name: '油性肌膚',
    size: 513191850,
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
    人氣: 14722,
    留言數: 3046,
  },
  {
    name: '乾性肌膚',
    人氣: 12517,
    留言數: 2607,
  },
  {
    name: '油性肌膚',
    人氣: 7879,
    留言數: 1631,
  },
  {
    name: '敏感肌膚',
    人氣: 10652,
    留言數: 2204,
  }
];
/// 功效
// 功效 商品數量
export const functionProductData = {
  labels: ['亮白', '保濕', '抗痘','控油','緊緻','舒敏'],
  datasets: [
    {
      label: '數量',
      data: [152, 425, 22, 69, 219, 148],
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
      data: [260375, 776450, 2675, 57425, 477425, 126950],
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
    人氣: 13150,
    留言數: 2812,
  },
  {
    name: '保濕',
    人氣: 23959,
    留言數: 5048,
  },
  {
    name: '抗痘',
    人氣: 161,
    留言數: 34,
  },
  {
    name: '控油',
    人氣: 1647,
    留言數: 342,
  },
  {
    name: '緊緻',
    人氣:16710,
    留言數: 3549,
  },
  {
    name: '舒敏',
    人氣: 5355,
    留言數: 1109,
  }
];

// 適用於 營收
const functionRevenueData = [
  {
    name: '亮白',
    size: 458280375,
  },
  {
    name: '保濕',
    size: 1134961075,
  },
  {
    name: '控油',
    size: 110310200,
  },
  {
    name: '緊緻',
    size: 856991875,
  },
  {
    name: '舒敏',
    size: 93425925,
  }
];
const functionRevenueData_Table = [
  {
    key:'f1',
    name: '亮白',
    size: 458280375,
  },
  {
    key:'f2',
    name: '保濕',
    size: 1134961075,
  },
  {
    key:'f3',
    name: '控油',
    size: 110310200,
  },
  {
    key:'f4',
    name: '緊緻',
    size: 856991875,
  },
  {
    key:'f5',
    name: '舒敏',
    size: 93425925,
  },
  {
    key:'f6',
    name: '抗痘',
    size: 4391775,
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


const Cream = () => {
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
        <h1> 乳霜 統計圖表</h1>
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

export default Cream

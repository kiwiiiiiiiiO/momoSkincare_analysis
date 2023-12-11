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
  { name: '$1~$100', product: 39 },
  { name: '$101~$200', product: 81 },
  { name: '$201~$300', product:  87 },
  { name: '$301~$400', product: 52 },
  { name: '$401~$500', product: 43 },
  { name: '$501~$600', product: 19 },
  { name: '$601~$700',product: 19  },
  { name: '$701~$800', product:  18 },
  { name: '$801~$900', product:   15 },
  { name: '$901~$1000', product:   21  },
  { name: '$1001~$1100', product:   5 },
  { name: '$1101~$1200', product:   4 },
  { name: '$1201~$1300', product: 7 },
  { name: '$1301~$1400', product:  6 },
  { name: '$1401~$1500', product: 9 },
  { name: '$1501~$1600', product: 5  },
  { name: '$1601~$1700', product:  8  },
  { name: '$1701~$1800', product:  6  },
  { name: '$1801~$1900', product: 4   },
  { name: '$1901~$2000', product:4 },
  { name: '$2001~$2100', product:  1 },
  { name: '$2101~$2200', product:  3   },
  { name: '$2201~$2300', product:  1  },
  { name: '$2301~$2400', product:  1 },
  { name: '$2401~$2500', product:  0},
  { name: '$2501~$2600', product:  1 },
  { name: '$2601~$2700', product: 4 },
  { name: '$2701~$2800',product:  0 },
  { name: '$2801~$2900', product:  0 },
  { name: '$2901~$3000', product: 0 },
  { name: '$3001~$3100',product:  0 },
  { name: '$3101~$3200', product: 2 },
  { name: '$3201~$300', product:   0 },
  { name: '$3301~$3400', product: 0  },
  { name: '$3401~$3500', product:  0 },
  { name: '$3501~$4000', product: 0 },
  { name: '$4001~',product:  2 },
];


const revenueData = [
   { name: '$1~$100', revenue: 10471925 },
  { name: '$101~$200',  revenue:30065550 },
  { name: '$201~$300', revenue: 9646450},
  { name: '$301~$400',  revenue:59046150 },
  { name: '$401~$500', revenue:  24251400},
  { name: '$501~$600', revenue:8991325 },
  { name: '$601~$700', revenue: 2755950 },
  { name: '$701~$800',  revenue:  4145325 },
  { name: '$801~$900', revenue: 3980825  },
  { name: '$901~$1000',  revenue: 18217000 },
  { name: '$1001~$1100',  revenue:1817600  },
  { name: '$1101~$1200',revenue: 427450 },
  { name: '$1201~$1300',  revenue: 1675300},
  { name: '$1301~$1400',  revenue: 3163875},
  { name: '$1401~$1500',  revenue: 44742200 },
  { name: '$1501~$1600',   revenue: 1211800 },
  { name: '$1601~$1700',   revenue: 21901800  },
  { name: '$1701~$1800',  revenue:1397925 },
  { name: '$1801~$1900',   revenue: 2158050 },
  { name: '$1901~$2000',   revenue: 2163375 },
  { name: '$2001~$2100',  revenue: 615000},
  { name: '$2101~$2200',   revenue: 268400 },
  { name: '$2201~$2300',   revenue: 669000 },
  { name: '$2301~$2400',   revenue: 180000 },
  { name: '$2401~$2500',   revenue: 0  },
  { name: '$2501~$2600',   revenue: 63500 },
  { name: '$2601~$2700',  revenue:  2496100 },
  { name: '$2701~$2800', revenue:  0 },
  { name: '$2801~$2900',  revenue:  0 },
  { name: '$2901~$3000',  revenue: 0 },
  { name: '$3001~$3100',  revenue: 0 },
  { name: '$3101~$3200',  revenue: 1012375 },
  { name: '$3201~$300', revenue:  0 },
  { name: '$3301~$3400',  revenue: 0 },
  { name: '$3401~$3500', revenue: 0 },
  { name: '$3501~$4000',  revenue: 0  },
  { name: '$4001~',  revenue: 415100 },

];

const salesData = [
  { name: '$1~$100', sales:  158725 },
  { name: '$101~$200',   sales:  206875 },
  { name: '$201~$300',  sales:  39525 },
  { name: '$301~$400',   sales: 161400 },
  { name: '$401~$500',   sales:50850  },
  { name: '$501~$600',   sales:  15750 },
  { name: '$601~$700',  sales:  4225 },
  { name: '$701~$800',   sales: 5325 },
  { name: '$801~$900',  sales: 4625  },
  { name: '$901~$1000',   sales: 18425 },
  { name: '$1001~$1100',   sales: 1675  },
  { name: '$1101~$1200',  sales: 375 },
  { name: '$1201~$1300',  sales: 1325 },
  { name: '$1301~$1400',  sales: 2325  },
  { name: '$1401~$1500', sales: 30850  },
  { name: '$1501~$1600',   sales: 775  },
  { name: '$1601~$1700',  sales: 13050 },
  { name: '$1701~$1800',  sales: 800  },
  { name: '$1801~$1900',   sales: 1150  },
  { name: '$1901~$2000',  sales: 1100  },
  { name: '$2001~$2100',  sales:  300 },
  { name: '$2101~$2200',   sales:  125  },
  { name: '$2201~$2300',   sales: 300  },
  { name: '$2301~$2400',   sales: 75 },
  { name: '$2401~$2500',  sales: 0  },
  { name: '$2501~$2600', sales: 25 },
  { name: '$2601~$2700',  sales:  925 },
  { name: '$2701~$2800',  sales:  0 },
  { name: '$2801~$2900',  sales: 0 },
  { name: '$2901~$3000',  sales: 0 },
  { name: '$3001~$3100',  sales: 0 },
  { name: '$3101~$3200',  sales: 325  },
  { name: '$3201~$300',  sales: 0  },
  { name: '$3301~$3400',  sales: 0 },
  { name: '$3401~$3500',   sales: 0  },
  { name: '$3501~$4000',   sales: 0  },
  { name: '$4001~',   sales: 100 },
];


const popularityData = [
  { name: '$1~$100', popularity: 4449 , reviews:919 },
  { name: '$101~$200',   popularity: 5714, reviews: 1182 },
  { name: '$201~$300', popularity: 4045, reviews:  837 },
  { name: '$301~$400',   popularity:  3733, reviews: 774  },
  { name: '$401~$500',   popularity:  1635 , reviews:341 },
  { name: '$501~$600',   popularity: 3638, reviews:829  },
  { name: '$601~$700',  popularity:   663 , reviews: 139  },
  { name: '$701~$800',   popularity:   464, reviews:  97},
  { name: '$801~$900',   popularity:  1514, reviews: 319  },
  { name: '$901~$1000',  popularity:  562, reviews:  117},
  { name: '$1001~$1100',  popularity: 206, reviews:  42 },
  { name: '$1101~$1200', popularity:   24, reviews:  5 },
  { name: '$1201~$1300', popularity:  112 , reviews:  23},
  { name: '$1301~$1400', popularity:  342, reviews:   70 },
  { name: '$1401~$1500',popularity:   1567,  reviews:  321  },
  { name: '$1501~$1600', popularity:  136, reviews:   28},
  { name: '$1601~$1700', popularity:   74 , reviews: 15  },
  { name: '$1701~$1800', popularity:    86 , reviews: 18},
  { name: '$1801~$1900',  popularity:  226, reviews:   46 },
  { name: '$1901~$2000', popularity:  148,  reviews:  31 },
  { name: '$2001~$2100', popularity:   30 , reviews:  6 },
  { name: '$2101~$2200', popularity:  15 , reviews: 3 },
  { name: '$2201~$2300', popularity:    19 , reviews: 4 },
  { name: '$2301~$2400', popularity: 15, reviews:  3 },
  { name: '$2401~$2500', popularity:   0, reviews:  0  },
  { name: '$2501~$2600', popularity:  0 , reviews:  0 },
  { name: '$2601~$2700',  popularity: 116, reviews: 24  },
  { name: '$2701~$2800', popularity:   0, reviews:  0  },
  { name: '$2801~$2900', popularity:    0, reviews: 0  },
  { name: '$2901~$3000',  popularity: 0 , reviews:  0 },
  { name: '$3001~$3100',popularity:   0 , reviews: 0  },
  { name: '$3101~$3200', popularity:  15, reviews: 3  },
  { name: '$3201~$300',  popularity:   0 , reviews:0   },
  { name: '$3301~$3400', popularity:   0 , reviews: 0  },
  { name: '$3401~$3500',  popularity:  0 , reviews:  0 },
  { name: '$3501~$4000',  popularity:  0 , reviews: 0  },
  { name: '$4001~', popularity: 45 , reviews: 9  },
];
// 適用於
// 適用於 商品數
export const usageProductData = {
  labels: ['全膚質適用', '乾性肌膚', '油性肌膚','敏感肌膚'],
  datasets: [
    {
      label: '數量',
      data: [325, 260, 252, 185],
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
      data: [456525, 439725,425725 , 269925],
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
    size: 139543175,
  },
  {
    name: '全膚質適用',
    size: 150490000,
  },
  {
    name: '敏感肌膚',
    size: 94439850,
  },
  {
    name: '油性肌膚',
    size: 135857600,
  },
];
const usageRevenueData_Table = [
  {
    key:'u1',
    name: '乾性肌膚',
    size: 139543175,
  },
  {
    key:'u2',
    name: '全膚質適用',
    size: 150490000,
  },
  {
    key:'u3',
    name: '敏感肌膚',
    size: 94439850,
  },
  {
    key:'u4',
    name: '油性肌膚',
    size: 135857600,
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
    人氣: 19609,
    留言數: 4142,
  },
  {
    name: '乾性肌膚',
    人氣: 19005,
    留言數: 4007,
  },
  {
    name: '油性肌膚',
    人氣: 19062,
    留言數:4017,
  },
  {
    name: '敏感肌膚',
    人氣: 14336,
    留言數: 3046,
  }
];

/// 功效
// 功效 商品數量
export const functionProductData = {
  labels: ['亮白', '保濕', '抗痘','控油','緊緻','舒敏'],
  datasets: [
    {
      label: '數量',
      data: [233, 397, 65,107, 186, 158],
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
      data: [302450, 599700, 99600, 227150,258375, 221500],
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
    人氣: 11981,
    留言數: 2485,
  },
  {
    name: '保濕',
    人氣: 24263,
    留言數: 5110,
  },
  {
    name: '抗痘',
    人氣: 3492,
    留言數: 725,
  },
  {
    name: '控油',
    人氣: 9902,
    留言數: 2126,
  },
  {
    name: '緊緻',
    人氣: 12680,
    留言數: 2712,
  },
  {
    name: '舒敏',
    人氣: 10753,
    留言數: 2304,
  }
];

// 適用於 營收
const functionRevenueData = [
  {
    name: '亮白',
    size: 97341925,
  },
  {
    name: '保濕',
    size: 166914200,
    
  },
  {
    name: '抗痘',
    size: 29765200,
  }, 
  {
    name: '控油',
    size: 104208950,
  },
  {
    name: '緊緻',
    size: 93624900,
  },
  {
    name: '舒敏',
    size: 68633400,
  }
];
const functionRevenueData_Table = [
  {
    key:'f1',
    name: '亮白',
    size: 97341925,
  },
  {
    key:'f2',
    name: '保濕',
    size: 166914200,
  },
  {
    key:'f3',
    name: '控油',
    size: 104208950,
  },
  {
    key:'f4',
    name: '緊緻',
    size: 93624900,
  },
  {
    key:'f5',
    name: '舒敏',
    size: 68633400,
  },
  {
    key:'f6',
    name: '抗痘',
    size: 29765200,
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


// 面膜
const FaceMask = () => {
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
      <h1> 面膜 統計圖表</h1>
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

export default FaceMask

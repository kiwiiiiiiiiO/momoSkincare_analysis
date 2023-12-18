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
  { name: '$1~$100', product: 0   },
  { name: '$101~$200', product: 3 },
  { name: '$201~$300', product: 20 },
  { name: '$301~$400', product:  33 },
  { name: '$401~$500', product:  21 },
  { name: '$501~$600', product: 23  },
  { name: '$601~$700',product: 30  },
  { name: '$701~$800', product:  24 },
  { name: '$801~$900', product:   25  },
  { name: '$901~$1000', product:  8  },
  { name: '$1001~$1100', product:  15  },
  { name: '$1101~$1200', product: 12   },
  { name: '$1201~$1300', product:   16 },
  { name: '$1301~$1400', product: 11 },
  { name: '$1401~$1500', product:  15},
  { name: '$1501~$1600', product: 16 },
  { name: '$1601~$1700', product: 10   },
  { name: '$1701~$1800', product:  26 },
  { name: '$1801~$1900', product:  9 },
  { name: '$1901~$2000', product: 8  },
  { name: '$2001~$2100', product:  8  },
  { name: '$2101~$2200', product:   6 },
  { name: '$2201~$2300', product:   9 },
  { name: '$2301~$2400', product:   7 },
  { name: '$2401~$2500', product:  11  },
  { name: '$2501~$2600', product:   6 },
  { name: '$2601~$2700', product:  8 },
  { name: '$2701~$2800',product:  7  },
  { name: '$2801~$2900', product: 5  },
  { name: '$2901~$3000', product: 1 },
  { name: '$3001~$3100',product:  3  },
  { name: '$3101~$3200', product:  4 },
  { name: '$3201~$300', product:   2  },
  { name: '$3301~$3400', product:  0  },
  { name: '$3401~$3500', product: 2  },
  { name: '$3501~$4000', product:  4 },
  { name: '$4001~',product: 40 },
];

const revenueData = [
   { name: '$1~$100', revenue: 0 },
  { name: '$101~$200',  revenue: 128350 },
  { name: '$201~$300', revenue:1259850},
  { name: '$301~$400',  revenue: 	15094275},
  { name: '$401~$500', revenue:  2061075	 },
  { name: '$501~$600', revenue: 8993075},
  { name: '$601~$700', revenue: 11695000  },
  { name: '$701~$800',  revenue: 19164400 },
  { name: '$801~$900', revenue: 21716200 },
  { name: '$901~$1000',  revenue: 1148925  },
  { name: '$1001~$1100',  revenue: 47437650 },
  { name: '$1101~$1200',revenue: 1038750 },
  { name: '$1201~$1300',  revenue: 21871500 },
  { name: '$1301~$1400',  revenue:  4076050 },
  { name: '$1401~$1500',  revenue:  4574400 },
  { name: '$1501~$1600',   revenue: 36357800 },
  { name: '$1601~$1700',   revenue:  22915175 },
  { name: '$1701~$1800',  revenue: 9887725  },
  { name: '$1801~$1900',   revenue: 2242375 },
  { name: '$1901~$2000',   revenue: 5234700 },
  { name: '$2001~$2100',  revenue:  3132125 },
  { name: '$2101~$2200',   revenue: 1024250	 },
  { name: '$2201~$2300',   revenue: 53445850 },
  { name: '$2301~$2400',   revenue: 1951125 },
  { name: '$2401~$2500',   revenue:88178525 },
  { name: '$2501~$2600',   revenue: 1784675	},
  { name: '$2601~$2700',  revenue:4100575  },
  { name: '$2701~$2800', revenue: 66201050 },
  { name: '$2801~$2900',  revenue: 38623375 },
  { name: '$2901~$3000',  revenue: 74500	},
  { name: '$3001~$3100',  revenue: 2057775},
  { name: '$3101~$3200',  revenue:2799075},
  { name: '$3201~$300', revenue:  162000},
  { name: '$3301~$3400',  revenue: 0 },
  { name: '$3401~$3500', revenue: 1131775 },
  { name: '$3501~$4000',  revenue: 1652775	},
  { name: '$4001~',  revenue: 27396625 },

];

const salesData = [
  { name: '$1~$100', sales: 0 },
  { name: '$101~$200',   sales:850  },
  { name: '$201~$300',  sales: 4925 },
  { name: '$301~$400',   sales: 43525 },
  { name: '$401~$500',   sales: 4450 },
  { name: '$501~$600',   sales: 15875  },
  { name: '$601~$700',  sales: 18300 },
  { name: '$701~$800',   sales: 25500 },
  { name: '$801~$900',  sales: 25525 },
  { name: '$901~$1000',   sales: 1225 },
  { name: '$1001~$1100',   sales:  46975 },
  { name: '$1101~$1200',  sales: 900  },
  { name: '$1201~$1300',  sales: 17650 },
  { name: '$1301~$1400',  sales: 3025 },
  { name: '$1401~$1500', sales: 3150  },
  { name: '$1501~$1600',   sales: 24025  },
  { name: '$1601~$1700',  sales: 13550 },
  { name: '$1701~$1800',  sales: 5625 },
  { name: '$1801~$1900',   sales:  1200 },
  { name: '$1901~$2000',  sales: 2650 },
  { name: '$2001~$2100',  sales: 1525  },
  { name: '$2101~$2200',   sales: 475 },
  { name: '$2201~$2300',   sales: 23750 },
  { name: '$2301~$2400',   sales: 825  },
  { name: '$2401~$2500',  sales:  35275 },
  { name: '$2501~$2600', sales: 700 },
  { name: '$2601~$2700',  sales: 1525  },
  { name: '$2701~$2800',  sales: 24375 },
  { name: '$2801~$2900',  sales: 13325 },
  { name: '$2901~$3000',  sales: 25 },
  { name: '$3001~$3100',  sales: 675 },
  { name: '$3101~$3200',  sales: 875 },
  { name: '$3201~$300',  sales: 50},
  { name: '$3301~$3400',  sales: 0  },
  { name: '$3401~$3500',   sales: 325 },
  { name: '$3501~$4000',   sales:425  },
  { name: '$4001~',   sales:4675 },
];


const popularityData = [
  { name: '$1~$100', popularity: 0  , reviews: 0   },
  { name: '$101~$200',   popularity: 127  , reviews: 27 },
  { name: '$201~$300', popularity:   915 , reviews: 195 },
  { name: '$301~$400',   popularity: 2400   , reviews:  502 },
  { name: '$401~$500',   popularity:  797 , reviews: 169  },
  { name: '$501~$600',   popularity:  658 , reviews:  139},
  { name: '$601~$700',  popularity:   1621 , reviews:  335 },
  { name: '$701~$800',   popularity:  853 , reviews: 180  },
  { name: '$801~$900',   popularity: 572 , reviews: 120  },
  { name: '$901~$1000',  popularity:1331, reviews: 278  },
  { name: '$1001~$1100',  popularity: 3287, reviews: 686 },
  { name: '$1101~$1200', popularity: 84, reviews: 17 },
  { name: '$1201~$1300', popularity: 1023 , reviews: 212},
  { name: '$1301~$1400', popularity: 1129 , reviews:   256},
  { name: '$1401~$1500',popularity:   493 , reviews:110   },
  { name: '$1501~$1600', popularity:  431, reviews: 92 },
  { name: '$1601~$1700', popularity:  953, reviews:  199 },
  { name: '$1701~$1800', popularity:  1221, reviews: 256  },
  { name: '$1801~$1900',  popularity:  106 , reviews:  23 },
  { name: '$1901~$2000', popularity: 325, reviews: 72 },
  { name: '$2001~$2100', popularity:  150 , reviews: 32  },
  { name: '$2101~$2200', popularity: 13, reviews: 3 },
  { name: '$2201~$2300', popularity:  882 , reviews: 184  },
  { name: '$2301~$2400', popularity:  78 , reviews: 17 },
  { name: '$2401~$2500', popularity:   1777 , reviews: 367 },
  { name: '$2501~$2600', popularity: 81  , reviews: 17 },
  { name: '$2601~$2700',  popularity:   324  , reviews: 70 },
  { name: '$2701~$2800', popularity:  796 , reviews:  164 },
  { name: '$2801~$2900', popularity: 1055   , reviews: 217 },
  { name: '$2901~$3000',  popularity: 59 , reviews:  12},
  { name: '$3001~$3100',popularity:   83 , reviews:  17},
  { name: '$3101~$3200', popularity:  39    , reviews: 8 },
  { name: '$3201~$300',  popularity: 10   , reviews:  2},
  { name: '$3301~$3400', popularity:   0 , reviews:  0},
  { name: '$3401~$3500',  popularity:   90 , reviews:  18},
  { name: '$3501~$4000',  popularity:  215  , reviews: 50 },
  { name: '$4001~', popularity: 424   , reviews: 89 },
];

/// 適用於
// 適用於 商品數
export const usageProductData = {
  labels: ['全膚質適用', '乾性肌膚', '油性肌膚','敏感肌膚'],
  datasets: [
    {
      label: '數量',
      data: [338 ,184 ,164 , 139 ],
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
      data: [ 245050 , 110875, 106950 , 111150 ],
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
    size: 124464900,
  },
  {
    name: '全膚質適用',
    size: 429173025,
  },
  {
    name: '敏感肌膚',
    size: 93218275,
  },
  {
    name: '油性肌膚',
    size: 118513925,
  },
];
const usageRevenueData_Table = [
  {
    key:'u1',
    name: '乾性肌膚',
    size: 124464900,
  },
  {
    key:'u2',
    name: '全膚質適用',
    size: 429173025,
  },
  {
    key:'u3',
    name: '敏感肌膚',
    size: 93218275,
  },
  {
    key:'u4',
    name: '油性肌膚',
    size: 118513925,
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
    人氣:18866,
    留言數: 3972,
  },
  {
    name: '乾性肌膚',
    人氣: 6560,
    留言數: 1379,
  },
  {
    name: '油性肌膚',
    人氣: 6373,
    留言數: 1337,
  },
  {
    name: '敏感肌膚',
    人氣: 6488,
    留言數: 1358,
  }
];
/// 功效
// 功效 商品數量
export const functionProductData = {
  labels: ['亮白', '保濕', '抗痘','控油','緊緻','舒敏'],
  datasets: [
    {
      label: '數量',
      data: [155, 386, 8, 31, 303, 88],
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
      data: [48425, 256000, 1200, 3975, 293200, 37575],
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
    人氣: 3704,
    留言數: 777,
  },
  {
    name: '保濕',
    人氣: 20511,
    留言數: 4325,
  },
  {
    name: '抗痘',
    人氣: 245,
    留言數: 50,
  },
  {
    name: '控油',
    人氣: 662,
    留言數: 138,
  },
  {
    name: '緊緻',
    人氣: 18432,
    留言數: 3880,
  },
  {
    name: '舒敏',
    人氣: 2929,
    留言數: 609,
  }
];

// 適用於 營收
const functionRevenueData = [
  {
    name: '亮白',
    size: 64712750,
  },
  {
    name: '保濕',
    size:328525200,
  },
  {
    name: '抗痘',
    size: 1962275,
  },
  {
    name: '控油',
    size: 3913100,
  },
  {
    name: '緊緻',
    size: 411381475,
  },
  {
    name: '舒敏',
    size: 56364900,
  }
];
const functionRevenueData_Table = [
  {
    key:'f1',
    name: '亮白',
    size: 64712750,
  },
  {
    key:'f2',
    name: '保濕',
    size:328525200,
  },
  {
    key:'f3',
    name: '抗痘',
    size: 1962275,
  },
  {
    key:'f4',
    name: '控油',
    size: 3913100,
  },
  {
    key:'f5',
    name: '緊緻',
    size: 411381475,
  },
  {
    key:'f6',
    name: '舒敏',
    size: 56364900,
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
        width={1050}
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

// 眼霜
const EyeCream = () => {
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
     <h1> 眼霜 統計圖表</h1>
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

export default EyeCream

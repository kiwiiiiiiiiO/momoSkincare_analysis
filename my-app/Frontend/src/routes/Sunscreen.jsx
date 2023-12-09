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
  { name: '$1~$100', product: 1 },
  { name: '$101~$200', product:14   },
  { name: '$201~$300', product:  41},
  { name: '$301~$400', product:  42},
  { name: '$401~$500', product: 27 },
  { name: '$501~$600', product: 25 },
  { name: '$601~$700',product:  36},
  { name: '$701~$800', product: 24 },
  { name: '$801~$900', product: 24 },
  { name: '$901~$1000', product: 18 },
  { name: '$1001~$1100', product: 9 },
  { name: '$1101~$1200', product: 15  },
  { name: '$1201~$1300', product: 8 },
  { name: '$1301~$1400', product: 8  },
  { name: '$1401~$1500', product: 8},
  { name: '$1501~$1600', product: 6 },
  { name: '$1601~$1700', product:  4},
  { name: '$1701~$1800', product:  2},
  { name: '$1801~$1900', product:   2},
  { name: '$1901~$2000', product: 3},
  { name: '$2001~$2100', product: 0  },
  { name: '$2101~$2200', product: 0 },
  { name: '$2201~$2300', product: 2 },
  { name: '$2301~$2400', product: 2 },
  { name: '$2401~$2500', product:  0},
  { name: '$2501~$2600', product:  1},
  { name: '$2601~$2700', product: 0 },
  { name: '$2701~$2800',product:   0},
  { name: '$2801~$2900', product: 0},
  { name: '$2901~$3000', product: 2 },
  { name: '$3001~$3100',product:  1},
  { name: '$3101~$3200', product:  0},
  { name: '$3201~$300', product:   1},
  { name: '$3301~$3400', product:  0},
  { name: '$3401~$3500', product:  0},
  { name: '$3501~$4000', product:  1},
  { name: '$4001~',product:    0},
];


const revenueData = [
   { name: '$1~$100', revenue: 2002500},
  { name: '$101~$200',  revenue: 1128500 },
  { name: '$201~$300', revenue: 23856325},
  { name: '$301~$400',  revenue: 27659625},
  { name: '$401~$500', revenue: 2565175},
  { name: '$501~$600', revenue: 22229425 },
  { name: '$601~$700', revenue:39097975 },
  { name: '$701~$800',  revenue: 29946800},
  { name: '$801~$900', revenue:73801700 },
  { name: '$901~$1000',  revenue: 81779500},
  { name: '$1001~$1100',  revenue: 24656000},
  { name: '$1101~$1200',revenue:55450725 },
  { name: '$1201~$1300',  revenue:2798950 },
  { name: '$1301~$1400',  revenue: 2027800 },
  { name: '$1401~$1500',  revenue: 2722325},
  { name: '$1501~$1600',   revenue: 1608150 },
  { name: '$1601~$1700',   revenue:1233225 },
  { name: '$1701~$1800',  revenue: 21506250},
  { name: '$1801~$1900',   revenue: 56445725},
  { name: '$1901~$2000',   revenue: 246625},
  { name: '$2001~$2100',  revenue: 0 },
  { name: '$2101~$2200',   revenue: 0 },
  { name: '$2201~$2300',   revenue: 736400},
  { name: '$2301~$2400',   revenue:  770800},
  { name: '$2401~$2500',   revenue: 0 },
  { name: '$2501~$2600',   revenue: 65000},
  { name: '$2601~$2700',  revenue:  0},
  { name: '$2701~$2800', revenue:  0},
  { name: '$2801~$2900',  revenue: 0},
  { name: '$2901~$3000',  revenue: 37199500},
  { name: '$3001~$3100',  revenue: 76250},
  { name: '$3101~$3200',  revenue: 0 },
  { name: '$3201~$300', revenue: 2475000},
  { name: '$3301~$3400',  revenue: 0 },
  { name: '$3401~$3500', revenue: 0},
  { name: '$3501~$4000',  revenue: 267525},
  { name: '$4001~',  revenue: 0 },

];

const salesData = [
  { name: '$1~$100', sales:  22500},
  { name: '$101~$200',   sales:  6625},
  { name: '$201~$300',  sales: 89875 },
  { name: '$301~$400',   sales: 81550 },
  { name: '$401~$500',   sales:  5625},
  { name: '$501~$600',   sales: 41775 },
  { name: '$601~$700',  sales:  59700},
  { name: '$701~$800',   sales:  39200},
  { name: '$801~$900',  sales:  85675},
  { name: '$901~$1000',   sales: 82650 },
  { name: '$1001~$1100',   sales: 23900 },
  { name: '$1101~$1200',  sales: 47750 },
  { name: '$1201~$1300',  sales: 2200 },
  { name: '$1301~$1400',  sales: 1475 },
  { name: '$1401~$1500', sales:  1850 },
  { name: '$1501~$1600',   sales: 1025 },
  { name: '$1601~$1700',  sales:  750},
  { name: '$1701~$1800',  sales: 12575 },
  { name: '$1801~$1900',   sales: 30025  },
  { name: '$1901~$2000',  sales: 125  },
  { name: '$2001~$2100',  sales:  0  },
  { name: '$2101~$2200',   sales: 0  },
  { name: '$2201~$2300',   sales: 325  },
  { name: '$2301~$2400',   sales: 325 },
  { name: '$2401~$2500',  sales: 0 },
  { name: '$2501~$2600', sales:  25 },
  { name: '$2601~$2700',  sales: 0  },
  { name: '$2701~$2800',  sales:  0 },
  { name: '$2801~$2900',  sales: 0 },
  { name: '$2901~$3000',  sales: 12525 },
  { name: '$3001~$3100',  sales: 25},
  { name: '$3101~$3200',  sales: 0 },
  { name: '$3201~$300',  sales: 750},
  { name: '$3301~$3400',  sales:  0 },
  { name: '$3401~$3500',   sales: 0 },
  { name: '$3501~$4000',   sales:75 },
  { name: '$4001~',   sales:  0},
];

const popularityData = [
  { name: '$1~$100', popularity:  619 , reviews:  129  },
  { name: '$101~$200',   popularity:1340  , reviews: 276  },
  { name: '$201~$300', popularity:   4155, reviews: 851 },
  { name: '$301~$400',   popularity: 4141 , reviews: 871 },
  { name: '$401~$500',   popularity:  1815, reviews: 379   },
  { name: '$501~$600',   popularity:  2349, reviews: 490   },
  { name: '$601~$700',  popularity: 2950 , reviews: 537 },
  { name: '$701~$800',   popularity: 1920 , reviews:393 },
  { name: '$801~$900',   popularity: 925 , reviews: 189 },
  { name: '$901~$1000',  popularity: 1825 , reviews: 376  },
  { name: '$1001~$1100',  popularity:  449 , reviews: 95 },
  { name: '$1101~$1200', popularity: 661, reviews: 138 },
  { name: '$1201~$1300', popularity:204 , reviews: 43 },
  { name: '$1301~$1400', popularity:  348, reviews: 74  },
  { name: '$1401~$1500',popularity:   125, reviews: 26  },
  { name: '$1501~$1600', popularity: 152, reviews:  32  },
  { name: '$1601~$1700', popularity:  127, reviews: 26  },
  { name: '$1701~$1800', popularity:  256 , reviews: 53 },
  { name: '$1801~$1900',  popularity:42  , reviews: 9  },
  { name: '$1901~$2000', popularity: 47 , reviews: 10 },
  { name: '$2001~$2100', popularity:   0 , reviews:   0 },
  { name: '$2101~$2200', popularity:  0 , reviews: 0 },
  { name: '$2201~$2300', popularity:   103 , reviews: 22 },
  { name: '$2301~$2400', popularity:  4 , reviews:  1 },
  { name: '$2401~$2500', popularity:   0, reviews: 0   },
  { name: '$2501~$2600', popularity:    0 , reviews:  0  },
  { name: '$2601~$2700',  popularity:  0   , reviews: 0  },
  { name: '$2701~$2800', popularity:  0 , reviews:  0  },
  { name: '$2801~$2900', popularity:    0, reviews: 0  },
  { name: '$2901~$3000',  popularity: 147 , reviews: 30 },
  { name: '$3001~$3100',popularity:   0 , reviews: 0  },
  { name: '$3101~$3200', popularity:    0, reviews:0   },
  { name: '$3201~$300',  popularity:   302, reviews: 63 },
  { name: '$3301~$3400', popularity:    0, reviews:  0 },
  { name: '$3401~$3500',  popularity:  0  , reviews: 0  },
  { name: '$3501~$4000',  popularity: 0   , reviews:0  },
  { name: '$4001~', popularity:   0 , reviews: 0 },
];


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
/// 功效
// 功效 商品數量
export const functionProductData = {
  labels: ['亮白', '保濕', '抗痘','控油','緊緻','舒敏'],
  datasets: [
    {
      label: '數量',
      data: [155, 224, 7, 73, 14, 66],
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
      data: [393975, 337250,1775, 126675,2000, 218600],
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
    人氣: 13940,
    留言數: 2898,
  },
  {
    name: '保濕',
    人氣: 14029,
    留言數: 2898,
  },
  {
    name: '抗痘',
    人氣: 637,
    留言數: 130,
  },
  {
    name: '控油',
    人氣: 6354,
    留言數: 1313,
  },
  {
    name: '緊緻',
    人氣: 313,
    留言數: 65,
  },
  {
    name: '舒敏',
    人氣: 4551,
    留言數:941,
  }
];

// 適用於 營收
const functionRevenueData = [
  {
    name: '亮白',
    size: 309301300,
  },
  {
    name: '保濕',
    size: 221287250,
  },
  {
    name: '抗痘',
    size: 842200,
  },
  {
    name: '控油',
    size: 122399400,
  },
  {
    name: '緊緻',
    size: 2249350,
  },
  {
    name: '舒敏',
    size: 234915875,
  }
];
const functionRevenueData_Table = [
  {
    key:'f1',
    name: '亮白',
    size: 309301300,
  },
  {
    key:'f2',
    name: '保濕',
    size: 221287250,
  },
  {
    key:'f3',
    name: '控油',
    size: 122399400,
  },
  {
    key:'f4',
    name: '緊緻',
    size: 2249350,
  },
  {
    key:'f5',
    name: '舒敏',
    size: 234915875,
  },
  {
    key:'f6',
    name: '抗痘',
    size: 842200,
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


const Sunscreen = () => {
  const [activeTabKey1, setActiveTabKey1] = useState('products');
  const [activeTabKey3, setActiveTabKey3] = useState('products');
  const onTab1Change = (key) => {
    setActiveTabKey1(key);
  };
  const onTab3Change = (key) => {
    setActiveTabKey3(key);
  };
  return (
    <Row>
      <div style={{display:"block"}}  className="Essence">
        <h1> 防曬 統計圖表</h1>
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

export default Sunscreen

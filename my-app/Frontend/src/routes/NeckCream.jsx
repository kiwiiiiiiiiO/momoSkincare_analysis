import React,  { useState, useRef, useCallback , PureComponent} from 'react';
import {Card, Col, Row, Divider, ConfigProvider} from 'antd'; 
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import { Chart as ChartJS, ArcElement, Tooltip as TooltipChart, Legend as LegendChart } from 'chart.js';

ChartJS.register(ArcElement, TooltipChart, LegendChart);

const priceData = [
  { name: '$1~$100', product: 0 },
  { name: '$101~$200', product:0  },
  { name: '$201~$300', product:  1},
  { name: '$301~$400', product: 3 },
  { name: '$401~$500', product:  0 },
  { name: '$501~$600', product: 2  },
  { name: '$601~$700',product:  0 },
  { name: '$701~$800', product: 2  },
  { name: '$801~$900', product: 5 },
  { name: '$901~$1000', product: 1  },
  { name: '$1001~$1100', product:0   },
  { name: '$1101~$1200', product: 0  },
  { name: '$1201~$1300', product: 2 },
  { name: '$1301~$1400', product: 0  },
  { name: '$1401~$1500', product: 0 },
  { name: '$1501~$1600', product: 0 },
  { name: '$1601~$1700', product:  0 },
  { name: '$1701~$1800', product:  0 },
  { name: '$1801~$1900', product:   1 },
  { name: '$1901~$2000', product:  0 },
  { name: '$2001~$2100', product:  0 },
  { name: '$2101~$2200', product:   1},
  { name: '$2201~$2300', product:  0  },
  { name: '$2301~$2400', product:  0  },
  { name: '$2401~$2500', product:  0 },
  { name: '$2501~$2600', product:   0},
  { name: '$2601~$2700', product:  0 },
  { name: '$2701~$2800',product:  0  },
  { name: '$2801~$2900', product: 0  },
  { name: '$2901~$3000', product: 0  },
  { name: '$3001~$3100',product:  0  },
  { name: '$3101~$3200', product: 0  },
  { name: '$3201~$300', product:  0   },
  { name: '$3301~$3400', product:  0 },
  { name: '$3401~$3500', product:  0 },
  { name: '$3501~$4000', product: 0 },
  { name: '$4001~',product:    1 },
];


const revenueData = [
   { name: '$1~$100', revenue: 0 },
  { name: '$101~$200',  revenue: 0  },
  { name: '$201~$300', revenue: 19575 },
  { name: '$301~$400',  revenue: 334500},
  { name: '$401~$500', revenue: 0 },
  { name: '$501~$600', revenue: 328200 },
  { name: '$601~$700', revenue:  0 },
  { name: '$701~$800',  revenue: 450900 },
  { name: '$801~$900', revenue: 398625 },
  { name: '$901~$1000',  revenue: 23875 },
  { name: '$1001~$1100',  revenue:  0 },
  { name: '$1101~$1200',revenue:  0 },
  { name: '$1201~$1300',  revenue:  1329600 },
  { name: '$1301~$1400',  revenue: 0 },
  { name: '$1401~$1500',  revenue: 0 },
  { name: '$1501~$1600',   revenue: 0 },
  { name: '$1601~$1700',   revenue:  0 },
  { name: '$1701~$1800',  revenue:  0 },
  { name: '$1801~$1900',   revenue:564000 },
  { name: '$1901~$2000',   revenue: 0 },
  { name: '$2001~$2100',  revenue: 0 },
  { name: '$2101~$2200',   revenue: 654000},
  { name: '$2201~$2300',   revenue: 0 },
  { name: '$2301~$2400',   revenue: 0  },
  { name: '$2401~$2500',   revenue:  0},
  { name: '$2501~$2600',   revenue: 0  },
  { name: '$2601~$2700',  revenue: 0  },
  { name: '$2701~$2800', revenue:   0 },
  { name: '$2801~$2900',  revenue: 0  },
  { name: '$2901~$3000',  revenue: 0 },
  { name: '$3001~$3100',  revenue: 0 },
  { name: '$3101~$3200',  revenue: 0 },
  { name: '$3201~$300', revenue:  0 },
  { name: '$3301~$3400',  revenue: 0 },
  { name: '$3401~$3500', revenue: 0 },
  { name: '$3501~$4000',  revenue: 0  },
  { name: '$4001~',  revenue: 312500 },

];

const salesData = [
  { name: '$1~$100', sales: 0  },
  { name: '$101~$200',   sales: 0  },
  { name: '$201~$300',  sales: 75 },
  { name: '$301~$400',   sales: 900 },
  { name: '$401~$500',   sales: 0  },
  { name: '$501~$600',   sales: 600 },
  { name: '$601~$700',  sales:  0  },
  { name: '$701~$800',   sales: 600  },
  { name: '$801~$900',  sales: 450  },
  { name: '$901~$1000',   sales: 25 },
  { name: '$1001~$1100',   sales: 0  },
  { name: '$1101~$1200',  sales: 0 },
  { name: '$1201~$1300',  sales:  1050},
  { name: '$1301~$1400',  sales: 0  },
  { name: '$1401~$1500', sales:  0  },
  { name: '$1501~$1600',   sales: 0  },
  { name: '$1601~$1700',  sales:  0 },
  { name: '$1701~$1800',  sales: 0  },
  { name: '$1801~$1900',   sales: 300   },
  { name: '$1901~$2000',  sales:   0 },
  { name: '$2001~$2100',  sales:  0  },
  { name: '$2101~$2200',   sales: 300  },
  { name: '$2201~$2300',   sales: 0  },
  { name: '$2301~$2400',   sales: 0  },
  { name: '$2401~$2500',  sales:  0 },
  { name: '$2501~$2600', sales:  0 },
  { name: '$2601~$2700',  sales: 0   },
  { name: '$2701~$2800',  sales: 0  },
  { name: '$2801~$2900',  sales: 0  },
  { name: '$2901~$3000',  sales: 0  },
  { name: '$3001~$3100',  sales: 0  },
  { name: '$3101~$3200',  sales:0 },
  { name: '$3201~$300',  sales:  0 },
  { name: '$3301~$3400',  sales:  0 },
  { name: '$3401~$3500',   sales: 0   },
  { name: '$3501~$4000',   sales: 0  },
  { name: '$4001~',   sales: 25 },
];




const popularityData = [
  { name: '$1~$100', popularity: 0  , reviews:0   },
  { name: '$101~$200',   popularity:  0 , reviews:0  },
  { name: '$201~$300', popularity:  5 , reviews: 1},
  { name: '$301~$400',   popularity: 107 , reviews:  23 },
  { name: '$401~$500',   popularity:  0 , reviews: 0 },
  { name: '$501~$600',   popularity:  19, reviews:4   },
  { name: '$601~$700',  popularity:  0 , reviews:0  },
  { name: '$701~$800',   popularity: 100  , reviews: 21 },
  { name: '$801~$900',   popularity: 46 , reviews:  10 },
  { name: '$901~$1000',  popularity:   0 , reviews: 0  },
  { name: '$1001~$1100',  popularity:  0 , reviews: 0 },
  { name: '$1101~$1200', popularity:  0 , reviews: 0 },
  { name: '$1201~$1300', popularity: 28, reviews:  6 },
  { name: '$1301~$1400', popularity:  0 , reviews: 0   },
  { name: '$1401~$1500',popularity:  0  , reviews:  0   },
  { name: '$1501~$1600', popularity:  0 , reviews:  0  },
  { name: '$1601~$1700', popularity:  0  , reviews: 0  },
  { name: '$1701~$1800', popularity:  0, reviews:  0 },
  { name: '$1801~$1900',  popularity:  80, reviews: 20  },
  { name: '$1901~$2000', popularity:  0 , reviews:  0 },
  { name: '$2001~$2100', popularity:  0 , reviews: 0 },
  { name: '$2101~$2200', popularity: 38, reviews:  8 },
  { name: '$2201~$2300', popularity:   0 , reviews:0  },
  { name: '$2301~$2400', popularity:  0  , reviews: 0 },
  { name: '$2401~$2500', popularity: 0  , reviews: 0 },
  { name: '$2501~$2600', popularity:   0  , reviews: 0 },
  { name: '$2601~$2700',  popularity:  0    , reviews:  0},
  { name: '$2701~$2800', popularity:  0  , reviews: 0  },
  { name: '$2801~$2900', popularity: 0  , reviews: 0 },
  { name: '$2901~$3000',  popularity: 0  , reviews: 0  },
  { name: '$3001~$3100',popularity: 0  , reviews: 0 },
  { name: '$3101~$3200', popularity: 0  , reviews: 0  },
  { name: '$3201~$300',  popularity: 0  , reviews: 0  },
  { name: '$3301~$3400', popularity:   0  , reviews: 0  },
  { name: '$3401~$3500',  popularity:  0 , reviews: 0  },
  { name: '$3501~$4000',  popularity:  0  , reviews: 0  },
  { name: '$4001~', popularity: 0    , reviews: 0  },
];


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


const NeckCream = () => {
  const [activeTabKey1, setActiveTabKey1] = useState('products');

  const onTab1Change = (key) => {
    setActiveTabKey1(key);
  };
  return (
    <Row>
    <div style={{display:"block"}}  className="Essence">
      <h1> 美頸霜 統計圖表</h1>
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
    </ConfigProvider>
    </Row>
  )
}

export default NeckCream

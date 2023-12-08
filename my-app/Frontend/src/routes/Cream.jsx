import React,  { useState } from 'react';
import {Card, Col, Row, Divider} from 'antd'; 

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


// 價格分佈
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

// 營收總額
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
// 銷量
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

// 人氣 ＆ 留言數
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

const contentList = {
  products: 
  <Col span={22}>
    <LineChart
      width={1100}
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
      <Line connectNulls type="monotone" dataKey="product" stroke="#8884d8" activeDot={{ r: 8 }} />
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
      <Line connectNulls type="monotone" dataKey="sales" stroke="#8884d8" activeDot={{ r: 8 }} />
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
      <Line connectNulls type="monotone" dataKey="revenue" stroke="#8884d8" activeDot={{ r: 8 }} />
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
      <Line yAxisId="left" type="monotone" dataKey="popularity" stroke="#8884d8" activeDot={{ r: 8 }} />
      <Line yAxisId="right" type="monotone" dataKey="reviews" stroke="#82ca9d" />
    </LineChart>
  </Col>,
};


const Cream = () => {
  const [activeTabKey1, setActiveTabKey1] = useState('products');
  const onTab1Change = (key) => {
    setActiveTabKey1(key);
  };
  return (
    <Row>
      <div style={{display:"block"}}  className="Essence">
        <h1> 乳霜 統計圖表</h1>
      </div>
      <Divider/>
      <Card title="價格區間" 
        style={{ width:"1150px", marginTop:"15px"}}
        tabList={tabList}
        activeTabKey={activeTabKey1}
        onTabChange={onTab1Change}
        >
      {contentList[activeTabKey1]}
      </Card>
      <Card title="適用於" 
        style={{ width:"1150px", marginTop:"15px"}}
        tabList={tabList}
        activeTabKey={activeTabKey1}
        onTabChange={onTab1Change}
        >
      {contentList[activeTabKey1]}
      </Card>
      <Card title="功效" 
        style={{ width:"1150px", marginTop:"15px"}}
        tabList={tabList}
        activeTabKey={activeTabKey1}
        onTabChange={onTab1Change}
        >
      {contentList[activeTabKey1]}
      </Card>
    </Row>
  )
}

export default Cream

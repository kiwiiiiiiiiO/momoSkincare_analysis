import React,  { useState } from 'react';
import {Card, Col, Divider, Row, ConfigProvider} from 'antd'; 
import { Radio } from 'antd';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
// 精華


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
  tab2: <p>content2</p>,
};



const Essence = () => {
  const [activeTabKey1, setActiveTabKey1] = useState('products');
  const onTab1Change = (key) => {
    setActiveTabKey1(key);
  };
  return (
    
    <Row>
      <div style={{display:"block"}}  className="Essence">
        <h1> 精華液 統計圖表</h1>
      </div>
      <Divider/>

      <Card title="商品數-價格區間" 
        style={{
        width:"1150px"
        }}
        tabList={tabList}
        activeTabKey={activeTabKey1}
        onTabChange={onTab1Change}
        >
      {contentList[activeTabKey1]}
      </Card>
      <Card title="銷量-價格區間"style={{width:"1150px"}}>
      </Card>
      <Card title="營收總額-價格區間"style={{width:"1150px"}}>
      </Card>
      <Card title="人氣＆留言數-價格區間"style={{width:"1150px"}}>
      </Card>
    </Row>
  )
}

export default Essence

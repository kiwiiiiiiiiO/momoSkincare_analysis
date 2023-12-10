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
  { name: '$1~$100', product:  0 },
  { name: '$101~$200', product:  6 },
  { name: '$201~$300', product:   5 },
  { name: '$301~$400', product: 6  },
  { name: '$401~$500', product: 6 },
  { name: '$501~$600', product: 14 },
  { name: '$601~$700',product: 16 },
  { name: '$701~$800', product: 10  },
  { name: '$801~$900', product:  11 },
  { name: '$901~$1000', product:  9 },
  { name: '$1001~$1100', product:  12  },
  { name: '$1101~$1200', product:   13 },
  { name: '$1201~$1300', product: 25 },
  { name: '$1301~$1400', product: 14  },
  { name: '$1401~$1500', product: 8 },
  { name: '$1501~$1600', product: 11 },
  { name: '$1601~$1700', product: 1 },
  { name: '$1701~$1800', product: 4 },
  { name: '$1801~$1900', product: 7  },
  { name: '$1901~$2000', product: 1 },
  { name: '$2001~$2100', product:  0 },
  { name: '$2101~$2200', product:   0  },
  { name: '$2201~$2300', product:  3  },
  { name: '$2301~$2400', product:  2},
  { name: '$2401~$2500', product:  1 },
  { name: '$2501~$2600', product:  2 },
  { name: '$2601~$2700', product:  0 },
  { name: '$2701~$2800',product:   1 },
  { name: '$2801~$2900', product:  0  },
  { name: '$2901~$3000', product:  2},
  { name: '$3001~$3100',product:  0  },
  { name: '$3101~$3200', product:  0 },
  { name: '$3201~$300', product:   0 },
  { name: '$3301~$3400', product:  1 },
  { name: '$3401~$3500', product:  0 },
  { name: '$3501~$4000', product:  0 },
  { name: '$4001~',product:   1 },
];


const revenueData = [
   { name: '$1~$100', revenue: 0 },
  { name: '$101~$200',  revenue: 1649600,  },
  { name: '$201~$300', revenue: 194050 },
  { name: '$301~$400',  revenue: 58025 },
  { name: '$401~$500', revenue: 10782225 },
  { name: '$501~$600', revenue: 1135375},
  { name: '$601~$700', revenue: 21765525  },
  { name: '$701~$800',  revenue: 27196725 },
  { name: '$801~$900', revenue: 1373200 },
  { name: '$901~$1000',  revenue:  800250 },
  { name: '$1001~$1100',  revenue: 50443000 },
  { name: '$1101~$1200',revenue: 16340800  },
  { name: '$1201~$1300',  revenue: 101357200 },
  { name: '$1301~$1400',  revenue:  34700675},
  { name: '$1401~$1500',  revenue: 72841700},
  { name: '$1501~$1600',   revenue:  3676975},
  { name: '$1601~$1700',   revenue: 42450  },
  { name: '$1701~$1800',  revenue:   2848500 },
  { name: '$1801~$1900',   revenue: 125683625 },
  { name: '$1901~$2000',   revenue: 49500},
  { name: '$2001~$2100',  revenue: 0 },
  { name: '$2101~$2200',   revenue: 0 },
  { name: '$2201~$2300',   revenue: 169975 },
  { name: '$2301~$2400',   revenue: 29554250 },
  { name: '$2401~$2500',   revenue: 182400 },
  { name: '$2501~$2600',   revenue: 129900 },
  { name: '$2601~$2700',  revenue: 0 },
  { name: '$2701~$2800', revenue: 67550 },
  { name: '$2801~$2900',  revenue:  0 },
  { name: '$2901~$3000',  revenue: 149000 },
  { name: '$3001~$3100',  revenue: 0 },
  { name: '$3101~$3200',  revenue: 0 },
  { name: '$3201~$300', revenue: 0  },
  { name: '$3301~$3400',  revenue: 85000 },
  { name: '$3401~$3500', revenue: 0 },
  { name: '$3501~$4000',  revenue: 0  },
  { name: '$4001~',  revenue: 102375000},

];

const salesData = [
  { name: '$1~$100', sales:  0 },
  { name: '$101~$200',   sales: 13400  },
  { name: '$201~$300',  sales: 675  },
  { name: '$301~$400',   sales: 150 },
  { name: '$401~$500',   sales:23000  },
  { name: '$501~$600',   sales: 2000},
  { name: '$601~$700',  sales: 32025 },
  { name: '$701~$800',   sales: 36700 },
  { name: '$801~$900',  sales: 1600 },
  { name: '$901~$1000',   sales: 825  },
  { name: '$1001~$1100',   sales:46575  },
  { name: '$1101~$1200',  sales: 13675 },
  { name: '$1201~$1300',  sales: 78100 },
  { name: '$1301~$1400',  sales: 25200 },
  { name: '$1401~$1500', sales: 49225  },
  { name: '$1501~$1600',   sales: 2350  },
  { name: '$1601~$1700',  sales: 25  },
  { name: '$1701~$1800',  sales:  1600  },
  { name: '$1801~$1900',   sales: 66550  },
  { name: '$1901~$2000',  sales:  25 },
  { name: '$2001~$2100',  sales:  0  },
  { name: '$2101~$2200',   sales:  0  },
  { name: '$2201~$2300',   sales: 75 },
  { name: '$2301~$2400',   sales: 12575  },
  { name: '$2401~$2500',  sales:  75 },
  { name: '$2501~$2600', sales: 50  },
  { name: '$2601~$2700',  sales:  0 },
  { name: '$2701~$2800',  sales: 25  },
  { name: '$2801~$2900',  sales:  0 },
  { name: '$2901~$3000',  sales: 50  },
  { name: '$3001~$3100',  sales: 0  },
  { name: '$3101~$3200',  sales: 0  },
  { name: '$3201~$300',  sales: 0 },
  { name: '$3301~$3400',  sales: 25 },
  { name: '$3401~$3500',   sales: 0  },
  { name: '$3501~$4000',   sales:  0 },
  { name: '$4001~',   sales: 22500 },
];




const popularityData = [
  { name: '$1~$100', popularity:  0 , reviews: 0    },
  { name: '$101~$200',   popularity:  422 , reviews: 89 },
  { name: '$201~$300', popularity:   34 , reviews:  7 },
  { name: '$301~$400',   popularity:  10  , reviews: 2 },
  { name: '$401~$500',   popularity:  318 , reviews: 66  },
  { name: '$501~$600',   popularity:  315  , reviews: 67  },
  { name: '$601~$700',  popularity:  296, reviews: 65  },
  { name: '$701~$800',   popularity: 887, reviews: 191 },
  { name: '$801~$900',   popularity: 174  , reviews:  36 },
  { name: '$901~$1000',  popularity:   109 , reviews: 23  },
  { name: '$1001~$1100',  popularity:  649 , reviews: 136 },
  { name: '$1101~$1200', popularity: 203 , reviews:  45 },
  { name: '$1201~$1300', popularity: 709 , reviews: 146 },
  { name: '$1301~$1400', popularity:  545 , reviews: 117  },
  { name: '$1401~$1500',popularity: 1556  , reviews:  333 },
  { name: '$1501~$1600', popularity: 954  , reviews:  217  },
  { name: '$1601~$1700', popularity: 0  , reviews: 0 },
  { name: '$1701~$1800', popularity:  29  , reviews: 6 },
  { name: '$1801~$1900',  popularity:  2983, reviews: 628 },
  { name: '$1901~$2000', popularity:  10 , reviews: 2 },
  { name: '$2001~$2100', popularity:  0  , reviews:  0  },
  { name: '$2101~$2200', popularity:   0, reviews:  0 },
  { name: '$2201~$2300', popularity: 37 , reviews: 8  },
  { name: '$2301~$2400', popularity:  583, reviews: 119   },
  { name: '$2401~$2500', popularity:  18, reviews:  4 },
  { name: '$2501~$2600', popularity:    0, reviews: 0  },
  { name: '$2601~$2700',  popularity:  0 , reviews: 0 },
  { name: '$2701~$2800', popularity:   18, reviews: 4  },
  { name: '$2801~$2900', popularity:    0, reviews: 0 },
  { name: '$2901~$3000',  popularity:  0, reviews:  0 },
  { name: '$3001~$3100',popularity:    0, reviews: 0  },
  { name: '$3101~$3200', popularity:    0 , reviews: 0  },
  { name: '$3201~$300',  popularity:    0, reviews:  0 },
  { name: '$3301~$3400', popularity:   93, reviews: 19 },
  { name: '$3401~$3500',  popularity:  0 , reviews: 0  },
  { name: '$3501~$4000',  popularity:   0, reviews: 0 },
  { name: '$4001~', popularity:   90 , reviews:  18 },
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

/// 功效
// 功效 商品數量
export const functionProductData = {
  labels: ['亮白', '保濕', '抗痘','控油','緊緻','舒敏'],
  datasets: [
    {
      label: '數量',
      data: [155, 137, 13, 61, 34, 32],
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
      data: [290950, 388100, 23075 ,126125 , 38025 , 25300],
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
    人氣: 8544,
    留言數: 1839,
  },
  {
    name: '保濕',
    人氣: 9139,
    留言數: 1951,
  },
  {
    name: '抗痘',
    人氣: 137,
    留言數: 29,
  },
  {
    name: '控油',
    人氣: 806,
    留言數: 172,
  },
  {
    name: '緊緻',
    人氣: 1108,
    留言數: 243,
  },
  {
    name: '舒敏',
    人氣: 385,
    留言數: 82,
  }
];

// 適用於 營收
const functionRevenueData = [
  {
    name: '亮白',
    size: 392492350,
  },
  {
    name: '保濕',
    size: 494631150,
  },
  {
    name: '抗痘',
    size: 16807275,
  },
  {
    name: '控油',
    size: 241044600,
  },
  {
    name: '緊緻',
    size: 30199950,
  },
  {
    name: '舒敏',
    size: 19771325,
  }
];
const functionRevenueData_Table = [
  {
    key:'f1',
    name: '亮白',
    size: 392492350,
  },
  {
    key:'f2',
    name: '保濕',
    size: 494631150,
  },
  {
    key:'f3',
    name: '抗痘',
    size: 16807275,
  },
  {
    key:'f4',
    name: '控油',
    size: 241044600,
  },
  {
    key:'f5',
    name: '緊緻',
    size: 30199950,
  },
  {
    key:'f6',
    name: '舒敏',
    size: 19771325,
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


const ToningCream = () => {
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
      <h1> 素顏霜 統計圖表</h1>
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

export default ToningCream

import React, { PureComponent } from 'react';
import Axios from "axios";
import {useEffect, useState} from 'react';
import {Row, Col, Card} from 'antd';
import { Treemap, ResponsiveContainer } from 'recharts';
import { PieChart, Pie,Cell,  Legend, Tooltip} from 'recharts';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid } from 'recharts';
import axios from 'axios';



const salesData = [
  {
    name: '乳液',
    size: 457,
  },
  {
    name: 'controls',
    size: 1000,
  },
  {
    name: 'data',
    size: 1000,
  },
  {
    name: 'events',
    size: 1000,
  },
  {
    name: 'legend',
    size: 10000,
  },
  {
    name: 'operator',
    size: 10000,
  },
];

const productData = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
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

const COLORS = ['#8889DD', '#9597E4', '#8DC77B', '#A5D297', '#E2CF45', '#F8C12D'];
const COLORSS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

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
            {size}
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
const popularityData = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
const Skincare = () => {
  const [db_salesData,db_setsSale] = useState([]);
  const [db_productsData,db_setProducts] = useState([]);
  const [db_revenueData,db_setRevenue] = useState([]);
  const [db_popularityData,db_setPopularity] = useState([]);
  const [db_reviewsData,db_setReviews] = useState([]);

  const fetchData = () =>{
    const db_salesDataAPI = "http://localhost:8081/skincare/sales";
    const db_productsDataAPI = "http://localhost:8081/skincare/products";
    const db_revenueDataAPI = "http://localhost:8081/skincare/revenue";
    const db_popularityDataAPI = "http://localhost:8081/skincare/popularity";
    const db_reviewsDataAPI = "http://localhost:8081/skincare/reviews";

    const get_db_sales = axios.get(db_salesDataAPI)
    const get_db_productsDataAPI = axios.get(db_productsDataAPI)
    const get_db_revenueDataAPI = axios.get(db_revenueDataAPI)
    const get_db_popularityData = axios.get(db_popularityDataAPI)
    const get_db_reviewsData = axios.get(db_reviewsDataAPI)  
    axios.all([ get_db_sales, get_db_productsDataAPI,  get_db_revenueDataAPI,  get_db_popularityData, get_db_reviewsData ]).then(
      axios.spread((...allData)=>{
        const db_salesData = allData[0].data
        const db_productsData = allData[1].data
        const db_revenueData = allData[2].data
        const db_popularityData = allData[3].data
        const db_reviewsData = allData[4].data
        db_setsSale(db_salesData)
        console.log(db_salesData)
        console.log( db_productsData)
        console.log(db_revenueData)
        console.log(db_popularityData)
        console.log(db_reviewsData)

      })
    )
  } 
  useEffect(()=>{
    fetchData()
  },[])  
  return (
    <Row className='skincare'>
        <Col>
         {/* 銷量   treemap*/}
          <Card title="銷量" className='skincareSales'>
            <Treemap
              width={1200}
              height={500}
              data={db_salesData}
              dataKey="size"
              stroke="#fff"
              fill="#8884d8"
              content={<CustomizedContent colors={COLORS} />}/>
            
          </Card>
            {/* 商品數   circle*/}
          <Card  title="商品數" className='skincareProduct'>
            <PieChart width={400} height={400}>
              <Pie
                data={productData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {productData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORSS[index % COLORSS.length]} />
                ))}
              </Pie>
            </PieChart>
          </Card>
          {/* 營收總額  ring  排行榜 */}
          <Card title="營收總額" className='skincareRevenue'>

          </Card>
          {/* 人氣 人氣、留言數長條圖  星星排行榜*/}
          <Card title="人氣" className='skincarePopularity'>
              <BarChart
              width={500}
              height={300}
              data={popularityData}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
              <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
              <Tooltip />
              <Legend />
              <Bar yAxisId="left" dataKey="pv" fill="#8884d8" />
              <Bar yAxisId="right" dataKey="uv" fill="#82ca9d" />
            </BarChart>
          </Card>

        </Col>

    </Row>
  )
}


export default Skincare

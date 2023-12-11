import React, { PureComponent } from 'react';
import Axios from "axios";
import {useEffect, useState} from 'react';
import {Row, Col, Card, ConfigProvider, Table, Tabs} from 'antd';
import { Treemap, ResponsiveContainer } from 'recharts';
import { PieChart, Pie,Cell,  Legend, Tooltip} from 'recharts';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid } from 'recharts';
import axios from 'axios';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip as TooltipChart, Legend as LegendChart } from 'chart.js';
ChartJS.register(ArcElement, TooltipChart, LegendChart);


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

export const ProductsDoughnutData = {
  labels: ['乳液', '乳霜', '凝膠','化妝水', '眼霜', '精華液', '素顏霜', '美頸霜','護唇膏', '防曬', '面膜'],
  datasets: [
    {
      label: '數量',
      data: [633 , 450 ,275 ,746 ,448 , 584 , 192 , 19  , 294, 327 , 467],
      backgroundColor: [
        '#e2e2df','#d2d2cf', '#e2cfc4', '#f7d9c4', '#faedcb', '#c9e4de', '#c6def1', '#dbcdf0', '#dbcdf0', '#f2c6de', '#f9c6c9'
      ],
      borderColor: [
        '#4e484a',
      ],
      borderWidth: 1,
    },
  ],
};

export const SalesDoughnutData = {
  labels: ['乳液', '乳霜', '凝膠','化妝水', '眼霜', '精華液', '素顏霜', '美頸霜','護唇膏', '防曬', '面膜'],
  datasets: [
    {
      label: '數量',
      data: [488250 , 847875 ,201575, 604725 ,367750, 1385425 , 429075 ,4325 , 281925, 650800, 721325],
      backgroundColor: [
        '#e2e2df','#d2d2cf', '#e2cfc4', '#f7d9c4', '#faedcb', '#c9e4de', '#c6def1', '#dbcdf0', '#dbcdf0', '#f2c6de', '#f9c6c9'
      ],
      borderColor: [
        '#4e484a',
      ],
      borderWidth: 1,
    },
  ],
};

export const RevenueDoughnutData = {
  labels: ['乳液', '乳霜', '凝膠','化妝水', '眼霜', '精華液', '素顏霜', '美頸霜','護唇膏', '防曬', '面膜'],
  datasets: [
    {
      label: '數量',
      data: [795692275 , 1201579675 , 112072625, 539348675 , 530613350 ,2192220800, 605652475 , 4415775 , 87651900 , 514353775 , 257950750],
      backgroundColor: [
        '#e2e2df','#d2d2cf', '#e2cfc4', '#f7d9c4', '#faedcb', '#c9e4de', '#c6def1', '#dbcdf0', '#dbcdf0', '#f2c6de', '#f9c6c9'
      ],
      borderColor: [
        '#4e484a',
      ],
      borderWidth: 1,
    },
  ],
};

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

const TreemapColor = ['#e2e2df', '#d2d2cf', '#e2cfc4', '#f7d9c4', '#faedcb', '#c9e4de', '#c6def1', '#dbcdf0', '#dbcdf0', '#f2c6de', '#f9c6c9'];

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
              fill: depth < 2 ? colors[index] : '#ffffff00',
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
    name: '乳液',
    人氣: 24073,
    留言數: 4986,
   
  }, {
    name: '乳霜',
    人氣: 24502,
    留言數: 5160,
   
  }, {
    name: '凝膠',
    人氣: 9907,
    留言數: 2067,
   
  }, {
    name: '化妝水',
    人氣: 32557,
    留言數: 6750,
   
  }, {
    name: '眼霜',
    人氣: 24403,
    留言數: 5135,
   
  }, {
    name: '精華液',
    人氣: 47157,
    留言數: 9779,
  },
  {
    name: '素顏霜',
    人氣: 10953,
    留言數: 2348,
  },{
    name: '美頸霜',
    人氣: 423,
    留言數: 93,
  },{
    name: '護唇膏',
    人氣: 15925,
    留言數: 3317,
  },{
    name: '防曬',
    人氣: 24646,
    留言數: 5113,
  },{
    name: '面膜',
    人氣: 29591,
    留言數: 6205,
  },
 
     
];

const productsColumns = [
  {
    title: '類別',
    dataIndex: 'name',
  },
  {
    title: '商品數',
    dataIndex: 'size',
    sorter: {compare:(a, b) => parseInt(BigInt((BigInt(a.size) / BigInt(10000) ) - (BigInt(b.size) / BigInt(10000))).toString())},
  }
];

const salesColumns = [
  {
    title: '類別',
    dataIndex: 'name',
  },
  {
    title: '銷售量',
    dataIndex: 'size',
    sorter: {compare:(a, b) => parseInt(BigInt((BigInt(a.size) / BigInt(10000) ) - (BigInt(b.size) / BigInt(10000))).toString())},
  }
];

const revenueColumns = [
  {
    title: '類別',
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


const TabOnChange = (key) => {
  console.log(key);
};
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
        db_setProducts(db_productsData)
        // console.log( db_productsData)
        db_setRevenue(db_revenueData)
        console.log(db_revenueData)
        
        // console.log(db_popularityData)
        // console.log(db_reviewsData)
      })
    )
  } 
  useEffect(()=>{
    fetchData()
  },[])  
  return (
    <Row className='skincare'>
      <ConfigProvider
        theme={{
            token:{
              colorPrimary: '#d31874',
            },
        }} >
        <Col>
           {/* 商品數   circle*/}
           <Card  title="商品數" className='skincareProduct' style={{marginTop:'15px'}} headStyle={{ fontSize:"20px",color:"white",backgroundColor:"#d31874"}}>
           <Tabs
              defaultActiveKey="1"
              onChange={onChange}
              items={[
                {
                  label: `甜甜圈圖`,
                  key: '1',
                  children:  
                  <div style={{ display: "flex",  justifyContent: "center", height:"400px"}}>
                    <Doughnut data={ProductsDoughnutData} plugins={[textCenter]} />;
                  </div>,
                },
                {
                  label: `樹圖`,
                  key: '2',
                  children: 
                  <Treemap
                    width={1100}
                    height={500}
                    data={db_productsData}
                    dataKey="size"
                    stroke="#fff"
                    fill="#8884d8"
                    content={<CustomizedContent colors={TreemapColor} />}
                  />,
                },
                {
                  label: `表格`,
                  key: '3',
                  children:   
                  <div style={{ display: "flex", justifyContent: "center"}}>
                    <Table style={{marginTop:'30px', width:'900px'}} pagination={false} agination columns={productsColumns} dataSource={db_productsData} onChange={onChange} />
                  </div>,
                },
              ]}
            />
          </Card>
         {/* 銷量   treemap*/}
          <Card title="銷量" 
            className='skincareSales'
            style={{marginTop:'15px'}} headStyle={{ width:"1150px", fontSize:"20px",color:"white",backgroundColor:"#d31874"}} >
            <Tabs
              defaultActiveKey="1"
              onChange={onChange}
              items={[
                {
                  label: `甜甜圈圖`,
                  key: '1',
                  children: 
                  <div style={{ display: "flex",  justifyContent: "center", height:"400px"}}>
                    <Doughnut data={SalesDoughnutData} plugins={[textCenter]} />;
                  </div>,
                },
                {
                  label: `樹圖`,
                  key: '2',
                  children:  
                  <Treemap
                    width={1100}
                    height={500}
                    data={db_salesData}
                    dataKey="size"
                    stroke="#fff"
                    fill="#8884d8"
                    content={<CustomizedContent colors={TreemapColor} />}
                  />,
                },
                {
                  label: `表格`,
                  key: '3',
                  children:  
                  <div style={{ display: "flex", justifyContent: "center"}}>
                    <Table style={{marginTop:'30px', width:'900px'}} pagination={false} agination columns={salesColumns} dataSource={db_salesData} onChange={onChange} />
                  </div>,
                },
              ]}
            />
          </Card>

          {/* 營收總額  ring  排行榜 */}
          <Card title="營收總額" className='skincareRevenue' style={{marginTop:'15px'}} headStyle={{ fontSize:"20px",color:"white",backgroundColor:"#d31874"}}>
            <Tabs
              defaultActiveKey="1"
              onChange={onChange}
              items={[
                {
                  label: `甜甜圈圖`,
                  key: '1',
                  children:  
                  <div style={{ display: "flex",  justifyContent: "center", height:"400px"}}>
                    <Doughnut data={RevenueDoughnutData} plugins={[textCenter]} />;
                  </div>,
                },
                {
                  label: `樹圖`,
                  key: '2',
                  children: 
                  <Treemap
                    width={1100}
                    height={500}
                    data={db_revenueData}
                    dataKey="size"
                    stroke="#fff"
                    fill="#8884d8"
                    content={<CustomizedContent colors={TreemapColor} />}
                  />,
                },
                {
                  label: `表格`,
                  key: '3',
                  children:   
                  <div style={{ display: "flex", justifyContent: "center"}}>
                    <Table style={{marginTop:'30px', width:'900px'}} pagination={false} agination columns={revenueColumns} dataSource={db_revenueData} onChange={onChange} />
                  </div>,
                },
              ]}
            />
          </Card>
          {/* 人氣 人氣、留言數長條圖  星星排行榜*/}
          <Card title="人氣" className='skincarePopularity' style={{marginTop:'15px'}} headStyle={{ fontSize:"20px",color:"white",backgroundColor:"#d31874"}}>
            <div style={{ display: "flex",  justifyContent: "center"}}>
              <BarChart
                width={800}
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
                <YAxis yAxisId="left" orientation="left" stroke="#d31874" />
                <YAxis yAxisId="right" orientation="right" stroke="#4e484a" />
                <Tooltip />
                <Legend />
                <Bar yAxisId="left" dataKey="人氣" fill="#d31874" />
                <Bar yAxisId="right" dataKey="留言數" fill="#4e484a" />
              </BarChart>
            </div>
          </Card>

        </Col>
       </ConfigProvider>
    </Row>
  )
}

export default Skincare

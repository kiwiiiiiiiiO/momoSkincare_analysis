import React from 'react';
import { Card, Col, Row , Space, ConfigProvider} from 'antd';
import { Typography, Button , Divider, Image, Table} from "antd";
import background from "../public/introductionCard.jpg";
import MomoIcon from "../public/momoIcon_2.png";

import {
  GithubOutlined,
  MailFilled
} from '@ant-design/icons';
const { Text, Title, Link } = Typography;
const { Column, ColumnGroup } = Table;
const RowStyle={

}
const ColStyle={
  marginBottom:'10px'
}

const f_data = [
  {
    key:'1',
    f_1:'商品數',
    f_2:'甜甜圈圖、樹圖、表格'
  },
  {
    key:'2',
    f_1:'銷量',
    f_2:'甜甜圈圖、樹圖、表格'
  },
  {
    key:'3',
    f_1:'營收總額',
    f_2:'甜甜圈圖、樹圖、表格'
  },
  {
    key:'4',
    f_1:'人氣',
    f_2:'長條圖'
  },
 
]

const p_data = [
  {
    key:'1',

    p_2:'價格區間',
    p_3:'商品數、銷量、營收總額、人氣＆留言數',
    p_4:'曲線圖'
  },
  {
    key:'2',

    p_2:'適用於',
    p_3:'商品數、銷量',
    p_4:'圓餅圖'
  },
  {
    key:'2',

    p_2:'',
    p_3:'營收總額',
    p_4:'樹圖、表格'
  },
  {
    key:'2',

    p_2:'',
    p_3:'人氣＆留言數',
    p_4:'長條圖'
  },
  {
    key:'3',

    p_2:'功效',
    p_3:'商品數、銷量',
    p_4:'圓餅圖'
  },
  {
    key:'3',

    p_2:'',
    p_3:'營收總額',
    p_4:'樹圖、表格'
  },
  {
    key:'3',

    p_2:'',
    p_3:'人氣＆留言數',
    p_4:'長條圖'
  },
  
]
const Introduction = () => {
  return (
    <Row justify="center" style={RowStyle}>
      <ConfigProvider 
      theme={{
        components: {
          Card: {
            headerFontSize: 20,
            headerBg:'rgba(211, 24, 116,0.1)'
          },
        },
        token: {
          colorTextHeading:"#4e484a",
          colorFillAlter:'#d31874'
        },
      }}>
      <Space style={{marginLeft:"40px"}} direction='vertical'>
        <Col style={ColStyle} span={24}>
          <Card style={{backgroundImage:`url(${background})`, backgroundSize:'cover', height:'500px'}} hoverable bordered={false}>
            <Row justify="center" align="middle" style={{height:'450px'}}>
              <Col style={{display:'flex',justifyContent:'center', alignItems:'center', textAlign:'center',height:'450px'}} span={14} >
                <Space direction='vertical'>
                  <Title style={{color:'white'}}level={2}>以Momo購物網站平台資料出發</Title>
                  <Title style={{color:'white'}} level={1}>了解台灣臉部保養品趨勢</Title>
                </Space>
              </Col>
              <Col style={{display:'flex',justifyContent:'center', alignItems:'center', textAlign:'center', height:'450px'}} span={8} >   
                <ConfigProvider theme={{
                    token: {
                      colorPrimary:'#d31874',
                      fontSize:'20px',
                      colorPrimaryHover:'white'
                    },
                  }}>
                  <Button  type="primary" shape='circle' href={"/skincare"} style={{ textAlign:'center', width:'150px',height:'150px',backgroundColor:'rgba(211, 24, 116,0.1)',border:'2px solid #d31874'}}> 
                    <text style={{margin: '0 auto', lineHeight: '150px', fontSize:'20px',fontWeight:'bold',color:'#d31874'}}>查看市場概況</text> 
                  </Button>
                </ConfigProvider>       
              </Col>
            </Row>
          </Card>
          <Divider></Divider>
        </Col>
        <Space style={{marginTop:"20px", marginBottom:'10px'}} direction='horizontal'>
          <Col  span={12}>
            <Card hoverable style={{width:'600px', height:'220px', marginRight:"30px"}} title="動機與目的" bordered={false}>
              <text>台灣的保養品市場發展蓬勃，且越來越多人選擇在電商平台上消費，本專題希望能提出一市場分析網站，讓有意於上架商品至電商平台之商家，以及市場分析專家，利用此系統得到保養品市場的統計圖表及趨勢。專題將使用台灣電商平台龍頭──Momo購物網站之資料為例。</text>
            </Card>
          </Col>
          <Col span={12}>
            <Card  hoverable style={{width:'600px',  height:'220px'}} title="系統簡介" bordered={false}>
            <Text>系統爬取Momo購物網之保養品產品資料後，使用Python進行統計分析，其分析內容為：</Text>
            <Text style={{display:'block'}}>
              1. 臉部保養市場：商品數、銷量、營收總額、人氣與留言數統計。
            </Text>
            <Text style={{display:'block'}}>
            2. 各類保養品市場：各價格區間之商品數、銷量、營收總額、人氣與留言數統計; 各標籤(適用於、功效)之商品數、銷量、營收總額、人氣與留言數統計。
            </Text>
            <Text>
            ，後將統計圖表顯示於一React網站。
            </Text>
            </Card>
          </Col>
        </Space>
        <Col style={ColStyle} span={24}>
          <Divider></Divider>
          <Card   hoverable title="資料來源" bordered={false}>
            <Row justify="center" align="middle">
              <Col span={5}>
                <Image preview={false} style={{width:'200px'}}src={MomoIcon}></Image>
              </Col>
              <Col span={6}>  
              <Text style={{}}> Momo 購物網站為台灣具有指標性之電商龍頭之一，故本系統蒐集該平台之資料。 </Text>
              <ConfigProvider 
              theme={{
                components: {
                  Button: {
                    textHoverBg:'rgba(211, 24, 116,0.1)'
                  },
                },
                    token: {
                      colorPrimary:'#d31874',
                    },
                  }}>
              <Button href='https://www.momoshop.com.tw/category/DgrpCategory.jsp?d_code=1111700001&p_orderType=6&showType=chessboardType' style={{display:'block', color:'#d31874'}} type='text'> 
                點擊進入Momo臉部保養品頁面 
              </Button>
              </ConfigProvider>
              
              </Col>
            </Row>
          </Card>
        </Col>
       
        <Col style={ColStyle} span={24}>
        <Divider></Divider>
          <Card hoverable title="統計圖表" bordered={false}>
            <Row  justify="center" align="middle" >
            <ConfigProvider   
              theme={{
              token: {
                colorFillAlter:'rgba(211, 24, 116,0.5)'
              },}}>
              <Col style={{display:'flex',justifyContent:'center'}}span={12}>
                <Space direction='vertical'>
                <Table  pagination={false} dataSource={f_data} style={{margin:'10px',width:'500px'}}> 
                  <ColumnGroup title="臉部保養品市場">
                    <Column title="統計" dataIndex="f_1" key="f_1" />
                    <Column title="圖表種類" dataIndex="f_2" key="f_2" />
                  </ColumnGroup>
                </Table>
                <div  style={{width:'500px', height:'150px'}}>
                  <text >
                   ※ 保養品類別包含 化妝水、精華液、凝膠、乳液、乳霜、面膜、眼霜、護唇膏、防曬
                    、素顏霜、美頸霜(共11類)
                  </text>
                </div>
                </Space>
              </Col>
              <Col span={12}>
                <Table style={{width:'600px'}} pagination={false} dataSource={p_data}>
                  <ColumnGroup title="各類保養品市場">
                    <Column title="根據" dataIndex="p_2" key="p_2" />
                    <Column title="統計" dataIndex="p_3" key="p_3" />
                    <Column title="圖表種類" dataIndex="p_4" key="p_4" />
                  </ColumnGroup>
                </Table>
              </Col>
            </ConfigProvider> 
          </Row>
          </Card>
        </Col>
        <Col style={ColStyle} span={24}>
        <Divider></Divider>
          <Card  hoverable title="聯絡資訊" bordered={false}>
          <Row justify="center" align="middle">
            <Col span={8}>
              <Title level={4}> 指導教授：孫培真老師  </Title>
              <Title level={4}> 專題學生：歐杰妮  </Title>
            </Col>
            <Col span={8}>
            <Space direction='vertical'>
                <Space direction='vertical'>
                  <Link href='https://github.com/kiwiiiiiiiiO/momoSkincare_analysis'>
                    <Title level={4}> <GithubOutlined style={{fontSize:'25px', marginRight:'5px'}} />   程式碼連結 </Title>
                  </Link>
                </Space>
                <Title level={4}> <MailFilled style={{fontSize:'25px', marginRight:'5px'}} /> jennifer97279@gmail.com </Title>
            </Space>
            </Col>
          </Row>
          </Card>
        </Col>
      </Space>
      </ConfigProvider>
    </Row>
  )
}

export default Introduction

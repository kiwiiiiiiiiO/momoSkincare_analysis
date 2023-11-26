import pymysql

price_row = [
    '3000',
    '3001',
    '3002',
    '3003',
    '3004',
    '3005',
    '3006',
    '3007',
    '3008',
    '3009',
    '3010',
    '3011',
    '3012',
    '3013',
    '3014',
    '3015',
    '3016',
    '3017',
    '3018',
    '3019',
    '3020',
    '3021',
    '3022',
    '3023',
    '3024',
    '3025',
    '3026',
    '3027',
    '3028',
    '3029',
    '3030',
    '3031',
    '3032',
    '3033',
    '3034',
    '3035',
    '3036',
]

# 產品之價格區間 數量
# count 
rawsql_1 = [
    {
        "class":"乳霜",
        "type":"價格分佈",
        "select_sql": 'SELECT Count(*) FROM MomoSkinCare.products Where class="乳霜" and (price Between (SELECT price_minimum FROM MomoSkinCare.product_price where price_id=%s) and (SELECT price_maximum FROM MomoSkinCare.product_price where price_id=%s ));',
        "create_sql":  'INSERT INTO `MomoSkinCare`.`product_price_analysis` (`class`, `type`) VALUES ("乳霜","價格分佈")'
    },
    {
        "class":"精華液",
        "type":"價格分佈",
        "select_sql": 'SELECT Count(*) FROM MomoSkinCare.products Where class="精華液" and (price Between (SELECT price_minimum FROM MomoSkinCare.product_price where price_id=%s) and (SELECT price_maximum FROM MomoSkinCare.product_price where price_id=%s ));',
        "create_sql":  'INSERT INTO `MomoSkinCare`.`product_price_analysis` (`class`, `type`) VALUES ("精華液","價格分佈")'
    },{
        "class":"眼霜",
        "type":"價格分佈",
        "select_sql": 'SELECT Count(*) FROM MomoSkinCare.products Where class="眼霜" and (price Between (SELECT price_minimum FROM MomoSkinCare.product_price where price_id=%s) and (SELECT price_maximum FROM MomoSkinCare.product_price where price_id=%s ));',
        "create_sql":  'INSERT INTO `MomoSkinCare`.`product_price_analysis` (`class`, `type`) VALUES ("眼霜","價格分佈")'
    }, {
        "class":"面膜",
        "type":"價格分佈",
        "select_sql": 'SELECT Count(*) FROM MomoSkinCare.products Where class="面膜" and (price Between (SELECT price_minimum FROM MomoSkinCare.product_price where price_id=%s) and (SELECT price_maximum FROM MomoSkinCare.product_price where price_id=%s ));',
        "create_sql":  'INSERT INTO `MomoSkinCare`.`product_price_analysis` (`class`, `type`) VALUES ("面膜","價格分佈")'
    }, {
        "class":"凝膠",
        "type":"價格分佈",
        "select_sql": 'SELECT Count(*) FROM MomoSkinCare.products Where class="凝膠" and (price Between (SELECT price_minimum FROM MomoSkinCare.product_price where price_id=%s) and (SELECT price_maximum FROM MomoSkinCare.product_price where price_id=%s ));',
        "create_sql":  'INSERT INTO `MomoSkinCare`.`product_price_analysis` (`class`, `type`) VALUES ("凝膠","價格分佈")'
    }, {
        "class":"護唇膏",
        "type":"價格分佈",
        "select_sql": 'SELECT Count(*) FROM MomoSkinCare.products Where class="護唇膏" and (price Between (SELECT price_minimum FROM MomoSkinCare.product_price where price_id=%s) and (SELECT price_maximum FROM MomoSkinCare.product_price where price_id=%s ));',
        "create_sql":  'INSERT INTO `MomoSkinCare`.`product_price_analysis` (`class`, `type`) VALUES ("護唇膏","價格分佈")'
    }, {
        "class":"乳液",
        "type":"價格分佈",
        "select_sql": 'SELECT Count(*) FROM MomoSkinCare.products Where class="乳液" and (price Between (SELECT price_minimum FROM MomoSkinCare.product_price where price_id=%s) and (SELECT price_maximum FROM MomoSkinCare.product_price where price_id=%s ));',
        "create_sql":  'INSERT INTO `MomoSkinCare`.`product_price_analysis` (`class`, `type`) VALUES ("乳液","價格分佈")'
    }, {
        "class":"美頸霜",
        "type":"價格分佈",
        "select_sql": 'SELECT Count(*) FROM MomoSkinCare.products Where class="美頸霜" and (price Between (SELECT price_minimum FROM MomoSkinCare.product_price where price_id=%s) and (SELECT price_maximum FROM MomoSkinCare.product_price where price_id=%s ));',
        "create_sql":  'INSERT INTO `MomoSkinCare`.`product_price_analysis` (`class`, `type`) VALUES ("美頸霜","價格分佈")'
    }, {
        "class":"防曬",
        "type":"價格分佈",
        "select_sql": 'SELECT Count(*) FROM MomoSkinCare.products Where class="防曬" and (price Between (SELECT price_minimum FROM MomoSkinCare.product_price where price_id=%s) and (SELECT price_maximum FROM MomoSkinCare.product_price where price_id=%s ));',
        "create_sql":  'INSERT INTO `MomoSkinCare`.`product_price_analysis` (`class`, `type`) VALUES ("防曬","價格分佈")'
    }, {
        "class":"化妝水",
        "type":"價格分佈",
        "select_sql": 'SELECT Count(*) FROM MomoSkinCare.products Where class="化妝水" and (price Between (SELECT price_minimum FROM MomoSkinCare.product_price where price_id=%s) and (SELECT price_maximum FROM MomoSkinCare.product_price where price_id=%s ));',
        "create_sql":  'INSERT INTO `MomoSkinCare`.`product_price_analysis` (`class`, `type`) VALUES ("化妝水","價格分佈")'
    }, {
        "class":"素顏霜",
        "type":"價格分佈",
        "select_sql": 'SELECT Count(*) FROM MomoSkinCare.products Where class="素顏霜" and (price Between (SELECT price_minimum FROM MomoSkinCare.product_price where price_id=%s) and (SELECT price_maximum FROM MomoSkinCare.product_price where price_id=%s ));',
        "create_sql":  'INSERT INTO `MomoSkinCare`.`product_price_analysis` (`class`, `type`) VALUES ("素顏霜","價格分佈")'
    }
]

#  產品之價格區間 營收總額
#  銷量 ＊ 價格
rawsql_2 = [
    {
        "class":"乳霜",
        "type":"營收總額",
        "select_sql": 'SELECT Sum(price*sales) FROM MomoSkinCare.products Where class="乳霜" and (price Between (SELECT price_minimum FROM MomoSkinCare.product_price where price_id=%s) and (SELECT price_maximum FROM MomoSkinCare.product_price where price_id=%s ));',
        "create_sql":  'INSERT INTO `MomoSkinCare`.`product_price_analysis` (`class`, `type`) VALUES ("乳霜","營收總額")'
    },
    {
        "class":"精華液",
        "type":"營收總額",
        "select_sql": 'SELECT Sum(price*sales) FROM MomoSkinCare.products Where class="精華液" and (price Between (SELECT price_minimum FROM MomoSkinCare.product_price where price_id=%s) and (SELECT price_maximum FROM MomoSkinCare.product_price where price_id=%s ));',
        "create_sql":  'INSERT INTO `MomoSkinCare`.`product_price_analysis` (`class`, `type`) VALUES ("精華液","營收總額")'
    },{
        "class":"眼霜",
        "type":"營收總額",
        "select_sql": 'SELECT Sum(price*sales) FROM MomoSkinCare.products Where class="眼霜" and (price Between (SELECT price_minimum FROM MomoSkinCare.product_price where price_id=%s) and (SELECT price_maximum FROM MomoSkinCare.product_price where price_id=%s ));',
        "create_sql":  'INSERT INTO `MomoSkinCare`.`product_price_analysis` (`class`, `type`) VALUES ("眼霜","營收總額")'
    }, {
        "class":"面膜",
        "type":"營收總額",
        "select_sql": 'SELECT Sum(price*sales) FROM MomoSkinCare.products Where class="面膜" and (price Between (SELECT price_minimum FROM MomoSkinCare.product_price where price_id=%s) and (SELECT price_maximum FROM MomoSkinCare.product_price where price_id=%s ));',
        "create_sql":  'INSERT INTO `MomoSkinCare`.`product_price_analysis` (`class`, `type`) VALUES ("面膜","營收總額")'
    }, {
        "class":"凝膠",
        "type":"營收總額",
        "select_sql": 'SELECT Sum(price*sales) FROM MomoSkinCare.products Where class="凝膠" and (price Between (SELECT price_minimum FROM MomoSkinCare.product_price where price_id=%s) and (SELECT price_maximum FROM MomoSkinCare.product_price where price_id=%s ));',
        "create_sql":  'INSERT INTO `MomoSkinCare`.`product_price_analysis` (`class`, `type`) VALUES ("凝膠","營收總額")'
    }, {
        "class":"護唇膏",
        "type":"營收總額",
        "select_sql": 'SELECT Sum(price*sales) FROM MomoSkinCare.products Where class="護唇膏" and (price Between (SELECT price_minimum FROM MomoSkinCare.product_price where price_id=%s) and (SELECT price_maximum FROM MomoSkinCare.product_price where price_id=%s ));',
        "create_sql":  'INSERT INTO `MomoSkinCare`.`product_price_analysis` (`class`, `type`) VALUES ("護唇膏","營收總額")'
    }, {
        "class":"乳液",
        "type":"營收總額",
        "select_sql": 'SELECT Sum(price*sales) FROM MomoSkinCare.products Where class="乳液" and (price Between (SELECT price_minimum FROM MomoSkinCare.product_price where price_id=%s) and (SELECT price_maximum FROM MomoSkinCare.product_price where price_id=%s ));',
        "create_sql":  'INSERT INTO `MomoSkinCare`.`product_price_analysis` (`class`, `type`) VALUES ("乳液","營收總額")'
    }, {
        "class":"美頸霜",
        "type":"營收總額",
        "select_sql": 'SELECT Sum(price*sales) FROM MomoSkinCare.products Where class="美頸霜" and (price Between (SELECT price_minimum FROM MomoSkinCare.product_price where price_id=%s) and (SELECT price_maximum FROM MomoSkinCare.product_price where price_id=%s ));',
        "create_sql":  'INSERT INTO `MomoSkinCare`.`product_price_analysis` (`class`, `type`) VALUES ("美頸霜","營收總額")'
    }, {
        "class":"防曬",
        "type":"營收總額",
        "select_sql": 'SELECT  Sum(price*sales) FROM MomoSkinCare.products Where class="防曬" and (price Between (SELECT price_minimum FROM MomoSkinCare.product_price where price_id=%s) and (SELECT price_maximum FROM MomoSkinCare.product_price where price_id=%s ));',
        "create_sql":  'INSERT INTO `MomoSkinCare`.`product_price_analysis` (`class`, `type`) VALUES ("防曬","營收總額")'
    }, {
        "class":"化妝水",
        "type":"營收總額",
        "select_sql": 'SELECT  Sum(price*sales) FROM MomoSkinCare.products Where class="化妝水" and (price Between (SELECT price_minimum FROM MomoSkinCare.product_price where price_id=%s) and (SELECT price_maximum FROM MomoSkinCare.product_price where price_id=%s ));',
        "create_sql":  'INSERT INTO `MomoSkinCare`.`product_price_analysis` (`class`, `type`) VALUES ("化妝水","營收總額")'
    }, {
        "class":"素顏霜",
        "type":"營收總額",
        "select_sql": 'SELECT Sum(price*sales) FROM MomoSkinCare.products Where class="素顏霜" and (price Between (SELECT price_minimum FROM MomoSkinCare.product_price where price_id=%s) and (SELECT price_maximum FROM MomoSkinCare.product_price where price_id=%s ));',
        "create_sql":  'INSERT INTO `MomoSkinCare`.`product_price_analysis` (`class`, `type`) VALUES ("素顏霜","營收總額")'
    }
]
#  產品之價格分佈 銷量
# sum sales
rawsql_3 = [
    {
        "class":"乳霜",
        "type":"銷量",
        "select_sql": 'SELECT  Sum(sales) FROM MomoSkinCare.products Where class="乳霜" and (price Between (SELECT price_minimum FROM MomoSkinCare.product_price where price_id=%s) and (SELECT price_maximum FROM MomoSkinCare.product_price where price_id=%s ));',
        "create_sql":  'INSERT INTO `MomoSkinCare`.`product_price_analysis` (`class`, `type`) VALUES ("乳霜","銷量")'
    },
    {
        "class":"精華液",
        "type":"銷量",
        "select_sql": 'SELECT  Sum(sales) FROM MomoSkinCare.products Where class="精華液" and (price Between (SELECT price_minimum FROM MomoSkinCare.product_price where price_id=%s) and (SELECT price_maximum FROM MomoSkinCare.product_price where price_id=%s ));',
        "create_sql":  'INSERT INTO `MomoSkinCare`.`product_price_analysis` (`class`, `type`) VALUES ("精華液","銷量")'
    },{
        "class":"眼霜",
        "type":"銷量",
        "select_sql": 'SELECT  Sum(sales) FROM MomoSkinCare.products Where class="眼霜" and (price Between (SELECT price_minimum FROM MomoSkinCare.product_price where price_id=%s) and (SELECT price_maximum FROM MomoSkinCare.product_price where price_id=%s ));',
        "create_sql":  'INSERT INTO `MomoSkinCare`.`product_price_analysis` (`class`, `type`) VALUES ("眼霜","銷量")'
    }, {
        "class":"面膜",
        "type":"銷量",
        "select_sql": 'SELECT  Sum(sales) FROM MomoSkinCare.products Where class="面膜" and (price Between (SELECT price_minimum FROM MomoSkinCare.product_price where price_id=%s) and (SELECT price_maximum FROM MomoSkinCare.product_price where price_id=%s ));',
        "create_sql":  'INSERT INTO `MomoSkinCare`.`product_price_analysis` (`class`, `type`) VALUES ("面膜","銷量")'
    }, {
        "class":"凝膠",
        "type":"銷量",
        "select_sql": 'SELECT  Sum(sales) FROM MomoSkinCare.products Where class="凝膠" and (price Between (SELECT price_minimum FROM MomoSkinCare.product_price where price_id=%s) and (SELECT price_maximum FROM MomoSkinCare.product_price where price_id=%s ));',
        "create_sql":  'INSERT INTO `MomoSkinCare`.`product_price_analysis` (`class`, `type`) VALUES ("凝膠","銷量")'
    }, {
        "class":"護唇膏",
        "type":"銷量",
        "select_sql": 'SELECT  Sum(sales) FROM MomoSkinCare.products Where class="護唇膏" and (price Between (SELECT price_minimum FROM MomoSkinCare.product_price where price_id=%s) and (SELECT price_maximum FROM MomoSkinCare.product_price where price_id=%s ));',
        "create_sql":  'INSERT INTO `MomoSkinCare`.`product_price_analysis` (`class`, `type`) VALUES ("護唇膏","銷量")'
    }, {
        "class":"乳液",
        "type":"銷量",
        "select_sql": 'SELECT Sum(sales) FROM MomoSkinCare.products Where class="乳液" and (price Between (SELECT price_minimum FROM MomoSkinCare.product_price where price_id=%s) and (SELECT price_maximum FROM MomoSkinCare.product_price where price_id=%s ));',
        "create_sql":  'INSERT INTO `MomoSkinCare`.`product_price_analysis` (`class`, `type`) VALUES ("乳液","銷量")'
    }, {
        "class":"美頸霜",
        "type":"銷量",
        "select_sql": 'SELECT Sum(sales) FROM MomoSkinCare.products Where class="美頸霜" and (price Between (SELECT price_minimum FROM MomoSkinCare.product_price where price_id=%s) and (SELECT price_maximum FROM MomoSkinCare.product_price where price_id=%s ));',
        "create_sql":  'INSERT INTO `MomoSkinCare`.`product_price_analysis` (`class`, `type`) VALUES ("美頸霜","銷量")'
    }, {
        "class":"防曬",
        "type":"銷量",
        "select_sql": 'SELECT   Sum(sales) FROM MomoSkinCare.products Where class="防曬" and (price Between (SELECT price_minimum FROM MomoSkinCare.product_price where price_id=%s) and (SELECT price_maximum FROM MomoSkinCare.product_price where price_id=%s ));',
        "create_sql":  'INSERT INTO `MomoSkinCare`.`product_price_analysis` (`class`, `type`) VALUES ("防曬","銷量")'
    }, {
        "class":"化妝水",
        "type":"銷量",
        "select_sql": 'SELECT  Sum(sales) FROM MomoSkinCare.products Where class="化妝水" and (price Between (SELECT price_minimum FROM MomoSkinCare.product_price where price_id=%s) and (SELECT price_maximum FROM MomoSkinCare.product_price where price_id=%s ));',
        "create_sql":  'INSERT INTO `MomoSkinCare`.`product_price_analysis` (`class`, `type`) VALUES ("化妝水","銷量")'
    }, {
        "class":"素顏霜",
        "type":"銷量",
        "select_sql": 'SELECT Sum(sales) FROM MomoSkinCare.products Where class="素顏霜" and (price Between (SELECT price_minimum FROM MomoSkinCare.product_price where price_id=%s) and (SELECT price_maximum FROM MomoSkinCare.product_price where price_id=%s ));',
        "create_sql":  'INSERT INTO `MomoSkinCare`.`product_price_analysis` (`class`, `type`) VALUES ("素顏霜","銷量")'
    }
]
#  產品之價格分佈 人氣
# 
rawsql_4 = [
    {
        "class":"乳霜",
        "type":"總人氣",
        "select_sql": 'SELECT   Sum(comments*star) FROM MomoSkinCare.products Where class="乳霜" and (price Between (SELECT price_minimum FROM MomoSkinCare.product_price where price_id=%s) and (SELECT price_maximum FROM MomoSkinCare.product_price where price_id=%s ));',
        "create_sql":  'INSERT INTO `MomoSkinCare`.`product_price_analysis` (`class`, `type`) VALUES ("乳霜","總人氣")'
    },
    {
        "class":"精華液",
        "type":"總人氣",
        "select_sql": 'SELECT   Sum(comments*star)  FROM MomoSkinCare.products Where class="精華液" and (price Between (SELECT price_minimum FROM MomoSkinCare.product_price where price_id=%s) and (SELECT price_maximum FROM MomoSkinCare.product_price where price_id=%s ));',
        "create_sql":  'INSERT INTO `MomoSkinCare`.`product_price_analysis` (`class`, `type`) VALUES ("精華液","總人氣")'
    },{
        "class":"眼霜",
        "type":"總人氣",
        "select_sql": 'SELECT  Sum(comments*star) FROM MomoSkinCare.products Where class="眼霜" and (price Between (SELECT price_minimum FROM MomoSkinCare.product_price where price_id=%s) and (SELECT price_maximum FROM MomoSkinCare.product_price where price_id=%s ));',
        "create_sql":  'INSERT INTO `MomoSkinCare`.`product_price_analysis` (`class`, `type`) VALUES ("眼霜","總人氣")'
    }, {
        "class":"面膜",
        "type":"總人氣",
        "select_sql": 'SELECT  Sum(comments*star) FROM MomoSkinCare.products Where class="面膜" and (price Between (SELECT price_minimum FROM MomoSkinCare.product_price where price_id=%s) and (SELECT price_maximum FROM MomoSkinCare.product_price where price_id=%s ));',
        "create_sql":  'INSERT INTO `MomoSkinCare`.`product_price_analysis` (`class`, `type`) VALUES ("面膜","總人氣")'
    }, {
        "class":"凝膠",
        "type":"總人氣",
        "select_sql": 'SELECT   Sum(comments*star)  FROM MomoSkinCare.products Where class="凝膠" and (price Between (SELECT price_minimum FROM MomoSkinCare.product_price where price_id=%s) and (SELECT price_maximum FROM MomoSkinCare.product_price where price_id=%s ));',
        "create_sql":  'INSERT INTO `MomoSkinCare`.`product_price_analysis` (`class`, `type`) VALUES ("凝膠","總人氣")'
    }, {
        "class":"護唇膏",
       "type":"總人氣",
        "select_sql": 'SELECT  Sum(comments*star)  FROM MomoSkinCare.products Where class="護唇膏" and (price Between (SELECT price_minimum FROM MomoSkinCare.product_price where price_id=%s) and (SELECT price_maximum FROM MomoSkinCare.product_price where price_id=%s ));',
        "create_sql":  'INSERT INTO `MomoSkinCare`.`product_price_analysis` (`class`, `type`) VALUES ("護唇膏","總人氣")'
    }, {
        "class":"乳液",
        "type":"總人氣",
        "select_sql": 'SELECT Sum(comments*star)  FROM MomoSkinCare.products Where class="乳液" and (price Between (SELECT price_minimum FROM MomoSkinCare.product_price where price_id=%s) and (SELECT price_maximum FROM MomoSkinCare.product_price where price_id=%s ));',
        "create_sql":  'INSERT INTO `MomoSkinCare`.`product_price_analysis` (`class`, `type`) VALUES ("乳液","總人氣")'
    }, {
        "class":"美頸霜",
        "type":"總人氣",
        "select_sql": 'SELECT  Sum(comments*star)  FROM MomoSkinCare.products Where class="美頸霜" and (price Between (SELECT price_minimum FROM MomoSkinCare.product_price where price_id=%s) and (SELECT price_maximum FROM MomoSkinCare.product_price where price_id=%s ));',
        "create_sql":  'INSERT INTO `MomoSkinCare`.`product_price_analysis` (`class`, `type`) VALUES ("美頸霜","總人氣")'
    }, {
        "class":"防曬",
       "type":"總人氣",
        "select_sql": 'SELECT   Sum(comments*star)  FROM MomoSkinCare.products Where class="防曬" and (price Between (SELECT price_minimum FROM MomoSkinCare.product_price where price_id=%s) and (SELECT price_maximum FROM MomoSkinCare.product_price where price_id=%s ));',
        "create_sql":  'INSERT INTO `MomoSkinCare`.`product_price_analysis` (`class`, `type`) VALUES ("防曬","總人氣")'
    }, {
        "class":"化妝水",
        "type":"總人氣",
        "select_sql": 'SELECT  Sum(comments*star)  FROM MomoSkinCare.products Where class="化妝水" and (price Between (SELECT price_minimum FROM MomoSkinCare.product_price where price_id=%s) and (SELECT price_maximum FROM MomoSkinCare.product_price where price_id=%s ));',
        "create_sql":  'INSERT INTO `MomoSkinCare`.`product_price_analysis` (`class`, `type`) VALUES ("化妝水","總人氣")'
    }, {
        "class":"素顏霜",
        "type":"總人氣",
        "select_sql": 'SELECT Sum(comments*star) FROM MomoSkinCare.products Where class="素顏霜" and (price Between (SELECT price_minimum FROM MomoSkinCare.product_price where price_id=%s) and (SELECT price_maximum FROM MomoSkinCare.product_price where price_id=%s ));',
        "create_sql":  'INSERT INTO `MomoSkinCare`.`product_price_analysis` (`class`, `type`) VALUES ("素顏霜","總人氣")'
    }
]
#  產品之價格分佈 評論數
#  
rawsql_5 = [
    {
        "class":"乳霜",
        "type":"總留言",
        "select_sql": 'SELECT  Sum(comments) FROM MomoSkinCare.products Where class="乳霜" and (price Between (SELECT price_minimum FROM MomoSkinCare.product_price where price_id=%s) and (SELECT price_maximum FROM MomoSkinCare.product_price where price_id=%s ));',
        "create_sql":  'INSERT INTO `MomoSkinCare`.`product_price_analysis` (`class`, `type`) VALUES ("乳霜","總留言")'
    },
    {
        "class":"精華液",
        "type":"總留言",
        "select_sql": 'SELECT   Sum(comments)  FROM MomoSkinCare.products Where class="精華液" and (price Between (SELECT price_minimum FROM MomoSkinCare.product_price where price_id=%s) and (SELECT price_maximum FROM MomoSkinCare.product_price where price_id=%s ));',
        "create_sql":  'INSERT INTO `MomoSkinCare`.`product_price_analysis` (`class`, `type`) VALUES ("精華液","總留言")'
    },{
        "class":"眼霜",
        "type":"總留言",
        "select_sql": 'SELECT Sum(comments) FROM MomoSkinCare.products Where class="眼霜" and (price Between (SELECT price_minimum FROM MomoSkinCare.product_price where price_id=%s) and (SELECT price_maximum FROM MomoSkinCare.product_price where price_id=%s ));',
        "create_sql":  'INSERT INTO `MomoSkinCare`.`product_price_analysis` (`class`, `type`) VALUES ("眼霜","總留言")'
    }, {
        "class":"面膜",
        "type":"總留言",
        "select_sql": 'SELECT  Sum(comments) FROM MomoSkinCare.products Where class="面膜" and (price Between (SELECT price_minimum FROM MomoSkinCare.product_price where price_id=%s) and (SELECT price_maximum FROM MomoSkinCare.product_price where price_id=%s ));',
        "create_sql":  'INSERT INTO `MomoSkinCare`.`product_price_analysis` (`class`, `type`) VALUES ("面膜","總留言")'
    }, {
        "class":"凝膠",
        "type":"總留言",
        "select_sql": 'SELECT  Sum(comments) FROM MomoSkinCare.products Where class="凝膠" and (price Between (SELECT price_minimum FROM MomoSkinCare.product_price where price_id=%s) and (SELECT price_maximum FROM MomoSkinCare.product_price where price_id=%s ));',
        "create_sql":  'INSERT INTO `MomoSkinCare`.`product_price_analysis` (`class`, `type`) VALUES ("凝膠","總留言")'
    }, {
        "class":"護唇膏",
        "type":"總留言",
        "select_sql": 'SELECT Sum(comments) FROM MomoSkinCare.products Where class="護唇膏" and (price Between (SELECT price_minimum FROM MomoSkinCare.product_price where price_id=%s) and (SELECT price_maximum FROM MomoSkinCare.product_price where price_id=%s ));',
        "create_sql":  'INSERT INTO `MomoSkinCare`.`product_price_analysis` (`class`, `type`) VALUES ("護唇膏","總留言")'
    }, {
        "class":"乳液",
        "type":"總留言",
        "select_sql": 'SELECT Sum(comments)  FROM MomoSkinCare.products Where class="乳液" and (price Between (SELECT price_minimum FROM MomoSkinCare.product_price where price_id=%s) and (SELECT price_maximum FROM MomoSkinCare.product_price where price_id=%s ));',
        "create_sql":  'INSERT INTO `MomoSkinCare`.`product_price_analysis` (`class`, `type`) VALUES ("乳液","總留言")'
    }, {
        "class":"美頸霜",
        "type":"總留言",
        "select_sql": 'SELECT Sum(comments) FROM MomoSkinCare.products Where class="美頸霜" and (price Between (SELECT price_minimum FROM MomoSkinCare.product_price where price_id=%s) and (SELECT price_maximum FROM MomoSkinCare.product_price where price_id=%s ));',
        "create_sql":  'INSERT INTO `MomoSkinCare`.`product_price_analysis` (`class`, `type`) VALUES ("美頸霜","總留言")'
    }, {
        "class":"防曬",
       "type":"總留言",
        "select_sql": 'SELECT Sum(comments)  FROM MomoSkinCare.products Where class="防曬" and (price Between (SELECT price_minimum FROM MomoSkinCare.product_price where price_id=%s) and (SELECT price_maximum FROM MomoSkinCare.product_price where price_id=%s ));',
        "create_sql":  'INSERT INTO `MomoSkinCare`.`product_price_analysis` (`class`, `type`) VALUES ("防曬","總留言")'
    }, {
        "class":"化妝水",
        "type":"總留言",
        "select_sql": 'SELECT Sum(comments) FROM MomoSkinCare.products Where class="化妝水" and (price Between (SELECT price_minimum FROM MomoSkinCare.product_price where price_id=%s) and (SELECT price_maximum FROM MomoSkinCare.product_price where price_id=%s ));',
        "create_sql":  'INSERT INTO `MomoSkinCare`.`product_price_analysis` (`class`, `type`) VALUES ("化妝水","總留言")'
    }, {
        "class":"素顏霜",
        "type":"總留言",
        "select_sql": 'SELECT Sum(comments) FROM MomoSkinCare.products Where class="素顏霜" and (price Between (SELECT price_minimum FROM MomoSkinCare.product_price where price_id=%s) and (SELECT price_maximum FROM MomoSkinCare.product_price where price_id=%s ));',
        "create_sql":  'INSERT INTO `MomoSkinCare`.`product_price_analysis` (`class`, `type`) VALUES ("素顏霜","總留言")'
    }
]
try:
    conn = pymysql.connect(host="localhost",port=3306, user="root",password="aa910828", database="MomoSkinCare" )
    for sql_json in rawsql_5:
        with conn.cursor() as cursor:
            cursor.execute(sql_json["create_sql"])
        conn.commit()
        with conn.cursor() as cursor_1:
            # 歷遍價格區間
            for price_range in price_row:
                cursor_1.execute(sql_json["select_sql"],(price_range, price_range))
                result_set = cursor_1.fetchall()
                for row in  result_set:
                    print(row[0])
                    with conn.cursor() as cursor_2:
                        cursor_2.execute('Update MomoSkinCare.product_price_analysis SET `%s`=%s  Where `class`=%s and `type`=%s',(int(price_range),row[0],sql_json["class"], sql_json["type"]))
                    conn.commit()
        print("---------------------------")
except Exception as ex:
    print(ex)

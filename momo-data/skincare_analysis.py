import pymysql


# 商品數
# count
rawsql_1 = [
    'Insert Into MomoSkinCare.skincare_analysis(class, type, number) Values ("乳霜", "商品數",(SELECT count(*) FROM MomoSkinCare.products  Where class="乳霜"));',
    'Insert Into MomoSkinCare.skincare_analysis(class, type, number) Values ("精華液", "商品數",(SELECT count(*) FROM MomoSkinCare.products  Where class="精華液"));',
    'Insert Into MomoSkinCare.skincare_analysis(class, type, number) Values ("眼霜", "商品數",(SELECT count(*) FROM MomoSkinCare.products  Where class="眼霜"));',
    'Insert Into MomoSkinCare.skincare_analysis(class, type, number) Values ("面膜", "商品數",(SELECT count(*) FROM MomoSkinCare.products  Where class="面膜"));',
    'Insert Into MomoSkinCare.skincare_analysis(class, type, number) Values ("凝膠", "商品數",(SELECT count(*) FROM MomoSkinCare.products  Where class="凝膠"));',
    'Insert Into MomoSkinCare.skincare_analysis(class, type, number) Values ("護唇膏", "商品數",(SELECT count(*) FROM MomoSkinCare.products  Where class="護唇膏"));',
    'Insert Into MomoSkinCare.skincare_analysis(class, type, number) Values ("乳液", "商品數",(SELECT count(*) FROM MomoSkinCare.products  Where class="乳液"));',
    'Insert Into MomoSkinCare.skincare_analysis(class, type, number) Values ("美頸霜", "商品數",(SELECT count(*) FROM MomoSkinCare.products  Where class="美頸霜"));',
    'Insert Into MomoSkinCare.skincare_analysis(class, type, number) Values ("防曬", "商品數",(SELECT count(*) FROM MomoSkinCare.products  Where class="防曬"));',
    'Insert Into MomoSkinCare.skincare_analysis(class, type, number) Values ("化妝水", "商品數",(SELECT count(*) FROM MomoSkinCare.products  Where class="化妝水"));',
    'Insert Into MomoSkinCare.skincare_analysis(class, type, number) Values ("素顏霜", "商品數",(SELECT count(*) FROM MomoSkinCare.products  Where class="素顏霜"));'
]
# 銷量
# sum
rawsql_2 = [
    'Insert Into MomoSkinCare.skincare_analysis(class, type, number) Values ("乳霜", "銷量",(SELECT Sum(sales) FROM MomoSkinCare.products  Where class="乳霜"));',
    'Insert Into MomoSkinCare.skincare_analysis(class, type, number) Values ("精華液", "銷量",(SELECT Sum(sales) FROM MomoSkinCare.products  Where class="精華液"));',
    'Insert Into MomoSkinCare.skincare_analysis(class, type, number) Values ("眼霜", "銷量",(SELECT Sum(sales) FROM MomoSkinCare.products  Where class="眼霜"));',
    'Insert Into MomoSkinCare.skincare_analysis(class, type, number) Values ("面膜", "銷量",(SELECT Sum(sales) FROM MomoSkinCare.products  Where class="面膜"));',
    'Insert Into MomoSkinCare.skincare_analysis(class, type, number) Values ("凝膠", "銷量",(SELECT Sum(sales) FROM MomoSkinCare.products  Where class="凝膠"));',
    'Insert Into MomoSkinCare.skincare_analysis(class, type, number) Values ("護唇膏", "銷量",(SELECT Sum(sales) FROM MomoSkinCare.products  Where class="護唇膏"));',
    'Insert Into MomoSkinCare.skincare_analysis(class, type, number) Values ("乳液", "銷量",(SELECT Sum(sales) FROM MomoSkinCare.products  Where class="乳液"));',
    'Insert Into MomoSkinCare.skincare_analysis(class, type, number) Values ("美頸霜", "銷量",(SELECT Sum(sales) FROM MomoSkinCare.products  Where class="美頸霜"));',
    'Insert Into MomoSkinCare.skincare_analysis(class, type, number) Values ("防曬", "銷量",(SELECT Sum(sales) FROM MomoSkinCare.products  Where class="防曬"));',
    'Insert Into MomoSkinCare.skincare_analysis(class, type, number) Values ("化妝水", "銷量",(SELECT Sum(sales) FROM MomoSkinCare.products  Where class="化妝水"));',
    'Insert Into MomoSkinCare.skincare_analysis(class, type, number) Values ("素顏霜", "銷量",(SELECT Sum(sales) FROM MomoSkinCare.products  Where class="素顏霜"));'
]
# 營收總額
# 銷量 ＊ 價格
rawsql_3 = [
    'Insert Into MomoSkinCare.skincare_analysis(class, type, number) Values ("乳霜", "營收總額",(SELECT Sum(price*sales) FROM MomoSkinCare.products  Where class="乳霜"));',
    'Insert Into MomoSkinCare.skincare_analysis(class, type, number) Values ("精華液", "營收總額",(SELECT Sum(price*sales) FROM MomoSkinCare.products  Where class="精華液"));',
    'Insert Into MomoSkinCare.skincare_analysis(class, type, number) Values ("眼霜", "營收總額",(SELECT Sum(price*sales)  FROM MomoSkinCare.products  Where class="眼霜"));',
    'Insert Into MomoSkinCare.skincare_analysis(class, type, number) Values ("面膜", "營收總額",(SELECT Sum(price*sales)  FROM MomoSkinCare.products  Where class="面膜"));',
    'Insert Into MomoSkinCare.skincare_analysis(class, type, number) Values ("凝膠", "營收總額",(SELECT Sum(price*sales) FROM MomoSkinCare.products  Where class="凝膠"));',
    'Insert Into MomoSkinCare.skincare_analysis(class, type, number) Values ("護唇膏", "營收總額",(SELECT Sum(price*sales)  FROM MomoSkinCare.products  Where class="護唇膏"));',
    'Insert Into MomoSkinCare.skincare_analysis(class, type, number) Values ("乳液", "營收總額",(SELECT Sum(price*sales) FROM MomoSkinCare.products  Where class="乳液"));',
    'Insert Into MomoSkinCare.skincare_analysis(class, type, number) Values ("美頸霜", "營收總額",(SELECT Sum(price*sales)  FROM MomoSkinCare.products  Where class="美頸霜"));',
    'Insert Into MomoSkinCare.skincare_analysis(class, type, number) Values ("防曬", "營收總額",(SELECT Sum(price*sales)  FROM MomoSkinCare.products  Where class="防曬"));',
    'Insert Into MomoSkinCare.skincare_analysis(class, type, number) Values ("化妝水", "營收總額",(SELECT Sum(price*sales)  FROM MomoSkinCare.products  Where class="化妝水"));',
    'Insert Into MomoSkinCare.skincare_analysis(class, type, number) Values ("素顏霜", "營收總額",(SELECT Sum(price*sales)  FROM MomoSkinCare.products  Where class="素顏霜"));'
]
# 人氣 
rawsql_4 = [
    'Insert Into MomoSkinCare.skincare_analysis(class, type, number) Values ("乳霜", "總人氣",(SELECT Sum(comments*star) FROM MomoSkinCare.products  Where class="乳霜"));',
    'Insert Into MomoSkinCare.skincare_analysis(class, type, number) Values ("精華液", "總人氣",(SELECT Sum(comments*star) FROM MomoSkinCare.products  Where class="精華液"));',
    'Insert Into MomoSkinCare.skincare_analysis(class, type, number) Values ("眼霜", "總人氣",(SELECT Sum(comments*star)  FROM MomoSkinCare.products  Where class="眼霜"));',
    'Insert Into MomoSkinCare.skincare_analysis(class, type, number) Values ("面膜", "總人氣",(SELECT Sum(comments*star)  FROM MomoSkinCare.products  Where class="面膜"));',
    'Insert Into MomoSkinCare.skincare_analysis(class, type, number) Values ("凝膠", "總人氣",(SELECT Sum(comments*star) FROM MomoSkinCare.products  Where class="凝膠"));',
    'Insert Into MomoSkinCare.skincare_analysis(class, type, number) Values ("護唇膏", "總人氣",(SELECT Sum(comments*star)  FROM MomoSkinCare.products  Where class="護唇膏"));',
    'Insert Into MomoSkinCare.skincare_analysis(class, type, number) Values ("乳液", "總人氣",(SELECT Sum(comments*star) FROM MomoSkinCare.products  Where class="乳液"));',
    'Insert Into MomoSkinCare.skincare_analysis(class, type, number) Values ("美頸霜", "總人氣",(SELECT Sum(comments*star)  FROM MomoSkinCare.products  Where class="美頸霜"));',
    'Insert Into MomoSkinCare.skincare_analysis(class, type, number) Values ("防曬", "總人氣",(SELECT Sum(comments*star)  FROM MomoSkinCare.products  Where class="防曬"));',
    'Insert Into MomoSkinCare.skincare_analysis(class, type, number) Values ("化妝水", "總人氣",(SELECT Sum(comments*star)  FROM MomoSkinCare.products  Where class="化妝水"));',
    'Insert Into MomoSkinCare.skincare_analysis(class, type, number) Values ("素顏霜", "總人氣",(SELECT Sum(comments*star)  FROM MomoSkinCare.products  Where class="素顏霜"));'
]
#  平均星星
rawsql_5 = [
    'Insert Into MomoSkinCare.skincare_analysis(class, type, float_number) Values ("乳霜", "平均星星",(SELECT Avg(star) FROM MomoSkinCare.products  Where class="乳霜"));',
    'Insert Into MomoSkinCare.skincare_analysis(class, type, float_number) Values ("精華液", "平均星星",(SELECT  Avg(star) FROM MomoSkinCare.products  Where class="精華液"));',
    'Insert Into MomoSkinCare.skincare_analysis(class, type, float_number) Values ("眼霜", "平均星星",(SELECT  Avg(star)  FROM MomoSkinCare.products  Where class="眼霜"));',
    'Insert Into MomoSkinCare.skincare_analysis(class, type, float_number) Values ("面膜", "平均星星",(SELECT  Avg(star)  FROM MomoSkinCare.products  Where class="面膜"));',
    'Insert Into MomoSkinCare.skincare_analysis(class, type, float_number) Values ("凝膠", "平均星星",(SELECT  Avg(star) FROM MomoSkinCare.products  Where class="凝膠"));',
    'Insert Into MomoSkinCare.skincare_analysis(class, type, float_number) Values ("護唇膏", "平均星星",(SELECT  Avg(star)  FROM MomoSkinCare.products  Where class="護唇膏"));',
    'Insert Into MomoSkinCare.skincare_analysis(class, type, float_number) Values ("乳液", "平均星星",(SELECT  Avg(star) FROM MomoSkinCare.products  Where class="乳液"));',
    'Insert Into MomoSkinCare.skincare_analysis(class, type, float_number) Values ("美頸霜", "平均星星",(SELECT  Avg(star)  FROM MomoSkinCare.products  Where class="美頸霜"));',
    'Insert Into MomoSkinCare.skincare_analysis(class, type, float_number) Values ("防曬", "平均星星",(SELECT  Avg(star)  FROM MomoSkinCare.products  Where class="防曬"));',
    'Insert Into MomoSkinCare.skincare_analysis(class, type, float_number) Values ("化妝水", "平均星星",(SELECT  Avg(star)  FROM MomoSkinCare.products  Where class="化妝水"));',
    'Insert Into MomoSkinCare.skincare_analysis(class, type, float_number) Values ("素顏霜", "平均星星",(SELECT  Avg(star)  FROM MomoSkinCare.products  Where class="素顏霜"));'
]
# 留言數
rawsql_6 = [
    'Insert Into MomoSkinCare.skincare_analysis(class, type, number) Values ("乳霜", "總留言",(SELECT Sum(comments) FROM MomoSkinCare.products  Where class="乳霜"));',
    'Insert Into MomoSkinCare.skincare_analysis(class, type, number) Values ("精華液", "總留言",(SELECT Sum(comments) FROM MomoSkinCare.products  Where class="精華液"));',
    'Insert Into MomoSkinCare.skincare_analysis(class, type, number) Values ("眼霜", "總留言",(SELECT Sum(comments)  FROM MomoSkinCare.products  Where class="眼霜"));',
    'Insert Into MomoSkinCare.skincare_analysis(class, type, number) Values ("面膜", "總留言",(SELECT Sum(comments)  FROM MomoSkinCare.products  Where class="面膜"));',
    'Insert Into MomoSkinCare.skincare_analysis(class, type, number) Values ("凝膠", "總留言",(SELECT Sum(comments) FROM MomoSkinCare.products  Where class="凝膠"));',
    'Insert Into MomoSkinCare.skincare_analysis(class, type, number) Values ("護唇膏", "總留言",(SELECT Sum(comments)  FROM MomoSkinCare.products  Where class="護唇膏"));',
    'Insert Into MomoSkinCare.skincare_analysis(class, type, number) Values ("乳液", "總留言",(SELECT Sum(comments) FROM MomoSkinCare.products  Where class="乳液"));',
    'Insert Into MomoSkinCare.skincare_analysis(class, type, number) Values ("美頸霜", "總留言",(SELECT Sum(comments)  FROM MomoSkinCare.products  Where class="美頸霜"));',
    'Insert Into MomoSkinCare.skincare_analysis(class, type, number) Values ("防曬", "總留言",(SELECT Sum(comments)  FROM MomoSkinCare.products  Where class="防曬"));',
    'Insert Into MomoSkinCare.skincare_analysis(class, type, number) Values ("化妝水", "總留言",(SELECT Sum(comments)  FROM MomoSkinCare.products  Where class="化妝水"));',
    'Insert Into MomoSkinCare.skincare_analysis(class, type, number) Values ("素顏霜", "總留言",(SELECT Sum(comments)  FROM MomoSkinCare.products  Where class="素顏霜"));'
]
try:
    conn = pymysql.connect(host="localhost",port=3306, user="root",password="aa910828", database="MomoSkinCare" )
    for sql in rawsql_6:
        with conn.cursor() as cursor:
            cursor.execute(sql)
        conn.commit()

except Exception as ex:
    print(ex)

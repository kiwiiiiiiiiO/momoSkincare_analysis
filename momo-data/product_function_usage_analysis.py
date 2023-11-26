
import pymysql

rowdata =[
    {
        "class":'化妝水',
        "function":["%抗痘%","%亮白%","%保濕%", "%控油%", "%舒敏%", "%緊緻%"],
        "usage":["%全膚質適用%","%油性肌膚%","%乾性肌膚%","%敏感肌膚%"]
    },{
        "class":'精華液',
        "function":["%抗痘%","%亮白%","%保濕%", "%控油%", "%舒敏%", "%緊緻%"],
        "usage":["%全膚質適用%","%油性肌膚%","%乾性肌膚%","%敏感肌膚%"]
    },{
        "class":'乳液',
        "function":["%抗痘%","%亮白%","%保濕%", "%控油%", "%舒敏%", "%緊緻%"],
        "usage":["%全膚質適用%","%油性肌膚%","%乾性肌膚%","%敏感肌膚%"]
    },{
        "class":'乳霜',
        "function":["%抗痘%","%亮白%","%保濕%", "%控油%", "%舒敏%", "%緊緻%"],
        "usage":["%全膚質適用%","%油性肌膚%","%乾性肌膚%","%敏感肌膚%"]
    },{
        "class":'凝膠',
        "function":["%抗痘%","%亮白%","%保濕%", "%控油%", "%舒敏%", "%緊緻%"],
        "usage":["%全膚質適用%","%油性肌膚%","%乾性肌膚%","%敏感肌膚%"]
    },{
        "class":'面膜',
        "function":["%抗痘%","%亮白%","%保濕%", "%控油%", "%舒敏%", "%緊緻%"],
        "usage":["%全膚質適用%","%油性肌膚%","%乾性肌膚%","%敏感肌膚%"]
    },{
        "class":'眼霜',
        "function":["%抗痘%","%亮白%","%保濕%", "%控油%", "%舒敏%", "%緊緻%"],
        "usage":["%全膚質適用%","%油性肌膚%","%乾性肌膚%","%敏感肌膚%"]
    },{
        "class":'護唇膏',
        "function":["%抗痘%","%亮白%","%保濕%", "%控油%", "%舒敏%", "%緊緻%"],
        "usage":None
    },{
        "class":'防曬',
        "function":["%抗痘%","%亮白%","%保濕%", "%控油%", "%舒敏%", "%緊緻%"],
        "usage":["%全膚質適用%","%油性肌膚%","%乾性肌膚%","%敏感肌膚%"]
    },{
        "class":'素顏霜',
        "function":["%抗痘%","%亮白%","%保濕%", "%控油%", "%舒敏%", "%緊緻%"],
        "usage":None
    },{
        "class":'美頸霜',
        "function":None,
        "usage":None
    },
]


commandrow =[
    {
        # 商品數
        "analysis_type":"商品數",
        "function_commend": "Insert INTO `MomoSkinCare`.`product_function_usage_analysis`(`class`, `type`, `subclass`, `number`, `analysis_type`)values(%s, %s,%s, (SELECT COUNT(*) FROM MomoSkinCare.products Where `class` LIKE %s and `function` LIKE %s),%s);",
        "usage_commend": " Insert INTO `MomoSkinCare`.`product_function_usage_analysis`(`class`, `type`, `subclass`, `number`, `analysis_type`)values(%s, %s,%s, (SELECT COUNT(*) FROM MomoSkinCare.products Where `class` LIKE %s and `usage` LIKE %s),%s);"
    },{
        # 銷量
        "analysis_type":"銷量",
        "function_commend": "Insert INTO `MomoSkinCare`.`product_function_usage_analysis`(`class`, `type`, `subclass`, `number`, `analysis_type`)values(%s, %s,%s, (SELECT Sum(sales) FROM MomoSkinCare.products Where `class` LIKE %s and `function` LIKE %s),%s);",
        "usage_commend": " Insert INTO `MomoSkinCare`.`product_function_usage_analysis`(`class`, `type`, `subclass`, `number`, `analysis_type`)values(%s, %s,%s, (SELECT Sum(sales) FROM MomoSkinCare.products Where `class` LIKE %s and `usage` LIKE %s),%s);"
    },{
        # 營收總額
        "analysis_type":"營收總額",
        "function_commend": "Insert INTO `MomoSkinCare`.`product_function_usage_analysis`(`class`, `type`, `subclass`, `number`, `analysis_type`)values(%s, %s,%s, (SELECT Sum(price*sales) FROM MomoSkinCare.products Where `class` LIKE %s and `function` LIKE %s),%s);",
        "usage_commend": " Insert INTO `MomoSkinCare`.`product_function_usage_analysis`(`class`, `type`, `subclass`, `number`, `analysis_type`)values(%s, %s,%s, (SELECT Sum(price*sales) FROM MomoSkinCare.products Where `class` LIKE %s and `usage` LIKE %s),%s);"

    },{
        # 人氣
        "analysis_type":"總人氣",
        "function_commend": "Insert INTO `MomoSkinCare`.`product_function_usage_analysis`(`class`, `type`, `subclass`, `number`, `analysis_type`)values(%s, %s,%s, (SELECT Sum(comments*star) FROM MomoSkinCare.products Where `class` LIKE %s and `function` LIKE %s),%s);",
        "usage_commend": " Insert INTO `MomoSkinCare`.`product_function_usage_analysis`(`class`, `type`, `subclass`, `number`, `analysis_type`)values(%s, %s,%s, (SELECT Sum(comments*star) FROM MomoSkinCare.products Where `class` LIKE %s and `usage` LIKE %s),%s);"
    },{
        # 總評碖
        "analysis_type":"總留言",
        "function_commend": "Insert INTO `MomoSkinCare`.`product_function_usage_analysis`(`class`, `type`, `subclass`, `number`, `analysis_type`)values(%s, %s,%s, (SELECT Sum(comments)  FROM MomoSkinCare.products Where `class` LIKE %s and `function` LIKE %s),%s);",
        "usage_commend": " Insert INTO `MomoSkinCare`.`product_function_usage_analysis`(`class`, `type`, `subclass`, `number`, `analysis_type`)values(%s, %s,%s, (SELECT Sum(comments)  FROM MomoSkinCare.products Where `class` LIKE %s and `usage` LIKE %s),%s);"
    }
   
]
try:
    conn = pymysql.connect(host="localhost",port=3306, user="root",password="aa910828", database="MomoSkinCare" )
    for data in rowdata:
        if data["function"] != None:
            for function in data["function"]:
                with conn.cursor() as cursor:
                    function_str = function.replace('%','')
                    command_function  = commandrow[4]["function_commend"]
                    cursor.execute(command_function,(data["class"], 'function',function_str,data["class"], function, commandrow[4]["analysis_type"]))
                conn.commit()
        if data["usage"] != None:
            for usage in data["usage"]:
                with conn.cursor() as cursor:
                    usage_str = usage.replace('%','')
                    command_usage  = commandrow[4]["usage_commend"]
                    cursor.execute(command_usage,(data["class"], 'usage',usage_str,data["class"], usage, commandrow[4]["analysis_type"]))
                conn.commit()

except Exception as ex:
    print(ex)
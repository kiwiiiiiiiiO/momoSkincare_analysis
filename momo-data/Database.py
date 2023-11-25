import pymysql
import json
jsonFile = open('/Users/oujenny/momoSkincare_analysis/json_file/out_toningcream.json')
data = json.load(jsonFile)
number = 0

def sales_trans(sales):
    global number
    if sales == '0':
        number = 25
    elif sales =='總銷量>50':
        number = 75
    elif sales == '總銷量>100':
        number = 300
    elif sales == '總銷量>500':
        number = 750
    elif sales == '總銷量>1000':
        number = 2000
    elif sales == '總銷量>3000':
        number = 4000
    elif sales == '總銷量>5000':
        number = 6500
    elif sales == '總銷量>8000':
        number = 9000
    elif sales == '總銷量>1萬':
        number = 12500
    elif sales == '總銷量>1.5萬':
        number = 22500
    elif sales == '總銷量>3萬':
        number = 30000
    return number

try:
    conn = pymysql.connect(host="localhost",port=3306, user="root",password="aa910828", database="MomoSkinCare" )
    for product in data["商品訊息列表"]:
        sales_number = sales_trans(product["sales"])
        price = int(product["price"]) + 0
        comments = int(product["comments"])
        star = float(product["star"])
        with conn.cursor() as cursor:
            command  = "INSERT INTO `MomoSkinCare`.`products` (`class`, `name`, `id`, `price`, `brand`, `brandtype`, `series`, `package`, `function`, `usage`, `sales`, `comments`,`star` ) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s );"
            value = (data["類別"], product["name"], product["id"], price, product["brand"], product["brandtype"],product["series"], product["package"], product["function"], product["usage"], sales_number, comments, star)
            cursor.execute(command, value)
        conn.commit()

except Exception as ex:
    print(ex)

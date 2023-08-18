# catch the details of each product

class Product:
    def __init__() -> None:
        pass

    def __get_ChromeOptions(self): 
        pass
    
    def __getProductInfo(self):
        
        # 商品名稱
        name = str(self.soup.find(id = 'osmGoodsName').text)
        # 最折扣價格
        price = self.soup.find("meta", property="product:price:amount")
        # 品牌名稱
        brand = self.soup.find("meta", property="product:brand")
        # 品號
        productid = self.soup.find("meta", property="product:retailer_item_id")
        
        # 商品規格表格讀取
        table = self.soup.find('div', {'class': 'attributesArea'}).find('table')
        columns =  [tr for tr in table.findAll('tr')]
        tds = [ column.find("td") for column in columns ]
        ths = [ column.find("th").text for column in columns ]

        # 商品規格 - 品牌系列名稱
        seriesNum = ths.index("品牌系列名稱") if "品牌系列名稱" in ths else -1
        if seriesNum == -1 :
            series = None
        else:
            series = tds[seriesNum].text
        # 商品規格 - 品牌定位
        brandtypeNum = ths.index("品牌定位") if "品牌定位" in ths else -1
        if  brandtypeNum == -1 :
            brandtype = None
        else:
           brandtype = tds[brandtypeNum].text
        # 商品規格 - 包裝組合
        packageNum = ths.index("包裝組合") if "品牌定位" in ths else -1
        if  packageNum == -1 :
            package = None
        else:
            package =  str(tds[packageNum]).replace('<td>',"").replace('<ul>',"").replace('<li>',"").replace('</li>',"*").replace('</ul>',"").replace('</td>',"")
        # 商品規格 - 功效
        functionNum = ths.index("功效") if "功效" in ths else -1
        if  functionNum == -1 :
            function= None
        else:
            function = str(tds[functionNum]).replace('<td>',"").replace('<ul>',"").replace('<li>',"").replace('</li>',"*").replace('</ul>',"").replace('</td>',"")
        # 商品規格 - 適用於
        usageNum = ths.index("適用於") if "適用於" in ths else -1
        if  usageNum == -1 :
            usage = None
        else:
            usage = str(tds[usageNum]).replace('<td>',"").replace('<ul>',"").replace('<li>',"").replace('</li>',"*").replace('</ul>',"").replace('</td>',"")
       
        # 銷售量
        sales =  self.driver.find_element(By.XPATH, "//div[@class = 'productRating']//p[@class = 'productTotalSales']") 
        salesText =  sales.get_attribute("textContent")


# 資料處理  momo 總銷量>... -> 數字
        
        # 評論數
        comments = self.driver.find_element(By.XPATH, "//li[@class = 'goodsCommendLi']")
        
        if comments.text == "商品評價(0)" :
             starCount = 0 
        else:
            comments.click()
        # 總星星數
        star = self.driver.find_element(By.XPATH, "//div[@class = 'indicatorAvg']//div[@class = 'indicatorAvgVal']")
        starCount = star.get_attribute("textContent")
        comments = str(comments.text).replace('商品評價(','').replace(')','')

        ProductJson = {
            "name": name,
            "id": productid["content"], 
            "price":price["content"],
            "brand": brand["content"],
            "brandtype": brandtype,
            "series":series,
            "package":package, 
            "function":function, 
            "usage":usage, 
            "sales":salesText,
            "comments":comments, 
            "star":starCount
        }
        return ProductJson


p = Product("/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",'https://www.momoshop.com.tw/goods/GoodsDetail.jsp?i_code=7493421&cid=recitri&oid=BfG&mdiv=goodsDetail_momoshop-av-&ctype=B&recomd_id=rgc-5bj6_normal_1691513362_1097773', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36')
json_object = p.getProductInfo() 
json_formatted_str = json.dumps(json_object, ensure_ascii = False, indent=2)
print(json_formatted_str)
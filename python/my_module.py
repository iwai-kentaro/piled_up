class apparel:
    def __init__(self,id,name,price,purchase_price):
        self.id = id
        self.name = name
        self.price = price
        self.purchase_price = purchase_price
    
    def purchase(self):
        profit = self.purchase_price / self.price
        return profit
    
apparel_1 = apparel('A0001','半袖クールTシャツ', 5000, 2250)
apparel_1.price = 6000
# apparel_1_purchase = apparel_1.purchase()
# print(apparel_1_purchase)
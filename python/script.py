# #問題１−１
# scores = {'数学': 82, '国語':74 , '英語': 60, '理科': 92,  '社会': 70}

# #理科は社会より何点高いか？
# answer = scores['理科'] - scores['社会']
# print(f'理科は社会より{answer}点高い')

# #問題１−２
# avg = sum(scores.values())/ len(scores)
# print(f'平均点は{avg}点')

# age = 9
# if age >= 20:
#     print('成人です')
# elif age >= 10:
#     print('十代です')
# else:
#     print('未成年です')

# for x, y in scores.items():
#     print(f'{x}は{y}点')


# #問題2−1
# year = 2021
# if year % 400 == 0:
#     print('閏年です')
# elif year % 100 == 0:
#     print('閏年ではありません')
# elif year % 4 == 0:
#     print('閏年です')
# else:
#     print('閏年ではありません')

#問題2−2
# for i in range(1,101):
#     if i % 15 == 0:
#         print(f'{i}FizzBuzz')
#     elif i % 5 == 0:
#         print(f'{i}Buzz')
#     elif i % 3 == 0:
#         print(f'{i}Fizz')
#     else:
#         print(i)

# def print_hello():
#     print('Hello, World!')

    
    
# print_hello()

# def add(a, b):
#     c = a + b
#     c = a - b
#     return c

# e, r = add(400,200)


# class User:
#     def __init__(self, name, mail, point):
#         self.name = name
#         self.mail = mail
#         self.point = point

#     def add_point(self, point):
#         self.point += point

# User_1 = User('taro','example@mail', 100)
# User_1.add_point(200)
# print(User_1.point)


# class Student:
#     def __init__(self, name, math, english, science, social, japanese):
#         self.name = name
#         self.math = math
#         self.english = english
#         self.science = science
#         self.social = social
#         self.japanese = japanese

#     def avg_score(self):
#         avg =  (self.math + self.english + self.science + self.social + self.japanese) / 5
#         return avg
    
#3-1
# class apparel:
#     def __init__(self,id,name,price,purchase_price):
#         self.id = id
#         self.name = name
#         self.price = price
#         self.purchase_price = purchase_price
    
#     def purchase(self):
#         profit = self.purchase_price / self.price
#         return profit
    
# apparel_1 = apparel('A0001','半袖クールTシャツ', 5000, 2250)
# apparel_1.price = 6000
# apparel_1_purchase = apparel_1.purchase()
# print(apparel_1_purchase)

from my_module import apparel_1

apparel_1_purchase = apparel_1.purchase()
print(apparel_1_purchase)
import csv
import pandas as pd 
sheetdata = pd.read_csv("data.csv")
# name = data['Material Name'].tolist()
# print(name)
data = sheetdata.drop(['Material Name','Stream Name','Drop Off Instructions'],axis=1)
print(data)

# data['Material Name'].where(search value)
# data['Material Synonym'][index].split(",")
# or data['Material Synonym'].where(search value) --> do it as a for loop instead of .where function to use split

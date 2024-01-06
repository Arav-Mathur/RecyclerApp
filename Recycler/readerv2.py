import csv
import pandas as pd 
sheetdata = pd.read_csv("data.csv")
# name = data['Material Name'].tolist()
# print(name)
data = sheetdata.drop(['Material Name','Stream Name','Drop Off Instructions'],axis=1)
print(data)
mystring = 'Dandelion' # get input from searchbar as search value

# result = data['Material Title'].where(data['Material Title'] == mystring.capitalize())
# result = data[['Material Title'] == mystring]
result = data.loc[data['Material Title'] == mystring]
print(result['Stream Title'][0])


# data['Material Title'].where(searchval)
# data['Material Synonym'][index].split(",")
# or data['Material Synonym'].where(searchval) --> do it as a for loop instead of .where function to use split

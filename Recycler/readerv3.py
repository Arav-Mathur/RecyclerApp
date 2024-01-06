import csv
import pandas as pd 
class Reader:
    def __init__(self):
        sheetdata = pd.read_csv("data.csv")
        # name = data['Material Name'].tolist()
        # print(name)
        self.data = sheetdata.drop(['Material Name','Stream Name','Drop Off Instructions'],axis=1)
        self.searchvalue = ''
        #print(data)
    def find(self, searchval):
        # mystring = 'Dandelion' 
        # get input from searchbar as search value

        # result = data['Material Title'].where(data['Material Title'] == mystring.capitalize())
        # result = data[['Material Title'] == mystring]
        try:
            self.searchvalue = str(searchval).capitalize()
            result = self.data.loc[self.data['Material Title'] == self.searchvalue]
            print(result['Stream Title'][0])
        except KeyError as e:
            print(e)
        # data['Material Title'].where(searchval)
        # data['Material Synonym'][index].split(",")
        # or data['Material Synonym'].where(searchval) --> do it as a for loop instead of .where function to use split
r1 = Reader()
r1.find('dandelion')
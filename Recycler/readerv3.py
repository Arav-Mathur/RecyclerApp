import csv
import pandas as pd 
import math
class Reader:
    def __init__(self):
        self.sheetdata = pd.read_csv("data.csv")
        self.data = self.sheetdata.drop(['Material Name','Stream Name','Drop Off Instructions'],axis=1)
        self.searchvalue = ''
    def find(self, searchval):
        try:
            self.searchvalue = str(searchval)
            result = self.data.loc[self.data['Material Title'] == self.searchvalue]
            print(result['Stream Title'].values[0])
        except:
            #print("Sorry we could not find your item in the database, please look at your local website for more information!")
            # print(e)
            # return 0
            synonyms = pd.DataFrame(columns = ['Material Title','Material Synonyms'])
            #print(synonyms)
            mysyn = self.data['Material Synonyms'].tolist()
            #print(mysyn)
            for i in range(len(mysyn)):
                if not(pd.isnull(mysyn[i])):
                    #synonyms.add(mysyn[i].split(","))
                    #print(mysyn[i].split(","))
                    synonyms = synonyms.concat({'Material Title':self.data['Material Title'][i],'Material Synonyms':mysyn[i].split(",")})
            print(synonyms)
            # or data['Material Synonym'].where(searchval) --> do it as a for loop instead of .where function to use split
r1 = Reader()
#r1.find(r1.sheetdata['Material Title'][144])
r1.find("amongus")
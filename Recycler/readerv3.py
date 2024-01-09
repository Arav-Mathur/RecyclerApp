import csv
import pandas as pd 
import math
class Reader:
    def __init__(self):
        self.sheetdata = pd.read_csv("data.csv")
        self.data = self.sheetdata.drop(['Material Name','Stream Name','Drop Off Instructions'],axis=1)
        self.searchvalue = ''
        self.data['Material Synonyms'] = self.data['Material Synonyms'].apply(lambda x: x.split(',') if not pd.isnull(x) else x)
        
    def find(self, searchval):
        try:
            self.searchvalue = str(searchval)
            result = self.data.loc[self.data['Material Title'] == self.searchvalue]
            print(result['Stream Title'])
        except:
            #try:
                result_rows = []
                for index, row in self.data.iterrows():
                    material_synonyms_list = row['Material Synonyms']
                    if isinstance(material_synonyms_list, list) and self.searchvalue in material_synonyms_list:
                        result_rows.append(row)
                result = pd.DataFrame(result_rows)
                print(result['Stream Title'])
            # except:
            #     print("Sorry we could not find your item in the database, please look at your local website for more information!")
            # or data['Material Synonym'].where(searchval) --> do it as a for loop instead of .where function to use split
r1 = Reader()
#r1.find(r1.sheetdata['Material Title'][144])
r1.find("coffee creamer")
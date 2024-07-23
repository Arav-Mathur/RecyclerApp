import pandas as pd 
from flask import Flask, request, jsonify
class Reader:
    def __init__(self):
        self.sheetdata = pd.read_csv("data.csv")
        self.data = self.sheetdata.drop(['Material Name','Stream Name','Drop Off Instructions'],axis=1)
        self.searchvalue = ''
        self.data['Material Synonyms'] = self.data['Material Synonyms'].apply(lambda x: x.split(',') if not pd.isnull(x) else x)
        
    def find(self, searchval):
        try:
            self.searchvalue = str(searchval).strip().lower()
            result = self.data[self.data['Material Title'].str.lower() == self.searchvalue]
            return list(result['Stream Title'])
        except:
            #try:
                self.searchvalue = str(searchval).strip().lower()
                result_rows = []
                for index, row in self.data.iterrows():
                    material_synonyms_list = row['Material Synonyms']
                    if isinstance(material_synonyms_list, list) and self.searchvalue in material_synonyms_list:
                        result_rows.append(row)
                result = pd.DataFrame(result_rows)
                return list(result['Stream Title'])
app = Flask(__name__)
reader = Reader()

@app.route('/find', methods=['POST'])
def find():
    try:
        data = request.get_json()
        search_val = data['search_val']
        if not search_val:
            return jsonify(error="Missing 'search_val'"), 400
        print(f'Received request with search value: {search_val}')
        result = reader.find(search_val)
        print('Sending response:', result)
        return jsonify(result=result)
    except Exception as e:
        return jsonify(error=str(e))

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
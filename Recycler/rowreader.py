import csv
import pandas as pd 
rows = []
with open("data.csv","r") as f:
  csvreader = csv.reader(f)
  for row in csvreader:
    rows.append(row)
headers = rows[0]
recycleData = rows[1:]
print(headers)

tempRecycle = list(recycleData)
headers.pop(0)
headers.pop(3)
headers.pop(headers.index("Drop Off Instructions"))
for item in recycleData:
    item[item.index('')] = 'nan'
    item.pop(0)
    item.pop(3)
    try:
        item.pop(5)
    except IndexError as e:
       continue
    continue
for item in recycleData:
    if len(item) > 4:
       print(recycleData[0])

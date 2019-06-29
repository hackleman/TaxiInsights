import csv
import pandas as pd

filename = '../data/greentrips-1.csv'

urls = [
    'https://s3.amazonaws.com/nyc-tlc/trip+data/green_tripdata_2018-01.csv',
    'https://s3.amazonaws.com/nyc-tlc/trip+data/green_tripdata_2018-02.csv',
    'https://s3.amazonaws.com/nyc-tlc/trip+data/green_tripdata_2018-03.csv',
    'https://s3.amazonaws.com/nyc-tlc/trip+data/green_tripdata_2018-04.csv',
    'https://s3.amazonaws.com/nyc-tlc/trip+data/green_tripdata_2018-05.csv',
    'https://s3.amazonaws.com/nyc-tlc/trip+data/green_tripdata_2018-06.csv',
    'https://s3.amazonaws.com/nyc-tlc/trip+data/green_tripdata_2018-07.csv',
    'https://s3.amazonaws.com/nyc-tlc/trip+data/green_tripdata_2018-08.csv',
    'https://s3.amazonaws.com/nyc-tlc/trip+data/green_tripdata_2018-09.csv',
    'https://s3.amazonaws.com/nyc-tlc/trip+data/green_tripdata_2018-10.csv',
    'https://s3.amazonaws.com/nyc-tlc/trip+data/green_tripdata_2018-11.csv',
    'https://s3.amazonaws.com/nyc-tlc/trip+data/green_tripdata_2018-12.csv'
    ]

def invalid(file):
    data = pd.read_csv(file)
    data = data.iloc[:, [1, 2, 5, 6, 8, 16]]
    data.columns = ['pickuptime', 'dropofftime','pickupzone', 'dropoffzone',  'distance', 'totalcost']
    print(data[data['distance'].le(0) | data['totalcost'].le(0)])

def loadfile():
    for url in urls:
        data = pd.read_csv(url)
        # select and name columns
        data = data.iloc[:, [1, 2, 5, 6, 8, 16]]
        data.columns = ['pickuptime', 'dropofftime','pickupzone', 'dropoffzone',  'distance', 'totalcost']

        ### clean data with null values
        # print(data[data.isnull().any(axis=1)])
        # print(data[data['totalcost'].le(0)])

        ### clean invalid distance and cost values
        data = data[data['distance'].gt(0) & data['totalcost'].gt(0)]

        ### select every nth row
        data = data.iloc[::2]

        ### write to file
        data.to_csv(filename, mode='a', header=False, index=False)

def addindex(file):
    data = pd.read_csv(file)
    data.to_csv(file, header=False)


import csv
import pandas as pd
import numpy as np

filename = '../data/fhvtrips.csv'

urls = [
    'https://s3.amazonaws.com/nyc-tlc/trip+data/fhv_tripdata_2018-01.csv',
    'https://s3.amazonaws.com/nyc-tlc/trip+data/fhv_tripdata_2018-02.csv',
    'https://s3.amazonaws.com/nyc-tlc/trip+data/fhv_tripdata_2018-03.csv',
    'https://s3.amazonaws.com/nyc-tlc/trip+data/fhv_tripdata_2018-04.csv',
    'https://s3.amazonaws.com/nyc-tlc/trip+data/fhv_tripdata_2018-05.csv',
    'https://s3.amazonaws.com/nyc-tlc/trip+data/fhv_tripdata_2018-06.csv',
    'https://s3.amazonaws.com/nyc-tlc/trip+data/fhv_tripdata_2018-07.csv',
    'https://s3.amazonaws.com/nyc-tlc/trip+data/fhv_tripdata_2018-08.csv',
    'https://s3.amazonaws.com/nyc-tlc/trip+data/fhv_tripdata_2018-09.csv',
    'https://s3.amazonaws.com/nyc-tlc/trip+data/fhv_tripdata_2018-10.csv',
    'https://s3.amazonaws.com/nyc-tlc/trip+data/fhv_tripdata_2018-11.csv',
    'https://s3.amazonaws.com/nyc-tlc/trip+data/fhv_tripdata_2018-12.csv'
    ]

def invalid(file):
    data = pd.read_csv(file)
    data = data.iloc[:, [0, 1, 2, 3]]
    data.columns = ['pickuptime', 'dropofftime','pickupzone', 'dropoffzone']
    print(data.shape)
    print(data[data.notnull().all(axis=1)])

def convertint(file):
    data = pd.read_csv(file)
    data.columns = ['index', 'pickuptime', 'dropofftime','pickupzone', 'dropoffzone']
    ints = ['pickupzone', 'dropoffzone']
    data[ints] = data[ints].applymap(np.int64)
    data.to_csv(filename, header=False, index=False)
    
def loadfile():
    for url in urls:
        data = pd.read_csv(url)
        # select and name columns
        data = data.iloc[:, [0, 1, 2, 3]]
        data.columns = ['pickuptime', 'dropofftime','pickupzone', 'dropoffzone']

        ### clean data with null values
        # print(data[data.isnull().any(axis=1)])
        # print(data[data['totalcost'].le(0)])

        ### clean invalid distance and cost values
        data = data[data.notnull().all(axis=1)]

        ### select every nth row
        n = int(data.shape[0] / 1000000)
        data = data.iloc[::n]

        ### write to file
        data.to_csv(filename, mode='a', header=False, index=False)

def addindex(file):
    data = pd.read_csv(file)
    data.to_csv(file, header=False)

convertint(filename)
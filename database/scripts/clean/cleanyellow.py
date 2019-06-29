import csv
import pandas as pd

filename = '../data/yellowtrips-1.csv'
urls = [
    'https://s3.amazonaws.com/nyc-tlc/trip+data/yellow_tripdata_2018-01.csv',
    'https://s3.amazonaws.com/nyc-tlc/trip+data/yellow_tripdata_2018-02.csv',
    'https://s3.amazonaws.com/nyc-tlc/trip+data/yellow_tripdata_2018-03.csv',
    'https://s3.amazonaws.com/nyc-tlc/trip+data/yellow_tripdata_2018-04.csv',
    'https://s3.amazonaws.com/nyc-tlc/trip+data/yellow_tripdata_2018-05.csv',
    'https://s3.amazonaws.com/nyc-tlc/trip+data/yellow_tripdata_2018-06.csv',
    'https://s3.amazonaws.com/nyc-tlc/trip+data/yellow_tripdata_2018-07.csv',
    'https://s3.amazonaws.com/nyc-tlc/trip+data/yellow_tripdata_2018-08.csv',
    'https://s3.amazonaws.com/nyc-tlc/trip+data/yellow_tripdata_2018-09.csv',
    'https://s3.amazonaws.com/nyc-tlc/trip+data/yellow_tripdata_2018-10.csv',
    'https://s3.amazonaws.com/nyc-tlc/trip+data/yellow_tripdata_2018-11.csv',
    'https://s3.amazonaws.com/nyc-tlc/trip+data/yellow_tripdata_2018-12.csv']

data = pd.read_csv(filename)
data.to_csv(filename)
# for url in urls:
#     data = pd.read_csv(url)
#     # select and name columns
#     data = data.iloc[:, [1, 2, 4, 7, 8, 16]]
#     data.columns = ['pickuptime', 'dropofftime', 'distance',
#     'pickupzone', 'dropoffzone', 'totalcost']

#     ### clean data with null values
#     # print(data[data.isnull().any(axis=1)])
#     # print(data[data['totalcost'].le(0)])

#     ### clean invalid distance and cost values
#     data = data[data['distance'].gt(0) & data['totalcost'].gt(0)]

#     ### select every nth row
#     data = data.iloc[::8]

#     ### write to file

#     data.to_csv(filename, mode='a', header=False, index=False)

# print(data)
# 1066 55376
# with open(filename, 'r') as source:
#     reader = csv.reader(source)
#     with open(result, 'w', newline='') as finish:
#         writer = csv.writer(finish)
#         for r in reader:
#             writer.writerow((r[1], r[2], r[4], r[7], r[8], r[16]))


"""
VendorID,
tpep_pickup_datetime,
tpep_dropoff_datetime,
passenger_count,
trip_distance,
RatecodeID,
store_and_fwd_flag,
PULocationID,
DOLocationID,
payment_type,
fare_amount,
extra,
mta_tax,
tip_amount,
tolls_amount,
improvement_surcharge,
total_amount
"""
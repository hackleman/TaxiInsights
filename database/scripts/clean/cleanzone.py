import os
import csv

invalid = ['NV', 'N/A', 'Unknown', 'NA']
flag = 1

with open(rb'zone.csv', 'r') as infile, open(rb'zones.csv', 'w', newline='') as outfile:
    
    reader = csv.reader(infile)
    writer = csv.writer(outfile)

    for row in reader:
        flag = 1
        for word in row:
            if (word in invalid):
                flag = 0
        if flag:
            writer.writerow(row)


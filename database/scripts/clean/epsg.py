from pyproj import Proj, transform
import json
import numpy

#defineprojections
wgs84 = Proj(init = 'epsg:4326')
IrishGrid = Proj(init = 'epsg:2263')

#load in data
with open('practice.json', 'r') as f:
    data = json.load(f)
print('opened file')
#traverse data in json string
for feature in data['features']:
    print(feature['geometry']['type']) 
    print(feature['geometry']['coordinates']) 
    #all coordinates
    coords = feature['geometry']['coordinates']

    #coordList is for each individual polygon
    for coordList in coords:
        print(feature['properties']['OBJECTID'])
        #each point
        for coordPair in coordList:
            
            x1 = coordPair[0]
            y1 = coordPair[1]
            
            lat_grid, lon_grid = numpy.meshgrid(x1, y1)
            #do transformation
            coordPair[0],coordPair[1] = transform(IrishGrid,wgs84,lat_grid, lon_grid)

#writereprojected json to new file
with open('practice2.json', 'w+') as f:
    f.write(json.dumps(data))
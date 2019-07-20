import psycopg2
import os
import sys

# connect to database
# conn = psycopg2.connect("host=localhost dbname=postgres user=postgres password=1234")
# cur = conn.cursor()
def view(table):
    # VIEW A TABLE
    conn = psycopg2.connect("host=localhost dbname=postgres user=postgres password=1234")
    cur = conn.cursor()
    cur.execute('SELECT * FROM '+ table)
    all = cur.fetchall()
    print(all)

def delete(name):
    # DELETE A TABLE 
    cur.execute('DROP TABLE ' + name)
    conn.commit()

def createtable(name):
    # CREATE A TABLE 
    cur.execute("""
    CREATE TABLE """ + name + """(
    TRIPID integer PRIMARY KEY,
    PICKUPTIME timestamp,
    DROPOFFTIME timestamp,
    PICKUPZONE smallint,
    DROPOFFZONE smallint)""")
    conn.commit()

def insert(file, header=True, tablename=''):
    # INSERT CSV INTO Table
    with open(file, 'r') as f:            
        if header: next(f)
        cur.copy_from(f, tablename, sep = ',')
        conn.commit()

# delete('FHVTRIP')
# view('FHVTRIP')
view('zones')
# createtable('FHVTRIP')
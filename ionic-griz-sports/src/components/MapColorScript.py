import pyodbc
import os
from dotenv import load_dotenv

# Load environment variables from the .env file
load_dotenv()

# Database connection parameters from .env
server = os.getenv('DB_SERVER')
database = os.getenv('DB_DATABASE')
username = os.getenv('DB_USERNAME')
password = os.getenv('DB_PASSWORD')
driver = '{ODBC Driver 17 for SQL Server}'


# Function to establish the database connection
def establish_connection():
    connection_string = f'DRIVER={driver};SERVER={server};PORT=1433;DATABASE={database};UID={username};PWD={password}'
    try:
        conn = pyodbc.connect(connection_string)
        print("Connection Successful")
        return conn
    except pyodbc.Error as ex:
        sqlstate = ex.args[1]
        print(f"Connection failed: {sqlstate}")
        return None

# Function to fetch the vacancy data from the database
def fetch_vacancy_data(conn):
    query = """
    SELECT LotName, PredictedVacancy
    FROM ParkingLots 
    """
    cursor = conn.cursor()
    cursor.execute(query)
    rows = cursor.fetchall()
    
    # Fetch results into a list of dictionaries
    vacancy_data = []
    for row in rows:
        lot_id = row[0]
        vacancy = row[1]
        vacancy_data.append({'lot_id': lot_id, 'vacancy': vacancy})
    
    cursor.close()
    return vacancy_data

# Function to save the vacancy data to a text file
def save_vacancy_to_file(vacancy_data):
    # Navigate from src/components/ to public/
    output_path = os.path.join(os.path.dirname(__file__), '..', '..', 'public', 'vacancy_data.txt')
    output_path = os.path.abspath(output_path)  # Make sure it's an absolute path

    with open(output_path, 'w') as f:
        for lot in vacancy_data:
            # Write each lot's vacancy data as 'lot_id:vacancy'
            f.write(f"{lot['lot_id']}:{lot['vacancy']}\n")
    
    print(f"Vacancy data saved to {output_path}")

# Main function to run the script
def main():
    # Establish connection to the database
    conn = establish_connection()
    if conn:
        # Fetch vacancy data
        vacancy_data = fetch_vacancy_data(conn)
        if vacancy_data:
            # Save the fetched data to a text file
            save_vacancy_to_file(vacancy_data)
        else:
            print("No vacancy data available.")
        conn.close()  # Don't forget to close the connection

if __name__ == "__main__":
    main()

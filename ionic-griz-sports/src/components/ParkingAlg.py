# _________________________________________________________________________________________________________________________
# Initial Setup
'''
import pyodbc
from datetime import datetime


# Define the connection parameters
server = 'griz-sports-server.database.windows.net'
database = 'GrizSportsDB'
username = 'EricFrazer44'
password = 'Boomer4409!'
driver = '{ODBC Driver 17 for SQL Server}'
# _________________________________________________________________________________________________________________________
# Establish the connection
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


# _________________________________________________________________________________________________________________________
# Functions

def AreTheyWinning(table_name, game_date):
    # Function returns True if the team has won at least half of their games in the current season and False otherwise.
    cursor = conn.cursor()
    
    # Count the number of wins
    win_query = f"SELECT COUNT(*) FROM {table_name} WHERE Result LIKE '%W%'"
    cursor.execute(win_query)
    wins = cursor.fetchone()[0]
    
    # Count the total number of games before the given date
    totalGames_query = f"SELECT COUNT(*) FROM {table_name} WHERE GameDate < ?"
    cursor.execute(totalGames_query, (game_date,))
    total_games = cursor.fetchone()[0]
    
    cursor.close()
    
    # Determine if wins are at least half of total games
    return wins >= total_games / 2 if total_games > 0 else False

    

def IsItRivalryGame(table_name, game_date):
    # Query to check if the opponent is listed as "Bobcats", "Montana State", or "MSU" in the row with the given date
    rivalry_keywords = ["Bobcats", "Montana State", "MSU"]
    cursor = conn.cursor()
        
    # Query to fetch the row corresponding to the given game_date
    query = f"SELECT * FROM {table_name} WHERE GameDate = ?"
    cursor.execute(query, (game_date,))
    row = cursor.fetchone()
    if row:  # If a row with the given date exists
        for keyword in rivalry_keywords:
            if any(keyword in str(cell) for cell in row):  # Check if any cell in the row contains a keyword
                cursor.close()
                return True
        
    cursor.close()
    return False

def PopularityWeight(table_name, game_date):
    # Function returns a weight based on the popularity of the sport for the given table and date
    # Query to check the sport popularity
    cursor = conn.cursor()
    
    # Query to fetch the row corresponding to the given game_date
    query = f"SELECT * FROM {table_name} WHERE GameDate = ?"
    cursor.execute(query, (game_date,))
    row = cursor.fetchone()
    
    if row:  # If a row with the given date exists
        sport_popularity = {
            "Football": 10,
            "MensBasketballSchedule": 9,
            "WomensBasketballSchedule": 8,
            "MensTrack": 7,
            "WomensTrack": 6,
            "Soccer": 5,
            "Volleyball": 4,
            "Softball": 3,
            "MensTennis": 2,
            "WomensTennis": 1,
            "Golf": 0
        }
        
        for sport, weight in sport_popularity.items():
            if sport in str(row):
                cursor.close()
                return weight
        
        cursor.close()
        return 0

def MultipleGamesDay(table_names, game_date):
    # Function returns True if multiple games are happening on the same day across all tables
    total_game_count = 0
    cursor = conn.cursor()
    
    for table_name in table_names:
        query = f"SELECT COUNT(*) FROM {table_name} WHERE CAST(GameDate AS NVARCHAR) = ?"
        cursor.execute(query, (game_date,))
        game_count = cursor.fetchone()[0]
        total_game_count += game_count
    
    cursor.close()
    
    return total_game_count > 1



if __name__ == "__main__":
    conn = establish_connection()  # Call the function to establish the connection
    Date = datetime.now().strftime("%Y-%m-%d")   #"2024-09-21" Get the current date in YYYY-MM-DD format
    VacVar = 0.0

    # List of all potential table names in the database
    table_names = [
        "Football", "MensBasketballSchedule", "WomensBasketballSchedule", 
        "MensTrack", "WomensTrack", "Soccer", "Volleyball", 
        "Softball", "MensTennis", "WomensTennis", "Golf"
    ]

    # Find tables with games on the given date
    tables_with_games = []
    cursor = conn.cursor()

    for table_name in table_names:
        query = f"SELECT COUNT(*) FROM {table_name} WHERE GameDate LIKE ?"
        cursor.execute(query, (Date,))
        game_count = cursor.fetchone()[0]
        if game_count > 0:
            tables_with_games.append(table_name)

    cursor.close()

    # Print the tables with games on the given date
    print("Tables with games on the given date:", tables_with_games)
    Vacancy = 0
    # Loop through each matched table and calculate VacVar
    for table_name in tables_with_games:
        VacVar = 1.0  # Start with 100% vacancy

        if AreTheyWinning(table_name, Date):
            VacVar -= 0.3  
        if IsItRivalryGame(table_name, Date):
            VacVar -= 0.6  
        if PopularityWeight(table_name, Date) > 5:  
            VacVar -= 0.3  
        if MultipleGamesDay(table_names, Date):
            VacVar -= 0.4  

        # Ensure VacVar doesn't drop below 0.0
        VacVar = max(0.0, VacVar)

        # Print the VacVar for the current table
        print(f"Vacancy Variable (VacVar) for {table_name} on {Date}: {VacVar:.2%}")
        Vacancy += VacVar
    
    if "Football" in tables_with_games:
        Vacancy = 0.95
    elif tables_with_games:
        Vacancy = Vacancy / len(tables_with_games)
    else:
        Vacancy = 1.0  # Default to 100% vacancy if no games are found
    print(f"Overall Vacancy: {Vacancy:.2%}")

    update_query = "UPDATE ParkingLots SET PredictedVacancy = ? WHERE Sports LIKE ?"
    for table_name in tables_with_games:
        cursor = conn.cursor()
        params = (Vacancy, f"%{table_name}%")
        cursor.execute(update_query, params)  # Update the PredictedVacancy for the specific lot name
    conn.commit()
    
    conn.close()  # Close the connection
    '''
    
    #-----------------------------------------------------------------------------------------------------------------
    #Script with the Facade Pattern
    #------------------------------------------------------------------------------------------------------------------
   
import pyodbc
from datetime import datetime

class DatabaseConnection:
    def __init__(self, server, database, username, password, driver):
        self.connection_string = f'DRIVER={driver};SERVER={server};PORT=1433;DATABASE={database};UID={username};PWD={password}'
        self.conn = None

    def connect(self):
        try:
            self.conn = pyodbc.connect(self.connection_string)
            print("Connection Successful")
            return self.conn
        except pyodbc.Error as ex:
            print(f"Connection failed: {ex.args[1]}")
            return None

    def close(self):
        if self.conn:
            self.conn.close()

class GrizSportsAnalyzer:
    def __init__(self, connection):
        self.conn = connection

    def are_they_winning(self, table_name, game_date):
        cursor = self.conn.cursor()
        win_query = f"SELECT COUNT(*) FROM {table_name} WHERE Result LIKE '%W%'"
        cursor.execute(win_query)
        wins = cursor.fetchone()[0]

        total_query = f"SELECT COUNT(*) FROM {table_name} WHERE GameDate < ?"
        cursor.execute(total_query, (game_date,))
        total_games = cursor.fetchone()[0]
        cursor.close()

        return wins >= total_games / 2 if total_games > 0 else False

    def is_it_rivalry_game(self, table_name, game_date):
        rivalry_keywords = ["Bobcats", "Montana State", "MSU"]
        cursor = self.conn.cursor()
        query = f"SELECT * FROM {table_name} WHERE GameDate = ?"
        cursor.execute(query, (game_date,))
        row = cursor.fetchone()
        cursor.close()

        if row:
            return any(keyword in str(cell) for keyword in rivalry_keywords for cell in row)
        return False

    def popularity_weight(self, table_name, game_date):
        cursor = self.conn.cursor()
        query = f"SELECT * FROM {table_name} WHERE GameDate = ?"
        cursor.execute(query, (game_date,))
        row = cursor.fetchone()
        cursor.close()

        sport_popularity = {
            "Football": 10, "MensBasketballSchedule": 9, "WomensBasketballSchedule": 8,
            "MensTrack": 7, "WomensTrack": 6, "Soccer": 5, "Volleyball": 4,
            "Softball": 3, "MensTennis": 2, "WomensTennis": 1, "Golf": 0
        }

        if row:
            for sport, weight in sport_popularity.items():
                if sport in str(row):
                    return weight
        return 0

    def multiple_games_day(self, table_names, game_date):
        total_game_count = 0
        cursor = self.conn.cursor()

        for table_name in table_names:
            query = f"SELECT COUNT(*) FROM {table_name} WHERE CAST(GameDate AS NVARCHAR) = ?"
            cursor.execute(query, (game_date,))
            total_game_count += cursor.fetchone()[0]

        cursor.close()
        return total_game_count > 1

    def get_tables_with_games(self, table_names, game_date):
        tables = []
        cursor = self.conn.cursor()

        for table in table_names:
            query = f"SELECT COUNT(*) FROM {table} WHERE GameDate LIKE ?"
            cursor.execute(query, (game_date,))
            if cursor.fetchone()[0] > 0:
                tables.append(table)

        cursor.close()
        return tables

    def update_vacancy(self, table_names, game_date):
        tables_with_games = self.get_tables_with_games(table_names, game_date)
        print("Tables with games on the given date:", tables_with_games)

        total_vacancy = 0

        for table in tables_with_games:
            vac_var = 1.0
            if self.are_they_winning(table, game_date):
                vac_var -= 0.3
            if self.is_it_rivalry_game(table, game_date):
                vac_var -= 0.6
            if self.popularity_weight(table, game_date) > 5:
                vac_var -= 0.3
            if self.multiple_games_day(table_names, game_date):
                vac_var -= 0.4

            vac_var = max(0.0, vac_var)
            print(f"Vacancy Variable (VacVar) for {table} on {game_date}: {vac_var:.2%}")
            total_vacancy += vac_var

        if "Football" in tables_with_games:
            final_vacancy = 0.95
        elif tables_with_games:
            final_vacancy = total_vacancy / len(tables_with_games)
        else:
            final_vacancy = 1.0

        print(f"Overall Vacancy: {final_vacancy:.2%}")

        update_query = "UPDATE ParkingLots SET PredictedVacancy = ? WHERE Sports LIKE ?"
        for table in tables_with_games:
            cursor = self.conn.cursor()
            cursor.execute(update_query, (final_vacancy, f"%{table}%"))
        self.conn.commit()


# ____________________________________________________________________________
# Main Driver

if __name__ == "__main__":
    # Define DB credentials
    db_config = {
        "server": "griz-sports-server.database.windows.net",
        "database": "GrizSportsDB",
        "username": "EricFrazer44",
        "password": "Boomer4409!",
        "driver": "{ODBC Driver 17 for SQL Server}"
    }

    # Connect to DB
    db = DatabaseConnection(**db_config)
    conn = db.connect()

    if conn:
        analyzer = GrizSportsAnalyzer(conn)

        game_date = datetime.now().strftime("%Y-%m-%d")
        table_names = [
            "Football", "MensBasketballSchedule", "WomensBasketballSchedule",
            "MensTrack", "WomensTrack", "Soccer", "Volleyball",
            "Softball", "MensTennis", "WomensTennis", "Golf"
        ]

        analyzer.update_vacancy(table_names, game_date)
        db.close()



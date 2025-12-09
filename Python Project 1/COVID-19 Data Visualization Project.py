# COVID-19 Data Visualization Project (Original)
# Author: Shawn Kazi Md Kamrul Islam 尚杰

import requests
import pandas as pd
import matplotlib.pyplot as plt

# Use a reliable public API
url = "https://disease.sh/v3/covid-19/countries"

try:
    response = requests.get(url, timeout=10)
    data = response.json()

    # Convert to DataFrame
    df = pd.DataFrame(data)

    # Select top 10 countries by total cases
    top_countries = df.sort_values("cases", ascending=False).head(10)

    # Visualization 1: Bar chart of top 10 countries
    plt.figure(figsize=(10, 6))
    plt.bar(top_countries["country"], top_countries["cases"], color='orange')
    plt.title("Top 10 Countries by Total COVID-19 Cases", fontsize=14)
    plt.xlabel("Country")
    plt.ylabel("Total Cases")
    plt.xticks(rotation=45)
    plt.tight_layout()
    plt.show()

    # Visualization 2: Pie chart (distribution of deaths)
    plt.figure(figsize=(8, 8))
    plt.pie(top_countries["deaths"], labels=top_countries["country"],
            autopct='%1.1f%%', startangle=140)
    plt.title("COVID-19 Death Distribution among Top 10 Countries")
    plt.show()

except Exception as e:
    print("Error fetching or visualizing data:", e)

import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error

# 6. Sample Data: House size (in sq. ft.) and house price (in thousands)
# In a real scenario, this would be loaded from a file
X = np.array([1400, 1600, 1700, 1875, 1100, 1550, 2350, 2450, 1425, 1700]).reshape(-1, 1) # Feature (size)
y = np.array([245, 312, 279, 308, 199, 219, 405, 324, 319, 255]) # Target (price)

# Split the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Initialize the model
model = LinearRegression()

# Train the model on the training data
model.fit(X_train, y_train)

# Make predictions on the test data
y_pred = model.predict(X_test)

# Evaluate the model
mse = mean_squared_error(y_test, y_pred)
print(f"--- Linear Regression Model ---")
print(f"Intercept: {model.intercept_}")
print(f"Coefficient: {model.coef_[0]}")
print(f"Mean Squared Error: {mse:.2f}")

# Predict the price of a new house (e.g., 2000 sq. ft.)
new_house_size = np.array([[2000]])
predicted_price = model.predict(new_house_size)
print(f"\nPredicted price for a 2000 sq. ft. house: ${predicted_price[0]:.2f}k")
import matplotlib.pyplot as plt
from sklearn.datasets import load_iris
from sklearn.cluster import KMeans
from sklearn.preprocessing import StandardScaler
import pandas as pd

# Load the Iris dataset
iris = load_iris()
df = pd.DataFrame(data=iris.data, columns=iris.feature_names)

print("Iris Dataset (first 5 rows):\n", df.head())

# Standardize the features
scaler = StandardScaler()
df_std = scaler.fit_transform(df)

# Apply K-Means clustering
kmeans = KMeans(n_clusters=3, random_state=42)
kmeans.fit(df_std)
labels = kmeans.labels_

print("\nCluster labels:\n", labels)

# Plot the clusters
plt.figure(figsize=(8, 6))
plt.scatter(df_std[:, 0], df_std[:, 1], c=labels, cmap='viridis', label="Data Points")
plt.scatter(kmeans.cluster_centers_[:, 0], kmeans.cluster_centers_[:, 1],
            s=300, c='red', marker='X', label='Centroids')

plt.title("K-Means Clustering on Iris Dataset")
plt.xlabel("Sepal Length (Standardized)")
plt.ylabel("Sepal Width (Standardized)")
plt.legend()
plt.show()

import pandas as pd
import io
import seaborn as sns
import matplotlib.pyplot as plt
import numpy as np

# Sample numeric dataset
# In a real case, you'd use your own dataset with several numerical columns.
data = {
    'feature1': np.random.rand(100) * 100,
    'feature2': np.random.rand(100) * 50,
    'feature3': np.random.rand(100) * 25,
    'target': np.random.rand(100) * 500
}
df = pd.DataFrame(data)
df['feature3'] = df['feature3'] + df['feature1'] * 0.5 # Create some correlation


# 4. Create a correlation matrix
correlation_matrix = df.corr()

print("--- Correlation Matrix ---")
print(correlation_matrix)


# Create a heatmap
plt.figure(figsize=(8, 6))
sns.heatmap(correlation_matrix, annot=True, cmap='coolwarm', fmt=".2f")
plt.title('Correlation Heatmap')
plt.show()
import pandas as pd

# Sample DataFrame
df = pd.DataFrame({
    'Color': ['Red', 'Blue', 'Green', 'Blue', 'Red']
})

# Generate one-hot columns in place
df_ohe = pd.get_dummies(
    df,
    columns=['Color'],      # column to encode
    prefix='Color',         # prefix for new columns
    drop_first=False,       # keep all dummy columns
    dtype=int               # ensure values are integers (0/1)
)

print(df_ohe)
import pandas as pd
from sklearn.preprocessing import LabelEncoder

# Sample DataFrame
df = pd.DataFrame({
    'Color': ['Red', 'Blue', 'Green', 'Blue', 'Red']
})

# Initialize the encoder
le = LabelEncoder()

# Fit to the column and transform
df['Color_encoded'] = le.fit_transform(df['Color'])

print(df)

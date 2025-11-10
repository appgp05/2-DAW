import pandas as pd

# Crear diccionario con datos
data = {
    'Nombre': ['Ana', 'Luis', 'Pedro', 'Maria'],
    'Edad': [23, 35, 41, 29],
    'Ciudad': ['Madrid', 'Barcelona', 'Sevilla', 'Valencia'],
    'Puntaje': [85, 90, 95, 88]
}

# Crear el DataFrame
df = pd.DataFrame(data)
print(df)

# Acceder a la columna 'Edad'
print(df['Edad'])

# Acceder a la segunda fila (índice 1)
print(df.iloc[1])

# Filtrar filas donde Edad > 30
filtered_df = df[df['Edad'] > 30]
print(filtered_df)

# Ordenar por Puntaje de forma descendente
sorted_df = df.sort_values('Puntaje', ascending=False)
print(sorted_df)

# Calcular la media de la columna 'Edad'
mean_age = df['Edad'].mean()
print(mean_age)

# Agregar una nueva columna 'Experiencia'
df['Experiencia'] = [2, 10, 15, 5]
print(df)

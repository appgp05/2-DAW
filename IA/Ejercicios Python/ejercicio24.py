def sumaYProducto(a, b):
    suma = a + b
    producto = a * b
    return [suma, producto]

suma, producto = sumaYProducto(10, 5)
print(f"La suma es {suma} y el producto es {producto}")
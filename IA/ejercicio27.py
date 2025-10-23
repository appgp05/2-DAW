def sumar(*numeros):
    for numero in numeros:
        print(numero)
    return sum(numeros)
print(sumar(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))
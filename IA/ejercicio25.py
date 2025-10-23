def factorial(i):
    if i == 0:
        return 1
    else:
        return i * factorial(i - 1)

numero = 4

valorFactorial = factorial(numero)

print(f"El facotrial de {numero} es {valorFactorial}")
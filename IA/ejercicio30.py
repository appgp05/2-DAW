def a(texto):
    def b(textoEditado):
        print(textoEditado)

    b(texto + " es el texto editado")

a("Hola")
import pandas as pd
import time as t

df = pd.read_excel('pokemon_data.xlsx')
pd.set_option('display.max_columns', None)
pd.set_option('display.max_rows', None)


class Main:

    def consulta(self):
        lista_opcoes = []
        print("Você escolheu a opção consulta.")
        print("Nome das colunas: ")
        for i in range(len(df.columns)):
            print(df.columns[i])

        t.sleep(1.5)
        print("Consultas: "
              "\n[1] - Por Nome"
              "\n[2] - Por Tipo 1"
              "\n[3] - Por Geração"
              "\n[4] - Por Dano maior que 100")

        opcao_consulta = input("Qual tipo de consulta você deseja fazer? ")

        if opcao_consulta == '1':
            nome = input("Digite o nome que deseja buscar: ")

            for zimbas in df['Name']:
                if zimbas == nome:
                    print(df.loc[df['Name'] == nome])

    def adicionar(self):
        print()

    def remover(self):
        print()

    def atualizar(self):
        print()

    def start(self):
        print("-" * 34)
        print("\n\t Projeto CRUD em python\n")
        print("-" * 34)

        t.sleep(2)
        print("Planilha pokemons!")
        print("Escolha uma opção: "
              "\n[1] - Consulta"
              "\n[2] - Adicionar dados"
              "\n[3] - Remover dados"
              "\n[4] - Atualizar dados"
              "\n[5] - Sair")

        while True:
            opcao_menu = input("\n-> ")

            if opcao_menu == '1':
                self.consulta()
                break
            elif opcao_menu == '2':
                self.adicionar()
                break

            elif opcao_menu == '3':
                self.remover()
                break

            elif opcao_menu == '4':
                self.atualizar()
                break

            elif opcao_menu == '5':
                print("Saindo do programa...")
                exit()
                break

            else:
                print("Opcão inválida")
                continue


if __name__ == "__main__":
    c = Main()
    c.start()

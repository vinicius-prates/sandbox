import numpy as np
import pandas as pd
import time as t

df1 = pd.read_excel('pokemon_data.xlsx')
pd.set_option('display.max_columns', None)
pd.set_option('display.max_rows', None)
df = df1.replace(np.nan, '', regex=True)


class Main:

    def consulta(self):
        print("Você escolheu a opção consulta.")
        print("Nome das colunas: ")

        t.sleep(1.5)
        while True:
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
                    else:
                        print("Ainda não existe esse pokemon!")

                yorno = input("Vocçe deseja realizar mais alguma consulta? (s/n)").lower()

                if yorno == 's':
                    self.consulta()
                else:
                    self.start()

            elif opcao_consulta == '2':
                tipo1 = input("Types 1:"
                              "\nGrass - Poison - Steel"
                              "\nFire - Ground"
                              "\nWater - Fighting"
                              "\nBug - Rock"
                              "\nNormal - Ghost"
                              "\nFairy  - Eletric"
                              "\nPsychic - Dragon"
                              "\nIce - Dark"
                              "\nDigite o Tipo 1 dos pokemons que deseja consultar: ")

                print(df.loc[df['Type 1'] == tipo1])

                yorno = input("Vocçe deseja realizar mais alguma consulta? (s/n)").lower()

                if yorno == 's':
                    self.consulta()
                else:
                    self.start()

            elif opcao_consulta == '3':
                geracao = int(input("Digite a geração de pokemons que deseja pesquisar (1/6): "))

                print(df.loc[df['Generation'] == geracao])

                yorno = input("Vocçe deseja realizar mais alguma consulta? (s/n)").lower()

                if yorno == 's':
                    self.consulta()
                else:
                    self.start()

            elif opcao_consulta == '4':

                print(df.loc[df['Attack'] >= 100])
                yorno = input("Vocçe deseja realizar mais alguma consulta? (s/n)").lower()

                if yorno == 's':
                    self.consulta()
                else:
                    self.start()
            else:
                print("Opção inválida!")
                continue

    def adicionar(self):
        print("Adicionando novo pokemon...")

        linha = len(df)+1

        for i in range(len(df.columns)):
            df.loc[linha, df.columns[i]] = input(f'Insira {df.columns[i]}: ')
            df.to_excel('pokemon_data.xlsx', index=False)

    def remover(self):
        opcao_remover = int(input("Digite o index da coluna que você deseja remover: "))

        print("Removendo a linha...")

        df.drop(df.index[opcao_remover])
        df.to_excel('pokemon_data.xlsx', index=False)
        self.start()

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

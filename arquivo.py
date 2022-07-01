import RPi.GPIO as GPIO
import time

pino_entrada = 23
pino_luz = 18

GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)
GPIO.setup(pino_entrada, GPIO.IN)
GPIO.setup(pino_luz, GPIO.OUT)


class Luz:
    vezes_pressionada = 0
    def __init__(self):
        pass
    
    @staticmethod
    def desligar():
        GPIO.output(pino_luz, 0)
        
    @staticmethod
    def ligar():
        GPIO.output(pino_luz, 1)
    
    def piscar(vezes, intervalo):
        pass


def pegar_um_click(opcao):
    down = False
    up = False
    while not up:
        nivel_logico = GPIO.input(pino_entrada)
        if (nivel_logico == GPIO.HIGH):
            if down and opcao == 1:
                Luz.ligar()
            else:
                down = True
        else:
            if down:
                up = True
        
        

def listeners_down_and_up():
    Luz.vezes_pressionada = 0
    while True:
        pegar_um_click(1)
        Luz.desligar()
        Luz.vezes_pressionada += 1
        print(f"clicks: {Luz.vezes_pressionada}")
        time.sleep(.1)
        
        
def modos_diferentes_contagem():
    Luz.vezes_pressionada = 0
    while True:
        pegar_um_click(0)
        Luz.vezes_pressionada += 1
        print(f"Ficando ligado por {Luz.vezes_pressionada} segundos.")
        Luz.ligar()
        time.sleep(Luz.vezes_pressionada)
        Luz.desligar()
        time.sleep(.1)


def main():
    print("<-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=->")
    print("Entre em qualquer um dos modos abaixo e para voltar ao menu pressione ctrl+C")
    print("Quer fazer oq amigao?")
    print("0 - Sair")
    print("1 - Testar botao contando clicks e percebendo quando vc aperta e quando solta, não tem problema segurar por muito tempo")
    print("2 - Testar o botao com múltiplos estados")
    option = int(input("===> "))
    if option == 0:
        exit()
    elif option == 1:
        try:
            listeners_down_and_up()
        except KeyboardInterrupt:
            main()
    elif option == 2:
        try:
            modos_diferentes_contagem()
        except KeyboardInterrupt:
            main()
    else:
        print("Selecionou uma opção inexistente amigao")
    main()
    
if __name__ == "__main__":
    while True:
        try:
            main()
        except KeyboardInterrupt:
            main()


import RPi.GPIO as GPIO
import sys
import time

#Configuration GPIO
POWER_PIN = 23  #GPIO 23 : pin 16
GROUND_PIN = 6  #GROUND : pin 6

GPIO.setmode(GPIO.BCM)
GPIO.setup(POWER_PIN, GPIO.OUT)

def démarrer_pc():
    GPIO.output(POWER_PIN, GPIO.LOW)
    time.sleep(0.5)  # Simule un appui court sur le bouton d'alimentation
    GPIO.output(POWER_PIN, GPIO.HIGH)

def éteindre_pc():
    GPIO.output(POWER_PIN, GPIO.LOW)
    time.sleep(5)  # Simule un appui long pour éteindre le PC
    GPIO.output(POWER_PIN, GPIO.HIGH)

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python3 control_pc.py [démarrage|éteindre]")
        sys.exit(1)

    action = sys.argv[1]

    try:
        if action == "démarrage":
            démarrer_pc()
            print("PC démarré avec succès.")
        elif action == "éteindre":
            éteindre_pc()
            print("PC éteint avec succès.")
        else:
            print("Commande non reconnue.")
    except Exception as e:
        print(f"Erreur lors de l'exécution de l'action: {e}")
    finally:
        GPIO.cleanup()

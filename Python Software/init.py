"""
Pytorch permette di creare modelli di IA usando delle foto normali, che vengono trasformate dalla libreria Pillow

Per creare un progetto di addestramento del modello personalizzato seguendo i passaggi indicati, potresti organizzare i tuoi file Python in un modo che sia chiaro e ben strutturato. Di seguito, ti do un esempio di come potresti organizzare i file:

dataset.py:
Contiene il codice per la creazione del tuo dataset personalizzato utilizzando torchvision.datasets.ImageFolder. Potresti definire le trasformazioni delle immagini, creare il dataset e il dataloader.

model.py:
Contiene il codice per definire il tuo modello. Potresti creare una classe che eredita da torch.nn.Module e modifica il modello ResNet-50, adattandolo al numero delle tue classi.

train.py:
Contiene il codice per il ciclo di addestramento. Definiresti la funzione di loss, l'ottimizzatore, e implementeresti il loop di addestramento.

evaluate.py:
Contiene il codice per valutare il tuo modello su un set di dati di test. Questo file può anche includere codice per eseguire l'inferenza su nuovi dati una volta che il modello è stato addestrato.

main.py:
Questo potrebbe essere il file principale che unisce tutti gli altri. Importa le funzionalità da dataset.py, model.py, train.py, e evaluate.py e gestisce il flusso complessivo del tuo progetto.


Creare un dataset personalizzato:
Raccogli le immagini del tuo dataset e organizzale in una struttura che contenga sottocartelle per ciascuna classe. Ad esempio:
lua
----PATTERN----
dataset/
|-- classe1/
|   |-- img1.jpg
|   |-- img2.jpg
|   |-- ...
|-- classe2/
|   |-- img1.jpg
|   |-- img2.jpg
|   |-- ...
|-- ...


Definire un DataLoader:
Utilizza torchvision.datasets.ImageFolder per creare un DataLoader per il tuo dataset personalizzato.

----CODICE----
import torchvision.transforms as transforms
from torchvision.datasets import ImageFolder

# Trasformazioni delle immagini
transform = transforms.Compose([
    transforms.Resize((224, 224)),
    transforms.ToTensor(),
])

# Crea un DataLoader per il tuo dataset personalizzato
custom_dataset = ImageFolder(root='path/to/dataset', transform=transform)
custom_dataloader = torch.utils.data.DataLoader(custom_dataset, batch_size=32, shuffle=True)
------------------------------------------------------------------------------------------------------------------------

Definire il modello:
Modifica il modello ResNet-50 per adattarlo al numero delle tue classi.

----CODICE----
import torch.nn as nn
from torchvision.models import resnet50

# Carica il modello ResNet-50 pre-addestrato
model = resnet50(pretrained=True)

# Modifica l'ultimo strato per adattarlo al numero delle tue classi
num_classes = len(custom_dataset.classes)
model.fc = nn.Linear(model.fc.in_features, num_classes)
------------------------------------------------------------------------------------------------------------------------

Definire la funzione di loss e l'ottimizzatore:
Utilizza una funzione di loss adatta al tuo problema (ad esempio, nn.CrossEntropyLoss) e scegli un ottimizzatore (ad esempio, torch.optim.SGD).

---CODICE---
criterion = nn.CrossEntropyLoss()
optimizer = torch.optim.SGD(model.parameters(), lr=0.001, momentum=0.9)
------------------------------------------------------------------------------------------------------------------------


Addestrare il modello:
Esegui il ciclo di addestramento per più epoche.

----CODICE----
num_epochs = 10

for epoch in range(num_epochs):
    model.train()
    for inputs, labels in custom_dataloader:
        optimizer.zero_grad()
        outputs = model(inputs)
        loss = criterion(outputs, labels)
        loss.backward()
        optimizer.step()

    print(f'Epoch {epoch + 1}/{num_epochs}, Loss: {loss.item()}')
------------------------------------------------------------------------------------------------------------------------
    
Valutare il modello:
Valuta il tuo modello su un set di dati di test.
----CODICE----
model.eval()
with torch.no_grad():
    for inputs, labels in test_dataloader:
        outputs = model(inputs)
        # Valuta le prestazioni del modello
------------------------------------------------------------------------------------------------------------------------

File Main che unisce tutto

----CODICE----
from dataset import create_custom_dataloader
from model import CustomResNet
from train import train_model
from evaluate import evaluate_model

def main():
    # Creare il DataLoader
    custom_dataloader = create_custom_dataloader('path/to/dataset')

    # Creare il modello
    model = CustomResNet(num_classes=10)  # Assicurati di impostare correttamente il numero delle tue classi

    # Addestrare il modello
    train_model(model, custom_dataloader, num_epochs=10)

    # Valutare il modello
    test_dataloader = create_custom_dataloader('path/to/test_dataset')
    evaluate_model(model, test_dataloader)

if __name__ == "__main__":
    main()
------------------------------------------------------------------------------------------------------------------------

Per usare il modello addestrato su immagini acquisite a video

----CODICE----
import cv2
import torch
from torchvision.transforms import transforms
from model import CustomResNet  # Assicurati di importare la tua classe di modello personalizzato

# Carica il modello addestrato
model = CustomResNet(num_classes=10)  # Assicurati di impostare correttamente il numero delle tue classi
model.load_state_dict(torch.load('path/to/your/trained_model.pth'))
model.eval()

# Trasformazioni delle immagini
preprocess = transforms.Compose([
    transforms.Resize((224, 224)),
    transforms.ToTensor(),
])

# Funzione per il riconoscimento degli oggetti
def recognize_objects(frame):
    # Converte l'immagine in formato PIL
    image = transforms.ToPILImage()(frame)
    
    # Applica le trasformazioni
    image_tensor = preprocess(image)
    image_tensor = image_tensor.unsqueeze(0)  # Aggiunge la dimensione del batch

    # Esegue l'inferenza
    with torch.no_grad():
        output = model(image_tensor)

    # Ottieni la classe predetta
    _, predicted_idx = torch.max(output, 1)
    predicted_class = predicted_idx.item()

    return predicted_class

# Inizializza la webcam o carica un video
cap = cv2.VideoCapture(0)  # 0 indica la webcam integrata. Puoi sostituirlo con il percorso del tuo file video.

while True:
    # Legge il frame dalla webcam o dal video
    ret, frame = cap.read()
    
    # Riconoscimento degli oggetti
    predicted_class = recognize_objects(frame)

    # Mostra il risultato sul frame
    cv2.putText(frame, f'Object: {predicted_class}', (10, 30), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 2)
    cv2.imshow('Object Recognition', frame)

    # Interrompi l'esecuzione quando si preme 'q'
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

# Rilascia la risorsa video e chiudi le finestre
cap.release()
cv2.destroyAllWindows()
------------------------------------------------------------------------------------------------------------------------


"""
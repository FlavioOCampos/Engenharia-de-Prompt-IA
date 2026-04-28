# 📂 Aula 08 - Missão: Automação de Arquivos

## 📝 Descrição do Exercício
Desenvolvimento de um script Python para organizar arquivos automaticamente por extensão, movendo-os para pastas específicas e tratando erros de permissão.

## 🤖 Uso de IA (Estratégia de Prompt)
- **Ferramenta:** Replit Agent.
- **Processo:** Iniciei com um prompt estrutural para identificar extensões. Realizei refinamentos manuais para corrigir caminhos de diretório (`.`) e adicionei blocos `try/except` para evitar que o código trave em arquivos abertos.

## ✅ Requisitos de Sucesso
- [x] Pastas criadas automaticamente.
- [x] Arquivos movidos corretamente.
- [x] Tratamento de erro de permissão implementado.

## 💬 Log de Interação (Prompts utilizados)

Para garantir a transparência do uso da IA, abaixo estão os comandos principais enviados ao Replit Agent:

1. **Usuário:** "Crie um script em Python para organizar arquivos no diretório atual por extensão usando as bibliotecas os e shutil."
2. **IA:** Gerou o código base, mas com um erro de sintaxe no `os.path.join`.
3. **Usuário:** "Corrija o erro de sintaxe na linha 13 e adicione um tratamento de erro para arquivos que estão abertos ou sem permissão."
4. **IA:** Implementou o bloco `try/except PermissionError`, garantindo que o código não trave durante a execução.

python

2 hours ago

Show less

Planning Python application development
It looks like your message got cut off! Could you tell me more about what you'd like to build or do with Python?


Checkpoint made
2 hours ago
Missao01_Automacao

2 hours ago

Show less

Clarifying automation project scope
Parece que você quer criar um projeto de automação em Python! Pode me contar mais sobre o que essa automação deve fazer? Por exemplo:

O que ela deve automatizar?
Quais dados ou sistemas ela vai processar?
Qual é o resultado esperado?
Estou fazendo um exercício para organizar arquivos por extensão. Como posso usar a biblioteca 'os' para listar arquivos e a 'shutil' para movê-los? Me dê um exemplo de como separar a extensão de um arquivo.

2 hours ago

Show less

Planning Python file organization solution
Ótima escolha de exercício! Aqui está como funciona:

Separar a extensão de um arquivo:

import os
nome_arquivo = "relatorio.pdf"
nome, extensao = os.path.splitext(nome_arquivo)
print(nome)      # "relatorio"
print(extensao)  # ".pdf"

Listar arquivos de uma pasta:

import os
pasta = "/caminho/da/pasta"
for arquivo in os.listdir(pasta):
    caminho_completo = os.path.join(pasta, arquivo)
    
    if os.path.isfile(caminho_completo):  # ignora subpastas
        _, extensao = os.path.splitext(arquivo)
        print(f"{arquivo} → extensão: {extensao}")

Mover um arquivo com shutil:

import shutil
shutil.move("origem/arquivo.pdf", "destino/arquivo.pdf")

Exemplo completo — organizar arquivos por extensão:

import os
import shutil
pasta_origem = "/caminho/da/pasta"
for arquivo in os.listdir(pasta_origem):
    caminho_arquivo = os.path.join(pasta_origem, arquivo)
    
    if os.path.isfile(caminho_arquivo):
        _, extensao = os.path.splitext(arquivo)
        extensao = extensao.lstrip(".")  # remove o ponto: ".pdf" → "pdf"
        
        if extensao:  # ignora arquivos sem extensão
            pasta_destino = os.path.join(pasta_origem, extensao)
            os.makedirs(pasta_destino, exist_ok=True)  # cria a pasta se não existir
            shutil.move(caminho_arquivo, os.path.join(pasta_destino, arquivo))

Esse script cria subpastas com o nome de cada extensão (ex: pdf/, jpg/, txt/) e move cada arquivo para a pasta correspondente. Quer que eu crie um script Python completo no projeto para você testar?

O código funcionou, mas meu professor exige que ele não trave caso ocorra um erro de permissão (por exemplo, se o arquivo estiver em uso). Você pode adicionar um bloco try e except PermissionError na parte de mover o arquivo?

2 hours ago

Show less

Planning exception handling for file operations
Claro! Basta envolver o shutil.move com try/except PermissionError:

import os
import shutil
pasta_origem = "/caminho/da/pasta"
for arquivo in os.listdir(pasta_origem):
    caminho_arquivo = os.path.join(pasta_origem, arquivo)
    
    if os.path.isfile(caminho_arquivo):
        _, extensao = os.path.splitext(arquivo)
        extensao = extensao.lstrip(".")
        if extensao:
            pasta_destino = os.path.join(pasta_origem, extensao)
            os.makedirs(pasta_destino, exist_ok=True)
            try:
                shutil.move(caminho_arquivo, os.path.join(pasta_destino, arquivo))
                print(f"Movido: {arquivo} → {extensao}/")
            except PermissionError:
                print(f"Sem permissão para mover: {arquivo} (arquivo pode estar em uso)")

O que muda:

try — tenta mover o arquivo normalmente
except PermissionError — se o arquivo estiver bloqueado ou sem permissão, exibe uma mensagem e continua para o próximo arquivo, sem travar o programa
Se quiser ser ainda mais seguro, pode capturar qualquer erro inesperado adicionando um segundo except logo abaixo:

            except PermissionError:
                print(f"Sem permissão para mover: {arquivo}")
            except Exception as e:
                print(f"Erro inesperado com {arquivo}: {e}")

Isso garante que o script nunca trave, independente do problema encontrado.

ok

2 hours ago

Show less

Acknowledging user's confirmation
Ótimo! Se precisar de mais ajuda com o exercício ou tiver outras dúvidas sobre Python, é só chamar.

quero o codigo final

2 hours ago

2 messages & 4 actions

Checkpoint made
2 hours ago

Worked for 15 seconds
Run the code

1 hour ago

Planning test directory execution (4 seconds)
O script usa um caminho de exemplo (/caminho/da/pasta). Vou criar uma pasta de teste com arquivos para demonstrar o funcionamento:


5 actions
O código funcionou perfeitamente! Veja o resultado:

Antes: 7 arquivos misturados na mesma pasta

Depois: cada arquivo foi para a sua pasta de extensão:

teste_automacao/
  pdf/
    relatorio.pdf
  jpg/
    foto.jpg
  mp3/
    musica.mp3
  txt/
    documento.txt
    notas.txt   ← dois arquivos .txt foram para a mesma pasta
  xlsx/
    planilha.xlsx
  png/
    imagem.png

Para usar no seu exercício, basta trocar o caminho no arquivo Missao01_Automacao.py pela pasta real que você quer organizar.


Checkpoint made
1 hour ago

Worked for 24 seconds

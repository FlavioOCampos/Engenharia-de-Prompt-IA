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


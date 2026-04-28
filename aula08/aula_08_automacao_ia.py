import os
import shutil

pasta_origem = "."

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
            except Exception as e:
                print(f"Erro inesperado com {arquivo}: {e}")


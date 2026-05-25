
# 📍 AulaTrack - Sistema Inteligente de Presença com GPS

## 📚 Desafio Escolhido

O projeto AulaTrack foi desenvolvido com o objetivo de modernizar o controle de presença em salas de aula utilizando recursos de geolocalização, autenticação e banco de dados em tempo real.

A solução permite que professores criem aulas ativas e que alunos registrem presença apenas estando próximos ao local definido pelo professor, aumentando a segurança e reduzindo fraudes no controle de frequência.

---

# 🚀 Protótipo

## Funcionalidades Implementadas

### 👨‍🏫 Professor
- Login de professor
- Criação de aulas
- Geração automática de código da aula
- Compartilhamento do link da aula
- Visualização de alunos presentes
- Encerramento de aulas
- Retomada de aulas ativas
- Gerenciamento de aulas em tempo real

### 👨‍🎓 Aluno
- Login de aluno
- Entrada na aula via código
- Verificação de localização GPS
- Registro automático de presença
- Atualização em tempo real

### 🌎 Recursos Técnicos
- Firebase Authentication
- Firebase Firestore
- Geolocalização via navegador
- Atualização em tempo real com `onSnapshot`
- Interface responsiva
- Deploy via GitHub Pages

---

# 🖼️ Prints do Sistema

## Tela de Login
![Login](docs/login.png)

## Painel do Professor
![Professor](docs/professor.png)

## Painel do Aluno
![Aluno](docs/aluno.png)

## Minhas Aulas
![Aulas](docs/minhas_aulas.png)

## Registro de Presença
![Presença](docs/presencas.png)

## fire base (database do sistema)
![Presença](docs/database.png)


---

# 🛠️ Plataforma Utilizada

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript
- Firebase Authentication
- Firebase Firestore
- GitHub Pages

---

# ✅ Vantagens Identificadas

1. Desenvolvimento rápido do protótipo.
2. Integração simples com banco de dados em tempo real.
3. Atualização instantânea das informações.
4. Facilidade de hospedagem utilizando GitHub Pages.
5. Redução de fraudes no registro de presença usando GPS.
6. Interface intuitiva e responsiva.
7. Possibilidade de expansão futura para aplicações reais.

---

# ⚠️ Limitações Encontradas

1. Dependência de conexão com internet.
2. Dependência dos serviços Firebase.
3. Limitações da geolocalização em alguns dispositivos.
4. Possíveis restrições de uso em planos gratuitos do Firebase.
5. Necessidade de permissões de localização no navegador.

---

# 🧠 Reflexão Crítica

# 🧠 Processo de Desenvolvimento com IA

## 🔹 Protótipo Inicial — Claude Haiku

A primeira versão do AulaTrack foi desenvolvida utilizando Claude Haiku, focando em validação rápida da ideia utilizando HTML, CSS e JavaScript puro com armazenamento local.

🔗 Protótipo inicial:
[Visualizar Protótipo Claude Haiku](./prototipo_inicial/index.html)

---

O desenvolvimento do AulaTrack passou por diferentes etapas utilizando ferramentas de Inteligência Artificial generativa.

## 🔹 Primeira Versão — Claude Haiku

O protótipo inicial foi desenvolvido utilizando o modelo Claude Haiku, focando em:

- Estrutura inicial em HTML/CSS/JavaScript
- Interface visual inicial
- Fluxo básico de professor e aluno
- Simulação local utilizando `localStorage`

Essa versão permitiu validar rapidamente a ideia do sistema e estruturar o fluxo principal da aplicação.

Entretanto, foram identificadas limitações relacionadas à persistência de dados, escalabilidade e sincronização em tempo real.

---

## 🔹 Evolução do Projeto — ChatGPT

Posteriormente, o projeto foi evoluído utilizando ChatGPT, permitindo:

- Integração completa com Firebase
- Implementação do Firestore em tempo real
- Autenticação de usuários
- Sistema de retomada de aulas
- Organização modular do projeto
- Deploy utilizando GitHub Pages
- Melhorias visuais e estruturais
- Implementação de funcionalidades avançadas de GPS

Essa evolução demonstrou como diferentes modelos de IA podem contribuir em etapas distintas do desenvolvimento de software, desde prototipagem rápida até refinamento arquitetural e implementação de funcionalidades avançadas.

---

## 🚀 Resultado Final

O AulaTrack evoluiu de um protótipo simples local para um sistema funcional online com persistência, sincronização em tempo real e arquitetura mais próxima de aplicações reais.

O desenvolvimento do AulaTrack demonstrou como plataformas e serviços de desenvolvimento rápido podem acelerar significativamente a criação de soluções funcionais.

O uso do Firebase possibilitou implementar autenticação, banco de dados em tempo real e sincronização entre usuários sem necessidade de infraestrutura própria.

Entretanto, o grupo identificou limitações relacionadas à dependência de serviços externos, limitações de customização avançada e necessidade constante de conexão com internet.

Como solução, foram utilizadas integrações manuais em JavaScript e organização modular do sistema para facilitar futuras expansões e migração para arquiteturas mais robustas.

---

# 👥 Colaboração

O projeto foi dividido entre as seguintes atividades:

- Desenvolvimento Front-End
- Integração Firebase
- Sistema de Geolocalização
- Documentação e organização do GitHub
- Testes e validações

A colaboração ocorreu através de compartilhamento do repositório GitHub e reuniões para validação das funcionalidades.

---

# 📅 Registro da Aula

- Data: 11/05/2026
- Atividade: Desenvolvimento do mini-projeto de aplicação
- Local: Laboratório de Informática
- Professora: Kadidja Valéria

---

# 🔮 Próximos Passos

## Melhorias Futuras

- Painel administrativo avançado
- Dashboard com métricas
- Histórico completo de presenças
- Integração com QR Code
- Sistema de notificações
- Aplicativo mobile
- Integração com Inteligência Artificial
- Migração para backend próprio

---

# 🌐 Link do Projeto

[https://SEU-USUARIO.github.io/SEU-REPOSITORIO/](https://flavioocampos.github.io/Engenharia-de-Prompt-IA/unidade_3/login.html)

---

# 📁 Estrutura do Projeto

```bash
Engenharia-de-Prompt-IA/
│
├── unidade_1/
├── unidade_2/
│
├── unidade_3/
│   │
│   ├── assets/
│   ├── backup/
│   ├── docs/
│   │   ├── login.png
│   │   ├── professor.png
│   │   ├── aluno.png
│   │   ├── minhas_aulas.png
│   │   └── presencas.png
│   │
│   ├── js/
│   │
│   ├── README.md
│   ├── aluno.html
│   ├── dashboard.html
│   ├── firebase.js
│   ├── index.html
│   ├── login.html
│   ├── lowcode.html
│   ├── mapa.html
│   ├── professor.html
│   ├── script.js
│   └── style.css
│
└── README.md
```

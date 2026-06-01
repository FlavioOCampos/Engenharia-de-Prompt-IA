
# 📍 AulaTrack - Sistema Inteligente de Presença com GPS

# Sistema Inteligente de Controle de Presença com Firebase e Geolocalização

## Disciplina
Engenharia de Prompt para Inteligência Artificial

## Curso
[[Seu curso aqui — ex: Ciência da Computação / Arquitetura e Urbanismo](https://cursos.udf.edu.br/grad-analise-e-desenvolvimento-de-sistemas-udf/p)]

## Instituição
Centro Universitário UDF

## Aluno
Flávio de Oliveira Campos

## Professor(a)
[[Nome da professora](https://github.com/Kadidjah)]

## Unidade
Unidade 3 — Desenvolvimento de Solução com IA, Firebase e Geolocalização

---

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

# 🛠️ Plataforma Utilizada

## Tecnologias Utilizadas

- Github Copilit: Claude haiku 4.5
- ChatGPT baseado no GPT-5.5
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

## 🔹 Protótipo Inicial — GitHub Copilot / Claude Haiku

A primeira versão do AulaTrack foi desenvolvida utilizando GitHub integrado ao modelo Claude Haiku, focando em prototipagem rápida utilizando HTML, CSS e JavaScript puro.

Essa etapa permitiu validar rapidamente:
- fluxo entre professor e aluno,
- controle de presença,
- experiência visual,
- estrutura inicial do sistema.

O protótipo inicial utilizava localStorage e lógica simplificada para simular persistência de dados e validar o conceito da aplicação.

---

### 🔗 Acessar Protótipo Inicial
➡️ [Clique aqui para abrir o protótipo desenvolvido com GitHub Copilot / Claude Haiku](https://flavioocampos.github.io/Engenharia-de-Prompt-IA/unidade_3/prototipo_inicial/index.html)

## 🔄 Aplicação de Low-Code, No-Code e Vibe Coding

Durante o desenvolvimento do AulaTrack foram utilizadas diferentes abordagens modernas de criação de software, combinando conceitos de No-Code, Low-Code, Vibe Coding e programação tradicional.

### 🟣 No-Code
Na fase inicial, a ideia do sistema foi validada rapidamente utilizando prototipagem visual e estruturas simplificadas geradas por IA, permitindo construir fluxos funcionais sem necessidade imediata de arquitetura complexa.

### 🔵 Low-Code
Com auxílio de Inteligência Artificial generativa, principalmenteGitHub Copilot / Claude Haiku e ChatGPT, o projeto evoluiu utilizando geração assistida de código, acelerando a implementação de interfaces, lógica de negócio e integração com APIs.

### 🟢 Vibe Coding
Grande parte do desenvolvimento ocorreu através de interação iterativa com IA utilizando prompts refinados, ajustes em tempo real, experimentação visual e evolução contínua do sistema. Essa abordagem permitiu transformar rapidamente ideias em funcionalidades reais.

## 🔹 Evolução do Projeto — ChatGPT + Firebase

Durante o desenvolvimento foram identificadas limitações relacionadas ao uso gratuito e limite de interações do Claude Haiku no GitHub.

Devido à necessidade de evolução contínua do projeto e implementação de funcionalidades mais avançadas, o desenvolvimento passou a utilizar ChatGPT como principal ferramenta de apoio, aproveitando maior disponibilidade de uso através de conta pessoal.

Essa mudança permitiu evoluir significativamente o projeto, principalmente na implementação de:

- Firebase Authentication
- Cloud Firestore
- Atualização em tempo real
- Sistema de retomada de aulas
- Persistência online
- Organização arquitetural
- Melhorias visuais e estruturais
- Integração GPS em tempo real

Com isso, o AulaTrack deixou de ser apenas um protótipo local e passou a funcionar como um sistema web online integrado ao Firebase.

### ⚫ Programação Tradicional
Além das abordagens assistidas por IA, também foram aplicados conhecimentos tradicionais de desenvolvimento web utilizando:
- JavaScript
- Firebase
- Firestore
- HTML/CSS
- Geolocalização GPS
- GitHub Pages

Essa combinação demonstrou como diferentes paradigmas modernos de desenvolvimento podem coexistir para acelerar prototipagem, aprendizado e construção de aplicações funcionais.

---

O desenvolvimento do AulaTrack passou por diferentes etapas utilizando ferramentas de Inteligência Artificial generativa.

## 🔹 Primeira Versão — GitHub Copilot / Claude Haiku

O protótipo inicial foi desenvolvido utilizando o modelo GitHub Copilot / Claude Haiku, focando em:

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

# 📄 Documentação Complementar

➡️ [Clique aqui para acessar o PDF completo de defesa e documentação do projeto](./AulaTrack_Defesa_Final_Atualizada.pdf)

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

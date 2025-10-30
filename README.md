# Quiz: Calendário Chinês

Um quiz educativo e interativo sobre o Calendário Chinês, zodíaco e tradições milenares chinesas, voltado para crianças até a 7ª série.

## Características

- 🐉 **60 perguntas** sobre calendário chinês, zodíaco e cultura (15 selecionadas aleatoriamente por sessão)
- 🎨 **Animações temáticas** de comemoração e consolo
- 🎯 **Sistema de pontuação** com critério de desempate por tempo
- 🏆 **Rankings**: temporário (últimos 5 jogadores) e permanente (top 10)
- 💾 **Persistência de dados** via localStorage
- 📱 **Design responsivo** para tablets e smartphones
- 🎭 **Nomes aleatórios** com ícones temáticos chineses

## Estrutura do Projeto

```
quiz-cal-chines/
├── index.html                 # Página principal
├── css/
│   ├── styles.css            # Estilos principais
│   ├── backgrounds.css       # Fundos temáticos das perguntas
│   └── achievements.css      # Estilos de conquistas
├── js/
│   ├── script.js             # Lógica principal do quiz
│   ├── questions.js          # Banco de 60 perguntas
│   ├── animations.js         # Animações SVG temáticas
│   ├── names.js              # Sistema de nomes aleatórios
│   ├── achievements.js       # Sistema de conquistas
│   ├── avatars.js            # Sistema de avatares
│   ├── powerups.js           # Power-ups do quiz
│   ├── sound-manager.js      # Gerenciador de sons
│   └── visual-effects.js     # Efeitos visuais
├── images/                   # Pasta para imagens (opcional)
└── README.md                 # Este arquivo
```

## Como Usar

### Teste Local

1. Abra o terminal na pasta do projeto
2. Execute um servidor HTTP simples:
   ```bash
   python3 -m http.server 8000
   ```
3. Abra o navegador e acesse: `http://localhost:8000`

### Instalar em Tablet (iPad/iOS)

#### Método 1: Usar Safari (Recomendado)

1. **Hospedar o arquivo**:
   - Coloque os arquivos em um servidor web (GitHub Pages, Netlify, Vercel, etc.)
   - Ou use um aplicativo como "Documents by Readdle" para hospedar localmente

2. **Adicionar à Tela Inicial**:
   - Abra o Safari no iPad
   - Navegue até o endereço do quiz
   - Toque no ícone de **Compartilhar** (quadrado com seta)
   - Selecione **"Adicionar à Tela de Início"**
   - Escolha um nome e toque em **"Adicionar"**
   - O ícone aparecerá na tela inicial como um app nativo

3. **Modo Tela Cheia**:
   - Ao abrir pelo ícone da tela inicial, o quiz abrirá em tela cheia automaticamente
   - As meta tags já estão configuradas para isso

#### Método 2: Usar GitHub Pages (Gratuito e Fácil)

1. **Criar repositório no GitHub**:
   - Acesse github.com e faça login
   - Crie um novo repositório público
   - Faça upload dos arquivos do quiz

2. **Ativar GitHub Pages**:
   - Vá em Settings > Pages
   - Em "Source", selecione "main branch"
   - Clique em "Save"
   - Após alguns minutos, seu quiz estará disponível em:
     `https://seu-usuario.github.io/nome-do-repositorio`

3. **Adicionar ao iPad**:
   - Acesse a URL do GitHub Pages no Safari do iPad
   - Siga os passos do Método 1 para adicionar à tela inicial

### Instalar em Tablet Android

1. **Hospedar o arquivo** (mesmo do iOS)

2. **Adicionar à Tela Inicial**:
   - Abra o Chrome no tablet
   - Navegue até o endereço do quiz
   - Toque no menu (3 pontinhos) > "Adicionar à tela inicial"
   - Escolha um nome e toque em "Adicionar"

3. **Modo Tela Cheia**:
   - Abrirá automaticamente em modo standalone

## Características Técnicas

### Sistema de Perguntas
- 15 perguntas aleatórias de um banco de 60
- Respostas embaralhadas para cada pergunta
- Não mostra a resposta correta após erro
- Perguntas sobre:
  - 12 animais do zodíaco chinês
  - 5 elementos (madeira, fogo, terra, metal, água)
  - Festas e tradições chinesas
  - Calendário lunissolar
  - Lendas e histórias do zodíaco

### Animações

**Comemoração (ao acertar)**:
- 3 animações comuns (lanterna, yin-yang, roda do zodíaco)
- 1 animação rara (dança do dragão - aparece ao acertar 9/10)
- 1 animação lendária (fogos de artifício com caracteres chineses - aparece ao acertar 10/10)

**Consolo (ao errar)**:
- 5 animações com frequências decrescentes:
  - Dragão confuso: 50%
  - Lua nublada: 30%
  - Lanterna apagada: 15%
  - Pétala caindo: 3%
  - Yin-yang desequilibrado: 2%

### Sistema de Rankings

**Ranking Temporário**:
- Mostra os 3 melhores dos últimos 5 jogadores
- Reinicia automaticamente a cada 5 participantes
- Armazenado em localStorage

**Ranking Geral**:
- Top 10 de todos os tempos
- Persistente no localStorage
- Critério de desempate: tempo em décimos de segundo

### Persistência de Dados

Todos os dados são salvos no localStorage do navegador:
- `generalRanking`: Ranking geral (top 10)
- `tempRanking`: Ranking temporário (top 3 dos últimos 5)
- `tempRankingCount`: Contador de jogadores para reset

**Nota**: Os dados persistem mesmo após fechar o navegador, mas são específicos do dispositivo/navegador.

## Funcionalidades

- ✅ 60 perguntas sobre calendário chinês e cultura
- ✅ Seleção aleatória de 15 perguntas por sessão
- ✅ 4 respostas por pergunta, apenas 1 correta
- ✅ Ordem aleatória das respostas
- ✅ Animações temáticas com rotação
- ✅ Fundos temáticos para cada pergunta
- ✅ Contador de acertos em tempo real
- ✅ Botão para desistir a qualquer momento
- ✅ Sistema de nomes aleatórios com ícones chineses
- ✅ Cronômetro com décimos de segundo
- ✅ Rankings temporário e permanente
- ✅ Interface bonita e amigável
- ✅ Responsivo para tablets e celulares
- ✅ Modo tela cheia em tablets
- ✅ Sistema de conquistas
- ✅ Avatares personalizados
- ✅ Power-ups especiais
- ✅ Efeitos sonoros

## Requisitos

- Navegador moderno com suporte a:
  - JavaScript ES6+
  - CSS3 (gradients, animations, flexbox, grid)
  - localStorage API
  - SVG

## Suporte

Testado e otimizado para:
- ✅ iPad (Safari)
- ✅ Tablets Android (Chrome)
- ✅ Desktop (Chrome, Firefox, Safari, Edge)
- ✅ Smartphones (responsivo)

## Dicas de Uso

1. **Para melhor experiência em tablet**:
   - Use orientação horizontal (landscape)
   - Adicione à tela inicial para modo tela cheia
   - Mantenha o brilho adequado para ver as animações

2. **Para resetar dados**:
   - Abra o Console do Navegador (F12)
   - Execute: `localStorage.clear()`
   - Recarregue a página

3. **Para hospedar online gratuitamente**:
   - GitHub Pages (recomendado)
   - Netlify
   - Vercel
   - Firebase Hosting

## Conteúdo Didático

O quiz aborda temas como:
- **Zodíaco Chinês**: 12 animais e suas características
- **Cinco Elementos**: madeira, fogo, terra, metal, água
- **Calendário Lunissolar**: ciclos da lua e do sol
- **Festas Tradicionais**: Ano Novo Chinês, Festival das Lanternas
- **Lendas**: A corrida dos animais, origem do zodíaco
- **Cultura**: símbolos, comidas, tradições
- **Astronomia Chinesa**: mansões lunares, termos solares
- **Filosofia**: Yin e Yang, harmonia, equilíbrio

## Licença

Este projeto foi criado para fins educacionais.

---

Desenvolvido com 🐉 para ensinar sobre a cultura chinesa de forma divertida!

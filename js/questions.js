// Banco de perguntas sobre o Calendário Chinês
const QUESTION_BANK = [
    {
        question: "Quantos animais fazem parte do zodíaco chinês?",
        answers: ["12 animais", "10 animais", "8 animais", "15 animais"],
        correctIndex: 0,
        backgroundClass: "bg-zodiac-wheel"
    },
    {
        question: "Qual é o primeiro animal do zodíaco chinês?",
        answers: ["Rato", "Dragão", "Tigre", "Boi"],
        correctIndex: 0,
        backgroundClass: "bg-rat"
    },
    {
        question: "O calendário chinês é baseado principalmente em qual astro?",
        answers: ["Lua", "Sol", "Estrelas", "Planetas"],
        correctIndex: 0,
        backgroundClass: "bg-moon-calendar"
    },
    {
        question: "Qual animal representa força e trabalho duro no zodíaco chinês?",
        answers: ["Boi", "Tigre", "Cavalo", "Cachorro"],
        correctIndex: 0,
        backgroundClass: "bg-ox"
    },
    {
        question: "Em que mês geralmente acontece o Ano Novo Chinês?",
        answers: ["Entre janeiro e fevereiro", "Sempre em janeiro", "Sempre em dezembro", "Em março"],
        correctIndex: 0,
        backgroundClass: "bg-new-year"
    },
    {
        question: "Quantos elementos existem na filosofia chinesa?",
        answers: ["5 elementos", "4 elementos", "7 elementos", "3 elementos"],
        correctIndex: 0,
        backgroundClass: "bg-five-elements"
    },
    {
        question: "Qual animal é considerado símbolo de sabedoria e longevidade?",
        answers: ["Dragão", "Serpente", "Macaco", "Galo"],
        correctIndex: 0,
        backgroundClass: "bg-dragon"
    },
    {
        question: "Qual cor é tradicionalmente usada nas celebrações do Ano Novo Chinês?",
        answers: ["Vermelho", "Azul", "Verde", "Amarelo"],
        correctIndex: 0,
        backgroundClass: "bg-red-celebration"
    },
    {
        question: "Quantos anos tem um ciclo completo do zodíaco chinês?",
        answers: ["12 anos", "10 anos", "15 anos", "20 anos"],
        correctIndex: 0,
        backgroundClass: "bg-zodiac-wheel"
    },
    {
        question: "Qual animal representa coragem e força no zodíaco?",
        answers: ["Tigre", "Leão", "Urso", "Lobo"],
        correctIndex: 0,
        backgroundClass: "bg-tiger"
    },
    {
        question: "O que são os 'envelopes vermelhos' dados no Ano Novo Chinês?",
        answers: ["Presentes com dinheiro para boa sorte", "Cartas", "Convites", "Mapas"],
        correctIndex: 0,
        backgroundClass: "bg-red-envelope",
        difficulty: "hard"
    },
    {
        question: "Qual destes NÃO é um dos cinco elementos chineses?",
        answers: ["Ar", "Água", "Fogo", "Madeira"],
        correctIndex: 0,
        backgroundClass: "bg-five-elements"
    },
    {
        question: "Qual animal é conhecido por sua astúcia e agilidade?",
        answers: ["Coelho", "Cachorro", "Porco", "Boi"],
        correctIndex: 0,
        backgroundClass: "bg-rabbit"
    },
    {
        question: "O calendário chinês combina qual tipo de ciclos?",
        answers: ["Lunar e solar", "Apenas lunar", "Apenas solar", "Estelar"],
        correctIndex: 0,
        backgroundClass: "bg-moon-sun",
        difficulty: "hard"
    },
    {
        question: "Qual animal representa a realeza e o poder imperial?",
        answers: ["Dragão", "Tigre", "Boi", "Cavalo"],
        correctIndex: 0,
        backgroundClass: "bg-dragon"
    },
    {
        question: "Quantos dias dura a celebração tradicional do Ano Novo Chinês?",
        answers: ["15 dias", "7 dias", "3 dias", "1 dia"],
        correctIndex: 0,
        backgroundClass: "bg-new-year",
        difficulty: "hard"
    },
    {
        question: "Qual animal representa a sabedoria e a transformação?",
        answers: ["Serpente", "Dragão", "Macaco", "Tigre"],
        correctIndex: 0,
        backgroundClass: "bg-snake"
    },
    {
        question: "O que é pendurado nas portas durante o Ano Novo Chinês para afastar má sorte?",
        answers: ["Papel vermelho com dizeres de boa sorte", "Flores", "Frutas", "Lanternas"],
        correctIndex: 0,
        backgroundClass: "bg-decorations"
    },
    {
        question: "Qual animal simboliza velocidade e liberdade?",
        answers: ["Cavalo", "Tigre", "Coelho", "Galo"],
        correctIndex: 0,
        backgroundClass: "bg-horse"
    },
    {
        question: "Os cinco elementos chineses são: madeira, fogo, terra, metal e...",
        answers: ["Água", "Ar", "Éter", "Luz"],
        correctIndex: 0,
        backgroundClass: "bg-five-elements"
    },
    {
        question: "Qual animal representa paz e tranquilidade?",
        answers: ["Cabra", "Porco", "Cachorro", "Coelho"],
        correctIndex: 0,
        backgroundClass: "bg-goat"
    },
    {
        question: "Por que o gato não está no zodíaco chinês, segundo a lenda?",
        answers: ["O rato enganou o gato e ele perdeu a corrida", "O gato não quis participar", "O gato chegou atrasado", "Não gostavam de gatos"],
        correctIndex: 0,
        backgroundClass: "bg-zodiac-legend",
        difficulty: "hard"
    },
    {
        question: "Qual animal é símbolo de inteligência e criatividade?",
        answers: ["Macaco", "Rato", "Serpente", "Tigre"],
        correctIndex: 0,
        backgroundClass: "bg-monkey"
    },
    {
        question: "Qual é o último animal do ciclo do zodíaco chinês?",
        answers: ["Porco", "Cachorro", "Galo", "Cavalo"],
        correctIndex: 0,
        backgroundClass: "bg-pig"
    },
    {
        question: "Qual animal representa vigilância e lealdade?",
        answers: ["Galo", "Cachorro", "Tigre", "Cavalo"],
        correctIndex: 0,
        backgroundClass: "bg-rooster"
    },
    {
        question: "Quantos anos tem o ciclo completo combinando os 12 animais e 5 elementos?",
        answers: ["60 anos", "50 anos", "100 anos", "12 anos"],
        correctIndex: 0,
        backgroundClass: "bg-complete-cycle",
        difficulty: "veryHard"
    },
    {
        question: "Qual animal é símbolo de fidelidade e honestidade?",
        answers: ["Cachorro", "Cavalo", "Boi", "Porco"],
        correctIndex: 0,
        backgroundClass: "bg-dog"
    },
    {
        question: "O que são as lanternas vermelhas penduradas durante as festividades?",
        answers: ["Decorações que simbolizam prosperidade", "Luzes para iluminar", "Enfeites comuns", "Presentes"],
        correctIndex: 0,
        backgroundClass: "bg-lanterns"
    },
    {
        question: "Em qual fase da Lua começa o Ano Novo Chinês?",
        answers: ["Lua Nova", "Lua Cheia", "Quarto Crescente", "Quarto Minguante"],
        correctIndex: 0,
        backgroundClass: "bg-new-moon",
        difficulty: "hard"
    },
    {
        question: "Qual animal simboliza generosidade e sinceridade?",
        answers: ["Porco", "Boi", "Cabra", "Cachorro"],
        correctIndex: 0,
        backgroundClass: "bg-pig"
    },
    {
        question: "Segundo a lenda, quem organizou a corrida que determinou a ordem dos animais?",
        answers: ["O Imperador de Jade", "Um sábio chinês", "Um monge budista", "O povo chinês"],
        correctIndex: 0,
        backgroundClass: "bg-jade-emperor",
        difficulty: "veryHard"
    },
    {
        question: "Por que o Rato é o primeiro animal do zodíaco?",
        answers: ["Ele foi esperto e chegou primeiro na corrida", "Era o favorito do imperador", "Era o menor animal", "Foi escolhido por sorteio"],
        correctIndex: 0,
        backgroundClass: "bg-rat-story",
        difficulty: "hard"
    },
    {
        question: "O que o dragão simboliza na cultura chinesa?",
        answers: ["Poder, boa sorte e força", "Medo e perigo", "Sabedoria apenas", "Velocidade"],
        correctIndex: 0,
        backgroundClass: "bg-dragon"
    },
    {
        question: "Qual elemento é associado à cor verde ou azul?",
        answers: ["Madeira", "Água", "Terra", "Metal"],
        correctIndex: 0,
        backgroundClass: "bg-wood-element",
        difficulty: "hard"
    },
    {
        question: "O que é o Festival das Lanternas?",
        answers: ["Marca o fim das celebrações do Ano Novo", "É uma festa de aniversário", "Celebração da colheita", "Festival de fogos"],
        correctIndex: 0,
        backgroundClass: "bg-lantern-festival",
        difficulty: "hard"
    },
    {
        question: "Qual elemento é associado à cor vermelha?",
        answers: ["Fogo", "Madeira", "Metal", "Terra"],
        correctIndex: 0,
        backgroundClass: "bg-fire-element"
    },
    {
        question: "Como o Boi ajudou o Rato na lenda do zodíaco?",
        answers: ["Carregou o rato nas costas através do rio", "Ensinou o rato a nadar", "Deu comida ao rato", "Empurrou o rato"],
        correctIndex: 0,
        backgroundClass: "bg-ox-rat-story",
        difficulty: "veryHard"
    },
    {
        question: "Qual animal cruzou o rio com muita dificuldade por causa de seu peso?",
        answers: ["Porco", "Boi", "Tigre", "Cavalo"],
        correctIndex: 0,
        backgroundClass: "bg-pig-story",
        difficulty: "hard"
    },
    {
        question: "Qual elemento está associado à cor amarela ou marrom?",
        answers: ["Terra", "Madeira", "Metal", "Água"],
        correctIndex: 0,
        backgroundClass: "bg-earth-element",
        difficulty: "hard"
    },
    {
        question: "Que tipo de dança tradicional é realizada no Ano Novo Chinês?",
        answers: ["Dança do Leão e Dança do Dragão", "Dança do Urso", "Dança do Pavão", "Dança da Serpente"],
        correctIndex: 0,
        backgroundClass: "bg-lion-dance"
    },
    {
        question: "O calendário chinês tem quantos meses em um ano normal?",
        answers: ["12 meses lunares", "10 meses", "13 meses sempre", "14 meses"],
        correctIndex: 0,
        backgroundClass: "bg-lunar-months"
    },
    {
        question: "Qual elemento é associado às cores branca e dourada?",
        answers: ["Metal", "Terra", "Madeira", "Fogo"],
        correctIndex: 0,
        backgroundClass: "bg-metal-element",
        difficulty: "hard"
    },
    {
        question: "Por que ocasionalmente há um '13º mês' no calendário chinês?",
        answers: ["Para alinhar os ciclos lunares com as estações solares", "Por erro de cálculo", "Para comemorar eventos especiais", "Não existe 13º mês"],
        correctIndex: 0,
        backgroundClass: "bg-leap-month",
        difficulty: "veryHard"
    },
    {
        question: "Qual elemento é associado à cor preta ou azul escuro?",
        answers: ["Água", "Metal", "Terra", "Madeira"],
        correctIndex: 0,
        backgroundClass: "bg-water-element",
        difficulty: "hard"
    },
    {
        question: "O que significa 'Kung Hei Fat Choi'?",
        answers: ["Feliz Ano Novo em cantonês", "Boa sorte", "Felicidades", "Até logo"],
        correctIndex: 0,
        backgroundClass: "bg-greetings",
        difficulty: "hard"
    },
    {
        question: "Qual animal o Tigre teve que enfrentar na corrida?",
        answers: ["Uma forte correnteza de água", "Outro tigre", "Um dragão", "Nenhum obstáculo"],
        correctIndex: 0,
        backgroundClass: "bg-tiger-story",
        difficulty: "hard"
    },
    {
        question: "Quantas constelações ou 'mansões lunares' existem na astronomia chinesa?",
        answers: ["28 mansões", "12 mansões", "24 mansões", "30 mansões"],
        correctIndex: 0,
        backgroundClass: "bg-lunar-mansions",
        difficulty: "veryHard"
    },
    {
        question: "Segundo a lenda, como o Dragão, sendo poderoso, não chegou em primeiro?",
        answers: ["Parou para ajudar pessoas em necessidade", "Ficou dormindo", "Se perdeu no caminho", "Não quis participar"],
        correctIndex: 0,
        backgroundClass: "bg-dragon-story",
        difficulty: "hard"
    },
    {
        question: "Qual fruta é considerada símbolo de sorte e prosperidade?",
        answers: ["Tangerina ou laranja", "Maçã", "Uva", "Morango"],
        correctIndex: 0,
        backgroundClass: "bg-oranges"
    },
    {
        question: "O que são os 'Nian'?",
        answers: ["Monstros da lenda que são afastados por barulho e vermelho", "Deuses da sorte", "Animais sagrados", "Mestres do calendário"],
        correctIndex: 0,
        backgroundClass: "bg-nian-monster",
        difficulty: "veryHard"
    },
    {
        question: "Como o Coelho atravessou o rio na lenda?",
        answers: ["Pulando de pedra em pedra", "Nadando rapidamente", "Voando", "No lombo do Dragão"],
        correctIndex: 0,
        backgroundClass: "bg-rabbit-story",
        difficulty: "hard"
    },
    {
        question: "Quantos termos solares (estações) existem no calendário chinês?",
        answers: ["24 termos solares", "12 termos", "4 termos", "8 termos"],
        correctIndex: 0,
        backgroundClass: "bg-solar-terms",
        difficulty: "veryHard"
    },
    {
        question: "Qual animal representa o ano 2024 no zodíaco chinês?",
        answers: ["Dragão", "Coelho", "Tigre", "Serpente"],
        correctIndex: 0,
        backgroundClass: "bg-dragon"
    },
    {
        question: "Na dança do Dragão, quantas pessoas normalmente seguram o dragão?",
        answers: ["Entre 9 e 15 pessoas", "2 pessoas", "1 pessoa", "Mais de 50 pessoas"],
        correctIndex: 0,
        backgroundClass: "bg-dragon-dance",
        difficulty: "hard"
    },
    {
        question: "O que é Yin e Yang?",
        answers: ["Conceito de forças opostas e complementares", "Dois deuses", "Dois dragões", "Duas montanhas"],
        correctIndex: 0,
        backgroundClass: "bg-yin-yang"
    },
    {
        question: "Qual alimento tem formato arredondado e simboliza união familiar?",
        answers: ["Bolinhos de arroz (tangyuan)", "Macarrão", "Peixe", "Frango"],
        correctIndex: 0,
        backgroundClass: "bg-tangyuan",
        difficulty: "hard"
    },
    {
        question: "O que significa comer peixe no Ano Novo Chinês?",
        answers: ["Abundância e prosperidade para o ano que vem", "Boa saúde", "Longevidade", "Sabedoria"],
        correctIndex: 0,
        backgroundClass: "bg-fish-dish"
    },
    {
        question: "Por que macarrão longo é servido durante o aniversário?",
        answers: ["Simboliza longevidade e vida longa", "É mais gostoso", "É tradição sem significado", "É mais fácil de fazer"],
        correctIndex: 0,
        backgroundClass: "bg-longevity-noodles"
    },
    {
        question: "Quando começou a ser usado o calendário chinês?",
        answers: ["Há mais de 4000 anos", "Há 100 anos", "Há 500 anos", "Há 1000 anos"],
        correctIndex: 0,
        backgroundClass: "bg-ancient-calendar",
        difficulty: "veryHard"
    },
    {
        question: "Qual imperador lendário é creditado com a criação do calendário chinês?",
        answers: ["Imperador Amarelo (Huangdi)", "Imperador de Jade", "Imperador Qin", "Imperador Ming"],
        correctIndex: 0,
        backgroundClass: "bg-yellow-emperor",
        difficulty: "veryHard"
    }
];

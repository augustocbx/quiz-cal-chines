// Sistema de nomes aleatórios com ícones temáticos
const RANDOM_NAMES = [
    { name: "Guardião do Dragão", icon: "🐉" },
    { name: "Mestre do Rato", icon: "🐀" },
    { name: "Sábio do Tigre", icon: "🐅" },
    { name: "Guardião do Coelho", icon: "🐇" },
    { name: "Protetor da Serpente", icon: "🐍" },
    { name: "Cavaleiro do Cavalo", icon: "🐎" },
    { name: "Pastor da Cabra", icon: "🐐" },
    { name: "Rei dos Macacos", icon: "🐵" },
    { name: "Guardião do Galo", icon: "🐓" },
    { name: "Protetor do Cachorro", icon: "🐕" },
    { name: "Sábio do Porco", icon: "🐖" },
    { name: "Guardião do Boi", icon: "🐂" },
    { name: "Mestre das Lanternas", icon: "🏮" },
    { name: "Guardião da Lua", icon: "🌙" },
    { name: "Sábio do Ano Novo", icon: "🎊" },
    { name: "Protetor dos Fogos", icon: "🎆" },
    { name: "Mestre dos Elementos", icon: "🌟" },
    { name: "Guardião do Fogo", icon: "🔥" },
    { name: "Sábio da Água", icon: "💧" },
    { name: "Protetor da Terra", icon: "⛰️" },
    { name: "Mestre do Metal", icon: "⚙️" },
    { name: "Guardião da Madeira", icon: "🌳" },
    { name: "Imperador de Jade", icon: "👑" },
    { name: "Princesa Lunar", icon: "🌕" },
    { name: "Guerreiro Celestial", icon: "⚔️" },
    { name: "Sábio das Estrelas", icon: "✨" },
    { name: "Mestre do Yin Yang", icon: "☯️" },
    { name: "Guardião da Fortuna", icon: "🍀" },
    { name: "Protetor da Prosperidade", icon: "💰" },
    { name: "Dançarino do Leão", icon: "🦁" },
    { name: "Mestre do Calendário", icon: "📅" },
    { name: "Sábio das Tradições", icon: "📜" },
    { name: "Guardião dos Templos", icon: "🏯" },
    { name: "Protetor das Montanhas", icon: "🗻" },
    { name: "Mestre da Filosofia", icon: "📚" },
    { name: "Guardião dos Ancestrais", icon: "🕯️" },
    { name: "Sábio da Longevidade", icon: "🎋" },
    { name: "Protetor da Sabedoria", icon: "🦉" },
    { name: "Mestre dos Ciclos", icon: "🔄" },
    { name: "Guardião das Estações", icon: "🍂" },
    { name: "Sábio das Constelações", icon: "🌌" },
    { name: "Protetor do Imperador", icon: "🏰" },
    { name: "Mestre dos Envelopes", icon: "🧧" },
    { name: "Guardião da Harmonia", icon: "🎵" },
    { name: "Sábio do Equilíbrio", icon: "⚖️" },
    { name: "Protetor da Família", icon: "👨‍👩‍👧‍👦" },
    { name: "Mestre das Festividades", icon: "🎉" },
    { name: "Guardião dos Sonhos", icon: "💭" },
    { name: "Sábio da Meditação", icon: "🧘" },
    { name: "Protetor da Paz", icon: "🕊️" },
    { name: "Mestre das Tangerinas", icon: "🍊" },
    { name: "Guardião dos Peixes", icon: "🐟" },
    { name: "Sábio do Macarrão", icon: "🍜" },
    { name: "Protetor dos Bolinhos", icon: "🥟" },
    { name: "Mestre do Chá", icon: "🍵" },
    { name: "Guardião do Bambu", icon: "🎍" },
    { name: "Sábio da Caligrafia", icon: "✒️" },
    { name: "Protetor dos Jardins", icon: "🌸" },
    { name: "Mestre da Seda", icon: "🧵" },
    { name: "Guardião da Porcelana", icon: "🏺" },
    { name: "Sábio da Medicina", icon: "💊" },
    { name: "Protetor da Aurora", icon: "🌅" },
    { name: "Mestre do Equinócio", icon: "🌗" },
    { name: "Guardião do Solstício", icon: "☀️" },
    { name: "Sábio da Primavera", icon: "🌺" },
    { name: "Protetor do Verão", icon: "🌻" },
    { name: "Mestre do Outono", icon: "🍁" },
    { name: "Guardião do Inverno", icon: "❄️" },
    { name: "Sábio dos 24 Termos", icon: "📖" },
    { name: "Protetor dos 60 Anos", icon: "⏳" },
    { name: "Mestre da Lealdade", icon: "🛡️" },
    { name: "Guardião da Coragem", icon: "💪" },
    { name: "Sábio da Paciência", icon: "🧘‍♀️" },
    { name: "Protetor da Bondade", icon: "❤️" }
];

// Função para gerar um nome aleatório
function getRandomName() {
    return RANDOM_NAMES[Math.floor(Math.random() * RANDOM_NAMES.length)];
}

// Função para obter ícone baseado no nome
function getIconForName(name) {
    const found = RANDOM_NAMES.find(item => item.name === name);
    if (found) return found.icon;

    // Se não encontrou, retorna um ícone padrão baseado na primeira letra
    const firstChar = name.charAt(0).toUpperCase();
    return firstChar;
}

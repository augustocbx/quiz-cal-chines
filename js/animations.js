// Animações de comemoração (5 animações) - Versão otimizada e suave
const CELEBRATION_ANIMATIONS = [
    {
        name: "lantern",
        rarity: "common",
        svg: `<svg viewBox="0 0 200 200" class="animation-svg anim-bounce">
            <defs>
                <linearGradient id="lanternGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style="stop-color:#FF0000;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#8B0000;stop-opacity:1" />
                </linearGradient>
            </defs>
            <rect x="70" y="50" width="60" height="80" rx="10" fill="url(#lanternGrad)" stroke="#FFD700" stroke-width="3"/>
            <ellipse cx="100" cy="50" rx="30" ry="8" fill="#FFD700"/>
            <ellipse cx="100" cy="130" rx="30" ry="8" fill="#FFD700"/>
            <line x1="100" y1="35" x2="100" y2="50" stroke="#000" stroke-width="3"/>
            <rect x="95" y="130" width="10" height="25" fill="#FFD700"/>
            <path d="M85,155 Q100,165 115,155" fill="#FFD700"/>
            <text x="100" y="95" text-anchor="middle" fill="#FFD700" font-size="24" font-weight="bold">福</text>
        </svg>`,
        message: "Sorte e prosperidade!"
    },
    {
        name: "yin-yang",
        rarity: "common",
        svg: `<svg viewBox="0 0 200 200" class="animation-svg anim-rotate-slow">
            <circle cx="100" cy="100" r="70" fill="#000"/>
            <path d="M100,30 A70,70 0 0,1 100,170 A35,35 0 0,0 100,100 A35,35 0 0,1 100,30 Z" fill="#FFF"/>
            <circle cx="100" cy="65" r="10" fill="#FFF"/>
            <circle cx="100" cy="65" r="3" fill="#000"/>
            <circle cx="100" cy="135" r="10" fill="#000"/>
            <circle cx="100" cy="135" r="3" fill="#FFF"/>
        </svg>`,
        message: "Equilíbrio perfeito!"
    },
    {
        name: "zodiac-wheel",
        rarity: "common",
        svg: `<svg viewBox="0 0 200 200" class="animation-svg anim-rotate-slow">
            <circle cx="100" cy="100" r="75" fill="none" stroke="#FFD700" stroke-width="4"/>
            <circle cx="100" cy="100" r="65" fill="none" stroke="#FF0000" stroke-width="2"/>
            <text x="100" y="50" text-anchor="middle" fill="#FF0000" font-size="28">🐀</text>
            <text x="140" y="70" text-anchor="middle" fill="#FF0000" font-size="28">🐂</text>
            <text x="160" y="105" text-anchor="middle" fill="#FF0000" font-size="28">🐅</text>
            <text x="140" y="140" text-anchor="middle" fill="#FF0000" font-size="28">🐇</text>
            <text x="100" y="160" text-anchor="middle" fill="#FF0000" font-size="28">🐉</text>
            <text x="60" y="140" text-anchor="middle" fill="#FF0000" font-size="28">🐍</text>
            <text x="40" y="105" text-anchor="middle" fill="#FF0000" font-size="28">🐎</text>
            <text x="60" y="70" text-anchor="middle" fill="#FF0000" font-size="28">🐐</text>
            <circle cx="100" cy="100" r="20" fill="#FFD700" class="anim-pulse"/>
        </svg>`,
        message: "Ciclo completo!"
    },
    {
        name: "dragon-dance",
        rarity: "rare",
        svg: `<svg viewBox="0 0 200 200" class="animation-svg">
            <defs>
                <radialGradient id="dragonGlow">
                    <stop offset="0%" style="stop-color:#FFD700;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#FF0000;stop-opacity:0" />
                </radialGradient>
            </defs>
            <circle cx="100" cy="100" r="90" fill="url(#dragonGlow)" opacity="0.3" class="anim-pulse"/>
            <g class="anim-bounce">
                <text x="100" y="120" text-anchor="middle" font-size="80">🐉</text>
            </g>
            <g class="anim-rotate">
                <circle cx="50" cy="50" r="5" fill="#FFD700"/>
                <circle cx="150" cy="50" r="5" fill="#FFD700"/>
                <circle cx="150" cy="150" r="5" fill="#FFD700"/>
                <circle cx="50" cy="150" r="5" fill="#FFD700"/>
            </g>
        </svg>`,
        message: "Extraordinário! Poder do dragão!"
    },
    {
        name: "legendary-fireworks",
        rarity: "legendary",
        svg: `<svg viewBox="0 0 200 200" class="animation-svg">
            <defs>
                <radialGradient id="fireGlow">
                    <stop offset="0%" style="stop-color:#FFD700;stop-opacity:1" />
                    <stop offset="50%" style="stop-color:#FF0000;stop-opacity:0.8" />
                    <stop offset="100%" style="stop-color:#FF69B4;stop-opacity:0" />
                </radialGradient>
            </defs>
            <circle cx="100" cy="100" r="95" fill="url(#fireGlow)" class="anim-glow"/>
            <g class="anim-rotate-fast">
                <line x1="100" y1="30" x2="100" y2="60" stroke="#FFD700" stroke-width="4"/>
                <line x1="141" y1="59" x2="121" y2="79" stroke="#FF0000" stroke-width="4"/>
                <line x1="170" y1="100" x2="140" y2="100" stroke="#FFD700" stroke-width="4"/>
                <line x1="141" y1="141" x2="121" y2="121" stroke="#FF0000" stroke-width="4"/>
                <line x1="100" y1="170" x2="100" y2="140" stroke="#FFD700" stroke-width="4"/>
                <line x1="59" y1="141" x2="79" y2="121" stroke="#FF0000" stroke-width="4"/>
                <line x1="30" y1="100" x2="60" y2="100" stroke="#FFD700" stroke-width="4"/>
                <line x1="59" y1="59" x2="79" y2="79" stroke="#FF0000" stroke-width="4"/>
            </g>
            <g class="anim-rotate-reverse">
                <circle cx="100" cy="40" r="8" fill="#FFD700" class="anim-pulse"/>
                <circle cx="135" cy="65" r="8" fill="#FF0000" class="anim-pulse"/>
                <circle cx="160" cy="100" r="8" fill="#FFD700" class="anim-pulse"/>
                <circle cx="135" cy="135" r="8" fill="#FF0000" class="anim-pulse"/>
                <circle cx="100" cy="160" r="8" fill="#FFD700" class="anim-pulse"/>
                <circle cx="65" cy="135" r="8" fill="#FF0000" class="anim-pulse"/>
                <circle cx="40" cy="100" r="8" fill="#FFD700" class="anim-pulse"/>
                <circle cx="65" cy="65" r="8" fill="#FF0000" class="anim-pulse"/>
            </g>
            <text x="100" y="110" text-anchor="middle" fill="#FFF" font-size="32" font-weight="bold">恭喜</text>
        </svg>`,
        message: "PERFEITO! Mestre do Calendário!"
    }
];

// Animações de consolo (5 animações) - Versão otimizada e suave
const CONSOLATION_ANIMATIONS = [
    {
        name: "confused-dragon",
        frequency: 0.50, // 50%
        svg: `<svg viewBox="0 0 200 200" class="animation-svg anim-wobble">
            <circle cx="100" cy="100" r="60" fill="#FFE4B5" stroke="#FF8C00" stroke-width="3"/>
            <text x="100" y="130" text-anchor="middle" font-size="60">🐉</text>
            <circle cx="80" cy="80" r="8" fill="#000"/>
            <circle cx="120" cy="80" r="8" fill="#000"/>
            <text x="100" y="50" text-anchor="middle" fill="#FF0000" font-size="40" font-weight="bold">?</text>
        </svg>`,
        message: "Ops! Revise o zodíaco..."
    },
    {
        name: "cloudy-moon",
        frequency: 0.30, // 30%
        svg: `<svg viewBox="0 0 200 200" class="animation-svg anim-wobble">
            <circle cx="80" cy="80" r="30" fill="#FFD700" opacity="0.7"/>
            <ellipse cx="120" cy="100" rx="50" ry="35" fill="#A9A9A9" opacity="0.8" class="anim-pulse"/>
            <ellipse cx="90" cy="110" rx="45" ry="30" fill="#B0C4DE" opacity="0.7" class="anim-pulse"/>
            <text x="100" y="160" text-anchor="middle" fill="#666" font-size="18">Lua escondida...</text>
        </svg>`,
        message: "Lua nublada! Tente de novo..."
    },
    {
        name: "broken-lantern",
        frequency: 0.15, // 15%
        svg: `<svg viewBox="0 0 200 200" class="animation-svg anim-rotate">
            <rect x="70" y="60" width="60" height="70" rx="10" fill="#CD5C5C" stroke="#8B0000" stroke-width="3" opacity="0.6"/>
            <line x1="70" y1="80" x2="130" y2="120" stroke="#000" stroke-width="3"/>
            <line x1="130" y1="80" x2="70" y2="120" stroke="#000" stroke-width="3"/>
            <ellipse cx="100" cy="60" rx="30" ry="8" fill="#8B0000" opacity="0.6"/>
            <text x="100" y="160" text-anchor="middle" fill="#CD5C5C" font-size="20" font-weight="bold">!</text>
        </svg>`,
        message: "Lanterna apagada! Continue tentando..."
    },
    {
        name: "falling-petal",
        frequency: 0.03, // 3%
        svg: `<svg viewBox="0 0 200 200" class="animation-svg">
            <g class="anim-float">
                <ellipse cx="100" cy="80" rx="15" ry="25" fill="#FFB6C1" transform="rotate(45 100 80)" opacity="0.8"/>
                <ellipse cx="100" cy="80" rx="15" ry="25" fill="#FFB6C1" transform="rotate(135 100 80)" opacity="0.8"/>
                <ellipse cx="100" cy="80" rx="15" ry="25" fill="#FF69B4" transform="rotate(90 100 80)" opacity="0.9"/>
                <ellipse cx="100" cy="80" rx="15" ry="25" fill="#FF69B4" transform="rotate(0 100 80)" opacity="0.9"/>
                <circle cx="100" cy="80" r="8" fill="#FFD700"/>
            </g>
            <path d="M100,100 Q95,120 100,140 Q105,120 100,100" stroke="#FFB6C1" stroke-width="2" fill="none" opacity="0.6" stroke-dasharray="3,3"/>
        </svg>`,
        message: "Passou rápido como uma pétala!"
    },
    {
        name: "yin-yang-unbalanced",
        frequency: 0.02, // 2%
        svg: `<svg viewBox="0 0 200 200" class="animation-svg">
            <defs>
                <radialGradient id="unbalanced">
                    <stop offset="0%" style="stop-color:#4B0082;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#8A2BE2;stop-opacity:0.3" />
                </radialGradient>
            </defs>
            <circle cx="100" cy="100" r="70" fill="url(#unbalanced)" class="anim-pulse"/>
            <g class="anim-wobble">
                <circle cx="100" cy="100" r="50" fill="#000" opacity="0.3"/>
                <path d="M100,50 A50,50 0 0,1 100,150" fill="#FFF" opacity="0.3"/>
                <circle cx="100" cy="75" r="8" fill="#FFF" opacity="0.3"/>
                <circle cx="100" cy="125" r="8" fill="#000" opacity="0.3"/>
            </g>
            <text x="100" y="190" text-anchor="middle" fill="#8A2BE2" font-size="16">Desequilíbrio</text>
        </svg>`,
        message: "Desequilibrado! Não desista!"
    }
];

// Função para selecionar animação de comemoração baseada nos acertos
function getCelebrationAnimation(correctAnswers, totalQuestions) {
    if (correctAnswers === totalQuestions) {
        // 10/10 - Lendária
        return CELEBRATION_ANIMATIONS.find(anim => anim.rarity === "legendary");
    } else if (correctAnswers === totalQuestions - 1) {
        // 9/10 - Rara
        return CELEBRATION_ANIMATIONS.find(anim => anim.rarity === "rare");
    } else {
        // Comum - escolhe aleatoriamente entre as 3 comuns
        const commonAnims = CELEBRATION_ANIMATIONS.filter(anim => anim.rarity === "common");
        return commonAnims[Math.floor(Math.random() * commonAnims.length)];
    }
}

// Função para selecionar animação de consolo baseada em frequência
function getConsolationAnimation() {
    const rand = Math.random();
    let cumulative = 0;

    for (const anim of CONSOLATION_ANIMATIONS) {
        cumulative += anim.frequency;
        if (rand <= cumulative) {
            return anim;
        }
    }

    // Fallback para a primeira animação
    return CONSOLATION_ANIMATIONS[0];
}

// Função principal para mostrar animação
function showAnimation(isCorrect, correctAnswers = 0, totalQuestions = 10) {
    const container = document.getElementById('animation-container');
    const element = document.getElementById('animation-element');

    if (!container || !element) return;

    let animation;
    if (isCorrect) {
        animation = getCelebrationAnimation(correctAnswers, totalQuestions);
    } else {
        animation = getConsolationAnimation();
    }

    // Limpa conteúdo anterior
    element.innerHTML = '';

    // Adiciona SVG
    element.innerHTML = animation.svg;

    // Adiciona mensagem
    const messageDiv = document.createElement('div');
    messageDiv.className = 'animation-message';
    messageDiv.textContent = animation.message;
    element.appendChild(messageDiv);

    // Mostra container
    container.classList.remove('hidden');
    container.classList.add('visible');

    // Esconde após 2.5 segundos
    setTimeout(() => {
        container.classList.remove('visible');
        container.classList.add('hidden');
    }, 2500);
}

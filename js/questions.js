// Banco de perguntas sobre os 12 tipos de calendários mais famosos do mundo
const QUESTION_BANK = [
    // PERGUNTA GERAL SOBRE USO DOS CALENDÁRIOS (1 pergunta)
    {
        question: "De acordo com o texto, além de planejar rotinas, qual é outro uso dos calendários?",
        answers: ["Para organizar compromissos, saber os dias, marcar datas, celebrações e outros eventos importantes", "Apenas para contar os anos", "Somente para fins religiosos", "Exclusivamente para agricultura"],
        correctIndex: 0,
        backgroundClass: "bg-general"
    },

    // CALENDÁRIO CHINÊS (4 perguntas)
    {
        question: "O Calendário Chinês é orientado por quais ciclos?",
        answers: ["Pelos ciclos da Lua e do Sol", "Apenas pelo ciclo do Sol", "Apenas pelo ciclo da Lua", "Pelos ciclos das estrelas"],
        correctIndex: 0,
        backgroundClass: "bg-chinese"
    },
    {
        question: "A cada quantos anos o ciclo do horóscopo chinês se completa?",
        answers: ["A cada 12 anos", "A cada 10 anos", "A cada 5 anos", "A cada 20 anos"],
        correctIndex: 0,
        backgroundClass: "bg-chinese"
    },
    {
        question: "Qual é o outro nome dado ao Ano Novo Chinês?",
        answers: ["Ano Novo Lunar ou Festival da Primavera", "Festival do Sol", "Festival do Dragão", "Ano Novo Gregoriano"],
        correctIndex: 0,
        backgroundClass: "bg-chinese"
    },

    // CALENDÁRIO ISLÂMICO (4 perguntas)
    {
        question: "Qual ciclo o Calendário Islâmico segue como base?",
        answers: ["O ciclo lunar", "O ciclo solar", "Os ciclos lunar e solar", "O ciclo das estrelas"],
        correctIndex: 0,
        backgroundClass: "bg-islamic"
    },
    {
        question: "Quantos dias o ano tem no Calendário Islâmico?",
        answers: ["354 dias", "365 dias", "360 dias", "366 dias"],
        correctIndex: 0,
        backgroundClass: "bg-islamic"
    },
    {
        question: "O primeiro ano do Calendário Islâmico teve início em que data do calendário gregoriano?",
        answers: ["16 de julho de 622 d.C.", "1 de janeiro de 622 d.C.", "25 de dezembro de 622 d.C.", "15 de agosto de 622 d.C."],
        correctIndex: 0,
        backgroundClass: "bg-islamic",
        difficulty: "hard"
    },
    {
        question: "O Ano Novo Islâmico (Al-Hijra) é uma data fixa ou móvel?",
        answers: ["É uma data móvel (variável)", "É sempre dia 1º de janeiro", "É sempre dia 16 de julho", "É uma data fixa em cada país"],
        correctIndex: 0,
        backgroundClass: "bg-islamic",
        difficulty: "hard"
    },

    // CALENDÁRIO MAIA (5 perguntas)
    {
        question: "Quais são as duas partes em que o Calendário Maia é dividido?",
        answers: ["Haab e Tzolkin", "Sol e Lua", "Dia e Noite", "Norte e Sul"],
        correctIndex: 0,
        backgroundClass: "bg-mayan"
    },
    {
        question: "No Calendário Maia, qual parte é considerada o calendário religioso?",
        answers: ["O Tzolkin", "O Haab", "O calendário solar", "O calendário lunar"],
        correctIndex: 0,
        backgroundClass: "bg-mayan"
    },
    {
        question: "Como o calendário Haab (Maia) é dividido?",
        answers: ["18 meses de 20 dias cada (e 5 dias que 'ficam de fora')", "12 meses de 30 dias cada", "13 meses de 28 dias cada", "20 meses de 18 dias cada"],
        correctIndex: 0,
        backgroundClass: "bg-mayan",
        difficulty: "hard"
    },
    {
        question: "Qual calendário tem 18 meses de 20 dias, mais 5 dias que 'ficam de fora'?",
        answers: ["O calendário Haab (parte do Calendário Maia)", "O Calendário Gregoriano", "O Calendário Juliano", "O Calendário Etíope"],
        correctIndex: 0,
        backgroundClass: "bg-mayan",
        difficulty: "hard"
    },
    {
        question: "Qual calendário tem 13 meses de 20 dias, totalizando 260 dias?",
        answers: ["O calendário Tzolkin (a parte religiosa do Calendário Maia)", "O Calendário Etíope", "O Calendário Islâmico", "O Calendário Judaico"],
        correctIndex: 0,
        backgroundClass: "bg-mayan",
        difficulty: "veryHard"
    },

    // CALENDÁRIO JULIANO (4 perguntas)
    {
        question: "Qual calendário o Calendário Juliano substituiu em 46 a.C.?",
        answers: ["O calendário romano", "O Calendário Gregoriano", "O Calendário Egípcio", "O Calendário Maia"],
        correctIndex: 0,
        backgroundClass: "bg-julian"
    },
    {
        question: "O Calendário Juliano é considerado um calendário de que tipo?",
        answers: ["Solar", "Lunar", "Lunissolar", "Estelar"],
        correctIndex: 0,
        backgroundClass: "bg-julian"
    },
    {
        question: "Qual é a diferença de dias na contagem mencionada entre o Calendário Juliano e o Gregoriano?",
        answers: ["13 dias", "7 dias", "1 dia", "30 dias"],
        correctIndex: 0,
        backgroundClass: "bg-julian",
        difficulty: "hard"
    },
    {
        question: "Qual calendário foi instituído em 46 a.C. e apresentava falhas na contagem do tempo?",
        answers: ["O Calendário Juliano", "O Calendário Gregoriano", "O Calendário Islâmico", "O Calendário Maia"],
        correctIndex: 0,
        backgroundClass: "bg-julian"
    },

    // CALENDÁRIO GREGORIANO (3 perguntas)
    {
        question: "Quem instituiu o Calendário Gregoriano e em que ano?",
        answers: ["O Papa Gregório XIII em 1582", "Júlio César em 46 a.C.", "O Imperador Chinês em 2697 a.C.", "Kim Il-sung em 1912"],
        correctIndex: 0,
        backgroundClass: "bg-gregorian"
    },
    {
        question: "O Calendário Gregoriano é baseado no movimento da Terra ao redor de qual astro?",
        answers: ["Do Sol", "Da Lua", "Das estrelas", "De Júpiter"],
        correctIndex: 0,
        backgroundClass: "bg-gregorian"
    },
    {
        question: "Como o Calendário Gregoriano forma o dia a mais incluído nos anos bissextos?",
        answers: ["Pelo acúmulo das 6 horas 'sobrantes' de cada ano (pois o ciclo solar tem 365 dias e 6 horas)", "Por tradição religiosa", "Por decisão do Papa", "Para alinhar com a Lua"],
        correctIndex: 0,
        backgroundClass: "bg-gregorian",
        difficulty: "hard"
    },

    // CALENDÁRIO ETÍOPE (5 perguntas)
    {
        question: "Em qual país o Calendário Etíope é usado?",
        answers: ["Na Etiópia", "No Egito", "Em Israel", "Na Coreia do Norte"],
        correctIndex: 0,
        backgroundClass: "bg-ethiopian"
    },
    {
        question: "Quantos meses tem o ano no Calendário Etíope?",
        answers: ["13 meses", "12 meses", "10 meses", "18 meses"],
        correctIndex: 0,
        backgroundClass: "bg-ethiopian"
    },
    {
        question: "Qual é a estrutura dos meses no Calendário Etíope?",
        answers: ["12 meses com 30 dias e 1 mês (o último) com 5 dias", "13 meses com 28 dias cada", "12 meses com 31 dias cada", "10 meses com 36 dias cada"],
        correctIndex: 0,
        backgroundClass: "bg-ethiopian"
    },
    {
        question: "O que acontece com o último mês do Calendário Etíope nos anos bissextos?",
        answers: ["Ele recebe mais um dia (totalizando 6 dias)", "Ele continua com 5 dias", "Ele é eliminado", "Ele passa a ter 10 dias"],
        correctIndex: 0,
        backgroundClass: "bg-ethiopian",
        difficulty: "hard"
    },
    {
        question: "O Calendário Etíope tem sua organização parecida com a de qual outro calendário?",
        answers: ["Com a do Calendário Juliano", "Com a do Calendário Gregoriano", "Com a do Calendário Islâmico", "Com a do Calendário Chinês"],
        correctIndex: 0,
        backgroundClass: "bg-ethiopian",
        difficulty: "hard"
    },

    // CALENDÁRIO JUDAICO (3 perguntas)
    {
        question: "O Calendário Judaico é classificado como solar, lunar ou lunissolar?",
        answers: ["Lunissolar", "Solar", "Lunar", "Estelar"],
        correctIndex: 0,
        backgroundClass: "bg-jewish"
    },
    {
        question: "Quantos meses um ano pode ter no Calendário Judaico?",
        answers: ["12 ou 13 meses", "Sempre 12 meses", "Sempre 13 meses", "10 ou 11 meses"],
        correctIndex: 0,
        backgroundClass: "bg-jewish"
    },
    {
        question: "Qual calendário, criado aproximadamente em 1447 a.C., é usado em Israel há mais de 3 mil anos?",
        answers: ["O Calendário Judaico", "O Calendário Gregoriano", "O Calendário Islâmico", "O Calendário Egípcio"],
        correctIndex: 0,
        backgroundClass: "bg-jewish",
        difficulty: "hard"
    },

    // CALENDÁRIO JUCHE (4 perguntas)
    {
        question: "Em qual país o Calendário Juche é utilizado?",
        answers: ["Na Coreia do Norte", "Na China", "No Japão", "Na Coreia do Sul"],
        correctIndex: 0,
        backgroundClass: "bg-juche"
    },
    {
        question: "O Calendário Juche é classificado como solar ou lunar?",
        answers: ["Solar", "Lunar", "Lunissolar", "Estelar"],
        correctIndex: 0,
        backgroundClass: "bg-juche"
    },
    {
        question: "O que marca o Ano 1 no Calendário Juche?",
        answers: ["O nascimento do líder Kim Il-sung em 1912", "A fundação da Coreia do Norte", "O nascimento de Jesus", "A criação do calendário"],
        correctIndex: 0,
        backgroundClass: "bg-juche"
    },
    {
        question: "Em qual calendário o Ano 1 é marcado pelo nascimento de Kim Il-sung em 1912?",
        answers: ["No Calendário Juche", "No Calendário Chinês", "No Calendário Gregoriano", "No Calendário Islâmico"],
        correctIndex: 0,
        backgroundClass: "bg-juche",
        difficulty: "hard"
    },

    // CALENDÁRIO EGÍPCIO (3 perguntas)
    {
        question: "Qual era a estrutura do ano no Calendário Egípcio?",
        answers: ["12 meses de 30 dias, mais 5 dias extras", "13 meses de 28 dias", "12 meses de 31 dias", "10 meses de 36 dias"],
        correctIndex: 0,
        backgroundClass: "bg-egyptian"
    },
    {
        question: "Para que serviam os 5 dias extras no Calendário Egípcio?",
        answers: ["Para homenagear os deuses", "Para celebrar o faraó", "Para fazer festas", "Para ajustar o ano"],
        correctIndex: 0,
        backgroundClass: "bg-egyptian"
    },
    {
        question: "A criação do Calendário Egípcio está diretamente relacionada a qual evento natural?",
        answers: ["Ao Rio Nilo e suas variações (cheia, plantio e colheita)", "Às fases da Lua", "Ao movimento do Sol", "Às tempestades de areia"],
        correctIndex: 0,
        backgroundClass: "bg-egyptian"
    },

    // CALENDÁRIOS CONCEITUAIS: LUNAR (4 perguntas)
    {
        question: "O Calendário Lunar (conceito) segue as fases de qual astro?",
        answers: ["Da Lua", "Do Sol", "Das estrelas", "Dos planetas"],
        correctIndex: 0,
        backgroundClass: "bg-lunar-concept"
    },
    {
        question: "Em um Calendário Lunar, quantos dias os meses costumam ter?",
        answers: ["Intercaladamente 29 e 30 dias", "Sempre 30 dias", "Sempre 31 dias", "Sempre 28 dias"],
        correctIndex: 0,
        backgroundClass: "bg-lunar-concept"
    },
    {
        question: "Com qual fase da lua os meses se iniciam em um Calendário Lunar?",
        answers: ["Com a lua nova", "Com a lua cheia", "Com a lua crescente", "Com a lua minguante"],
        correctIndex: 0,
        backgroundClass: "bg-lunar-concept"
    },
    {
        question: "Quantos dias no total o ano costuma ter em um Calendário Lunar?",
        answers: ["354 ou 355 dias", "365 dias", "360 dias", "366 dias"],
        correctIndex: 0,
        backgroundClass: "bg-lunar-concept"
    },

    // CALENDÁRIOS CONCEITUAIS: SOLAR (3 perguntas)
    {
        question: "O Calendário Solar (conceito) segue o ciclo de qual astro?",
        answers: ["Do Sol", "Da Lua", "Das estrelas", "Dos planetas"],
        correctIndex: 0,
        backgroundClass: "bg-solar-concept"
    },
    {
        question: "Quais são os dois exemplos de calendários SOLARES citados no texto?",
        answers: ["Gregoriano e Juliano", "Chinês e Judaico", "Islâmico e Egípcio", "Maia e Etíope"],
        correctIndex: 0,
        backgroundClass: "bg-solar-concept"
    },
    {
        question: "Qual é a estrutura típica de um Calendário Solar, como o usado no Ocidente?",
        answers: ["12 meses, 365 dias e anos bissextos a cada 4 anos", "13 meses, 360 dias", "10 meses, 354 dias", "18 meses, 365 dias"],
        correctIndex: 0,
        backgroundClass: "bg-solar-concept"
    },

    // CALENDÁRIOS CONCEITUAIS: LUNISSOLAR (3 perguntas)
    {
        question: "O Calendário Lunissolar (conceito) usa quais astros como base?",
        answers: ["O Sol e a Lua", "Apenas o Sol", "Apenas a Lua", "As estrelas"],
        correctIndex: 0,
        backgroundClass: "bg-lunisolar-concept"
    },
    {
        question: "Quais são os dois exemplos de calendários LUNISSOLARES citados no texto?",
        answers: ["Judaico e Chinês", "Gregoriano e Juliano", "Islâmico e Egípcio", "Maia e Etíope"],
        correctIndex: 0,
        backgroundClass: "bg-lunisolar-concept"
    },
    {
        question: "Qual ajuste é necessário fazer em calendários lunissolares?",
        answers: ["A inclusão de um mês extra periodicamente", "A remoção de um mês", "A mudança da ordem dos meses", "Nenhum ajuste é necessário"],
        correctIndex: 0,
        backgroundClass: "bg-lunisolar-concept"
    }
];

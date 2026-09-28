import type { PainLogEntry, PainSignal, TendonLoad, TendonPhase, WorkoutStep } from "./types";

export const PHASES: TendonPhase[] = [1, 2, 3, 4];

export type PhaseGuide = {
  id: TendonPhase;
  title: string;
  window: string;
  goal: string;
  dose: string;
  exercises: string[];
  sport: string;
  advance: string[];
};

export const phaseGuides: PhaseGuide[] = [
  {
    id: 1,
    title: "Isometria, sem compressão",
    window: "cerca de 1–4 semanas — vale o critério, não o calendário",
    goal: "Modular a dor e manter carga no tendão com o quadril pouco flexionado.",
    dose: "5 × 30–45 s, esforço 50–70%, 1–2×/dia. Pode ser antes de correr ou jogar.",
    exercises: [
      "Ponte isométrica com joelhos a cerca de 90°",
      "Isometria prona de flexão de joelho com banda",
      "Ponte isométrica de alavanca longa, no fim da fase",
    ],
    sport: "Corrida e tênis se a dor ficar ≤ 3/10 e não piorar no dia seguinte: plano, ritmo leve, passada mais curta (cadência +5–10%), sem subida e sem tiro. No tênis, bate-bola, sem esticada longa.",
    advance: [
      "Dor em repouso por volta de 0–1",
      "Isometria ≤ 2/10",
      "10 pontes unilaterais (joelho ~90°) ≤ 3/10, sem piora em 24 h",
      "Sentar 30 minutos de forma tolerável",
    ],
  },
  {
    id: 2,
    title: "Força lenta e pesada, pouca flexão do quadril",
    window: "cerca de 4–8 semanas",
    goal: "Recuperar força e capacidade do músculo-tendão, ainda longe da compressão do ísquio.",
    dose: "3–4 × 6–15, tempo 3 s para subir e 3 s para descer, esforço 7–8/10, 2–3×/semana, com pelo menos 48 h entre sessões pesadas. A isometria continua como analgésico, se ajudar.",
    exercises: [
      "Ponte bilateral e depois unilateral, lenta",
      "Ponte de alavanca longa",
      "Flexão de joelho prona com banda",
      "Ponte com calcanhares no rolo",
      "Extensão de quadril em pé com banda",
      "Hip thrust",
      "Dobradiça de quadril com bastão",
    ],
    sport: "Volume de corrida sobe aos poucos, no plano. Tênis em ritmo moderado — duplas é uma boa porta de entrada.",
    advance: [
      "Ponte unilateral (joelho ~90°) ≥ 20–25 repetições por lado, ≤ 2/10, simetria ≥ 90%",
      "Ponte unilateral de alavanca longa: 15 repetições",
      "Duas semanas seguidas no verde",
    ],
  },
  {
    id: 3,
    title: "Flexão do quadril, aos poucos",
    window: "cerca de 6–12 semanas",
    goal: "Tolerar carga onde o tendão é comprimido e ganhar força de um lado só.",
    dose: "3–4 × 6–10. Nórdico assistido 1–2×/semana, não no mesmo dia da perna pesada da academia.",
    exercises: [
      "Levantamento terra romeno com amplitude crescente",
      "RDL unilateral apoiado",
      "Flexão de joelhos no rolo",
      "Ponte unilateral de alavanca longa",
      "Nórdico assistido com banda",
    ],
    sport: "Voltam acelerações curtas e subidas leves. Tênis simples em ritmo moderado. No Pilates entram roll up, teaser de uma perna e leg pull back.",
    advance: [
      "RDL unilateral com cerca de 20–25% do peso corporal, 3 × 8, ≤ 2/10",
      "RDL bilateral com carga moderada-alta, sem piora",
      "Nórdico assistido 3 × 5, controlado",
      "Sentar ≥ 60 min e testes de provocação sem dor relevante",
    ],
  },
  {
    id: 4,
    title: "Energia e volta à corrida e ao tênis",
    window: "retorno ao esporte",
    goal: "Preparar o tendão para o ciclo rápido de alongar e encurtar: arranque, tiro, afundo.",
    dose: "Pliometria e educativos 1–2×/semana, com 48–72 h de intervalo. Nunca dois dias seguidos de carga alta. Mantenha a força da fase 3.",
    exercises: [
      "Kettlebell swing (ou halter) em dia alto",
      "A-skip e depois B-skip",
      "Saltos alternados, progressivos",
      "Manutenção: RDL, nórdico, hip thrust, 1–2×/semana",
    ],
    sport: "Corrida: 30 min contínuos no plano ≤ 3/10, depois strides, subida, intervalado e tiro. Tênis: bate-bola, depois deslocamento, sets e partida. Alta quando treinos e jogos completos ficam sem piora em 24 h por 2–3 semanas.",
    advance: [
      "Treinos e jogos completos sem piora em 24 h, por 2–3 semanas",
      "Força de posterior mantida 1–2×/semana, por tempo indeterminado",
    ],
  },
];

export const painRule = {
  during: "Durante o exercício, dor no máximo 3/10.",
  after: "Em até 24 h a dor volta ao que era antes da sessão.",
  morning: "Teste da manhã, sempre o mesmo: 10 pontes unilaterais do lado que dói, ou 5 minutos sentado numa cadeira dura. Anote 0–10.",
  green: "Verde, 0–2: siga o plano. Se ficar verde por 1–2 semanas e os critérios da fase estiverem batidos, dá para conversar sobre avançar.",
  yellow: "Amarelo, 3: aceitável se voltar ao basal em 24 h. Mantenha a carga. Não progrida.",
  red: "Vermelho, acima de 3 ou piora que passa de 24 h: reduza um degrau — volume, carga ou quanto o quadril flexiona — por 2–3 sessões. Não pare tudo.",
};

export const retiredMoves: { name: string; instead: string; why: string }[] = [
  {
    name: "Alongamento de posterior com banda",
    instead: "Carga progressiva (isometria e força lenta).",
    why: "Flexão do quadril com o joelho estendido puxa e comprime a origem do tendão contra o ísquio. Alongar não trata tendinopatia.",
  },
  {
    name: "Spine Stretch Forward",
    instead: "Fora do plano. Na fase 4, se o fisioterapeuta liberar, só com joelhos flexionados.",
    why: "Sentar longo e dobrar o tronco à frente comprime o tendão e deixa a lombar em flexão — ruim para a artrose também.",
  },
  {
    name: "Saw (a serra)",
    instead: "Rotação no tórax: livro aberto e passar a agulha, com a cabeça apoiada.",
    why: "Flexão com rotação e alcance ao pé, em sentado longo, aperta a lombar e o tendão.",
  },
  {
    name: "Rolo no trato iliotibial",
    instead: "Rolo no quadríceps.",
    why: "Rolar o trato dói e não o alonga.",
  },
  {
    name: "Rolo em cima do ísquio",
    instead: "Rolo no glúteo médio, na face lateral, longe do osso em que você senta.",
    why: "A compressão direta irrita a origem do tendão.",
  },
  {
    name: "Pernas estendidas na parede",
    instead: "Respiração 90/90 com os pés na parede e os joelhos dobrados.",
    why: "Evita o alongamento de posterior com o quadril fletido.",
  },
  {
    name: "Balanço da perna para frente e para trás",
    instead: "Só o balanço lateral. O balanço sagital volta na fase 4, como educativo de corrida.",
    why: "É um alongamento balístico do posterior.",
  },
  {
    name: "Figura 4 puxando a coxa ao peito",
    instead: "Figura 4 com o pé de baixo no chão.",
    why: "Puxar a coxa leva o quadril a uma flexão funda, em cima do tendão.",
  },
  {
    name: "Sentado longo no rolo (spine twist clássico)",
    instead: "Spine twist sentado numa almofada, pernas cruzadas, sem apoiar o peso no ísquio duro.",
    why: "O osso do sentar em cima de uma superfície firme comprime a origem do tendão.",
  },
];

export const sittingAdvice = [
  "Reunião, carro e consultório: assento macio ou uma almofada, e levante a cada 30–45 min.",
  "Evite cruzar as pernas e cadeira baixa, que enfia o quadril em flexão funda.",
  "Nas fases 1 e 2, não alongue o posterior, não suba forte, não dê tiro e não aumente a passada.",
  "Sono, carga da semana e pico repentino de volume pesam tanto quanto o exercício do dia.",
];

export const gymAdvice = [
  "Fases 1–2: mesa flexora deitada, em vez da cadeira flexora sentada. Leg press e agachamento com o quadril até cerca de 90°. Sem stiff pesado, good morning e afundo fundo. Hip thrust pode.",
  "Fase 3: RDL com amplitude que cresce, cadeira flexora, agachamento mais fundo e afundo búlgaro, devagar.",
  "Fase 4: treino completo, e a força pesada de posterior fica 1–2×/semana.",
  "Não faça o bloco pesado do tendão no mesmo dia da perna pesada da academia — ou faça o bloco uma vez só.",
];

export const redFlags = [
  "Dor à noite ou em repouso que vai piorando",
  "Formigamento, perda de força ou dor que desce pela perna",
  "Estalo súbito com roxo na coxa",
  "Piora mesmo depois de reduzir a carga",
];

export const references = [
  "Goom TSH, Malliaras P, Reiman MP, Purdam CR. Proximal hamstring tendinopathy: clinical aspects of assessment and management. J Orthop Sports Phys Ther. 2016;46(6):483–493.",
  "Cook JL, Purdam CR. Is compressive load a factor in the development of tendinopathy? Br J Sports Med. 2012;46(3):163–168.",
  "Silbernagel KG, Thomeé R, Eriksson BI, Karlsson J. Continued sports activity, using a pain-monitoring model, during rehabilitation in patients with Achilles tendinopathy. Am J Sports Med. 2007;35(6):897–906.",
];

export const referenceVideos: { url: string; title: string; author: string }[] = [
  {
    url: "https://www.youtube.com/watch?v=6I-HMWJQEHI",
    title: "Hamstring Tendinopathy Progressive Rehab Program",
    author: "Physiotutors",
  },
  {
    url: "https://www.youtube.com/watch?v=uzbg4ZOWwoQ",
    title: "Proximal Hamstring Tendinopathy Rehab (4 Stages)",
    author: "E3 Rehab",
  },
  {
    url: "https://www.youtube.com/watch?v=7Gkk1onWor0",
    title: "Stage 1 Proximal Hamstring Tendinopathy Rehab Exercises | Running Rehab: From Pain to Performance",
    author: "Physiotutors",
  },
];

export function painSignal(entry: Pick<PainLogEntry, "during" | "morning" | "baseline">): {
  signal: PainSignal;
  provisional: boolean;
} {
  const waitingMorning = entry.morning === null || entry.baseline === null;
  if (entry.during > 3 || (entry.morning !== null && entry.morning > 3) || entry.baseline === false) {
    return { signal: "vermelho", provisional: false };
  }
  if (entry.during === 3 || entry.morning === 3) {
    return { signal: "amarelo", provisional: waitingMorning };
  }
  return { signal: "verde", provisional: waitingMorning };
}

export const signalCopy: Record<PainSignal, { title: string; body: string }> = {
  verde: {
    title: "Verde — siga",
    body: "Dor baixa e, se a manhã já foi anotada, voltou ao basal. Mantenha o plano. Progredir pede 1–2 semanas assim e os critérios da fase.",
  },
  amarelo: {
    title: "Amarelo — mantenha",
    body: "3/10 cabe, desde que a manhã seguinte volte ao basal. Não aumente carga, volume nem flexão do quadril nesta semana.",
  },
  vermelho: {
    title: "Vermelho — desça um degrau",
    body: "Passe de 3/10, ou a dor não voltou em 24 h. Reduza volume, carga ou amplitude por 2–3 sessões. O tendão continua trabalhando — só menos.",
  },
};

const loadLabel: Record<TendonLoad, string> = {
  analgesic: "Dose analgésica",
  strength: "Força do tendão",
  second: "Segunda sessão do tendão",
  sport: "Energia / esporte",
  recovery: "Recuperação",
};

export function tendonLoadLabel(load: TendonLoad): string {
  return loadLabel[load];
}

function sets(exerciseId: string, seconds: number, note: string, times: number): WorkoutStep[] {
  return Array.from({ length: times }, (_, index) => ({
    exerciseId,
    seconds,
    note: times > 1 ? `${note} · série ${index + 1}/${times}` : note,
  }));
}

function side(
  exerciseId: string,
  seconds: number,
  note: string,
  times = 1,
): WorkoutStep[] {
  const steps: WorkoutStep[] = [];
  for (let set = 1; set <= times; set += 1) {
    const suffix = times > 1 ? ` · série ${set}/${times}` : "";
    steps.push(
      { exerciseId, seconds, note: `${note} Perna direita.${suffix}` },
      { exerciseId, seconds, note: `${note} Perna esquerda.${suffix}` },
    );
  }
  return steps;
}

export function tendonSteps(phase: TendonPhase, load: TendonLoad): WorkoutStep[] {
  if (load === "analgesic") {
    if (phase === 1) {
      return sets("iso-ponte", 45, "Analgésico. Joelho ~90°, esforço 50–70%.", 3);
    }
    return sets("iso-ponte", 40, "Isometria analgésica, se o tendão gostou dela hoje.", 2);
  }

  if (load === "recovery") {
    if (phase <= 2) {
      return sets("iso-ponte", 45, "Leve. Joelho ~90°. Se passar de 2/10, pare na série.", 3);
    }
    return sets("iso-ponte", 40, "Uma série leve — ou pule, se o tendão acordou quieto.", 1);
  }

  if (load === "sport") {
    if (phase < 4) {
      return sets(
        "iso-ponte",
        40,
        phase === 1
          ? "Antes de correr ou jogar. Sem tiro e sem subida hoje."
          : "Antes do tênis ou da corrida. Energia explosiva ainda não.",
        phase === 1 ? 3 : 2,
      );
    }
    return [
      ...sets("swing", 45, "Dia alto. Quadril dispara, lombar não. Pare se passar de 3/10.", 4),
      ...sets("skips", 40, "A-skip. Se estiver folgado, passe ao B-skip na última série.", 3),
      ...sets("bounding", 30, "Saltos curtos e baixos. Amanhã não repete pliometria.", 3),
    ];
  }

  if (load === "second" && phase === 4) {
    return [
      ...sets("rdl", 55, "Manutenção curta. Quinta foi dia de energia — sem swing hoje.", 2),
      ...sets("curl-rolo", 50, "Quadril alto, puxe devagar.", 2),
      ...sets("hip-thrust", 50, "Pesado e lento, não explosivo.", 1),
      ...sets("iso-ponte", 40, "Feche com isometria se o tendão ainda falar.", 1),
    ];
  }

  if (phase === 1) {
    const bridgeSets = load === "strength" ? 5 : 3;
    const longSets = load === "strength" ? 3 : 2;
    return [
      ...sets("iso-ponte", 45, "Joelho ~90°. Empurre o chão. Lombar não arqueia. 50–70%.", bridgeSets),
      ...side("iso-prono", 40, "Segure a banda sem varrer o pé. Quadril colado no chão."),
      ...sets("iso-alavanca", 35, "Calcanhares longe do quadril. Pouca flexão. Fim de fase 1.", longSets),
    ];
  }

  if (phase === 2) {
    const main = load === "strength" ? 3 : 2;
    return [
      ...sets(
        "ponte-unilateral",
        70,
        "Tempo 3-1-3. Comece com os dois pés se o unilateral passar de 3/10. Esforço 7–8/10.",
        main,
      ),
      ...sets("ponte-alavanca", 60, "Alavanca longa, devagar. Quadril pouco flexionado.", 2),
      ...side("curl-banda", 55, "Prono, tempo 3-1-3. Não arqueie a lombar."),
      ...sets("ponte-rolo", 55, "Calcanhares no rolo. Suba no glúteo, não jogue a lombar.", 2),
      ...side("extensao-quadril", 50, "Em pé, tronco estável. Pouca flexão do quadril."),
      ...(load === "strength"
        ? [
            ...sets("hip-thrust", 60, "Em casa: ponte com carga no quadril. Na academia: hip thrust.", 1),
            ...sets("dobradica", 55, "Bastão nas costas. Joelhos macios. Tronco longo.", 1),
          ]
        : []),
    ];
  }

  if (phase === 3) {
    const main = load === "strength" ? 3 : 2;
    return [
      ...sets("rdl", 70, "Amplitude que o tendão aguenta hoje. Joelhos macios. Tempo lento.", main),
      ...side("rdl-unilateral", 60, "Mão num apoio. Coluna longa. Desça só até 3/10."),
      ...sets("curl-rolo", 60, "Calcanhares puxam o rolo. Quadril alto, lombar quieta.", main),
      ...sets("ponte-alavanca", 55, "Unilateral se a fase 2 estiver sólida. Senão, os dois pés.", 2),
      ...sets("nordico", 45, "Assistido pela banda. 1–2×/semana. Pule se a academia já fez posterior hoje.", load === "strength" ? 2 : 1),
    ];
  }

  return [
    ...sets("rdl", 60, "Manutenção. Carga moderada, sem caçar recorde hoje.", 2),
    ...side("rdl-unilateral", 55, "Apoiado. Controle na descida."),
    ...sets("nordico", 45, "Assistido. Uma sessão de manutenção, não um teste.", 2),
    ...sets("hip-thrust", 55, "Pesado e lento, não explosivo.", 2),
    ...sets("curl-rolo", 50, "Manutenção da fase 3.", 2),
  ];
}

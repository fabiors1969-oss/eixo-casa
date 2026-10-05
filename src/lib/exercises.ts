import type { Exercise, ExerciseCategory } from "./types";

export const equipmentLabel: Record<Exercise["equipment"][number], string> = {
  nada: "Só o tapete",
  banda: "Banda elástica",
  rolo: "Rolo",
  parede: "Parede",
  cadeira: "Cadeira",
};

export const categoryLabel: Record<ExerciseCategory, string> = {
  toracica: "Tórax e cervical",
  core: "Core e Pilates",
  quadril: "Quadril, corrida e tênis",
  tendao: "Tendão isquiotibial",
  recuperacao: "Rolo e recuperação",
};

export const categoryOrder: ExerciseCategory[] = [
  "toracica",
  "core",
  "quadril",
  "tendao",
  "recuperacao",
];

export const exercises: Exercise[] = [
  {
    id: "respiracao",
    name: "Respiração Lateral (Costal) no Rolo",
    aka: "Pilates Lateral Breathing",
    image: "/exercises/ex-respiracao.webp",
    equipment: [
      "rolo"
    ],
    category: "toracica",
    region: "Tórax e respiração",
    goal: "Acordar a respiração nas costelas e um centro leve, sem prender o ar.",
    setup: [
      "Deitado de costas ao longo do rolo (cabeça e sacro apoiados) ou no colchonete, joelhos flexionados."
    ],
    how: [
      "Mãos nas costelas.",
      "Inspire pelo nariz expandindo as costelas para os lados e para trás.",
      "Expire longamente pela boca sentindo as costelas “fecharem” e o abdômen profundo ativar de leve (cerca de 20–30% de esforço), sem prender a respiração."
    ],
    cues: [
      "Costelas para os lados",
      "Abdômen a 20–30%",
      "Cabeça sempre apoiada"
    ],
    breathing: "Expiração longa",
    dose: "8–10 ciclos (≈1 min)",
    minPhase: 1,
    videos: [
      {
        url: "https://www.youtube.com/watch?v=9Jzvj51Sars",
        title: "How to Breathe in Pilates? (Diaphragmatic Breathing vs. Lateral Breathing)",
        author: "Online Pilates Classes by Lesley Logan"
      }
    ],
    watch: [
      "Se a cabeça cair em extensão sobre o rolo, use uma toalha dobrada sob a cabeça. Queixo levemente recuado, nuca longa.",
      "Toalha sob a cabeça se o queixo apontar para o teto."
    ],
    avoid: [
      "Prender a respiração",
      "Deixar a nuca cair para trás no rolo"
    ],
    easier: "Faça no tapete, sem o rolo, joelhos dobrados.",
    harder: "Mantenha o centro leve por três expirações seguidas.",
    why: "O tórax rígido respira para cima. Aqui o ar volta para as costelas, e a lombar ganha um freio."
  },
  {
    id: "gato-vaca",
    name: "Gato-Vaca Segmentado (foco torácico)",
    aka: "Cat-Cow / Cat Stretch",
    image: "/exercises/ex-gato-vaca.webp",
    equipment: [
      "nada"
    ],
    category: "toracica",
    region: "Tórax",
    goal: "Mover a coluna torácica, vértebra por vértebra, com a lombar quase quieta.",
    setup: [
      "Em 4 apoios, mãos sob os ombros e joelhos sob o quadril."
    ],
    how: [
      "Expire arredondando a coluna de cima para baixo, vértebra por vértebra.",
      "Inspire alongando e abrindo o peito, projetando o esterno à frente.",
      "Concentre a amplitude na coluna torácica."
    ],
    cues: [
      "Onda no meio das costas",
      "Pescoço segue a coluna",
      "Lombar quase quieta"
    ],
    breathing: "Expire ao arredondar",
    dose: "6–8 ciclos lentos",
    minPhase: 1,
    videos: [
      {
        url: "https://www.youtube.com/watch?v=1Y0YjXS9sKI",
        title: "How to Do a Cat Cow Stretch: A Guide from Physical Therapists",
        author: "Hinge Health"
      }
    ],
    watch: [],
    avoid: [
      "Jogar a cabeça para o teto",
      "Arredondar só a lombar"
    ],
    easier: "Só o gato (arredondar), voltando ao centro.",
    harder: "Segure 3 segundos em cada extremo, respirando.",
    why: "A giba empurra a cabeça para a frente quando o meio das costas não mexe."
  },
  {
    id: "rolo-torax",
    name: "Extensão Torácica no Rolo (Swan Prep no rolo)",
    aka: "Foam Roller Thoracic Extension",
    image: "/exercises/ex-rolo-torax.webp",
    equipment: [
      "rolo"
    ],
    category: "toracica",
    region: "Tórax",
    goal: "Estender o meio das costas sobre o rolo, com a cabeça sustentada pelas mãos.",
    setup: [
      "Rolo na horizontal no meio da torácica (altura das escápulas), joelhos flexionados, quadril no chão."
    ],
    how: [
      "Mãos entrelaçadas atrás da cabeça sustentando todo o peso dela, cotovelos à frente.",
      "Inspire para preparar.",
      "Expire estendendo as costas altas sobre o rolo.",
      "Inspire para voltar.",
      "Mude o rolo para 2–3 níveis diferentes, sempre acima da última costela."
    ],
    cues: [
      "Mãos sustentam a cabeça",
      "Rolo acima da última costela",
      "Expire ao estender"
    ],
    breathing: "Expire ao estender",
    dose: "3 níveis × 5 reps",
    minPhase: 1,
    videos: [
      {
        url: "https://www.youtube.com/watch?v=81kPLsMt6wY",
        title: "Foam Roller Thoracic Spine Extensions",
        author: "The Barbell Physio"
      }
    ],
    watch: [
      "Nunca solte a cabeça para trás sem apoio e nunca posicione o rolo na lombar. Costelas baixas não “saltam” para cima: a curva vem da torácica.",
      "A curva é torácica. Se a lombar arqueia, o rolo desceu demais."
    ],
    avoid: [
      "Soltar a cabeça para trás",
      "Colocar o rolo na lombar",
      "Estufar as costelas"
    ],
    easier: "Toalha enrolada no meio das costas, no lugar do rolo.",
    harder: "Três alturas do rolo, cinco repetições lentas em cada uma.",
    why: "É a extensão que a giba pede — no tórax, não na lombar e não no pescoço."
  },
  {
    id: "peito-rolo",
    name: "Abertura de Peito Deitado sobre o Rolo (T e W)",
    aka: "Foam Roller Chest Opener",
    image: "/exercises/ex-rolo-torax.webp",
    equipment: [
      "rolo"
    ],
    category: "toracica",
    region: "Peito e tórax",
    goal: "Abrir o peitoral deitado no rolo, em T e em W, com o queixo recuado.",
    setup: [
      "Deitado ao longo do rolo, cabeça e sacro apoiados, joelhos flexionados e pés no chão."
    ],
    how: [
      "Abra os braços em “T” (palmas para cima) e depois em “W” (cotovelos a 90°), deixando a gravidade abrir o peitoral.",
      "Queixo levemente recuado (retração cervical passiva)."
    ],
    cues: [
      "Cabeça e sacro no rolo",
      "Queixo levemente recuado",
      "Braços só até onde o ombro permite"
    ],
    breathing: "Lenta e profunda",
    dose: "1–2 min (5 respirações em cada posição)",
    minPhase: 1,
    videos: [
      {
        url: "https://www.youtube.com/watch?v=AzqdRXuDGbY",
        title: "Chest Opener Foam Roller Stretch",
        author: "Sharp HealthCare"
      }
    ],
    watch: [
      "Se a cabeça ficar estendida, use toalha fina sob ela. Formigamento nas mãos = reduza a abertura dos braços.",
      "Formigamento na mão: feche um pouco os braços."
    ],
    avoid: [
      "Arquear a lombar para \"abrir mais\"",
      "Forçar o braço se formigar a mão"
    ],
    easier: "Braços mais baixos, perto do tronco, em vez do T completo.",
    harder: "Pequeno W com as escápulas descendo em direção ao bolso.",
    why: "Peitoral curto puxa o ombro e a cabeça para a frente. A gravidade abre, sem forçar o pescoço."
  },
  {
    id: "anjo-neve",
    name: "Anjo de Neve no Rolo",
    aka: "Foam Roller Snow Angels",
    image: "/exercises/ex-rolo-torax.webp",
    equipment: [
      "rolo"
    ],
    category: "toracica",
    region: "Ombro e tórax",
    goal: "Deslizar os braços no chão, em cima do rolo, sem perder as costelas baixas.",
    setup: [
      "Na mesma posição sobre o rolo, deslize os braços pelo chão desde perto do quadril até acima da cabeça, como um anjo de neve, e retorne."
    ],
    how: [
      "Na mesma posição sobre o rolo, deslize os braços pelo chão desde perto do quadril até acima da cabeça, como um anjo de neve, e retorne.",
      "Mantenha as costelas baixas e a lombar estável."
    ],
    cues: [
      "Costelas baixas",
      "Lombar estável",
      "Amplitude indolor"
    ],
    breathing: "Inspire subindo, expire descendo",
    dose: "8–10 lentas",
    minPhase: 1,
    videos: [
      {
        url: "https://www.youtube.com/watch?v=rvOPPOlS1Fs",
        title: "Foam roller Snow angel",
        author: "Revo Physiotherapy and Sports Performance"
      }
    ],
    watch: [],
    avoid: [
      "Encolher o pescoço",
      "Deixar o braço passar da dor no ombro"
    ],
    easier: "Amplitude menor, só até a linha do ombro.",
    harder: "Pausa de 2 segundos no alto, sem prender o ar.",
    why: "Amplitude de ombro para o saque e para a postura, com a lombar estável."
  },
  {
    id: "retracao",
    name: "Retração Cervical (Chin Tuck): deitado → sentado",
    aka: "Chin Tuck",
    image: "/exercises/ex-retracao.webp",
    equipment: [
      "nada",
      "cadeira"
    ],
    category: "toracica",
    region: "Pescoço",
    goal: "Recuar o queixo na horizontal e devolver a cabeça para cima do tronco.",
    setup: [
      "Deitado, com apoio baixo sob a cabeça, deslize a nuca pelo chão recuando o queixo na horizontal (“duplo queixo”), sem flexionar em direção ao peito."
    ],
    how: [
      "Segure 5 s.",
      "Evolução: sentado ou em pé com as costas na parede.",
      "Depois com leve pressão isométrica da nuca contra o apoio."
    ],
    cues: [
      "Olhar fica na frente",
      "Movimento de um centímetro",
      "Ombros longe das orelhas"
    ],
    breathing: "Normal, sem apneia",
    dose: "10 × 5 s",
    minPhase: 1,
    videos: [
      {
        url: "https://www.youtube.com/watch?v=KqR1EoEmq9c",
        title: "You're Doing Chin Tucks WRONG | Physical Therapist Teaches The Correct Way",
        author: "Rehab and Revive"
      }
    ],
    watch: [
      "Movimento pequeno e indolor. Não empurre com força máxima nem force se houver irradiação para o braço.",
      "Incômodo de 2/10 no meio do pescoço pode seguir. Dor aguda, tontura ou formigamento: pare."
    ],
    avoid: [
      "Olhar para o teto",
      "Puxar a cabeça com a mão",
      "Forçar se a dor descer ao braço"
    ],
    easier: "Deitado, pressionando a nuca de leve no tapete.",
    harder: "Sentado ou em pé, e depois uma pressão leve da nuca contra a parede.",
    why: "É o exercício do pescoço rígido. O giro extremo não desfaz a giba; este recuo pequeno, sim."
  },
  {
    id: "agulha",
    name: "Passar a Agulha (Thread the Needle) com Rotação",
    aka: "Thread the Needle",
    image: "/exercises/ex-agulha.webp",
    equipment: [
      "nada"
    ],
    category: "toracica",
    region: "Tórax e omoplatas",
    goal: "Girar o tórax em quatro apoios, com a cabeça apoiada numa almofada.",
    setup: [
      "Em 4 apoios, inspire abrindo o braço direito para o teto (rotação torácica."
    ],
    how: [
      "O olhar acompanha a mão só até onde o pescoço estiver confortável).",
      "Expire passando o braço por baixo do tronco e apoie o ombro e a lateral da cabeça numa almofada.",
      "Volte ao centro.",
      "Quadril permanece sobre os joelhos."
    ],
    cues: [
      "Quadril sobre os joelhos",
      "Cabeça na almofada, sem esmagar a têmpora",
      "Olhar só até o pescoço aguentar"
    ],
    breathing: "Lenta na torção",
    dose: "8 por lado",
    minPhase: 1,
    videos: [
      {
        url: "https://www.youtube.com/watch?v=YuAJ1i76Hek",
        title: "Thread The Needle, Thoracic Rotation",
        author: "Streamline Performance Physical Therapy"
      }
    ],
    watch: [],
    avoid: [
      "Sentar nos calcanhares",
      "Forçar a têmpora no chão",
      "Colapsar o ombro de apoio"
    ],
    easier: "Passe o braço só até a metade, sem deitar o ombro.",
    harder: "Na volta, abra o mesmo braço para o teto e siga com o olhar, se o pescoço quiser.",
    why: "A omoplata presa acompanha a rigidez torácica. A rotação nasce no meio das costas."
  },
  {
    id: "livro-aberto",
    name: "Livro Aberto (Open Book) Deitado de Lado",
    aka: "Open Book / Side-lying Thoracic Rotation",
    image: "/exercises/ex-livro-aberto.webp",
    equipment: [
      "nada"
    ],
    category: "toracica",
    region: "Tórax",
    goal: "Abrir o peito deitado de lado, joelhos juntos travando a lombar.",
    setup: [
      "Deitado de lado, quadris e joelhos a ~90°, almofada sob a cabeça (e entre os joelhos, se quiser)."
    ],
    how: [
      "Braços estendidos à frente.",
      "Inspire abrindo o braço de cima em arco até o outro lado, olhos acompanhando a mão.",
      "Pause 2 respirações.",
      "Expire voltando."
    ],
    cues: [
      "Joelhos pesados no chão",
      "Gira o peito, não a bacia",
      "Cabeça acompanha sem extremar"
    ],
    breathing: "Expire ao abrir",
    dose: "8 por lado",
    minPhase: 1,
    videos: [
      {
        url: "https://www.youtube.com/watch?v=rDviWORCWEw",
        title: "Open Books (Sidelying Thoracic Rotation)",
        author: "Revival Performance Physical Therapy"
      }
    ],
    watch: [],
    avoid: [
      "Deixar o joelho de cima abrir",
      "Olhar extremo para trás"
    ],
    easier: "Abra só até a linha do ombro. Se o pescoço reclamar, a cabeça fica no apoio.",
    harder: "Segure 3 respirações com o peito aberto.",
    why: "O giro do tênis deve nascer no tórax. Os joelhos pesados impedem a lombar de ir junto."
  },
  {
    id: "pull-apart",
    name: "Expansão de Peito / Band Pull-Apart",
    aka: "Band Pull-Apart (Chest Expansion)",
    image: "/exercises/ex-pull-apart.webp",
    equipment: [
      "banda"
    ],
    category: "toracica",
    region: "Omoplatas",
    goal: "Abrir a banda na altura do peito e descer as omoplatas.",
    setup: [
      "Em pé, ajoelhado ou sentado alto numa almofada."
    ],
    how: [
      "Braços à frente na altura dos ombros segurando a banda.",
      "Expire abrindo os braços até a banda tocar o peito, escápulas deslizando para trás e para baixo.",
      "Variações: palmas para cima (mais trapézio inferior) e diagonais."
    ],
    cues: [
      "Ombros longe das orelhas",
      "Costelas baixas quietas",
      "Abre até o peito"
    ],
    breathing: "Expire ao abrir",
    dose: "3 × 15 (2 s de pausa)",
    minPhase: 1,
    videos: [
      {
        url: "https://www.youtube.com/watch?v=bYsgk9SrJ48",
        title: "How to Do Band Pull Aparts: A Guide from Physical Therapists",
        author: "Hinge Health"
      }
    ],
    watch: [
      "Foco Giba Cervical: Pescoço longo, sem projetar o queixo e sem elevar os ombros. Fortalece romboides e trapézio médio/inferior."
    ],
    avoid: [
      "Encolher o pescoço",
      "Arquear a lombar para completar o movimento"
    ],
    easier: "Banda mais folgada e amplitude menor.",
    harder: "Pausa de 3 segundos com a banda no peito. Segunda série em superset com o face pull.",
    why: "Equilibra o trabalho de academia da cintura escapular com a cabeça no eixo."
  },
  {
    id: "face-pull",
    name: "Face Pull com Banda (rotação externa)",
    aka: "Band Face Pull",
    image: "/exercises/ex-rotacao-ombro.webp",
    equipment: [
      "banda"
    ],
    category: "toracica",
    region: "Ombro",
    goal: "Puxar a banda em direção ao rosto, com rotação externa dos ombros, sem prender em nada.",
    setup: [
      "Segure a banda com as duas mãos à frente do rosto. Sem porta, maçaneta ou poste."
    ],
    how: [
      "Cotovelos na altura dos ombros, palmas para baixo.",
      "Puxe as mãos em direção às orelhas, abrindo os cotovelos e girando os polegares para trás.",
      "Cerca de 10 repetições. Pescoço longo."
    ],
    cues: [
      "Cotovelos na altura do ombro",
      "Polegares apontam para trás",
      "Pescoço longo"
    ],
    breathing: "Expire ao puxar",
    dose: "10 repetições, banda nas mãos",
    minPhase: 1,
    videos: [
      {
        url: "https://www.youtube.com/watch?v=uX5W2kynMIo",
        title: "Face Pulls with a Resistance Band",
        author: "Tom Morrison"
      }
    ],
    watch: [],
    avoid: [
      "Encolher os ombros",
      "Arquear a lombar",
      "Puxar atrás da cabeça"
    ],
    easier: "Banda mais leve, puxando só até a linha do rosto.",
    harder: "Pausa de 2 segundos com as escápulas no bolso.",
    why: "Prepara o ombro do tênis e abre o peito sem pedir ajuda ao pescoço."
  },
  {
    id: "remada",
    name: "Remada com Banda em Pé (base de tenista)",
    aka: "Standing Band Row",
    image: "/exercises/ex-pull-apart.webp",
    equipment: [
      "banda"
    ],
    category: "toracica",
    region: "Omoplatas",
    goal: "Remar a banda em pé, pisando nela, com a base larga de quem espera a bola.",
    setup: [
      "Pise no meio da banda. Sem poste. Num braço só, um pé pisa na ponta e o tronco não gira."
    ],
    how: [
      "Joelhos macios, tronco longo.",
      "Puxe o cotovelo para trás, escápula desce.",
      "Cerca de 10 neste lado. O outro braço é o bloco seguinte."
    ],
    cues: [
      "Joelhos macios",
      "Tronco longo, quase parado",
      "Escápula desce e junta um pouco"
    ],
    breathing: "Expire ao puxar",
    dose: "10 por lado, pisando na banda",
    minPhase: 1,
    videos: [
      {
        url: "https://www.youtube.com/watch?v=db43OS-4ruY",
        title: "How to Do a Standing Row with Band",
        author: "Health e-University"
      }
    ],
    watch: [],
    avoid: [
      "Encolher o pescoço",
      "Girar o tronco para puxar mais",
      "Arredondar a lombar"
    ],
    easier: "As duas mãos juntas, banda mais folgada.",
    harder: "Remada unilateral, 3 × 12, tronco imóvel.",
    why: "A remada em pé substitui a remada de quatro apoios e treina a postura do tênis."
  },
  {
    id: "hundred",
    name: "The Hundred Completo",
    aka: "The Hundred",
    image: "/exercises/ex-mcgill.webp",
    equipment: [
      "nada"
    ],
    category: "core",
    region: "Core",
    goal: "A série clássica do Hundred, com as pernas em 45–60° e opção de apoiar a cabeça.",
    setup: [
      "Deitado, pernas unidas e estendidas a ~45–60°."
    ],
    how: [
      "Flexione a parte alta do tronco até a ponta das escápulas, braços estendidos a poucos centímetros do chão.",
      "Bombeie os braços: 5 tempos inspirando + 5 expirando, 10 ciclos (100).",
      "Progressão: pernas mais baixas apenas enquanto a lombar se mantiver estável."
    ],
    cues: [
      "Bata o braço no ritmo da respiração",
      "Pernas só até a lombar ficar estável",
      "Cabeça apoiada se o pescoço falar"
    ],
    breathing: "5 inspira / 5 expira",
    dose: "100 batidas (40 min: 2 séries)",
    minPhase: 1,
    videos: [
      {
        url: "https://www.youtube.com/watch?v=9mlone4NObI",
        title: "Pilates Exercise: The Hundred | Pilates Anytime",
        author: "Pilates Anytime"
      }
    ],
    watch: [
      "Cervical & Lombar: Olhar para as coxas, queixo levemente recuado (sem colar no peito). Se o pescoço cansar, apoie a cabeça por alguns ciclos. Se a lombar arquear, suba as pernas. Isquiotibiais: se repuxar na origem, flexione levemente os joelhos.",
      "Não é crunch. O tronco sai pouco do chão, como um bloco."
    ],
    avoid: [
      "Sit-up",
      "Prender o ar",
      "Pernas baixas se a lombar arquear"
    ],
    easier: "Pés no chão ou pernas na mesa (90°), e uma mão atrás da cabeça.",
    harder: "Pernas mais baixas, desde que a lombar permaneça estável em neutro. 100 batidas.",
    why: "Aluno de 10 anos sustenta o centro de verdade. A cabeça desce se o pescoço cansar — a giba não é lugar de heroísmo."
  },
  {
    id: "half-roll-back",
    name: "Half Roll Back (Roll Down parcial)",
    aka: "Half Roll Back / Half Roll Down",
    image: "/exercises/ex-mcgill.webp",
    equipment: [
      "nada"
    ],
    category: "core",
    region: "Core",
    goal: "Rolar o tronco só até a metade, com a lombar ainda no controle.",
    setup: [
      "Sentado alto sobre uma almofada, joelhos flexionados, pés no chão, mãos atrás das coxas."
    ],
    how: [
      "Expire rolando o sacro e a lombar para trás até ~45°, mantendo o “C”.",
      "Sustente 1–2 respirações (opções: braços à frente, rotação para cada lado).",
      "Expire voltando."
    ],
    cues: [
      "Queixo no peito sem puxar o pescoço",
      "Role só até as escápulas",
      "Volte vértebra por vértebra"
    ],
    breathing: "Expire ao rolar",
    dose: "8 reps (tempo 3 s)",
    minPhase: 1,
    videos: [
      {
        url: "https://www.youtube.com/watch?v=wQlq8IVwFb4",
        title: "Half Roll Back Exercise - Pilates",
        author: "intosport"
      }
    ],
    watch: [],
    avoid: [
      "Cair para trás",
      "Puxar a nuca com as mãos",
      "Esticar as pernas se o tendão reclamar"
    ],
    easier: "Amplitude menor, mãos atrás das coxas.",
    harder: "Quando a fase do tendão for 3 ou mais, passe ao roll up com joelhos macios.",
    why: "Ensina o roll up sem a flexão funda que o tendão e a artrose não querem nas fases 1 e 2."
  },
  {
    id: "roll-up",
    name: "Roll Up Controlado",
    aka: "The Roll Up",
    image: "/exercises/ex-mcgill.webp",
    equipment: [
      "nada"
    ],
    category: "core",
    region: "Core",
    goal: "Subir e descer a coluna, devagar, com os joelhos macios.",
    setup: [
      "Deitado, braços acima da cabeça."
    ],
    how: [
      "Inspire levando os braços ao teto.",
      "Expire articulando a coluna até sentar em “C”.",
      "Inspire.",
      "Expire rolando de volta vértebra por vértebra.",
      "Para você: joelhos levemente flexionados (ou banda nos pés para assistir) e SEM alongar para frente além do quadril (não tente tocar os pés)."
    ],
    cues: [
      "Joelhos destravados",
      "Sobe devagar, sem impulso",
      "Lombar desce osso por osso"
    ],
    breathing: "Expire ao subir e ao descer",
    dose: "5–6 muito lentas",
    minPhase: 3,
    videos: [
      {
        url: "https://www.youtube.com/watch?v=H_-JE2yN1W0",
        title: "Pilates Exercise: The Roll Up | Pilates Anytime",
        author: "Pilates Anytime"
      }
    ],
    watch: [
      "Restrições: Tendão: só a partir da fase 3 (fases 1–2: Half Roll Back). Lombar: se a flexão provocar dor, mantenha o Half Roll Back. Cervical: inicie com o queixo levemente recuado, sem puxar pelo pescoço.",
      "Fase ≥ 3. Se o ísquio doer no sentado longo, volte ao half roll back.",
      "Liberado a partir da fase 3 do tendão."
    ],
    avoid: [
      "Pernas retas e travadas",
      "Usar embalo",
      "Fazer nas fases 1 e 2"
    ],
    easier: "Half roll back, ou joelhos bem flexionados.",
    harder: "Braços na linha das orelhas, se o centro segurar sem a lombar saltar.",
    why: "Flexão de quadril com a perna longa comprime o tendão proximal. Por isso o roll up espera a fase 3."
  },
  {
    id: "single-leg-stretch",
    name: "Single Leg Stretch",
    aka: "Single Leg Stretch",
    image: "/exercises/ex-dead-bug.webp",
    equipment: [
      "nada"
    ],
    category: "core",
    region: "Core",
    goal: "Trocar as pernas no centro, no ritmo clássico, com a lombar estável.",
    setup: [
      "Tronco flexionado até a ponta das escápulas."
    ],
    how: [
      "Um joelho ao peito (mão externa no tornozelo, interna no joelho), a outra perna estendida a ~45°.",
      "Troque de forma ritmada e precisa.",
      "Avançado: perna estendida mais baixa, duas trocas por respiração."
    ],
    cues: [
      "Centro quieto",
      "Perna que estende não precisa ir ao chão",
      "Pescoço longo"
    ],
    breathing: "Inspira 2 trocas / expira 2",
    dose: "2 × 10 por lado",
    minPhase: 1,
    videos: [
      {
        url: "https://www.youtube.com/watch?v=Ad4lgW4ieAM",
        title: "Pilates Exercise: Single Leg Stretch | Pilates Anytime",
        author: "Pilates Anytime"
      }
    ],
    watch: [],
    avoid: [
      "Balançar o tronco",
      "Arquear a lombar para descer a perna",
      "Puxar o pescoço"
    ],
    easier: "A perna estendida fica mais alta, ou a cabeça desce no tapete.",
    harder: "Segunda série, 10 trocas por lado, mais lenta na volta.",
    why: "É abdominal de verdade para quem já tem 10 anos de tapete — a cabeça pode apoiar."
  },
  {
    id: "double-leg-stretch",
    name: "Double Leg Stretch",
    aka: "Double Leg Stretch",
    image: "/exercises/ex-dead-bug.webp",
    equipment: [
      "nada"
    ],
    category: "core",
    region: "Core",
    goal: "Abrir braços e pernas juntos e recolher sem perder o centro.",
    setup: [
      "Da posição de mesa (tabletop) com o tronco flexionado, inspire estendendo braços acima da cabeça (ao lado das orelhas) e pernas a ~45° ao mesmo tempo."
    ],
    how: [
      "Da posição de mesa (tabletop) com o tronco flexionado, inspire estendendo braços acima da cabeça (ao lado das orelhas) e pernas a ~45° ao mesmo tempo.",
      "Expire circulando os braços e recolhendo os joelhos."
    ],
    cues: [
      "Abdômen a 20–30%",
      "Lombar estável",
      "Cabeça apoiada se cansar"
    ],
    breathing: "Inspire ao estender",
    dose: "2 × 8–10",
    minPhase: 1,
    videos: [
      {
        url: "https://www.youtube.com/watch?v=qD58bbjzcm0",
        title: "Pilates Double Leg Stretch with Alisa Wyatt",
        author: "PILATESOLOGY"
      }
    ],
    watch: [
      "Lombar & Cervical: Se a lombar arquear, estenda as pernas mais alto. Braços acima da cabeça aumentam a carga no pescoço: se cansar, leve-os apenas até o teto."
    ],
    avoid: [
      "Prender o ar",
      "Deixar a lombar arquear na abertura",
      "Ritmo de balanço"
    ],
    easier: "Só os braços abrem; as pernas ficam na mesa.",
    harder: "2 × 8, pausa de um segundo na abertura.",
    why: "A alavanca longa desafia o abdominal profundo. A lombar fica estável em neutro, sem esmagar."
  },
  {
    id: "criss-cross",
    name: "Criss-Cross (Oblíquos)",
    aka: "Criss-Cross",
    image: "/exercises/ex-dead-bug.webp",
    equipment: [
      "nada"
    ],
    category: "core",
    region: "Core",
    goal: "Rodar o tronco no criss-cross, devagar, cotovelo em direção ao joelho oposto.",
    setup: [
      "Mãos atrás da cabeça sustentando o peso dela, cotovelos abertos."
    ],
    how: [
      "Tronco flexionado.",
      "Gire levando a axila (não o cotovelo) em direção ao joelho oposto enquanto a outra perna estende.",
      "Pausa de 1–2 s em cada lado."
    ],
    cues: [
      "Rotação lenta do tórax",
      "Cotovelo não precisa encostar",
      "Cabeça gira com o tronco, sem puxar"
    ],
    breathing: "Expire na rotação",
    dose: "2 × 8 por lado",
    minPhase: 1,
    videos: [
      {
        url: "https://www.youtube.com/watch?v=a2L7tfx8XbU",
        title: "Pilates Exercise: Criss Cross | Pilates Anytime",
        author: "Pilates Anytime"
      }
    ],
    watch: [],
    avoid: [
      "Velocidade",
      "Puxar a nuca",
      "Tirar a lombar do neutro"
    ],
    easier: "Amplitude menor e uma mão apoiando a cabeça.",
    harder: "2 × 8 por lado, dois tempos para ir e dois para voltar.",
    why: "Oblíquo para o tênis, sem transformar a lombar em eixo de rotação."
  },
  {
    id: "dead-bug",
    name: "Dead Bug Avançado (alavanca longa / banda)",
    aka: "Dead Bug",
    image: "/exercises/ex-dead-bug.webp",
    equipment: [
      "nada"
    ],
    category: "core",
    region: "Core",
    goal: "Afastar braço e perna opostos com a lombar estável em neutro.",
    setup: [
      "Deitado, pernas em mesa e braços apontados para o teto."
    ],
    how: [
      "Expire estendendo braço e perna opostos, mantendo a lombar estável — nem arqueada, nem esmagada contra o chão.",
      "Avançado: pernas mais baixas, tempo de 4 s, ou uma banda segurada entre as mãos e o joelho — sem prender atrás da cabeça."
    ],
    cues: [
      "Lombar estável em neutro",
      "Expire ao afastar",
      "Se tremer, encurte a alavanca"
    ],
    breathing: "Expire na extensão",
    dose: "3 × 8 por lado",
    minPhase: 1,
    videos: [
      {
        url: "https://www.youtube.com/watch?v=GbSC02oU3To",
        title: "How to Do a Dead Bug: A Guide from Physical Therapists",
        author: "Hinge Health"
      }
    ],
    watch: [
      "A lombar não sobe e também não é esmagada. O meio é o lugar."
    ],
    avoid: [
      "Estalar a lombar",
      "Prender o ar",
      "Balançar o tronco"
    ],
    easier: "Pés no chão e só os braços, ou uma perna de cada vez com o joelho dobrado.",
    harder: "Alavanca longa ou uma banda entre as mãos e o joelho. Pausa de 3 segundos.",
    why: "Substitui o abdominal que enrola a coluna. Neutro não é esmagar a lombar no chão."
  },
  {
    id: "teaser-prep",
    name: "Teaser Prep (joelhos flexionados)",
    aka: "Teaser Prep",
    image: "/exercises/ex-mcgill.webp",
    equipment: [
      "nada"
    ],
    category: "core",
    region: "Core",
    goal: "Equilibrar o tronco com os joelhos dobrados, a meio caminho do teaser.",
    setup: [
      "Deitado, joelhos flexionados e pés no chão (avançado: pernas em mesa)."
    ],
    how: [
      "Braços paralelos às coxas.",
      "Expire articulando até o “V” com os joelhos dobrados, equilibrado logo atrás dos ísquios.",
      "Inspire sustentando.",
      "Expire rolando de volta."
    ],
    cues: [
      "Joelhos junto ao peito ou a 90°",
      "Lombar longa, sem colapsar",
      "Ombros longe das orelhas"
    ],
    breathing: "Expire ao subir",
    dose: "5–6",
    minPhase: 1,
    videos: [
      {
        url: "https://www.youtube.com/watch?v=II-hmFN9vew",
        title: "Teaser Prep on the Mat | Online Pilates Classes",
        author: "Online Pilates Classes by Lesley Logan"
      }
    ],
    watch: [],
    avoid: [
      "Esticar as pernas nas fases 1 e 2",
      "Usar impulso",
      "Prender o ar"
    ],
    easier: "Mãos atrás das coxas, amplitude menor.",
    harder: "Solte as mãos e segure 3 segundos. Na fase 3, passe ao teaser de uma perna.",
    why: "A progressão começa aqui, em todas as fases, porque o joelho dobrado alivia o tendão."
  },
  {
    id: "teaser-uma-perna",
    name: "Single Leg Teaser",
    aka: "Single Leg Teaser (Teaser 1)",
    image: "/exercises/ex-mcgill.webp",
    equipment: [
      "nada"
    ],
    category: "core",
    region: "Core",
    goal: "Teaser com uma perna estendida e a outra dobrada.",
    setup: [
      "Uma perna estendida em linha com a coxa oposta (joelhos alinhados), a outra com o pé no chão."
    ],
    how: [
      "Role até o “V” alcançando a perna estendida.",
      "Sustente.",
      "Role de volta."
    ],
    cues: [
      "Perna de baixo dobrada",
      "Sobe devagar",
      "O ísquio não pode passar de 3/10"
    ],
    breathing: "Expire ao subir",
    dose: "3–4 por lado",
    minPhase: 3,
    videos: [
      {
        url: "https://www.youtube.com/watch?v=tCbP3KMu3SI",
        title: "Pilates Single Leg Teaser",
        author: "FitnessBlender"
      }
    ],
    watch: [
      "Tendão: A partir da fase 3 (flexão de quadril com joelho estendido). Comece com o joelho da perna elevada levemente “macio”.",
      "Fase ≥ 3.",
      "Liberado a partir da fase 3 do tendão."
    ],
    avoid: [
      "Duas pernas estendidas",
      "Fazer com o tendão irritado",
      "Cair para trás"
    ],
    easier: "Volte ao teaser prep, joelhos dobrados.",
    harder: "Três segundos no alto. Na fase 4, as duas pernas podem estender no teaser completo.",
    why: "A perna longa aumenta a flexão do quadril no tendão. Entra na fase 3, não antes."
  },
  {
    id: "teaser",
    name: "Teaser Completo",
    aka: "The Teaser",
    image: "/exercises/ex-mcgill.webp",
    equipment: [
      "nada"
    ],
    category: "core",
    region: "Core",
    goal: "O teaser clássico, pernas e tronco em V, só quando o tendão aguenta flexão.",
    setup: [
      "Pernas estendidas a ~60°, role até o “V”."
    ],
    how: [
      "Variações avançadas: braços acima da cabeça, descer só o tronco ou só as pernas.",
      "Veja também o vídeo de variações da Balanced Body."
    ],
    cues: [
      "Sobe sem impulso",
      "Joelhos podem ficar macios",
      "Dor ≤ 3/10 e basal em 24 h"
    ],
    breathing: "Expire ao subir",
    dose: "3–5",
    minPhase: 4,
    videos: [
      {
        url: "https://www.youtube.com/watch?v=9WFOlfrqWo8",
        title: "Pilates Exercise: The Teaser | Pilates Anytime",
        author: "Pilates Anytime"
      },
      {
        url: "https://www.youtube.com/watch?v=v4rQ7L_HQBQ",
        title: "Pilates for Instructors : E53 : Teaser with Variations",
        author: "Balanced Body"
      }
    ],
    watch: [
      "Tendão & Lombar: Fase 4 (após tolerar bem o Single Leg Teaser). Pare se houver dor lombar; use a entrada a partir da mesa (tabletop).",
      "Fase ≥ 4. Se o sentado longo doer no ísquio, encurte a alavanca.",
      "Liberado a partir da fase 4 do tendão."
    ],
    avoid: [
      "Embalo",
      "Fazer nas fases 1 a 3",
      "Segurar o ar no alto"
    ],
    easier: "Teaser de uma perna, ou prep com joelhos dobrados.",
    harder: "Braços na linha das orelhas, 5 repetições limpas.",
    why: "É flexão de quadril com joelho estendido — compressão na origem do tendão. Fase 4."
  },
  {
    id: "swan",
    name: "Swan (Cisne) – Prep e Progressão",
    aka: "Swan Prep",
    image: "/exercises/ex-press-up.webp",
    equipment: [
      "nada"
    ],
    category: "core",
    region: "Extensão torácica",
    goal: "Extensão torácica em prono, peito fora do chão, quadril pesado.",
    setup: [
      "De bruços, mãos sob os ombros, pernas na largura do quadril, glúteos levemente ativos."
    ],
    how: [
      "Inspire alongando e elevando cabeça, esterno e parte alta do tronco (extensão torácica).",
      "Expire descendo.",
      "Avançado: braços em “W” sem apoio."
    ],
    cues: [
      "Quadril no chão",
      "Sobe o peito, não a cabeça",
      "Amplitude que alivia, não a que aperta"
    ],
    breathing: "Inspire ao elevar",
    dose: "6–8",
    minPhase: 1,
    videos: [
      {
        url: "https://www.youtube.com/watch?v=KAotX1bDGps",
        title: "Pilates Exercise: Swan Prep | Pilates Anytime",
        author: "Pilates Anytime"
      }
    ],
    watch: [
      "Lombar (artrose facetária): Limite a extensão: pare quando as costelas baixas ainda estiverem próximas do chão; não empurre com os braços até estender toda a lombar. Olhar para o chão à frente, nuca longa. Swan Dive (balanço) não está incluído.",
      "Extensão limitada. Dor que desce pela perna: pare e volte ao gato-vaca."
    ],
    avoid: [
      "Cobra alta",
      "Olhar para o teto",
      "Swan dive ou rocking"
    ],
    easier: "Só a testa sai do chão, mãos na altura da testa.",
    harder: "Braços estendem um pouco mais, pube ainda no tapete. Pare se a dor descer à perna.",
    why: "A coluna gosta de uma extensão guiada. A artrose lombar não gosta de cobra alta nem de swan dive."
  },
  {
    id: "swimming",
    name: "Swimming (Natação)",
    aka: "Swimming",
    image: "/exercises/ex-bird-dog.webp",
    equipment: [
      "nada"
    ],
    category: "core",
    region: "Cadeia posterior",
    goal: "Nadar os braços e as pernas em prono, com o tronco longo e a lombar quieta.",
    setup: [
      "De bruços, braços e pernas estendidos."
    ],
    how: [
      "De bruços, braços e pernas estendidos.",
      "Eleve levemente tronco, braços e pernas e alterne braço/perna opostos em movimentos curtos e rápidos: 5 tempos inspirando, 5 expirando."
    ],
    cues: [
      "Pubes no chão",
      "Membros na altura do tronco, não no teto",
      "Pescoço longo, olhar no tapete"
    ],
    breathing: "5 inspira / 5 expira",
    dose: "3 × 20–30 contagens",
    minPhase: 1,
    videos: [
      {
        url: "https://www.youtube.com/watch?v=2mpdW1tFbV0",
        title: "How to Do a Pilates Swimming Exercise | MedBridge",
        author: "Medbridge"
      }
    ],
    watch: [],
    avoid: [
      "Levantar a cabeça",
      "Arquear a lombar",
      "Ritmo que perde o centro"
    ],
    easier: "Só os braços, ou só as pernas, com a testa apoiada.",
    harder: "3 × 20 a 30 contagens, pausa curta entre elas.",
    why: "Extensor de cadeia posterior para a corrida, sem arco lombar."
  },
  {
    id: "leg-pull-front",
    name: "Leg Pull Front (prancha com elevação de perna)",
    aka: "Leg Pull Front",
    image: "/exercises/ex-prancha-lado.webp",
    equipment: [
      "nada"
    ],
    category: "core",
    region: "Core",
    goal: "Prancha com elevação de uma perna, corpo em uma linha só.",
    setup: [
      "Prancha alta (mãos sob os ombros, corpo em linha)."
    ],
    how: [
      "Eleve uma perna estendida com o pé em ponta, flexione o pé e desça.",
      "Alterne sem rodar a pelve."
    ],
    cues: [
      "Empurre o chão",
      "Perna sobe pouco",
      "Não deixe o quadril cair nem subir em pique"
    ],
    breathing: "Inspire ao elevar",
    dose: "3 × 4–5 por perna",
    minPhase: 1,
    videos: [
      {
        url: "https://www.youtube.com/watch?v=fLYsUbi_f-A",
        title: "Pilates Exercise: Leg Pull Front | Pilates Anytime",
        author: "Pilates Anytime"
      }
    ],
    watch: [],
    avoid: [
      "Quadril em tenda",
      "Cabeça caída",
      "Prender o ar"
    ],
    easier: "Prancha alta sem tirar o pé, 20 segundos.",
    harder: "3 × 4 elevações por perna, lentas.",
    why: "Estabilidade de frente para quem já passou da prancha de joelho. O quadril não torce."
  },
  {
    id: "leg-pull-back",
    name: "Mesa Invertida → Leg Pull Back",
    aka: "Reverse Tabletop / Leg Pull Back",
    image: "/exercises/ex-ponte.webp",
    equipment: [
      "nada"
    ],
    category: "core",
    region: "Core e ombro",
    goal: "Mesa invertida e, da fase 3 em diante, leg pull back com a perna.",
    setup: [
      "Fases 1–2: Mesa invertida — sentado, mãos atrás (dedos para os pés), joelhos flexionados."
    ],
    how: [
      "Eleve o quadril até a linha ombros–joelhos e sustente (bom isométrico de glúteos e isquiotibiais em pouca flexão de quadril).",
      "Fase ≥3: Leg Pull Back clássico com pernas estendidas e chute controlado até ~45–60°, sem balanço."
    ],
    cues: [
      "Joelhos, quadril e ombros alinhados",
      "Queixo recuado",
      "Na fase 1–2, não chute a perna ao teto"
    ],
    breathing: "Natural",
    dose: "3 × 20–30 s (mesa) / 3 × 4 por perna",
    minPhase: 1,
    videos: [
      {
        url: "https://www.youtube.com/watch?v=0rA7ZdkFqEY",
        title: "Reverse Tabletop",
        author: "U.S. Army Holistic Health and Fitness"
      },
      {
        url: "https://www.youtube.com/watch?v=f_gzE5tOPQw",
        title: "Pilates Exercise: Leg Pull Back | Pilates Anytime",
        author: "Pilates Anytime"
      }
    ],
    watch: [
      "Tendão & Ombros: O chute com a perna estendida (flexão de quadril + joelho estendido) só a partir da fase 3. Cotovelos sem hiperestender; evite se houver dor no ombro.",
      "Fases 1–2 ficam na mesa invertida. O vídeo clássico de leg pull back é a progressão da fase 3."
    ],
    avoid: [
      "Deixar o quadril cair",
      "Jogar a cabeça para trás",
      "Leg pull completo antes da fase 3"
    ],
    easier: "Ponte de ombros com os cotovelos no chão, se o punho reclamar.",
    harder: "Fase ≥ 3: eleve uma perna, devagar, 3 × 5, sem perder a mesa.",
    why: "A mesa carrega ombro e glúteo sem alongar o posterior. A perna estendida para o teto espera a fase 3."
  },
  {
    id: "prancha-lado",
    name: "Prancha Lateral Completa / Side Bend",
    aka: "Side Plank / Side Bend",
    image: "/exercises/ex-prancha-lado.webp",
    equipment: [
      "nada"
    ],
    category: "core",
    region: "Core lateral",
    goal: "Prancha lateral completa, corpo em uma linha do tornozelo ao ombro.",
    setup: [
      "Apoio no antebraço (ou na mão), pés sobrepostos ou escalonados."
    ],
    how: [
      "Eleve o quadril em linha.",
      "Avançado: Side Bend do Pilates (subir e descer com arco do braço), “twist” (passar a mão por baixo com rotação torácica) ou elevar a perna de cima."
    ],
    cues: [
      "Cotovelo sob o ombro",
      "Quadril alto",
      "Pescoço longo, olhar à frente"
    ],
    breathing: "Contínua",
    dose: "3 × 30–45 s por lado",
    minPhase: 1,
    videos: [
      {
        url: "https://www.youtube.com/watch?v=hJS_Gbdo63M",
        title: "Pilates Side Plank ⎮Safe Setup and Exit Technique",
        author: "Pilates Encyclopedia"
      }
    ],
    watch: [],
    avoid: [
      "Quadril caído",
      "Girar o peito para o chão",
      "Prender o ar"
    ],
    easier: "Joelho de baixo no chão, 20 segundos.",
    harder: "Quadril sobe e desce devagar, ou o braço de cima abre para o teto. 3 × 30–45 s.",
    why: "O tênis pede este lado do tronco a cada finta. Joelho no chão só se o ombro ou a lombar pedirem."
  },
  {
    id: "prancha-rolo",
    name: "Pranchas no Rolo",
    aka: "Foam Roller Plank Variations",
    image: "/exercises/ex-prancha-lado.webp",
    equipment: [
      "rolo"
    ],
    category: "core",
    region: "Core",
    goal: "Prancha com os antebraços ou os pés no rolo, sem deixar o quadril dançar.",
    setup: [
      "Antebraços sobre o rolo em prancha."
    ],
    how: [
      "Progressões: canelas sobre o rolo.",
      "Roll-outs curtos (empurrar o rolo à frente e voltar).",
      "Toque alternado de ombro.",
      "Costelas baixas e glúteos ativos."
    ],
    cues: [
      "Rolo estável antes de subir",
      "Quadril em linha",
      "Desça se o ombro doer"
    ],
    breathing: "Contínua",
    dose: "3 × 30–45 s",
    minPhase: 1,
    videos: [
      {
        url: "https://www.youtube.com/watch?v=30Yy0R0_lTI",
        title: "Foam Roller Plank Variations",
        author: "MVMT Performance & Rehabilitation"
      }
    ],
    watch: [],
    avoid: [
      "Rolo debaixo da lombar",
      "Quadril em pique",
      "Segurar o ar"
    ],
    easier: "Prancha no chão, sem o rolo, 30 segundos.",
    harder: "3 × 40 s, ou um pé sai do chão por 3 segundos.",
    why: "Instabilidade leve para um centro que já é forte. A lombar continua neutra."
  },
  {
    id: "bird-dog",
    name: "Perdigueiro (Bird-Dog) com Pausa / Hover",
    aka: "Bird Dog",
    image: "/exercises/ex-bird-dog.webp",
    equipment: [
      "nada"
    ],
    category: "core",
    region: "Core",
    goal: "Alongar braço e perna opostos e, se estiver sólido, sustentar o hover.",
    setup: [
      "Em 4 apoios, coluna neutra."
    ],
    how: [
      "Estenda braço e perna opostos até ficarem paralelos ao chão, pausa de 3–5 s, sem rodar a pelve.",
      "Avançado: “hover” com os joelhos a 2 cm do chão ou banda no pé."
    ],
    cues: [
      "Mesa nas costas",
      "Perna na altura do quadril",
      "Olhar no tapete"
    ],
    breathing: "Expire ao estender",
    dose: "8 por lado",
    minPhase: 1,
    videos: [
      {
        url: "https://www.youtube.com/watch?v=xEDnlOxeJH4",
        title: "How to Do the Bird Dog Exercise: A Guide from Physical Therapists",
        author: "Hinge Health"
      }
    ],
    watch: [],
    avoid: [
      "Levantar a cabeça",
      "Jogar a perna para o teto",
      "Girar a bacia"
    ],
    easier: "Deslize o pé no chão, sem tirar os dedos.",
    harder: "Pausa de 5 segundos ou hover (joelhos a um palmo do chão) por 10 segundos.",
    why: "O padrão da passada, com a lombar protegida da artrose. Copo d'água nas costas."
  },
  {
    id: "pallof",
    name: "Pallof Press (anti-rotação com banda)",
    aka: "Pallof Press",
    image: "/exercises/ex-pallof.webp",
    equipment: [
      "banda"
    ],
    category: "core",
    region: "Core anti-rotação",
    goal: "Empurrar a banda à frente e não deixar o tronco girar. O pé é a âncora.",
    setup: [
      "Sem poste, porta ou coluna. Pise na banda com o pé do lado deste bloco e segure as duas pontas na altura do peito."
    ],
    how: [
      "Base atlética, joelhos macios, mãos no esterno.",
      "Expire e empurre os braços à frente sem deixar o tronco girar.",
      "Cerca de 10 empurrões neste lado. O outro lado é o bloco seguinte.",
      "Se quiser, passe a banda por um móvel baixo e firme — só se não escorregar. O pé continua valendo."
    ],
    cues: [
      "Braços vão, tronco não gira",
      "Joelhos macios",
      "Expire na extensão"
    ],
    breathing: "Expire ao empurrar",
    dose: "10 por lado, em 30 segundos",
    minPhase: 1,
    videos: [
      {
        url: "https://www.youtube.com/watch?v=5_8d8vHgZvU",
        title: "Pallof Press - How To Do Pallof Presses + Variations",
        author: "Girls Gone Strong | Women's Health & Fitness"
      }
    ],
    watch: [],
    avoid: [
      "Inclinar o tronco",
      "Prender a respiração",
      "Deixar a banda vencer a rotação"
    ],
    easier: "Segure a banda mais folgada, com os braços junto ao peito, por menos empurrões.",
    harder: "Ajoelhado, ou um passo à frente na extensão. 10 por lado.",
    why: "É o núcleo do tênis: a raquete vai, a lombar fica."
  },
  {
    id: "spine-twist",
    name: "Spine Twist Adaptado (sentado sobre almofada)",
    aka: "Spine Twist",
    image: "/exercises/ex-rotacao-pe.webp",
    equipment: [
      "nada"
    ],
    category: "core",
    region: "Tórax",
    goal: "Girar o tórax sentado numa almofada, pernas cruzadas, ísquio fora de superfície dura.",
    setup: [
      "Sentado alto SOBRE uma almofada dobrada, de pernas cruzadas ou com joelhos levemente flexionados."
    ],
    how: [
      "Braços em “T”.",
      "Expire girando o tronco a partir da torácica em 2 pulsos, crescendo em altura.",
      "Inspire voltando ao centro."
    ],
    cues: [
      "Sente alto, numa almofada",
      "Gira o peito",
      "Quadril quase parado"
    ],
    breathing: "Expire ao girar",
    dose: "8 por lado",
    minPhase: 1,
    videos: [
      {
        url: "https://www.youtube.com/watch?v=PPFkp7Aa3Rg",
        title: "Pilates Exercise: Spine Twist | Pilates Anytime",
        author: "Pilates Anytime"
      }
    ],
    watch: [
      "Mudança (tendão): Antes era “sentado no rolo” com pernas estendidas: sentar longo (quadril a 90° + joelho estendido) sobre uma superfície dura comprime a origem dos isquiotibiais. Pernas estendidas só a partir da fase 3, se tolerar.",
      "Saw (a serra) não entra: flexão com rotação e alcance ao pé."
    ],
    avoid: [
      "Sentar longo no chão duro",
      "Alcance ao pé, como na serra",
      "Forçar o pescoço no fim do giro"
    ],
    easier: "Giro menor, mãos no peito.",
    harder: "Braços abertos, 8 por lado, se o ísquio estiver calmo.",
    why: "O spine twist clássico em sentado longo comprime o tendão e a lombar. A almofada muda isso."
  },
  {
    id: "sereia",
    name: "Sereia (Mermaid) Sentado",
    aka: "Mermaid",
    image: "/exercises/ex-sereia.webp",
    equipment: [
      "nada"
    ],
    category: "core",
    region: "Flanco",
    goal: "Inclinar o tronco para o lado, sentado, como a sereia — não é torção deitado.",
    setup: [
      "Sentado de lado (pernas dobradas para o mesmo lado) ou de pernas cruzadas, sobre almofada."
    ],
    how: [
      "Eleve o braço de cima e incline o tronco para o lado, sentado.",
      "Volte ao centro. O outro flanco é o próximo bloco.",
      "Opcional no fim: uma rotação torácica pequena, ainda sentado."
    ],
    cues: [
      "Sente num ísquio de cada vez, ou sobre almofada",
      "Inclina o lado, não gira",
      "Braço desliza longo"
    ],
    breathing: "Expire ao inclinar",
    dose: "10 por lado, sentado, um bloco para cada flanco",
    minPhase: 1,
    videos: [
      {
        url: "https://www.youtube.com/watch?v=iEUBi98L16M",
        title: "Mermaid Exercise - Pilates",
        author: "intosport"
      }
    ],
    watch: [],
    avoid: [
      "Confundir com uma torção de quem está deitado",
      "Forçar a lombar a dobrar",
      "Sentar fundo se o tendão doer"
    ],
    easier: "Mão no chão, inclinação de dois centímetros.",
    harder: "Braço de cima na orelha, 4 por lado.",
    why: "Mobiliza o flanco e as costelas. A sereia é inclinação lateral sentado, não uma torção de quem está deitado."
  },
  {
    id: "ponte",
    name: "Ponte Articulada (Spine Curl / Bridging)",
    aka: "Bridging / Spine Curl",
    image: "/exercises/ex-ponte.webp",
    equipment: [
      "nada"
    ],
    category: "quadril",
    region: "Glúteo",
    goal: "Articular a ponte, osso por osso, até a linha do joelho ao ombro.",
    setup: [
      "Deitado, joelhos flexionados, pés na largura do quadril."
    ],
    how: [
      "Expire articulando a coluna a partir do cóccix até a linha joelhos–quadril–ombros.",
      "Inspire no topo.",
      "Expire descendo vértebra por vértebra."
    ],
    cues: [
      "Glúteo sobe, lombar não arqueia",
      "Joelhos apontam à frente",
      "Desça devagar"
    ],
    breathing: "Expire na subida",
    dose: "10–12",
    minPhase: 1,
    videos: [
      {
        url: "https://www.youtube.com/watch?v=R1qxWNjcleU",
        title: "Pilates Shoulder bridge  Spine curls",
        author: "Rehab My Patient"
      }
    ],
    watch: [],
    avoid: [
      "Empurrar a lombar para o teto",
      "Abrir os joelhos",
      "Travar o joelho"
    ],
    easier: "Amplitude menor, só até o glúteo acordar.",
    harder: "Pausa de 3 segundos no alto, tempo 3-1-3.",
    why: "O glúteo é o cinto da lombar na corrida e na saída para a bola."
  },
  {
    id: "shoulder-bridge",
    name: "Shoulder Bridge (ponte com chute)",
    aka: "Shoulder Bridge",
    image: "/exercises/ex-ponte.webp",
    equipment: [
      "nada"
    ],
    category: "quadril",
    region: "Glúteo",
    goal: "Ponte de ombros com um pé no chão e a outra perna em mesa — o chute cresce com a fase.",
    setup: [
      "Da ponte, transfira o peso para um pé e mantenha a pelve nivelada."
    ],
    how: [
      "Fases 1–2: perna livre dobrada (marcha na ponte) ou estendida em linha com a coxa, SEM chutar para o teto.",
      "Fase ≥3: chute controlado até ~60–70°.",
      "Fase 4: amplitude completa, se tolerar."
    ],
    cues: [
      "Bacia estável quando um pé sai",
      "Joelho da perna de cima dobrado no começo",
      "Lombar quieta"
    ],
    breathing: "Expire ao chutar/elevar",
    dose: "2 × 5 por perna",
    minPhase: 1,
    videos: [
      {
        url: "https://www.youtube.com/watch?v=QFv_Fex3Mko",
        title: "Pilates Exercise: Shoulder Bridge | Pilates Anytime",
        author: "Pilates Anytime"
      }
    ],
    watch: [
      "Tendão: A perna de apoio já é um bom exercício de carga para os isquiotibiais; o chute alto (flexão de quadril + joelho estendido) fica para as fases avançadas.",
      "Vídeo mostra o chute clássico. Siga a fase escrita aqui, não a amplitude máxima do vídeo."
    ],
    avoid: [
      "Chute alto nas fases 1 e 2",
      "Deixar a bacia cair para o lado do pé de apoio",
      "Arquear"
    ],
    easier: "Só a ponte bilateral articulada.",
    harder: "Fase ≥ 3: chute controlado, 2 × 5 por perna, sem passar de 3/10 no ísquio.",
    why: "O chute longo é flexão de quadril. Nas fases 1 e 2 a perna fica dobrada; o chute até 60–70° espera a fase 3."
  },
  {
    id: "concha",
    name: "Concha (Clamshell) com Banda",
    aka: "Clamshell",
    image: "/exercises/ex-concha.webp",
    equipment: [
      "banda"
    ],
    category: "quadril",
    region: "Glúteo médio",
    goal: "Abrir o joelho de cima com a banda, sem rolar a bacia.",
    setup: [
      "Deitado de lado, quadril a ~45° e joelhos a 90°, banda acima dos joelhos."
    ],
    how: [
      "Abra o joelho de cima sem rodar a pelve para trás.",
      "Pausa de 2 s.",
      "Avançado: clamshell em prancha lateral curta (sobre o joelho)."
    ],
    cues: [
      "Pés juntos",
      "Bacia empilhada",
      "Abre o joelho, não o tronco"
    ],
    breathing: "Expire ao abrir",
    dose: "2–3 × 15 por lado",
    minPhase: 1,
    videos: [
      {
        url: "https://www.youtube.com/watch?v=hr6wL693Gxg",
        title: "Clams with Band - 12 Week Knee Rehab Program: Rehab Ex 1 | No.177 | Physio REHAB",
        author: "Physio REHAB"
      }
    ],
    watch: [],
    avoid: [
      "Girar o peito para o teto",
      "Banda no ísquio",
      "Amplitude que rola a lombar"
    ],
    easier: "Sem banda, amplitude menor.",
    harder: "Pausa de 3 segundos no alto. 15 por lado.",
    why: "Glúteo médio estável segura a pelve a cada passada e a cada deslocamento lateral."
  },
  {
    id: "caminhada-lateral",
    name: "Caminhada Lateral com Mini-banda",
    aka: "Lateral Band Walk",
    image: "/exercises/ex-concha.webp",
    equipment: [
      "banda"
    ],
    category: "quadril",
    region: "Quadril",
    goal: "Caminhar de lado com a mini-banda, joelho macio, tronco alto.",
    setup: [
      "Mini-banda acima dos joelhos (ou nos tornozelos, mais difícil)."
    ],
    how: [
      "Mini-banda acima dos joelhos (ou nos tornozelos, mais difícil).",
      "Meio agachamento raso, passos laterais mantendo a tensão e a pelve nivelada."
    ],
    cues: [
      "Joelho aponta para o segundo dedo",
      "Passo curto",
      "Tronco não balança"
    ],
    breathing: "Contínua",
    dose: "3 × 10 passos por lado",
    minPhase: 1,
    videos: [
      {
        url: "https://www.youtube.com/watch?v=6eoK_yxY8Ak",
        title: "Lateral band walks | Ohio State Sports Medicine",
        author: "Ohio State Wexner Medical Center"
      }
    ],
    watch: [],
    avoid: [
      "Passo enorme",
      "Tronco inclinado",
      "Banda subindo até a dobra do ísquio se doer"
    ],
    easier: "Banda mais leve, menos passos.",
    harder: "2 × 10 passos para cada lado, banda acima do joelho se o ísquio permitir — senão, nos tornozelos.",
    why: "Força lateral para o tênis e para o joelho não cair para dentro na corrida."
  },
  {
    id: "side-kick",
    name: "Série de Chutes Laterais (Side Kick Series)",
    aka: "Side Kick Series",
    image: "/exercises/ex-side-kick.webp",
    equipment: [
      "nada"
    ],
    category: "quadril",
    region: "Quadril",
    goal: "Série de chutes deitado de lado: para a frente, para trás e em círculo, com limite de fase.",
    setup: [
      "Deitado de lado, corpo em linha, pernas levemente à frente do quadril, cabeça apoiada."
    ],
    how: [
      "Deitado de lado, corpo em linha, pernas levemente à frente do quadril, cabeça apoiada.",
      "Série: frente/trás, cima/baixo, círculos, bicicleta."
    ],
    cues: [
      "Tronco imóvel",
      "Perna de cima longa, mas não a qualquer custo",
      "Quadril empilhado"
    ],
    breathing: "Inspire à frente, expire atrás",
    dose: "8–10 de cada variação por lado",
    minPhase: 1,
    videos: [
      {
        url: "https://www.youtube.com/watch?v=nG9JfDHJJlY",
        title: "Pilates Exercise: Side Kick | Pilates Anytime",
        author: "Pilates Anytime"
      }
    ],
    watch: [
      "Tendão: Fases 1–2: chute frontal limitado a ~45°, sem “pulso duplo” balístico; priorize o chute para trás e cima/baixo. Amplie aos poucos na fase 3; livre na fase 4. Não arqueie a lombar no chute para trás.",
      "O vídeo clássico mostra o chute longo. Nas fases 1 e 2, encurte o chute da frente."
    ],
    avoid: [
      "Chute frontal fundo nas fases 1 e 2",
      "Rolar o tronco para trás",
      "Usar embalo"
    ],
    easier: "Amplitude menor, mão no chão à frente do peito para não rolar.",
    harder: "8 repetições de cada variação, lentas. Círculo pequeno.",
    why: "Quadril de tenista. O chute à frente, nas fases 1 e 2, para antes de alongar o posterior (cerca de 45°)."
  },
  {
    id: "flexor",
    name: "Alongamento do Flexor do Quadril Meio-Ajoelhado (Psoas)",
    aka: "Half-Kneeling Hip Flexor Stretch",
    image: "/exercises/ex-flexor.webp",
    equipment: [
      "nada"
    ],
    category: "quadril",
    region: "Flexor do quadril",
    goal: "Alongar o flexor do quadril meio-ajoelhado, bacia encaixada, tronco alto.",
    setup: [
      "Meio-ajoelhado (almofada sob o joelho)."
    ],
    how: [
      "Retroverta levemente a pelve e contraia o glúteo da perna de trás, deslocando o quadril poucos centímetros à frente.",
      "Braço do mesmo lado para cima com leve inclinação lateral."
    ],
    cues: [
      "Bacia encaixada",
      "Tronco alto",
      "Avança dois centímetros, não a barriga"
    ],
    breathing: "Lenta",
    dose: "2 × 45 s por lado (ou 8 reps de 3 s)",
    minPhase: 1,
    videos: [
      {
        url: "https://www.youtube.com/watch?v=gqoPYLUgP48",
        title: "Bulletproof Step-by-step Guide to the Half Kneeling Hip Flexor Stretch\" [stretching advice]",
        author: "[P]rehab"
      }
    ],
    watch: [],
    avoid: [
      "Arco na lombar",
      "Inclinar o tronco à frente",
      "Dor aguda no joelho de apoio"
    ],
    easier: "Menos avanço, mais toalha sob o joelho.",
    harder: "Braço do lado de trás sobe, e o tronco inclina 2 cm para o lado oposto. 2 × 45 s.",
    why: "Flexor curto, de tanto sentar e correr, puxa a lombar para extensão o dia inteiro."
  },
  {
    id: "figura4",
    name: "Figura 4 para Glúteos (modificada)",
    aka: "Supine Figure-4 Stretch",
    image: "/exercises/ex-figura4.webp",
    equipment: [
      "nada"
    ],
    category: "quadril",
    region: "Glúteo",
    goal: "Soltar o glúteo em figura 4 com o pé de baixo no chão, sem puxar a coxa ao peito.",
    setup: [
      "Deitado, tornozelo sobre o joelho oposto."
    ],
    how: [
      "Deitado, tornozelo sobre o joelho oposto.",
      "Em vez de puxar a coxa em direção ao peito, mantenha o pé da perna de apoio no chão (ou na parede) e empurre levemente o joelho cruzado para fora."
    ],
    cues: [
      "Pé de baixo no chão",
      "Cóccix pesado",
      "Joelho cruzado relaxa, sem mão puxando"
    ],
    breathing: "Lenta",
    dose: "2 × 30–45 s por lado",
    minPhase: 1,
    videos: [
      {
        url: "https://www.youtube.com/watch?v=SSbRKbeoFCs",
        title: "Supine Figure 4 Stretch",
        author: "E3 Rehab Exercise Library"
      }
    ],
    watch: [
      "Tendão: Evite trazer a coxa ao peito: a flexão profunda de quadril comprime a origem dos isquiotibiais. Pare se sentir no ísquio (osso de sentar).",
      "A versão que abraça a perna e leva o joelho ao peito ficou de fora de propósito."
    ],
    avoid: [
      "Puxar a coxa em direção ao peito",
      "Levantar a cabeça",
      "Forçar o joelho cruzado para o lado"
    ],
    easier: "Só o tornozelo apoiado na coxa, sem aproximar nada.",
    harder: "Aproxime um centímetro a coxa de baixo, se o ísquio continuar em 0–2/10.",
    why: "Quadril travado faz a lombar girar no lugar dele. Puxar a coxa flexiona o quadril em cima do tendão."
  },
  {
    id: "tornozelo",
    name: "Mobilidade de Tornozelo Joelho-na-Parede",
    aka: "Knee-to-Wall Ankle Mobility",
    image: "/exercises/ex-tornozelo.webp",
    equipment: [
      "parede"
    ],
    category: "quadril",
    region: "Tornozelo",
    goal: "Levar o joelho à parede com o calcanhar colado, no plano do segundo dedo.",
    setup: [
      "Em passada, de frente para a parede, leve o joelho até a parede sem tirar o calcanhar do chão."
    ],
    how: [
      "Em passada, de frente para a parede, leve o joelho até a parede sem tirar o calcanhar do chão.",
      "Afaste o pé conforme melhorar."
    ],
    cues: [
      "Calcanhar colado",
      "Joelho segue o 2º dedo",
      "Lento"
    ],
    breathing: "Natural",
    dose: "10 por lado",
    minPhase: 1,
    videos: [
      {
        url: "https://www.youtube.com/watch?v=ElrpduJn92Y",
        title: "Knee To Wall Exercise for Ankle Mobility",
        author: "Dr. Jess Harvey, Osteopath & Health Coach"
      }
    ],
    watch: [],
    avoid: [
      "Calcanhar que sobe",
      "Joelho caindo para dentro"
    ],
    easier: "Mais longe da parede, menos avanço.",
    harder: "Chegue mais perto, até o joelho quase tocar a parede. 10 por lado.",
    why: "Tornozelo rígido muda a passada e cobra a conta no joelho e na lombar."
  },
  {
    id: "balanco-lateral",
    name: "Balanço Lateral de Pernas (plano frontal)",
    aka: "Lateral Leg Swings",
    image: "/exercises/ex-balanco.webp",
    equipment: [
      "parede"
    ],
    category: "quadril",
    region: "Quadril",
    goal: "Balançar a perna no plano lateral, tronco quieto, como um pêndulo.",
    setup: [
      "Em pé, uma mão na parede só para equilíbrio. O tronco fica alto e não gira."
    ],
    how: [
      "Mão na parede só para não perder o equilíbrio. Tronco alto e quieto.",
      "Balance a perna para o lado, cruzando um pouco à frente, como um pêndulo.",
      "Cerca de 10 neste lado. O outro lado vem no bloco seguinte."
    ],
    cues: [
      "Mão num apoio",
      "Tronco alto",
      "Amplitude que não puxa o ísquio"
    ],
    breathing: "Natural",
    dose: "10 por lado",
    minPhase: 1,
    videos: [
      {
        url: "https://www.youtube.com/watch?v=6aw8CAH_65Y",
        title: "Side Leg Swings Tutorial - Proper Form and Technique",
        author: "Runna"
      }
    ],
    watch: [
      "Mudança (tendão): Os balanços para frente e para trás (alongamento balístico dos isquiotibiais) ficam suspensos até a fase 4."
    ],
    avoid: [
      "Balanço sagital nas fases 1–3",
      "Tronco que vai junto",
      "Velocidade máxima"
    ],
    easier: "Amplitude menor, 10 por lado.",
    harder: "15 por lado, ainda controlado. Sem transformar em chute.",
    why: "Prepara o quadril para o deslocamento. O balanço para frente e para trás alonga o posterior de forma balística e fica para a fase 4."
  },
  {
    id: "iso-ponte",
    name: "Ponte Isométrica (joelhos ~90°)",
    aka: "Isometric Bridge Hold",
    image: "/exercises/ex-ponte.webp",
    equipment: [
      "nada"
    ],
    category: "tendao",
    region: "Tendão isquiotibial",
    goal: "Segurar a ponte com os joelhos a cerca de 90°, sem mexer.",
    setup: [
      "Ponte bilateral com os pés um pouco mais afastados do glúteo que o habitual (joelhos ~90°)."
    ],
    how: [
      "Pressione os calcanhares como se quisesse “arrastá-los” em direção ao glúteo (ativa os isquiotibiais) sem movê-los, e sustente.",
      "Progressão: unilateral (outra perna em mesa)."
    ],
    cues: [
      "Joelho ~90°",
      "Glúteo firme, lombar neutra",
      "Esforço 50–70%, dor ≤ 2–3/10"
    ],
    breathing: "Contínua, sem apneia",
    dose: "5 × 30–45 s (1–2 min de descanso)",
    minPhase: 1,
    videos: [
      {
        url: "https://www.youtube.com/watch?v=SviHrVrznMU",
        title: "Isometric exercises for proximal hamstring tendinopathy",
        author: "Michael Braccio"
      },
      {
        url: "https://www.youtube.com/watch?v=7Gkk1onWor0",
        title: "Stage 1 Proximal Hamstring Tendinopathy Rehab Exercises | Running Rehab: From Pain to Performance",
        author: "Physiotutors"
      }
    ],
    watch: [
      "Dor durante no máximo 3/10, de volta ao basal em 24 h. De manhã: 10 pontes unilaterais."
    ],
    avoid: [
      "Subir até a lombar virar uma ponte",
      "Prender o ar",
      "Alongar o posterior no intervalo"
    ],
    easier: "Amplitude menor, segurando só 20 segundos.",
    harder: "Uma perna sai, se a bilateral estiver ≤ 2/10. 5 × 30–45 s.",
    why: "Isometria com pouca flexão de quadril modula a dor do tendão proximal e mantém carga. É a fase 1, e o analgésico das outras."
  },
  {
    id: "iso-alavanca",
    name: "Ponte Isométrica de Alavanca Longa",
    aka: "Long Lever Bridge (Isometric)",
    image: "/exercises/ex-ponte.webp",
    equipment: [
      "nada"
    ],
    category: "tendao",
    region: "Tendão isquiotibial",
    goal: "Ponte isométrica com os calcanhares longe, aumentando a alavanca sem flexionar o quadril.",
    setup: [
      "Calcanhares longe do glúteo (joelhos com ~20–30° de flexão)."
    ],
    how: [
      "Eleve o quadril alguns centímetros e sustente.",
      "Mais demanda para os isquiotibiais com pouca flexão de quadril (sem compressão do tendão)."
    ],
    cues: [
      "Calcanhar longe",
      "Quadril em linha, não em flexão funda",
      "Respira durante a sustentação"
    ],
    breathing: "Contínua",
    dose: "5 × 20–45 s",
    minPhase: 1,
    videos: [
      {
        url: "https://www.youtube.com/watch?v=8ihfgrW8Eho",
        title: "Long Lever Bridge (Isometric)",
        author: "E3 Rehab Exercise Library"
      }
    ],
    watch: [
      "Dor durante no máximo 3/10, de volta ao basal em 24 h. De manhã: 10 pontes unilaterais."
    ],
    avoid: [
      "Dobrar o quadril para \"facilitar\"",
      "Arquear a lombar",
      "Dor acima de 3/10"
    ],
    easier: "Encurte a alavanca, trazendo os calcanhares um pouco.",
    harder: "3 × 30 s, e depois a versão de um pé só se o teste da manhã estiver verde.",
    why: "Mais carga no tendão, ainda fora da zona de compressão. Entra no fim da fase 1."
  },
  {
    id: "iso-prono",
    name: "Isometria Prona de Flexão de Joelho (banda)",
    aka: "Prone Isometric Hamstring Curl",
    image: "/exercises/ex-curl-prono.webp",
    equipment: [
      "banda"
    ],
    category: "tendao",
    region: "Tendão isquiotibial",
    goal: "De bruços, segurar a banda com o joelho flexionado, sem varrer a perna.",
    setup: [
      "De bruços, testa apoiada. Passe a banda no tornozelo e segure as pontas com as mãos. Sem porta, poste ou pé de cama."
    ],
    how: [
      "Flexione o joelho a ~30–60° e sustente contra a banda.",
      "Varie os ângulos (30°, 60°, 90°).",
      "O quadril em extensão elimina a compressão do tendão."
    ],
    cues: [
      "Quadril no chão",
      "Segure, não puxe em amplitude",
      "Pescoço longo, testa apoiada"
    ],
    breathing: "Contínua",
    dose: "3–5 × 30–45 s por perna",
    minPhase: 1,
    videos: [
      {
        url: "https://www.youtube.com/watch?v=NitEV-htByM",
        title: "Prone Isometric Hamstring Curl | Build Hamstring Strength & Stability",
        author: "MVMT Performance & Rehabilitation"
      }
    ],
    watch: [
      "Dor durante no máximo 3/10, de volta ao basal em 24 h. De manhã: 10 pontes unilaterais."
    ],
    avoid: [
      "Arquear a lombar para ajudar",
      "Virar o pé para fora com força",
      "Prender o ar"
    ],
    easier: "Banda mais leve, 20 segundos.",
    harder: "3–5 × 30–45 s por perna, esforço moderado.",
    why: "Isometria prona carrega o tendão com o quadril perto do neutro — pouco compressivo."
  },
  {
    id: "ponte-unilateral",
    name: "Ponte Dinâmica Lenta e Pesada (bilateral → unilateral)",
    aka: "Single Leg Bridge (Heavy Slow)",
    image: "/exercises/ex-ponte.webp",
    equipment: [
      "nada"
    ],
    category: "tendao",
    region: "Tendão isquiotibial",
    goal: "Ponte lenta e pesada, dos dois pés para um pé só, tempo 3-1-3.",
    setup: [
      "Tempo 3 s na subida, 1 s no topo, 3 s na descida."
    ],
    how: [
      "Comece bilateral e passe para unilateral.",
      "Depois afaste os pés (alavanca mais longa).",
      "Carga: anilha/halter (ou mochila com peso) sobre o quadril até chegar perto da falha técnica (esforço 7–8/10)."
    ],
    cues: [
      "3 segundos para subir, 1 no alto, 3 para descer",
      "Bacia não cai quando um pé sai",
      "Esforço 7–8/10"
    ],
    breathing: "Expire ao subir",
    dose: "3–4 × 8–15",
    minPhase: 2,
    videos: [
      {
        url: "https://www.youtube.com/watch?v=6Jd9f35qiuw",
        title: "Single Leg Bridge Demonstration for Proximal Hamstring Tendinopathy With Physiotherapist",
        author: "GRSMcentre"
      }
    ],
    watch: [
      "Liberado a partir da fase 2 do tendão.",
      "Dor durante no máximo 3/10, de volta ao basal em 24 h. De manhã: 10 pontes unilaterais."
    ],
    avoid: [
      "Subir em um segundo",
      "Arquear a lombar",
      "Passar de 3/10 e continuar a série igual"
    ],
    easier: "Os dois pés, com uma carga no quadril (mochila, anilha).",
    harder: "Unilateral, 3–4 × 8–12. Meta para avançar: 20–25 reps por lado ≤ 2/10.",
    why: "É a força isotônica da fase 2: carga alta, velocidade baixa, quadril pouco flexionado."
  },
  {
    id: "ponte-alavanca",
    name: "Ponte de Alavanca Longa (dinâmica)",
    aka: "Long Lever Bridge",
    image: "/exercises/ex-ponte.webp",
    equipment: [
      "nada"
    ],
    category: "tendao",
    region: "Tendão isquiotibial",
    goal: "Ponte dinâmica com a perna mais estendida, subindo e descendo devagar.",
    setup: [
      "Calcanhares longe, joelhos quase estendidos."
    ],
    how: [
      "Suba e desça o quadril de forma lenta e controlada.",
      "Progrida para unilateral (fase 3)."
    ],
    cues: [
      "Calcanhar longe",
      "Tempo lento",
      "Joelhos apontam para a frente"
    ],
    breathing: "Expire ao subir",
    dose: "3 × 10–12",
    minPhase: 2,
    videos: [
      {
        url: "https://www.youtube.com/watch?v=zUaCUa0iFLA",
        title: "Long Lever Bridge",
        author: "E3 Rehab Exercise Library"
      }
    ],
    watch: [
      "Liberado a partir da fase 2 do tendão.",
      "Dor durante no máximo 3/10, de volta ao basal em 24 h. De manhã: 10 pontes unilaterais."
    ],
    avoid: [
      "Velocidade",
      "Flexão funda do quadril",
      "Lombar em arco"
    ],
    easier: "Alavanca mais curta.",
    harder: "Um pé só, 3 × 10, se a bilateral estiver fácil e verde.",
    why: "Alavanca longa aumenta o torque no tendão sem precisar de muita flexão de quadril."
  },
  {
    id: "curl-banda",
    name: "Flexão de Joelho Prona com Banda (Hamstring Curl)",
    aka: "Prone Band Hamstring Curl",
    image: "/exercises/ex-curl-prono.webp",
    equipment: [
      "banda"
    ],
    category: "tendao",
    region: "Tendão isquiotibial",
    goal: "Flexão de joelho prona com banda, lenta, tempo 3-1-3.",
    setup: [
      "De bruços. Banda em volta do tornozelo e pontas nas mãos, ou enrolada no outro pé, que fica no chão. Sem porta, sem pé de cama e sem poste."
    ],
    how: [
      "Flexione o joelho até ~90° em 2 s e retorne em 3 s.",
      "Unilateral, com uma banda que leve à fadiga."
    ],
    cues: [
      "Quadril colado",
      "3 s para dobrar, 3 s para voltar",
      "Lombar quieta"
    ],
    breathing: "Expire ao flexionar",
    dose: "3 × 12–20 por perna",
    minPhase: 2,
    videos: [
      {
        url: "https://www.youtube.com/watch?v=Yb6H3iJlo8g",
        title: "Prone Hamstring Curls with Resistance Band",
        author: "The Barbell Physio"
      }
    ],
    watch: [
      "Liberado a partir da fase 2 do tendão.",
      "Dor durante no máximo 3/10, de volta ao basal em 24 h. De manhã: 10 pontes unilaterais."
    ],
    avoid: [
      "Arquear para ganhar amplitude",
      "Ritmo de chute",
      "Banda que escorrega na panturrilha"
    ],
    easier: "Banda mais leve, amplitude menor.",
    harder: "3 × 15 por perna. Na academia, a mesa flexora em que se fica deitado faz o mesmo papel.",
    why: "Fortalece o posterior com o quadril estendido — o oposto da cadeira flexora em que se fica sentado, que comprime."
  },
  {
    id: "ponte-rolo",
    name: "Ponte com Calcanhares no Rolo",
    aka: "Foam Roller Hamstring Bridge",
    image: "/exercises/ex-rolo-torax.webp",
    equipment: [
      "rolo"
    ],
    category: "tendao",
    region: "Tendão isquiotibial",
    goal: "Ponte com os calcanhares em cima do rolo, subida lenta.",
    setup: [
      "Calcanhares sobre o rolo, joelhos a ~90°."
    ],
    how: [
      "Faça a ponte mantendo o rolo imóvel — a instabilidade gera cocontração de isquiotibiais e glúteos.",
      "Na fase 3: unilateral no rolo e curl no rolo."
    ],
    cues: [
      "Calcanhar no rolo, não o ísquio",
      "Quadril sobe em bloco",
      "Desça sem deixar o rolo fugir"
    ],
    breathing: "Expire ao subir",
    dose: "3 × 10",
    minPhase: 2,
    videos: [
      {
        url: "https://www.youtube.com/watch?v=bx-VYohQTVY",
        title: "Foam Roller Hamstring Bridge",
        author: "Next Level Physical Therapy"
      }
    ],
    watch: [
      "Liberado a partir da fase 2 do tendão.",
      "Dor durante no máximo 3/10, de volta ao basal em 24 h. De manhã: 10 pontes unilaterais."
    ],
    avoid: [
      "Rolar o ísquio em si",
      "Velocidade",
      "Lombar que lidera a subida"
    ],
    easier: "Ponte no chão, sem o rolo.",
    harder: "3 × 10, pausa de um segundo no alto.",
    why: "O rolo pede estabilidade e um pouco mais de trabalho do posterior, ainda com o joelho dobrado."
  },
  {
    id: "extensao-quadril",
    name: "Extensão de Quadril em Pé com Banda",
    aka: "Standing Banded Hip Extension",
    image: "/exercises/ex-extensao-quadril.webp",
    equipment: [
      "banda",
      "parede"
    ],
    category: "tendao",
    region: "Tendão isquiotibial",
    goal: "Levar a perna para trás em pé, contra a banda, tronco quase parado.",
    setup: [
      "Mini-banda nos dois tornozelos, ou pise numa ponta e prenda a outra no tornozelo de trás. A mão na parede é só equilíbrio. Sem poste."
    ],
    how: [
      "Em pé, com leve apoio, leve a perna estendida para trás contraindo glúteos e isquiotibiais, sem arquear a lombar.",
      "2 s na ida, 3 s na volta."
    ],
    cues: [
      "Tronco alto e quieto",
      "Perna vai atrás, não para o lado",
      "Joelhos da perna de apoio macio"
    ],
    breathing: "Expire ao estender",
    dose: "3 × 12–15 por perna",
    minPhase: 2,
    videos: [
      {
        url: "https://www.youtube.com/watch?v=UHQt49fxraQ",
        title: "Hip extension with band",
        author: "Rehab My Patient"
      }
    ],
    watch: [
      "Liberado a partir da fase 2 do tendão.",
      "Dor durante no máximo 3/10, de volta ao basal em 24 h. De manhã: 10 pontes unilaterais."
    ],
    avoid: [
      "Inclinar o tronco à frente para alongar",
      "Arquear a lombar",
      "Balançar"
    ],
    easier: "Sem banda, amplitude menor.",
    harder: "3 × 12 por perna, pausa de um segundo atrás.",
    why: "Extensão de quadril com pouca flexão — padrão de fase 2, útil para a passada sem alongar o tendão."
  },
  {
    id: "hip-thrust",
    name: "Hip Thrust (academia)",
    aka: "Barbell Hip Thrust",
    image: "/exercises/ex-ponte.webp",
    equipment: [
      "nada"
    ],
    category: "tendao",
    region: "Tendão isquiotibial",
    goal: "Hip thrust, ou a ponte carregada em casa, pesado e lento.",
    setup: [
      "Escápulas apoiadas no banco, barra/halter no quadril, pés na largura do quadril."
    ],
    how: [
      "Suba em 2–3 s até o quadril ficar em linha, pausa, desça em 3 s.",
      "Pés mais longe = mais isquiotibiais."
    ],
    cues: [
      "Queixo recuado",
      "Costela não estufa",
      "3 segundos para subir"
    ],
    breathing: "Expire ao subir",
    dose: "3–4 × 6–10 pesado (esforço 7–8/10)",
    minPhase: 2,
    videos: [
      {
        url: "https://www.youtube.com/watch?v=LM8XHLYJoYs",
        title: "Proper Hip Thrust Form",
        author: "Bret Contreras Glute Guy"
      }
    ],
    watch: [
      "Lombar: Costelas baixas, queixo recuado, sem hiperestender a lombar no topo.",
      "Em casa não precisa de banco: a ponte com carga no quadril vale. O vídeo mostra o banco da academia.",
      "Liberado a partir da fase 2 do tendão.",
      "Dor durante no máximo 3/10, de volta ao basal em 24 h. De manhã: 10 pontes unilaterais."
    ],
    avoid: [
      "Hiperestender a lombar no alto",
      "Quicar a carga",
      "Fazer explosivo antes da fase 4"
    ],
    easier: "Ponte bilateral no chão, com uma mochila no quadril.",
    harder: "Na academia, carga que caiba em 6–10 repetições limpas, 3 séries.",
    why: "Glúteo e posterior com o quadril em pouca flexão. Liberado na fase 2; explosão fica para a fase 4."
  },
  {
    id: "dobradica",
    name: "Dobradiça de Quadril (Hip Hinge) com Bastão",
    aka: "Hip Hinge with Dowel",
    image: "/exercises/ex-rock-back.webp",
    equipment: [
      "nada"
    ],
    category: "tendao",
    region: "Tendão isquiotibial",
    goal: "Dobrar o quadril para trás com um bastão nas costas, joelhos macios.",
    setup: [
      "Bastão nas costas tocando cabeça, torácica e sacro."
    ],
    how: [
      "Leve o quadril para trás com os joelhos levemente flexionados, mantendo os 3 contatos.",
      "Na fase 2, só até onde não houver dor no ísquio (em geral, até acima do joelho).",
      "Prepara o RDL."
    ],
    cues: [
      "Bastão toca a cabeça, o tórax e o sacro",
      "Joelhos macios",
      "Tronco longo"
    ],
    breathing: "Inspire ao descer",
    dose: "2 × 10",
    minPhase: 2,
    videos: [
      {
        url: "https://www.youtube.com/watch?v=45DQiwq4oKk",
        title: "How To Do A Hip Hinge w/ A Dowel - Tangelo Health",
        author: "Tangelo - Seattle Chiropractor + Rehab"
      }
    ],
    watch: [
      "Liberado a partir da fase 2 do tendão.",
      "Dor durante no máximo 3/10, de volta ao basal em 24 h. De manhã: 10 pontes unilaterais."
    ],
    avoid: [
      "Arredondar a lombar",
      "Travar o joelho",
      "Descer até o tendão passar de 3/10"
    ],
    easier: "Mãos no quadril, sem bastão, amplitude menor.",
    harder: "Segure um halter leve, se o bastão estiver estável. O RDL pesado espera a fase 3.",
    why: "Ensina o hinge da fase 2 sem a flexão funda do stiff. O bastão denuncia se a lombar arredonda."
  },
  {
    id: "curl-rolo",
    name: "Flexão de Joelhos no Rolo (Hamstring Curl no Rolo)",
    aka: "Foam Roller Hamstring Curl",
    image: "/exercises/ex-rolo-torax.webp",
    equipment: [
      "rolo"
    ],
    category: "tendao",
    region: "Tendão isquiotibial",
    goal: "Puxar o rolo com os calcanhares, quadril alto, joelhos dobrando.",
    setup: [
      "Em ponte com os calcanhares no rolo, role-o em direção ao glúteo flexionando os joelhos e estenda de volta, mantendo o quadril alto."
    ],
    how: [
      "Em ponte com os calcanhares no rolo, role-o em direção ao glúteo flexionando os joelhos e estenda de volta, mantendo o quadril alto.",
      "Progrida para unilateral."
    ],
    cues: [
      "Quadril alto o tempo todo",
      "Puxe o rolo, não despenque a bacia",
      "Tempo lento"
    ],
    breathing: "Expire ao puxar",
    dose: "3 × 8–12",
    minPhase: 3,
    videos: [
      {
        url: "https://www.youtube.com/watch?v=a8rPHLvWIfM",
        title: "Hamstring Curl with Foam Roller",
        author: "Mike | J2FIT Strength & Conditioning"
      }
    ],
    watch: [
      "Liberado a partir da fase 3 do tendão.",
      "Dor durante no máximo 3/10, de volta ao basal em 24 h. De manhã: 10 pontes unilaterais."
    ],
    avoid: [
      "Deixar o quadril cair no meio",
      "Velocidade",
      "Dor acima de 3/10"
    ],
    easier: "Ponte no rolo, sem puxar (fase 2).",
    harder: "3 × 8–12. Uma perna só, se as duas estiverem fáceis e verdes.",
    why: "Na fase 3 o posterior trabalha enquanto o quadril flexiona um pouco — a compressão entra aos poucos."
  },
  {
    id: "rdl",
    name: "Levantamento Terra Romeno (RDL) Progressivo",
    aka: "Romanian Deadlift",
    image: "/exercises/ex-rock-back.webp",
    equipment: [
      "nada"
    ],
    category: "tendao",
    region: "Tendão isquiotibial",
    goal: "Levantamento terra romeno, descendo só até a amplitude que o tendão aceita hoje.",
    setup: [
      "Halteres ou barra, joelhos levemente flexionados, quadril para trás, coluna neutra."
    ],
    how: [
      "Desça 3 s até uma tensão controlada.",
      "Aumente a AMPLITUDE aos poucos ao longo das semanas (acima do joelho → meio da tíbia): a amplitude de flexão do quadril é a variável que aumenta a compressão."
    ],
    cues: [
      "Joelhos macios",
      "Barra ou halter perto da coxa",
      "Coluna longa, bastão imaginário nas costas"
    ],
    breathing: "Inspire e “trave” antes de descer",
    dose: "3–4 × 6–10, 2×/semana",
    minPhase: 3,
    videos: [
      {
        url: "https://www.youtube.com/watch?v=uhghy9pFIPY",
        title: "How To Perform PERFECT Romanian Deadlifts | RDLs (Everything You Need To Know)",
        author: "E3 Rehab"
      }
    ],
    watch: [
      "Lombar (artrose): Coluna neutra e rígida, carga progressiva, sem arredondar. Progrida primeiro a amplitude e depois a carga.",
      "Fase ≥ 3. Em casa, halter, mochila ou banda sob os pés. Na academia, barra.",
      "Liberado a partir da fase 3 do tendão.",
      "Dor durante no máximo 3/10, de volta ao basal em 24 h. De manhã: 10 pontes unilaterais."
    ],
    avoid: [
      "Stiff com joelho travado",
      "Descer por vaidade",
      "Fazer nas fases 1 e 2 com carga"
    ],
    easier: "Dobradiça com bastão, sem carga.",
    harder: "Carga moderada-alta, 3–4 × 6–10, se a manhã seguinte continuar verde.",
    why: "É a flexão de quadril com carga da fase 3. A amplitude cresce de semana em semana, não num dia."
  },
  {
    id: "rdl-unilateral",
    name: "RDL Unilateral Apoiado",
    aka: "Supported Single Leg Deadlift",
    image: "/exercises/ex-rock-back.webp",
    equipment: [
      "nada"
    ],
    category: "tendao",
    region: "Tendão isquiotibial",
    goal: "RDL de uma perna, mão num apoio, coluna longa.",
    setup: [
      "Uma mão apoiada (parede/rack), halter na outra."
    ],
    how: [
      "A perna de trás sobe em linha com o tronco.",
      "Quadril nivelado.",
      "Retire o apoio quando dominar o equilíbrio."
    ],
    cues: [
      "Mão no apoio",
      "Quadril da perna de trás não abre",
      "Desça até 3/10, não até o chão"
    ],
    breathing: "Inspire ao descer",
    dose: "3 × 8–10 por perna",
    minPhase: 3,
    videos: [
      {
        url: "https://www.youtube.com/watch?v=c8xZbwTx4XM",
        title: "How to do a Supported Single Leg Deadlift | Tim Keeley | Physio REHAB",
        author: "Physio REHAB"
      }
    ],
    watch: [
      "Fase ≥ 3.",
      "Liberado a partir da fase 3 do tendão.",
      "Dor durante no máximo 3/10, de volta ao basal em 24 h. De manhã: 10 pontes unilaterais."
    ],
    avoid: [
      "Girar a bacia",
      "Olhar para o pé e arredondar",
      "Largar o apoio cedo demais"
    ],
    easier: "Só o hinge bilateral.",
    harder: "Cerca de 20–25% do peso corporal, 3 × 8, ≤ 2/10 — é critério para a fase 4.",
    why: "Força unilateral para a corrida e o tênis, com a flexão de quadril sob controle. Fase 3."
  },
  {
    id: "nordico",
    name: "Nórdico Assistido (excêntrico)",
    aka: "Nordic Hamstring Curl (band-assisted)",
    image: "/exercises/ex-flexor.webp",
    equipment: [
      "banda"
    ],
    category: "tendao",
    region: "Tendão isquiotibial",
    goal: "Nórdico assistido: desça o tronco com a banda ajudando, e volte com a ajuda dela.",
    setup: [
      "Ajoelhado numa almofada. Pés debaixo de um sofá firme, que não escorregue, ou com ajuda de alguém. A banda fica nas mãos, à frente, para ajudar a voltar — sem porta e sem poste. Se não houver sofá seguro, faça o curl deitado com a banda no pé."
    ],
    how: [
      "Desça o tronco em linha reta joelhos–cabeça o mais lento possível (3–5 s), amortecendo com as mãos.",
      "Volte empurrando o chão."
    ],
    cues: [
      "Banda tira parte do peso",
      "Quadril estendido, não sentado",
      "Descida de 3 a 5 segundos"
    ],
    breathing: "Contínua",
    dose: "2–3 × 3–6, 1–2×/semana",
    minPhase: 3,
    videos: [
      {
        url: "https://www.youtube.com/watch?v=_e9vFU9-tkc",
        title: "How to Set Up, Perform, & Program Nordic Hamstring Curls (Progressions | Regressions | Alternatives)",
        author: "E3 Rehab"
      }
    ],
    watch: [
      "Tendão: Pouca flexão de quadril, mas carga excêntrica muito alta: introduza só com a fase 3 bem tolerada, com poucas repetições. Dor muscular tardia é esperada nas primeiras sessões — diferencie da dor no tendão.",
      "Fase ≥ 3. Prenda os calcanhares sob um móvel firme. O vídeo mostra progressões; fique na assistida.",
      "Liberado a partir da fase 3 do tendão.",
      "Dor durante no máximo 3/10, de volta ao basal em 24 h. De manhã: 10 pontes unilaterais."
    ],
    avoid: [
      "Cair sem controle",
      "Fazer todo dia",
      "Começar nas fases 1 e 2"
    ],
    easier: "Mais ajuda da banda, amplitude de poucos centímetros.",
    harder: "3 × 5 controlados. Menos ajuda da banda só se a manhã estiver verde.",
    why: "Excêntrico forte do posterior. Uma ou duas vezes por semana, a partir da fase 3, nunca no dia da perna pesada."
  },
  {
    id: "swing",
    name: "Kettlebell Swing (potência)",
    aka: "Kettlebell Swing",
    image: "/exercises/ex-rock-back.webp",
    equipment: [
      "nada"
    ],
    category: "tendao",
    region: "Tendão isquiotibial",
    goal: "Kettlebell swing, potência do quadril, num dia alto da fase 4.",
    setup: [
      "Dobradiça de quadril explosiva, braços passivos, kettlebell até a altura do peito."
    ],
    how: [
      "Glúteos firmes no topo, sem hiperestender a lombar.",
      "Comece leve."
    ],
    cues: [
      "O quadril dispara, o braço só segura",
      "Lombar neutra",
      "Amanhã é dia baixo"
    ],
    breathing: "Expire forte no topo",
    dose: "5–8 × 10–15, 2×/semana",
    minPhase: 4,
    videos: [
      {
        url: "https://www.youtube.com/watch?v=aSYap2yhW8s",
        title: "The BEST Kettlebell Swing Tutorial",
        author: "Squat University"
      }
    ],
    watch: [
      "Lombar: Dobradiça (não agachamento) com coluna neutra. Faça nos dias de carga “alta” do ciclo alto/baixo/médio.",
      "Fase 4. Sem kettlebell, use um halter pesado o bastante para o quadril trabalhar — ou deixe para a academia.",
      "Liberado a partir da fase 4 do tendão.",
      "Dor durante no máximo 3/10, de volta ao basal em 24 h. De manhã: 10 pontes unilaterais."
    ],
    avoid: [
      "Fazer nas fases 1–3",
      "Dois dias seguidos de swing, tiro ou jogo intenso",
      "Arquear a lombar"
    ],
    easier: "Dobradiça com carga leve, sem balanço.",
    harder: "5 × 12 em dia alto, com 48–72 h até a próxima pliometria.",
    why: "Armazena e devolve energia, como o arranque no tênis. Não convive com outro dia alto seguido."
  },
  {
    id: "skips",
    name: "Educativos de Corrida (A-skip → B-skip)",
    aka: "A-Skip / B-Skip",
    image: "/exercises/ex-tornozelo.webp",
    equipment: [
      "nada"
    ],
    category: "tendao",
    region: "Corrida",
    goal: "A-skip e, se estiver folgado, B-skip: o joelho sobe, o pé volta rápido ao chão.",
    setup: [
      "A-skip: elevação de joelho com contato ativo do pé sob o quadril."
    ],
    how: [
      "O B-skip acrescenta a extensão da perna e a “puxada” — é mais exigente para os isquiotibiais.",
      "Só depois do A-skip bem tolerado."
    ],
    cues: [
      "Tronco alto",
      "Contato rápido e quieto",
      "Passo curto"
    ],
    breathing: "Natural",
    dose: "3–4 × 20 m de cada",
    minPhase: 4,
    videos: [
      {
        url: "https://www.youtube.com/watch?v=A7r6yCpmSrA",
        title: "How to Do A-Skip - B-Skip with Proper Form- Find Your Stride with Coach John Smith",
        author: "Runify"
      }
    ],
    watch: [
      "Liberado a partir da fase 4 do tendão.",
      "Dor durante no máximo 3/10, de volta ao basal em 24 h. De manhã: 10 pontes unilaterais."
    ],
    avoid: [
      "Volume longo",
      "Fazer cansado da pliometria de ontem",
      "B-skip se o A-skip já dói"
    ],
    easier: "Marcha no lugar, joelho baixo, 20 segundos.",
    harder: "3 × 20 m de A-skip e, na última, um trecho curto de B-skip.",
    why: "Educativo da corrida para o tendão reaprender velocidade, na fase 4, em dose curta."
  },
  {
    id: "bounding",
    name: "Saltos Alternados (Bounding) Progressivos",
    aka: "Bounding Progression",
    image: "/exercises/ex-tornozelo.webp",
    equipment: [
      "nada"
    ],
    category: "tendao",
    region: "Corrida e tênis",
    goal: "Saltos alternados, baixos e curtos, progressivos.",
    setup: [
      "Comece com skips longos → saltos alternados curtos → bounding completo."
    ],
    how: [
      "Comece com skips longos → saltos alternados curtos → bounding completo.",
      "Superfície macia e plana, volume baixo."
    ],
    cues: [
      "Salto baixo",
      "Poucas repetições",
      "48–72 h até o próximo dia de salto"
    ],
    breathing: "Natural",
    dose: "3–5 × 20–30 m, 1–2×/semana",
    minPhase: 4,
    videos: [
      {
        url: "https://www.youtube.com/watch?v=zegHQw9HWNY",
        title: "Learning How to Bound // Easy Bounding Progression for Jumpers and Athletes",
        author: "Coach Cale"
      }
    ],
    watch: [
      "Tendão: 48–72 h entre sessões pliométricas. Monitore a resposta de 24 h.",
      "Liberado a partir da fase 4 do tendão.",
      "Dor durante no máximo 3/10, de volta ao basal em 24 h. De manhã: 10 pontes unilaterais."
    ],
    avoid: [
      "Máximo na primeira sessão",
      "Subida",
      "Repetir no dia seguinte"
    ],
    easier: "Saltitos no lugar, dois pés, 10 segundos.",
    harder: "3 × 8 saltos um pouco mais longos, se as duas sessões anteriores foram verdes.",
    why: "O ciclo de alongar e encurtar do tendão, em dose de fase 4. Para se a dor passar de 3/10."
  },
  {
    id: "rolo-massagem",
    name: "Rolo na Torácica",
    aka: "Thoracic Spine Foam Rolling",
    image: "/exercises/ex-rolo-torax.webp",
    equipment: [
      "rolo"
    ],
    category: "recuperacao",
    region: "Tórax",
    goal: "Rolar o meio das costas, devagar, sem descer para a lombar.",
    setup: [
      "Rolo na horizontal sob o meio das costas, mãos atrás da cabeça, quadril elevado ou apoiado."
    ],
    how: [
      "Rolo na horizontal sob o meio das costas, mãos atrás da cabeça, quadril elevado ou apoiado.",
      "Role lentamente do meio das costas até abaixo das escápulas, pausando nos pontos rígidos para respirar."
    ],
    cues: [
      "Rolo nas costelas altas e médias",
      "Cabeça apoiada pelas mãos",
      "Respire no ponto"
    ],
    breathing: "Lenta",
    dose: "1–2 min",
    minPhase: 1,
    videos: [
      {
        url: "https://www.youtube.com/watch?v=hJuoqOHLbzY",
        title: "Thoracic Spine Foam Rolling",
        author: "Dr. Beau Beard"
      }
    ],
    watch: [
      "Cuidado: Nunca role a lombar nem o pescoço."
    ],
    avoid: [
      "Rolar a lombar",
      "Segurar o ar",
      "Dor aguda no pescoço"
    ],
    easier: "Toalha enrolada, deitado, sem rolar.",
    harder: "Pausa de 20 segundos num ponto de 4–6/10, depois siga.",
    why: "A rigidez torácica pede tecido solto no meio das costas. A lombar óssea não se rola."
  },
  {
    id: "rolo-gluteo",
    name: "Rolo nos Glúteos (sem pressionar o ísquio)",
    aka: "Glute Foam Rolling",
    image: "/exercises/ex-rolo-gluteo.webp",
    equipment: [
      "rolo"
    ],
    category: "recuperacao",
    region: "Glúteo",
    goal: "Rolar o glúteo médio, na lateral do quadril, longe do ísquio.",
    setup: [
      "Sentado sobre o rolo, inclinado para um lado, com o tornozelo cruzado sobre o joelho oposto."
    ],
    how: [
      "Sentado sobre o rolo, inclinado para um lado, com o tornozelo cruzado sobre o joelho oposto.",
      "Trabalhe glúteo médio e a porção lateral/superior do glúteo máximo."
    ],
    cues: [
      "Peso na lateral do glúteo",
      "Mãos aliviam se passar de 6/10",
      "Saia se a perna formigar"
    ],
    breathing: "Lenta",
    dose: "1 min por lado",
    minPhase: 1,
    videos: [
      {
        url: "https://www.youtube.com/watch?v=4sJtt9c55MI",
        title: "How to PROPERLY Release your Glutes on the Foam Roller",
        author: "Physio REHAB"
      }
    ],
    watch: [
      "Tendão: NÃO role diretamente sobre o túber isquiático (osso de sentar = origem do tendão): a compressão direta pode irritar a tendinopatia.",
      "Se formigar a perna, você encostou no nervo: saia do ponto."
    ],
    avoid: [
      "Sentar o ísquio em cima do rolo",
      "Rolar a lombar",
      "Figura 4 que enfia o tendão no rolo"
    ],
    easier: "Mais peso nas mãos.",
    harder: "1 minuto por lado, ainda fora do ísquio.",
    why: "Glúteo duro muda a passada. O osso em que você senta é a origem do tendão — não se apoia nele."
  },
  {
    id: "rolo-quadriceps",
    name: "Rolo no Quadríceps (substitui o rolo na banda iliotibial)",
    aka: "Quad Foam Rolling",
    image: "/exercises/ex-rolo-lado.webp",
    equipment: [
      "rolo"
    ],
    category: "recuperacao",
    region: "Quadríceps",
    goal: "Rolar a frente da coxa. O trato iliotibial não se rola.",
    setup: [
      "De bruços, rolo sob as coxas."
    ],
    how: [
      "De bruços, rolo sob as coxas.",
      "Role do quadril até acima do joelho, girando levemente para alcançar o vasto lateral."
    ],
    cues: [
      "De bruços, rolo na frente da coxa",
      "Evite a patela",
      "Ponto 4–6/10"
    ],
    breathing: "Lenta",
    dose: "1 min por lado",
    minPhase: 1,
    videos: [
      {
        url: "https://www.youtube.com/watch?v=7FoLY0EgdqI",
        title: "The RIGHT Way To Foam Roll Your Quads | Physical Therapist Teaches Foam Rolling Technique",
        author: "Rehab and Revive"
      }
    ],
    watch: [],
    avoid: [
      "Rolar a lateral do joelho achando que é \"banda\"",
      "Rolar em cima da patela"
    ],
    easier: "Mais peso nos antebraços.",
    harder: "Dobre e estique o joelho um pouco em cima de um ponto, 1 minuto por lado.",
    why: "Troca o rolo na banda iliotibial, que dói e não alonga o trato, por um tecido que aceita pressão."
  },
  {
    id: "rolo-panturrilha",
    name: "Rolo nas Panturrilhas",
    aka: "Calf Foam Rolling",
    image: "/exercises/ex-panturrilha.webp",
    equipment: [
      "rolo"
    ],
    category: "recuperacao",
    region: "Panturrilha",
    goal: "Rolar a panturrilha, devagar, sem esmagar o tendão de Aquiles.",
    setup: [
      "Sentado, rolo sob as panturrilhas, quadril elevado com as mãos."
    ],
    how: [
      "Cruze a perna de cima para aumentar a pressão.",
      "Gire o pé para dentro e para fora."
    ],
    cues: [
      "Perna em cima da outra se quiser mais peso",
      "Evite o calcanhar ósseo",
      "Respire"
    ],
    breathing: "Lenta",
    dose: "1 min por lado",
    minPhase: 1,
    videos: [
      {
        url: "https://www.youtube.com/watch?v=nZZe9ai7Vvw",
        title: "Foam Roller: Calves",
        author: "Runner's World"
      }
    ],
    watch: [],
    avoid: [
      "Rolar em cima do tendão de Aquiles dolorido",
      "Prender o ar"
    ],
    easier: "Menos peso, rolo mais macio.",
    harder: "1 minuto por lado, com o tornozelo flexionando de leve.",
    why: "Panturrilha presa muda a passada. O rolo devolve o tecido sem pedir flexão de quadril."
  },
  {
    id: "respiracao-9090",
    name: "Respiração 90/90 com Pés na Parede",
    aka: "90/90 Breathing",
    image: "/exercises/ex-descanso.webp",
    equipment: [
      "parede"
    ],
    category: "recuperacao",
    region: "Respiração",
    goal: "Respirar com quadril e joelhos a 90°, pés na parede.",
    setup: [
      "Deitado, quadris e joelhos a 90°, pés apoiados na parede (ou panturrilhas sobre uma cadeira/sofá)."
    ],
    how: [
      "Inspire pelo nariz.",
      "Expire longamente pela boca sentindo as costelas descerem e a lombar relaxar."
    ],
    cues: [
      "Joelhos dobrados",
      "Lombar confortável, pode usar um apoio",
      "Expire mais longa que a inspiração"
    ],
    breathing: "Diafragmática/costal",
    dose: "5 min",
    minPhase: 1,
    videos: [
      {
        url: "https://www.youtube.com/watch?v=QdkE6Tdgpvk",
        title: "90/90 Breathing For Back Health and Core Strength",
        author: "Zack Henderson"
      }
    ],
    watch: [
      "Substitui “pernas estendidas na parede”: Pernas estendidas na parede = isquiotibiais alongados com o quadril fletido. Com os joelhos dobrados você mantém a descompressão e o relaxamento sem tracionar o tendão.",
      "Atualizando da versão anterior: substitua o arquivo/link antigo por este, remova o ícone antigo da tela inicial e adicione novamente. A fase do tendão e o diário ficam salvos no aparelho."
    ],
    avoid: [
      "Esticar os joelhos em direção ao teto",
      "Forçar a lombar no chão",
      "Transformar em alongamento de posterior"
    ],
    easier: "Pés numa cadeira, se a parede for longe.",
    harder: "5 minutos, contando só a expiração. Nada para corrigir além do ar.",
    why: "Substitui as pernas estendidas na parede, que alongavam o posterior com o quadril fletido."
  }
];

export const exerciseMap = Object.fromEntries(
  exercises.map((exercise) => [exercise.id, exercise]),
) as Record<string, Exercise>;

export function getExercise(id: string): Exercise {
  const exercise = exerciseMap[id];
  if (!exercise) {
    throw new Error(`Exercício não encontrado: ${id}`);
  }
  return exercise;
}

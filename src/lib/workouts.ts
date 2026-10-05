import type { StepOption, StepTemplate, TendonPhase, Workout, WorkoutTemplate } from "./types";
import { tendonSteps } from "./tendon";

export const TRANSITION_SECONDS = 10;
export const BLOCK_SECONDS = 30;

function hold(exerciseId: string, note?: string, plus = false): StepTemplate {
  return { exerciseId, seconds: BLOCK_SECONDS, note, plus };
}

function reps(exerciseId: string, note?: string, plus = false, count = 10): StepTemplate {
  return { exerciseId, seconds: BLOCK_SECONDS, note, plus, reps: count };
}

function pair(
  exerciseId: string,
  right: string,
  left: string,
  kind: "reps" | "hold" = "reps",
  plus = false,
): StepTemplate[] {
  const build = kind === "hold" ? hold : reps;
  return [build(exerciseId, right, plus), build(exerciseId, left, plus)];
}

function choose(seconds: number, options: StepOption[], plus = false, count?: number): StepTemplate {
  return {
    exerciseId: options[0].exerciseId,
    seconds,
    plus,
    options,
    ...(count ? { reps: count } : {}),
  };
}

const rollChoice = (plus = false): StepTemplate =>
  choose(
    BLOCK_SECONDS,
    [
      { minPhase: 3, exerciseId: "roll-up", note: "Fase 3 ou mais. Joelhos macios, sem impulso." },
      { minPhase: 1, exerciseId: "half-roll-back", note: "Fases 1–2: role só até a metade." },
    ],
    plus,
    8,
  );

const teaserChoice = (plus = false): StepTemplate =>
  choose(
    BLOCK_SECONDS,
    [
      { minPhase: 4, exerciseId: "teaser", note: "Fase 4. Sobe sem impulso. Joelhos macios se o ísquio avisar." },
      { minPhase: 3, exerciseId: "teaser-uma-perna", note: "Fase 3. Uma perna estendida, a outra dobrada." },
      { minPhase: 1, exerciseId: "teaser-prep", note: "Joelhos dobrados. A perna longa espera a fase 3." },
    ],
    plus,
    6,
  );

const mixWhy =
  "Cada dia mistura mobilidade, abdômen, quadril e um gesto útil para o tênis. A lombar fica estável, a cabeça pode apoiar, e o posterior não é alongado. A fase do tendão, salva neste aparelho, escolhe o bloco do meio.";

export const workouts: WorkoutTemplate[] = [
  {
    id: "segunda",
    weekday: 1,
    title: "Treino misto",
    shortTitle: "Misto",
    focus: "Tórax, hundred, dead bug, Pallof com o pé na banda e balanço lateral. O tendão entra na dose mais pesada da semana.",
    why: `${mixWhy} Segunda é o dia de força do tendão — o resto do corpo treina junto, em blocos curtos.`,
    equipment: ["nada", "banda", "rolo", "parede"],
    tendon: "strength",
    tendonAt: 6,
    steps: [
      hold("respiracao", "Costelas abrem para os lados. Abdômen leve."),
      hold("gato-vaca", "Onda no meio das costas. Lombar quase quieta."),
      reps("hundred", "Cabeça pode apoiar. Lombar estável, sem sit-up."),
      ...pair("livro-aberto", "Deitado sobre o lado esquerdo. Cabeça na almofada.", "Deitado sobre o lado direito. Cabeça na almofada."),
      hold("retracao", "Queixo recua um centímetro. Olhar na frente."),
      ...pair("dead-bug", "Braço direito e perna esquerda. Lombar estável.", "Braço esquerdo e perna direita. Lombar estável."),
      ...pair("criss-cross", "Gire para a direita. Cabeça apoia se o pescoço cansar.", "Gire para a esquerda. Cabeça apoia se o pescoço cansar."),
      ...pair(
        "pallof",
        "Lado direito: o pé direito pisa na banda. Sem poste.",
        "Lado esquerdo: o pé esquerdo pisa na banda. Sem poste.",
      ),
      ...pair("prancha-lado", "Antebraço direito no chão. Corpo em linha.", "Antebraço esquerdo no chão. Corpo em linha.", "hold"),
      ...pair("balanco-lateral", "Perna direita. Mão na parede só para equilíbrio.", "Perna esquerda. Mão na parede só para equilíbrio."),
      reps("pull-apart", "Banda nas duas mãos, na altura do peito."),
      ...pair("side-kick", "Perna direita por cima. Chute curto nas fases 1 e 2.", "Perna esquerda por cima. Mesma amplitude."),
      ...pair("single-leg-stretch", "A perna direita estende. Cabeça pode apoiar.", "A perna esquerda estende. Cabeça pode apoiar."),
      reps("swimming", "Olhar no tapete. Lombar quieta."),
      ...pair("concha", "Deitado sobre o lado esquerdo. Bacia não rola.", "Deitado sobre o lado direito. Bacia não rola."),
      reps("double-leg-stretch", "Abre e recolhe sem a lombar arquear."),
      reps("face-pull", "As duas mãos na banda. Sem porta e sem poste."),
      rollChoice(true),
      ...pair("bird-dog", "Braço direito e perna esquerda.", "Braço esquerdo e perna direita.", "reps", true),
      teaserChoice(true),
      reps("hundred", "Mais uma passagem curta. Cabeça apoia se precisar.", true),
      hold("prancha-rolo", "Quadril em linha. Desça se o ombro doer.", true),
    ],
  },
  {
    id: "terca",
    weekday: 2,
    title: "Treino misto",
    shortTitle: "Misto",
    focus: "Sereia sentada, oblíquo, Pallof e quadril. O tendão fica na dose leve, para recuperar da segunda.",
    why: `${mixWhy} Terça não repete a carga pesada do posterior: o bloco do tendão é analgésico e curto.`,
    equipment: ["nada", "banda"],
    tendon: "analgesic",
    tendonAt: 7,
    steps: [
      hold("respiracao", "Deitado, joelhos dobrados, costelas para os lados."),
      hold("gato-vaca", "Só o meio das costas. Lombar quase quieta."),
      ...pair("sereia", "Sentado. Incline o tronco para a direita.", "Sentado. Incline o tronco para a esquerda."),
      ...pair("criss-cross", "Gire para a direita, devagar.", "Gire para a esquerda, devagar."),
      reps("hundred", "Pés no chão se a lombar pedir. Cabeça pode apoiar."),
      ...pair(
        "pallof",
        "Lado direito: o pé direito pisa na banda. Sem poste.",
        "Lado esquerdo: o pé esquerdo pisa na banda. Sem poste.",
      ),
      ...pair("dead-bug", "Braço direito e perna esquerda.", "Braço esquerdo e perna direita."),
      ...pair("prancha-lado", "Antebraço direito. Joelho no chão se o ombro pedir.", "Antebraço esquerdo. Joelho no chão se o ombro pedir.", "hold"),
      ...pair("flexor", "Joelho direito no chão. Bacia encaixada.", "Joelho esquerdo no chão. Bacia encaixada.", "hold"),
      ...pair("figura4", "Tornozelo direito por cima. Pé de baixo no chão.", "Tornozelo esquerdo por cima. Pé de baixo no chão.", "hold"),
      ...pair("side-kick", "Perna direita por cima.", "Perna esquerda por cima."),
      reps("double-leg-stretch", "Sem arco na lombar."),
      ...pair("bird-dog", "Braço direito e perna esquerda.", "Braço esquerdo e perna direita."),
      reps("swimming", "Extensão baixa. Olhar no tapete."),
      ...pair("agulha", "Braço direito por baixo. Cabeça na almofada.", "Braço esquerdo por baixo. Cabeça na almofada."),
      reps("face-pull", "Banda nas mãos, cotovelos altos. Sem porta."),
      reps("pull-apart", "Omoplatas descem. Costelas quietas."),
      ...pair("single-leg-stretch", "Perna direita estende.", "Perna esquerda estende."),
      ...pair("criss-cross", "Bloco extra. Gire para a direita.", "Bloco extra. Gire para a esquerda.", "reps", true),
      reps("double-leg-stretch", "Mais uma série curta.", true),
      ...pair("leg-pull-front", "Eleve a perna direita, pouco.", "Eleve a perna esquerda, pouco.", "reps", true),
      reps("swimming", "Passagem curta.", true),
    ],
  },
  {
    id: "quarta",
    weekday: 3,
    title: "Treino misto",
    shortTitle: "Misto",
    focus: "Rolo no tórax, série abdominal, remada pisando na banda e sereia. Tendão em dose leve.",
    why: `${mixWhy} Quarta abre o meio das costas e o peito, e o abdômen trabalha no mesmo dia — sem virar uma aula só de rolo.`,
    equipment: ["nada", "banda", "rolo"],
    tendon: "analgesic",
    tendonAt: 6,
    steps: [
      hold("respiracao", "Costelas para os lados."),
      hold("rolo-torax", "Acima da última costela. Mãos na cabeça."),
      hold("peito-rolo", "T e depois W. Queixo recuado."),
      ...pair("agulha", "Braço direito por baixo.", "Braço esquerdo por baixo."),
      hold("retracao", "Deitado. Movimento pequeno."),
      reps("hundred", "Cabeça pode descer. Lombar estável."),
      ...pair("single-leg-stretch", "Perna direita estende.", "Perna esquerda estende."),
      ...pair("criss-cross", "Gire para a direita.", "Gire para a esquerda."),
      ...pair("pallof", "Lado direito: pé direito na banda.", "Lado esquerdo: pé esquerdo na banda."),
      ...pair("remada", "Braço direito. Pise na banda, sem poste.", "Braço esquerdo. Pise na banda, sem poste."),
      ...pair("sereia", "Sentado. Incline para a direita.", "Sentado. Incline para a esquerda."),
      ...pair("spine-twist", "Giro para a direita, sentado na almofada.", "Giro para a esquerda, sentado na almofada."),
      ...pair("prancha-lado", "Antebraço direito.", "Antebraço esquerdo.", "hold"),
      ...pair("dead-bug", "Braço direito e perna esquerda.", "Braço esquerdo e perna direita."),
      reps("swimming", "Lombar quieta."),
      reps("anjo-neve", "Costelas baixas, no rolo."),
      reps("pull-apart", "Pausa curta com a banda no peito."),
      reps("face-pull", "Sem porta. Polegares para trás."),
      reps("double-leg-stretch", "Recolhe sem o lombar sair do chão."),
      reps("hundred", "Bloco extra. Passagem curta.", true),
      ...pair("dead-bug", "Outra série. Braço direito e perna esquerda.", "Outra série. Braço esquerdo e perna direita.", "reps", true),
      teaserChoice(true),
      hold("prancha-rolo", "Segunda sustentação, mais curta.", true),
    ],
  },
  {
    id: "quinta",
    weekday: 4,
    title: "Treino misto",
    shortTitle: "Misto",
    focus: "Anti-rotação, prancha lateral, balanço de perna e abdômen. Segunda sessão do tendão, não um dia só de tênis.",
    why: `${mixWhy} Quinta repete uma dose moderada do posterior, com pelo menos dois dias desde a força de segunda. O tênis aparece no meio, não no lugar do resto.`,
    equipment: ["nada", "banda", "parede"],
    tendon: "second",
    tendonAt: 7,
    steps: [
      hold("gato-vaca", "Mobilidade torácica, devagar."),
      ...pair("livro-aberto", "Deitado sobre o lado esquerdo.", "Deitado sobre o lado direito."),
      reps("hundred", "Entrada de abdômen antes do tendão."),
      ...pair("pallof", "Lado direito: pé direito na banda.", "Lado esquerdo: pé esquerdo na banda."),
      hold("retracao", "Pescoço longo, movimento pequeno."),
      ...pair("criss-cross", "Gire para a direita.", "Gire para a esquerda."),
      ...pair("prancha-lado", "Antebraço direito, linha inteira.", "Antebraço esquerdo, linha inteira.", "hold"),
      ...pair("balanco-lateral", "Perna direita, plano lateral.", "Perna esquerda, plano lateral."),
      ...pair("sereia", "Sentado. Incline para a direita.", "Sentado. Incline para a esquerda."),
      ...pair("side-kick", "Perna direita por cima.", "Perna esquerda por cima."),
      ...pair("dead-bug", "Braço direito e perna esquerda.", "Braço esquerdo e perna direita."),
      reps("swimming", "Olhar no tapete."),
      ...pair("bird-dog", "Braço direito e perna esquerda.", "Braço esquerdo e perna direita."),
      ...pair("remada", "Braço direito, pisando na banda.", "Braço esquerdo, pisando na banda."),
      reps("face-pull", "Banda nas mãos."),
      reps("double-leg-stretch", "Lombar quieta."),
      ...pair("concha", "Deitado sobre o lado esquerdo.", "Deitado sobre o lado direito."),
      reps("pull-apart", "Feche o peito sem arquear."),
      ...pair("caminhada-lateral", "Passos curtos para a direita.", "Passos curtos para a esquerda."),
      ...pair("criss-cross", "Bloco extra. Direita.", "Bloco extra. Esquerda.", "reps", true),
      reps("hundred", "Cabeça apoiada se o pescoço cansar.", true),
      ...pair("side-kick", "Perna direita. Amplitude da sua fase.", "Perna esquerda. Amplitude da sua fase.", "reps", true),
      reps("swimming", "Mais uma passagem curta.", true),
    ],
  },
  {
    id: "sexta",
    weekday: 5,
    title: "Treino misto",
    shortTitle: "Misto",
    focus: "Retração e escápula no começo, depois abdômen, Pallof e tórax no rolo. Tendão leve.",
    why: `${mixWhy} Sexta cuida da giba sem deixar o dia só no pescoço: o centro e o quadril entram na mesma sessão.`,
    equipment: ["nada", "banda", "rolo"],
    tendon: "analgesic",
    tendonAt: 7,
    steps: [
      hold("respiracao", "Deitado, joelhos dobrados."),
      hold("retracao", "Deitado. Queixo recua, olhar na frente."),
      reps("face-pull", "Banda nas mãos, pescoço longo."),
      reps("pull-apart", "Omoplatas para o bolso de trás."),
      reps("hundred", "Versão confortável. Cabeça pode apoiar."),
      ...pair("criss-cross", "Gire para a direita, sem puxar o pescoço.", "Gire para a esquerda, sem puxar o pescoço."),
      hold("rolo-torax", "Cabeça nas mãos. Não desça à lombar."),
      ...pair("livro-aberto", "Lado esquerdo no chão.", "Lado direito no chão."),
      ...pair("agulha", "Braço direito por baixo.", "Braço esquerdo por baixo."),
      ...pair("dead-bug", "Braço direito e perna esquerda.", "Braço esquerdo e perna direita."),
      ...pair("prancha-lado", "Antebraço direito.", "Antebraço esquerdo.", "hold"),
      ...pair("pallof", "Lado direito: pé direito na banda.", "Lado esquerdo: pé esquerdo na banda."),
      reps("swimming", "Extensão baixa."),
      ...pair("single-leg-stretch", "Perna direita estende.", "Perna esquerda estende."),
      ...pair("bird-dog", "Braço direito e perna esquerda.", "Braço esquerdo e perna direita."),
      reps("double-leg-stretch", "Sem impulso."),
      ...pair("sereia", "Sentado, incline para a direita.", "Sentado, incline para a esquerda."),
      hold("peito-rolo", "Fique. Queixo recuado."),
      ...pair("dead-bug", "Bloco extra. Braço direito e perna esquerda.", "Bloco extra. Braço esquerdo e perna direita.", "reps", true),
      ...pair("bird-dog", "Direita à frente.", "Esquerda à frente.", "reps", true),
      hold("respiracao-9090", "Pés na parede, joelhos dobrados. Só o ar.", true),
    ],
  },
  {
    id: "sabado",
    weekday: 6,
    title: "Treino misto",
    shortTitle: "Misto",
    focus: "Prancha, Pallof, teaser na fase certa e quadril. Energia do tendão só se a fase for 4; senão, isometria leve.",
    why: `${mixWhy} Sábado é o dia em que a fase 4 pode colocar swing e educativo. Nas fases 1 a 3 o tendão continua leve, e o abdômen não sai da sessão.`,
    equipment: ["nada", "banda", "rolo", "parede"],
    tendon: "sport",
    tendonAt: 8,
    steps: [
      hold("gato-vaca", "Aquecimento curto do tórax."),
      reps("hundred", "Começa pelo centro."),
      ...pair("prancha-lado", "Antebraço direito.", "Antebraço esquerdo.", "hold"),
      ...pair("pallof", "Lado direito: pé direito na banda.", "Lado esquerdo: pé esquerdo na banda."),
      ...pair("dead-bug", "Braço direito e perna esquerda.", "Braço esquerdo e perna direita."),
      rollChoice(),
      ...pair("criss-cross", "Gire para a direita.", "Gire para a esquerda."),
      teaserChoice(),
      ...pair("side-kick", "Perna direita por cima.", "Perna esquerda por cima."),
      reps("swimming", "Lombar quieta, olhar no tapete."),
      ...pair("bird-dog", "Braço direito e perna esquerda. Pausa curta.", "Braço esquerdo e perna direita. Pausa curta."),
      ...pair("leg-pull-front", "Perna direita sobe pouco.", "Perna esquerda sobe pouco."),
      ...pair("balanco-lateral", "Perna direita.", "Perna esquerda."),
      reps("double-leg-stretch", "Controle na volta."),
      ...pair("concha", "Lado esquerdo no chão.", "Lado direito no chão."),
      reps("face-pull", "Rotação externa, banda nas mãos."),
      ...pair("single-leg-stretch", "Perna direita.", "Perna esquerda."),
      reps("pull-apart", "Segunda série, pausa de 2 segundos."),
      ...pair("criss-cross", "Bloco extra. Direita.", "Bloco extra. Esquerda.", "reps", true),
      reps("hundred", "Uma passagem mais curta.", true),
      ...pair("pallof", "Direita de novo, tronco quieto.", "Esquerda de novo, tronco quieto.", "reps", true),
      reps("swimming", "Feche com extensão baixa.", true),
    ],
  },
  {
    id: "domingo",
    weekday: 0,
    title: "Treino misto",
    shortTitle: "Misto",
    focus: "Rolo sem ísquio, respiração e uma dose menor de abdômen, sereia e Pallof. O tendão fica em recuperação.",
    why: `${mixWhy} Domingo é o misto mais calmo: ainda tem centro e flanco, sem a carga pesada do posterior e sem rolar o osso em que você senta.`,
    equipment: ["nada", "banda", "rolo", "parede"],
    tendon: "recovery",
    tendonAt: 10,
    steps: [
      hold("respiracao", "Comece deitado, joelhos dobrados."),
      hold("gato-vaca", "Devagar, só o tórax."),
      hold("rolo-massagem", "Meio das costas. Não desça à lombar."),
      ...pair("rolo-gluteo", "Glúteo direito, longe do ísquio.", "Glúteo esquerdo, longe do ísquio.", "hold"),
      reps("hundred", "Pés no chão se a lombar pedir."),
      ...pair("dead-bug", "Braço direito e perna esquerda.", "Braço esquerdo e perna direita."),
      ...pair("sereia", "Sentado na almofada. Incline para a direita.", "Sentado na almofada. Incline para a esquerda."),
      ...pair("livro-aberto", "Lado esquerdo no chão.", "Lado direito no chão."),
      ...pair("prancha-lado", "Antebraço direito. Joelho de baixo pode ficar no chão.", "Antebraço esquerdo. Joelho de baixo pode ficar no chão.", "hold"),
      ...pair("figura4", "Tornozelo direito por cima.", "Tornozelo esquerdo por cima.", "hold"),
      reps("pull-apart", "Leve. Não é dia de esforço alto."),
      ...pair("criss-cross", "Gire para a direita, bem devagar.", "Gire para a esquerda, bem devagar."),
      reps("swimming", "Amplitude pequena."),
      ...pair("agulha", "Braço direito, almofada na cabeça.", "Braço esquerdo, almofada na cabeça."),
      reps("face-pull", "Leve, banda nas mãos."),
      hold("respiracao-9090", "Pés na parede. Joelhos dobrados. Não estique a perna."),
      hold("retracao", "Feche o pescoço no eixo."),
      reps("double-leg-stretch", "Pés mais altos se a lombar cansar."),
      ...pair("criss-cross", "Extra, bem lento. Direita.", "Extra, bem lento. Esquerda.", "reps", true),
      reps("hundred", "Pés no chão. Cabeça apoiada se precisar.", true),
      hold("respiracao", "Feche no tapete, se quiser sair da parede.", true),
    ],
  },
];

export function getWorkoutById(id: string): WorkoutTemplate | undefined {
  return workouts.find((workout) => workout.id === id);
}

export function getWorkoutByWeekday(weekday: number): WorkoutTemplate {
  return workouts.find((workout) => workout.weekday === weekday) ?? workouts[0];
}

export function workoutHasPlus(template: WorkoutTemplate): boolean {
  return template.steps.some((item) => item.plus);
}

export function workoutWorkSeconds(workout: { steps: { seconds: number }[] }): number {
  return workout.steps.reduce((sum, item) => sum + item.seconds, 0);
}

export function workoutTotalSeconds(workout: { steps: { seconds: number }[] }): number {
  const transitions = Math.max(0, workout.steps.length - 1) * TRANSITION_SECONDS;
  return workoutWorkSeconds(workout) + transitions;
}

function materialize(stepTemplate: StepTemplate, phase: TendonPhase) {
  const reps = stepTemplate.reps;
  if (stepTemplate.options?.length) {
    const chosen =
      [...stepTemplate.options]
        .filter((option) => option.minPhase <= phase)
        .sort((a, b) => b.minPhase - a.minPhase)[0] ?? stepTemplate.options[0];
    return {
      exerciseId: chosen.exerciseId,
      seconds: stepTemplate.seconds,
      note: chosen.note ?? stepTemplate.note,
      ...(reps ? { reps } : {}),
    };
  }
  return {
    exerciseId: stepTemplate.exerciseId,
    seconds: stepTemplate.seconds,
    note: stepTemplate.note,
    ...(reps ? { reps } : {}),
  };
}

export function resolveWorkout(
  template: WorkoutTemplate,
  phase: TendonPhase,
  includePlus: boolean,
): Workout {
  const main = template.steps.filter((item) => !item.plus);
  const plus = includePlus ? template.steps.filter((item) => item.plus) : [];
  const at = Math.min(Math.max(template.tendonAt ?? 0, 0), main.length);
  const tendon = tendonSteps(phase, template.tendon);
  const steps = [
    ...main.slice(0, at).map((item) => materialize(item, phase)),
    ...tendon,
    ...main.slice(at).map((item) => materialize(item, phase)),
    ...plus.map((item) => materialize(item, phase)),
  ];
  return {
    id: template.id,
    weekday: template.weekday,
    title: template.title,
    shortTitle: template.shortTitle,
    focus: template.focus,
    why: template.why,
    equipment: template.equipment,
    tendon: template.tendon,
    steps,
  };
}

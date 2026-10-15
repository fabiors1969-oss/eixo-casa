import type { MiniBand, StepTemplate, TendonPhase, Workout, WorkoutTemplate } from "./types";
import { tendonSteps } from "./tendon";

export const TRANSITION_SECONDS = 10;
export const BLOCK_SECONDS = 30;

function hold(exerciseId: string, note?: string, plus = false): StepTemplate {
  return { exerciseId, seconds: BLOCK_SECONDS, note, plus };
}

function reps(exerciseId: string, note?: string, plus = false, count = 10): StepTemplate {
  return { exerciseId, seconds: 40, note, plus, reps: count };
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

function withMini(steps: StepTemplate[], level: MiniBand): StepTemplate[] {
  return steps.map((step) => ({ ...step, mini: level }));
}

function skipGym(steps: StepTemplate[]): StepTemplate[] {
  return steps.map((step) => ({ ...step, gymSkip: true }));
}

const mixWhy =
  "O dia mistura mobilidade, alongamento — o posterior entra em intensidade moderada —, core para o tênis e a dose terapêutica do tendão. A força de membros fica na academia. Alongar sem dor; se o ísquio piorar no dia seguinte, reduzir a amplitude.";

export const workouts: WorkoutTemplate[] = [
  {
    id: "segunda",
    weekday: 1,
    title: "Treino misto",
    shortTitle: "Misto",
    focus: "Tórax, peitoral, flexor e quadríceps, Pallof e mini-banda no glúteo. O tendão entra na dose terapêutica da semana — leve se este dia estiver marcado como musculação.",
    why: `${mixWhy} Segunda concentra a dose terapêutica do tendão. Se a perna foi para a academia, marque o dia e esta parte fica só na isometria leve.`,
    equipment: ["nada", "banda", "mini", "rolo", "parede"],
    tendon: "strength",
    tendonAt: 5,
    steps: [
      hold("respiracao", "Costelas abrem para os lados."),
      reps("gato-vaca", "Dez ondas no meio das costas. Lombar quase quieta."),
      hold("rolo-torax", "Extensão torácica, acima da última costela. Mãos na cabeça."),
      reps("retracao", "Dez recuos do queixo. Olhar na frente."),
      hold("peito-rolo", "Abre o peitoral no rolo. Queixo recuado."),
      ...pair("livro-aberto", "Deitado sobre o lado esquerdo.", "Deitado sobre o lado direito."),
      ...pair("flexor", "Joelho direito no chão. Bacia encaixada.", "Joelho esquerdo no chão. Bacia encaixada.", "hold"),
      ...pair("quadriceps-along", "Perna direita. Joelho para baixo.", "Perna esquerda. Joelho para baixo.", "hold"),
      ...pair("pallof", "Lado direito: o pé direito pisa na banda.", "Lado esquerdo: o pé esquerdo pisa na banda."),
      ...pair("dead-bug", "Braço direito e perna esquerda. Lombar estável.", "Braço esquerdo e perna direita. Lombar estável."),
      ...withMini(pair("concha", "Deitado sobre o lado esquerdo.", "Deitado sobre o lado direito."), "media"),
      ...pair("peitoral-along", "Antebraço direito na parede.", "Antebraço esquerdo na parede.", "hold"),
      ...pair("panturrilha-along", "Perna direita atrás. Calcanhar no chão.", "Perna esquerda atrás. Calcanhar no chão.", "hold"),
      ...withMini([reps("escapula-mini", "Mini-banda leve nos punhos. Queixo recuado.")], "leve"),
      ...pair("sereia", "Sentado. Incline para a direita.", "Sentado. Incline para a esquerda.", "hold"),
      ...pair("posterior-deitado", "Perna direita. Alongue sem dor.", "Perna esquerda. Alongue sem dor.", "hold"),
      ...pair("criss-cross", "Gire para a direita, devagar.", "Gire para a esquerda, devagar.", "reps", true),
      ...pair("figura4", "Tornozelo direito por cima. Pé de baixo no chão.", "Tornozelo esquerdo por cima. Pé de baixo no chão.", "hold", true),
      ...pair("adutor-along", "Quadril para a direita, tronco alto.", "Quadril para a esquerda, tronco alto.", "hold", true),
    ],
  },
  {
    id: "terca",
    weekday: 2,
    title: "Treino misto",
    shortTitle: "Misto",
    focus: "Alongamento de flanco, adutor e glúteo, rotação controlada e monster walk. Tendão em dose leve.",
    why: `${mixWhy} Terça deixa a carga do tendão leve e alonga o posterior em pé, só até o confortável.`,
    equipment: ["nada", "banda", "mini", "parede"],
    tendon: "analgesic",
    tendonAt: 5,
    steps: [
      hold("respiracao", "Deitado, joelhos dobrados."),
      reps("gato-vaca", "Dez ciclos, só o tórax."),
      ...pair("agulha", "Braço direito por baixo. Cabeça na almofada.", "Braço esquerdo por baixo. Cabeça na almofada."),
      hold("retracao", "Sustente o queixo recuado. Flexores profundos do pescoço."),
      ...pair("sereia", "Sentado. Incline para a direita.", "Sentado. Incline para a esquerda.", "hold"),
      ...pair("figura4", "Tornozelo direito por cima.", "Tornozelo esquerdo por cima.", "hold"),
      ...pair("adutor-along", "Lado direito, tronco alto.", "Lado esquerdo, tronco alto.", "hold"),
      ...pair("criss-cross", "Gire para a direita.", "Gire para a esquerda."),
      ...withMini(pair("caminhada-lateral", "Dez passos para a direita.", "Dez passos para a esquerda."), "media"),
      ...pair("flexor", "Joelho direito no chão.", "Joelho esquerdo no chão.", "hold"),
      ...pair("quadriceps-along", "Perna direita.", "Perna esquerda.", "hold"),
      reps("face-pull", "Banda longa nas mãos. Sem porta."),
      ...pair("deslize-neural", "Perna direita. Joelho dobrado, só o tornozelo.", "Perna esquerda. Joelho dobrado, só o tornozelo."),
      ...pair("peitoral-along", "Lado direito.", "Lado esquerdo.", "hold"),
      ...pair("posterior-pe", "Perna direita. Mãos na coxa.", "Perna esquerda. Mãos na coxa.", "hold"),
      reps("pull-apart", "Banda longa. Escápulas descem."),
      ...pair("panturrilha-along", "Perna direita atrás.", "Perna esquerda atrás.", "hold", true),
      ...withMini([reps("escapula-mini", "Mais dez, mini-banda leve.", true)], "leve"),
    ],
  },
  {
    id: "quarta",
    weekday: 3,
    title: "Treino misto",
    shortTitle: "Misto",
    focus: "Rolo na giba, rotação torácica, Pallof e abdução com mini-banda média. Tendão leve.",
    why: `${mixWhy} Quarta abre o meio das costas e o peito, e o quadril só ativa — não faz força de academia.`,
    equipment: ["nada", "banda", "mini", "rolo", "parede"],
    tendon: "analgesic",
    tendonAt: 6,
    steps: [
      hold("respiracao", "Costelas para os lados."),
      hold("rolo-torax", "Três respirações em cada altura, sempre acima da última costela."),
      reps("retracao", "Dez recuos pequenos."),
      ...pair("livro-aberto", "Lado esquerdo no chão.", "Lado direito no chão."),
      hold("peito-rolo", "T e W, queixo recuado."),
      ...pair("spine-twist", "Giro para a direita, sentado na almofada.", "Giro para a esquerda, sentado na almofada."),
      ...pair("pallof", "Lado direito: pé direito na banda.", "Lado esquerdo: pé esquerdo na banda."),
      ...pair("dead-bug", "Braço direito e perna esquerda.", "Braço esquerdo e perna direita."),
      ...withMini(pair("abducao-mini", "Perna direita abre.", "Perna esquerda abre."), "media"),
      ...pair("panturrilha-along", "Direita atrás.", "Esquerda atrás.", "hold"),
      ...pair("quadriceps-along", "Direita.", "Esquerda.", "hold"),
      ...withMini([reps("escapula-mini", "Punhos afastam, escápulas descem.")], "leve"),
      ...pair("adutor-along", "Quadril à direita.", "Quadril à esquerda.", "hold"),
      ...withMini(pair("concha", "Lado esquerdo no chão.", "Lado direito no chão."), "media"),
      reps("face-pull", "Cotovelos altos, pescoço longo."),
      ...pair("posterior-deitado", "Perna direita. Pare no confortável.", "Perna esquerda. Pare no confortável.", "hold"),
      ...pair("peitoral-along", "Direita.", "Esquerda.", "hold", true),
      ...pair("sereia", "Incline à direita.", "Incline à esquerda.", "hold", true),
    ],
  },
  {
    id: "quinta",
    weekday: 4,
    title: "Treino misto",
    shortTitle: "Misto",
    focus: "Anti-rotação, flanco e monster walk. A prancha de 30 s sai se o dia for de musculação. Tendão na segunda sessão, mais curta.",
    why: `${mixWhy} Quinta repete uma dose terapêutica menor do posterior, com folga desde a segunda. O core do tênis fica; a força de perna, não.`,
    equipment: ["nada", "banda", "mini", "parede"],
    tendon: "second",
    tendonAt: 6,
    steps: [
      reps("gato-vaca", "Aquecimento curto do tórax."),
      reps("retracao", "Dez recuos."),
      ...pair("livro-aberto", "Lado esquerdo.", "Lado direito."),
      ...pair("pallof", "Lado direito: pé na banda.", "Lado esquerdo: pé na banda."),
      ...pair("criss-cross", "Gire para a direita.", "Gire para a esquerda."),
      ...skipGym(pair("prancha-lado", "Antebraço direito. 30 segundos.", "Antebraço esquerdo. 30 segundos.", "hold")),
      ...withMini(pair("caminhada-lateral", "Passos para a direita.", "Passos para a esquerda."), "media"),
      ...pair("flexor", "Joelho direito no chão.", "Joelho esquerdo no chão.", "hold"),
      ...pair("figura4", "Tornozelo direito por cima.", "Tornozelo esquerdo por cima.", "hold"),
      ...pair("sereia", "Incline à direita.", "Incline à esquerda.", "hold"),
      ...pair("dead-bug", "Braço direito e perna esquerda.", "Braço esquerdo e perna direita."),
      ...withMini([reps("escapula-mini", "Mini-banda leve.")], "leve"),
      ...pair("peitoral-along", "Direita.", "Esquerda.", "hold"),
      ...pair("panturrilha-along", "Direita atrás.", "Esquerda atrás.", "hold"),
      ...pair("balanco-lateral", "Perna direita, tronco quieto.", "Perna esquerda, tronco quieto."),
      ...pair("posterior-pe", "Perna direita. Mãos na coxa.", "Perna esquerda. Mãos na coxa.", "hold"),
      ...pair("adutor-along", "Direita.", "Esquerda.", "hold", true),
      ...pair("quadriceps-along", "Direita.", "Esquerda.", "hold", true),
    ],
  },
  {
    id: "sexta",
    weekday: 5,
    title: "Treino misto",
    shortTitle: "Misto",
    focus: "Giba: recuo do queixo, rolo, peitoral e escápula, mais alongamentos de quadril. Tendão leve.",
    why: `${mixWhy} Sexta é o dia da postura. O pescoço recua, o tórax estende, e o posterior alonga deitado, sem dor.`,
    equipment: ["nada", "banda", "mini", "rolo", "parede"],
    tendon: "analgesic",
    tendonAt: 5,
    steps: [
      hold("respiracao", "Deitado, joelhos dobrados."),
      reps("retracao", "Dez recuos, movimento pequeno."),
      hold("retracao", "Agora sustente o recuo por 30 segundos."),
      hold("peito-rolo", "Peitoral abre, queixo recuado."),
      hold("rolo-torax", "Extensão torácica. Não desça à lombar."),
      ...pair("agulha", "Braço direito por baixo.", "Braço esquerdo por baixo."),
      ...pair("peitoral-along", "Lado direito.", "Lado esquerdo.", "hold"),
      ...pair("criss-cross", "Gire à direita, sem puxar o pescoço.", "Gire à esquerda, sem puxar o pescoço."),
      ...withMini(pair("concha", "Lado esquerdo no chão.", "Lado direito no chão."), "media"),
      ...pair("quadriceps-along", "Direita.", "Esquerda.", "hold"),
      ...pair("adutor-along", "Direita.", "Esquerda.", "hold"),
      reps("face-pull", "Banda longa, pescoço longo."),
      reps("pull-apart", "Omoplatas para baixo."),
      ...pair("deslize-neural", "Perna direita. Sem esticar o joelho.", "Perna esquerda. Sem esticar o joelho."),
      ...pair("figura4", "Direita por cima.", "Esquerda por cima.", "hold"),
      ...pair("posterior-deitado", "Perna direita. Alongue sem dor.", "Perna esquerda. Alongue sem dor.", "hold"),
      ...withMini([reps("escapula-mini", "Feche as escápulas com a mini-banda leve.")], "leve"),
      ...pair("panturrilha-along", "Direita.", "Esquerda.", "hold", true),
      ...pair("sereia", "Direita.", "Esquerda.", "hold", true),
    ],
  },
  {
    id: "sabado",
    weekday: 6,
    title: "Treino misto",
    shortTitle: "Misto",
    focus: "Mobilidade de quadril, Pallof e mini-banda. Energia do tendão só na fase 4 e só se o dia não for de musculação.",
    why: `${mixWhy} Sábado pode ter um pouco de energia do tendão na fase 4. Nas outras fases, e em dia de academia, fica na dose leve.`,
    equipment: ["nada", "banda", "mini", "parede"],
    tendon: "sport",
    tendonAt: 6,
    steps: [
      reps("gato-vaca", "Dez ciclos."),
      reps("retracao", "Dez recuos."),
      ...pair("balanco-lateral", "Perna direita.", "Perna esquerda."),
      ...pair("pallof", "Lado direito.", "Lado esquerdo."),
      ...pair("dead-bug", "Braço direito e perna esquerda.", "Braço esquerdo e perna direita."),
      ...withMini(pair("caminhada-lateral", "Direita.", "Esquerda."), "media"),
      ...pair("sereia", "Direita.", "Esquerda.", "hold"),
      ...pair("flexor", "Joelho direito no chão.", "Joelho esquerdo no chão.", "hold"),
      ...pair("quadriceps-along", "Direita.", "Esquerda.", "hold"),
      ...withMini(pair("abducao-mini", "Perna direita.", "Perna esquerda."), "media"),
      ...pair("criss-cross", "Direita.", "Esquerda."),
      ...pair("peitoral-along", "Direita.", "Esquerda.", "hold"),
      ...pair("panturrilha-along", "Direita.", "Esquerda.", "hold"),
      ...withMini([reps("escapula-mini", "Mini-banda leve nos punhos.")], "leve"),
      ...pair("posterior-pe", "Perna direita. Mãos na coxa.", "Perna esquerda. Mãos na coxa.", "hold"),
      ...pair("adutor-along", "Direita.", "Esquerda.", "hold", true),
      ...pair("figura4", "Direita.", "Esquerda.", "hold", true),
    ],
  },
  {
    id: "domingo",
    weekday: 0,
    title: "Treino misto",
    shortTitle: "Misto",
    focus: "Alongamentos calmos, rolo longe do ísquio, pescoço e um dead bug leve. Tendão em recuperação.",
    why: `${mixWhy} Domingo é o misto mais calmo. Continua tendo flanco, peitoral e quadril, sem carga de força e sem rolar o osso em que você senta.`,
    equipment: ["nada", "banda", "mini", "rolo", "parede"],
    tendon: "recovery",
    tendonAt: 6,
    steps: [
      hold("respiracao", "Comece deitado, joelhos dobrados."),
      reps("gato-vaca", "Devagar."),
      hold("rolo-massagem", "Meio das costas. Não desça à lombar."),
      ...pair("rolo-gluteo", "Glúteo direito, longe do ísquio.", "Glúteo esquerdo, longe do ísquio.", "hold"),
      reps("retracao", "Dez recuos, bem pequenos."),
      ...pair("livro-aberto", "Esquerda.", "Direita."),
      ...pair("figura4", "Direita por cima.", "Esquerda por cima.", "hold"),
      ...pair("quadriceps-along", "Direita.", "Esquerda.", "hold"),
      ...pair("adutor-along", "Direita.", "Esquerda.", "hold"),
      ...pair("sereia", "Direita.", "Esquerda.", "hold"),
      ...pair("peitoral-along", "Direita.", "Esquerda.", "hold"),
      ...pair("panturrilha-along", "Direita.", "Esquerda.", "hold"),
      ...pair("dead-bug", "Braço direito e perna esquerda, amplitude curta.", "Braço esquerdo e perna direita, amplitude curta."),
      ...withMini([reps("escapula-mini", "Leve, sem pressa.")], "leve"),
      hold("respiracao-9090", "Pés na parede, joelhos dobrados. Não estique a perna."),
      ...pair("deslize-neural", "Direita. Joelho dobrado.", "Esquerda. Joelho dobrado."),
      ...pair("posterior-deitado", "Perna direita. Bem confortável.", "Perna esquerda. Bem confortável.", "hold"),
      hold("retracao", "Feche sustentando o queixo recuado.", true),
      ...pair("flexor", "Direita.", "Esquerda.", "hold", true),
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
  const extra = {
    ...(stepTemplate.reps ? { reps: stepTemplate.reps } : {}),
    ...(stepTemplate.mini ? { mini: stepTemplate.mini } : {}),
  };
  if (stepTemplate.options?.length) {
    const chosen =
      [...stepTemplate.options]
        .filter((option) => option.minPhase <= phase)
        .sort((a, b) => b.minPhase - a.minPhase)[0] ?? stepTemplate.options[0];
    return {
      exerciseId: chosen.exerciseId,
      seconds: stepTemplate.seconds,
      note: chosen.note ?? stepTemplate.note,
      ...extra,
    };
  }
  return {
    exerciseId: stepTemplate.exerciseId,
    seconds: stepTemplate.seconds,
    note: stepTemplate.note,
    ...extra,
  };
}

export function resolveWorkout(
  template: WorkoutTemplate,
  phase: TendonPhase,
  includePlus: boolean,
  gymDay = false,
): Workout {
  const heavy = template.tendon === "strength" || template.tendon === "second" || template.tendon === "sport";
  const tendonLoad = gymDay && heavy ? "analgesic" : template.tendon;
  const main = template.steps.filter((item) => !item.plus && !(gymDay && item.gymSkip));
  const plus = includePlus && !gymDay ? template.steps.filter((item) => item.plus) : [];
  const at = Math.min(Math.max(template.tendonAt ?? 0, 0), main.length);
  const tendon = tendonSteps(phase, tendonLoad);
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
    tendon: tendonLoad,
    steps,
  };
}

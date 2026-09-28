import type { StepOption, StepTemplate, TendonPhase, Workout, WorkoutTemplate } from "./types";
import { tendonSteps } from "./tendon";

export const TRANSITION_SECONDS = 10;

function step(exerciseId: string, seconds: number, note?: string, plus = false): StepTemplate {
  return { exerciseId, seconds, note, plus };
}

function choose(seconds: number, options: StepOption[], plus = false): StepTemplate {
  return {
    exerciseId: options[0].exerciseId,
    seconds,
    plus,
    options,
  };
}

const rollChoice = (seconds: number, plus = false): StepTemplate =>
  choose(
    seconds,
    [
      { minPhase: 3, exerciseId: "roll-up", note: "Fase ≥ 3. Joelhos macios, sem impulso." },
      { minPhase: 1, exerciseId: "half-roll-back", note: "Fases 1–2: role só até a metade." },
    ],
    plus,
  );

const teaserChoice = (seconds: number, plus = false): StepTemplate =>
  choose(
    seconds,
    [
      { minPhase: 4, exerciseId: "teaser", note: "Fase 4. Sobe sem impulso. Joelhos macios se o ísquio avisar." },
      { minPhase: 3, exerciseId: "teaser-uma-perna", note: "Fase 3. Uma perna estendida, a outra dobrada." },
      { minPhase: 1, exerciseId: "teaser-prep", note: "Joelhos dobrados. A perna longa espera a fase 3." },
    ],
    plus,
  );

const bridgeChoice = (seconds: number): StepTemplate =>
  choose(seconds, [
    { minPhase: 3, exerciseId: "shoulder-bridge", note: "Chute curto, só até 3/10 no ísquio." },
    { minPhase: 1, exerciseId: "ponte", note: "Sem chute longo. Articule a ponte, osso por osso." },
  ]);

export const workouts: WorkoutTemplate[] = [
  {
    id: "segunda",
    weekday: 1,
    title: "Série clássica",
    shortTitle: "Clássico",
    focus: "Hundred, série abdominal e extensão torácica — nível de quem já tem anos de tapete.",
    why: "A lombar fica estável em neutro e a cabeça pode apoiar. O roll up e o teaser só crescem quando a fase do tendão deixa.",
    equipment: ["nada", "rolo", "banda"],
    tendon: "analgesic",
    tendonAt: 3,
    steps: [
      step("respiracao", 70, "Costelas para os lados. Abdômen leve."),
      step("gato-vaca", 60, "Onda no meio das costas, lombar quase quieta."),
      step("rolo-torax", 80, "Mãos sustentam a cabeça. Expire ao estender."),
      rollChoice(75),
      step("hundred", 100, "100 batidas. Pernas a 45–60°. Cabeça desce se o pescoço cansar."),
      step("single-leg-stretch", 80, "Primeira série, lenta. Apoie a cabeça se precisar."),
      step("single-leg-stretch", 75, "Segunda série. A perna que estende não precisa ir ao chão."),
      step("double-leg-stretch", 80, "Abre e recolhe sem a lombar arquear."),
      step("criss-cross", 85, "Rotação lenta. Cotovelo não precisa encostar no joelho."),
      step("criss-cross", 70, "Segunda série, ainda mais lenta."),
      step("swan", 70, "Extensão curta. Quadril no chão."),
      step("swan", 55, "Segunda passagem, amplitude menor."),
      step("swimming", 80, "Primeira passagem. Olhar no tapete."),
      step("swimming", 75, "Segunda passagem, mesmo controle."),
      step("leg-pull-front", 70, "Perna sobe pouco. Quadril em linha."),
      step("leg-pull-front", 65, "O outro lado, e uma pausa se o ombro pedir."),
      step("pull-apart", 60, "Omoplatas descem. Costelas quietas."),
      step("face-pull", 65, "Puxe em direção ao rosto, pescoço longo."),
      step("dead-bug", 75, "Lombar estável em neutro — nem esmagada, nem em arco."),
      step("retracao", 60, "Queixo recua um centímetro. Olhar na frente."),
      step("anjo-neve", 70, "Bloco extra. Costelas baixas.", true),
      step("peito-rolo", 80, "T e W. Cabeça apoiada.", true),
      teaserChoice(90, true),
      step("prancha-rolo", 75, "Quadril em linha. Desça se o ombro doer.", true),
      step("prancha-rolo", 70, "Segunda sustentação.", true),
      step("swimming", 70, "Terceira passagem, mais curta.", true),
      step("dead-bug", 70, "Alavanca um pouco mais longa, se o neutro segurar.", true),
    ],
  },
  {
    id: "terca",
    weekday: 2,
    title: "Tendão e quadril",
    shortTitle: "Tendão",
    focus: "Carga do posterior na fase atual, mais quadril para a corrida e o tênis.",
    why: "O bloco pesado do tendão mora aqui. Ponte, curl e RDL mudam sozinhos quando você troca a fase.",
    equipment: ["banda", "rolo", "nada"],
    tendon: "strength",
    tendonAt: 5,
    steps: [
      step("balanco-lateral", 50, "Só para o lado. O balanço à frente espera a fase 4."),
      step("tornozelo", 45, "Pé direito. Calcanhar colado."),
      step("tornozelo", 45, "Pé esquerdo."),
      step("concha", 55, "Lado esquerdo no chão. Bacia não rola."),
      step("concha", 55, "Lado direito no chão."),
      bridgeChoice(70),
      step("side-kick", 80, "Lado esquerdo. Chute à frente curto nas fases 1 e 2."),
      step("side-kick", 80, "Lado direito. Mesma regra de amplitude."),
      step("caminhada-lateral", 65, "Para a direita. Passo curto."),
      step("caminhada-lateral", 65, "Para a esquerda."),
      step("flexor", 50, "Joelho esquerdo atrás. Bacia encaixada."),
      step("flexor", 50, "Joelho direito atrás."),
      step("figura4", 45, "Pé direito por cima, pé de baixo no chão. Não puxe a coxa."),
      step("figura4", 45, "Troque as pernas. Cóccix pesado."),
      step("bird-dog", 60, "Braço direito, perna esquerda."),
      step("bird-dog", 60, "Troque o par."),
      step("prancha-lado", 50, "Esquerda, linha inteira."),
      step("prancha-lado", 50, "Direita."),
      step("pallof", 60, "Bloco extra. Âncora à esquerda.", true),
      step("pallof", 60, "Âncora à direita.", true),
      step("prancha-lado", 55, "Lado esquerdo, corpo inteiro se o ombro aguentar.", true),
      step("prancha-lado", 55, "Lado direito.", true),
      step("rolo-gluteo", 60, "Glúteo direito, longe do ísquio.", true),
      step("rolo-gluteo", 60, "Glúteo esquerdo, longe do ísquio.", true),
      step("rolo-panturrilha", 50, "Panturrilha direita.", true),
      step("rolo-panturrilha", 50, "Panturrilha esquerda.", true),
    ],
  },
  {
    id: "quarta",
    weekday: 3,
    title: "Tórax livre",
    shortTitle: "Tórax",
    focus: "Extensão, rotação e escápula — o antídoto da giba, em dose de aluno antigo.",
    why: "O meio das costas se mexe. O pescoço só acompanha, com a cabeça apoiada.",
    equipment: ["rolo", "banda"],
    tendon: "analgesic",
    tendonAt: 2,
    steps: [
      step("respiracao", 60),
      step("gato-vaca", 55),
      step("rolo-torax", 90, "Três alturas, sempre acima da última costela."),
      step("peito-rolo", 80, "T, depois W. Queixo recuado."),
      step("anjo-neve", 75),
      step("agulha", 70, "Braço direito por baixo. Cabeça numa almofada."),
      step("agulha", 70, "Braço esquerdo."),
      step("livro-aberto", 70, "Lado esquerdo no chão."),
      step("livro-aberto", 70, "Lado direito no chão."),
      step("pull-apart", 65),
      step("face-pull", 70),
      step("remada", 70, "Braço direito. Base de quem espera a bola."),
      step("remada", 70, "Braço esquerdo."),
      step("retracao", 75, "Deitado e, se quiser, sentado no fim."),
      step("sereia", 60, "Incline para a direita. Sentado, não deitado."),
      step("sereia", 60, "Incline para a esquerda."),
      step("spine-twist", 75, "Sentado numa almofada. Sem alcance ao pé."),
      step("rolo-torax", 70, "Segunda faixa do tórax."),
      step("anjo-neve", 60, "Outra série, costelas baixas."),
      step("pull-apart", 60, "Segunda série, pausa de 2 segundos."),
      step("dead-bug", 70, "Neutro estável. Cabeça no chão."),
      step("prancha-rolo", 70, "Bloco extra.", true),
      step("pallof", 60, "Esquerda.", true),
      step("pallof", 60, "Direita.", true),
      step("swimming", 70, "Extensão baixa, lombar quieta.", true),
    ],
  },
  {
    id: "quinta",
    weekday: 4,
    title: "Giro de tênis",
    shortTitle: "Tênis",
    focus: "Anti-rotação, prancha lateral e, na fase 4, o dia de energia do tendão.",
    why: "O swing sai do tórax. A lombar fica no meio. Explosão só quando a fase for 4 — e não no dia seguinte.",
    equipment: ["banda", "nada"],
    tendon: "sport",
    tendonAt: 3,
    steps: [
      step("gato-vaca", 50),
      step("livro-aberto", 60, "Lado esquerdo."),
      step("livro-aberto", 60, "Lado direito."),
      step("agulha", 60, "Braço direito. Almofada na cabeça."),
      step("agulha", 60, "Braço esquerdo."),
      step("spine-twist", 70, "Almofada sob o quadril."),
      step("prancha-lado", 65, "Lado esquerdo, linha inteira."),
      step("prancha-lado", 65, "Lado direito."),
      step("pallof", 70, "Resistir à esquerda."),
      step("pallof", 70, "Resistir à direita."),
      step("remada", 65, "Direita, unilateral."),
      step("remada", 65, "Esquerda."),
      step("leg-pull-back", 75, "Fases 1–2: mesa invertida. Fase ≥ 3: eleve a perna."),
      step("leg-pull-back", 60, "Segunda sustentação, mesmo critério."),
      step("face-pull", 60),
      step("balanco-lateral", 50, "Plano frontal."),
      step("sereia", 55, "Um lado e o outro, se couber nos dois flancos."),
      step("criss-cross", 70, "Oblíquo lento, cabeça apoiada se cansar."),
      step("swimming", 70, "Lombar quieta, olhar no tapete."),
      step("side-kick", 65, "Lado esquerdo."),
      step("side-kick", 65, "Lado direito."),
      step("hundred", 80, "Passagem curta. Pés no chão se a lombar pedir."),
      step("criss-cross", 70, "Bloco extra. Lento.", true),
      step("swimming", 70, "Mesmo critério da lombar.", true),
      step("side-kick", 60, "Lado esquerdo. Amplitude da sua fase.", true),
      step("side-kick", 60, "Lado direito.", true),
      step("pull-apart", 60, "Feche o peito.", true),
    ],
  },
  {
    id: "sexta",
    weekday: 5,
    title: "Posterior e pescoço",
    shortTitle: "Pescoço",
    focus: "Segunda sessão do tendão e o dia da giba: retração, escápula e tórax.",
    why: "O pescoço não se solta no giro forçado. A cabeça volta ao eixo, e o tendão recebe a dose da fase — mais curta que a de terça.",
    equipment: ["banda", "rolo", "cadeira"],
    tendon: "second",
    tendonAt: 1,
    steps: [
      step("respiracao", 50, "Deitado, joelhos dobrados."),
      step("retracao", 70, "Deitado. Movimento horizontal, pequeno."),
      step("retracao", 60, "Sentado ou na parede, se a primeira série foi fácil."),
      step("face-pull", 65),
      step("pull-apart", 60),
      step("remada", 60, "Direita."),
      step("remada", 60, "Esquerda."),
      step("rolo-torax", 80, "Cabeça nas mãos."),
      step("peito-rolo", 70),
      step("livro-aberto", 60, "Lado esquerdo."),
      step("livro-aberto", 60, "Lado direito."),
      step("agulha", 60, "Direita, cabeça na almofada."),
      step("agulha", 60, "Esquerda."),
      step("anjo-neve", 60),
      step("swan", 60, "Extensão mínima, se a lombar gostar. Senão, fique no rolo."),
      step("livro-aberto", 55, "Mais uma de cada lado, bem devagar."),
      step("peito-rolo", 70, "Fique. Queixo recuado."),
      step("face-pull", 60, "Segunda série, pausa curta."),
      step("dead-bug", 70, "Centro leve, lombar em neutro."),
      step("dead-bug", 65, "Bloco extra.", true),
      step("bird-dog", 60, "Direita à frente.", true),
      step("bird-dog", 60, "Esquerda à frente.", true),
      step("respiracao-9090", 120, "Pés na parede, joelhos dobrados.", true),
    ],
  },
  {
    id: "sabado",
    weekday: 6,
    title: "Força no tapete",
    shortTitle: "Força",
    focus: "Prancha lateral, Pallof, prancha no rolo e a progressão do teaser.",
    why: "O centro trabalha de lado e contra a rotação. O teaser aparece na versão que a fase do tendão autoriza.",
    equipment: ["banda", "rolo", "nada"],
    tendon: "analgesic",
    tendonAt: 1,
    steps: [
      step("gato-vaca", 50),
      step("prancha-lado", 70, "Esquerda. Joelho no chão só se o ombro pedir."),
      step("prancha-lado", 70, "Direita."),
      step("pallof", 70, "Esquerda. Tronco não gira."),
      step("pallof", 70, "Direita."),
      step("prancha-rolo", 70),
      step("prancha-rolo", 65, "Segunda série."),
      teaserChoice(80),
      step("bird-dog", 70, "Com pausa. Copo d'água nas costas."),
      step("bird-dog", 65, "O outro par. Hover só se a lombar estiver quieta."),
      step("leg-pull-front", 70),
      step("swimming", 75),
      rollChoice(70),
      step("dead-bug", 70),
      step("leg-pull-back", 65, "Mesa nas fases 1–2. Perna na fase ≥ 3."),
      step("prancha-lado", 60, "Esquerda, segunda rodada."),
      step("prancha-lado", 60, "Direita, segunda rodada."),
      step("swimming", 70, "Segunda passagem."),
      step("leg-pull-front", 60, "Segunda série, perna baixa."),
      step("hundred", 90, "100 batidas ou até a forma cair. Cabeça pode apoiar."),
      step("criss-cross", 70, "Bloco extra.", true),
      step("hundred", 80, "Uma passagem mais curta, cabeça apoiada se precisar.", true),
      step("face-pull", 60, "Rotação externa, pescoço longo.", true),
      step("remada", 60, "Os dois braços ou um de cada lado.", true),
      step("swimming", 70, "Mais uma passagem curta.", true),
      step("pallof", 60, "Esquerda, tronco quieto.", true),
      step("pallof", 60, "Direita.", true),
    ],
  },
  {
    id: "domingo",
    weekday: 0,
    title: "Restauração",
    shortTitle: "Folga",
    focus: "Rolo sem ísquio, mobilidade de tórax e uma isometria leve.",
    why: "O tecido recupera. Nada de alongar o posterior, nada de rolar o osso em que você senta.",
    equipment: ["rolo", "banda", "parede"],
    tendon: "recovery",
    tendonAt: 9,
    steps: [
      step("rolo-massagem", 90, "Meio das costas. Não desça à lombar."),
      step("rolo-massagem", 70, "Outra faixa, ainda torácica."),
      step("rolo-gluteo", 70, "Direito. Lateral do glúteo, fora do ísquio."),
      step("rolo-gluteo", 70, "Esquerdo."),
      step("rolo-quadriceps", 60, "Coxa direita, frente. Não é a banda iliotibial."),
      step("rolo-quadriceps", 60, "Coxa esquerda."),
      step("rolo-panturrilha", 60, "Direita."),
      step("rolo-panturrilha", 60, "Esquerda."),
      step("peito-rolo", 80, "T e W, queixo recuado."),
      step("anjo-neve", 70),
      step("rolo-torax", 80, "Extensão torácica, cabeça sustentada."),
      step("livro-aberto", 60, "Esquerda."),
      step("livro-aberto", 60, "Direita."),
      step("retracao", 70),
      step("pull-apart", 55, "Leve. Não é dia de esforço 8/10."),
      step("respiracao-9090", 150, "Pés na parede. Joelhos dobrados. Só o ar."),
      step("gato-vaca", 60, "Devagar, só o tórax."),
      step("agulha", 60, "Direita, almofada na cabeça."),
      step("agulha", 60, "Esquerda."),
      step("sereia", 55, "Inclinação pequena, sentado numa almofada."),
      step("respiracao", 70, "Feche no tapete, se quiser sair da parede."),
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
  if (stepTemplate.options?.length) {
    const chosen =
      [...stepTemplate.options]
        .filter((option) => option.minPhase <= phase)
        .sort((a, b) => b.minPhase - a.minPhase)[0] ?? stepTemplate.options[0];
    return {
      exerciseId: chosen.exerciseId,
      seconds: stepTemplate.seconds,
      note: chosen.note ?? stepTemplate.note,
    };
  }
  return {
    exerciseId: stepTemplate.exerciseId,
    seconds: stepTemplate.seconds,
    note: stepTemplate.note,
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

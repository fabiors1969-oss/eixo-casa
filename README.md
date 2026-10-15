# Eixo Casa

Publicado em [https://fabiors1969-oss.github.io/eixo-casa/](https://fabiors1969-oss.github.io/eixo-casa/). Fonte: commit `72735acb6b10446b9014b49da5b0d923ef7a4ee0` da branch `cursor/tendao-pilates-videos-6fb1`.

Aplicativo pessoal de treino em casa: **sessão diária mista** de alongamento, mobilidade, core e tendão. Sustentação e alongamento duram **30 segundos** e passam sozinhos. Exercício de repetição é uma série de **10**, sem teto de relógio: a pessoa conta e toca em **Feito**.

Feito para o Fábio (57 anos, 10 anos de Pilates, musculação 3 vezes por semana): flexibilidade e mobilidade em primeiro lugar, core para **correr e jogar tênis**, correção da giba cervical e carga terapêutica da tendinopatia proximal dos isquiotibiais. A força de membros fica na academia. Em casa entram **banda longa**, **três mini-bandas circulares** (leve, média e forte) e **rolo**. Sem poste, porta ou coluna. Nos dias marcados como musculação, o treino do tapete fica em mobilidade e o tendão entra só na dose leve.

Material de apoio ao treino. Alinhe a fase do tendão com o fisioterapeuta e o médico assistente. Dor aguda, formigamento ou tontura: pare.

## A semana

| Dia | Treino | Dose do tendão |
| --- | --- | --- |
| Segunda | Misto | Força, a mais pesada da semana |
| Terça | Misto | Analgésica, leve |
| Quarta | Misto | Analgésica, leve |
| Quinta | Misto | Segunda sessão, moderada |
| Sexta | Misto | Analgésica, leve |
| Sábado | Misto | Energia só na fase 4; senão, leve |
| Domingo | Misto | Recuperação |

Todos os dias misturam alongamento, mobilidade, core e o bloco da fase. A mini-banda média entra no glúteo (concha, abdução, monster walk); a leve, na escápula. A forte fica como progressão na ficha do exercício, não como dose diária. O posterior de coxa alonga em intensidade moderada: sem dor; se o ísquio piorar no dia seguinte, reduzir a amplitude. Nada de sit-up nem de rolo na lombar óssea.

O histórico do mês (dias treinados e % de adesão) fica em **Você**, só neste aparelho.

Os vídeos abrem no YouTube e precisam de internet. O resto do app funciona offline depois da primeira carga.

## Como rodar

```bash
npm install
npm run dev
```

Abre em [http://127.0.0.1:43127](http://127.0.0.1:43127).

No celular (Galaxy S23), abra o site no próprio aparelho e use **Adicionar página a → Tela inicial** na Internet Samsung. O passo a passo está em `/instalar`. O progresso da sequência e o calendário do mês ficam salvos só neste aparelho.

## Por que o ícone parava em 24 horas

O Eixo Casa **não está na Play Store**. O ícone no Galaxy é um atalho para um site. Na fase de testes esse site rodava num endereço provisório (túnel Cloudflare + máquina temporária). Esse endereço some quando a sessão acaba — em geral no dia seguinte. O celular então abre o atalho e não encontra nada: parece que o app foi “cancelado”. Não é o Galaxy apagando o programa, nem um limite do treino.

**O que resolve:** na primeira abertura o app agora grava uma cópia completa no aparelho (treinos, ilustrações, timer). Depois disso funciona sem aquele link. O caminho definitivo é publicar o site num endereço fixo (por exemplo Vercel) e instalar o ícone a partir desse endereço.

```bash
npm install
npm run build
npm start
```

Para publicar num subcaminho (GitHub Pages em `/nome-do-repo/`), sem quebrar a hospedagem na raiz:

```bash
NEXT_PUBLIC_BASE_PATH=/nome-do-repo npm run build
```

`NEXT_PUBLIC_ASSET_PREFIX` é opcional e, se omitido, acompanha o base path. Ícones, manifest e service worker usam esse prefixo. Não defina a variável para servir o site na raiz do domínio.

## Stack

Next.js, TypeScript, Tailwind CSS e shadcn/ui. Sem conta, sem banco, sem internet obrigatória depois que a página carregou.

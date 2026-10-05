# Eixo Casa

Publicado em [https://fabiors1969-oss.github.io/eixo-casa/](https://fabiors1969-oss.github.io/eixo-casa/). Fonte: commit `72735acb6b10446b9014b49da5b0d923ef7a4ee0` da branch `cursor/tendao-pilates-videos-6fb1`.

Aplicativo pessoal de pilates em casa: **treino diário misto** (mobilidade, abdômen, quadril e tendão no mesmo dia), com vídeo de cada exercício, blocos de cerca de 30 segundos ou 10 repetições, e bloco extra de abdômen.

Feito para o Fábio (57 anos, 10 anos de Pilates): mat intermediário/avançado para **correr e jogar tênis**, protegendo osteoartrose lombar leve, rigidez torácica, giba cervical e tendinopatia proximal dos isquiotibiais (8 meses). Em casa entram **banda elástica** e **rolo**. A banda se segura na mão, enrola no pé ou se pisa nela — o app não pede poste, porta nem coluna.

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

Todos os dias misturam mobilidade, abdômen, quadril e o bloco da fase. O que muda é a ordem e a dose do posterior, para não empilhar carga pesada em dias seguidos. Alongamento de posterior, Saw, Spine Stretch e rolo no ísquio não entram. Nada de sit-up nem de rolo na lombar óssea.

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

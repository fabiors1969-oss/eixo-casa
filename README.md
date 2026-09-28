# Eixo Casa

Publicado em [https://fabiors1969-oss.github.io/eixo-casa/](https://fabiors1969-oss.github.io/eixo-casa/). Fonte: commit `72735acb6b10446b9014b49da5b0d923ef7a4ee0` da branch `cursor/tendao-pilates-videos-6fb1`.

Aplicativo pessoal de pilates em casa: **cerca de 30 minutos por dia** (bloco extra opcional de cerca de 10), com vídeo de cada exercício, timer e a semana toda montada.

Feito para o Fábio (57 anos, 10 anos de Pilates): mat intermediário/avançado para **correr e jogar tênis**, protegendo osteoartrose lombar leve, rigidez torácica, giba cervical e tendinopatia proximal dos isquiotibiais (8 meses). Em casa entram **banda elástica** e **rolo**.

Material de apoio ao treino. Alinhe a fase do tendão com o fisioterapeuta e o médico assistente. Dor aguda, formigamento ou tontura: pare.

## A semana

| Dia | Treino | Foco |
| --- | --- | --- |
| Segunda | Série clássica | Hundred, abdominais, swimming, extensão torácica |
| Terça | Tendão e quadril | Bloco de força da fase atual, side kick, banda |
| Quarta | Tórax livre | Rolo, rotação, face pull, retração |
| Quinta | Giro de tênis | Prancha lateral, Pallof, energia só na fase 4 |
| Sexta | Posterior e pescoço | Segunda sessão do tendão e a giba |
| Sábado | Força no tapete | Pranchas, teaser na fase certa |
| Domingo | Restauração | Rolo sem ísquio, respiração 90/90 |

A fase do tendão fica salva no aparelho e troca o bloco de cada dia. Alongamento de posterior, Saw, Spine Stretch e rolo no ísquio não entram. Nada de sit-up nem de rolo na lombar óssea.

Os vídeos abrem no YouTube e precisam de internet. O resto do app funciona offline depois da primeira carga.

## Como rodar

```bash
npm install
npm run dev
```

Abre em [http://127.0.0.1:43127](http://127.0.0.1:43127).

No celular (Galaxy S23), abra o site no próprio aparelho e use **Adicionar página a → Tela inicial** na Internet Samsung. O passo a passo está em `/instalar`. O progresso da sequência fica salvo só neste aparelho.

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

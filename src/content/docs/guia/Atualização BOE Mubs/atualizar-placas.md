---
title: Manual de Atualização BOE 
description: AD Board - RMC V - 1 / RMC V - 2 - FAN V - 1 / FAN V - 2 - JSON

sidebar:
    order: 1


---

import { Link } from "@astrojs/starlight/components";


[comment]: <> (Documentação online para o aplicativo Interface de Comando Eletromidia)
[comment]: <> (Criado por Alexandre de Abreu - alexandre.abreu@eletromidia.com.br)
[comment]: <> (Data : 17/06/2024)

 
:::tip[Importante]
Leia esse documento atentamente antes de iniciar as suas atividades com as atualizações das placas BOE e dos MUBs, sempre o utilizando esse material para futuras consultas. A documentação apresentada Neste guia estará em constante atualização.

<i>Equipe do Departamento de Hardware Eletromidia. 
São Paulo, SP  - 16/07/2024</i>
::: 

## As placas utilizadas no MUB

- Placa – FAN – Controle das ventoinhas (Fans), leitura dos sensores de temperatura, controle
da alimentação da AD Board.
- Placa – RMC – Configura as variáveis de controle da FAN e AD, faz a leitura de sensores e controle do MUB.
- Placa – AD Board – Controle / Funcionamento da tela.

![Placas do MUB](https://i.imgur.com/Hx3J3vF.png)

### Conhecendo a placa Fan

Placa Fan tem como finalidade controlar a velocidade dos fans (ventoinhas), monitorando
a temperatura do equipamente, e se comunica com a RMC através da porta RS485 para envio e recebimento
de dados e controle.

![A placa Fan](https://i.imgur.com/2AIMfR5.png)

### Reconhecendo as placas Fan v.1 e v.2
:::caution
Só atualizamos a placa FAN versão 1 (v1) ! Nunca atualize a placa FAN na versão 2 (v2) !
:::

#### A placa fan V.1
![A placa fan V.1](https://i.imgur.com/X8hOmKc.jpeg)


#### A placa fan V.2
![A placa fan V.2](https://i.imgur.com/tn2Hhav.jpeg)

### Conhecendo a Placa RMC V-1
Placa RMC tem como finalidade controlar e monitorar os sensores e funcionalidades da tela do MUB.

![Placa RMC V-1](https://i.imgur.com/2mA3FzW.png)


### Conhecendo a Placa AD Board

A placa AD Board é um controlador de exibição integrada a tela LCD 4K UHD, que gera vídeo digital de alta qualidade e imagens gráficas de computador no painel LCD. Esta série de produtos suporta resoluções de até 4096 x 2160 dpi. Fornece portas de entrada de sinal completas, incluindo HDMI.

![Placa AD Board](https://i.imgur.com/WJRCVtK.png)

:::caution
Para MUB Face Dupla é necessário atualizar as duas placas AD Boards
:::

### Lista de itens necessário para atualizações

| Número | Item | Link |
| --------------- | --------------- | --------------- |
| 1 | Cabo USB A 2.0 para USB B | | 
| 2 | Programador ISP-USB da placa driver para atualização do firmware da AD Board | 
| 3 | Notebook com a pasta contendo os executáveis do firmwares, driver e arquivo bin 
| 4 | Pen drive contendo o arquivo JSON (zgs126_eth_para.json) | [Baixe Aqui](/referencias/links/) | 
| 5 | Pen drive contendo o arquivo bin (ZGS126_Upgrade.bin) | [Baixe Aqui](/referencias/links/) | 
| 6 | Pen drive contendo o arquivo (fan_ctrl_DS_v1.2.0.20230210.bin) | [Baixe Aqui](/referencias/links/) | 




### Sequência de atualização de protocolo e firmware 

<b><u>Etapa 1.:</b></u> Atualização do firmware da AD Board via Programador.

<b><u>Etapa 2.:</b></u> Atualização do firmware da RMC V-1 via Pen Drive.

<b><u>Etapa 3.:</b></u> Atualização do firmware da JSON via Pen Drive.

<b><u>Etapa 4.:</b></u> Atualização do firmware da FAN via Pen Drive.

![Processo de atualização de protocolo e firmware](https://i.imgur.com/6fFsbEa.png)

:::caution
Lembre: só atualizamos a placa FAN V – 1!
:::


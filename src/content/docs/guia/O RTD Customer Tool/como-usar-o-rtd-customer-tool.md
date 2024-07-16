---
title: O programa RTD Customer Tool
description: Como realizar a atualização do firmware da placa AD

sidebar:
    order: 3
 
 
---

[comment]: <> (Documentação online para o aplicativo Interface de Comando Eletromidia)
[comment]: <> (Criado por Alexandre de Abreu - alexandre.abreu@eletromidia.com.br)
[comment]: <> (Data : 17/06/2024)

:::tip[Leia com atenção!]
Leia esse documento atentamente antes de acessar operar o programa RTD Customer Tool, e sempre o utilize para futuras consultas.
:::

![O programa RTD Customer Tool](https://i.imgur.com/cbcLzR6.jpeg)
 

### Atualização firmware da AD Board

:::note
<b>Antes de atualizar o firmware, prepare os seguintes itens:</b>
- PC designado para esse trabalho.
- Programa de atualização de firmware relevante - RTD Customer Tool V3.5 ou revisão superior.
- Placa de programação externa (P/N 411102600-3)
- Cabo HDMI.
- Cabo USB (um lado tipo A conectado ao PC e outro lado mini-USB conectado à placa de programação).
- Arquivo bin e firmwares 

:::

 
### Procedimento de atualização do firmware usando o RTD Customer Tool

<b><u>Etapa 1.:</b></u> Conecte a AD Board no PC usando a placa programadora e os respectivos cabos (USB /
HDMI).

<b><u>Etapa 2.:</b></u> Desconecte o cabo de comunicação da Placa FAN com a RMC, Veja no próximo slide.

![Como realizar a preparação para atualização da placa AD usando o RTD Customer Tool](https://i.imgur.com/q8cNG8N.png)

:::caution
OBS: Para MUB Fase Dupla é
necessário atualizar as duas
AD Board
:::

#### Antes de atualizar o firmware
<b><u>Etapa 2.:</b></u> Desconecte o cabo de comunicação da Placa FAN com a RMC.

![Desconecte o cabo da placa Fan antes de atualizar a placa AD](https://i.imgur.com/tlXLTw4.png)

Veja o diagrama abaixo:

![](https://i.imgur.com/SyxnhO3.png)

<b><u>Etapa 2.:</b></u> No PC, execute “RTDTool.exe” para iniciar o firmware “RTD Customer Tool” programa de atualização.

<b><u>Etapa 3.:</b></u> Na primeira execução do programa “RTD Customer Tool”, instale o USB

Driver disponível em
https://drive.google.com/file/d/1r14RClgrS4sKxrd1FLxFzscY4f7XCLk4/view?usp=drive_link ou escolhe a “Opção de comunicação” → pressione o botão “Instalar” na seção do driver como retratado na imagem abaixo.
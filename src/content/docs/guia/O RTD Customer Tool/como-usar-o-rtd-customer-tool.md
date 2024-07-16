---
title: O programa RTD Customer Tool
description: Como realizar a atualização do firmware da placa AD

sidebar:
    order: 3
 
 
---

[comment]: <> (Documentação online para o aplicativo Interface de Comando Eletromidia)
[comment]: <> (Criado por Alexandre de Abreu - alexandre.abreu@eletromidia.com.br)
[comment]: <> (Data : 17/06/2024)

Leia esse documento atentamente antes de acessar operar o programa RTD Customer Tool, e sempre o utilize para futuras consultas.


![O programa TCP Server Test](https://i.imgur.com/cbcLzR6.jpeg)
 
O RTD Customer Tool realiza a atualização de firmware da placa AD. O procedimento de conexão é:

1. Conecte o cabo USB entre o notebook e o dispositivo de gravação.
2. Conecte o cabo HDMI no dispositivo de gravação.
3. Certifique-se de que o ele esteja no modo de exibição.

#### Etapas de configuração do firmware da placa AD

1. Instalar configuração de software: RTD Tool 3.7 (anexado a este artigo)
2. Executar utilitário RTD Customer Tool
3. Etapa 1 : Método de acesso Selecione ” USBHubI2C ”
4. Etapa 2 : clique no botão da ferramenta imagem.png
5. Selecione  a velocidade do ISP ” 100K”
6. Desligue a janela pop-up
7. Selecione os arquivos de firmware (anexados a este artigo)
8. Clique Flash para atualizar o firmware

![Seleção do driver para a placa AD](https://i.imgur.com/Ovoaizd.jpeg)

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

Etapa 2.: No PC, execute “RTDTool.exe” para iniciar o firmware “RTD Customer Tool” programa de atualização.

Etapa 3.: Na primeira execução do programa “RTD Customer Tool”, instale o USB

Driver disponível em
https://drive.google.com/file/d/1r14RClgrS4sKxrd1FLxFzscY4f7XCLk4/view?usp=drive_link ou escolhe a “Opção de comunicação” → pressione o botão “Instalar” na seção do driver como retratado na imagem abaixo.
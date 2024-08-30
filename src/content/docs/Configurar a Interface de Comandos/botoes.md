---
title: Botões
description: Conheça a interface de comandos Eletromidia

sidebar:
    order: 2
 
---

## Botões
Configurar Brilho
Este botão abre uma nova página para controle do brilho do equipamento. A página possui dois segmentos, Schedule e Brilho, descritos a seguir.

## Schedule
O segmento Schedule envia um comando para definir um agendamento de brilhos. O segmento possui cinco horários possíveis de controle, sendo necessário o preenchimento de todos os campos para o funcionamento (se necessário apenas quatro horários, copiar um horário para o quinto campo).
O campo de horário deve ser preenchido com o horário que o brilho deve ser alterado, sendo de 00:00 até 23:59. O formato obrigatoriamente deve ser hh:mm.

O campo de Porcentagem deve ser preenchido com a porcentagem do brilho que vai ser alterado no horário definido. O formato deve ser apenas o número de 1 a 100.

O botão “Enviar Schedule” envia todos os comandos necessários para que o schedule seja ativado de modo correto.


## Brilho

O segmento Brilho controla o brilho da tela de modo instantâneo. O slider define o brilho que será enviado depois de selecionar a tela com as opções de “Tela 1”, “Tela 2” e “Telas 1 e 2”. Ao clicar em “Enviar Brilho” o comando será enviado e o brilho será alterado.

Os botões de “Get Brilho” enviam um comando e mostram o valor atual do brilho de cada tela.

![Interface de Comandos Eletromidia](https://i.imgur.com/zCaIdut.png)


Os botões de “Get Input” enviam um comando e recebem uma resposta com qual entrada a tela está conectada, podendo ser “HMDI 1”, “HDMI2” e “DP”.
Os botões de ligar e desligar a tela ligam e desligam a tela que está selecionada no campo “Tela”, podendo ligar ou desligar um ou as duas telas.

 
## Web Browser
Este botão abre em um navegador a página web que deverá ser alterada para o envio dos comandos. O botão automaticamente detecta se o roteador é da Vivo ou da Claro, alterando o IP da página para o IP correspondente.

## Medições
O botão “Medições” abre uma nova página com as informações elétricas do equipamento. Os dados podem ser obtidos de duas maneiras, a primeira maneira é clicar no botão “Get Data”, além de coletar as versões, ele coleta as informações elétricas. A segunda maneira só funciona quando o botão “Get Data” ainda não foi clicado, para isso basta clicar no botão “Medições”, ele vai coletar os dados.

## Enviar comando
Este botão envia o comando selecionado no quadro “Comandos” e no quadro “Controle de Relay”. Note que a página pode travar durante o processo de envio, o que é esperado.

## Get Data
Este botão recebe todas as versões das placas conectadas e as medições dos valores elétricos do equipamento. Se o equipamento for de face simples, o valor de “Versão AD2” aparecerá como “VXXX”, mostrando que não possui ADBoard conectada.

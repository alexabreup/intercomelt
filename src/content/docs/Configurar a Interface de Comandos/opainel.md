---
title: Interface de Comandos BOE
description: Conheça a interface de comandos Eletromidia

sidebar:
    order: 1
 
---

[comment]: <> (Documentação online para o aplicativo Interface de Comando Eletromidia)
[comment]: <> (Criado por Alexandre de Abreu - alexandre.abreu@eletromidia.com.br)
[comment]: <> (Data : 17/06/2024)

Leia atentamente antes de operar o aplicativo interface de comandos e sempre utilize para futuras consultas.

 
 
## Versões Atuais
- Interface de Comandos BOE - Versão 6.2
- Configuração de Brilho - Versão 4.1
- Medições - Versão 1.2
- RMC - Versão 1.30
- Fan Controller - Versão 120_20230210
- ADBoard - Versão 051


## Comandos

### Configuração
Comandos para envio com a finalidade de alterar configurações do equipamento como, por exemplo, a porta de entrada da tela, ligar ou desligar a tela, etc. Ao clicar em “Comandos de Configuração” os comandos podem ser selecionados ao clicar em “Selecionar o Comando” e o Tipo de Comando será alterado para Configuração.

### Leitura
Comandos para envio com a finalidade de ler as configurações do equipamento como, por exemplo, em qual porta de entrada a tela está ligada, se a tela está ligada ou desligada, etc. Ao clicar em “Comandos de Leitura” os comandos podem ser selecionados ao clicar em “Selecionar o Comando” e o Tipo de Comando será alterado para Leitura.


![Interface de Comandos Eletromidia](https://i.imgur.com/j0ahrPW.png)

## Controle de Relay
A placa RMC possui 6 relés, sendo eles quatro de estado sólido e dois mecânicos. Esse quadro controla os dois mecânicos numerados de 0 e 1. É necessário clicar na opção desejada e em seguida clicar em “Enviar Comando”, botão descrito em “Botões”.
Os outros relés podem ser comandados pelo quadro de “Comandos” em “Comandos de configuração”.

![Interface de Comandos Eletromidia](https://i.imgur.com/3ZvAiwl.png)

## Tipo de Comando
### Comando
Este quadro mostra ao usuário o comando que será enviado para a placa RMC quando selecionado o comando no quadro “Comandos”
### ACK (resposta)
Este quadro mostra inicialmente qual o ACK esperado pelo comando selecionado e, ao clicar em “Enviar comando”, mostra o ACK recebido pela RMC. O quadro ainda apresenta algumas incongruências que necessitam de correção.

 
![Interface de Comandos Eletromidia](https://i.imgur.com/DgoqmY9.png)

## Botões
### Configurar Brilho
Este botão abre uma nova página para controle do brilho do equipamento. A página possui dois segmentos, Schedule e Brilho, descritos a seguir.

### Schedule
O segmento Schedule envia um comando para definir um agendamento de brilhos. O segmento possui cinco horários possíveis de controle, sendo necessário o preenchimento de todos os campos para o funcionamento (se necessário apenas quatro horários, copiar um horário para o quinto campo).

O campo de horário deve ser preenchido com o horário que o brilho deve ser alterado, sendo de 00:00 até 23:59. O formato obrigatoriamente deve ser hh:mm.

O campo de Porcentagem deve ser preenchido com a porcentagem do brilho que vai ser alterado no horário definido. O formato deve ser apenas o número de 1 a 100.

O botão “Enviar Schedule” envia todos os comandos necessários para que o schedule seja ativado de modo correto.

 
![Interface de Comandos Eletromidia](https://i.imgur.com/7nPDam0.png)

---
title: Instruções de utilização 
description: Saiba como configurar
sidebar:
    order: 4
---

Leia atentamente antes de operar o aplicativo de comando e leitura, sempre utilizando para futuras consultas.

 
## Observações iniciais
Antes de iniciar a aplicação é necessário conectar a máquina na rede do equipamento. Para isso, é necessário um cabo de rede, conectando o roteador na máquina.

## Ao iniciar a aplicação
Com a aplicação iniciada, observe o IP address que aparecerá na tela. Caso queira, por questões de segurança, compare com o IP que aparece com o comando “ipconfig” no CMD. Ambos devem ser exatamente iguais.

## Alteração  da página WEB
Com o IP address correto, clica no botão “Web Browser”. Depois que a página abrir, procure pelo quadro com as opções “Server IP” e “Server Port”. Altere o “Server IP” com o IP Address da máquina, o mesmo adquirido anteriormente. Observe no primeiro quadro com a opção “Network protocol” se está selecionada a opção “TCP”, se estiver “UDP”, altere.
Feito isso, desça a tela e clique nos botões “Set” e “Restart” respectivamente, podendo fechar a página web.

## Opções seguintes
O equipamento está pronto para ser controlado com as seguintes configurações:

## Alterar Schedule (alteração de agendamento)
Para alterar o agendamento de brilho da tela, deve-se clicar no botão “Configurar Brilho”, abrindo uma nova tela chamada “Brilho”. Com a tela aberta, basta preencher todas as informações de horário e brilho, sendo obrigatório preencher todos os campos, mesmo se não for utilizar todos os cinco horários (se for esse o caso, basta copiar um dos horários para as demais linhas).

Com tudo preenchido, basta clicar em “Enviar Schedule”, o botão já envia todos os comandos necessários para o ajuste do agendamento.

![alterar o agendamento](https://i.imgur.com/QGXhEJ1.png)

Exemplo de schedule de brilho com o 4º e 5º horários duplicados.

## Alterar Brilho
Para alterar o brilho instantâneo da tela, deve-se clicar no botão “Configurar Brilho”, abrindo uma nova tela chamada “Brilho”. Com a tela aberta, basta definir o brilho no slider, selecionar a tela que deve ser alterada e clicar em “Enviar Brilho”. Com isso é possível observar que a tela do equipamento vai alterar o brilho e, com um controle remoto, pode-se verificar o brilho atual.

Na mesma tela ainda é possível verificar o brilho atual clicando em “Get Brilho Tela 1” e “Get Brilho Tela 2”, tendo a resposta do lado do botão.
É possível também verificar em qual entrada a tela está ligada na ADBoard, clicando em  “Get Input Tela 1” e “Get Input Tela 2”, com a resposta do lado do botão.

Para ligar e desligar a tela, basta clicar no botão na parte inferior da tela, a tela em questão é a que está selecionada acima.

![alteração de brilho](https://i.imgur.com/zdQUHcb.png)

Exemplo de Brilho em MUB de face simples

## Verificar versões e medições elétricas
Para verificar as versões, basta clicar no botão “Get Data”, as versões vão aparecer em cada espaço com o valor detalhado anteriormente. Ao clicar no botão, a aplicação consulta também os valores elétricos que o equipamento mede constantemente, para verificar os valores, basta clicar em “Medições”, abrindo uma página nova com todas as informações elétricas do equipamento.

O valor não é atualizado automaticamente, para atualizar deve-se fechar a página “Medições”, clicar novamente em “Get Data” e depois reabrir a página.

Na primeira vez que a página for aberta, caso não tenha clicado em “Get Data”, a aplicação fará isso sozinha, mas somente a primeira vez.
A linha tracejada indica o limiar pré definido de cada dado, por hora o valor está fixo em (baseado em testes em laboratório):

| Dado              | Valor  |
| ----------------- | ------ |
| Tensão AC:        | 110V   |
| Fonte 12VDC:      | 9V     |
| Fonte 24VDC:      | 20V    |
| Corrente:         | 0,5A   |
| Potência Efetiva: | 1000W  |
| Potência Reativa: | 500VAr |

https://i.imgur.com/NYBj60i.png

![Medição Elétrica](https://i.imgur.com/NYBj60i.png)

Os dados da foto foram coletadas de um MUB face simples no dia 26/08/2024

## Controlar Relés
A placa RMC possui seis relés, para controlá-los, existem duas maneiras. Para controle de todos os relés, basta clicar em “Comandos de Configuração” no quadro “Comandos” e selecionar em “Selecionar o Comando” qual o relé e qual o comando (“On” para ligar e “OFF” para desligar). Além disso, é possível controlar somente os relés mecânicos com o quadro “Controle de Relay”, basta clicar no botão correspondente e em seguida clicar em “Enviar Comando”.

![Controle dos Relés](https://i.imgur.com/S98ufaJ.png)

![Leitura dos Hexadecimais](https://i.imgur.com/QNOSSSE.png)

## Verificar e comandar telas
Ainda é possível comandar a situação das telas, sendo na página “Brilho” como descrito anteriormente ou via comando com “Comandos de Configuração” e “Comandos de Leitura”.

Para os comandos de configuração, os itens “Estado da Tela”, é possível ligar e desligar a tela correspondente. Com o comando “Input Source” é possível definir qual a entrada a tela está ligada na ADBoard. Os comandos “Backlight” e “Brightness” controlam o brilho e a luz de fundo da tela.

![Comandos de Configuração](https://i.imgur.com/QHQoK9I.png)

Já para os comandos de leitura, os nomes se mantêm, porém não é alterado do equipamento, apenas é recebido um ACK com a situação atual do que foi pedido.

![Comandos de Configuração](https://i.imgur.com/WMDqEH1.png)
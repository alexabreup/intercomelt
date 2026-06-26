---
title: O programa TCP Server Test
description: Como operar o software de configuração e controle do RMC

sidebar:
    order: 4
 
---

[comment]: <> (Documentação online para o aplicativo Interface de Comando Eletromidia)
[comment]: <> (Criado por Alexandre de Abreu - alexandre.abreu@eletromidia.com.br)
[comment]: <> (Data : 17/06/2024)

:::tip[Leia com atenção!]
Leia esse documento atentamente antes de acessar operar o programa TCP Server Test, e sempre o utilize para futuras consultas.
:::

![O programa TCP Server Test](https://i.imgur.com/UUs6bob.png)
 
 O programa TCP Server Test é utilizado para realizar a leitura e configuração da placa RMC que controla os dispositivos operados no MUB.

Fundamentalmente iremos trabalhar apenas com algumas partes do programa, os quais devemos dominar plenamente para obter sucesso nas operações de configuração e leitura. Apresentamos primeiramente essas partes para que fiquem bem compreendidas pelos operadores, e na sequência todo o painel de controle para que o usuário entenda as funcionalidades adicionais que não serão necessárias a serem utilizadas nas maioria dos casos.

### 1. O essencial para operar o TCP Server Test

1. Port: A caixa para inserir a porta serial
2. Custom Data 1 e 2
3. A caixa de texto "Receive"


#### 1.1. Configurar a porta serial através do Port 

A entrada Port é onde inserimos a porta serial de acesso do programa TCP Server Test. Normalmente todas as portas seriais possuem o número <b>55502</b>. Ela está localizada na parte inferior esquerda do painel do programa.

![O programa TCP Server Test](https://i.imgur.com/pqFRuaw.png)

Insira o número dessa porta e aperte o botão Connect.

![Insira o número 55502 e pressione Connect](https://i.imgur.com/fcuLYA9.jpeg)


### 2. Custom Data 1 e 2

As caixas para inserir os hexadecimais Custom Data 1 e 2 estão posicionadas acima do display de leitura "Receive". Elas são responsáveis por inserir os comandos de configurações e leituras do programa TCP Server Test.

![Custom Data 1 e 2](https://i.imgur.com/dTv9Ena.jpeg)

Pelo fato de atuarem independentes elas podem servir tanto para o modo configuração ou leitura, mas a atuação desses comandos demanda a leitura da resposta da placa RMC, por isso elas são utilizadas combinadas de acordo com a operação necessária.

#### 2.1. Aplicação de um comando sobre a Custom Data

Insira o hexadecimal que representa o comando desejado, e na sequência, clique no botão Send. O comando será enviado para a placa RMC e o resultado aparecerá no display de respostas "Receive". 

Para facilitar a leitura do comando aplicado, pressione "Print Switch" e "Clean", geralmente necessário fazer duas ou três vezes, até o display ficar limpo e sem nenhuma leitura, favorecendo a visualização da resposta do novo comando aplicado.

Um exemplo que pode ajudar a ilustrar a executar um comando de leitura, seria o envio do hexadecimal <b>ff 55 04 39 01 01 00 93</b>, que realiza a verificação do funcionamento da tela 01 no MUB dupla face (HDMI 1 / TELA 1 / ON).

![Comando de Leitura da Tela 01](https://i.imgur.com/AyN8kVD.jpeg)

Ao inserirmos o hexadecimal no Custom Data (1 ou 2), aparecerá na sequência o <ACK> (termo que significa acknowledgement, reconhecimento em português).

Neste caso, recebemos o <b><ACK>: ff 55 06 39 01 01 00 00 <b><font color="red">00</font></b>
 3b</b>, que representa o funcionamento normal da tela 01 (<b><font color="red">value: 00 - power on</font></b>). Se neste caso o resultado fosse <b><font color="red">01</font></b> ao invés de <b><font color="red">00</font></b>, indicaria o não funcionamento da tela (<b><font color="red">value: 01 - power off</font></b>).

### 3. A caixa de texto “Receive”

Sempre que for consutar os dados recebidos, limpe o display da caixa de texto utilizando o botão "Clean". 

![Receive e os botões Print Switch e Clean](https://i.imgur.com/zpN2PCA.jpeg)

O botão Print Switch irá permitir após o comando desejado ser aplicado, a receber os parâmetros de funcionamento (ex.: temperatura, funcionamento das fans, brilho, tensão..) dentro dos valores hexadecimais de leitura. É sempre necesário usar caso você tenha um conhecimento prévio dessas funcionalidades, e na dúvida, consulte o seu gestor ou colega devidamente treinado para poder compreender melhor essas informações.



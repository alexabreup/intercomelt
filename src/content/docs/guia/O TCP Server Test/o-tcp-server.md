---
title: O programa TCP Server Test
description: Como operar o software de configuração e controle do RMC

sidebar:
    order: 1
 
---

[comment]: <> (Documentação online para o aplicativo Interface de Comando Eletromidia)
[comment]: <> (Criado por Alexandre de Abreu - alexandre.abreu@eletromidia.com.br)
[comment]: <> (Data : 17/06/2024)

Leia esse documento atentamente antes de acessar operar o programa TCP Server Test, e sempre o utilize para futuras consultas.


![O programa TCP Server Test](https://i.imgur.com/UUs6bob.png)
 
 O programa TCP Server Test é utilizado para realizar a leitura e configuração da placa RMC que controla os dispositivos operados no MUB.

Fundamentalmente iremos trabalhar apenas com algumas partes do programa, os quais devemos dominar plenamente para obter sucesso nas operações de configuração e leitura. Apresentamos primeiramente essas partes para que fiquem bem compreendidas pelos operadores, e na sequência todo o painel de controle para que o usuário entenda as funcionalidades adicionais que não serão necessárias a serem utilizadas nas maioria dos casos.

### 1. O essencial para operar o TCP Server Test

1. Custom Data 1
2. Custom Data 2
3. A caixa de texto "Receive"
4. Port: A caixa para inserir a porta serial 


#### 1.1. Configurar a porta serial através do Port 

A entrada Port é onde inserimos a porta serial de acesso do programa TCP Server Test. Normalmente todas as portas seriais possuem o número 55502. Ela está localizada na parte inferior esquerda do painel do programa.

![O programa TCP Server Test](https://i.imgur.com/pqFRuaw.png)

Insira o número dessa porta e aperte o botão Connect.

![Insira o número 55502 e pressione Connect](https://i.imgur.com/fcuLYA9.jpeg)


### 2. Verificar o IP do seu notebook na rede Wi Fi

Em seu Windows, clique os botões Windows + R, ou através da janela "Pesquisar", digite CMD (Prompt de Comando). Ao aparecer o seu terminal de prompt de comando, digite IPCONFIG.

Irá aparecer na parte "Adaptador de Rede sem Fio WI-Fi:", o seu "Endereço IPv4........192.168.1.xx" (os últimos números estão representados como .xx pois vai variar de acordo com cada notebook).

Copie esse IP e guarde para poder configurar o seu notebook no painel de controle do Kit Embarcado de Acesso Remoto (Embedded Device Remote Access Kit).

### 3. Acesso ao Kit Embarcado de Acesso Remoto (Embedded Device Remote Access Kit) 

Será necessário realizar as alterações em apenas algumas partes do painel de controle.

São elas:

#### 3.1. Network Protocol
Sempre ele deve estar selecionado em TCP. Nunca altere para UDP.

#### 2.2. Server IP:
Esse é o endereço encontrado no seu notebook via o IPCONFIG no terminal de prompt de comandos. Copie e cole.
 
#### 2.3. Botões Set e Restart:
Para finalizar as configurações de acesso, pressione os botões Set e Restart na sequência.

Pronto. Você está habilitado agora para acessar o seu controlador TCP/IP para realizar as atualizações dos firmwares e leitura das placas.


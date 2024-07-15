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


1. Network protocol
2. Heartbeat enable
3. Command filter enable
4. Server IP
5. Local IP
6. Group receive IP
7. Group send IP
8. Botões Set, Get, Restart e Run Boot

### 1. Acesso a rede Wi Fi do MUB. 

Para poder ter acesso ao painel de controle, é necessário primeiramente selecionar no seu notebook a rede na qual está conectado o MUB.

Existem 2 tipos de modens que operam dentro dos MUBs, um modelo é da empresa Claro e o outro é da empresa Vivo.

Os modens da operadora Claro operam no ip 192.168.0.237, o 0 indica que é um aparelho dessa empresa.

Os modens da operadora Vivo operam no ip 192.168.1.237, sendo o número 1 indicativo que é um aparelho dessa empresa.

Conecte-se ao Wi Fi do Mub e acesse utilizando a senha devida para conseguir completar a conexão. 

Caso haja algum problema ao conseguir acessar com a senha fornecida do MUB, faça um reset do aparelho e utilize o usuário e senha fornecido na parte inferior do modem. 

Após alterar para a configuração padrão da operadora, acesse o painel de controle do modem e realize a mudança da senha para as senhas utilizadas pelo seu departamento.


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


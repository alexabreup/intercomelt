---
title: A configuração do acesso
description: Como acessar o controle da placa RMC Eletromidia

sidebar:
    order: 1
 
---

[comment]: <> (Documentação online para o aplicativo Interface de Comando Eletromidia)
[comment]: <> (Criado por Alexandre de Abreu - alexandre.abreu@eletromidia.com.br)
[comment]: <> (Data : 17/06/2024)

:::tip[Leia com atenção!]
Leia esse documento atentamente antes de acessar e alterar o Kit Embarcado de Acesso Remoto (Embedded Device Remote Access Kit), e sempre o utilize para futuras consultas.
:::

![O painel de controle](https://i.imgur.com/S273rK3.png)
 
 O Kit Embarcado de Acesso Remoto (Embedded Device Remote Access Kit) realiza a configuração da rede para habilitar o acesso a placa RMC. Esse painel de controle está dividido em 5 áreas:

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

Existem 2 tipos de modems que operam dentro dos MUBs, um modelo é da empresa Claro e o outro é da empresa Vivo.

<b>Os modems da operadora Claro operam no ip 192.168.0.237, o 0 indica que é um aparelho dessa empresa.</b>

<b>Os modems da operadora Vivo operam no ip 192.168.1.237, sendo o número 1 indicativo que é um aparelho dessa empresa.</b>

Conecte-se ao Wi Fi do Mub e acesse utilizando a senha devida para conseguir completar a conexão. 

Caso haja algum problema ao conseguir acessar com a senha fornecida do MUB, faça um reset do aparelho e utilize o usuário e senha fornecido na parte inferior do modem. 

Após alterar para a configuração padrão da operadora, acesse o painel de controle do modem e realize a mudança da senha para as senhas utilizadas pelo seu departamento.


### 2. Verificar o IP do seu notebook na rede Wi Fi

Em seu Windows, clique os botões Windows + R, ou através da janela "Pesquisar", digite CMD (Prompt de Comando). Ao aparecer o seu terminal de prompt de comando, digite IPCONFIG.

Irá aparecer na parte "Adaptador de Rede sem Fio WI-Fi:", o seu "Endereço IPv4........192.168.1.xx" (os últimos números estão representados como .xx pois vai variar de acordo com cada notebook).

Copie esse IP e guarde para poder configurar o seu notebook no painel de controle do Kit Embarcado de Acesso Remoto (Embedded Device Remote Access Kit).

### 3. Acesso ao Kit Embarcado de Acesso Remoto (Embedded Device Remote Access Kit) 

Será necessário realizar as alterações em apenas algumas partes do painel de controle.

![Áreas a serem operadas](https://i.imgur.com/CB7Ith5.jpeg)

São elas:

#### 3.1. Network Protocol
Sempre ele deve estar selecionado em <b>TCP</b>. Nunca altere para UDP.

#### 3.2. Server Port
O campo Server Port tem que está configurado para o número <b>55502</b>.

![O programa TCP Server Test](https://i.imgur.com/pqFRuaw.png)

Insira o número dessa porta e aperte o botão Connect.

![Insira o número 55502 e pressione Connect](https://i.imgur.com/fcuLYA9.jpeg)

#### 2.2. Server IP:
Esse é o endereço encontrado no seu notebook via o IPCONFIG no terminal de prompt de comandos. Copie e cole.
 
#### 2.3. Botões Set e Restart:
Para finalizar as configurações de acesso, pressione os botões Set e Restart na sequência.

Pronto. Você está habilitado agora para acessar o seu controlador TCP/IP para realizar as atualizações dos firmwares e leitura das placas.


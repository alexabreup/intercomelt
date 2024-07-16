---
title: O Modem Vivo    
description: Como configurar o modem da operadora Vivo BC-4GMCPGa 

sidebar:
    order: 3
 
---

[comment]: <> (Documentação online para o aplicativo Interface de Comando Eletromidia)
[comment]: <> (Criado por Alexandre de Abreu - alexandre.abreu@eletromidia.com.br)
[comment]: <> (Data : 17/06/2024)

Leia esse documento atentamente antes de acessar e alterar modem da operadora Vivo, e sempre o utilize para futuras consultas.


### 1.Conhecendo o Modem Vivo BC-4GMCPGa 

![Frente do Claro MF286C](https://i.imgur.com/ksNljF7.png)


1. LAN1 a LAN4: Portas Ethernet para conectar por cabo os
seus dispositivos como um PC e laptop.
2. Wi-Fi/WPS: A função Wi-Fi é ligada/desligada através de
uma breve pressão (menos de 3 segundos). A janela de
associação WPS é ativada por uma longa pressão (por 5
segundos).
3. Reset: Pressione para reiniciar o Box.
4. Power 12V: Conecte a Fonte de Alimentação.
5. Botão ON/OFF: Pressione para ligar ou desligar o aparelho.
6. Slot do Simcard (cartão SIM).
7. Conectores das antenas externas. Conecte as antenas
externas para ampliar o alcance de sua rede móvel.
 
### 2.Indicadores do painel dianteiro

![](https://i.imgur.com/MM4SHWs.png)

 
![indicadores](https://i.imgur.com/zf4ACB0.png)



### 3.Painel traseiro

![Painel traseiro](https://i.imgur.com/3SNoEKD.png)


### 4.Acessando Interface WEB do usuário

 

A Interface Web do Usuário (Web UI) permite que você configure o Box usando seu navegador da web.

<b><u>Etapa 1.:</b></u>  Certifique-se que o computador que você usa está conectado ao Box através do cabo de rede Ethernet ou através da rede Wi-Fi.

![](https://i.imgur.com/6hru0BE.png)

<b><u>Etapa 2.:</b></u>  Abra seu navegador da web e digite 192.168.1.1 no campo de endereço web.

![](https://i.imgur.com/84Mst3v.png


#### Nota:

<img align="left" width="290" height="290" src="https://i.imgur.com/84fynOG.png)"><p>O padrão de fábrica é:</p><br>
<p>•Nome de usuário: admin</p><br>
<p>•Senha: vivo</p><br>
 

<b><u>Etapa 3.:</b></u>  Uma tela de autenticação será exibida. Use o nome de usuário e senha padrão impressos na etiqueta da parte traseira do Box.

<b><u>Etapa 4.:</b></u> A página de Interface Web do Usuário (Web UI) será exibida. Clique nos ícones da barra superior para acessar as diferentes funções de gerenciamento.

#### Etapa 4: detalhes de como aplicar

![Parte superior](https://i.imgur.com/66JYcKG.png)

1. Informações básicas
Fornece informações como: Nível de sinal da rede móvel, Rede conectada (2G/3G/4G), número dos dispositivos conectados na rede Wi-Fi e nas portas Ethernet, caixa postal e SMS não lido.

2. Idioma / Reiniciar / Web UI Logout
Idioma: Clique na lista para selecionar o idioma preferido.
Reiniciar: Clique no ícone para reiniciar o Box.
Web UI Logout: Clique no ícone para sair da interface Web de Usuário.

![](https://i.imgur.com/SFe5cHU.png)

3. Configuração do BOX

![Etapas de configuração do BOX](https://i.imgur.com/3k4KI5o.png)

<b><u>Etapas:</b></u>
1. Parâmetros
2. Ethernet
3. Configuração da rede local
4. Alterar o range IP
5. Aplicar

![](https://i.imgur.com/E3AfX8O.png)

<b><u>Rede configurada:</b></u>

![Rede configurada:](https://i.imgur.com/z2nM9ts.png)

### 5.Acessando o endereço IPV4 no Windows

#### Para abrir o Prompt de Comando no Windows, siga um destes métodos

![](https://i.imgur.com/eSa1OEy.jpeg)

1. Pesquisar no Menu Iniciar:
 - Clique no botão "Iniciar" (geralmente localizado no canto inferior esquerdo da tela).
 - Na caixa de pesquisa, digite "Prompt de Comando" ou "cmd".
 - Selecione o aplicativo "Prompt de Comando" nos resultados da pesquisa.
2. Através do Executar:
 - Pressione as teclas "Windows + R" simultaneamente para abrir a janela "Executar".
 - Digite "cmd" na caixa de texto e pressione Enter.
3. Digite o comando ipconfig e pressione Enter.
4. Procure pela seção "Conexão Local" ou "Ethernet" (o nome pode variar dependendo do
sistema operacional) e encontre o endereço IPv4 listado ao lado de "Endereço IPv4".
5. Insira este endereço IPv4 copiado no local indicado como "SERVER IP" na configuração do
dispositivo ou aplicativo.
6. Copie este endereço IPv4 encontrado no prompt de comando.

Para abrir o Prompt de Comando no Windows, siga um destes métodos.

![](https://i.imgur.com/Y3pGasB.jpeg)

Repita os passos 4 e 5:

4. Procure pela seção "Conexão Local" ou "Ethernet" (o nome pode variar dependendo do
sistema operacional) e encontre o endereço IPv4 listado ao lado de "Endereço IPv4".
5. Copie este endereço IPv4 encontrado no prompt de comando.


### 6.Acessando Interface WEB do usuário TCP/RMC

#### A Interface Web do Usuário TCP permite que você configure a RMC usando seu navegador da web.
 


<b><u>Etapa 1.:</b></u> Certifique-se que a RMC esteja conectada ao Box através do cabo
de rede Ethernet.

<b><u>Etapa 2.:</b></u> Abra seu navegador da web e digite 192.168.1.237 no campo de
endereço web.

<b><u>Etapa 3.:</b></u>A página de Interface Web do Usuário TCP será exibida.

<b><u>Etapa 5.:</b></u> Configuração da RMC via TCP.

![](https://i.imgur.com/xkOSsgH.jpeg)

### 7. Configuração do dispositivo remoto (RMC)

Etapas:
1. Mudar o protocolo para TCP
2. Cole o endereço IPV4
3. Alterar a porta para 55502
4. Clicar botão Set
5. Clicar botão Reset

![](https://i.imgur.com/Awd0R77.jpeg)

<b><u>OBS:</u></b> O endereço IPv4 encontrado no
prompt de comando através do comando
ipconfig.
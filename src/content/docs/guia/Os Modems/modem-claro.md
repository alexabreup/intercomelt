---
title: O Modem Claro    
description: Como configurar o modem da operadora Claro MF286C

sidebar:
    order: 2
 
---

[comment]: <> (Documentação online para o treinamento Eletromidia - Documentação de configuração do modem Vivo criado por Thiago Ferreira)
[comment]: <> (Criado por Alexandre de Abreu - alexandre.abreu@eletromidia.com.br)
[comment]: <> (Data : 17/06/2024)

:::tip[Leia com atenção!]
Leia esse documento atentamente antes de acessar e alterar modem da operadora Claro, e sempre o utilize para futuras consultas.
:::

![Reconhecimento do Modem Claro MF286C](https://i.imgur.com/eWIdinA.png)
 
### 1.Conhecendo o Modem Claro MF286C

![Frente do Claro MF286C](https://i.imgur.com/UrYucqw.png)

Um modem roteador é um dispositivo que combina as funções de um modem e de um roteador em um único equipamento.

<b><u>Modem</b></u>: O modem é responsável por converter o sinal de internet vindo da provedora de serviços (como o sinal de fibra óptica, cabo coaxial ou DSL) em um sinal que possa ser usado pelo computador ou dispositivo conectado à rede local.

![Parte traseira do CLaro MF286C](https://i.imgur.com/BRWVCXS.png)

<b><u>Roteador</b></u>: O roteador é responsável por distribuir a conexão de internet para múltiplos dispositivos em uma rede local (LAN). Ele faz isso através de conexões sem fio (Wi-Fi) e/ou conexões com fio (Ethernet), permitindo que vários dispositivos se conectem à internet simultaneamente.

Um modem roteador é essencial para conectar seus dispositivos à internet, seja através de uma conexão com fio ou sem fio, enquanto também facilita o compartilhamento da conexão com outros dispositivos dentro de sua rede doméstica ou empresarial.
 
### 2.Dados técnicos

Com o access point da Blu-Castle você pode interconectar redes sem fio, conseguindo uma conexão estável e segura entre a rede e o dispositivo de destino.

Frequências: 4G LTE: 2100 (B1) /1800 (B3) /2600 (B7) /700 (B28) MHz / 3G UMTS: 2100(B1) /850 (B5) MHz / 2G GSM: 850/900/1800/1900MHGz.

Capacidade de conectar até 32 dispositivo na rede Wi-fi e até 4 dispositivos via conector RJ45. Permite conectar até 2 antenas externas para melhorar o sinal de rede móvel.

### 3.Indicadores do modem MF286C

![Indicadores](https://i.imgur.com/2cd7IkA.png)


### 4.O painel traseiro

![Parte superior do modem Claro](https://i.imgur.com/o78vLA1.jpeg)

1. WPS: A função Wi-Fi é ligada/desligada através de uma breve pressão (menos de 3 segundos). A janela de associação WPS é ativada por uma longa pressão (por 5 segundos).
2. WLAN: Pressione para desligar / Ligar a função Wi-Fi.
3. Reset: Pressione para reiniciar o Box.
4. LAN1 a LAN4: Portas Ethernet para conectar por cabo os seus dispositivos como um PC e laptop.
5. Power 12V: Conecte a Fonte de Alimentação.
6. Botão ON/OFF: Pressione para ligar ou desligar o aparelho.
7. Slot do Simcard (cartão SIM).
8. Conectores das antenas externas. Conecte as antenas externas para ampliar o alcance de sua rede móvel.

![Parte superior](https://i.imgur.com/pY5BNZJ.jpeg)

### 5.Conectando Dispositivo no BOX 4G

A conexão do modem Claro ao NUC e a placa RMC deve seguir o esquema da figura abaixo.

![esquema de conexão do modem claro](https://i.imgur.com/3sjz3b7.png)


### 6.Acessando Interface WEB do usuário 

![Interface Web modem Claro](https://i.imgur.com/6TEhvM2.jpeg)

A Interface Web do Usuário (Web UI) permite que você configure o Box usando seu navegador da
web.

<b><u>Etapa 1.:</b></u> Certifique-se que o computador que você usa está conectado ao
Box através do cabo de rede Ethernet ou através da rede Wi-Fi.

<b><u>Etapa 2.:</b></u> Abra seu navegador da web e digite 192.168.0.1 no campo de
endereço web.

<b><u>Etapa 3.:</b></u> Uma tela de autenticação será exibida. Use o nome de usuário e
senha padrão impressos na etiqueta da parte traseira do Box.

<b><u>Etapa 4.:</b></u> A página de Interface Web do Usuário (Web UI) será exibida. Clique
nos ícones da barra superior para acessar as diferentes funções de
gerenciamento.

![Etapa 4](https://i.imgur.com/TmylwPK.jpeg)

### 7.Acessando Interface WEB do usuário 

Etapas:
1. Alterar senha / login
- Novo usuário
- Aplicar
- Nova senha
- Aplicar
- Senha de login
2. LTE desligar ( OFF )
3. Configurações avançadas
- Roteador
- Alterar o IP
- Alterar o range IP
- Aplicar
4. Configurações avançadas
5. LTE ligar ( ON )

![Configuração do Box](https://i.imgur.com/A5Chj3g.jpeg)


### 8.Acessando o endereço IPV4 no Windows

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

### 9.Acessando Interface WEB do usuário TCP/RMC

#### A Interface Web do Usuário TCP permite que você configure a RMC usando seu navegador da web.
 


<b><u>Etapa 1.:</b></u> Certifique-se que a RMC esteja conectada ao Box através do cabo
de rede Ethernet.

<b><u>Etapa 2.:</b></u> Abra seu navegador da web e digite 192.168.1.237 no campo de
endereço web.

<b><u>Etapa 3.:</b></u>A página de Interface Web do Usuário TCP será exibida.

<b><u>Etapa 5.:</b></u> Configuração da RMC via TCP.

![](https://i.imgur.com/xkOSsgH.jpeg)

### 10. Configuração do dispositivo remoto (RMC)

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
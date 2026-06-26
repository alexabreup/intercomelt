---
title: Configuração de Load Balance
description: Manual de Configuração do Load Balance utilizando modems Elsys Claro e Vivo.
sidebar:
  order: 7
---

[comment]: <> (Documentação online para o aplicativo Interface de Comando Eletromidia)
[comment]: <> (Criado por Alexandre de Abreu - alexandre.abreu@eletromidia.com.br)
[comment]: <> (Data : 26/06/2026)

:::tip[Visão Geral do Fluxo]
Este manual orienta a configuração de balanceamento de carga (Load Balance) integrando os modems das operadoras Claro e Vivo (Elsys).

1.  **Configuração dos Modems (Claro e Vivo):** Ajuste individual de IP e DHCP.
2.  **Configuração Inicial do Load Balance:** Conexão física, ajuste de IP, DHCP e LAN.
3.  **Reinicialização e Validação:** Aplicação física das alterações de IP.
4.  **Ajustes de Transmissão:** Desativação de funções conflitantes e teste de conectividade.
:::

### Resumo dos Endereços IP Configurados

| Equipamento | Endereço IP |
| :--- | :--- |
| **Load Balance** | `192.168.1.1` |
| **Modem Claro** | `192.168.1.10` |
| **Modem Vivo** | `192.168.1.20` |
| **Faixa DHCP** | `192.168.1.100` a `192.168.1.237` |

---

## Passo 1: Configuração dos Modems (Claro e Vivo)

> [!IMPORTANT]
> Este processo deve ser feito individualmente para cada modem **antes** de conectá-los fisicamente ao equipamento de Load Balance.

1.  **Desconexão:** Certifique-se de que os modems estão desconectados do Load Balance.
2.  **Conexão Direta:** Conecte o primeiro modem (Claro ou Vivo) diretamente à porta de rede do seu computador utilizando um cabo Ethernet.
3.  **Descubra o IP do Modem:**
    *   Aperte as teclas `Windows + R`, digite `cmd` e abra o Prompt de Comando.
    
        ![Executar Comando CMD](/assets/images/redes/imagem-1.png)
        *Caixa de diálogo Executar para abrir o Prompt de Comando (cmd)*

    *   No terminal, digite o comando `ipconfig` e pressione `Enter`.
    
        ![Comando ipconfig no CMD](/assets/images/redes/imagem-2.png)
        *Execução do comando ipconfig no terminal*

    *   Localize a linha **Gateway Padrão** e anote o IP listado (Ex: `192.168.1.1` ou `192.168.1.254`).
    
        ![Identificando o Gateway Padrão](/assets/images/redes/imagem-3.png)
        *Identificação do endereço de Gateway Padrão nas configurações do adaptador*

4.  **Acesse a Interface do Modem:**
    *   Abra o seu navegador de internet e digite o IP do *Gateway Padrão* anotado na barra de endereços.
    
        ![Interface do Modem Elsys](/assets/images/redes/imagem-3a.png)
        *Tela principal de status da interface do modem Elsys*

    *   Vá até o menu de **Configurações de Rede** → **Porta Ethernet**.
    
        ![Menu Porta Ethernet](/assets/images/redes/imagem-4.png)
        *Tela de configuração de Rede e Porta Ethernet do modem*

5.  **Altere o IP do Modem (LAN):** Modifique o endereço de IP principal de acordo com a operadora que está configurando agora:
    *   Se for o modem da **CLARO**: Altere o IP para `192.168.1.10`
    *   Se for o modem da **VIVO**: Altere o IP para `192.168.1.20`
6.  **Altere a Faixa do Servidor DHCP:** Na mesma tela de configurações de rede, ajuste o escopo de distribuição de IPs (DHCP Client):
    *   **IP Inicial (Starting/Start):** `192.168.1.100`
    *   **IP Final (Ending/End):** `192.168.1.237`
7.  **Salvar:** Clique em **Salvar / Aplicar** e aguarde o modem reiniciar.
8.  **Repetição:** Desconecte este modem, pegue o segundo modem e **repita os passos de 2 a 7**, aplicando o IP correspondente à outra operadora.

---

## Passo 2: Configuração Inicial do Load Balance

### Conexões Físicas

1.  Conecte os dois modems (já configurados nos IPs `.10` e `.20`) nas portas **WAN** do Load Balance.
2.  Conecte o seu computador via cabo de rede em uma das portas **LAN** do Load Balance.

> [!NOTE]
> Aguarde de 1 a 2 minutos para que o Load Balance inicie a comunicação. O LED identificado como **"SYS"** deve estar piscando antes de você prosseguir.

### Configuração de Sistema

3.  **Descubra o IP do Load Balance:**
    *   Abra o CMD e digite `ipconfig` para verificar o novo gateway, ou simplesmente verifique a etiqueta na parte traseira do aparelho. O IP padrão de fábrica costuma ser `192.168.0.1`.
    
        ![Etiqueta Traseira do Roteador](/assets/images/redes/imagem-5.png)
        *Etiqueta traseira do TP-Link ER605 indicando o IP padrão de fábrica (192.168.0.1)*

4.  **Acesso ao Sistema:**
    *   Digite o IP padrão do Load Balance no navegador.
    *   Na tela inicial, crie as credenciais padrão do sistema:
        *   **Usuário (User):** `admin`
        *   **Senha (Password):** `3l3m1d1@`
        
        ![Criação de Credenciais](/assets/images/redes/imagem-6.png)
        *Tela de configuração de novas credenciais de administrador*

5.  **Configuração da Rede LAN:**
    *   Após realizar o login, navegue pelo menu lateral até: **Network** → **LAN** → **Network List**.
    
        ![Network List da LAN](/assets/images/redes/imagem-7.png)
        *Lista de redes locais (Network List) no painel de controle*

    *   Clique no ícone de **Editar** (ícone do Lápis).
    *   Modifique as informações da LAN conforme os novos parâmetros:
        *   **IP Address (IP Principal):** `192.168.1.1`
        *   **DHCP Starting IP:** `192.168.1.100`
        *   **DHCP Ending IP:** `192.168.1.237`
        
        ![Configuração de IP e DHCP da LAN](/assets/images/redes/imagem-8.png)
        *Ajuste do endereço IP principal e da faixa de distribuição DHCP da LAN*

    *   Clique em **Save** e confirme clicando em **OK**.
    
        ![Botoes de Salvar e OK](/assets/images/redes/imagem-9a.png)
        *Clique no botão Save*
        
        ![Confirmando Modificação](/assets/images/redes/imagem-9b.png)
        *Confirmação da alteração clicando em OK*

---

## Passo 3: Reinicialização e Validação do IP

> [!WARNING]
> Logo após salvar, o Load Balance aplicará um reset interno e a página do navegador perderá a conexão. Não mexa no equipamento imediatamente.

1.  Aguarde de **3 a 5 minutos** para o processamento interno da alteração.
2.  **Reinicialização Física:** Desconecte a fonte de alimentação do Load Balance da tomada, aguarde 10 segundos e ligue-o novamente.
3.  Aguarde o equipamento restabelecer por completo (verifique novamente o **LED SYS** piscando).
4.  **Validação:**
    *   Abra o CMD no seu computador e digite `ipconfig`.
    *   Verifique se o **Gateway Padrão** agora mudou com sucesso para `192.168.1.1`.
    
        ![Validação do Gateway no CMD](/assets/images/redes/imagem-10.png)
        *Verificação do IP do Gateway Padrão alterado para 192.168.1.1*

    *   Abra o navegador e digite o novo IP `192.168.1.1` para acessar a interface do Load Balance.

---

## Passo 4: Ajustes de Transmissão e Testes Finais

1.  Faça login na interface do Load Balance pelo novo IP (`192.168.1.1`).
2.  **Ajuste de Balanceamento:**
    *   Navegue no menu até: **Transmission** → **Load Balance** → **Basic Settings**.
    
        ![Acesso às Configurações de Balanceamento](/assets/images/redes/imagem-11.png)
        *Acesso ao menu de Transmission e Load Balance*

    *   Desmarque / Desabilite as opções de Load Balance básico (como *"Enable Application Optimized Routing"* e *"Enable Bandwidth Based Balance Routing"*).
    
        ![Desabilitando Load Balance Básico](/assets/images/redes/imagem-12.png)
        *Desativação das opções padrão de balanceamento de roteamento*

    *   Clique em **Save**. Se o sistema solicitar um novo reinício, confirme.

### Teste de Conectividade da Rede

Abra novas abas no seu navegador e certifique-se de que consegue acessar a tela de login de todos os 3 dispositivos simultaneamente a partir da mesma rede:

*   **Interface Load Balance:** `192.168.1.1`
*   **Modem Claro:** `192.168.1.10`
*   **Modem Vivo:** `192.168.1.20`


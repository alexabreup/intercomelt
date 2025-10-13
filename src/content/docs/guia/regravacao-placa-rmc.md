---
title: Regravação da Placa RMC
description: Procedimento para regravação e atualização da placa RMC

sidebar:
  order: 6
---

[comment]: <> (Documentação online para o aplicativo Interface de Comando Eletromidia)
[comment]: <> (Criado por Alexandre de Abreu - alexandre.abreu@eletromidia.com.br)
[comment]: <> (Data : 13/10/2025)

:::tip[Importante]
Antes de iniciar o processo de regravação da placa RMC, certifique-se de que todos os equipamentos estejam desligados e que você tenha os arquivos de firmware corretos. Este procedimento deve ser realizado com cuidado para evitar danos à placa.

<i>Equipe do Departamento de Hardware Eletromidia.
São Paulo, SP - 13/10/2025</i>
:::

## O que é a Placa RMC

A placa RMC (Remote Management Controller) é o componente responsável pelo controle e monitoramento dos dispositivos no MUB. Ela gerencia as funções de:

- Controle de temperatura
- Monitoramento de sensores
- Comunicação com dispositivos externos
- Gerenciamento de energia
- Interface de rede

## Quando é necessário regravar a placa RMC

A regravação da placa RMC pode ser necessária nas seguintes situações:

- **Atualização de firmware**: Para implementar novas funcionalidades ou correções
- **Falha de software**: Quando a placa apresenta comportamento anômalo
- **Corrupção de dados**: Perda de configurações ou dados corrompidos
- **Substituição da placa**: Instalação de nova placa RMC

# Reinstalação do Firmware da RMC

## Visão Geral

Este guia descreve o procedimento completo para reinstalação do firmware da placa RMC utilizando o gravador ST-LINK V2 e o software STM32CubeProgrammer. O processo envolve a conexão física do gravador à placa, apagamento do firmware anterior e gravação dos novos arquivos de sistema.

## Equipamentos Necessários

![Placa RMC e ST-Link V2](/assets/images/placa-rmc-e-stlink-v2.jpeg)
_Placa RMC e gravador ST-Link V2 utilizados no processo de regravação_

- Gravador ST-LINK V2 para STM8/STM32 MCU
- Placa RMC
- Computador com STM32CubeProgrammer instalado
- Pendrive USB vazio (formatado)
- Cabos de conexão (jumpers)

## Arquivos Necessários

- ZGS126_PRO.jflash
- zgs126_boot_app.bin
- Firmware RMC V-1.30
- Arquivo JSON ZGS126 Ethernet

## Procedimento de Gravação

### Etapa 1: Conexão Física do ST-LINK V2

A conexão entre o gravador ST-LINK V2 e a placa RMC deve ser realizada com atenção especial à ordem dos pinos. Uma conexão incorreta pode danificar os componentes.

**Pinagem do ST-LINK V2:**

- Pino 2: SWCLK (Clock)
- Pino 4: SWDIO (Data)
- Pino 6: GND (Terra)
- Pino 8: 3.3V (Alimentação)

**Pinagem da Placa RMC:**

- Pino 1: 3.3V
- Pino 2: DIO (SWDIO)
- Pino 3: CLK (SWCLK)
- Pino 4: GND

**Esquema de Conexão:**

```
ST-LINK V2          Placa RMC
Pino 8 (3.3V)   →   Pino 1 (3.3V)
Pino 4 (SWDIO)  →   Pino 2 (DIO)
Pino 2 (SWCLK)  →   Pino 3 (CLK)
Pino 6 (GND)    →   Pino 4 (GND)
```

**Observações importantes:**

- Verifique a continuidade das conexões antes de energizar
- Não inverta a polaridade da alimentação (3.3V e GND)
- Certifique-se de que os contatos estão firmes e sem oxidação

### Etapa 2: Apagamento do Firmware Anterior

1. Conecte o ST-LINK V2 ao computador via USB
2. Abra o software STM32CubeProgrammer
3. Na interface principal, selecione a opção de conexão "ST-LINK"
4. Clique em "Connect" para estabelecer comunicação com a placa RMC
5. Após a conexão bem-sucedida, localize a opção "Full Chip Erase"

![Full Chip Erase](/assets/images/full-chip-erase.jpeg)
_Localização da opção "Full Chip Erase" no STM32CubeProgrammer_

6. Execute o apagamento completo clicando em "Full Chip Erase"
7. Aguarde a conclusão do processo (a barra de progresso indicará o status)

![Mass Erase Achieved](/assets/images/mass-erase-achieved.jpeg)
_Confirmação de que o apagamento da memória foi concluído com sucesso_

**Indicadores de sucesso:**

- Mensagem de confirmação no log do programa
- Status "Erase completed successfully" ou similar

### Etapa 3: Gravação dos Arquivos de Sistema

#### 3.1 Gravação do ZGS126_PRO.jflash

1. No STM32CubeProgrammer, acesse o menu "Memory and File Editing"
2. Clique no ícone de adição (+) ou "Open File"
3. Navegue até o arquivo **ZGS126_PRO.jflash** e selecione-o
4. Verifique se o endereço de memória está correto (geralmente 0x08000000)
5. Clique no botão "Download" para iniciar a gravação
6. Aguarde a conclusão do processo

![ZGS126 PRO JFlash](/assets/images/zgs126-pro-jflash.jpeg)
_Interface do STM32CubeProgrammer durante a gravação do arquivo ZGS126_PRO.jflash_

#### 3.2 Gravação do zgs126_boot_app.bin

1. Repita o processo anterior para o arquivo **zgs126_boot_app.bin**
2. Clique no ícone de adição (+) ou "Open File"
3. Selecione o arquivo **zgs126_boot_app.bin**
4. Verifique o endereço de memória
5. Clique no botão "Download"
6. Aguarde a conclusão

![ZGS126 Boot App Bin](/assets/images/zgs126_boot_app-bin.jpeg)
_Interface do STM32CubeProgrammer durante a gravação do arquivo zgs126_boot_app.bin_

**Importante:** Estes dois arquivos habilitam o sistema de atualização de firmware via USB da placa RMC. Sem eles, atualizações futuras não serão possíveis.

### Etapa 4: Gravação do Firmware Principal

1. Desconecte o ST-LINK V2 da placa RMC
2. Prepare um pendrive USB completamente vazio (formato FAT32 recomendado)
3. Copie o arquivo **Firmware RMC V-1.30** para a raiz do pendrive
4. Conecte o pendrive na porta USB da placa RMC
5. Energize a placa RMC
6. O processo de atualização iniciará automaticamente
7. Aguarde a conclusão (LEDs indicadores podem piscar durante o processo)
8. Após a conclusão, remova o pendrive

### Etapa 5: Configuração Final via JSON

1. Utilize novamente um pendrive USB vazio
2. Copie o arquivo **JSON ZGS126 Ethernet** para a raiz do pendrive
3. Conecte o pendrive na porta USB da placa RMC
4. A placa carregará as configurações de rede automaticamente
5. Remova o pendrive após a conclusão

## Verificação do Processo

Após a conclusão de todas as etapas, a placa RMC deve:

- Inicializar normalmente
- Responder aos comandos de rede
- Apresentar comportamento estável sem travamentos

## Solução de Problemas

**Problema: STM32CubeProgrammer não detecta o ST-LINK V2**

- Verifique se os drivers do ST-LINK estão instalados
- Teste o cabo USB em outra porta
- Verifique se outro software está usando o gravador

**Problema: Erro durante a gravação**

- Confirme as conexões físicas entre ST-LINK V2 e placa RMC
- Verifique se a placa está sendo alimentada corretamente (3.3V)
- Execute novamente o "Full Chip Erase" antes de tentar gravar

**Problema: Placa não inicializa após gravação**

- Repita todo o processo desde a Etapa 2
- Verifique a integridade dos arquivos de firmware
- Teste com outra placa RMC para descartar falha de hardware

## Referências

- STM32CubeProgrammer: Software oficial da STMicroelectronics
- ST-LINK V2: Gravador compatível com microcontroladores STM32
- Firmware RMC: Sistema operacional da placa de controle

---

**Nota:** Este procedimento deve ser realizado por pessoal técnico qualificado. A manipulação incorreta pode resultar em danos permanentes à placa RMC.

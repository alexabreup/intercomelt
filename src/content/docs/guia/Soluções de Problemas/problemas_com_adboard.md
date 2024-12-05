---
title: Problemas com a atualização da placa ADBoard
description: Processo de downgrade e atualização da placa ADBoard

sidebar:
    order: 1

---

### Processo para limpar o firmware da versão e realizar o processo de instalação da versão antiga (Downgrade), para depois realizar a atualização do firmware na placa ADBoard

## Introdução
- **Praças**: Salvador e Recife.  
- **Observação**: As placas nessas praças operam com a versão **v.49** do firmware para suportar luminosidade de 3500 nits.

### Versões do Firmware:
- **v.49**: Suporta luminosidade de até 3500 nits.  
- **v.51**: Suporta luminosidade de até 3000 nits.

---

## Etapa 1: Downgrade para a Versão v.49

### 1. Confirme a versão instalada:
- Utilize o programa **TCP Server** para verificar a versão atual do firmware na placa ADBoard.

### 2. Abra o RTD Customer Tool v.3.4:
- Conecte-se à ADBoard.

### 3. Limpe o firmware atual:
- Clique no botão **Erase** para apagar o firmware instalado.

![Limpe o firmware atual](https://i.imgur.com/kAHaSGb.png)


### 4. Desconecte o cabo da ventoinha:
- Após limpar o firmware, desconecte o cabo de comunicação da Fan com a ADBoard.

### 5. Atualize para a versão v.49:
- Selecione a versão **v.49** no RTD Tool.
![Atualize a versão 49](https://i.imgur.com/oCa5ctT.png)
- Clique em **Flash** e aguarde (~1 minuto e 30 segundos) até o processo ser concluído.
- Verifique se o texto **"O.K."** aparece, indicando sucesso.



![Texto O.K. aponta o sucesso na atualização](https://i.imgur.com/bmYdk1A.png)

### 6. Reconecte o cabo da ventoinha:
- Reinstale o cabo de comunicação da Fan.

### 7. Teste a configuração:
- Abra o programa **TCP Server**.
- Conecte-se à placa RMC e confirme que a ADBoard está configurada com a versão **v.49**.

![Teste a configuração no TCP server](https://i.imgur.com/NnyzGZy.png)
---

## Etapa 2: Atualização para a Versão v.51

### 1. Desconecte o cabo da ventoinha:
- Remova novamente o cabo de comunicação da Fan com a ADBoard.

### 2. Selecione a versão v.51 no RTD Tool:
- Abra o RTD Tool, escolha a versão **v.51** e clique em **Flash**.
- Aguarde até o texto **"O.K."** aparecer.

### 3. Reconecte o cabo da ventoinha:
- Reinstale o cabo de comunicação da Fan.

### 4. Reinicie o sistema:
- Desligue e ligue novamente a placa RMC para reiniciar o funcionamento.

### 5. Verifique a configuração:
- Utilize o programa **TCP Server** para confirmar que a versão **v.51** foi instalada corretamente.

![Verificação no TCP Server da versão v.51 da ADBoard](https://i.imgur.com/5hzjsIs.png)

---

### Notas Importantes
- **Conexões**: Sempre verifique as conexões físicas antes de iniciar os processos.  
- **Erros de Firmware**: Caso a instalação falhe, repita o processo desde a etapa inicial.  
- **Backup**: Certifique-se de ter backups das configurações originais antes de qualquer alteração.

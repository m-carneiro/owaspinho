# Code Review

Dada a aplicação em Node.js no arquivo zip anexo, de antemão adiantamos que ela possui as seguintes vulnerabilidades abaixo, e para cada uma delas mostramos o payload de exploração no README.md:

- Reflected Cross-Site Script
- SQL Injection
- Command Injection

A aplicação possui alguns outros riscos, se puder, identifique-os e inclua pelo menos mais uma vulnerabilidade adicional no relatório mencionado abaixo.

## O que esperamos nesta avaliação:

1. **Um relatório de análise da aplicação contendo os seguintes itens para cada vulnerabilidade (Formato PDF):**

1. 1. Título da Vulnerabilidade (Ex.: Cross Site Scripting)
   2. CVSSv3 Score / Criticidade (Considere que a aplicação estaria acessível pela Internet)
   3. CWE(s) associados (Ex: CWE-79)
   4. Descrição da Vulnerabilidade
   5. Impacto
   6. Evidências  (Mencione arquivo, linha ou bloco de linhas. Se preferir, coloque prints da exploração.)
   7. Mitigação (Quais alterações no código você recomendaria e quais mudanças de processos você mencionaria para que esse erro não ocorre novamente?)
   8. Referências (Fique à vontade para citar referência de como testar ou corrigir. Ex: Owasp ASVS, Owasp WSTG, Owasp Cheat Sheet Series…etc)

1. **Prepare uma versão corrigida da aplicação.**
2. **Grave um vídeo com a análise de cada vulnerabilidade encontrada:**

1. 1. Qual é a vulnerabilidade?
   2. Que tipo de ameaça ela traz a aplicação?
   3. Onde está o problema no código?
   4. Quais alterações devem ser feitas?
   5. Por que considera essa forma de correção a mais eficiente?

 

## Envio do material produzido para análise:

- Ao finalizar e revisar as vulnerabilidades identificadas, compacte o material em um arquivo zip com o nome **NomeSobrenome**_AppSecVia.zip*. 
- Utilize a plataforma que preferir para compartilhar, Mega.nz, WeTransfer, OneDrive, Google Drive, etc. 
- Por fim, responda esse e-mail com o link do compartilhamento arquivo **NomeSobrenome**_AppSecVia.zip* e a senha (caso esteja protegido).

 

## Requisitos

- Docker Desktop para inicializar do ambiente.
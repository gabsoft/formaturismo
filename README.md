# Forma Turismo Challenge
Este repositorio esta divido em:
- FrontEnd Desenvolvido em Angular 7
- Executar `npm install` e `ng serve --open` na raiz da pasta frontend para inicia-lo

- Backend Desenvolvido apenas com um Json:server para dados mockados
- Executar `npm install` e `npm run json:server` na raiz da pasta backend para inicia-lo
- Deve ser executado na porta 3000

- Wordpress Desenvolvido utilizando XAMPP
- Deve ser executado na porta 8080
- Para funcionamento do envio de e-mail necessario configurar os arquivos, caso utilizar xampp

`C:\xampp\php\php.ini`
##    (Adicionar)
  - ini_set("SMTP","ssl://smtp.gmail.com");
  - ini_set("smtp_port","465");
  
##  (Alterar)
  - SMTP=smtp.gmail.com
  - smtp_port=587
  - sendmail_from = my-gmail-id@gmail.com
  - sendmail_path = "\"C:\xampp\sendmail\sendmail.exe\" -t"
  
`c:\xampp\sendmail\sendmail.ini`
  (Limpar todo o conteudo)
  - smtp_server=smtp.gmail.com
  - smtp_port=587
  - error_logfile=error.log
  - debug_logfile=debug.log
  - auth_username=my-gmail-id@gmail.com
  - auth_password=my-gmail-password
  - force_sender=my-gmail-id@gmail.com

App desenvolido para desktops  e  mobile(iphone 6/7/8)

  

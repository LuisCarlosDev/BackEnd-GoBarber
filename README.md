# Recuperaçã de senha
**RF**   <!-- Requisitos funcionais -->

- O usuário deve poder recuperar sua senha informando o seu e-mail;
- O usuário deve poder receber um e-mail con instruções de recuperação de senha;
- O usuário deve poder resetar sua senha;

**RNF**  <!-- Requisitos não funcionais -->

- Utilizar Mailtrap para testar envios em ambiente de dev;
- Utilizar Amazon SES para envios em produção;
- O envio de e-mails deve acontecer em segundo plano (background job);

**RN**   <!-- Regras de négocio -->

- O link enviado por email para resetar senha, deve expirar em 15min;
- O usuário precisa confirmar a nova senha ao resetar sua senha;

# Atualização do perfil

**RF**

- O usuário deve poder atualizar seu nome, email, senha;

**RN**

- O usuário não pode alterar seu email para um email já utilizado;
- Para atualizar sua senha, o usuário deve informar a senha antiga;
- Para atualizar sua senha, o uauário precisa confirmar a nova senha;

# Painel do Prestador

**RF**

- O usuário deve poder listar seus agendamentos de um dia especifico;
- O prestador deve receber uma notificação sempre que houver um novo agendamento;
- O prestador deve poder visualizar as notificações não lidas;

**RNF**

- Os agendamentos do prestador no dia devem ser armazenados em cache;
- As notificações do prestador devem ser armazenadas no  MongoDB;
- As notificações do prestador devem ser enviadas em tempo-real utilizando Socket.io;

**RN**

- A notificação deve ter um  status de lida ou não-lida apara que o prestador passa controlar;

# Agendamento de serviços

**RF**

- O usuário deve poder listar todos prestadores de serviço cadastrados;
- O usuário deve poder listar os od dias de um mês com pelo menos um horário disponível de um prestador;
- O usuário deve poder horários disponíveis em um dia específico de um prestador;
- O usuário deve poder realizar um novo agendamento com um prestador;

**RNF**

- A listagem de prestadores deve ser armazenada em cache;

**RN**

- cada agendamento deve durar 1hr exatamente;
- Os agendamentos devem estar disponiveis entre 8h às 18h (primeiro às 8h, último às 20h);
- O usuário não pode agendar em um horário já ocupado;
- O usuário não pode agendar em um horário que já passou;
- O usuário não pode agendar serviçoes consigo mesmo;

FROM mysql:5.7
# Adicionando os scripts SQL para serem executados na criação do banco
COPY ./CreateDatabase.sql /docker-entrypoint-initdb.d/CreateDatabase.sql

# A imagem mysql:5.7 possui o padrão de executar todos os scripts SQL de dentro da pasta docker-entrypoint-initdb.d ao iniciar o container, por isso, caso seja necessário construir e configurar o banco de dados, utilize essa etapa para isso.
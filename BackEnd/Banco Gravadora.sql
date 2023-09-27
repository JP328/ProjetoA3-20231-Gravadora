create database db_gravadora;

use db_gravadora;

create table tb_usuario(
nomeCompleto varchar(200) not null,
genero varchar(200) not null,
dataDeNascimento varchar(200) not null,
email varchar(200) not null,
senha varchar(200) not null,
cep varchar(200) not null not null,
linksPortifolio varchar(600) not null,
descricao varchar(300) not null,
banda varchar(200),
habilidades varchar(200) not null,
termoDeUso boolean not null,
idUsuario bigint primary key auto_increment
);

insert into tb_usuario set nomeCompleto="Nicolas Wender", genero="Masculino", dataDeNascimento=240609, email="nicolas@email.com", senha="123", cep="000001111", linksPortifolio="link1", descricao="Ótima baterista", banda="Os maias", habilidades="Tocar bateria", termoDeUso=true;

insert into tb_usuario(nomeCompleto, genero, dataDeNascimento, email, senha, cep, linksPortifolio, descricao, banda, habilidades, termoDeUso) values 
("João Maia","Masculino", "25052023", "maia@email.com", "123", "444445555","www.portifolio.com","Cantor profissional","Os maias","Cantar",true);

insert into tb_usuario(nomeCompleto, genero, dataDeNascimento, email, cep, linkPortifolio, descricao, banda, habilidades, termoDeUso) values 
("Caio Ryan","Masculino", "24052023", "prado@email.com","444445556","www.portifolio.com","Cantor mais que profissional","Os maias","Dançar", true);

select * from tb_usuario where email = "maia@email.com" and senha = "123";

drop table tb_usuario;

update tb_usuario set nomeCompleto="Caio Ryan Prado Sobral" where idUsuario = 3;

select * from tb_usuario where idUsuario = 1;

select nomeCompleto, genero, dataDeNascimento, email, cep, linkPortifolio, descricao, banda, habilidades from tb_usuario where idUsuario = 1;

delete from tb_usuario where idUsuario = 2;

create table tb_adm(
idAdm int primary key auto_increment,
email varchar(200) not null,
dataDeNascimento int not null,
senha varchar(200) not null
);

insert into tb_adm(email, dataDeNascimento, senha) values ("adm@email.com","02092003","12345");

select * from tb_adm;

select * from tb_usuario;


SELECT *
FROM tb_usuario
INNER JOIN tb_adm
ON tb_usuario.email = tb_adm.email;


/*
tb_usuario
	nome
    email
    perfil (adm, talento)
*/



create table tb_feedback(
idFeedback int primary key auto_increment,
nome varchar(200) not null,
feedback varchar(400) not null,
idUsuario varchar(100) not null
);

insert into tb_feedback(nome, feedback, idUsuario) values ("Caio","Teste", "1");

insert into tb_feedback(nome, feedback, idUsuario) values ("Caio","Teste2", "1");

select * from tb_feedback;

select * from feedback where idFeedback = 1;

drop table feedback;

drop table adm;

drop table tb_usuario;
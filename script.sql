create table usuarios(
	id_usuario serial not null,
	nome character varying(100) not null,
	username character varying(16) not null,
	nascimento date not null,
	senha character varying(16) not null,
	primary key(id_usuario)
);

create table pedidos(
	id_pedido serial not null,
	nome_destinatario character varying(100) not null,
	telefone_destinatario character varying(14) not null,
	observacoes character varying(400) not null,
	data_pedido date not null,
	nome_entregador character varying(100) not null,
	status_pedido numeric(1,0) not null,
	preco_pedido numeric not null,
	primary key(id_pedido), 
	
);

create table itens_pedido(
	id_item_pedido serial not null,
	nome_item character varying(50) not null,
	quantidade_item integer not null,
	preco_item numeric(10,2) not null,
	id_pedido int not null,
	primary key(id_item_pedido),
	foreign key(id_pedido) references pedidos(id_pedido)
);

create table endereco_pedido(
	id_endereco_pedido serial not null,
	logradouro character varying(50) not null,
	numero_logradouro int not null,
	bairro character varying(50) not null,
	complemento character varying(100) not null,
	primary key(id_endereco_pedido),
	foreign key(id_pedido) references pedidos(id_pedido)
);
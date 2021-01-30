const pool = require("../db");

let User = function(data) {
    this.data = data
    this.errors = []
}

User.prototype.create = function() {
    console.log('Nome completo: ' + this.data.nome);
    console.log('Username: ' + this.data.username);
    console.log('Data de Nascimento: ' + this.data.nascimento);
    console.log('Senha: ' + this.data.password);

    const query = 'INSERT INTO usuarios(nome, username, nascimento, password) values($1, $2, $3, $4)'
    const values = [this.data.nome, this.data.username, this.data.nascimento, this.data.password]
    pool.query(query, values, (error, results) => {
        if (error) {
            throw error
        }
        console.log("Usuário inserido com sucesso!");
    })
}

module.exports = User
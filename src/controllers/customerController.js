const controller = {};

controller.list = (req, res) => {
    //conectando a mysql
    req.getConnection((err, conn) => {
        conn.query('select * from customer', (err, customers) => {
            if (err) {
                res.json(err);
            }
            console.log(customers);
            //renderizando en una vista q se llama customer
            res.render('customer', {
                data: customers
            });
        });
    });
};


controller.save = (req, res) => {
    // console.log(req.body);
    const data = req.body;
    req.getConnection((error, conn) => {
        conn.query('insert into customer set ?', [data], (error, customer) => {
            res.redirect('/');
        });
    });
};

//obtengo los datos del cliente a eliminar
controller.edit = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, conn) => {
        conn.query("SELECT * FROM customer WHERE id = ?", [id], (err, customer) => {
            res.render('customers_edit', {
                data: customer[0]
            })
        });
    });
};
//actualizo los datos del cliente
controller.update = (req, res) => {
    const { id } = req.params;
    const newCustomer = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE customer set ? where id = ?', [newCustomer, id], (err, rows) => {
            res.redirect('/');
        });
    });
};

controller.delete = (req, res) => {
    const { id } = req.params;//obteniendo el id
    req.getConnection((err, connection) => {
        connection.query('DELETE FROM customer WHERE id = ?', [id], (err, rows) => {
            res.redirect('/');
        });
    });
}

module.exports = controller;
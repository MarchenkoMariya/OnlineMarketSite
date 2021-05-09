let add = (cart, req) => {

    cart.push(req.body);

    return JSON.stringify(cart, null, 4);

};

let change = (cart, req) => {

    let find = cart.find(el => el.id === req.body.id);

    find.quantity = req.body.quantity;

    let newData = cart;

    if (find.quantity < 1){

        newData = remove(cart, find.id);
    }

    return JSON.stringify(newData, null, 4);

};

let remove = (cart, id) =>{
    return cart.filter(function(emp) {
        if (emp.id == id) {
            return false;
        }
        return true;
    });
}

module.exports = {
    add,
    change,
};
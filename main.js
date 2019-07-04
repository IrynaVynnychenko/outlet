document.addEventListener("DOMContentLoaded", () => {
    function Shop(shops, category, amount) {
        this.category = category;
        this.amount = amount;
        this.shops = shops;

        let sum = document.querySelector('input');
        let order = document.querySelector('.order');
        let buttonPlus = document.querySelector('.plus');
        let buttonMinus = document.querySelector('.minus');
        let dropdown = document.querySelector('select');
        let ourShops = document.querySelector('thead tr');
        let left = document.querySelector('tbody tr');
        let self = this;

        for (let i = 0; i < shops.length; i++) {
            let a = document.createElement('td');
            a.innerHTML = shops[i];
            ourShops.appendChild(a);
        }

        for (let i = 0; i < shops.length; i++) {
            let b = document.createElement('td');
            b.innerHTML = amount[i];
            left.appendChild(b);
        }

        for (let i = 0; i < shops.length; i++) {
            let c = document.createElement('option');
            c.innerHTML = category[i];
            dropdown.appendChild(c);
        }

        buttonPlus.addEventListener('click', function() {
            let shopBalance = document.querySelectorAll('tbody td')
            for (let i = 0; i < category.length; i++) {
                if (dropdown.value === category[i]) {
                    amount[i] = +sum.value + +amount[i];
                    if (amount[i] < 10) {
                        alert('Срочно заказывать товар');
                        order.innerHTML = 10 - +amount[i];
                        shopBalance[i].innerHTML = +shopBalance[i].innerHTML + +sum.value;
                    } else if (amount[i] >= 10) {
                        order.innerHTML = '';
                        alert('Не торопись заказывать товар');
                        shopBalance[i].innerHTML = +shopBalance[i].innerHTML + +sum.value;
                    }


                }
            }

        });

        buttonMinus.addEventListener('click', function() {
            let shopBalance = document.querySelectorAll('tbody td')
            for (let i = 0; i < category.length; i++) {
                if (dropdown.value === category[i]) {
                    amount[i] = +amount[i] - +sum.value;
                    if (amount[i] < 10) {
                        alert('Срочно заказывать товар');
                        order.innerHTML = 10 - +amount[i];
                        shopBalance[i].innerHTML = +shopBalance[i].innerHTML - +sum.value;
                    } else if (amount[i] >= 10) {
                        order.innerHTML = '';
                        alert('Не торопись заказывать товар');
                        shopBalance[i].innerHTML = +shopBalance[i].innerHTML - +sum.value;
                    }
                }
            }

        });
    }
    let silpo = new Shop(['Silpo', 'Kosmo', 'Foxtrot'], ['products', 'chemical', 'technikals'], [6, 3, 5]); // создаем новый экземпляр конструктора person, можем со скобочками, можем без ()
    console.log(silpo);
});

// гетеры - читают 
// сетеры - меняют

//e.preventDefault(); - пишем в форме, что бы небыло перезагрузки страницы при заполнении формы
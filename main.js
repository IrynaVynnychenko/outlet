document.addEventListener("DOMContentLoaded", () => {
    function Shop(category, goods, amount) {
        this.department = 6;
        this.owners = 2;
        this.basket = 1;
        this.category = category;
        this.goods = goods;
        this.specialize = function() {
            return this.category + ' ' + this.goods
        };

        let _amount = [amount];
        this.getAmount = function() {
            console.log(_amount);
        };
        this.setAmount = function(a) {
            _amount.push(a);
        }

        const self = this;

        this.obj = {
            a: 7,
            b: function() {
                console.log(self.goods);
            }
        }
    }
    let paragraph1 = document.querySelector('.first');
    let silpo = new Shop('products', 'milk', 10); // создаем новый экземпляр конструктора person, можем со скобочками, можем без ()
    console.log(silpo);
    let chuckcha = silpo.specialize();
    console.log(chuckcha);
    silpo.obj.b();
    silpo.setAmount(5);
    silpo.getAmount();

    paragraph1.innerHTML = silpo.specialize();

    let paragraph = document.querySelector('.second');
    let foxtrot = new Shop('technique', 'blenders', 5);
    console.log(foxtrot);

    paragraph.innerHTML = foxtrot.specialize();

    foxtrot.obj.b();
    foxtrot.setAmount(15);
    foxtrot.getAmount();
});

// гетеры - читают 
// сетеры - меняют
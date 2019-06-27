var botomobil = document.getElementById("botomenumobil");
var menumobil = document.getElementById("menumobil");

var app = new Vue ({

    el: '#app',
    data () {

        return {
            nom: '',
            preu: '',
            imatge: '',
            i: 0,
            j: 10,
            productes: [],
            quantitat: 1
        }  

    },

    mounted() {
        axios.get('http://localhost:3000/productes')
        .then(result => (this.productes = result.data))
    },

    methods: {
        
        show: function (producte) {

            this.nom = producte.nom
            this.preu = producte.preu
            this.imatge = producte.imatge
            this.id = producte.id
            var modal1 = document.getElementById("modal1");
            modal1.style.display = "block"
        },

        close: function () {

            modal1.style.display = "none";

            this.quantitat = 1;

        },

        comprar: function (id) {

            var quantitat = this.quantitat;
            var productes = this.productes;

            var articles = document.getElementById("numeroarticles").innerHTML;
            articles = parseFloat(articles);

            articles = parseFloat(articles) + parseFloat(quantitat);
            document.getElementById("numeroarticles").innerHTML = articles + " items";
            document.getElementById("numeroarticlesmobil").innerHTML = articles + " items";

            var preuinicial = document.getElementById("dinerstotals").innerHTML;
            preuinicial = parseFloat(preuinicial);

            var preu =  parseFloat(productes[id-1].preu) + parseFloat(preuinicial);
            var preutotal = parseFloat(preu) * parseFloat(quantitat);

            preutotal = Math.round(preutotal * 100) /100;
            document.getElementById("dinerstotals").innerHTML = preutotal + "€";
            document.getElementById("dinerstotalsmobil").innerHTML = preutotal + "€";

            this.close();

        },

        slide: function (i, j) {

            this.i = i;
            this.j = j;

        }

    },

})

botomobil.onclick = function() {

    menumobil.classList.toggle("show");

}

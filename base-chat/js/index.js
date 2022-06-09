var input = document.getElementById("msg");
input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        enviarMSG();
    }
});
//CONTENT DELIVERY NETWORK - CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getDatabase, ref, set, push, remove, onValue } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-database.js";

var firebaseConfig = {
    apiKey: "AIzaSyC7XYJp2g2OedBAM360JGwWn6SPNYIpajs",
    authDomain: "chat-prates-baltazar.firebaseapp.com",
    projectId: "chat-prates-baltazar",
    storageBucket: "chat-prates-baltazar.appspot.com",
    messagingSenderId: "739330437586",
    appId: "1:739330437586:web:079c7142885cede95d980b",
    measurementId: "G-DNPLMZPK2F"

};

const app = initializeApp(firebaseConfig);

var db = getDatabase(app);
const dbRef = ref(db, 'exemplo');
const dbTurma2 = ref(db, 'chat');


var meuhtml = "";

var nomeUsuario = prompt("Digite seu nome");

onValue(dbRef, (snapshot) => {
    const data = snapshot.val();
    console.log(data);
    meuhtml = "";
    snapshot.forEach(function (childSnapshot) {
        var key = childSnapshot.key;
        console.log(key);
        console.log(childSnapshot.val().nome);
        console.log(childSnapshot.val().mensagem);

        meuhtml += '<div class="msg"><b>' + childSnapshot.val().nome +  '</i></b><span>' + childSnapshot.val().mensagem + '</span></div>';

    });
    atualizarHTML();
});

function enviarMSG() {

    var datahj = new Date();
    var hora = datahj.getHours() + ":" + datahj.getMinutes() + ":" + datahj.getSeconds()

    push(ref(db, 'exemplo'), {
        nome: nomeUsuario,
        horario: hora,
        data: datahj,
        mensagem: document.getElementById("msg").value
    });
    
    push(ref(db, 'chat'), {
        nome: nomeUsuario,
        horario: hora,
        data: datahj,
        mensagem: document.getElementById("msg").value
    });

    document.getElementById("msg").value = "";
}

function atualizarHTML() {
    document.getElementById("conteudo").innerHTML = meuhtml
    ajustarScroll();
}

function ajustarScroll() {
    console.log("corrirgir scroll");
    var divConteudo = document.getElementById("conteudo");
    divConteudo.scrollTop = divConteudo.scrollHeight;
}               
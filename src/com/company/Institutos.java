package com.company;

import java.util.ArrayList;

public class Institutos {

    ArrayList<Disciplinas> disciplinas = new ArrayList<>();
    public String nome;


    public Institutos(String nome){
        this.nome = nome;
    }

    public Institutos(){

    }
    void adcionarDisciplinas(Disciplinas disciplina){
        disciplinas.add(disciplina);
    }

    public String getNome() {
        return nome;
    }


}

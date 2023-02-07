package com.company;

import java.util.ArrayList;

public class Universidade {

    ArrayList<Institutos> institutos = new ArrayList<>();
    public String nome;

    public Universidade(String nome){
        this.nome = nome;
    }
    void adicionarInstitutos(Institutos instituto){
        institutos.add(instituto);
    }
    public ArrayList<Institutos> getInstitutos() {
        return institutos;
    }

}

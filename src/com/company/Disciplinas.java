package com.company;

import java.util.ArrayList;

public class Disciplinas {
    public String nome;
    ArrayList<Aluno> alunos = new ArrayList<>();
    Professor professor;
    Monitor monitor;
    Aluno aluno;

    public Disciplinas(String nome, Professor professor, Monitor monitor){
        this.nome = nome;
    }

    public Disciplinas(String nome){
        this.nome = nome;
    }

}

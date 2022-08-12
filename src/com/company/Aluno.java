package com.company;

import java.lang.reflect.Array;
import java.util.ArrayList;

public class    Aluno extends Discente{
    ArrayList<Double> provas = new ArrayList<Double>();
    public double nota;
    public int presenca;
    public double media;
    public int ano;
    public boolean Status;


    public Aluno(String nome, int idade, String email, double media, int presenca, double nota, int ano, boolean Status) {
        super(nome, idade, email);
        this.media = media;
        this.nota = nota;
        this.presenca = presenca;
        this.ano = ano;
        this.Status = Status;
    }
}
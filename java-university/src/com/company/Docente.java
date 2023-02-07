package com.company;

public class Docente extends Membro{
    private double salario;
    public Docente(String nome, int idade, String email,double salario) {
        super(nome, idade, email);
        this.salario = salario;
    }
}

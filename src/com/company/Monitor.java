package com.company;

public class Monitor extends Discente{
    public int ano;
    private double salario = 2000.00;
    public boolean avaliacao;

    public Monitor(String nome, int idade, String email, int ano, boolean avaliacao){
        super(nome, idade, email);
        this.nome = nome;
        this.idade = idade;
        this.email = email;
        this.ano = ano;
        this.avaliacao = avaliacao;
    }

    public double getSalario() {
        return salario;
    }
}

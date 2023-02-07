package com.company;

import javax.swing.*;

public class Main {

    public static void main(String[] args) {

        String nomeUniversidade = JOptionPane.showInputDialog(null, "Qual o nome da Universidade?");
        prints prints = new prints();
        Universidade universidade = new Universidade(nomeUniversidade);
        while (true){
            String op = JOptionPane.showInputDialog(null, """
                    1- Adicionar instituto
                    2- Ver Institutos disponiveis
                    3-Adicionar Disciplinas
                    4-Adicionar novo Professor
                    5-Adicionar novo Monitor
                    6-Adicionar novo Aluno""");
            switch (op){
                case "1":
                    String nomeInstituto = JOptionPane.showInputDialog(null, "Digite o nome do instituto");
                    Institutos institutos = new Institutos(nomeInstituto);
                    universidade.adicionarInstitutos(institutos);
                    break;
                case "2":
                    JOptionPane.showMessageDialog(null,prints.printInstitutos(universidade));
                    break;
                case "3":
                    if (universidade.institutos.size() < 1){
                        JOptionPane.showMessageDialog(null, "Ainda não existe institutos para adicionar novas disciplinas");
                }
                    else {
                        int escolha = prints.institutoEscolhido(universidade);
                        while (true) {
                            String disciplinaAdicionar = JOptionPane.showInputDialog(
                                    null, "Qual disciplina deseja adicionar? ");
                            Disciplinas disciplinas = new Disciplinas(disciplinaAdicionar);
                            universidade.institutos.get(escolha-1).adcionarDisciplinas(disciplinas);
                            int yorno = JOptionPane.showConfirmDialog(null, "Você deseja adicionar mais alguma disciplina a esse instituto?", "Adicionar disciplinas", JOptionPane.YES_NO_OPTION);

                            if (yorno == 0){
                                continue;

                            }
                            else if(yorno == 1){
                                break;
                            }
                            else{
                                JOptionPane.showMessageDialog(null, "Opção Invalida!");
                            }
                        }
                    }
                    break;
                case "4":

                    String nomeProfessor = JOptionPane.showInputDialog(null, "Nome do novo professor");
                    int idadeProfessor = Integer.parseInt(JOptionPane.showInputDialog(null, "Idade do professor "+nomeProfessor));
                    String emailProfessor = JOptionPane.showInputDialog(null, "Email do professor " + nomeProfessor);
                    double salarioProfessor = 7000.00;
                    String formacaoProfessor = JOptionPane.showInputDialog(null, "Qual é a formação do novo professor?'");

                    Professor professor = new Professor(nomeProfessor,idadeProfessor, emailProfessor, salarioProfessor,formacaoProfessor);

                    break;
                case "5":

                    String nomeMonitor = JOptionPane.showInputDialog(null, "Nome do novo monitor");
                    int idadeMonitor = Integer.parseInt(JOptionPane.showInputDialog(null, "Idade do monitor " + nomeMonitor));
                    String emailMonitor = JOptionPane.showInputDialog(null, "Email do monitor " + nomeMonitor);
                    int anoMonitor = Integer.parseInt(JOptionPane.showInputDialog(null, "Ano de inicío do monitor"));
                    boolean avalicao = Boolean.getBoolean(JOptionPane.showInputDialog(null,"O monitor passou na avaliação?", JOptionPane.YES_NO_OPTION));

                    Monitor monitor = new Monitor(nomeMonitor, idadeMonitor, emailMonitor, anoMonitor, avalicao);


//                case "6":
//                    String nomeAlu = JOptionPane.showInputDialog(null, "Digite o nome do aluno!");
//                    int idadeAlu = Integer.parseInt(JOptionPane.showInputDialog(null, "Digite a idade do aluno"));
//                    String emailAlu = JOptionPane.showInputDialog(null, "Digite o email do aluno");
//
//                    Aluno aluno = new Aluno(nomeAlu, idadeAlu, emailAlu, );



            }
        }

    }
}

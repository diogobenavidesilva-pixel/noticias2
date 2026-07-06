import "dart:math";
import 'package:flutter/material.dart';

 void main() {
  runApp(MaterialApp(
   home: FrasesApp(),
  )); // MaterialApp
  }

  Class FrasesApp extends StatefulWidget {
    @override
    State<FrasesApp> createState() => _FrasesAppState();
  }

  class _FrasesAppState extends State<FrasesApp> {

        List<String> _frases = [
          "Nunca desista dos seus sonhos.",
          "O sucesso é resultado da persistência.",
          "Cada dia é uma nova oportunidade."
          "A prática Leva à perfeiçao.",
          "Aprender é investir no futuro.", 
          "walisson é tao bom",
          "O jogo so acaba quando o juiz fala",
        ];

        String fraseAtual = 
          "Clique no botão para gerar uma frase!";

        void gerarfrases() {
          int indice = Random().nextInt(_frases.length);

          setState(() {
            fraseAtual = _frases[indice];
          });
        }

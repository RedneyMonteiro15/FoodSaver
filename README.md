
# FoodSaver

A aplicação "FoodSaver é um aplicativo mobile de receitas que ajuda a combater o desperdício alimentar. Com um vasto conjunto de receitas disponíveis, o usuário pode escolher entre diversas opções de pratos, selecionando ingredientes e modos de preparação. Cada receita possui uma catalogação indicando se é regional ou não, informações nutricionais, indicações de saúde e bem-estar, tempo de execução e créditos da receita.

Além disso, o usuário pode adicionar as receitas aos favoritos ou criar uma lista de receitas para fazer mais tarde. Para utilizar essas funcionalidades, o usuário precisa criar um registo e efetuar login na aplicação, podendo recuperar o acesso caso esqueça a senha. É necessário também validar o e-mail e telefone para garantir a segurança da conta.

O aplicativo gera documentos para auxiliar o usuário, mostrando em formato gráfico a atividade do usuário, como a quantidade de receitas salvas e ingredientes utilizados. A aplicação também gera notificações para ajudar o usuário a lembrar de cozinhar as receitas adicionadas à lista "fazer mais tarde". Além disso, todos os dias de manhã, a aplicação envia uma notificação para incentivar os usuários a procurar uma receita e evitar o desperdício de alimentos.

A aplicação FoodSaver tem em conta a quantidade de resíduos que não se geraram, incentivando o usuário a aproveitar integralmente os alimentos, e também oferece pedagogia sobre boas práticas para evitar o desperdício. O aplicativo leva em consideração as necessidades alimentares dos usuários, oferecendo receitas adequadas para vegetarianos e veganos, além de adaptar as sugestões para pessoas com diabetes e outras restrições alimentares, como mulheres grávidas.

Este aplicativo vai ser desenvolvimento utilizando o React Native (expo) com sqlite.

---
## 🔨 Requesitos:
- [x] login
- [ ] logout
- [x] registar
- [ ] recuperar senha
- [ ] validar email e telemovel
- [ ] gerar documentos
- [ ] graficos de atividade
- [ ] mostrar ingredientes salvos
- [ ] gerar notificações
- [x] configurar preferencias para vegano, vegetarioano, gravida, diabeticos, hipertensos
- [ ] Alimentos proibidos
- [ ] motor de pesquisa
- [ ] categoral ingredienetes
- [x] perfil user

---
# Mockup

---
# DER

Aqui está o exemplo do modelo relacional em forma de tabela, com alguns dados fictícios inseridos:

**Tabela: autor**
| id | nome       | foto                                      |
|----|------------|-------------------------------------------|
| 1  | João Silva | foto_joao.jpg                             |
| 2  | Maria Sousa| foto_maria.jpg                            |

**Tabela: confecionados**
| id | nome             | categoria      | foto                      |
|----|------------------|----------------|---------------------------|
| 1  | Frango Assado    | Talho          | foto_frango_assado.jpg    |
| 2  | Salada de Frutas | Doces          | foto_salada_frutas.jpg    |


**Tabela: ingredientes**

| id | nome         | categoria        | foto                      |
|----|--------------|------------------|---------------------------|
| 1  | Cebola       | Leguminosas      | foto_cebola.jpg           |
| 2  | Leite        | Laticinios       | foto_leite.jpg            |
| 3  | Tomate       | Leguminosas      | foto_tomate.jpg           |
| 4  | Arroz        | CereaisDerivados | foto_arroz.jpg            |


**Tabela: saude**
| id | nome       | imagem                     |
|----|------------|----------------------------|
| 1  | celiaco    | celiaco.png                |
| 2  | diabetico  | diabetico.png              |
| 3  | hipertenso | hipertenso.png             |
| 4  | anemia     | anemia.png                 |


**Tabela: user**
| id | nome         | email                | dataNasc   | password | estiloVida |
|----|--------------|----------------------|------------|----------|------------|
| 1  | Ana Silva    | ana@example.com      | 1990-05-10 | abc123   | vegetariana|
| 2  | Pedro Santos | pedro@example.com    | 1985-11-22 | 123xyz   | onívoro    |

**Tabela: receita**
| id | idAutor | nome             | modoPreparo           | numPessoas  | tipo      | dificuldade | local         | tempo  |infoNutri            | foto 	      |
|----|---------|------------------|-----------------------|-------------|-----------|-------------|---------------|--------|---------------------|--------------------|
| 1  | 1       | Bolo de Chocolate| Misture todos os in...| 8           | Sobremesa | iniciante   | Internacional | 60     | informações nutri.. | bolo_chocolate.png |
| 2  | 2       | Salada           | Corte as folhas de ...| 2           | Almoço    | intermedio  | Internacional | 20     | informações nutri.. | salada.png	      |
| 3  | 1       | Sopa de Legumes  | Cozinhe os legumes ...| 4           | Almoço    | intermedio  | Nacional      | 30     | informações nutri.. | sopa_legumes.png   |


**Tabela: quantidade**
| id | idReceita | idIngrediente | quant | tipoMedida |
|----|-----------|---------------|-------|------------|
| 1  | 1         | 3             | 200   | g          |
| 2  | 2         | 1             | 1     | unid       |
| 3  | 3         | 2             | 500   | ml         |
| 4  | 3         | 3             | 300   | g          |

**Tabela: quantidade**
| id | idReceita | idIngrediente | quant | tipoMedida |
|----|-----------|---------------|-------|------------|
| 1  | 1         | 3             | 200   | g          |
| 2  | 2         | 1             | 1     | unid       |

**Tabela: alimentosConfecionados**
| id | idReceita | idConfecionados |
|----|-----------|-----------------|
| 1  | 1         | 2               |
| 2  | 2         | 1               |
| 3  | 3         | 2               |

**Tabela: proibidos**
| id | idIngrediente | idUser | data       |
|----|---------------|--------|------------|
| 1  | 2             | 1      | 2023-05-18 |
| 2  | 4             | 2      | 2023-05-22 |

**Tabela: poupado**
| id | idAtividade |
|----|-------------|
| 1  | 1           |
| 2  | 2           | 

**Tabela: saudaUser**
| id | idUser | idSaude |
|----|--------|---------|
| 1  | 1      | 1       |
| 2  | 2      | 2       |

Essas tabelas representam as entidades do modelo relacional, com alguns dados inseridos para ilustração.

---
## ![icons8-geografia-48](https://user-images.githubusercontent.com/79022289/168772772-875d6d91-36d9-4ad4-8b4e-e14e2a83d3e9.png) Links
-  WebSite
-  QrCode

## 💻 Desenvolvido
### Redney Monteiro
- ![icons8-github-16](https://user-images.githubusercontent.com/79022289/168773985-fee82c96-e9be-4ce8-b606-b26ee53e627a.png) [GitHub](https://github.com/RedneyMonteiro15)
- ![icons8-instagram-16](https://user-images.githubusercontent.com/79022289/168774026-212bcac0-0674-44f5-967f-735d4c392533.png) [Instagram](https://www.instagram.com/re_monteiro_/)
- ![icons8-linkedin-circundado-16](https://user-images.githubusercontent.com/79022289/168774045-4c8e5c7e-d670-43ff-bb4b-974e09f12bba.png) [Linkedin](https://www.linkedin.com/feed/)

## 📑 Licença
Site com linecença MIT Lincense - [Veja Mais](https://en.wikipedia.org/wiki/MIT_License)

---

Thank you♥️


function funcao1()
{
alert("Eu sou um alert!");
}

function input(){
    $('body').append('<div>\
                                <input id=entrada type="text" name="campo[]">\
                                \
                                </div><span id="saidaTxt">Nenhum resultado...</span>');



// Code goes here
var busca = null;
var array = ["(Poscomp 2012) - Seja o espaço vetorial V = R2. Com relação a esse espaço, assinale a alternativa correta.R: V é soma direta de S1 = {(x, y) ∈  R2|(x, y) = (x, 0)} e S2 = {(x, y) ∈  R2|(x, y) = (0, y)} ",
"Seja A um conjunto e seja ~ uma relação entre pares de elementos de A. Diz-se que ~ é uma relação de equivalência entre pares de elementos de A se as seguintes propriedades são verificadas, para quaisquer elementos a, a’ e a’’ de A:(i) a ~ a;(ii) se a ~ a’, então a’ ~ a;(iii) se a ~ a’ e a’ ~ a’’, então a ~ a’’.Uma classe de equivalência do elemento a de A com respeito à relação ~ é o conjuntoa = {xÎ A : x ~ a}O conjunto quociente de A pela relação de equivalência ~ é o conjunto de todas as classes de equivalência relativamente à relação ~, definido e denotado como a seguir:A/~=  {a : a Î A}A função p: A ® A/~ é chamada projeção canônica e é definida como p(a) = a, aÎ AConsiderando as definições acima, analise as afirmações a seguir.I. A relação de equivalência ~ no conjunto A particiona o conjunto A em subconjuntos disjuntos: as classes de equivalência.II. A união das classes de equivalência da relação de equivalência ~ no conjunto A resulta no conjunto das partes de A.III. As três relações seguintes: =, mod n, ³ são relações de equivalência no conjunto dos números inteiros Z .IV. Qualquer relação de equivalência no conjunto A é proveniente de sua projeção canônica.É correto apenas o que se afirmar em:R- I e IV",
"Sejam os conjuntos A = {1, 3, 5}, B = {3, 1} e C = {3, 5, 7}. A alternativa que representa o conjunto X =A ∩ B ∩ C é:R-X = {3}",
"Considere os conjuntos A = {2, 4, 10} e B = {4, 6, 8}. O conjunto X = A – B é:R-{2, 10}",
"Considere os conjuntos A = {2, 4, 10} e B = {4, 6, 8}. O conjunto X = B – A é:R-{6, 8}",
"Considere o conjunto X = {a, b}. A alternativa que representa o conjunto 2X é:R-{ {  }, {a}, {b}, {a, b}}",
"Considere os  conjuntos A = {7, 8, 9} e B = {7, 9}. Assinale a alternativa que apresenta o conjunto X = 2A– 2B.R-X = {{8}, {7,8}, {8,9}, {7,8,9}}",
"Considere A = {1, 3, 9} e B = {b, c, d}. Assinale a alternativa que apresenta o conjunto C, produto cartesiano de A x B.R- {(1, b), (1, c), (1, d), (3, b), (3, c), (3, d), (9, b), (9, c), (9, d)}",
"Considerando o conjunto A = {1, 2, 3, 4, 5, 6}, qual opção corresponde a uma partição desse conjunto?R-{{1}, {2}, {3}, {4}, {5}, {6}}",
"Um professor de Matemática, ao lecionar Teoria dos Conjuntos em uma certa turma, realizou uma pesquisa sobre as preferências clubísticas de seus n alunos, tendo chegado ao seguinte resultado:23 alunos torcem pelo Paysandu Sport Club;23 alunos torcem pelo Clube do Remo;15 alunos torcem pelo Clube de Regatas Vasco da Gama;6 alunos torcem pelo Paysandu e pelo Vasco;5 alunos torcem pelo Vasco e pelo Remo.Se designarmos por A o conjunto dos torcedores do Paysandu, por B o conjunto dos torcedores do Remo e por C o conjunto dos torcedores do Vasco, todos da referida turma, teremos, evidentemente, A ∩ B = {  }. Concluímos que o número n de alunos desta turma éA 	49B 	50C 	47D 	45E 	46 R-50",
"Poscomp 2002 questão 2: Seja o conjunto A = {x ∈ R; |x| >= 1 }. Qual das alternativas é  uma partição do conjunto A.R-{x <  -1 }, {x > 1}, {-1, 1}",
"Considerando as relações x R y⇔ x | y (x divide y) no conjunto M = {1, 2, 3, 6, 8, 9} e  z B t   ⇔ z | t(z divide t) no conjunto N = {1, 3, 6, 12, 24}, atribua V (verdadeiro) ou F (falso) às afirmativas a seguir( ) A cardinalidade de R é igual a de  B( ) R é uma relação de ordem parcial( ) R é uma relação de ordem total( ) B é uma relação de ordem parcial( )  B é uma relação de ordem totalAssinale a alternativa que contém, de cima para baixo, a sequência corretaR-V, V, F, F, V.",
"Considerando o conjunto A = {1, 2, 3, 4, 5, 6}, qual opção corresponde a uma partição desse conjunto?R-{{1}, {2}, {3}, {4}, {5}, {6}}",
"Um professor de Matemática, ao lecionar Teoria dos Conjuntos em uma certa turma, realizou uma pesquisa sobre as preferências clubísticas de seus n alunos, tendo chegado ao seguinte resultado:23 alunos torcem pelo Paysandu Sport Club;23 alunos torcem pelo Clube do Remo;15 alunos torcem pelo Clube de Regatas Vasco da Gama;6 alunos torcem pelo Paysandu e pelo Vasco;5 alunos torcem pelo Vasco e pelo Remo.Se designarmos por A o conjunto dos torcedores do Paysandu, por B o conjunto dos torcedores do Remo e por C o conjunto dos torcedores do Vasco, todos da referida turma, teremos, evidentemente, A ∩ B = {  }. Concluímos que o número n de alunos desta turma éA 	49B 	50C 	47D 	45E 	46R-50",
"Poscomp 2002 questão 2: Seja o conjunto A = {x ∈ R; |x| >= 1 }. Qual das alternativas é  uma partição do conjunto A.R-{x <  -1 }, {x > 1}, {-1, 1}",
"Considerando as relações x Ry⇔ x | y (x divide y) no conjunto M = {1, 2, 3, 6, 8, 9} e  z B t⇔ z | t(z divide t) no conjunto N = {1, 3, 6, 12, 24}, atribua V (verdadeiro) ou F (falso) às afirmativas a seguir( ) A cardinalidade de R é igual a de  B( ) R é uma relação de ordem parcial( ) R  é uma relação de ordem total( ) B é uma relação de ordem parcial( )  B é uma relação de ordem totalAssinale a alternativa que contém, de cima para baixo, a sequência corretaR-	V, V, F, F, V.",
"Todos os convidados presentes num jantar tomam chá ou café. Treze convidados bebem café, dez bebem chá e 4 bebem chá e café. Quantas pessoas tem nesse jantar.R-19",
"Para cada n ∈ N seja Dn = (0, 1/n), onde  (0, 1/n) representa o intervalo aberto de extremos 0 e 1/n. O conjunto diferença D3 − D20 é igual a:R-[1/20, 1/3)",
"Fundamentada na questão 13 ENADE 2008 Considerando o conjunto A = {1, 2, 3, 4, 5, 6},  I Corresponde uma particção de A P = {{1}, {2}, {3}, {4}, {5}, {6}}porqueII A intersecção entre os subconjuntos  elencados é vazia;Tem se que:R-I e II são verdadeiras e II justifica I",
"Considere-se o seguinte alfabeto:A = { *, &, ?, ! }Qual a alternativa que apresenta uma palavra não definida sobre o alfabeto?R-asterisco.",
"A Linguagem gerada por uma gramática é um conjunto que pode se apresentar com um número infinito de elementos.",
"Considere as cadeias: w = xxyyzz e v = zzyx. Considere as seguintes afirmações:I – wR = vRII- xxy é uma subpalavra de wIII – zz é prefixo de vIV – yx é sufixo de v.Estão corretas as afirmações:R-Apenas II, III e IV;",
"Considere a seguinte gramática: A gramática:G = ({S, D}, {0,1,2,..., 9}, P, S), ondeP = { S ® D | DS,D ® 0 | 1 | ...| 9} Assinale a alternativa incorreta",
"	Uma Linguagem Formal é um conjunto de palavras sobre um alfabeto.R- ",
"Se um alfabeto A, A = {a, b}, então o conjunto Fechamento Recursivo é finito.",
"Considere a gramática G = (V, T, P, A) onde:V = {A, B, C, D, E}T = {0, 1}P = { A ® 0B | 1C;        B ® 0B | 1D| e        C®0C | 1C        D ®1C|0E        E® 0C | 1D | e} Onde o símbolo e é a palavra vazia.Assinale a palavra gerada por G:",
"Considere a seguinte gramática G = (V, T, P, S) onde:V = {X, B, C, S}T = {0}P  = { S ® X; X® YZ | 0; Y ® X; Z ®e }Apresente a alternativa que representa a Linguagem gerada por G:R- L(G) = {0}",
"Considere a seguinte gramática G = (V, T, P, E), onde :V = {E, T, F}T = {[, ], , +, *, x}P = { E ®T | E + T; T ® F | T * F; F ®[E] | x}E é o símbolo inicial da gramática:Sabendo-se que L(G) denota a Linguagem gerada pela gramática G, considere as seguintes afirmações:I - x * x + x Î L(G);II – [x*x] + x Î L(G);III – x * [x + x] Î L(G);IV – [x+x+x+x] Ï L(G). Estão corretas as afirmações:R-Apenas I, II e III;",
"Considere a gramática G definida pelas regras de produção abaixo, em que os símbolos não-terminais são S, X e Y, e os símbolos terminais são x e y.S® XY | YXX® xY | xY ® yX| y Com relação a esta gramática, é correto afirmar que:R-A palavra yxy pertence à linguagem gerada pela gramática G;",
"Considere a gramática a seguir, em que S, A e B são símbolos não-terminais, 0 e 1 são terminais e e é a cadeia vazia.S ® 1S | 0A | eA ® 1S | 0B | eB ® 1S | e        A respeito dessa gramática, analise as afirmações a seguir:I.                   Nas cadeias geradas por essa gramática, o último símbolo é 1.II.                O número de zeros consecutivos nas cadeias geradas pela gramática é, no máximo, dois.III.             O número de uns em cada cadeia gerada pela gramática é maior que o número de zeros.IV.             Nas cadeias geradas por essa gramática, todos os uns estão à esquerda de todos os zeros.É correto apenas o que se afirma em:R-II.",
"Seja a linguagem, onde e representa a sentença vazia:S ® AB | CDA ® a | eB ® b | fC ® c | gD ® h | iQual o conjunto de terminais que podem começar sentenças derivadas de S ?R-{a, b, f, c, g}",
"Poscomp 2002 – questão 67 - Para a gramática a seguir, qual o conjunto de terminais que pode aparecer como primeiro terminal após o não-terminal A, em qualquer forma sentencial gerada pela gramática abaixo (isto é, não necessariamente imediatamente após A), onde ε representa a sentença vazia?S → ABCDdA → aA |  εB→ bC |  εC → cD |  εD → eR-{b,c,d,e}",
"Duas gramáticas são equivalentes se e somente se geram a mesma linguagem. Considere uma gramática definida sobre o alfabeto Σ = {x, y} cujas produções são:A → Ax | y. Assinale a alternativa que apresenta produções que gerab a mesma linguagem .R-A → yB; B → xB |ε",
"Qualquer expressão aritmética binária pode ser convertida em uma expressão totalmente parentizada, bastando reescrever cada subexpressão binária a Ä b como (a Ä b), em que Ä denota um operador binário. Expressões nesse formato podem ser definidas por regras de uma gramática livre de contexto, conforme apresentado a seguir. Nessa gramática, os símbolos não-terminais E, S, O e L representam expressões, subexpressões, operadores e literais, respectivamente, e os demais símbolos das regras são terminais.E ® ( S O S )S ® L | EO ®  + | - | * | /L ® a | b | c | d | eAssinale a alternativa que apresenta uma derivação incorretaR-EÞ (SOS) Þ (LOS) Þ(b O S) Þ(a - S) Þ(a -  E) Þ (a- (SOS)) Þ (a- (LOS))  Þ (a - (bOS)) Þ (a - (b/S)) Þ (a - (b/L)) Þ (a - (b/c))",
"S → ABCDdA → aA |  εB→ bC |  εC → cD |  εD →  eTem-se que:I.  O conjunto de terminais que pode aparecer como primeiro terminal após o não-terminal A, em qualquer forma sentencial gerada pela gramática abaixo (isto é, não necessariamente imediatamente após A), onde ε representa a sentença vazia é {b, c, d, e}PORQUEII Os símbolos não terminais A, B, C podem ser substituído pela palavra vazia εR-I e II são verdadeiras e II justifica I",
"(c*a [abc]*b[abc]*) | c*Assinale a alternativa que descreve, corretamente, todas as características geradas por essa expressão regularR-Cadeias sobre o alfabeto {a, b, c}, onde o primeiro a precede o primeiro b..",
"Considere-se a seguinte linguagem  L definida sobre o alfabeto A = {a,b,c}L = {w | w = a* b+c }. Não é uma palavra pertencente à Linugagem L:R-aac",
"Considere-se a linguagem L definida sobre o alfabeto A = {a, b, c}, onde L = { w | w = c+ (a+b*)* c*}.É uma palavra pertencente a L:R-cabc",
"Um autômato finito determinístico pode ser representado pela  quíntupla:M= (S, s0, F, A, g)OndeA: alfabeto dos símbolos de entrada;s0: estado inicial;F: conjunto de estados finais;S: conjunto de estados do autômato;g: função programa ou função de transição g:   S ´ A ® S.A função g para o autômato reconhecedor da linguagem  L definida sobre oalfabeto A = {a, b}L =  {w | w = a*b} é:onde q0 é o estado inicialF = {q1}S = {q0, q1}R-g = {((q0, a), q0), ((q0, b), q1)}",
"Considere uma máquina M definida sobre uma quíntupla:M= (S, s0, F, A, g)ondeA: alfabeto dos símbolos de entrada;s0: estado inicial;F: conjunto de estados finais;S: conjunto de estados da máquina;g: função programa ou função de transição g: A ´ S2A Considere-se o seguinte autômato M = (S, q0, F, A, g), onde:S = {q0,q1,q2,q3};q0 é o estado inicial,F = {q1, q3}A = {a,b}g = { ((q0, a), {q1,q2}), ((q2, b), {q3}), ((q3,a), {q2})}Pode-se afirmar que:R- M representa um autômato finito não-determinístico pois existem duas transições com origem no estado q0 , que consomem o símbolo do alfabeto a, e estados destinos distintos:q1 e q2;",
"Um autômato finito determinístico pode ser representado pela  quíntupla:M= (S, s0, F, A, g)onde:A: alfabeto dos símbolos de entrada;s0: estado inicial;F: conjunto de estados finais;S: conjunto de estados do autômato;g: função programa ou função de transição g:   S ´ A ® S.Seja  L, uma Linguagem definida sobre o alfabeto A = {a, b}L = {w | w possui um número par de a e b} é:Assinale a alternativa que represente a função de transição de um autômato reconhecedor desta Linguagem, com estado inicial em q0.R- g = {((q0, b), q1), ((q0, a), q2), ((q1, a), q3), ((q1, b), q0), ((q2, a), q0), ((q2, b), q3), ((q3, a), q1), ((q3, b), q2)}",
"Considere a seguinte Gramática Linear à Direita:G = ({S, A, B}, {a, b}, P, S)onde P  é tal que: P = {S®aA; A ® bB|e, B ® aA; }A representação algébrica do Autômato finito que reconhece a linguagem gerada por G é M = ({a,b}, (S, A, B), g, S, {A}) onde g, função de transição é dada por:R- g = {((S, a), A), ((A, b), B), ((B, a), A)};",
"Considere uma linguagem L definida sobre o alfabeto A = {a, b}. Assinale a linguagem L reconhecida pelo autômato  M = ({qo, q1, q2, qf}, q0, g, A, {qf}), cuja  função de transição é dada por:g = {((q0, b), q0), ((q0, a), q1), ((q1, a), q2), ((q2, a), qf), ((qf, a), qf), ((qf, b), qf)}R-	L = {w | w possui aaa como subpalavra}",
"Considere a gramática G = (V, T, P, A) onde:V = {A, B, C, D, E}T = {0, 1}P = { A ® 0B | 1C;        B ® 0B | 1D| e        C®0C | 1C        D ®1C|0E        E® 0C | 1D | e} Onde o símbolo e é a palavra vazia.Considere-se um autômato M = (S, qa, F, A, g), onde:S = {qa, qb, qc, qd, qe, qf}qa é o estado inicial;F = {qb, qe}A = {0, 1} Pede-se a função programa g que completa a definição formal do autômato M, tal que seja o reconhecedor da mesma Linguagem gerada pela gramática G acima:R-g = {((qa, 0), qb), ((qa, 1), qc), ((qb, 0), qb), ((qb, 1), qd), ((qc, 0), qc), ((qc, 1), qc), ((qd, 1),qc), ((qd, 0), qe), ((qe, 0), qc), ((qe, 1), qd)}",
"Considere as seguintes afirmações:I – A Classe dos Autômatos Finitos Determinísticos é equivalente à Classe dos Autômatos Finitos Não-Determinísticos.II – Para uma particular Linguagem Regular, pode não existir uma gramática geradora da mesma.III – Uma Linguagem Regular é sempre finita.IV – Um Autômato Finito a ser minimizado deve ser determinístico;São verdadeiras as afirmações:R-Apenas I e IV;",
"Considere a expressão regular: (10* | 11)*(0*1)*. Trata-se de uma palavra pertencente ao conjunto dado:R-10000001",
"Considere a seguinte gramática G, (V, T, P, S), onde:V é o conjunto de símbolos não terminais com V = {S, A, B, C}, sendo S o símbolo incial da gramática.T é o conjunto de símbolos terminais e T = {0, 1 }P é o conjunto de regras ou produções , a saber:P = {    S ® ABC | 0;        A ®1A | 0    B ® B0S | A    C® 01C |01 }Pode-se afirmar que:R- As As cadeia geradas pelo não-terminal A podem ser representadas pela expressão regular (01)*",
"Considere o autômato M, onde:·         Q é o conjunto de estados e Q = {Q0, Q1, Q2 }·         Q0 é o estado inciail·         F = {Q2 } é o conjunto de estados finais·         å = {a, b} coincide com o alfabeto da Linguagem reconhecidaAinda, a função programa do autômato pode ser representada pela seguinte tabela:Símbolo lidoEstado atualabQ0{Q1}{ }Q1{Q1}{Q1,Q2} Considere as seguintes afirmações:I – Trata-se de um autômato finito não-determinístico.II – As cadeias reconhecidas pelo autômato devem apresentar ao menos uma ocorrência da sub-cadeia (bb).III – O autômato aceita cadeias  cujos prefixos podem ser representados pela expressão regular a*.IV – O autômato aceita cadeias, cujos sufixos podem ser representados pela expressão regular (aa)b*.Estão corretas as afirmações:R-Apenas I, II e III;c)",
"Considere ainda o autômato  M = (Q, q0, S, F, g), ondeQ = {Q0, Q1, Q2, Q3, Q4}Q0 é o estado inicial;F = {Q4}S = {a, b, c}A função programa g é dada por:                                            SímboloEstado atualabcQ0{Q1}--Q1{Q1}{Q2}-Q2{Q3}{Q2, Q3}{Q4}Q3{Q3}{Q3}{Q4} Ou ainda, g pode ser representada como:g = {((q0, a), {q1}), ((q1, a), {q1}), ((q1, b), {q2}), ((q2, b), {q2,q3}), ((q2, a), {q3}), ((q2, c), {q4}), ((q3, a), {q3}), ((q3, b), {q3}), ((q3, c), {q4})}A Linguagen reconhecida por M éR- L (w) = {w | w = a+b+ (a|b)* c}",
"Considere, a seguir, a gramática livre de contexto:S→ aS|Sb|cQual expressão regular gera a mesma linguagem que a gramática definida acima?R-a* c b*",
"Considere a seguinte gramática G, (V, T, P, S), onde: V é o conjunto de símbolos não terminais com V = {S, A, B, C}, sendo S o símbolo incial da gramática.T é o conjunto de símbolos terminais e T = {0, 1 }P é o conjunto de regras ou produções , a saber:P = {    S ® ABC | 0;        A ®1A | 0    B ® B0S | A    C® 01C |01 }Pode-se afirmar que:R-As cadeias  geradas pelo não-terminal A podem ser representadas pela expressão regular (01)*d)    ",
"figura, substituída pela função programa do autômato).Autômatos finitos possuem diversas aplicações práticas como na detecção de seqüências de caractereres em um texto. A função programa abaixo apresenta um autômato que reconhece seqüências sobre o alfabeto S = {a, b, c} e uma gramática livre de contexto que gera um subconjunto de S*, em que l representa o string vazio.Autômato: M =  (S, 0, F, A, g), onde:S = {0, 1, 2, 3, 4, 5}0 é o estado inicial;F = {5}A = {a, b, c} lA função g pode ser representada pela tabela abaixo:gabc010011202300341043055555S ®aS | bS | cS | bAA ® abA | abcBB ® aB | bB | cB | l l  = palavra vazia Analisando a gramática e o autômato acima, conclui-se que:R-A linguagem reconhecida pelo autômato é a mesma gerada pela gramática.",
"figura do autômato substituída pela definição formal)Que cadeia é reconhecida pelo autômato definido como:Autômato: M =  (S, 0, F, A, g), onde:S = {A, B, C, D}A é o estado inicial;F = {B}A = {0,1}A função g pode ser representada pela tabela abaixo:g01ADBBCACBDDABR-111011000",
"Seja å = {a, b}. Uma expressão regular denotando a linguagem:L = {w Î å* tal que toda ocorrência de “a” emw é imediatamente seguida de “b”}é:R-(b | ab)* ",
"questão 36: As seguintes expressões regulares denotam as linguagens P,Q, L e R, respectivamente:. (1 + 10)*, (0 + 01)*, (0 + 1)*, 0(11)* + 1(00)*. Não se pode afirmar que:R-(1 + 0)* \ P = Q",
"Analise as seguintes igualdades de expressões regulares:I. a* = (a*)*II. (a+b)* = (b+a)*III. a*+b* = (a+b)*A análise permite concluir queR-omente as igualdades I e II são verdadeiras.",
"Analise as seguintes igualdades de expressões regulares:I. a* = (a*)*II. (a+b)* = (b+a)*III. a*+b* = (a+b)*A análise permite concluir queR-somente as igualdades I e II são verdadeiras.",
"Q = {q0, q1, q2, q3}, onde q0 é o estado final e F = {q2, q3}, Σ = {a, b} e a relação de transição g, definida como:g(q0, a) ={ q1}; g(q0, ε) ={ q2}; g(q1, a) = {q2,q3}; g(q2, a) = {q3}; g(q2, b) = {q1}; A esse respeito assinale a alternativa FALSA:R-A palavra aba é reconhecida pelo autômato.",
"S → AcBA → cA | aBB→ cB | aAA→εAssinale a alternativa que apresenta a palavra que NÃO pertence à linguagem gerada pela gramática G.R-aaa",
"Seja o autômato finito, que opera sobre o alfabeto Σ = {a, b}Q = {q0, q1, q2, q3}, q0 é estado inicial, F = {q0} e função de transição dada por:g(q0, a) = q1; g(q0, b) = q2; g(q1, a) = q1; g(q1, b) = q3; g(q3, b) = q3; g(q3,ε) = q0;g(q2, a) = q3.Analise as seguintes alternativas:I - O autômato finito é determinístico.II - O autômato finito é não-determinístico.III- O autômato finito reconhece a palavra vazia.A análise permite afirmar que:R-somente a afirmativa I é falsa.",
"Seja o alfabeto Σ = {a, b} e a linguagem regular  L = {w | wÎå* e o nº de a’s em w é par }.Qual das expressões regulares abaixo gera essa linguagem?R-( b* a b* a b* )*",
"Considere, a seguir, a gramática livre de contexto:S ® aS|Sb|cQual expressão regular gera a mesma linguagem que a gramática definida acima?R-a* c b*",
"Questão 42: Assinale a alternativa que apresenta, corretamente, uma expressão regular que denota todas asstringsde a’s e b’s que têm pelo menos dois b’s consecutivos.R-(a+ba)*bb(a+b)* ",
"Considere o autômato M, com a seguinte representação algébrica:Q = {n0, n1, n2, n3, n4, n5, n6, n7, n8, n9}, no é o estado inicial. F = {n9}, O alfabeto é Σ = {a, b, c}. A relação de transição é dada por:g(n0, a) = n1g(n1, ε) = n2,  g(n2, ε) = n3,  g(n3, ε) = n4,  g(n3, ε) = n6,  g(n5, ε) = n8,  g(n7, ε) = n8,  g(n8, ε) = n9,  g(n2, ε) = n9,  g(n8, ε) = n3,   g(n4, b) = n5, g(n6, c) = n7.Assinale a alternativa que apresenta a expressão regular que gera a mesma linguagem reconhecida pelo autômato.R-a(b|c)*",
"G = ({x, y, z}, {S, W, X, Y, Z}, P, S)na qual os membros de P são:S → WZW → X | YX → x | xXY → y | y YZ → zZQual das expressões regulares abaixo corresponde a esta gramática?",
"questão 46 Considere as seguintes afirmações sobre autômatos finitos e expressões regularesI - A classe das linguagens aceita por um Autômato Finito Determinístico (AFD) não é a mesma que um Autômato Finito Não Determinístico (AFND).II - Para algumas expressões regulares não é possível construir um AFD.III - A expressão regular (b+ba)+ aceita os 'strings' de b's e a's começando com b e não tendo dois a's consecutivos.Selecione a alternativa correta.R-Apenas a afirmativa III é verdadeira.",
"Se o estado inicial for também estado final em um autômato finito, então esse autômato:R-Aceita a cadeia vazia",
"Autômatos Finitos são dispositivos geradores de Linguagens Regulares.R-incorreta",
" Um autômato mínimo é um autômato que apresenta o menor número de estados. O Autômato mínimo para uma linguagem é único a menos de isomorfismo.R-correta",
"Assinale qual a alternativa que não diz respeito à minimização de um autômato finito:R-A função programa g deve ser tal que especifique duas transições que apresentem o mesmo estado origem, consomem o mesmo símbolo  e  apresentam estados destino distintos.",
"Considere as seguintes afirmações:I – A Classe dos Autômatos Finitos Determinísticos é equivalente à Classe dos Autômatos Finitos Não-Determinísticos.II – Para uma particular Linguagem Regular, pode não existir uma gramática geradora da mesma.III – Uma Linguagem Regular é sempre finita.IV – Um Autômato Finito a ser minimizado deve ser determinístico;São verdadeiras as afirmações:R- Apenas I e IV;",
"Considere as seguintes afirmações:I – Dados dois geradores de liguagens (gramáticas) e dois reconhecedores de linguagens, pode-se verificar se os dois geradores de Linguagens são equivalentes se os autômatos mínimos dos correspondentes reconhecedores são iguais.II – Existe um algoritmo polinomial, para o qual, dada uma expressão regular, pode-se construir um autômato finito não-determinístico equivalente.III – Existe um algoritmo polinomial , tal que para um determinado autômato finito determinístico é possível construir um autômato finito determinístico com o menor número de estados, possível.Estão corretas as afirmações:R-  I, II e III;",
"Uma máquina de Moore M é um Autômato Finito Determinístico com saídas associadas aos estados. É representada por um 7-tupla:M = (A, Q, g, q0, F, g, gs, S), onde:A = alfabeto dos símbolos de entrada;Q = conjunto de estados possíveis do autômato o qual é finito;g: função programa ou função de transiçãoq0: estado inicial ;F = conjunto de estados finais;gs=função de saída. Considere a seguinte tabela que representa as funções g e gs de uma Máquina de Moore.Estado atualPróximo estadoSaída Entrada01 S0S1S00S1S2S11S2S2S01 Considere-se a cadeia de entrada 01101. Qual é a saída obtida, sabendo-se que o processamento da mesma inicia-se no estado s0?R-01111;",
"Considere a seguinte tabela que representa a função programa de uma máquina de estados finitos:Estado atualPróximo estadoEntradaxyq0Q2Q0q1Q2Q1q2Q2Q0 Se o estado q0 for o estado inicial, os estados inacessíveis são:.R-apenas q1",
"Considere a seguinte tabela que representa função programa de uma máquina de estados finitos.Estado atualPróximo estadoEntradaabq0q3Q6q1q4Q2q2Q4Q1q3q2Q0q4Q5Q0q5Q3Q5q6Q4Q2 Considere as seguintes afirmações:I – São equivalentes os estados q1, q2 e q5.II – São equivalentes os estados q6 e q0.III – São equivalentes os estados q3 e q4. Estão corretas as afirmações:R-Apenas I e III;",
"Considere o seguinte autômato finito determinístico: M = (Q, q0, A, F, g), onde:Q = {Q1, Q2, Q3 } (conjunto de estados).F = {Q3} (conjunto de estados finais);A = {a, b} (alfabeto de entrada);Q1 é o estado inicial;A função programa g é representada na tabela abaixo:Estado atualPróximo estadoEntradaabQ1Q1Q2Q2Q2Q3Q3Q3Q1Considere o seguinte algoritmo descrito em pseudo-código não estruturado:q1:       x= get_símbolo( );            se x = fim de arquivo então rejeita;            senão se x = a então goto q1;            senão se x = b então goto q2;q2:       x = get_símbolo( );            se x = fim de arquivo então rejeita;        senão se x = a então go to q2;        senão se x = b então goto q3;q3:       x = get_símbolo( );    se x = fim de arquivo então aceita;    senão se x = a então goto q3;    senão se x = b então goto q1;Considere-se  o pseudo-código , bem como a especificação formal do autômato M. Leve-se em conta as seguintes afirmações:I – Um autômato finito determinístico é um algoritmo eficiente para decidir se uma dada cadeia pertence à Linguagem para a qual o autômato foi projetado.II – Para descrever um autômato finito determinístico como um algoritmo tal que para cada estado q Î Q, são necessárias |Q| + 2 instruções, das quais a primeira obtém o próximo símbolo de entrada a ser analisado e cada uma das outras é responsável por realizar a ação correta para cada valor particular do símbolo de entrada, bem como, o símbolo de fim de arquivo, correspondente ao fim da cadeia de entrada. III – Se L é uma Linguagem regular, então existe um algoritmo que testa em um tempo O(|w|), se a palavra w Î A*, está em LEstão corretas as afirmações:R- I, II e III;",










]






















$(document).ready(function(){
  $('#entrada').bind('input',function(){
    busca = $(this).val().toLowerCase();
    
    if(busca !== ''){
      var corresponde = false;
      var saida = Array();
      var quantidade = 0;
      for(var key in array){
        
        corresponde = array[key].toLowerCase().indexOf(busca) >= 0;
        if(corresponde){
          saida.push(array[key]);
          quantidade += 1;
        }
      }
      if(quantidade){
        $('#saidaTxt').text('');
        $('#quantidade').html(quantidade+' resultados!<br><br>');
        for(var ind in saida){
           $('#saidaTxt').append("<li>"+saida[ind]+"</li>"+"<br>");
        }
        
      }else{
        $('#quantidade').html('');
        $('#saidaTxt').text('Nenhum resultado...');
      }
    
    }else{
      $('#quantidade').html('');
      $('#saidaTxt').text('Nenhum resultado...');
    }
    
    
    
  });
});
}

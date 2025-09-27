# Sobre o Formato JSON

O JSON (JavaScript Object Notation) é um formato leve de troca de dados, amplamente utilizado para transmitir informações entre sistemas, especialmente em aplicações web e APIs. Ele se destaca pela sua simplicidade, legibilidade e facilidade de manipulação em diversas linguagens de programação.

## Principais Características

- **Estrutura baseada em texto:** O JSON utiliza uma estrutura simples, composta por pares chave-valor, listas e objetos aninhados.
- **Facilidade de leitura e escrita:** Sua sintaxe clara torna o JSON fácil de entender tanto por humanos quanto por máquinas.
- **Compatibilidade:** Praticamente todas as linguagens modernas oferecem suporte nativo ou por bibliotecas ao JSON.

## Sintaxe Básica

Um arquivo JSON é composto por:
- **Objetos:** Delimitados por `{ }`, contendo pares chave-valor.
- **Arrays:** Delimitados por `[ ]`, contendo uma lista ordenada de valores.
- **Valores:** Podem ser string, número, booleano, null, objeto ou array.

**Exemplo:**
```json
{
  "nome": "Maria",
  "idade": 30,
  "habilidades": ["Python", "SQL", "JSON"],
  "ativo": true
}
```

## Aplicações Comuns

- **Troca de dados em APIs REST e GraphQL:** O JSON é o formato padrão para comunicação entre clientes e servidores.
- **Configuração de sistemas:** Muitos programas e frameworks usam arquivos JSON para definir configurações.
- **Armazenamento de informações:** Bancos de dados NoSQL, como MongoDB, armazenam dados em formato JSON ou semelhante.

## Vantagens

- Simplicidade e flexibilidade na estrutura dos dados.
- Facilidade de integração entre diversos sistemas e plataformas.
- Redução de erros de interpretação graças ao padrão universal.

## Cuidados ao Utilizar JSON

- **Validação:** É importante garantir que o JSON esteja corretamente formatado para evitar erros de leitura.
- **Segurança:** Ao receber dados JSON de fontes externas, sempre valide e sanitize as informações antes de usá-las.
- **Limitações:** O JSON não suporta comentários e tem restrições quanto a alguns tipos de dados (ex: datas, funções).

## Ferramentas Úteis

- **Validadores online:** Permitem verificar se sua estrutura está correta.
- **Bibliotecas de manipulação:** Python (json), JavaScript (JSON), Java (Jackson), entre outros.
- **JSON Schema:** Ferramenta para definir e validar o formato esperado de um documento JSON.

## Referências

- [Vídeo - Otávio Miranda](https://youtu.be/XmCrArtfjaQ)
- [Documentação Oficial](https://www.json.org/json-pt.html)
- [JSON Schema](https://json-schema.org/)

---

O domínio do JSON é fundamental para qualquer desenvolvedor que trabalhe com integração de sistemas, APIs ou aplicações web. Explore os exemplos, pratique a manipulação e aprimore seus conhecimentos nesse formato essencial!
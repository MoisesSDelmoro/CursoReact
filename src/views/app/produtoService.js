const PRODUTOS = '_PRODUTOS';

function ErrorValidacao(errors){
    this.errors = errors;
}

export default class ProdutosService {

    validar = (produto) => {

        const errors = []

        if(!produto.nome){
            errors.push("o Campo Nome é Obrigatório!");
        }
        if(!produto.SKU){
            errors.push("o Campo SKU é Obrigatório!");
        }
        if(!produto.preco || produto.preco <= 0){
            errors.push("o Campo Nome é Obrigatório!");
        }
        if(!produto.fornecedor){
            errors.push("o Campo Fornecedor é Obrigatório!");
        }
        
        if(errors.length > 0 ){
            throw new ErrorValidacao(errors)
        }
    }

    obterProdutos = () => {
        const produtos = localStorage.getItem(PRODUTOS)
        return JSON.parse(produtos)
    }

    salvar = (produto) => {

        this.validar =(produto) => {
            const errors = []
        }
        let produtos = localStorage.getItem(PRODUTOS)

        if (!produtos){
            produtos = []
        }else{
            produtos = JSON.parse(produtos)
        }

        produtos.push(produto);

        localStorage.setItem(PRODUTOS, JSON.stringify(produtos));
    }
}

const PRODUTOS = '_PRODUTOS';

export default class ProdutosService {

    salvar = (produto) => {
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

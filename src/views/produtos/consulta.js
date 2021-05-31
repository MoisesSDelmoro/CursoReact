import React from 'react'
import ProdutosService from '/home/moisesdelmoro/CursoReact/src/views/app/produtoService'

export default class ConsultaProdutos extends React.Component {

    state = {
        produtos: []
    }

    constructor(){
        super()
        this.service = new ProdutosService();
    }

    componentDidMount(){
        const produtos = this.service.obterProdutos()
        this.setState({ produtos})
    }

    render(){
        return(
            <div className="card">
                <div className="card-header">
                    Consulta Produtos
                </div>
                    <table className="table table-hover">
                        <thead> 
                            <tr>
                                <th>Nome</th>
                                <th>SKU</th>
                                <th>Preço</th>
                                <th>Fornecedor</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.produtos.map( (produto, index) => {
                                    return (
                                        <tr key={index}>
                                            <th>{produto.nome}</th>
                                            <th>{produto.sku}</th>
                                            <th>{produto.preco}</th>
                                            <th>{produto.fornecedor}</th>
                                            <th>
                                                <button onClick={() => this.editarAction(produto.sku)} 
                                                        className="btn btn-primary">Editar</button>
                                                <button onClick={() => this.deletarAction(produto.sku) } 
                                                        className="btn btn-danger">Remover</button>
                                            </th>
                                        </tr>
                                    )
                                }) 
                            }
                        </tbody>
                    </table>
            </div>
        )
    }
}
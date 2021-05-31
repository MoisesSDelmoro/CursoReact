import React from 'react';

export default class CadastroProduto extends React.Component {
    render() {
        return (
            <div className="card">
                <div className="card-header">
                    Cadastro de Produto
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="from-group">
                                <label>Nome: *</label>
                                <input type="text" className="form-control" />
                            </div>
                        </div>
                        
                        <div className="col-md-6">
                            <div className="from-group">
                                    <label>SKU: *</label>
                                    <input type="text" className="form-control" />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <div className="from-group">
                                <label>Descrição: *</label>
                                <input type="text" className="form-control" />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="from-group">
                                <label>Preço: *</label>
                                <input type="text" className="form-control" />
                            </div>
                        </div>
                        
                        <div className="col-md-6">
                            <div className="from-group">
                                    <label>Fornecedor: *</label>
                                    <input type="text" className="form-control" />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-1">
                                <button className="btn btn-success">Salvar</button>
                            </div>
                        </div>

                        <div className="col-md-1">
                                <button className="btn btn-success">Limpar</button>
                        </div>
                    </div>
            </div>    
        )
    }
}

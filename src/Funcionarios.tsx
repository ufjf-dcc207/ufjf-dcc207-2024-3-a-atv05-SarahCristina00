import dados from './dados.json';

interface FuncionarioProps{
    
    nome: string;
    setor: string;
    data: string;
    salario_base: number;
    dependentes?: string;
    
}
function Funcionario(nome:string, setor:string,data:string, salario_base:number){
        nome = dados.funcionarios[0].nome_completo,
        setor = dados.funcionarios[0].setor,
        data = dados.funcionarios[0].data_admissao,
        salario_base = dados.funcionarios[0].salario_base

        return(
            <div className='funcionario'>
                <div>{nome}</div>
                <div>{setor}</div>
                <div>{data}</div>
                <div>{salario_base}</div>
            </div>
        );
}




export default Funcionario;
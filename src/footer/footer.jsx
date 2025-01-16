import style from './footer.module.css'

export default function footer() {
    return (
        <div className={style.page}>
            <div className={style.conteudo}>
                <div className={style.contact}>
                    <h2>Contato</h2>
                    <h3>(18) 3223-4372</h3>
                    <h3>(18) 99145-4372</h3>
                    <h3>Todos os dias : 6h - 20h</h3>
                </div>
                <div className={style.endereco}>
                    <h2>Endereço</h2>
                    <h3>Rua Nivaldo Zorzatto de Almeida, 55 Centro</h3>
                    <h3>CEP: 19160-000</h3>
                    <h3>Alvares Machado - SP</h3>
                </div>

            </div>
        </div>

    )
}
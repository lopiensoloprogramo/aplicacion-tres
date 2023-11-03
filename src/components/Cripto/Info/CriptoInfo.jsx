const CriptoInfo=({cripto})=>{

    return(
        
        <>
        <div>{cripto.rank}</div>
        <div>{cripto.name}</div>
        <div>{cripto.symbol}</div>
        <div>{cripto.priceUsd}</div>
</>
        
    )
}
export default CriptoInfo
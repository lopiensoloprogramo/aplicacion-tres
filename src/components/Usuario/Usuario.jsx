import './Usuario.css'
const Usuario=({id,last_name,email,avatar,first_name})=>(


    <div className='conteiner-usuario'>
        <div className="perfil">
            <div className="foto">
                <img id="avatar"src={avatar}></img>
            </div>
            <div className="name">{first_name+" "+last_name}</div>
        </div>
        <div className="informacion">
            <p><h2>Datos Personales</h2></p>
            <p>Id: {id} </p>
            <p>Email:  {email}</p>
            <p>Name:  {first_name}</p>
            <p>Apellido: {last_name}</p>
    
         
        </div>
    
    </div>
)

export default Usuario;
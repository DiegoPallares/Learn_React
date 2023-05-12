import { useState } from 'react'
import './App.css'
import './index.css'

export function ComponetTwitterFollowCard ({userName, logo, name}){
    
    //*Debe quedar el estado creado en la parte superior.
    //Primera posicion "valor del estado" y segunda posicion "Forma de actualizarlo"
    const [isFollowing, setIsFollowing] = useState(false)
   
    //*Las constante tomaran un valor dependiendo del ternario
    const text = isFollowing? 'siguiendo' : 'seguir'
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following':'tw-followCard-button'
    
    //*La ejecucion del cambio del estado.
    const handClick = () =>{
        setIsFollowing(!isFollowing)
    }
    
    
    return(
        <article className='tw-followCard'>
        <header className='tw-followCard-hader'>
            <img 
            className='tw-followCard-avatar'
            alt="Avatar de perro 1"
            src={`src/images/perro-viajero-${logo}.jpg`}
            />
            <div className='tw-followCard-info'>
                <strong>{name}</strong>
                <span className='tw-followCard-infoUserName'>@{userName}</span>
            </div>
            <aside>
                <button className={buttonClassName} onClick={handClick}>{text}</button>
            </aside>
        </header>
    </article>
    )
}
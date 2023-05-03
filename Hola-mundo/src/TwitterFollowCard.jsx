import logo from './images/perro-viajero-1.jpg'

import './App.css'
import './index.css'

export function ComponetTwitterFollowCard ({userName, name }){
    return(
        <article className='tw-followCard'>
        <header className='ttw-followCard-avatar'>
            <img 
            className='tw-followCard-avatar'
            alt="Avatar de perro 1"
            src={logo}/>
            <div className='tw-followCard-info'>
                <strong>{name}</strong>
                <span className='tw-followCard-infoUserName'>@{userName}</span>
            </div>

            <aside>
                <button className='tw-followCard-button'>seguir</button>
            </aside>
        </header>
    </article>
    )
}
import React from 'react'
import './App.css'
import './index.css'
import { ComponetTwitterFollowCard } from  './TwitterFollowCard.jsx'
export function App(){
    
    return(
        <section className='App'>
            <React.Fragment>
                <ComponetTwitterFollowCard
                    isFollowing={true}
                    logo="1"
                    userName="Dog-Alfha"
                    name="Perro motero"/>
                <ComponetTwitterFollowCard
                    isFollowing={false}
                    logo="2"
                    userName="Dog-2"
                    name="Perro motero"/>
                <ComponetTwitterFollowCard
                    isFollowing={true}
                    logo="3"
                    userName="Dog-5"
                    name="Perro moterazo"
                />
                <ComponetTwitterFollowCard
                    isFollowing={true}
                    logo="4"
                    userName="Dog-Alfha"
                    name="Perro motero"
                 />
            </React.Fragment>
        </section>
        
    )
}
      
      

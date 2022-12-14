import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar';

import styles from './sidebar.module.css';


export function Sidebar(){
  return(
    <aside className={styles.sidebar} >
      <img 
      className={styles.cover} 
      src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZGV2ZWxvcGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=200&q=60"  
      />
      

      <div className={styles.profile}>
        <Avatar  src="https://avatars.githubusercontent.com/u/56368028?v=4"/>
        <strong>Michel Vacari</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20}/>
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
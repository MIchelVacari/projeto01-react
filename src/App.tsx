import { Header } from "./componentes/Header";
import { Post }  from "./componentes/Post";
import styles from './app.module.css';
import { Sidebar }  from './componentes/sidebar';


import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/56368028?v=4',
      name: 'Michel Vacari',
      role: 'Estudante de ADS'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera'},
      { type: 'paragraph', content: 'acabei de subir o primeiro projeto do ignite!'},
      { type: 'link', content: '#novoprojeto'},
    ],
    publishedAt: new Date('2022-10-30 23:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/56368028?v=4',
      name: 'Michel Cruz',
      role: 'Estudante de ADS'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera'},
      { type: 'paragraph', content: 'acabei de subir o primeiro projeto do ignite!'},
      { type: 'link', content: '#novoprojeto'},
    ],
    publishedAt: new Date('2022-10-21 23:00:00'),
  }
]


export function App() {
 

  return (
    <div>

      <Header />
      <div className={styles.wrapper}>
       <Sidebar/>

        <main>
          {posts.map(post => {
            return (
              <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt} 
              />
            )
          })}
        </main>
      </div>
      
    </div>
    
  )
}


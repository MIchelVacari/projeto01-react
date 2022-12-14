import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react'
import { Avatar } from './Avatar'
import styles from './comment.module.css'

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string ) => void; 
}

export function Comment( { content, onDeleteComment } : CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment (){
    onDeleteComment(content)
  }

  function handleLikeComment(){
    setLikeCount((state) => {
      return state + 1
    });

  }
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/56368028?v=4" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Michel Vacari</strong>
              <time title='20 de outubro de 2022' dateTime='2022-10-20 19:39:30'>Cerca de 1h atrás</time>
            </div>

            <button onClick={handleDeleteComment} title='Deletar Comentário'>
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
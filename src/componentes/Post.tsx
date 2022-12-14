import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import styles from './Post.module.css';
import { Comment } from './comment';
import { Avatar } from './Avatar';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';


interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}

interface Content {
  type: 'paragraph' | 'link';
  content: string
}

interface PostProps {
  author: Author;
  publishedAt: Date;
  content: Content[];
}

export function Post({ author, publishedAt, content}: PostProps) {
  const [comments, setComments] = useState([
    'post muito bacana, hein !'
  ])

  const [newCommentText, setNewCommentText] = useState('')

  const publishedDateFormated = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR, 
  } ) 

  const publisheDateRaelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  function handleCreateNewComment(event: FormEvent){
    event.preventDefault()

    setComments([...comments, newCommentText]);
    setNewCommentText('');
  }

    function handleNewCommentChange (event: ChangeEvent<HTMLTextAreaElement>){
      event.target.setCustomValidity('');
      setNewCommentText(event.target.value);
    }

   
    function deleteComment (commentToDelete: string){
      const  commentWithoutDeletedOne = comments.filter(comment => {
        return comment != commentToDelete;

      })

      setComments(commentWithoutDeletedOne);

    }
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar  src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title={publishedDateFormated} dateTime={publishedAt.toISOString()}>
          {publisheDateRaelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map(line => {
          if (line.type == 'paragraph'){
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type == 'link') {
            return <p key={line.content}><a href="">{line.content}</a></p>
          }
          
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong> Deixe seu feedback </strong>

        <textarea 
        name ="comment"
        placeholder='Deixe seu comentário'
        value = {newCommentText}
        onChange={handleNewCommentChange}
        />

        <footer>
        <button type='submit'>Publicar</button>
        </footer>
      </form>

      <div className={styles.commnetList}>
        {comments.map( comment => {
          return (
            <Comment 
              key={comment} 
              content={comment} 
              onDeleteComment={deleteComment}
            />
        )
        })}

      </div>
    </article>
  )
}
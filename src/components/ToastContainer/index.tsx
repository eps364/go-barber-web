import React, { useCallback} from 'react'
import { FiAlertCircle, FiXCircle} from 'react-icons/fi'

import { ToastMessage, useToast } from '../../hooks/ToastContext'
import { Container, Toast } from './styles'

interface ToastContainerProps{
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({messages}) => {
  const { removeToast } = useToast();
  return (
    <Container>
      {messages.map(message => (
        <Toast key={message.id} type={message.type} hasDescription={!!message.description}> 
          <FiAlertCircle size={20} />
          <div> 
            <strong>{message.title}</strong>
            {message.description && <p> {message.description}  </p>}
            <button onClick={() => removeToast(message.id)} type="button">
              <FiXCircle size={18} />
            </button>
          </div>
        </Toast>
      ))}

    </Container>
  );
}

export default ToastContainer;
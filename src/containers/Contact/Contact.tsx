// BASE MODULES
import { useState } from 'react';
import emailjs from '@emailjs/browser';

// CUSTOM MODULES
import Bar from '../../components/Bar/Bar';
import { isDesktop } from '../../utilities/responsiveness';
import useWindowSize from '../../hooks/windowSize';
import { MessageCopy } from '../../types';
import LinkedIn from '../../assets/icons/LinkedIn';
import Github from '../../assets/icons/Github';
import styles from './Contact.module.scss';

const Contact = () => {
  const windowSize = useWindowSize();

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [messageSuccessful, setMessageSuccessful] = useState<boolean>(false);
  const [showMessageResults, setShowMessageResults] = useState<boolean>(false);

  // CLEAR INPUTS
  const clearInputs = () => {
    setName('');
    setEmail('');
    setMessage('');
  };

  // SEND MESSAGE
  const sendMessage = () => {
    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        { name, email, message },
        { publicKey: import.meta.env.VITE_PUBLIC_KEY }
      )
      .then(
        (result) => {
          console.log('Message sent successfully:', result.text);
          setShowMessageResults(true);
          setMessageSuccessful(true);
          clearInputs();
        },
        (error) => {
          console.error('Error sending message:', error);
          setShowMessageResults(true);
          setMessageSuccessful(false);
          clearInputs();
        }
      );
  };

  return (
    <section className={styles.ContactContainer}>
      <h2 className={styles.TitleCopy}>Get in Touch</h2>

      <Bar
        bgColor={isDesktop(windowSize) ? '#5448a1' : '#fff'}
        width={isDesktop(windowSize) ? '45%' : '75%'}
      />

      <section className={styles.BodyCopyContainer}>
        <p>Want to chat about future work?</p>

        <p>Feel free to reach out!</p>
      </section>

      <section className={styles.ContactFormContainer}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          type="text"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="text"
        />
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Message"
          type="text"
        />
      </section>

      <button type="button" onClick={sendMessage}>
        Send
      </button>

      {showMessageResults && (
        <section>
          {messageSuccessful ? (
            <p>{MessageCopy.SUCCESSFUL} </p>
          ) : (
            <p>{MessageCopy.UNSUCCESSFUL}</p>
          )}
        </section>
      )}

      <section className={styles.IconContainer}>
        <LinkedIn />
        <Github />
      </section>
    </section>
  );
};

export default Contact;

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

      <Bar bgColor="#5448a1" width={isDesktop(windowSize) ? '45%' : '75%'} />

      <section className={styles.BodyCopyContainer}>
        <p className={styles.BodyCopy}>Want to chat about future work?</p>

        <p className={styles.BodyCopy}>Feel free to reach out!</p>
      </section>

      <section className={styles.ContactFormContainer}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          type="text"
          className={styles.Input}
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="text"
          className={styles.Input}
        />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Message"
          className={styles.TextArea}
        />

        <button type="button" onClick={sendMessage} className={styles.Button}>
          Send
        </button>
      </section>

      <section className={styles.IconContainer}>
        <LinkedIn />
        <Github />
      </section>

      {showMessageResults && (
        <section className={styles.MessageConfirmCopyContainer}>
          {messageSuccessful ? (
            <p className={styles.MessageConfirmCopy}>
              {MessageCopy.SUCCESSFUL}{' '}
            </p>
          ) : (
            <p className={styles.MessageConfirmCopy}>
              {MessageCopy.UNSUCCESSFUL}
            </p>
          )}
        </section>
      )}
    </section>
  );
};

export default Contact;

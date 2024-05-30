import { NextPage } from 'next';

const Contact = () => {
  return (
    <div>
      <h1 className="text-2xl">Contacto</h1>
      <p>Esta es la página de contacto.</p>
    </div>
  );
};

Contact.getLayout = (page: React.ReactNode) => page;


export default Contact;

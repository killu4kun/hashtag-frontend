import { useEffect, useState } from 'react';
import ActionsTable from './components/Table';

function AdminControl() {
  const [webhooks, setWebhooks] = useState<IWebhook[]>([]);

  interface IWebhook {
    nome: string;
    email: string;
    status: string;
  }

  useEffect(() => {
    setTimeout(() => {
      fetch('https://teste-hashtag.onrender.com/api/webhooks')
        .then((response) => response.json())
        .then((data) => {
          setWebhooks(data), console.log(data);
        })
        .catch((error) => console.error(error));
    }, 5000);
  }, []);

  return (
    <div className="align-center flex flex-col justify-center text-center">
      <h1 className="mt-2">Webhooks</h1>
      <ActionsTable webhooks={webhooks} />
    </div>
  );
}

export default AdminControl;

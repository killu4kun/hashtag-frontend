import { useEffect, useState } from 'react';

function AdminControl() {
  const [webhooks, setWebhooks] = useState<IWebhook[]>([]);

  interface IWebhook {
    nome: string;
    email: string;
    status: string;
  }

  useEffect(() => {
    fetch('http://127.0.0.1:5000/api/webhooks')
      .then((response) => response.json())
      .then((data) => setWebhooks(data))
      .catch((error) => console.error(error));
  });

  return (
    <div>
      <h1>Webhooks</h1>
      {webhooks &&
        webhooks.map((webhook, index) => (
          <div key={index}>
            <p>Nome: {webhook.nome}</p>
            <p>Email: {webhook.email}</p>
            <p>Status: {webhook.status}</p>
          </div>
        ))}
      <div>nao tem</div>
    </div>
  );
}

export default AdminControl;

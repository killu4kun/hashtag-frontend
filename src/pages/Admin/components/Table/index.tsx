import { useState } from 'react';

interface IWebhook {
  nome: string;
  email: string;
  status: string;
}

function ActionsTable({ webhooks }: { webhooks: IWebhook[] }) {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="container mx-auto mt-20 bg-blue-50 px-20">
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="py-3 pl-2">
            <div className="relative max-w-xs">
              <label htmlFor="hs-table-search" className="sr-only">
                Search
              </label>
              <input
                type="text"
                name="hs-table-search"
                id="hs-table-search"
                className="block w-full rounded-md border-gray-200 p-3 pl-10 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400"
                placeholder="Search..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="inline-block w-full p-1.5 align-middle">
          <div className="overflow-hidden rounded-lg border">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="py-3 pl-4">
                    <div className="flex h-5 items-center">
                      <input
                        id="checkbox-all"
                        type="checkbox"
                        className="rounded border-gray-200 text-blue-600 focus:ring-blue-500"
                      />
                      <label htmlFor="checkbox" className="sr-only">
                        Checkbox
                      </label>
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold uppercase text-gray-500 "
                  >
                    ID
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold uppercase text-gray-500 "
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold uppercase text-gray-500 "
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold uppercase text-gray-500 "
                  >
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {webhooks
                  .filter((webhook) =>
                    webhook.email
                      .toLowerCase()
                      .includes(searchValue.toLowerCase()),
                  )
                  .map((webhook, index) => (
                    <tr key={index}>
                      <td className="py-3 pl-4">
                        <div className="flex h-5 items-center">
                          <input
                            id="checkbox-1"
                            type="checkbox"
                            className="rounded border-gray-200 text-blue-600 focus:ring-blue-500"
                          />
                          <label htmlFor="checkbox" className="sr-only">
                            Checkbox
                          </label>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-6 py-3 text-left">
                        <div className="text-sm text-gray-900">{index + 1}</div>
                      </td>
                      <td className="whitespace-nowrap px-6 py-3 text-left">
                        <div className="text-sm text-gray-900">
                          {webhook.nome}
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-6 py-3 text-left">
                        <div className="text-sm text-gray-900">
                          {webhook.email}
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-6 py-3 text-left">
                        <div className="text-sm text-gray-900">
                          {webhook.status}
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActionsTable;

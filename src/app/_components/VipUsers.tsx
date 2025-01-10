"use client";

import React, { useState } from "react";
import { fetchVipUser } from "../api/fetchVipUser";
import { VipUser } from "../api/interfeces";

const VipUsers = () => {
  const [users, setUsers] = useState<VipUser[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleFetchUsers = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetchVipUser();
      setUsers(response);
    } catch (error) {
      setError(error instanceof Error ? error.message : "Erro desconhecido");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 className="text-center my-3 py-2 border border-r-transparent border-l-transparent  border-b-stone-950 border-t-stone-950">
        Lista de Usuários VIP
      </h1>
      <button
        onClick={handleFetchUsers}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Buscar Usuários VIP
      </button>

      {loading && <p>Carregando...</p>}
      {error && <p>{error}</p>}
      <div className=" overflow-auto">
        {users.length > 0 && (
          <table className="min-w-full border-collapse ">
            <thead>
              <tr>
                <th className="border px-4 py-2">#</th>
                <th className="border px-4 py-2">Nome</th>
                <th className="border px-4 py-2">Email</th>
                <th className="border px-4 py-2">WhatsApp</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user.id}>
                  <td className="border px-4 py-2">{index}</td>
                  <td className="border px-4 py-2">{user.nome}</td>
                  <td className="border px-4 py-2">{user.email}</td>
                  <td className="border px-4 py-2">{user.whatsApp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default VipUsers;

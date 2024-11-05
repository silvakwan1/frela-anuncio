import PromotionForm from "@/app/_components/PromotionForm";
import PromotionList from "@/app/_components/PromotionList";
import React from "react";

const AdminPage = () => {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-center mb-8">
        Administração de Promoções
      </h1>
      <PromotionForm />
      <PromotionList />
    </div>
  );
};

export default AdminPage;

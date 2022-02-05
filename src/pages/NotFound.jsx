import { useNavigate } from "react-router-dom";

export function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <h2 className="text-3xl text-slate-200 mb-4">
        Desculpe! Página não encontrada.
      </h2>
      <button
        className="hover:underline hover:text-emerald-400 text-slate-400"
        onClick={() => {
          navigate(-1);
        }}
      >
        Voltar para a página anterior.
      </button>
    </div>
  );
}

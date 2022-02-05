import { useNavigate, useLocation } from "react-router-dom";

export function Notifier() {
  const navigate = useNavigate();
  const { state } = useLocation();

  return (
    <div className="flex flex-1 items-center justify-center bg-transparent">
      <div className="flex flex-col justify-center items-center w-1/3 h-1/3 bg-slate-800 border border-slate-700 rounded-2xl shadow-xl">
        <h2 className="text-slate-200 text-2xl mb-6">{state.message}</h2>
        <button
          className="w-1/3 py-2 text-lg text-slate-200 bg-emerald-600 ring-1 ring-emerald-500 rounded-2xl shadow-sm"
          onClick={() => {
            navigate(state.path);
          }}
        >
          Ok
        </button>
      </div>
    </div>
  );
}

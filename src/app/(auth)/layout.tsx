import Brand from "@/components/common/Brand";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="grid min-h-screen w-full place-content-center bg-gradient-to-br from-[var(--gradient-blue-1)] from-0% via-[var(--gradient-blue-2)] via-[24%] to-[var(--gradient-blue-1)] to-100% p-5">
      <div className="mb-5 text-center">
        <Brand className="text-xl" />
      </div>
      <div className="w-[480px] max-w-[90vw] rounded-xl bg-foreground p-10 shadow-sm">
        {children}
      </div>
    </main>
  );
};

export default layout;

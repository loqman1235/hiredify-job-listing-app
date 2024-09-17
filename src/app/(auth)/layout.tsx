const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="grid h-screen w-full place-content-center bg-gradient-to-br from-[var(--gradient-blue-1)] from-0% via-[var(--gradient-blue-2)] via-[24%] to-[var(--gradient-blue-1)] to-100%">
      <div className="min-w-[480px] rounded-xl bg-foreground p-10 shadow-sm">
        {children}
      </div>
    </main>
  );
};

export default layout;

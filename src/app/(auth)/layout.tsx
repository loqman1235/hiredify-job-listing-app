const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="grid h-screen w-full place-content-center">
      <div className="min-w-[460px] rounded-xl bg-foreground p-5 shadow-xl">
        {children}
      </div>
    </main>
  );
};

export default layout;

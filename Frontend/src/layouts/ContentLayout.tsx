export default function ContentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="p-4 sm:ml-64">
      <nav>navbar</nav>
      {children}
    </div>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div>子レイアウト</div>
      {children}
    </div>
  );
}

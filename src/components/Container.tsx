type ContainerProps = {
  children: React.ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        backgroundColor: "wheat",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </div>
  );
}

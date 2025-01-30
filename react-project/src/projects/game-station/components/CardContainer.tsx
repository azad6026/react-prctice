interface CardContainerProps {
  children: React.ReactNode;
}

const CardContainer = ({ children }: CardContainerProps) => {
  return (
    <article style={{ width: "200px", borderRadius: "10px" }}>
      {children}
    </article>
  );
};

export default CardContainer;

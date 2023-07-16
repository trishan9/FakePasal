const Card = (props: any) => {
  return (
    <div class="bg-white p-4 flex flex-col justify-between gap-4 rounded-md shadow-md">{props.children}</div>
  );
};

export default Card;

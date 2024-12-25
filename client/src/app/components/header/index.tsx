type headerProps = {
  name: string;
};

const index = ({ name }: headerProps) => {
  return <h1 className="text-2xl font-semibold text-gray-700">{name}</h1>;
};

export default index;

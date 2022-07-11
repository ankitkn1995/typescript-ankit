/** @format */
interface IProps {
  name: string;
  messageCount: number;
  isLogedIn: boolean;
  type?: string;
}
export const Greet = (props: IProps) => {
  const { type = 0 } = props;
  return (
    <div>
      <h3>
        {props.isLogedIn
          ? `welcome typescript ${props.name} ${props.messageCount} ${props.type}`
          : "ankit"}
      </h3>
    </div>
  );
};

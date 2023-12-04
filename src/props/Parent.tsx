import { ChildAsFC } from "./Child";

const Parent = () => {
  return (
    <ChildAsFC color="red" onClick={() => console.log('clicked!')}>
      children text
    </ChildAsFC>
  );
};

export default Parent;

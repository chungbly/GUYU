import { Button, ButtonProps } from "../ui/button";

function LoadingButton(props: ButtonProps & { loading: boolean }) {
  return (
    <Button {...props}>
      {props.loading && <span className="mr-2 h-4 w-4 animate-spin" />}
      {props.children}
    </Button>
  );
}

export default LoadingButton;

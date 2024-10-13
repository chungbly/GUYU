import { Loader2 } from 'lucide-react';
import { Button, ButtonProps } from '../ui/button';

function LoadingButton(props: ButtonProps & { loading: boolean }) {
  const { loading, ...rest } = props;
  return (
    <Button {...rest}>
      {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {props.children}
    </Button>
  );
}

export default LoadingButton;
